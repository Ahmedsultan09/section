"use client";

import { useMemo, useRef, useState } from "react";
import { capabilities } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";

type Values = {
  name: string;
  phone: string;
  selectedCapabilities: string[];
  serviceScope: string[];
  projectStage: string;
  brief: string;
  consent: boolean;
  website: string;
};

const initialValues: Values = {
  name: "", phone: "", selectedCapabilities: [], serviceScope: [], projectStage: "", brief: "", consent: false, website: "",
};

const labels = {
  en: {
    step: "Step", back: "Back", next: "Next", submit: "Send inquiry", sending: "Sending…",
    headings: ["What are you looking for?", "How can we help?", "Where are you in the project?", "Anything else?", "How do we reach you?"],
    intros: ["Choose one or more areas. If you are still exploring, choose I’m not sure yet.", "Select every part of the work you would like SECTION to support.", "A rough answer is enough. We can help shape the next step.", "Tell us what is on your mind. This part is optional.", "Just two details and we will get back to you."],
    required: "Choose an option before continuing.", contactRequired: "Add your name, phone number and consent before sending.", fileError: "Choose up to three PDF or image files, no larger than 10 MB each.", submitError: "We could not send the inquiry. Your answers are still here—please try again.",
    briefLabel: "Tell us anything you want us to know", briefPlaceholder: "A room, a development, a deadline, a sketch, a question…", filesLabel: "Drawings or references — optional", chooseFiles: "Add up to 3 files", consent: "I agree that SECTION can use these details to review my inquiry and contact me about the project.",
    successTitle: "We have your inquiry.", successBody: "A member of the SECTION team will review it and contact you soon.", another: "Start another inquiry", notSure: "I’m not sure yet", focusEyebrow: "Project element", scopeEyebrow: "SECTION support", stageEyebrow: "Project stage",
    scope: { design: "Design & develop", manufacture: "Manufacture", install: "Installation", full: "Full package" },
    stage: { exploring: "Just exploring", brief: "I have a brief", drawings: "Drawings are ready", site: "Ready for site", unsure: "I’m not sure yet" },
  },
  ar: {
    step: "الخطوة", back: "رجوع", next: "التالي", submit: "إرسال الاستفسار", sending: "جارٍ الإرسال…",
    headings: ["ماذا تحتاج؟", "كيف نساعدك؟", "في أي مرحلة مشروعك؟", "هل تريد إضافة شيء؟", "كيف نتواصل معك؟"],
    intros: ["اختر عنصراً أو أكثر. إذا كنت ما زلت تستكشف، اختر لست متأكداً بعد.", "اختر كل جزء من العمل تريد من SECTION دعمه.", "إجابة تقريبية تكفي. يمكننا مساعدتك في تحديد الخطوة التالية.", "اكتب ما يدور في ذهنك. هذه الخطوة اختيارية.", "تفصيلان فقط وسنتواصل معك."],
    required: "اختر إجابة قبل المتابعة.", contactRequired: "أدخل الاسم ورقم الهاتف والموافقة قبل الإرسال.", fileError: "اختر حتى 3 ملفات PDF أو صور، بحد أقصى 10 ميجابايت للملف.", submitError: "تعذر إرسال الاستفسار. إجاباتك ما زالت محفوظة، حاول مرة أخرى.",
    briefLabel: "اكتب أي شيء تريد أن نعرفه", briefPlaceholder: "غرفة، مشروع، موعد، رسم، أو سؤال…", filesLabel: "رسومات أو مراجع — اختياري", chooseFiles: "أضف حتى 3 ملفات", consent: "أوافق على استخدام SECTION لهذه البيانات لمراجعة الاستفسار والتواصل معي بخصوص المشروع.",
    successTitle: "وصلنا استفسارك.", successBody: "سيراجعه أحد أعضاء فريق SECTION وسيتواصل معك قريباً.", another: "ابدأ استفساراً جديداً", notSure: "لست متأكداً بعد", focusEyebrow: "عنصر المشروع", scopeEyebrow: "دعم SECTION", stageEyebrow: "مرحلة المشروع",
    scope: { design: "تصميم وتطوير", manufacture: "تصنيع", install: "تركيب", full: "حزمة كاملة" },
    stage: { exploring: "ما زلت أستكشف", brief: "لدي متطلبات", drawings: "الرسومات جاهزة", site: "جاهز للموقع", unsure: "لست متأكداً بعد" },
  },
};

type Copy = (typeof labels)[Locale];
type CardOption = { value: string; title: string; detail?: string };
type FormProps = { locale: Locale };

export function InquiryForm({ locale }: FormProps) {
  const t = labels[locale];
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(initialValues);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const progress = useMemo(() => `${((step + 1) / 5) * 100}%`, [step]);

  const update = <K extends keyof Values>(key: K, value: Values[K]) => setValues((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const valid = step === 0 ? values.selectedCapabilities.length > 0 : step === 1 ? values.serviceScope.length > 0 : step === 2 ? Boolean(values.projectStage) : step === 4 ? Boolean(values.name.trim() && values.phone.trim() && values.consent) : true;
    if (!valid) setError(step === 4 ? t.contactRequired : t.required);
    else setError("");
    return valid;
  };
  const next = () => { if (validate()) setStep((current) => Math.min(4, current + 1)); };
  const toggle = (key: "selectedCapabilities" | "serviceScope", value: string) => {
    const current = values[key];
    const next = value === "not-sure-yet"
      ? (current.includes(value) ? [] : [value])
      : (current.includes(value) ? current.filter((item) => item !== value) : [...current.filter((item) => item !== "not-sure-yet"), value]);
    update(key, next);
  };
  const onFiles = (list: FileList | null) => {
    const chosen = Array.from(list ?? []);
    const allowed = ["application/pdf", "image/jpeg", "image/png", "image/webp"];
    if (chosen.length > 3 || chosen.some((file) => file.size > 10 * 1024 * 1024 || !allowed.includes(file.type))) { setError(t.fileError); setFiles([]); return; }
    setError(""); setFiles(chosen);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate() || status === "sending") return;
    setStatus("sending"); setError("");
    const data = new FormData();
    data.append("name", values.name.trim());
    data.append("phone", values.phone.trim());
    data.append("capabilities", JSON.stringify(values.selectedCapabilities.length ? values.selectedCapabilities : ["not-sure-yet"]));
    data.append("serviceScope", JSON.stringify(values.serviceScope.length ? values.serviceScope : ["not-sure-yet"]));
    data.append("projectStage", values.projectStage || "not-sure-yet");
    data.append("brief", values.brief.trim());
    data.append("consent", String(values.consent));
    data.append("website", values.website);
    data.append("locale", locale);
    files.forEach((file) => data.append("files", file));
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: data });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
    } catch { setStatus("idle"); setError(t.submitError); }
  };

  if (status === "sent") return <section className="inquiry-success" aria-live="polite"><span>✓</span><p>SECTION / {locale === "ar" ? "تم الاستلام" : "Received"}</p><h2>{t.successTitle}</h2><p>{t.successBody}</p><button onClick={() => { setValues(initialValues); setFiles([]); setStep(0); setStatus("idle"); }}>{t.another}</button></section>;

  return <form className="inquiry-form" ref={formRef} onSubmit={submit} noValidate>
    <div className="form-progress"><span style={{ width: progress }} /></div>
    <header className="form-heading"><p>{t.step} {step + 1} / 5</p><h2>{t.headings[step]}</h2><span>{t.intros[step]}</span></header>
    <input aria-hidden="true" className="honeypot" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
    <div className="form-stage" key={step}>
      {step === 0 && <ChoiceStep eyebrow={t.focusEyebrow} options={[...capabilities.map((item) => ({ value: item.slug, title: item.title[locale], detail: item.short[locale] })), { value: "not-sure-yet", title: t.notSure, detail: locale === "ar" ? "سنساعدك في تحديد الاتجاه." : "We can help shape the direction." }]} selected={values.selectedCapabilities} onToggle={(value) => toggle("selectedCapabilities", value)} multiple />}
      {step === 1 && <ChoiceStep eyebrow={t.scopeEyebrow} options={[{ value: "design-development", title: t.scope.design }, { value: "manufacture", title: t.scope.manufacture }, { value: "installation", title: t.scope.install }, { value: "full-package", title: t.scope.full }, { value: "not-sure-yet", title: t.notSure }]} selected={values.serviceScope} onToggle={(value) => toggle("serviceScope", value)} multiple />}
      {step === 2 && <ChoiceStep eyebrow={t.stageEyebrow} options={[{ value: "exploring", title: t.stage.exploring }, { value: "brief-ready", title: t.stage.brief }, { value: "drawings-ready", title: t.stage.drawings }, { value: "site-ready", title: t.stage.site }, { value: "not-sure-yet", title: t.stage.unsure }]} selected={values.projectStage ? [values.projectStage] : []} onToggle={(value) => update("projectStage", value)} />}
      {step === 3 && <BriefStep copy={t} values={values} update={update} files={files} onFiles={onFiles} />}
      {step === 4 && <ContactStep locale={locale} copy={t} values={values} update={update} />}
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <div className="form-actions"><button type="button" className="button-ghost" onClick={() => { setError(""); setStep((current) => Math.max(0, current - 1)); }} disabled={step === 0}>{t.back}</button>{step < 4 ? <button type="button" className="button-primary" onClick={next}>{t.next}<span>→</span></button> : <button type="submit" className="button-primary" disabled={status === "sending"}>{status === "sending" ? t.sending : t.submit}<span>↗</span></button>}</div>
  </form>;
}

function ChoiceStep({ eyebrow, options, selected, onToggle, multiple = false }: { eyebrow: string; options: CardOption[]; selected: string[]; onToggle: (value: string) => void; multiple?: boolean }) {
  return <fieldset className="choice-field"><legend>{eyebrow}</legend><div className="choice-grid">{options.map((option, index) => <button type="button" className={`choice-card ${selected.includes(option.value) ? "selected" : ""}`} key={option.value} aria-pressed={selected.includes(option.value)} onClick={() => onToggle(option.value)}><span className="choice-index">{String(index + 1).padStart(2, "0")}</span><strong>{option.title}</strong>{option.detail && <small>{option.detail}</small>}<i aria-hidden="true">{selected.includes(option.value) ? "✓" : multiple ? "+" : "↗"}</i></button>)}</div></fieldset>;
}

function BriefStep({ copy, values, update, files, onFiles }: { copy: Copy; values: Values; update: <K extends keyof Values>(key: K, value: Values[K]) => void; files: File[]; onFiles: (list: FileList | null) => void }) {
  return <div className="brief-step"><label className="field wide"><span>{copy.briefLabel}</span><textarea rows={6} value={values.brief} onChange={(event) => update("brief", event.target.value)} placeholder={copy.briefPlaceholder} /></label><div className="field wide"><span>{copy.filesLabel}</span><div className="file-drop"><input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={(event) => onFiles(event.target.files)} /><strong>{copy.chooseFiles}</strong><span>PDF · JPG · PNG · WEBP / 10 MB</span></div>{files.length > 0 && <ul className="file-list">{files.map((file) => <li key={`${file.name}-${file.size}`}>{file.name}<span>{(file.size / 1024 / 1024).toFixed(1)} MB</span></li>)}</ul>}</div></div>;
}

function ContactStep({ locale, copy, values, update }: { locale: Locale; copy: Copy; values: Values; update: <K extends keyof Values>(key: K, value: Values[K]) => void }) {
  return <div className="contact-step"><div className="field-grid"><label className="field"><span>{locale === "ar" ? "الاسم *" : "Name *"}</span><input value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" /></label><label className="field"><span>{locale === "ar" ? "رقم الهاتف *" : "Phone number *"}</span><input type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" /></label></div><label className="consent"><input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} /><span>{copy.consent} *</span></label></div>;
}
