"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { getMedia, processSteps } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";

export function ProcessStory({ locale }: { locale: Locale }) {
  const target = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={target} className="process-scroll" aria-label={locale === "ar" ? "مراحل العمل" : "Project process"}>
      <div className="process-sticky">
        <motion.div className="process-track" style={{ x }}>
          {processSteps.map((step, index) => {
            const asset = getMedia(step.image);
            return (
              <article className="process-card" key={step.number}>
                <div className="process-media">
                  <Image unoptimized src={asset.src} alt={asset.alt[locale]} fill sizes="(max-width: 800px) 85vw, 44vw" />
                  <span>{step.number} / 04</span>
                </div>
                <div className="process-copy">
                  <p>{index === 2 ? (locale === "ar" ? "قلب العملية" : "The making point") : (locale === "ar" ? "مرحلة المشروع" : "Project stage")}</p>
                  <h3>{step.title[locale]}</h3>
                  <div><span>{step.number}</span><p>{step.text[locale]}</p></div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
