import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
import Image from "./image-BveHEV8u.js";
import { C as clamp, S as invariant, T as useConstant, _ as frame, b as progress, c as microtask, d as motionValue, f as supportsScrollTimeline, g as cancelFrame, h as interpolate, l as isHTMLElement, m as defaultOffset$1, n as MotionConfigContext, o as resize, p as supportsViewTimeline, s as cancelMicrotask, t as motion, u as collectMotionValues, v as frameData, w as useIsomorphicLayoutEffect, x as noop, y as velocityPerSecond } from "./react-Dtazu2lP.js";
import { n as getMedia, r as processSteps } from "./site-content-CmMqQtsn.js";
//#region node_modules/motion-dom/dist/es/scroll/observe.mjs
function observeTimeline(update, timeline) {
	let prevProgress;
	const onFrame = () => {
		const { currentTime } = timeline;
		const progress = (currentTime === null ? 0 : currentTime.value) / 100;
		if (prevProgress !== progress) update(progress);
		prevProgress = progress;
	};
	frame.preUpdate(onFrame, true);
	return () => cancelFrame(onFrame);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/transform.mjs
function transform(...args) {
	const useImmediate = !Array.isArray(args[0]);
	const argOffset = useImmediate ? 0 : -1;
	const inputValue = args[0 + argOffset];
	const inputRange = args[1 + argOffset];
	const outputRange = args[2 + argOffset];
	const options = args[3 + argOffset];
	const interpolator = interpolate(inputRange, outputRange, options);
	return useImmediate ? interpolator(inputValue) : interpolator;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
function canUseNativeTimeline(target) {
	if (typeof window === "undefined") return false;
	return target ? supportsViewTimeline() : supportsScrollTimeline();
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
/**
* A time in milliseconds, beyond which we consider the scroll velocity to be 0.
*/
var maxElapsed = 50;
var createAxisInfo = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
});
var createScrollInfo = () => ({
	time: 0,
	x: createAxisInfo(),
	y: createAxisInfo()
});
var keys = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
};
function updateAxisInfo(element, axisName, info, time) {
	const axis = info[axisName];
	const { length, position } = keys[axisName];
	const prev = axis.current;
	const prevTime = info.time;
	axis.current = Math.abs(element[`scroll${position}`]);
	axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
	axis.offset.length = 0;
	axis.offset[0] = 0;
	axis.offset[1] = axis.scrollLength;
	axis.progress = progress(0, axis.scrollLength, axis.current);
	const elapsed = time - prevTime;
	axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
	updateAxisInfo(element, "x", info, time);
	updateAxisInfo(element, "y", info, time);
	info.time = time;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
	const inset = {
		x: 0,
		y: 0
	};
	let current = element;
	while (current && current !== container) if (isHTMLElement(current)) {
		inset.x += current.offsetLeft;
		inset.y += current.offsetTop;
		current = current.offsetParent;
	} else if (current.tagName === "svg") {
		/**
		* This isn't an ideal approach to measuring the offset of <svg /> tags.
		* It would be preferable, given they behave like HTMLElements in most ways
		* to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
		* can't use .getBBox() like most SVG elements as these provide the offset
		* relative to the SVG itself, which for <svg /> is usually 0x0.
		*/
		const svgBoundingBox = current.getBoundingClientRect();
		current = current.parentElement;
		const parentBoundingBox = current.getBoundingClientRect();
		inset.x += svgBoundingBox.left - parentBoundingBox.left;
		inset.y += svgBoundingBox.top - parentBoundingBox.top;
	} else if (current instanceof SVGGraphicsElement) {
		const { x, y } = current.getBBox();
		inset.x += x;
		inset.y += y;
		let svg = null;
		let parent = current.parentNode;
		while (!svg) {
			if (parent.tagName === "svg") svg = parent;
			parent = current.parentNode;
		}
		current = svg;
	} else break;
	return inset;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
	start: 0,
	center: .5,
	end: 1
};
function resolveEdge(edge, length, inset = 0) {
	let delta = 0;
	/**
	* If we have this edge defined as a preset, replace the definition
	* with the numerical value.
	*/
	if (edge in namedEdges) edge = namedEdges[edge];
	/**
	* Handle unit values
	*/
	if (typeof edge === "string") {
		const asNumber = parseFloat(edge);
		if (edge.endsWith("px")) delta = asNumber;
		else if (edge.endsWith("%")) edge = asNumber / 100;
		else if (edge.endsWith("vw")) delta = asNumber / 100 * document.documentElement.clientWidth;
		else if (edge.endsWith("vh")) delta = asNumber / 100 * document.documentElement.clientHeight;
		else edge = asNumber;
	}
	/**
	* If the edge is defined as a number, handle as a progress value.
	*/
	if (typeof edge === "number") delta = length * edge;
	return inset + delta;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
	let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
	let targetPoint = 0;
	let containerPoint = 0;
	if (typeof offset === "number")
 /**
	* If we're provided offset: [0, 0.5, 1] then each number x should become
	* [x, x], so we default to the behaviour of mapping 0 => 0 of both target
	* and container etc.
	*/
	offsetDefinition = [offset, offset];
	else if (typeof offset === "string") {
		offset = offset.trim();
		if (offset.includes(" ")) offsetDefinition = offset.split(" ");
		else
 /**
		* If we're provided a definition like "100px" then we want to apply
		* that only to the top of the target point, leaving the container at 0.
		* Whereas a named offset like "end" should be applied to both.
		*/
		offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
	}
	targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
	containerPoint = resolveEdge(offsetDefinition[1], containerLength);
	return targetPoint - containerPoint;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
	Enter: [[0, 1], [1, 1]],
	Exit: [[0, 0], [1, 0]],
	Any: [[1, 0], [0, 1]],
	All: [[0, 0], [1, 1]]
};
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = {
	x: 0,
	y: 0
};
function getTargetSize(target) {
	return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
		width: target.clientWidth,
		height: target.clientHeight
	};
}
function resolveOffsets(container, info, options) {
	const { offset: offsetDefinition = ScrollOffset.All } = options;
	const { target = container, axis = "y" } = options;
	const lengthLabel = axis === "y" ? "height" : "width";
	const inset = target !== container ? calcInset(target, container) : point;
	/**
	* Measure the target and container. If they're the same thing then we
	* use the container's scrollWidth/Height as the target, from there
	* all other calculations can remain the same.
	*/
	const targetSize = target === container ? {
		width: container.scrollWidth,
		height: container.scrollHeight
	} : getTargetSize(target);
	const containerSize = {
		width: container.clientWidth,
		height: container.clientHeight
	};
	/**
	* Reset the length of the resolved offset array rather than creating a new one.
	* TODO: More reusable data structures for targetSize/containerSize would also be good.
	*/
	info[axis].offset.length = 0;
	/**
	* Populate the offset array by resolving the user's offset definition into
	* a list of pixel scroll offets.
	*/
	let hasChanged = !info[axis].interpolate;
	const numOffsets = offsetDefinition.length;
	for (let i = 0; i < numOffsets; i++) {
		const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
		if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) hasChanged = true;
		info[axis].offset[i] = offset;
	}
	/**
	* If the pixel scroll offsets have changed, create a new interpolator function
	* to map scroll value into a progress.
	*/
	if (hasChanged) {
		info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
		info[axis].interpolatorOffsets = [...info[axis].offset];
	}
	info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
	/**
	* Find inset of target within scrollable container
	*/
	info.x.targetOffset = 0;
	info.y.targetOffset = 0;
	if (target !== container) {
		let node = target;
		while (node && node !== container) {
			info.x.targetOffset += node.offsetLeft;
			info.y.targetOffset += node.offsetTop;
			node = node.offsetParent;
		}
	}
	info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
	info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
	info.x.containerLength = container.clientWidth;
	info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
	return {
		measure: (time) => {
			measure(element, options.target, info);
			updateScrollInfo(element, info, time);
			if (options.offset || options.target) resolveOffsets(element, info, options);
		},
		notify: () => onScroll(info)
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var scrollSize = /* @__PURE__ */ new WeakMap();
var dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
	if (!container) return noop;
	let containerHandlers = onScrollHandlers.get(container);
	/**
	* Get the onScroll handlers for this container.
	* If one isn't found, create a new one.
	*/
	if (!containerHandlers) {
		containerHandlers = /* @__PURE__ */ new Set();
		onScrollHandlers.set(container, containerHandlers);
	}
	const containerHandler = createOnScrollHandler(container, onScroll, createScrollInfo(), options);
	containerHandlers.add(containerHandler);
	/**
	* Check if there's a scroll event listener for this container.
	* If not, create one.
	*/
	if (!scrollListeners.has(container)) {
		const measureAll = () => {
			for (const handler of containerHandlers) handler.measure(frameData.timestamp);
			frame.preUpdate(notifyAll);
		};
		const notifyAll = () => {
			for (const handler of containerHandlers) handler.notify();
		};
		const listener = () => frame.read(measureAll);
		scrollListeners.set(container, listener);
		const target = getEventTarget(container);
		window.addEventListener("resize", listener);
		if (container !== document.documentElement) resizeListeners.set(container, resize(container, listener));
		target.addEventListener("scroll", listener);
		listener();
	}
	/**
	* Enable content size tracking if requested and not already enabled.
	*/
	if (trackContentSize && !dimensionCheckProcesses.has(container)) {
		const listener = scrollListeners.get(container);
		const size = {
			width: container.scrollWidth,
			height: container.scrollHeight
		};
		scrollSize.set(container, size);
		const checkScrollDimensions = () => {
			const newWidth = container.scrollWidth;
			const newHeight = container.scrollHeight;
			if (size.width !== newWidth || size.height !== newHeight) {
				listener();
				size.width = newWidth;
				size.height = newHeight;
			}
		};
		const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
		dimensionCheckProcesses.set(container, dimensionCheckProcess);
	}
	const listener = scrollListeners.get(container);
	frame.read(listener, false, true);
	return () => {
		cancelFrame(listener);
		/**
		* Check if we even have any handlers for this container.
		*/
		const currentHandlers = onScrollHandlers.get(container);
		if (!currentHandlers) return;
		currentHandlers.delete(containerHandler);
		if (currentHandlers.size) return;
		/**
		* If no more handlers, remove the scroll listener too.
		*/
		const scrollListener = scrollListeners.get(container);
		scrollListeners.delete(container);
		if (scrollListener) {
			getEventTarget(container).removeEventListener("scroll", scrollListener);
			resizeListeners.get(container)?.();
			window.removeEventListener("resize", scrollListener);
		}
		const dimensionCheckProcess = dimensionCheckProcesses.get(container);
		if (dimensionCheckProcess) {
			cancelFrame(dimensionCheckProcess);
			dimensionCheckProcesses.delete(container);
		}
		scrollSize.delete(container);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs
/**
* Maps from ProgressIntersection pairs used by Motion's preset offsets to
* ViewTimeline named ranges. Returns undefined for unrecognised patterns,
* which signals the caller to fall back to JS-based scroll tracking.
*/
var presets = [
	[ScrollOffset.Enter, "entry"],
	[ScrollOffset.Exit, "exit"],
	[ScrollOffset.Any, "cover"],
	[ScrollOffset.All, "contain"]
];
var stringToProgress = {
	start: 0,
	end: 1
};
function parseStringOffset(s) {
	const parts = s.trim().split(/\s+/);
	if (parts.length !== 2) return void 0;
	const a = stringToProgress[parts[0]];
	const b = stringToProgress[parts[1]];
	if (a === void 0 || b === void 0) return void 0;
	return [a, b];
}
function normaliseOffset(offset) {
	if (offset.length !== 2) return void 0;
	const result = [];
	for (const item of offset) if (Array.isArray(item)) result.push(item);
	else if (typeof item === "string") {
		const parsed = parseStringOffset(item);
		if (!parsed) return void 0;
		result.push(parsed);
	} else return;
	return result;
}
function matchesPreset(offset, preset) {
	const normalised = normaliseOffset(offset);
	if (!normalised) return false;
	for (let i = 0; i < 2; i++) {
		const o = normalised[i];
		const p = preset[i];
		if (o[0] !== p[0] || o[1] !== p[1]) return false;
	}
	return true;
}
function offsetToViewTimelineRange(offset) {
	if (!offset) return {
		rangeStart: "contain 0%",
		rangeEnd: "contain 100%"
	};
	for (const [preset, name] of presets) if (matchesPreset(offset, preset)) return {
		rangeStart: `${name} 0%`,
		rangeEnd: `${name} 100%`
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
var timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
	const currentTime = { value: 0 };
	return {
		currentTime,
		cancel: scrollInfo((info) => {
			currentTime.value = info[options.axis].progress * 100;
		}, options)
	};
}
function getTimeline({ source, container, ...options }) {
	const { axis } = options;
	if (source) container = source;
	let containerCache = timelineCache.get(container);
	if (!containerCache) {
		containerCache = /* @__PURE__ */ new Map();
		timelineCache.set(container, containerCache);
	}
	const targetKey = options.target ?? "self";
	let targetCache = containerCache.get(targetKey);
	if (!targetCache) {
		targetCache = {};
		containerCache.set(targetKey, targetCache);
	}
	const axisKey = axis + (options.offset ?? []).join(",");
	if (!targetCache[axisKey]) if (options.target && canUseNativeTimeline(options.target)) if (offsetToViewTimelineRange(options.offset)) targetCache[axisKey] = new ViewTimeline({
		subject: options.target,
		axis
	});
	else targetCache[axisKey] = scrollTimelineFallback({
		container,
		...options
	});
	else if (canUseNativeTimeline()) targetCache[axisKey] = new ScrollTimeline({
		source: container,
		axis
	});
	else targetCache[axisKey] = scrollTimelineFallback({
		container,
		...options
	});
	return targetCache[axisKey];
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
function attachToAnimation(animation, options) {
	const timeline = getTimeline(options);
	const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
	/**
	* Use native timeline when:
	* - No target: ScrollTimeline (existing behaviour)
	* - Target with mappable offset: ViewTimeline with named range
	* - Target with unmappable offset: fall back to JS observe
	*/
	const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
	return animation.attachTimeline({
		timeline: useNative ? timeline : void 0,
		...range && useNative && {
			rangeStart: range.rangeStart,
			rangeEnd: range.rangeEnd
		},
		observe: (valueAnimation) => {
			valueAnimation.pause();
			return observeTimeline((progress) => {
				valueAnimation.time = valueAnimation.iterationDuration * progress;
			}, timeline);
		}
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/is-element-tracking.mjs
/**
* Currently, we only support element tracking with `scrollInfo`, though in
* the future we can also offer ViewTimeline support.
*/
function isElementTracking(options) {
	return options && (options.target || options.offset);
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs
/**
* If the onScroll function has two arguments, it's expecting
* more specific information about the scroll from scrollInfo.
*/
function isOnScrollWithInfo(onScroll) {
	return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
	if (isOnScrollWithInfo(onScroll) || isElementTracking(options)) return scrollInfo((info) => {
		onScroll(info[options.axis].progress, info);
	}, options);
	else return observeTimeline(onScroll, getTimeline(options));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
	if (!container) return noop;
	const optionsWithDefaults = {
		axis,
		container,
		...options
	};
	return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var createScrollMotionValues = () => ({
	scrollX: motionValue(0),
	scrollY: motionValue(0),
	scrollXProgress: motionValue(0),
	scrollYProgress: motionValue(0)
});
var isRefPending = (ref) => {
	if (!ref) return false;
	return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
	return {
		factory: (animation) => {
			let cleanup;
			const start = () => {
				if (isRefPending(container) || isRefPending(target)) {
					microtask.read(start);
					return;
				}
				cleanup = scroll(animation, {
					...options,
					axis,
					container: container?.current || void 0,
					target: target?.current || void 0
				});
			};
			microtask.read(start);
			return () => {
				cancelMicrotask(start);
				cleanup?.();
			};
		},
		times: [0, 1],
		keyframes: [0, 1],
		ease: (v) => v,
		duration: 1
	};
}
function canAccelerateScroll(target, offset) {
	if (typeof window === "undefined") return false;
	return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
	const values = useConstant(createScrollMotionValues);
	if (canAccelerateScroll(target, options.offset)) {
		values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
		values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
	}
	const scrollAnimation = (0, import_react.useRef)(null);
	const needsStart = (0, import_react.useRef)(false);
	const start = (0, import_react.useCallback)(() => {
		scrollAnimation.current = scroll((_progress, { x, y }) => {
			values.scrollX.set(x.current);
			values.scrollXProgress.set(x.progress);
			values.scrollY.set(y.current);
			values.scrollYProgress.set(y.progress);
		}, {
			...options,
			container: container?.current || void 0,
			target: target?.current || void 0
		});
		return () => {
			scrollAnimation.current?.();
		};
	}, [
		container,
		target,
		JSON.stringify(options.offset)
	]);
	useIsomorphicLayoutEffect(() => {
		needsStart.current = false;
		if (isRefPending(container) || isRefPending(target)) {
			needsStart.current = true;
			return;
		} else return start();
	}, [start]);
	(0, import_react.useEffect)(() => {
		if (!needsStart.current) return;
		let cleanup;
		const tryStart = () => {
			const containerPending = isRefPending(container);
			const targetPending = isRefPending(target);
			invariant(!containerPending, "Container ref is defined but not hydrated", "use-scroll-ref");
			invariant(!targetPending, "Target ref is defined but not hydrated", "use-scroll-ref");
			if (!containerPending && !targetPending) cleanup = start();
		};
		microtask.read(tryStart);
		return () => {
			cancelMicrotask(tryStart);
			cleanup?.();
		};
	}, [start]);
	return values;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-motion-value.mjs
/**
* Creates a `MotionValue` to track the state and velocity of a value.
*
* Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
*
* ```jsx
* export const MyComponent = () => {
*   const scale = useMotionValue(1)
*
*   return <motion.div style={{ scale }} />
* }
* ```
*
* @param initial - The initial state.
*
* @public
*/
function useMotionValue(initial) {
	const value = useConstant(() => motionValue(initial));
	/**
	* If this motion value is being used in static mode, like on
	* the Framer canvas, force components to rerender when the motion
	* value is updated.
	*/
	const { isStatic } = (0, import_react.useContext)(MotionConfigContext);
	if (isStatic) {
		const [, setLatest] = (0, import_react.useState)(initial);
		(0, import_react.useEffect)(() => value.on("change", setLatest), []);
	}
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
	/**
	* Initialise the returned motion value. This remains the same between renders.
	*/
	const value = useMotionValue(combineValues());
	/**
	* Create a function that will update the template motion value with the latest values.
	* This is pre-bound so whenever a motion value updates it can schedule its
	* execution in Framesync. If it's already been scheduled it won't be fired twice
	* in a single frame.
	*/
	const updateValue = () => value.set(combineValues());
	/**
	* Synchronously update the motion value with the latest values during the render.
	* This ensures that within a React render, the styles applied to the DOM are up-to-date.
	*/
	updateValue();
	/**
	* Subscribe to all motion values found within the template. Whenever any of them change,
	* schedule an update.
	*/
	useIsomorphicLayoutEffect(() => {
		const scheduleUpdate = () => frame.preRender(updateValue, false, true);
		const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
		return () => {
			subscriptions.forEach((unsubscribe) => unsubscribe());
			cancelFrame(updateValue);
		};
	});
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
	/**
	* Open session of collectMotionValues. Any MotionValue that calls get()
	* will be saved into this array.
	*/
	collectMotionValues.current = [];
	compute();
	const value = useCombineMotionValues(collectMotionValues.current, compute);
	/**
	* Synchronously close session of collectMotionValues.
	*/
	collectMotionValues.current = void 0;
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
	if (typeof input === "function") return useComputed(input);
	if (outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function") return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
	const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRangeOrMap, options);
	const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
	const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
	if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) result.accelerate = {
		...inputAccelerate,
		times: inputRangeOrTransformer,
		keyframes: outputRangeOrMap,
		isTransformed: true,
		...options?.ease ? { ease: options.ease } : {}
	};
	return result;
}
function useListTransform(values, transformer) {
	const latest = useConstant(() => []);
	return useCombineMotionValues(values, () => {
		latest.length = 0;
		const numValues = values.length;
		for (let i = 0; i < numValues; i++) latest[i] = values[i].get();
		return transformer(latest);
	});
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
	/**
	* Capture keys once to ensure hooks are called in consistent order.
	*/
	const keys = useConstant(() => Object.keys(outputMap));
	const output = useConstant(() => ({}));
	for (const key of keys) output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
	return output;
}
//#endregion
//#region components/ProcessStory.tsx
var import_jsx_runtime = require_jsx_runtime();
function ProcessStory({ locale }) {
	const target = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target,
		offset: ["start start", "end end"]
	});
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: target,
		className: "process-scroll",
		"aria-label": locale === "ar" ? "مراحل العمل" : "Project process",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "process-sticky",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "process-track",
				style: { x },
				children: processSteps.map((step, index) => {
					const asset = getMedia(step.image);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "process-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "process-media",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								unoptimized: true,
								src: asset.src,
								alt: asset.alt[locale],
								fill: true,
								sizes: "(max-width: 800px) 85vw, 44vw"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [step.number, " / 04"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "process-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: index === 2 ? locale === "ar" ? "قلب العملية" : "The making point" : locale === "ar" ? "مرحلة المشروع" : "Project stage" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title[locale] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text[locale] })] })
							]
						})]
					}, step.number);
				})
			})
		})
	});
}
//#endregion
export { ProcessStory };
