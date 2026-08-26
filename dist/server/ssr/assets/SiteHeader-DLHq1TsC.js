import { T as __toESM, c as usePathname, t as require_jsx_runtime, y as require_react } from "../index.js";
import { n as copy, v as siteContact } from "./site-content-pRz5wbvZ.js";
import Image from "./image-BaiAfpMh.js";
import { t as DesignAwareLink } from "./DesignAwareLink-C8nx-1NP.js";
//#region components/LocaleSwitch.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function LocaleSwitch({ locale }) {
	const pathname = usePathname();
	const other = locale === "en" ? "ar" : "en";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
		className: "locale-switch",
		href: pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`),
		"aria-label": locale === "en" ? "العربية" : "English",
		children: locale === "en" ? "AR" : "EN"
	});
}
//#endregion
//#region components/InstagramIcon.tsx
function InstagramIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `instagram-icon ${className}`.trim(),
		"aria-hidden": "true"
	});
}
//#endregion
//#region components/SiteHeader.tsx
function Wordmark({ tone = "auto" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `wordmark brand-mark brand-mark-${tone}`,
		"aria-label": "SECTION",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
			unoptimized: true,
			className: "brand-mark-dark",
			src: "/brand/section-black.png",
			alt: "",
			width: 980,
			height: 175
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
			unoptimized: true,
			className: "brand-mark-light",
			src: "/brand/section-white.png",
			alt: "",
			width: 980,
			height: 175
		})]
	});
}
function SiteHeader({ locale }) {
	const nav = copy[locale].nav;
	const mobileMenuRef = (0, import_react.useRef)(null);
	function closeMobileMenu(event) {
		const target = event.target;
		if (target instanceof Element && target.closest("a")) mobileMenuRef.current?.removeAttribute("open");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DesignAwareLink, {
				className: "brand-link",
				href: `/${locale}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "MADE WITH WOOD" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "desktop-nav",
				"aria-label": locale === "ar" ? "التنقل الرئيسي" : "Primary navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
						href: `/${locale}/projects`,
						children: nav.work
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
						href: `/${locale}#capabilities`,
						children: nav.capabilities
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
						href: `/${locale}#process`,
						children: nav.process
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
						href: `/${locale}#studio`,
						children: nav.studio
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitch, { locale }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DesignAwareLink, {
					className: "header-cta",
					href: `/${locale}/inquiry`,
					children: [nav.inquiry, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		ref: mobileMenuRef,
		className: "mobile-menu",
		onClick: closeMobileMenu,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			"aria-label": locale === "ar" ? "فتح القائمة" : "Open menu",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mobile-nav-overlay",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-nav-overlay-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { tone: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitch, { locale })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mobile-nav-links",
					"aria-label": locale === "ar" ? "التنقل عبر الموقع" : "Mobile navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
							href: `/${locale}/projects`,
							children: nav.work
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
							href: `/${locale}#capabilities`,
							children: nav.capabilities
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
							href: `/${locale}#process`,
							children: nav.process
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
							href: `/${locale}#studio`,
							children: nav.studio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAwareLink, {
							href: `/${locale}/inquiry`,
							children: nav.inquiry
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mobile-nav-contact",
					"aria-label": locale === "ar" ? "تواصل معنا" : "Find us",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: locale === "ar" ? "تواصل معنا" : "Find us" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: siteContact.phoneHref,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "☎"
							}), siteContact.phoneDisplay]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: siteContact.instagramHref,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, {}), siteContact.instagramLabel]
						})
					]
				})
			]
		})]
	})] });
}
//#endregion
export { SiteHeader, Wordmark };
