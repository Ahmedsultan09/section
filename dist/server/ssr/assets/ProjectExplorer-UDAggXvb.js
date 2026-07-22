import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import { DesignAwareLink } from "./DesignAwareLink-DgPiLzHn.js";
import Image from "./image-D8P5PEeD.js";
import { a as sectors, i as projects, n as getMedia } from "./site-content-0LCLA8j1.js";
//#region components/ProjectExplorer.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProjectExplorer({ locale, compact = false }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = projects.filter((project) => filter === "all" || project.sector === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: compact ? "project-explorer compact" : "project-explorer",
		children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "project-filters",
			role: "group",
			"aria-label": locale === "ar" ? "تصفية المشروعات" : "Filter projects",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: filter === "all" ? "active" : "",
				onClick: () => setFilter("all"),
				children: locale === "ar" ? "الكل" : "All"
			}), sectors.map((sector) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: filter === sector.slug ? "active" : "",
				onClick: () => setFilter(sector.slug),
				children: sector.label[locale]
			}, sector.slug))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "project-list",
			children: visible.map((project, index) => {
				const asset = getMedia(project.media[0]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DesignAwareLink, {
					className: "project-row",
					href: `/${locale}/projects/${project.slug}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "project-index",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "project-thumb",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								unoptimized: true,
								src: asset.src,
								alt: asset.alt[locale],
								fill: true,
								sizes: "(max-width: 700px) 100vw, 36vw"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-row-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.sectorLabel[locale] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project.title[locale] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									project.location[locale],
									" · ",
									project.year
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "project-arrow",
							children: "↗"
						})
					]
				}, project.slug);
			})
		})]
	});
}
//#endregion
export { ProjectExplorer };
