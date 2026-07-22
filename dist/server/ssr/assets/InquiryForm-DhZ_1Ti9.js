import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import { t as capabilities } from "./site-content-0LCLA8j1.js";
//#region components/InquiryForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var initialValues = {
	name: "",
	phone: "",
	selectedCapabilities: [],
	serviceScope: [],
	projectStage: "",
	brief: "",
	consent: false,
	website: ""
};
var labels = {
	en: {
		step: "Step",
		back: "Back",
		next: "Next",
		submit: "Send inquiry",
		sending: "Sending…",
		headings: [
			"What are you looking for?",
			"How can we help?",
			"Where are you in the project?",
			"Anything else?",
			"How do we reach you?"
		],
		intros: [
			"Choose one or more areas. If you are still exploring, choose I’m not sure yet.",
			"Select every part of the work you would like SECTION to support.",
			"A rough answer is enough. We can help shape the next step.",
			"Tell us what is on your mind. This part is optional.",
			"Just two details and we will get back to you."
		],
		required: "Choose an option before continuing.",
		contactRequired: "Add your name, phone number and consent before sending.",
		fileError: "Choose up to three PDF or image files, no larger than 10 MB each.",
		submitError: "We could not send the inquiry. Your answers are still here—please try again.",
		briefLabel: "Tell us anything you want us to know",
		briefPlaceholder: "A room, a development, a deadline, a sketch, a question…",
		filesLabel: "Drawings or references — optional",
		chooseFiles: "Add up to 3 files",
		consent: "I agree that SECTION can use these details to review my inquiry and contact me about the project.",
		successTitle: "We have your inquiry.",
		successBody: "A member of the SECTION team will review it and contact you soon.",
		another: "Start another inquiry",
		notSure: "I’m not sure yet",
		focusEyebrow: "Project element",
		scopeEyebrow: "SECTION support",
		stageEyebrow: "Project stage",
		scope: {
			design: "Design & develop",
			manufacture: "Manufacture",
			install: "Installation",
			full: "Full package"
		},
		stage: {
			exploring: "Just exploring",
			brief: "I have a brief",
			drawings: "Drawings are ready",
			site: "Ready for site",
			unsure: "I’m not sure yet"
		}
	},
	ar: {
		step: "الخطوة",
		back: "رجوع",
		next: "التالي",
		submit: "إرسال الاستفسار",
		sending: "جارٍ الإرسال…",
		headings: [
			"ماذا تحتاج؟",
			"كيف نساعدك؟",
			"في أي مرحلة مشروعك؟",
			"هل تريد إضافة شيء؟",
			"كيف نتواصل معك؟"
		],
		intros: [
			"اختر عنصراً أو أكثر. إذا كنت ما زلت تستكشف، اختر لست متأكداً بعد.",
			"اختر كل جزء من العمل تريد من SECTION دعمه.",
			"إجابة تقريبية تكفي. يمكننا مساعدتك في تحديد الخطوة التالية.",
			"اكتب ما يدور في ذهنك. هذه الخطوة اختيارية.",
			"تفصيلان فقط وسنتواصل معك."
		],
		required: "اختر إجابة قبل المتابعة.",
		contactRequired: "أدخل الاسم ورقم الهاتف والموافقة قبل الإرسال.",
		fileError: "اختر حتى 3 ملفات PDF أو صور، بحد أقصى 10 ميجابايت للملف.",
		submitError: "تعذر إرسال الاستفسار. إجاباتك ما زالت محفوظة، حاول مرة أخرى.",
		briefLabel: "اكتب أي شيء تريد أن نعرفه",
		briefPlaceholder: "غرفة، مشروع، موعد، رسم، أو سؤال…",
		filesLabel: "رسومات أو مراجع — اختياري",
		chooseFiles: "أضف حتى 3 ملفات",
		consent: "أوافق على استخدام SECTION لهذه البيانات لمراجعة الاستفسار والتواصل معي بخصوص المشروع.",
		successTitle: "وصلنا استفسارك.",
		successBody: "سيراجعه أحد أعضاء فريق SECTION وسيتواصل معك قريباً.",
		another: "ابدأ استفساراً جديداً",
		notSure: "لست متأكداً بعد",
		focusEyebrow: "عنصر المشروع",
		scopeEyebrow: "دعم SECTION",
		stageEyebrow: "مرحلة المشروع",
		scope: {
			design: "تصميم وتطوير",
			manufacture: "تصنيع",
			install: "تركيب",
			full: "حزمة كاملة"
		},
		stage: {
			exploring: "ما زلت أستكشف",
			brief: "لدي متطلبات",
			drawings: "الرسومات جاهزة",
			site: "جاهز للموقع",
			unsure: "لست متأكداً بعد"
		}
	}
};
function InquiryForm({ locale }) {
	const t = labels[locale];
	const [step, setStep] = (0, import_react.useState)(0);
	const [values, setValues] = (0, import_react.useState)(initialValues);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const formRef = (0, import_react.useRef)(null);
	const progress = (0, import_react.useMemo)(() => `${(step + 1) / 5 * 100}%`, [step]);
	const update = (key, value) => setValues((current) => ({
		...current,
		[key]: value
	}));
	const validate = () => {
		const valid = step === 0 ? values.selectedCapabilities.length > 0 : step === 1 ? values.serviceScope.length > 0 : step === 2 ? Boolean(values.projectStage) : step === 4 ? Boolean(values.name.trim() && values.phone.trim() && values.consent) : true;
		if (!valid) setError(step === 4 ? t.contactRequired : t.required);
		else setError("");
		return valid;
	};
	const next = () => {
		if (validate()) setStep((current) => Math.min(4, current + 1));
	};
	const toggle = (key, value) => {
		const current = values[key];
		update(key, value === "not-sure-yet" ? current.includes(value) ? [] : [value] : current.includes(value) ? current.filter((item) => item !== value) : [...current.filter((item) => item !== "not-sure-yet"), value]);
	};
	const onFiles = (list) => {
		const chosen = Array.from(list ?? []);
		const allowed = [
			"application/pdf",
			"image/jpeg",
			"image/png",
			"image/webp"
		];
		if (chosen.length > 3 || chosen.some((file) => file.size > 10 * 1024 * 1024 || !allowed.includes(file.type))) {
			setError(t.fileError);
			setFiles([]);
			return;
		}
		setError("");
		setFiles(chosen);
	};
	const submit = async (event) => {
		event.preventDefault();
		if (!validate() || status === "sending") return;
		setStatus("sending");
		setError("");
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
					setFiles([]);
					setStep(0);
					setStatus("idle");
				},
				children: t.another
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "inquiry-form",
		ref: formRef,
		onSubmit: submit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "form-progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: progress } })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "form-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						t.step,
						" ",
						step + 1,
						" / 5"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.headings[step] }),
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
							title: t.notSure,
							detail: locale === "ar" ? "سنساعدك في تحديد الاتجاه." : "We can help shape the direction."
						}],
						selected: values.selectedCapabilities,
						onToggle: (value) => toggle("selectedCapabilities", value),
						multiple: true
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceStep, {
						eyebrow: t.scopeEyebrow,
						options: [
							{
								value: "design-development",
								title: t.scope.design
							},
							{
								value: "manufacture",
								title: t.scope.manufacture
							},
							{
								value: "installation",
								title: t.scope.install
							},
							{
								value: "full-package",
								title: t.scope.full
							},
							{
								value: "not-sure-yet",
								title: t.notSure
							}
						],
						selected: values.serviceScope,
						onToggle: (value) => toggle("serviceScope", value),
						multiple: true
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceStep, {
						eyebrow: t.stageEyebrow,
						options: [
							{
								value: "exploring",
								title: t.stage.exploring
							},
							{
								value: "brief-ready",
								title: t.stage.brief
							},
							{
								value: "drawings-ready",
								title: t.stage.drawings
							},
							{
								value: "site-ready",
								title: t.stage.site
							},
							{
								value: "not-sure-yet",
								title: t.stage.unsure
							}
						],
						selected: values.projectStage ? [values.projectStage] : [],
						onToggle: (value) => update("projectStage", value)
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefStep, {
						copy: t,
						values,
						update,
						files,
						onFiles
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStep, {
						locale,
						copy: t,
						values,
						update
					})
				]
			}, step),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "form-error",
				role: "alert",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
				}), step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "button-primary",
					onClick: next,
					children: [t.next, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "button-primary",
					disabled: status === "sending",
					children: [status === "sending" ? t.sending : t.submit, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
				})]
			})
		]
	});
}
function ChoiceStep({ eyebrow, options, selected, onToggle, multiple = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "choice-field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: eyebrow }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "choice-grid",
			children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"data-value": option.value,
				className: `choice-card ${selected.includes(option.value) ? "selected" : ""}`,
				"aria-pressed": selected.includes(option.value),
				onClick: () => onToggle(option.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "choice-index",
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: option.title }),
					option.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: option.detail }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						"aria-hidden": "true",
						children: selected.includes(option.value) ? "✓" : multiple ? "+" : "↗"
					})
				]
			}, option.value))
		})]
	});
}
function BriefStep({ copy, values, update, files, onFiles }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "brief-step",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "field wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.briefLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 6,
				value: values.brief,
				onChange: (event) => update("brief", event.target.value),
				placeholder: copy.briefPlaceholder
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "field wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.filesLabel }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "file-drop",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							multiple: true,
							accept: ".pdf,.jpg,.jpeg,.png,.webp",
							onChange: (event) => onFiles(event.target.files)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: copy.chooseFiles }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PDF · JPG · PNG · WEBP / 10 MB" })
					]
				}),
				files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "file-list",
					children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [file.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [(file.size / 1024 / 1024).toFixed(1), " MB"] })] }, `${file.name}-${file.size}`))
				})
			]
		})]
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
					autoComplete: "name"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "رقم الهاتف *" : "Phone number *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "tel",
					value: values.phone,
					onChange: (event) => update("phone", event.target.value),
					autoComplete: "tel"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "consent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: values.consent,
				onChange: (event) => update("consent", event.target.checked)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [copy.consent, " *"] })]
		})]
	});
}
//#endregion
export { InquiryForm };
