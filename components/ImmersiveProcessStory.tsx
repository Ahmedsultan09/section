"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { getMedia, processSteps } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";

export function ImmersiveProcessStory({ locale }: { locale: Locale }) {
  const chapterRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const activationPoints = chapterRefs.current.filter((point): point is HTMLElement => Boolean(point));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = Number((entry.target as HTMLElement).dataset.stepIndex ?? 0);
        setActiveIndex(index);
      }
    }, { rootMargin: "-46% 0px -46% 0px", threshold: 0 });

    activationPoints.forEach((point) => observer.observe(point));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="immersive-process-story" aria-label={locale === "ar" ? "مراحل العمل" : "Project process"}>
      <div className="immersive-process-layout">
        <div className="immersive-process-visual" aria-hidden="true">
          <div className="immersive-process-progress"><motion.i animate={{ scaleY: (activeIndex + 1) / processSteps.length }} transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }} /></div>
          <div className="immersive-process-counter"><span>0{activeIndex + 1}</span><b>/ 04</b></div>

          <div className="immersive-process-stage">
            {processSteps.map((step, index) => {
              const media = getMedia(step.image);
              const active = activeIndex === index;
              return <motion.div
                className="immersive-process-stage-image"
                key={step.number}
                initial={false}
                animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.035, clipPath: active ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image unoptimized src={media.src} alt="" fill sizes="(max-width: 780px) 100vw, 46vw" />
                <span>{locale === "ar" ? "من الفكرة إلى الموقع" : "FROM IDEA TO SITE"}</span>
              </motion.div>;
            })}
          </div>

          <div className="immersive-process-dots">
            {processSteps.map((step, index) => <i className={index === activeIndex ? "active" : ""} key={step.number}><span>{step.number}</span></i>)}
          </div>
        </div>

        <div className="immersive-process-chapters">
          {processSteps.map((step, index) => {
            const media = getMedia(step.image);
            return <article
              className={index === activeIndex ? "active" : ""}
              key={step.number}
            >
              <i className="immersive-process-activation" data-step-index={index} ref={(node) => { chapterRefs.current[index] = node; }} />
              <span>{step.number} / 04</span>
              <h3>{step.title[locale]}</h3>
              <p>{step.text[locale]}</p>
              <div className="immersive-process-mobile-media"><Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="100vw" /></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
