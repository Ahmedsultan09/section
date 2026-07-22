import{a as e}from"./rolldown-runtime-BYbx6iT9.js";import{i as t,r as n}from"./framework-DkySH6nJ.js";var r=e(t(),1),i=n(),a=`
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,o=`
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
`;function s(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function c(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,r=t.getContext(`webgl`,{alpha:!1,antialias:!1,powerPreference:`high-performance`});if(!r)return;let i=s(r,r.VERTEX_SHADER,a),c=s(r,r.FRAGMENT_SHADER,o);if(!i||!c)return;let l=r.createProgram();if(!l||(r.attachShader(l,i),r.attachShader(l,c),r.linkProgram(l),!r.getProgramParameter(l,r.LINK_STATUS)))return;let u=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,u),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let d=r.getAttribLocation(l,`a_position`),f=r.getUniformLocation(l,`u_resolution`),p=r.getUniformLocation(l,`u_pointer`),m=r.getUniformLocation(l,`u_time`),h=r.getUniformLocation(l,`u_scroll`),g={x:.5,y:.5},_=0,v=()=>{let e=Math.min(window.devicePixelRatio||1,1.5),n=Math.round(t.clientWidth*e),i=Math.round(t.clientHeight*e);(t.width!==n||t.height!==i)&&(t.width=n,t.height=i),r.viewport(0,0,n,i)},y=e=>{g.x+=(e.clientX/window.innerWidth-g.x)*.18,g.y+=(e.clientY/window.innerHeight-g.y)*.18},b=e=>{v(),r.useProgram(l),r.enableVertexAttribArray(d),r.vertexAttribPointer(d,2,r.FLOAT,!1,0,0),r.uniform2f(f,t.width,t.height),r.uniform2f(p,g.x,g.y),r.uniform1f(m,n?0:e*.001),r.uniform1f(h,window.scrollY),r.drawArrays(r.TRIANGLES,0,6),n||(_=window.requestAnimationFrame(b))};return window.addEventListener(`pointermove`,y,{passive:!0}),b(0),()=>{window.removeEventListener(`pointermove`,y),window.cancelAnimationFrame(_),u&&r.deleteBuffer(u),r.deleteProgram(l),r.deleteShader(i),r.deleteShader(c)}},[]),(0,i.jsx)(`canvas`,{ref:e,className:`immersive-webgl`,"aria-hidden":`true`})}export{c as ImmersiveWebGL};