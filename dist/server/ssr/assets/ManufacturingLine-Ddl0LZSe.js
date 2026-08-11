import { T as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
import { r as manufacturingSteps } from "./site-content-MmECORKg.js";
import Image from "./image-BeTdbdzN.js";
//#region components/ManufacturingLine.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ManufacturingLine({ locale }) {
	const rootRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		const rail = root?.querySelector("[data-manufacturing-rail]");
		if (!root || !rail) return;
		const cards = Array.from(rail.querySelectorAll("[data-manufacturing-step]"));
		if (!cards.length) return;
		root.classList.add("is-ready");
		const mobileQuery = window.matchMedia("(max-width: 980px)");
		const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		let frame = 0;
		let timer;
		const updateActive = () => {
			if (!mobileQuery.matches) return;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const centre = window.innerWidth / 2;
				let closest = 0;
				let distance = Number.POSITIVE_INFINITY;
				cards.forEach((card, index) => {
					const rect = card.getBoundingClientRect();
					const nextDistance = Math.abs(rect.left + rect.width / 2 - centre);
					if (nextDistance < distance) {
						closest = index;
						distance = nextDistance;
					}
				});
				setActive(closest);
			});
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
			if (mobileQuery.matches && entries.some((entry) => entry.isIntersecting)) updateActive();
		}, {
			rootMargin: "-12% 0px -44% 0px",
			threshold: [.15, .5]
		});
		const stopAuto = () => {
			if (timer !== void 0) {
				window.clearInterval(timer);
				timer = void 0;
			}
		};
		const startAuto = () => {
			stopAuto();
			if (mobileQuery.matches || motionQuery.matches) return;
			timer = window.setInterval(() => {
				setActive((current) => (current + 1) % cards.length);
			}, 3200);
		};
		const handleModeChange = () => {
			stopAuto();
			if (mobileQuery.matches) {
				updateActive();
				return;
			}
			setActive(0);
			startAuto();
		};
		cards.forEach((card) => observer.observe(card));
		handleModeChange();
		rail.addEventListener("scroll", updateActive, { passive: true });
		window.addEventListener("scroll", updateActive, { passive: true });
		window.addEventListener("resize", updateActive);
		mobileQuery.addEventListener("change", handleModeChange);
		motionQuery.addEventListener("change", handleModeChange);
		return () => {
			cancelAnimationFrame(frame);
			stopAuto();
			observer.disconnect();
			rail.removeEventListener("scroll", updateActive);
			window.removeEventListener("scroll", updateActive);
			window.removeEventListener("resize", updateActive);
			mobileQuery.removeEventListener("change", handleModeChange);
			motionQuery.removeEventListener("change", handleModeChange);
		};
	}, []);
	const progress = `${(active + 1) / manufacturingSteps.length * 100}%`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "showroom-statement-flow",
		ref: rootRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "showroom-statement-flow-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: locale === "ar" ? "داخل خط التصنيع" : "Inside the manufacturing line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-live": "polite",
				children: [
					String(active + 1).padStart(2, "0"),
					" / ",
					String(manufacturingSteps.length).padStart(2, "0")
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "showroom-statement-flow-rail",
			"data-manufacturing-rail": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
					className: "showroom-statement-flow-track",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
					className: "showroom-statement-flow-progress",
					"aria-hidden": "true",
					style: { "--flow-progress": progress }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					"aria-label": locale === "ar" ? "خطوات التصنيع" : "Manufacturing steps",
					children: manufacturingSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: index === active ? "is-active" : void 0,
						"data-manufacturing-step": true,
						"aria-current": index === active ? "step" : void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "showroom-statement-flow-marker",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.number })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								unoptimized: true,
								src: step.image,
								alt: step.imageAlt[locale],
								fill: true,
								sizes: "(max-width: 700px) 78vw, 19vw"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: step.topic[locale] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "showroom-statement-flow-copy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title[locale] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text[locale] })]
							})
						]
					}, step.number))
				})
			]
		})]
	});
}
//#endregion
export { ManufacturingLine };
