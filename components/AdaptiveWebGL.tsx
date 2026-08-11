"use client";

import { useEffect, useRef, useState } from "react";
import type { DesignId } from "@/lib/site-types";

type ConnectionNavigator = Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };

const nocturneHeroLayout = [
  { x: -4.1, y: 0.72, z: 0.55, scale: 0.78, rotation: -0.08 },
  { x: -2.5, y: 1.52, z: -0.25, scale: 0.76, rotation: 0.07 },
  { x: -0.8, y: 1.76, z: -0.5, scale: 0.84, rotation: -0.04 },
  { x: 0.95, y: 1.18, z: 0.12, scale: 0.88, rotation: 0.06 },
  { x: 2.75, y: 0.92, z: -0.6, scale: 0.78, rotation: -0.07 },
  { x: 4.05, y: 0.05, z: 0.2, scale: 0.7, rotation: 0.05 },
  { x: 2.15, y: -0.9, z: 0.8, scale: 0.82, rotation: -0.05 },
  { x: -0.35, y: -0.8, z: 0.55, scale: 0.84, rotation: 0.04 },
] as const;

const nocturneHeroLayoutMobile = [
  { x: -1.45, y: 2.58, z: 0.55, scale: 0.58, rotation: -0.06 },
  { x: -0.48, y: 2.82, z: -0.25, scale: 0.56, rotation: 0.05 },
  { x: 0.52, y: 2.68, z: -0.5, scale: 0.6, rotation: -0.04 },
  { x: 1.5, y: 2.38, z: 0.12, scale: 0.58, rotation: 0.06 },
  { x: -1.42, y: -0.45, z: -0.6, scale: 0.58, rotation: -0.07 },
  { x: -0.48, y: -0.62, z: 0.8, scale: 0.56, rotation: 0.04 },
  { x: 0.52, y: -0.72, z: 0.2, scale: 0.58, rotation: -0.05 },
  { x: 1.48, y: -0.5, z: 0.55, scale: 0.56, rotation: 0.04 },
] as const;

export function AdaptiveWebGL({
  mode,
  imageSources = [],
}: {
  mode: Extract<DesignId, "assemblage" | "nocturne">;
  imageSources?: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as ConnectionNavigator).connection;
    const lowData = Boolean(connection?.saveData || connection?.effectiveType === "2g");
    if (reduced || lowData) {
      const fallbackFrame = requestAnimationFrame(() => setFallback(true));
      return () => cancelAnimationFrame(fallbackFrame);
    }

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
    const nocturneFrames: Array<{
      object: import("three").Group;
      x: number;
      y: number;
      z: number;
      scale: number;
      rotation: number;
      mobileX: number;
      mobileY: number;
      mobileZ: number;
      mobileScale: number;
      phase: number;
    }> = [];
    const pointer = {
      x: 0,
      y: 0,
      dragOffset: 0,
      velocity: 0,
      dragging: false,
      pointerId: -1,
      lastX: 0,
    };

    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.45;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.25;
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0) return;
      pointer.dragging = true;
      pointer.pointerId = event.pointerId;
      pointer.lastX = event.clientX;
      pointer.velocity = 0;
      canvas.setPointerCapture(event.pointerId);
      canvas.dataset.dragging = "true";
      if (event.pointerType !== "touch") event.preventDefault();
    };
    const onPointerDrag = (event: PointerEvent) => {
      if (!pointer.dragging || pointer.pointerId !== event.pointerId) return;
      const delta = event.clientX - pointer.lastX;
      pointer.lastX = event.clientX;
      pointer.dragOffset += delta * 0.008;
      pointer.velocity = delta * 0.0008;
      if (event.cancelable) event.preventDefault();
    };
    const onPointerUp = (event: PointerEvent) => {
      if (!pointer.dragging || pointer.pointerId !== event.pointerId) return;
      pointer.dragging = false;
      pointer.pointerId = -1;
      delete canvas.dataset.dragging;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    };
    const onContextLost = (event: Event) => { event.preventDefault(); setFallback(true); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.01 });
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerDrag);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("webglcontextlost", onContextLost);

    void (async () => {
      try {
        const THREE = await import("three");
        if (disposed) return;
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1.25 : 1.8));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        scene = new THREE.Scene();
        scene.background = new THREE.Color(mode === "nocturne" ? 0x070705 : 0xfbf5de);
        camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0, 9);
        group = new THREE.Group();
        scene.add(group);

        const ambient = new THREE.AmbientLight(0xffffff, mode === "assemblage" ? 2.4 : 1.1);
        const key = new THREE.DirectionalLight(mode === "assemblage" ? 0xfbf5de : 0xfedd10, 3.2);
        key.position.set(3, 4, 6);
        scene.add(ambient, key);

        const defaultImageSources = mode === "assemblage"
          ? ["/assets/171467_688502.jpeg", "/assets/217375_739589.jpeg", "/drive/kitchens/kitchen-03-a.webp"]
          : ["/drive/dressing/dressing-01-01.webp", "/assets/141202_527604.jpeg", "/drive/kitchens/kitchen-04-a.webp", "/assets/474743_155959.jpg"];
        const resolvedImageSources = (imageSources.length ? imageSources : defaultImageSources).slice(0, mode === "nocturne" ? nocturneHeroLayout.length : 6);
        const loader = new THREE.TextureLoader();
        const loaded = await Promise.all(resolvedImageSources.map((src) => loader.loadAsync(src).catch(() => null)));
        if (disposed) return;

        loaded.forEach((texture, index) => {
          const targetGroup = group;
          if (!texture || !targetGroup) return;
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = 4;
          textures.push(texture);
          const isNocturne = mode === "nocturne";
          const frameWidth = isNocturne ? 2.55 : 2.7;
          const frameHeight = isNocturne ? 3.38 : 3.65;
          const geometry = new THREE.PlaneGeometry(frameWidth, frameHeight, 1, 1);
          const image = texture.image as { width?: number; height?: number } | undefined;
          const imageAspect = image?.width && image.height ? image.width / image.height : 1;
          const material = isNocturne
            ? new THREE.ShaderMaterial({
              uniforms: {
                uTexture: { value: texture },
                uImageAspect: { value: imageAspect },
                uFrameAspect: { value: frameWidth / frameHeight },
                uOpacity: { value: 0.96 },
                uCornerRadius: { value: 0.18 },
              },
              vertexShader: "varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
              fragmentShader: "varying vec2 vUv; uniform sampler2D uTexture; uniform float uImageAspect; uniform float uFrameAspect; uniform float uOpacity; uniform float uCornerRadius; float roundedBoxSdf(vec2 p, vec2 b, float r){vec2 q=abs(p)-b+r; return length(max(q,0.0))+min(max(q.x,q.y),0.0)-r;} void main(){vec2 imageUv=vUv; if(uImageAspect>uFrameAspect){imageUv.x=(vUv.x-.5)*(uFrameAspect/uImageAspect)+.5;}else{imageUv.y=(vUv.y-.5)*(uImageAspect/uFrameAspect)+.5;} vec3 color=texture2D(uTexture,imageUv).rgb; color=pow(color,vec3(.96)); color=mix(color,color*vec3(1.04,1.0,.9),.22); float distance=roundedBoxSdf(vUv*2.0-1.0,vec2(1.0),uCornerRadius); float alpha=1.0-smoothstep(0.0,.018,distance); gl_FragColor=vec4(color,uOpacity*alpha);}",
              side: THREE.DoubleSide,
              transparent: true,
              depthWrite: false,
            })
            : new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.94, side: THREE.DoubleSide });
          geometries.push(geometry); materials.push(material);
          const frame = new THREE.Group();
          const backingInset = isNocturne ? 0.06 : 0.16;
          const backingGeometry = new THREE.PlaneGeometry(frameWidth + backingInset, frameHeight + backingInset);
          const backingMaterial = isNocturne
            ? new THREE.ShaderMaterial({
              uniforms: { uColor: { value: new THREE.Color(0x000000) }, uCornerRadius: { value: 0.2 } },
              vertexShader: "varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
              fragmentShader: "varying vec2 vUv; uniform vec3 uColor; uniform float uCornerRadius; float roundedBoxSdf(vec2 p, vec2 b, float r){vec2 q=abs(p)-b+r; return length(max(q,0.0))+min(max(q.x,q.y),0.0)-r;} void main(){float distance=roundedBoxSdf(vUv*2.0-1.0,vec2(1.0),uCornerRadius); float alpha=1.0-smoothstep(-.04,.08,distance); gl_FragColor=vec4(uColor,.62*alpha);}",
              transparent: true,
              depthWrite: false,
              side: THREE.DoubleSide,
            })
            : new THREE.MeshBasicMaterial({ color: 0x0b0b08, transparent: true, opacity: 0.92, side: THREE.DoubleSide });
          const backing = new THREE.Mesh(backingGeometry, backingMaterial);
          backing.position.set(isNocturne ? 0.045 : 0, isNocturne ? -0.075 : 0, -0.04);
          frame.add(backing);
          geometries.push(backingGeometry); materials.push(backingMaterial);

          const mesh = new THREE.Mesh(geometry, material);
          frame.add(mesh);

          if (mode === "assemblage") {
            frame.position.set((index - 1) * 2.25, index === 1 ? 0.45 : -0.35, index * -0.35);
            frame.rotation.set(index === 1 ? -0.04 : 0.08, (index - 1) * -0.18, (index - 1) * 0.04);
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
              phase: index * 0.9,
            });
          }
          targetGroup.add(frame);
        });

        if (mode === "assemblage") {
          const targetGroup = group;
          if (!targetGroup) return;
          const colors = [0xfedd10, 0x58533a, 0xffffff, 0xa49e7b];
          colors.forEach((color, index) => {
            const geometry = new THREE.BoxGeometry(index % 2 ? 0.18 : 3.8, index % 2 ? 5.1 : 0.12, 0.2);
            const material = new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04 });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(index % 2 ? (index < 2 ? -3.7 : 3.6) : 0, index % 2 ? 0 : (index < 2 ? -2.35 : 2.45), -0.15);
            materials.push(material); geometries.push(geometry); targetGroup.add(mesh);
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
          const responsiveScale = width < 760 ? 0.82 : width < 1100 ? 0.92 : 1;
          group?.scale.setScalar(responsiveScale);
        };
        onResize = () => resize();
        window.addEventListener("resize", onResize);
        resize();

        const tick = (time: number) => {
          if (disposed) return;
          frame = requestAnimationFrame(tick);
          if (!visible || document.hidden || !renderer || !scene || !camera || !group) return;
          const scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
          if (!pointer.dragging) {
            pointer.dragOffset += pointer.velocity;
            pointer.velocity *= 0.94;
          }
          if (mode === "nocturne") {
            const autoRotation = time * 0.000018;
            const targetX = pointer.x * 0.55 + pointer.dragOffset * 0.18;
            group.position.x += (targetX - group.position.x) * (pointer.dragging ? 0.14 : 0.035);
            group.rotation.y += ((pointer.x + pointer.dragOffset + autoRotation) - group.rotation.y) * (pointer.dragging ? 0.16 : 0.045);
            group.rotation.z += ((pointer.x * -0.018) - group.rotation.z) * 0.035;
            const heroRotation = group.rotation.y;
            const compact = window.innerWidth < 760;
            nocturneFrames.forEach(({ object, x, y, z, scale, rotation, mobileX, mobileY, mobileZ, mobileScale, phase }) => {
              const orbit = time * 0.00032 + phase;
              const baseX = compact ? mobileX : x;
              const baseY = compact ? mobileY : y;
              const baseZ = compact ? mobileZ : z;
              object.position.x = baseX + Math.sin(orbit * 0.9) * (compact ? 0.045 : 0.07);
              object.position.y = baseY + Math.cos(orbit * 1.1) * (compact ? 0.03 : 0.045);
              object.position.z = baseZ + Math.sin(orbit * 0.8) * (compact ? 0.05 : 0.08);
              object.scale.setScalar(compact ? mobileScale : scale);
              object.rotation.y = -heroRotation;
              object.rotation.z = rotation + Math.sin(orbit) * 0.035;
            });
          } else {
            group.rotation.y += ((pointer.x + pointer.dragOffset) - group.rotation.y) * (pointer.dragging ? 0.16 : 0.045);
            group.rotation.x += ((-pointer.y + scroll * 0.08) - group.rotation.x) * 0.04;
          }
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

  return <canvas ref={canvasRef} className={`adaptive-webgl ${fallback ? "is-fallback" : ""}`} aria-hidden="true" />;
}
