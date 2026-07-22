import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import Image from "./image-D8P5PEeD.js";
import { n as getMedia, r as processSteps } from "./site-content-0LCLA8j1.js";
//#region components/ShowroomProcess.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ShowroomProcess({ locale, mode }) {
	const trackRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const reducedMotion = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const track = trackRef.current;
		if (!track) return;
		let frame = 0;
		const update = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const centre = track.getBoundingClientRect().left + track.clientWidth / 2;
				const cards = Array.from(track.querySelectorAll("[data-process-card]"));
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
		update();
		track.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			cancelAnimationFrame(frame);
			track.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	const goTo = (index) => {
		(trackRef.current?.querySelectorAll("[data-process-card]")[index])?.scrollIntoView({
			behavior: reducedMotion.current ? "auto" : "smooth",
			block: "nearest",
			inline: "center"
		});
	};
	const move = (delta) => goTo(Math.max(0, Math.min(processSteps.length - 1, active + delta)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `showroom-process process-experience process-${mode}`,
		id: "process",
		"aria-labelledby": `${mode}-process-title`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["03 / ", locale === "ar" ? "طريقة العمل" : "How the work moves"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: `${mode}-process-title`,
					children: locale === "ar" ? "أربع مراحل. قصة واحدة." : "Four stages. One story."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "اسحب أو استخدم الأسهم لاستكشاف المراحل" : "Swipe or use the arrows to explore" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "process-navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "process-index",
					"aria-label": locale === "ar" ? "مراحل العمل" : "Process stages",
					children: processSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: index === active ? "is-active" : "",
						onClick: () => goTo(index),
						"aria-current": index === active ? "step" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: step.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.title[locale] })]
					}, step.number))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "process-arrows",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => move(-1),
							disabled: active === 0,
							"aria-label": locale === "ar" ? "المرحلة السابقة" : "Previous stage",
							children: "←"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [String(active + 1).padStart(2, "0"), " / 04"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => move(1),
							disabled: active === processSteps.length - 1,
							"aria-label": locale === "ar" ? "المرحلة التالية" : "Next stage",
							children: "→"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "process-rail",
				ref: trackRef,
				tabIndex: 0,
				onKeyDown: (event) => {
					if (event.key === "ArrowRight") {
						event.preventDefault();
						move(1);
					}
					if (event.key === "ArrowLeft") {
						event.preventDefault();
						move(-1);
					}
				},
				children: [processSteps.map((step, index) => {
					const media = getMedia(step.image);
					const src = index === 2 ? "/drive/materials/material-01.webp" : media.src;
					const alt = index === 2 ? locale === "ar" ? "مراجعة خامة خشبية تحمل علامة SECTION قبل التصنيع" : "SECTION material sample being reviewed before manufacturing" : media.alt[locale];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: index === active ? "is-active" : "",
						"data-process-card": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								unoptimized: true,
								src,
								alt,
								fill: true,
								sizes: "(max-width: 760px) 86vw, 72vw"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: locale === "ar" ? `المرحلة ${step.number}` : `Stage ${step.number}` })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "process-card-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.number }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title[locale] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text[locale] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "process-card-line",
								"aria-hidden": "true"
							})
						]
					}, step.number);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "process-rail-end",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
//#endregion
export { ShowroomProcess };
