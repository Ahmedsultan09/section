import { t as require_jsx_runtime } from "../index.js";
import { t as Link } from "./link-CEUN_oET.js";
//#region components/DesignAwareLink.tsx
var import_jsx_runtime = require_jsx_runtime();
function DesignAwareLink({ href, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		href,
		...props,
		children
	});
}
//#endregion
export { DesignAwareLink as t };
