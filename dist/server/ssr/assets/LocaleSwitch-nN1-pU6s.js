import { t as require_jsx_runtime } from "../index.js";
import { DesignAwareLink, t as usePathname } from "./DesignAwareLink-DgPiLzHn.js";
//#region components/LocaleSwitch.tsx
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
export { LocaleSwitch };
