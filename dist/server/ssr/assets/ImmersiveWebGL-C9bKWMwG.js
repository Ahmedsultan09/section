import { O as __toESM, b as require_react, t as require_jsx_runtime } from "../index.js";
//#region components/ImmersiveWebGL.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var vertexShader = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;
var fragmentShader = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform vec2 u_pointer;
  uniform float u_time;
  uniform float u_scroll;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.52;
    mat2 turn = mat2(0.82, -0.57, 0.57, 0.82);
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p = turn * p * 2.03 + 0.17;
      amplitude *= 0.48;
    }
    return value;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    float drift = u_time * 0.045 + u_scroll * 0.000055;
    vec2 pointer = (u_pointer - 0.5) * vec2(0.34, -0.24);
    vec2 field = uv + pointer;
    field *= mat2(0.94, -0.34, 0.34, 0.94);

    float cloud = fbm(field * 1.45 + vec2(drift, -drift * 0.7));
    float secondary = fbm(field * 3.1 - vec2(drift * 1.4, drift));
    vec2 veneer = field + vec2(cloud * 0.38, secondary * 0.14);

    float longGrain = sin((veneer.x * 34.0) + sin(veneer.y * 3.2) * 4.0 + secondary * 9.0);
    float fineGrain = sin((veneer.x * 92.0) + cloud * 13.0 + veneer.y * 2.0);
    vec2 knotPoint = vec2(0.35 + pointer.x * 0.65, -0.12 + pointer.y * 0.45);
    vec2 knotUv = (field - knotPoint) * vec2(1.0, 1.42);
    float knotRadius = length(knotUv);
    float knotAngle = atan(knotUv.y, knotUv.x);
    float knot = sin(knotRadius * 46.0 - knotAngle * 3.0 + cloud * 8.0 - drift * 3.0);
    float knotBlend = 1.0 - smoothstep(0.16, 0.74, knotRadius);
    float grain = mix(longGrain, knot, knotBlend);

    float broadVein = smoothstep(0.5, 0.93, grain * 0.5 + 0.5);
    float hairline = smoothstep(0.88, 0.985, fineGrain * 0.5 + 0.5);
    float board = abs(fract((field.x + cloud * 0.04 + 1.6) * 3.25) - 0.5);
    float boardSeam = 1.0 - smoothstep(0.475, 0.5, board);

    vec3 charcoal = vec3(0.025, 0.026, 0.019);
    vec3 darkOlive = vec3(0.205, 0.196, 0.137);
    vec3 warmVeneer = vec3(0.47, 0.43, 0.285);
    vec3 signal = vec3(0.996, 0.866, 0.063);
    vec3 color = mix(charcoal, darkOlive, cloud * 0.74 + 0.08);
    color = mix(color, warmVeneer, broadVein * 0.42);
    color = mix(color, signal, hairline * (0.14 + knotBlend * 0.46));
    color *= 1.0 - boardSeam * 0.34;

    float light = 1.0 - smoothstep(0.0, 1.7, length(field - vec2(-0.32, 0.18)));
    float vignette = 1.0 - smoothstep(0.72, 1.85, length(uv));
    color *= 0.64 + light * 0.34 + vignette * 0.22;
    gl_FragColor = vec4(color, 1.0);
  }
`;
function createShader(gl, type, source) {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}
function ImmersiveWebGL() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const gl = canvas.getContext("webgl", {
			alpha: false,
			antialias: false,
			powerPreference: "high-performance"
		});
		if (!gl) return;
		const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
		const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
		if (!vertex || !fragment) return;
		const program = gl.createProgram();
		if (!program) return;
		gl.attachShader(program, vertex);
		gl.attachShader(program, fragment);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			1,
			-1,
			1,
			1
		]), gl.STATIC_DRAW);
		const position = gl.getAttribLocation(program, "a_position");
		const resolution = gl.getUniformLocation(program, "u_resolution");
		const pointerLocation = gl.getUniformLocation(program, "u_pointer");
		const time = gl.getUniformLocation(program, "u_time");
		const scroll = gl.getUniformLocation(program, "u_scroll");
		const pointer = {
			x: .5,
			y: .5
		};
		let frame = 0;
		const resize = () => {
			const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
			const width = Math.round(canvas.clientWidth * ratio);
			const height = Math.round(canvas.clientHeight * ratio);
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
			}
			gl.viewport(0, 0, width, height);
		};
		const onPointerMove = (event) => {
			pointer.x += (event.clientX / window.innerWidth - pointer.x) * .18;
			pointer.y += (event.clientY / window.innerHeight - pointer.y) * .18;
		};
		const render = (now) => {
			resize();
			gl.useProgram(program);
			gl.enableVertexAttribArray(position);
			gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
			gl.uniform2f(resolution, canvas.width, canvas.height);
			gl.uniform2f(pointerLocation, pointer.x, pointer.y);
			gl.uniform1f(time, reducedMotion ? 0 : now * .001);
			gl.uniform1f(scroll, window.scrollY);
			gl.drawArrays(gl.TRIANGLES, 0, 6);
			if (!reducedMotion) frame = window.requestAnimationFrame(render);
		};
		window.addEventListener("pointermove", onPointerMove, { passive: true });
		render(0);
		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.cancelAnimationFrame(frame);
			if (buffer) gl.deleteBuffer(buffer);
			gl.deleteProgram(program);
			gl.deleteShader(vertex);
			gl.deleteShader(fragment);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "immersive-webgl",
		"aria-hidden": "true"
	});
}
//#endregion
export { ImmersiveWebGL };
