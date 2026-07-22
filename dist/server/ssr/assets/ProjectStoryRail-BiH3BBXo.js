import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import { DesignAwareLink } from "./DesignAwareLink-DgPiLzHn.js";
import Image from "./image-D8P5PEeD.js";
import { i as projects, n as getMedia } from "./site-content-0LCLA8j1.js";
//#region components/ProjectStoryRail.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProjectStoryRail({ locale }) {
	const railRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)({
		active: false,
		startX: 0,
		scrollLeft: 0
	});
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const rail = railRef.current;
		if (!rail) return;
		const cards = Array.from(rail.querySelectorAll("[data-project-card]"));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible) setActive(Number(visible.target.dataset.index ?? 0));
		}, {
			root: rail,
			threshold: [
				.35,
				.65,
				.9
			]
		});
		cards.forEach((card) => observer.observe(card));
		return () => observer.disconnect();
	}, []);
	function move(direction) {
		const cards = railRef.current?.querySelectorAll("[data-project-card]");
		const next = Math.max(0, Math.min(projects.length - 1, active + direction));
		(cards?.[next])?.scrollIntoView({
			behavior: "smooth",
			inline: "start",
			block: "nearest"
		});
	}
	function startDrag(event) {
		if (event.target.closest("a, button")) return;
		const rail = railRef.current;
		if (!rail) return;
		dragRef.current = {
			active: true,
			startX: event.clientX,
			scrollLeft: rail.scrollLeft
		};
		rail.setPointerCapture(event.pointerId);
	}
	function drag(event) {
		const rail = railRef.current;
		if (!rail || !dragRef.current.active) return;
		rail.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
	}
	function stopDrag(event) {
		dragRef.current.active = false;
		if (railRef.current?.hasPointerCapture(event.pointerId)) railRef.current.releasePointerCapture(event.pointerId);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "story-rail-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-rail-controls",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: locale === "ar" ? "قصص مشاريع مختارة" : "Selected project stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						String(active + 1).padStart(2, "0"),
						" / ",
						String(projects.length).padStart(2, "0")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => move(-1),
						disabled: active === 0,
						"aria-label": locale === "ar" ? "المشروع السابق" : "Previous project",
						children: "←"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => move(1),
						disabled: active === projects.length - 1,
						"aria-label": locale === "ar" ? "المشروع التالي" : "Next project",
						children: "→"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-rail",
				ref: railRef,
				tabIndex: 0,
				"aria-label": locale === "ar" ? "مشاريع مختارة" : "Selected projects",
				onKeyDown: (event) => {
					if (event.key === "ArrowRight") move(locale === "ar" ? -1 : 1);
					if (event.key === "ArrowLeft") move(locale === "ar" ? 1 : -1);
				},
				onPointerDown: startDrag,
				onPointerMove: drag,
				onPointerUp: stopDrag,
				onPointerCancel: stopDrag,
				children: [projects.map((project, index) => {
					const image = getMedia(project.media[0]);
					const named = project.clientVisibility === "approved";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "story-card",
						"data-project-card": true,
						"data-index": index,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "story-card-media",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								unoptimized: true,
								src: image.src,
								alt: image.alt[locale],
								fill: true,
								sizes: "(max-width: 760px) 86vw, 72vw"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "story-card-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									project.sectorLabel[locale],
									" / ",
									project.location[locale]
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: named ? "named-client" : "",
									children: named ? project.client[locale] : project.title[locale]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.summary[locale] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DesignAwareLink, {
									href: `/${locale}/projects/${project.slug}`,
									children: [locale === "ar" ? "افتح القصة" : "Open the story", " ↗"]
								})
							]
						})]
					}, project.slug);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "story-rail-end",
					"aria-hidden": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "story-progress",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { transform: `scaleX(${(active + 1) / projects.length})` } })
			})
		]
	});
}
//#endregion
export { ProjectStoryRail };
