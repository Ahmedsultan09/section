"use client";

import { useState } from "react";
import { capabilities } from "@/lib/site-content";
import type { Locale, ProjectReadiness } from "@/lib/site-types";

type Values = {
  name: string;
  phone: string;
  selectedCapabilities: string[];
  projectReadiness?: ProjectReadiness;
  brief: string;
  consent: boolean;
  website: string;
};

const initialValues: Values = {
  name: "",
  phone: "",
  selectedCapabilities: [],
  brief: "",
  consent: false,
  website: "",
};

const labels = {
  en: {
    step: "Step", back: "Back", next: "Next", submit: "Send inquiry", sending: "Sending…",
    headings: ["What are you looking for?", "How ready is the project?", "Share your brief", "How do we reach you?"],
    intros: ["Choose one or more areas.", "Choose the answer that best matches where you are today.", "Add any useful context. This step is explicitly optional.", "Add your name and phone, then confirm consent."],
    required: "Choose an option before continuing.",
    contactRequired: "Add your name, phone number and consent before sending.",
    submitError: "We could not send the inquiry. Your answers are still here—please try again.",
    briefLabel: "Project brief (optional)",
    briefHint: "Leave this empty if you would rather shape the direction with us.",
    consent: "I agree that SECTION can use these details to review my inquiry and contact me about the project.",
    successTitle: "We have your inquiry.",
    successBody: "A member of the SECTION team will review it and contact you soon.",
    another: "Start another inquiry",
    notSure: "I’m not sure yet",
    focusEyebrow: "Project element",
    readinessEyebrow: "Project readiness",
    readiness: {
      brief: "I have a brief",
      briefDetail: "The direction or requirements are ready to share.",
      ideas: "I need ideas",
      ideasDetail: "I would like SECTION to help shape the direction.",
    },
  },
  ar: {
    step: "الخطوة", back: "رجوع", next: "التالي", submit: "إرسال الاستفسار", sending: "جارٍ الإرسال…",
    headings: ["ماذا تحتاج؟", "ما مدى جاهزية المشروع؟", "شارك موجز المشروع", "كيف نتواصل معك؟"],
    intros: ["اختر عنصراً أو أكثر.", "اختر الإجابة الأقرب إلى وضع مشروعك اليوم.", "أضف أي تفاصيل مفيدة. هذه الخطوة اختيارية بوضوح.", "أدخل الاسم ورقم الهاتف ثم أكد الموافقة."],
    required: "اختر إجابة قبل المتابعة.",
    contactRequired: "أدخل الاسم ورقم الهاتف والموافقة قبل الإرسال.",
    submitError: "تعذر إرسال الاستفسار. إجاباتك ما زالت محفوظة، حاول مرة أخرى.",
    briefLabel: "موجز المشروع (اختياري)",
    briefHint: "اتركه فارغاً إذا كنت تفضل أن نحدد الاتجاه معاً.",
    consent: "أوافق على استخدام SECTION لهذه البيانات لمراجعة الاستفسار والتواصل معي بخصوص المشروع.",
    successTitle: "وصلنا استفسارك.",
    successBody: "سيراجعه أحد أعضاء فريق SECTION وسيتواصل معك قريباً.",
    another: "ابدأ استفساراً جديداً",
    notSure: "لست متأكداً بعد",
    focusEyebrow: "عنصر المشروع",
    readinessEyebrow: "جاهزية المشروع",
    readiness: {
      brief: "لدي موجز",
      briefDetail: "الاتجاه أو المتطلبات جاهزة للمشاركة.",
      ideas: "أحتاج إلى أفكار",
      ideasDetail: "أريد مساعدة SECTION في تحديد الاتجاه.",
    },
  },
};

type Copy = (typeof labels)[Locale];
type CardOption = { value: string; title: string; detail?: string };

export function InquiryForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(initialValues);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const progress = `${((step + 1) / 4) * 100}%`;

  const update = <K extends keyof Values>(key: K, value: Values[K]) => setValues((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const valid = step === 0
      ? values.selectedCapabilities.length > 0
      : step === 1
        ? Boolean(values.projectReadiness)
        : step === 3
          ? Boolean(values.name.trim() && values.phone.trim() && values.consent)
          : true;
    setError(valid ? "" : step === 3 ? t.contactRequired : t.required);
    return valid;
  };
  const next = () => { if (validate()) setStep((current) => Math.min(3, current + 1)); };
  const toggleCapability = (value: string) => {
    const current = values.selectedCapabilities;
    const nextValue = value === "not-sure-yet"
      ? (current.includes(value) ? [] : [value])
      : (current.includes(value) ? current.filter((item) => item !== value) : [...current.filter((item) => item !== "not-sure-yet"), value]);
    update("selectedCapabilities", nextValue);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate() || status === "sending") return;
    setStatus("sending");
    setError("");
    const data = new FormData();
    data.append("name", values.name.trim());
    data.append("phone", values.phone.trim());
    data.append("capabilities", JSON.stringify(values.selectedCapabilities));
    data.append("projectReadiness", values.projectReadiness ?? "");
    data.append("brief", values.brief.trim());
    data.append("consent", String(values.consent));
    data.append("website", values.website);
    data.append("locale", locale);
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: data });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(t.submitError);
    }
  };

  if (status === "sent") return <section className="inquiry-success" aria-live="polite"><span>✓</span><p>SECTION / {locale === "ar" ? "تم الاستلام" : "Received"}</p><h2>{t.successTitle}</h2><p>{t.successBody}</p><button onClick={() => { setValues(initialValues); setStep(0); setStatus("idle"); }}>{t.another}</button></section>;

  return <form className="inquiry-form" onSubmit={submit} noValidate>
    <div className="form-progress"><span style={{ width: progress }} /></div>
    <header className="form-heading"><p>{t.step} {step + 1} / 4</p><h2>{t.headings[step]}</h2><span>{t.intros[step]}</span></header>
    <input aria-hidden="true" className="honeypot" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
    <div className="form-stage" key={step}>
      {step === 0 && <ChoiceStep eyebrow={t.focusEyebrow} options={[...capabilities.map((item) => ({ value: item.slug, title: item.title[locale], detail: item.short[locale] })), { value: "not-sure-yet", title: t.notSure }]} selected={values.selectedCapabilities} onSelect={toggleCapability} multiple error={error} />}
      {step === 1 && <ChoiceStep eyebrow={t.readinessEyebrow} options={[{ value: "has-brief", title: t.readiness.brief, detail: t.readiness.briefDetail }, { value: "needs-ideas", title: t.readiness.ideas, detail: t.readiness.ideasDetail }]} selected={values.projectReadiness ? [values.projectReadiness] : []} onSelect={(value) => update("projectReadiness", value as ProjectReadiness)} error={error} />}
      {step === 2 && <BriefStep copy={t} values={values} update={update} />}
      {step === 3 && <ContactStep locale={locale} copy={t} values={values} update={update} />}
    </div>
    <div className="form-action-area">
      {error && step === 3 && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions">
        <button type="button" className="button-ghost" onClick={() => { setError(""); setStep((current) => Math.max(0, current - 1)); }} disabled={step === 0}>{t.back}</button>
        {step < 3
          ? <button type="button" className="button-primary" onClick={next}>{t.next}<span>→</span></button>
          : <button type="submit" className="button-primary" disabled={status === "sending"}>{status === "sending" ? t.sending : t.submit}<span>↗</span></button>}
      </div>
    </div>
  </form>;
}

function ChoiceStep({ eyebrow, options, selected, onSelect, multiple = false, error }: { eyebrow: string; options: CardOption[]; selected: string[]; onSelect: (value: string) => void; multiple?: boolean; error?: string }) {
  return <fieldset className="choice-field" aria-describedby={error ? "choice-error" : undefined}><legend>{eyebrow}</legend><div className="choice-grid">{options.map((option, index) => <button type="button" data-value={option.value} className={`choice-card ${selected.includes(option.value) ? "selected" : ""}`} key={option.value} aria-pressed={selected.includes(option.value)} onClick={() => onSelect(option.value)}><span className="choice-index">{String(index + 1).padStart(2, "0")}</span><strong>{option.title}</strong>{option.detail && <small>{option.detail}</small>}<i aria-hidden="true">{selected.includes(option.value) ? "✓" : multiple ? "+" : "○"}</i></button>)}</div>{error && <p className="form-error choice-error" id="choice-error" role="alert">{error}</p>}</fieldset>;
}

function BriefStep({ copy, values, update }: { copy: Copy; values: Values; update: <K extends keyof Values>(key: K, value: Values[K]) => void }) {
  return <div className="brief-step"><label className="field wide"><span>{copy.briefLabel}</span><textarea rows={6} value={values.brief} onChange={(event) => update("brief", event.target.value)} /><small>{copy.briefHint}</small></label></div>;
}

function ContactStep({ locale, copy, values, update }: { locale: Locale; copy: Copy; values: Values; update: <K extends keyof Values>(key: K, value: Values[K]) => void }) {
  return <div className="contact-step"><div className="field-grid"><label className="field"><span>{locale === "ar" ? "الاسم *" : "Name *"}</span><input value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required /></label><label className="field"><span>{locale === "ar" ? "رقم الهاتف *" : "Phone number *"}</span><input type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" required /></label></div><label className="consent"><input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} required /><span>{copy.consent} *</span></label></div>;
}
