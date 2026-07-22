"use client";

import { useEffect, useRef, useState } from "react";
import type { DesignId } from "@/lib/site-types";

type ConnectionNavigator = Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };

export function AdaptiveWebGL({ mode }: { mode: Extract<DesignId, "assemblage" | "nocturne"> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as ConnectionNavigator).connection;
    const lowData = Boolean(connection?.saveData || connection?.effectiveType === "2g");
    if (reduced || lowData) { setFallback(true); return; }

    let disposed = false;
    let frame = 0;
    let visible = true;
    let renderer: import("three").WebGLRenderer | undefined;
    let scene: import("three").Scene | undefined;
    let camera: import("three").PerspectiveCamera | undefined;
    let group: import("three").Group | undefined;
    let onResize: (() => void) | undefined;
    const materials: import("three").Material[] = [];
    const geometries: import("three").BufferGeometry[] = [];
    const textures: import("three").Texture[] = [];
    const pointer = { x: 0, y: 0 };

    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.45;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.25;
    };
    const onContextLost = (event: Event) => { event.preventDefault(); setFallback(true); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.01 });
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    canvas.addEventListener("webglcontextlost", onContextLost);

    void (async () => {
      try {
        const THREE = await import("three");
        if (disposed) return;
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1.25 : 1.8));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0, 9);
        group = new THREE.Group();
        scene.add(group);

        const ambient = new THREE.AmbientLight(0xffffff, mode === "assemblage" ? 2.4 : 1.1);
        const key = new THREE.DirectionalLight(mode === "assemblage" ? 0xfbf5de : 0xfedd10, 3.2);
        key.position.set(3, 4, 6);
        scene.add(ambient, key);

        const bgGeometry = new THREE.PlaneGeometry(18, 11, 28, 18);
        const bgMaterial = new THREE.ShaderMaterial({
          transparent: true,
          uniforms: { uTime: { value: 0 }, uDark: { value: mode === "nocturne" ? 1 : 0 } },
          vertexShader: "varying vec2 vUv; void main(){vUv=uv; vec3 p=position; p.z += sin(p.x*.65)*.08; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",
          fragmentShader: "varying vec2 vUv; uniform float uTime; uniform float uDark; void main(){float line=.5+.5*sin((vUv.x*9.+vUv.y*5.)+uTime*.22); vec3 light=mix(vec3(.98,.96,.87),vec3(.65,.62,.48),line*.18); vec3 dark=mix(vec3(.015,.014,.01),vec3(.34,.31,.18),line*.18); gl_FragColor=vec4(mix(light,dark,uDark),.92);}",
        });
        materials.push(bgMaterial); geometries.push(bgGeometry);
        const background = new THREE.Mesh(bgGeometry, bgMaterial);
        background.position.z = -4;
        scene.add(background);

        const imageSources = mode === "assemblage"
          ? ["/assets/171467_688502.jpeg", "/assets/217375_739589.jpeg", "/drive/kitchens/kitchen-03-a.webp"]
          : ["/drive/dressing/dressing-08.webp", "/assets/141202_527604.jpeg", "/drive/kitchens/kitchen-04-a.webp", "/assets/474743_155959.jpg"];
        const loader = new THREE.TextureLoader();
        const loaded = await Promise.all(imageSources.map((src) => loader.loadAsync(src).catch(() => null)));
        if (disposed) return;

        loaded.forEach((texture, index) => {
          if (!texture || !group) return;
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = 4;
          textures.push(texture);
          const geometry = new THREE.PlaneGeometry(mode === "assemblage" ? 2.7 : 3.1, mode === "assemblage" ? 3.65 : 4.15, 16, 16);
          const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: mode === "assemblage" ? 0.94 : 0.86, side: THREE.DoubleSide });
          geometries.push(geometry); materials.push(material);
          const mesh = new THREE.Mesh(geometry, material);
          if (mode === "assemblage") {
            mesh.position.set((index - 1) * 2.25, index === 1 ? 0.45 : -0.35, index * -0.35);
            mesh.rotation.set(index === 1 ? -0.04 : 0.08, (index - 1) * -0.18, (index - 1) * 0.04);
          } else {
            const angle = (index / loaded.length) * Math.PI * 1.5 - Math.PI * 0.7;
            mesh.position.set(Math.sin(angle) * 3.3, (index % 2 ? -0.6 : 0.75), Math.cos(angle) * 2.2 - 0.5);
            mesh.rotation.y = -angle * 0.42;
            mesh.rotation.z = (index - 1.5) * 0.06;
          }
          group.add(mesh);
        });

        if (mode === "assemblage") {
          const colors = [0xfedd10, 0x58533a, 0xffffff, 0xa49e7b];
          colors.forEach((color, index) => {
            const geometry = new THREE.BoxGeometry(index % 2 ? 0.18 : 3.8, index % 2 ? 5.1 : 0.12, 0.2);
            const material = new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04 });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(index % 2 ? (index < 2 ? -3.7 : 3.6) : 0, index % 2 ? 0 : (index < 2 ? -2.35 : 2.45), -0.15);
            materials.push(material); geometries.push(geometry); group.add(mesh);
          });
        }

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

        const tick = (time: number) => {
          if (disposed) return;
          frame = requestAnimationFrame(tick);
          if (!visible || document.hidden || !renderer || !scene || !camera || !group) return;
          bgMaterial.uniforms.uTime.value = time * 0.001;
          const scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
          group.rotation.y += ((pointer.x + (mode === "nocturne" ? time * 0.000035 : 0)) - group.rotation.y) * 0.045;
          group.rotation.x += ((-pointer.y + scroll * 0.08) - group.rotation.x) * 0.04;
          group.position.y = Math.sin(time * 0.00045) * 0.08 - scroll * 0.22;
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

  return <canvas ref={canvasRef} className={`adaptive-webgl ${fallback ? "is-fallback" : ""}`} aria-hidden="true" />;
}
