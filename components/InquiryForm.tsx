"use client";

import { useState } from "react";
import { capabilities } from "@/lib/site-content";
import type { Locale, ProjectReadiness } from "@/lib/site-types";

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const photoExtensions = new Set(["jpg", "jpeg", "png", "webp"]);
const cadExtensions = new Set(["dwg", "dxf", "step", "stp", "skp", "3dm"]);

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
    step: "Step", back: "Back", next: "Next", skip: "Skip / Next", optional: "Optional", submit: "Send inquiry", sending: "Sending…",
    headings: ["What are you looking for?", "How ready is the project?", "Share your brief", "How do we reach you?"],
    intros: ["Choose one or more areas.", "Choose the answer that best matches where you are today.", "Add any useful context. This step is explicitly optional.", "Add your name and phone, then confirm consent."],
    required: "Choose an option before continuing.",
    contactRequired: "Add your name, phone number and consent before sending.",
    submitError: "We could not send the inquiry. Your answers are still here—please try again.",
    briefLabel: "Project brief",
    briefHint: "Leave this empty if you would rather shape the direction with us.",
    photosLabel: "Project photos", cadLabel: "CAD drawings", filesHint: "Optional · up to 3 files per group · 10 MB each", removeFile: "Remove", fileError: "Choose up to 3 valid files per group, no larger than 10 MB each.", dismissFileError: "Continue without those files",
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
    step: "الخطوة", back: "رجوع", next: "التالي", skip: "تخطِ / التالي", optional: "اختياري", submit: "إرسال الاستفسار", sending: "جارٍ الإرسال…",
    headings: ["ماذا تحتاج؟", "ما مدى جاهزية المشروع؟", "شارك موجز المشروع", "كيف نتواصل معك؟"],
    intros: ["اختر عنصراً أو أكثر.", "اختر الإجابة الأقرب إلى وضع مشروعك اليوم.", "أضف أي تفاصيل مفيدة. هذه الخطوة اختيارية بوضوح.", "أدخل الاسم ورقم الهاتف ثم أكد الموافقة."],
    required: "اختر إجابة قبل المتابعة.",
    contactRequired: "أدخل الاسم ورقم الهاتف والموافقة قبل الإرسال.",
    submitError: "تعذر إرسال الاستفسار. إجاباتك ما زالت محفوظة، حاول مرة أخرى.",
    briefLabel: "موجز المشروع",
    briefHint: "اتركه فارغاً إذا كنت تفضل أن نحدد الاتجاه معاً.",
    photosLabel: "صور المشروع", cadLabel: "رسومات CAD", filesHint: "اختياري · حتى ٣ ملفات لكل مجموعة · ١٠ ميجابايت لكل ملف", removeFile: "إزالة", fileError: "اختر حتى ٣ ملفات صالحة لكل مجموعة، بحجم لا يتجاوز ١٠ ميجابايت لكل ملف.", dismissFileError: "المتابعة دون هذه الملفات",
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
  const [photos, setPhotos] = useState<File[]>([]);
  const [cadFiles, setCadFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const progress = `${((step + 1) / 4) * 100}%`;

  const update = <K extends keyof Values>(key: K, value: Values[K]) => setValues((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const valid = step === 0
      ? values.selectedCapabilities.length > 0
      : step === 1
        ? Boolean(values.projectReadiness)
        : step === 2
          ? !fileError
        : step === 3
          ? Boolean(values.name.trim() && values.phone.trim() && values.consent)
          : true;
    setError(valid ? "" : step === 3 ? t.contactRequired : step === 2 ? t.fileError : t.required);
    return valid;
  };
  const next = () => { if (validate()) setStep((current) => Math.min(3, current + 1)); };
  const addFiles = (kind: "photo" | "cad", selected: FileList | null) => {
    if (!selected?.length) return;
    const current = kind === "photo" ? photos : cadFiles;
    const extensions = kind === "photo" ? photoExtensions : cadExtensions;
    const added = Array.from(selected);
    if (current.length + added.length > 3 || added.some((file) => !file.size || file.size > MAX_FILE_BYTES || !extensions.has(file.name.split(".").pop()?.toLowerCase() ?? ""))) {
      setFileError(t.fileError);
      return;
    }
    (kind === "photo" ? setPhotos : setCadFiles)([...current, ...added]);
    setFileError("");
  };
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
    photos.forEach((file) => data.append("photos", file));
    cadFiles.forEach((file) => data.append("cadFiles", file));
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: data });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        if (result?.code === "invalid_files" || response.status === 413) {
          setStep(2);
          setFileError(t.fileError);
          setStatus("idle");
          return;
        }
        throw new Error("request failed");
      }
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(t.submitError);
    }
  };

  if (status === "sent") return <section className="inquiry-success" aria-live="polite"><span>✓</span><p>SECTION / {locale === "ar" ? "تم الاستلام" : "Received"}</p><h2>{t.successTitle}</h2><p>{t.successBody}</p><button onClick={() => { setValues(initialValues); setPhotos([]); setCadFiles([]); setFileError(""); setStep(0); setStatus("idle"); }}>{t.another}</button></section>;

  return <form className="inquiry-form" onSubmit={submit} noValidate>
    <div className="form-progress"><span style={{ width: progress }} /></div>
    <div className="form-action-area">
      {error && step === 3 && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions">
        <button type="button" className="button-ghost" onClick={() => { setError(""); setStep((current) => Math.max(0, current - 1)); }} disabled={step === 0}>{t.back}</button>
        {step < 3
          ? <button type="button" className="button-primary" onClick={next}>{step === 2 ? t.skip : t.next}<span>→</span></button>
          : <button type="submit" className="button-primary" disabled={status === "sending"}>{status === "sending" ? t.sending : t.submit}<span>↗</span></button>}
      </div>
    </div>
    <header className="form-heading"><p>{t.step} {step + 1} / 4</p><h2>{t.headings[step]}{step === 2 && <mark className="optional-badge">{t.optional}</mark>}</h2><span>{t.intros[step]}</span></header>
    <input aria-hidden="true" className="honeypot" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
    <div className="form-stage" key={step}>
      {step === 0 && <ChoiceStep eyebrow={t.focusEyebrow} options={[...capabilities.map((item) => ({ value: item.slug, title: item.title[locale], detail: item.short[locale] })), { value: "not-sure-yet", title: t.notSure }]} selected={values.selectedCapabilities} onSelect={toggleCapability} multiple error={error} />}
      {step === 1 && <ChoiceStep eyebrow={t.readinessEyebrow} options={[{ value: "has-brief", title: t.readiness.brief, detail: t.readiness.briefDetail }, { value: "needs-ideas", title: t.readiness.ideas, detail: t.readiness.ideasDetail }]} selected={values.projectReadiness ? [values.projectReadiness] : []} onSelect={(value) => update("projectReadiness", value as ProjectReadiness)} error={error} />}
      {step === 2 && <BriefStep copy={t} values={values} update={update} photos={photos} cadFiles={cadFiles} fileError={fileError} addFiles={addFiles} clearFileError={() => { setPhotos([]); setCadFiles([]); setFileError(""); }} removeFile={(kind, index) => { (kind === "photo" ? setPhotos : setCadFiles)((current) => current.filter((_, itemIndex) => itemIndex !== index)); setFileError(""); }} />}
      {step === 3 && <ContactStep locale={locale} copy={t} values={values} update={update} />}
    </div>
  </form>;
}

function ChoiceStep({ eyebrow, options, selected, onSelect, multiple = false, error }: { eyebrow: string; options: CardOption[]; selected: string[]; onSelect: (value: string) => void; multiple?: boolean; error?: string }) {
  return <fieldset className="choice-field" aria-describedby={error ? "choice-error" : undefined}><legend>{eyebrow}</legend><div className="choice-grid">{options.map((option, index) => <button type="button" data-value={option.value} className={`choice-card ${selected.includes(option.value) ? "selected" : ""}`} key={option.value} aria-pressed={selected.includes(option.value)} onClick={() => onSelect(option.value)}><span className="choice-index">{String(index + 1).padStart(2, "0")}</span><strong>{option.title}</strong>{option.detail && <small>{option.detail}</small>}<i aria-hidden="true">{selected.includes(option.value) ? "✓" : multiple ? "+" : "○"}</i></button>)}</div>{error && <p className="form-error choice-error" id="choice-error" role="alert">{error}</p>}</fieldset>;
}

function BriefStep({ copy, values, update, photos, cadFiles, fileError, addFiles, clearFileError, removeFile }: { copy: Copy; values: Values; update: <K extends keyof Values>(key: K, value: Values[K]) => void; photos: File[]; cadFiles: File[]; fileError: string; addFiles: (kind: "photo" | "cad", selected: FileList | null) => void; clearFileError: () => void; removeFile: (kind: "photo" | "cad", index: number) => void }) {
  return <div className="brief-step"><label className="field wide"><span>{copy.briefLabel} <mark className="field-optional">{copy.optional}</mark></span><textarea rows={6} value={values.brief} onChange={(event) => update("brief", event.target.value)} /><small>{copy.briefHint}</small></label><div className="inquiry-file-grid"><FilePicker kind="photo" label={copy.photosLabel} files={photos} copy={copy} accept=".jpg,.jpeg,.png,.webp" addFiles={addFiles} removeFile={removeFile} /><FilePicker kind="cad" label={copy.cadLabel} files={cadFiles} copy={copy} accept=".dwg,.dxf,.step,.stp,.skp,.3dm" addFiles={addFiles} removeFile={removeFile} /></div>{fileError && <div><p className="form-error" role="alert">{fileError}</p><button className="inquiry-file-dismiss" type="button" onClick={clearFileError}>{copy.dismissFileError}</button></div>}</div>;
}

function FilePicker({ kind, label, files, copy, accept, addFiles, removeFile }: { kind: "photo" | "cad"; label: string; files: File[]; copy: Copy; accept: string; addFiles: (kind: "photo" | "cad", selected: FileList | null) => void; removeFile: (kind: "photo" | "cad", index: number) => void }) {
  return <div className="inquiry-file-picker"><label><span>{label} <mark className="field-optional">{copy.optional}</mark></span><input type="file" accept={accept} multiple onChange={(event) => { addFiles(kind, event.currentTarget.files); event.currentTarget.value = ""; }} /></label><small>{copy.filesHint}</small>{files.length > 0 && <ul>{files.map((file, index) => <li key={`${file.name}-${index}`}><span title={file.name}>{file.name} · {(file.size / 1024 / 1024).toFixed(1)} MB</span><button type="button" onClick={() => removeFile(kind, index)} aria-label={`${copy.removeFile} ${file.name}`}>{copy.removeFile}</button></li>)}</ul>}</div>;
}

function ContactStep({ locale, copy, values, update }: { locale: Locale; copy: Copy; values: Values; update: <K extends keyof Values>(key: K, value: Values[K]) => void }) {
  return <div className="contact-step"><div className="field-grid"><label className="field"><span>{locale === "ar" ? "الاسم *" : "Name *"}</span><input value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required /></label><label className="field"><span>{locale === "ar" ? "رقم الهاتف *" : "Phone number *"}</span><input type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" required /></label></div><label className="consent"><input type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} required /><span>{copy.consent} *</span></label></div>;
}
