import { t as require_jsx_runtime } from "../index.js";
import { t as motion } from "./react-Dtazu2lP.js";
//#region components/Reveal.tsx
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 34
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .72,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
//#endregion
export { Reveal };
