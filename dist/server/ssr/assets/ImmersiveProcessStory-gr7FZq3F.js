import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import Image from "./image-D8P5PEeD.js";
import { a as prefersReducedMotion, i as hasReducedMotionListener, r as initPrefersReducedMotion, t as motion } from "./react-DANP8WV6.js";
import { n as getMedia, r as processSteps } from "./site-content-0LCLA8j1.js";
//#region node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
*
* This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
* `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
*
* It will actively respond to changes and re-render your components with the latest setting.
*
* ```jsx
* export function Sidebar({ isOpen }) {
*   const shouldReduceMotion = useReducedMotion()
*   const closedX = shouldReduceMotion ? 0 : "-100%"
*
*   return (
*     <motion.div animate={{
*       opacity: isOpen ? 1 : 0,
*       x: isOpen ? 0 : closedX
*     }} />
*   )
* }
* ```
*
* @return boolean
*
* @public
*/
function useReducedMotion() {
	/**
	* Lazy initialisation of prefersReducedMotion
	*/
	!hasReducedMotionListener.current && initPrefersReducedMotion();
	const [shouldReduceMotion] = (0, import_react.useState)(prefersReducedMotion.current);
	/**
	* TODO See if people miss automatically updating shouldReduceMotion setting
	*/
	return shouldReduceMotion;
}
//#endregion
//#region components/ImmersiveProcessStory.tsx
var import_jsx_runtime = require_jsx_runtime();
function ImmersiveProcessStory({ locale }) {
	const chapterRefs = (0, import_react.useRef)([]);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const reduceMotion = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const activationPoints = chapterRefs.current.filter((point) => Boolean(point));
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				setActiveIndex(Number(entry.target.dataset.stepIndex ?? 0));
			}
		}, {
			rootMargin: "-46% 0px -46% 0px",
			threshold: 0
		});
		activationPoints.forEach((point) => observer.observe(point));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "immersive-process-story",
		"aria-label": locale === "ar" ? "مراحل العمل" : "Project process",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "immersive-process-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "immersive-process-visual",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "immersive-process-progress",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.i, {
							animate: { scaleY: (activeIndex + 1) / processSteps.length },
							transition: {
								duration: reduceMotion ? 0 : .45,
								ease: [
									.16,
									1,
									.3,
									1
								]
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "immersive-process-counter",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", activeIndex + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "/ 04" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "immersive-process-stage",
						children: processSteps.map((step, index) => {
							const media = getMedia(step.image);
							const active = activeIndex === index;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "immersive-process-stage-image",
								initial: false,
								animate: {
									opacity: active ? 1 : 0,
									scale: active ? 1 : 1.035,
									clipPath: active ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)"
								},
								transition: {
									duration: reduceMotion ? 0 : .7,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									unoptimized: true,
									src: media.src,
									alt: "",
									fill: true,
									sizes: "(max-width: 780px) 100vw, 46vw"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "من الفكرة إلى الموقع" : "FROM IDEA TO SITE" })]
							}, step.number);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "immersive-process-dots",
						children: processSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							className: index === activeIndex ? "active" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.number })
						}, step.number))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "immersive-process-chapters",
				children: processSteps.map((step, index) => {
					const media = getMedia(step.image);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: index === activeIndex ? "active" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "immersive-process-activation",
								"data-step-index": index,
								ref: (node) => {
									chapterRefs.current[index] = node;
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [step.number, " / 04"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title[locale] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text[locale] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "immersive-process-mobile-media",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									unoptimized: true,
									src: media.src,
									alt: media.alt[locale],
									fill: true,
									sizes: "100vw"
								})
							})
						]
					}, step.number);
				})
			})]
		})
	});
}
//#endregion
export { ImmersiveProcessStory };
