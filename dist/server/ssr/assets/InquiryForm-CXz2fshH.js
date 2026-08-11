import { T as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
import { t as capabilities } from "./site-content-MmECORKg.js";
//#region components/InquiryForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var initialValues = {
	name: "",
	phone: "",
	selectedCapabilities: [],
	brief: "",
	consent: false,
	website: ""
};
var labels = {
	en: {
		step: "Step",
		back: "Back",
		next: "Next",
		skip: "Skip / Next",
		optional: "Optional",
		submit: "Send inquiry",
		sending: "Sending…",
		headings: [
			"What are you looking for?",
			"How ready is the project?",
			"Share your brief",
			"How do we reach you?"
		],
		intros: [
			"Choose one or more areas.",
			"Choose the answer that best matches where you are today.",
			"Add any useful context. This step is explicitly optional.",
			"Add your name and phone, then confirm consent."
		],
		required: "Choose an option before continuing.",
		contactRequired: "Add your name, phone number and consent before sending.",
		submitError: "We could not send the inquiry. Your answers are still here—please try again.",
		briefLabel: "Project brief",
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
			ideasDetail: "I would like SECTION to help shape the direction."
		}
	},
	ar: {
		step: "الخطوة",
		back: "رجوع",
		next: "التالي",
		skip: "تخطِ / التالي",
		optional: "اختياري",
		submit: "إرسال الاستفسار",
		sending: "جارٍ الإرسال…",
		headings: [
			"ماذا تحتاج؟",
			"ما مدى جاهزية المشروع؟",
			"شارك موجز المشروع",
			"كيف نتواصل معك؟"
		],
		intros: [
			"اختر عنصراً أو أكثر.",
			"اختر الإجابة الأقرب إلى وضع مشروعك اليوم.",
			"أضف أي تفاصيل مفيدة. هذه الخطوة اختيارية بوضوح.",
			"أدخل الاسم ورقم الهاتف ثم أكد الموافقة."
		],
		required: "اختر إجابة قبل المتابعة.",
		contactRequired: "أدخل الاسم ورقم الهاتف والموافقة قبل الإرسال.",
		submitError: "تعذر إرسال الاستفسار. إجاباتك ما زالت محفوظة، حاول مرة أخرى.",
		briefLabel: "موجز المشروع",
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
			ideasDetail: "أريد مساعدة SECTION في تحديد الاتجاه."
		}
	}
};
function InquiryForm({ locale }) {
	const t = labels[locale];
	const [step, setStep] = (0, import_react.useState)(0);
	const [values, setValues] = (0, import_react.useState)(initialValues);
	const [error, setError] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const progress = `${(step + 1) / 4 * 100}%`;
	const update = (key, value) => setValues((current) => ({
		...current,
		[key]: value
	}));
	const validate = () => {
		const valid = step === 0 ? values.selectedCapabilities.length > 0 : step === 1 ? Boolean(values.projectReadiness) : step === 3 ? Boolean(values.name.trim() && values.phone.trim() && values.consent) : true;
		setError(valid ? "" : step === 3 ? t.contactRequired : t.required);
		return valid;
	};
	const next = () => {
		if (validate()) setStep((current) => Math.min(3, current + 1));
	};
	const toggleCapability = (value) => {
		const current = values.selectedCapabilities;
		update("selectedCapabilities", value === "not-sure-yet" ? current.includes(value) ? [] : [value] : current.includes(value) ? current.filter((item) => item !== value) : [...current.filter((item) => item !== "not-sure-yet"), value]);
	};
	const submit = async (event) => {
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
			if (!(await fetch("/api/inquiries", {
				method: "POST",
				body: data
			})).ok) throw new Error("request failed");
			setStatus("sent");
		} catch {
			setStatus("idle");
			setError(t.submitError);
		}
	};
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "inquiry-success",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✓" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["SECTION / ", locale === "ar" ? "تم الاستلام" : "Received"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.successTitle }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.successBody }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setValues(initialValues);
					setStep(0);
					setStatus("idle");
				},
				children: t.another
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "inquiry-form",
		onSubmit: submit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "form-progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: progress } })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-action-area",
				children: [error && step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-error",
					role: "alert",
					children: error
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "form-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "button-ghost",
						onClick: () => {
							setError("");
							setStep((current) => Math.max(0, current - 1));
						},
						disabled: step === 0,
						children: t.back
					}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "button-primary",
						onClick: next,
						children: [step === 2 ? t.skip : t.next, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "button-primary",
						disabled: status === "sending",
						children: [status === "sending" ? t.sending : t.submit, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "form-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						t.step,
						" ",
						step + 1,
						" / 4"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [t.headings[step], step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
						className: "optional-badge",
						children: t.optional
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.intros[step] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-hidden": "true",
				className: "honeypot",
				name: "website",
				tabIndex: -1,
				autoComplete: "off",
				value: values.website,
				onChange: (event) => update("website", event.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-stage",
				children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceStep, {
						eyebrow: t.focusEyebrow,
						options: [...capabilities.map((item) => ({
							value: item.slug,
							title: item.title[locale],
							detail: item.short[locale]
						})), {
							value: "not-sure-yet",
							title: t.notSure
						}],
						selected: values.selectedCapabilities,
						onSelect: toggleCapability,
						multiple: true,
						error
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceStep, {
						eyebrow: t.readinessEyebrow,
						options: [{
							value: "has-brief",
							title: t.readiness.brief,
							detail: t.readiness.briefDetail
						}, {
							value: "needs-ideas",
							title: t.readiness.ideas,
							detail: t.readiness.ideasDetail
						}],
						selected: values.projectReadiness ? [values.projectReadiness] : [],
						onSelect: (value) => update("projectReadiness", value),
						error
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefStep, {
						copy: t,
						values,
						update
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStep, {
						locale,
						copy: t,
						values,
						update
					})
				]
			}, step)
		]
	});
}
function ChoiceStep({ eyebrow, options, selected, onSelect, multiple = false, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "choice-field",
		"aria-describedby": error ? "choice-error" : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "choice-grid",
				children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"data-value": option.value,
					className: `choice-card ${selected.includes(option.value) ? "selected" : ""}`,
					"aria-pressed": selected.includes(option.value),
					onClick: () => onSelect(option.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "choice-index",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: option.title }),
						option.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: option.detail }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							"aria-hidden": "true",
							children: selected.includes(option.value) ? "✓" : multiple ? "+" : "○"
						})
					]
				}, option.value))
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "form-error choice-error",
				id: "choice-error",
				role: "alert",
				children: error
			})
		]
	});
}
function BriefStep({ copy, values, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "brief-step",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "field wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					copy.briefLabel,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
						className: "field-optional",
						children: copy.optional
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 6,
					value: values.brief,
					onChange: (event) => update("brief", event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: copy.briefHint })
			]
		})
	});
}
function ContactStep({ locale, copy, values, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "contact-step",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "field-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "الاسم *" : "Name *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: values.name,
					onChange: (event) => update("name", event.target.value),
					autoComplete: "name",
					required: true
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "رقم الهاتف *" : "Phone number *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "tel",
					value: values.phone,
					onChange: (event) => update("phone", event.target.value),
					autoComplete: "tel",
					required: true
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "consent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: values.consent,
				onChange: (event) => update("consent", event.target.checked),
				required: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [copy.consent, " *"] })]
		})]
	});
}
//#endregion
export { InquiryForm };
