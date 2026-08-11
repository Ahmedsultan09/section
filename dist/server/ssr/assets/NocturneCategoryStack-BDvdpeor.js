import { T as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
import { t as DesignAwareLink } from "./DesignAwareLink-D4aZKoIF.js";
import Image from "./image-BeTdbdzN.js";
//#region components/NocturneCategoryStack.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function NocturneCategoryStack({ locale, items }) {
	const root = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const cards = Array.from(root.current?.querySelectorAll("[data-category-card]") ?? []);
		const observer = new IntersectionObserver((entries) => {
			const mostVisible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (mostVisible) setActive(Number(mostVisible.target.dataset.index ?? 0));
		}, {
			rootMargin: "-20% 0px -20%",
			threshold: [
				.25,
				.5,
				.75
			]
		});
		cards.forEach((card) => observer.observe(card));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "nocturne-mobile-collections",
		ref: root,
		children: items.map(({ capability, media }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DesignAwareLink, {
			className: `nocturne-category-card ${active === index ? "active" : ""}`,
			"data-category-card": true,
			"data-index": index,
			href: `/${locale}/collections/${capability.slug}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					unoptimized: true,
					src: media.src,
					alt: media.alt[locale],
					fill: true,
					sizes: "100vw"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: capability.title[locale] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: capability.short[locale] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					"aria-hidden": "true",
					children: "↗"
				})
			]
		}, capability.slug))
	});
}
//#endregion
export { NocturneCategoryStack };
