import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
//#region components/AdaptiveWebGL.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdaptiveWebGL({ mode }) {
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
		const pointer = {
			x: 0,
			y: 0
		};
		const onPointer = (event) => {
			pointer.x = (event.clientX / window.innerWidth - .5) * .45;
			pointer.y = (event.clientY / window.innerHeight - .5) * .25;
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
		canvas.addEventListener("webglcontextlost", onContextLost);
		(async () => {
			try {
				const THREE = await import("./three.module-vpfzRXaK.js");
				if (disposed) return;
				renderer = new THREE.WebGLRenderer({
					canvas,
					antialias: true,
					alpha: true,
					powerPreference: "high-performance"
				});
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1.25 : 1.8));
				renderer.outputColorSpace = THREE.SRGBColorSpace;
				scene = new THREE.Scene();
				camera = new THREE.PerspectiveCamera(36, 1, .1, 100);
				camera.position.set(0, 0, 9);
				group = new THREE.Group();
				scene.add(group);
				const ambient = new THREE.AmbientLight(16777215, mode === "assemblage" ? 2.4 : 1.1);
				const key = new THREE.DirectionalLight(mode === "assemblage" ? 16512478 : 16702736, 3.2);
				key.position.set(3, 4, 6);
				scene.add(ambient, key);
				const bgGeometry = new THREE.PlaneGeometry(18, 11, 28, 18);
				const bgMaterial = new THREE.ShaderMaterial({
					transparent: true,
					uniforms: {
						uTime: { value: 0 },
						uDark: { value: mode === "nocturne" ? 1 : 0 }
					},
					vertexShader: "varying vec2 vUv; void main(){vUv=uv; vec3 p=position; p.z += sin(p.x*.65)*.08; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",
					fragmentShader: "varying vec2 vUv; uniform float uTime; uniform float uDark; void main(){float line=.5+.5*sin((vUv.x*9.+vUv.y*5.)+uTime*.22); vec3 light=mix(vec3(.98,.96,.87),vec3(.65,.62,.48),line*.18); vec3 dark=mix(vec3(.015,.014,.01),vec3(.34,.31,.18),line*.18); gl_FragColor=vec4(mix(light,dark,uDark),.92);}"
				});
				materials.push(bgMaterial);
				geometries.push(bgGeometry);
				const background = new THREE.Mesh(bgGeometry, bgMaterial);
				background.position.z = -4;
				scene.add(background);
				const imageSources = mode === "assemblage" ? [
					"/assets/171467_688502.jpeg",
					"/assets/217375_739589.jpeg",
					"/drive/kitchens/kitchen-03-a.webp"
				] : [
					"/drive/dressing/dressing-08.webp",
					"/assets/141202_527604.jpeg",
					"/drive/kitchens/kitchen-04-a.webp",
					"/assets/474743_155959.jpg"
				];
				const loader = new THREE.TextureLoader();
				const loaded = await Promise.all(imageSources.map((src) => loader.loadAsync(src).catch(() => null)));
				if (disposed) return;
				loaded.forEach((texture, index) => {
					if (!texture || !group) return;
					texture.colorSpace = THREE.SRGBColorSpace;
					texture.anisotropy = 4;
					textures.push(texture);
					const geometry = new THREE.PlaneGeometry(mode === "assemblage" ? 2.7 : 3.1, mode === "assemblage" ? 3.65 : 4.15, 16, 16);
					const material = new THREE.MeshBasicMaterial({
						map: texture,
						transparent: true,
						opacity: mode === "assemblage" ? .94 : .86,
						side: THREE.DoubleSide
					});
					geometries.push(geometry);
					materials.push(material);
					const mesh = new THREE.Mesh(geometry, material);
					if (mode === "assemblage") {
						mesh.position.set((index - 1) * 2.25, index === 1 ? .45 : -.35, index * -.35);
						mesh.rotation.set(index === 1 ? -.04 : .08, (index - 1) * -.18, (index - 1) * .04);
					} else {
						const angle = index / loaded.length * Math.PI * 1.5 - Math.PI * .7;
						mesh.position.set(Math.sin(angle) * 3.3, index % 2 ? -.6 : .75, Math.cos(angle) * 2.2 - .5);
						mesh.rotation.y = -angle * .42;
						mesh.rotation.z = (index - 1.5) * .06;
					}
					group.add(mesh);
				});
				if (mode === "assemblage") [
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
					group.add(mesh);
				});
				const resize = () => {
					if (!renderer || !camera) return;
					const width = canvas.clientWidth || window.innerWidth;
					const height = canvas.clientHeight || window.innerHeight;
					renderer.setSize(width, height, false);
					camera.aspect = width / height;
					camera.updateProjectionMatrix();
				};
				onResize = () => resize();
				window.addEventListener("resize", onResize);
				resize();
				const tick = (time) => {
					if (disposed) return;
					frame = requestAnimationFrame(tick);
					if (!visible || document.hidden || !renderer || !scene || !camera || !group) return;
					bgMaterial.uniforms.uTime.value = time * .001;
					const scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
					group.rotation.y += (pointer.x + (mode === "nocturne" ? time * 35e-6 : 0) - group.rotation.y) * .045;
					group.rotation.x += (-pointer.y + scroll * .08 - group.rotation.x) * .04;
					group.position.y = Math.sin(time * 45e-5) * .08 - scroll * .22;
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
			canvas.removeEventListener("webglcontextlost", onContextLost);
			textures.forEach((texture) => texture.dispose());
			materials.forEach((material) => material.dispose());
			geometries.forEach((geometry) => geometry.dispose());
			renderer?.dispose();
		};
	}, [mode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: `adaptive-webgl ${fallback ? "is-fallback" : ""}`,
		"aria-hidden": "true"
	});
}
//#endregion
export { AdaptiveWebGL };
