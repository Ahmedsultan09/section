import { T as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
//#region components/AdaptiveWebGL.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var nocturneHeroLayout = [
	{
		x: -4.1,
		y: .72,
		z: .55,
		scale: .78,
		rotation: -.08
	},
	{
		x: -2.5,
		y: 1.52,
		z: -.25,
		scale: .76,
		rotation: .07
	},
	{
		x: -.8,
		y: 1.76,
		z: -.5,
		scale: .84,
		rotation: -.04
	},
	{
		x: .95,
		y: 1.18,
		z: .12,
		scale: .88,
		rotation: .06
	},
	{
		x: 2.75,
		y: .92,
		z: -.6,
		scale: .78,
		rotation: -.07
	},
	{
		x: 4.05,
		y: .05,
		z: .2,
		scale: .7,
		rotation: .05
	},
	{
		x: 2.15,
		y: -.9,
		z: .8,
		scale: .82,
		rotation: -.05
	},
	{
		x: -.35,
		y: -.8,
		z: .55,
		scale: .84,
		rotation: .04
	}
];
var nocturneHeroLayoutMobile = [
	{
		x: -1.25,
		y: 2.08,
		z: .55,
		scale: .64,
		rotation: -.06
	},
	{
		x: -.42,
		y: 2.32,
		z: -.25,
		scale: .62,
		rotation: .05
	},
	{
		x: .42,
		y: 2.18,
		z: -.5,
		scale: .66,
		rotation: -.04
	},
	{
		x: 1.25,
		y: 1.88,
		z: .12,
		scale: .64,
		rotation: .06
	},
	{
		x: -1.25,
		y: .05,
		z: -.6,
		scale: .64,
		rotation: -.07
	},
	{
		x: -.42,
		y: -.12,
		z: .8,
		scale: .62,
		rotation: .04
	},
	{
		x: .42,
		y: -.22,
		z: .2,
		scale: .64,
		rotation: -.05
	},
	{
		x: 1.25,
		y: 0,
		z: .55,
		scale: .62,
		rotation: .04
	}
];
function AdaptiveWebGL({ mode, imageSources = [] }) {
	const canvasRef = (0, import_react.useRef)(null);
	const [fallback, setFallback] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const connection = navigator.connection;
		const lowData = Boolean(connection?.saveData || connection?.effectiveType === "2g");
		if (reduced || lowData) {
			const fallbackFrame = requestAnimationFrame(() => setFallback(true));
			return () => cancelAnimationFrame(fallbackFrame);
		}
		let disposed = false;
		let frame = 0;
		let visible = true;
		let renderer;
		let scene;
		let camera;
		let group;
		let onResize;
		const materials = [];
		const geometries = [];
		const textures = [];
		const nocturneFrames = [];
		const pointer = {
			x: 0,
			y: 0,
			dragOffset: 0,
			velocity: 0,
			dragging: false,
			pointerId: -1,
			lastX: 0
		};
		const onPointer = (event) => {
			pointer.x = (event.clientX / window.innerWidth - .5) * .45;
			pointer.y = (event.clientY / window.innerHeight - .5) * .25;
		};
		const onPointerDown = (event) => {
			if (!event.isPrimary || event.button !== 0) return;
			pointer.dragging = true;
			pointer.pointerId = event.pointerId;
			pointer.lastX = event.clientX;
			pointer.velocity = 0;
			canvas.setPointerCapture(event.pointerId);
			canvas.dataset.dragging = "true";
			if (event.pointerType !== "touch") event.preventDefault();
		};
		const onPointerDrag = (event) => {
			if (!pointer.dragging || pointer.pointerId !== event.pointerId) return;
			const delta = event.clientX - pointer.lastX;
			pointer.lastX = event.clientX;
			pointer.dragOffset += delta * .008;
			pointer.velocity = delta * 8e-4;
			if (event.cancelable) event.preventDefault();
		};
		const onPointerUp = (event) => {
			if (!pointer.dragging || pointer.pointerId !== event.pointerId) return;
			pointer.dragging = false;
			pointer.pointerId = -1;
			delete canvas.dataset.dragging;
			if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
		};
		const onContextLost = (event) => {
			event.preventDefault();
			setFallback(true);
		};
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
		}, { threshold: .01 });
		observer.observe(canvas);
		window.addEventListener("pointermove", onPointer, { passive: true });
		canvas.addEventListener("pointerdown", onPointerDown);
		canvas.addEventListener("pointermove", onPointerDrag);
		canvas.addEventListener("pointerup", onPointerUp);
		canvas.addEventListener("pointercancel", onPointerUp);
		canvas.addEventListener("webglcontextlost", onContextLost);
		(async () => {
			try {
				const THREE = await import("./three.module-p5OdRltR.js");
				if (disposed) return;
				renderer = new THREE.WebGLRenderer({
					canvas,
					antialias: true,
					alpha: true,
					powerPreference: "high-performance"
				});
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 2 : 1.8));
				renderer.outputColorSpace = THREE.SRGBColorSpace;
				scene = new THREE.Scene();
				scene.background = new THREE.Color(mode === "nocturne" ? 460549 : 16512478);
				camera = new THREE.PerspectiveCamera(36, 1, .1, 100);
				camera.position.set(0, 0, 9);
				group = new THREE.Group();
				scene.add(group);
				const ambient = new THREE.AmbientLight(16777215, mode === "assemblage" ? 2.4 : 1.1);
				const key = new THREE.DirectionalLight(mode === "assemblage" ? 16512478 : 16702736, 3.2);
				key.position.set(3, 4, 6);
				scene.add(ambient, key);
				const defaultImageSources = mode === "assemblage" ? [
					"/assets/171467_688502.jpeg",
					"/assets/217375_739589.jpeg",
					"/drive/kitchens/kitchen-03-a.webp"
				] : [
					"/drive/dressing/dressing-01-01.webp",
					"/assets/141202_527604.jpeg",
					"/drive/kitchens/kitchen-04-a.webp",
					"/assets/474743_155959.jpg"
				];
				const resolvedImageSources = (imageSources.length ? imageSources : defaultImageSources).slice(0, mode === "nocturne" ? nocturneHeroLayout.length : 6);
				const loader = new THREE.TextureLoader();
				const loaded = await Promise.all(resolvedImageSources.map((src) => loader.loadAsync(src).catch(() => null)));
				if (disposed) return;
				loaded.forEach((texture, index) => {
					const targetGroup = group;
					if (!texture || !targetGroup) return;
					texture.colorSpace = THREE.SRGBColorSpace;
					texture.anisotropy = Math.min(renderer?.capabilities.getMaxAnisotropy() ?? 4, 8);
					textures.push(texture);
					const isNocturne = mode === "nocturne";
					const frameWidth = isNocturne ? 2.55 : 2.7;
					const frameHeight = isNocturne ? 3.38 : 3.65;
					const geometry = new THREE.PlaneGeometry(frameWidth, frameHeight, 1, 1);
					const image = texture.image;
					const imageAspect = image?.width && image.height ? image.width / image.height : 1;
					const material = isNocturne ? new THREE.ShaderMaterial({
						uniforms: {
							uTexture: { value: texture },
							uImageAspect: { value: imageAspect },
							uFrameAspect: { value: frameWidth / frameHeight },
							uOpacity: { value: .96 },
							uCornerRadius: { value: .18 }
						},
						vertexShader: "varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
						fragmentShader: "varying vec2 vUv; uniform sampler2D uTexture; uniform float uImageAspect; uniform float uFrameAspect; uniform float uOpacity; uniform float uCornerRadius; float roundedBoxSdf(vec2 p, vec2 b, float r){vec2 q=abs(p)-b+r; return length(max(q,0.0))+min(max(q.x,q.y),0.0)-r;} void main(){vec2 imageUv=vUv; if(uImageAspect>uFrameAspect){imageUv.x=(vUv.x-.5)*(uFrameAspect/uImageAspect)+.5;}else{imageUv.y=(vUv.y-.5)*(uImageAspect/uFrameAspect)+.5;} vec3 color=texture2D(uTexture,imageUv).rgb; color=pow(color,vec3(.96)); color=mix(color,color*vec3(1.04,1.0,.9),.22); float distance=roundedBoxSdf(vUv*2.0-1.0,vec2(1.0),uCornerRadius); float alpha=1.0-smoothstep(0.0,.018,distance); gl_FragColor=vec4(color,uOpacity*alpha);}",
						side: THREE.DoubleSide,
						transparent: true,
						depthWrite: false
					}) : new THREE.MeshBasicMaterial({
						map: texture,
						transparent: true,
						opacity: .94,
						side: THREE.DoubleSide
					});
					geometries.push(geometry);
					materials.push(material);
					const frame = new THREE.Group();
					const backingInset = isNocturne ? .06 : .16;
					const backingGeometry = new THREE.PlaneGeometry(frameWidth + backingInset, frameHeight + backingInset);
					const backingMaterial = isNocturne ? new THREE.ShaderMaterial({
						uniforms: {
							uColor: { value: new THREE.Color(0) },
							uCornerRadius: { value: .2 }
						},
						vertexShader: "varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
						fragmentShader: "varying vec2 vUv; uniform vec3 uColor; uniform float uCornerRadius; float roundedBoxSdf(vec2 p, vec2 b, float r){vec2 q=abs(p)-b+r; return length(max(q,0.0))+min(max(q.x,q.y),0.0)-r;} void main(){float distance=roundedBoxSdf(vUv*2.0-1.0,vec2(1.0),uCornerRadius); float alpha=1.0-smoothstep(-.04,.08,distance); gl_FragColor=vec4(uColor,.62*alpha);}",
						transparent: true,
						depthWrite: false,
						side: THREE.DoubleSide
					}) : new THREE.MeshBasicMaterial({
						color: 723720,
						transparent: true,
						opacity: .92,
						side: THREE.DoubleSide
					});
					const backing = new THREE.Mesh(backingGeometry, backingMaterial);
					backing.position.set(isNocturne ? .045 : 0, isNocturne ? -.075 : 0, -.04);
					frame.add(backing);
					geometries.push(backingGeometry);
					materials.push(backingMaterial);
					const mesh = new THREE.Mesh(geometry, material);
					frame.add(mesh);
					if (mode === "assemblage") {
						frame.position.set((index - 1) * 2.25, index === 1 ? .45 : -.35, index * -.35);
						frame.rotation.set(index === 1 ? -.04 : .08, (index - 1) * -.18, (index - 1) * .04);
					} else {
						const layout = nocturneHeroLayout[index % nocturneHeroLayout.length];
						const mobileLayout = nocturneHeroLayoutMobile[index % nocturneHeroLayoutMobile.length];
						frame.position.set(layout.x, layout.y, layout.z);
						frame.rotation.set(0, 0, layout.rotation);
						frame.scale.setScalar(layout.scale);
						nocturneFrames.push({
							object: frame,
							x: layout.x,
							y: layout.y,
							z: layout.z,
							scale: layout.scale,
							rotation: layout.rotation,
							mobileX: mobileLayout.x,
							mobileY: mobileLayout.y,
							mobileZ: mobileLayout.z,
							mobileScale: mobileLayout.scale,
							phase: index * .9
						});
					}
					targetGroup.add(frame);
				});
				if (mode === "assemblage") {
					const targetGroup = group;
					if (!targetGroup) return;
					[
						16702736,
						5788474,
						16777215,
						10788475
					].forEach((color, index) => {
						const geometry = new THREE.BoxGeometry(index % 2 ? .18 : 3.8, index % 2 ? 5.1 : .12, .2);
						const material = new THREE.MeshStandardMaterial({
							color,
							roughness: .72,
							metalness: .04
						});
						const mesh = new THREE.Mesh(geometry, material);
						mesh.position.set(index % 2 ? index < 2 ? -3.7 : 3.6 : 0, index % 2 ? 0 : index < 2 ? -2.35 : 2.45, -.15);
						materials.push(material);
						geometries.push(geometry);
						targetGroup.add(mesh);
					});
				}
				const resize = () => {
					if (!renderer || !camera) return;
					const width = canvas.clientWidth || window.innerWidth;
					const height = canvas.clientHeight || window.innerHeight;
					renderer.setSize(width, height, false);
					camera.aspect = width / height;
					camera.fov = width < 760 ? 48 : width < 1100 ? 42 : 36;
					camera.position.z = width < 760 ? 10.8 : width < 1100 ? 9.8 : 9;
					camera.updateProjectionMatrix();
					const responsiveScale = width < 760 ? .82 : width < 1100 ? .92 : 1;
					group?.scale.setScalar(responsiveScale);
				};
				onResize = () => resize();
				window.addEventListener("resize", onResize);
				resize();
				const tick = (time) => {
					if (disposed) return;
					frame = requestAnimationFrame(tick);
					if (!visible || document.hidden || !renderer || !scene || !camera || !group) return;
					const scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
					if (!pointer.dragging) {
						pointer.dragOffset += pointer.velocity;
						pointer.velocity *= .94;
					}
					if (mode === "nocturne") {
						const autoRotation = time * 18e-6;
						const targetX = pointer.x * .55 + pointer.dragOffset * .18;
						group.position.x += (targetX - group.position.x) * (pointer.dragging ? .14 : .035);
						group.rotation.y += (pointer.x + pointer.dragOffset + autoRotation - group.rotation.y) * (pointer.dragging ? .16 : .045);
						group.rotation.z += (pointer.x * -.018 - group.rotation.z) * .035;
						const heroRotation = group.rotation.y;
						const compact = window.innerWidth < 760;
						nocturneFrames.forEach(({ object, x, y, z, scale, rotation, mobileX, mobileY, mobileZ, mobileScale, phase }) => {
							const orbit = time * 32e-5 + phase;
							const baseX = compact ? mobileX : x;
							const baseY = compact ? mobileY : y;
							const baseZ = compact ? mobileZ : z;
							object.position.x = baseX + Math.sin(orbit * .9) * (compact ? .045 : .07);
							object.position.y = baseY + Math.cos(orbit * 1.1) * (compact ? .03 : .045);
							object.position.z = baseZ + Math.sin(orbit * .8) * (compact ? .05 : .08);
							object.scale.setScalar(compact ? mobileScale : scale);
							object.rotation.y = -heroRotation;
							object.rotation.z = rotation + Math.sin(orbit) * .035;
						});
					} else {
						group.rotation.y += (pointer.x + pointer.dragOffset - group.rotation.y) * (pointer.dragging ? .16 : .045);
						group.rotation.x += (-pointer.y + scroll * .08 - group.rotation.x) * .04;
					}
					group.position.y = Math.sin(time * 45e-5) * .08 - scroll * .22 + (mode === "nocturne" && window.innerWidth < 760 ? .62 : 0);
					renderer.render(scene, camera);
				};
				frame = requestAnimationFrame(tick);
			} catch {
				setFallback(true);
			}
		})();
		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			observer.disconnect();
			if (onResize) window.removeEventListener("resize", onResize);
			window.removeEventListener("pointermove", onPointer);
			canvas.removeEventListener("pointerdown", onPointerDown);
			canvas.removeEventListener("pointermove", onPointerDrag);
			canvas.removeEventListener("pointerup", onPointerUp);
			canvas.removeEventListener("pointercancel", onPointerUp);
			canvas.removeEventListener("webglcontextlost", onContextLost);
			textures.forEach((texture) => texture.dispose());
			materials.forEach((material) => material.dispose());
			geometries.forEach((geometry) => geometry.dispose());
			renderer?.dispose();
		};
	}, [imageSources, mode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: `adaptive-webgl ${fallback ? "is-fallback" : ""}`,
		"aria-hidden": "true"
	});
}
//#endregion
export { AdaptiveWebGL };
