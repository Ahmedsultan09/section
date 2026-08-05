"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getMedia, processSteps } from "@/lib/site-content";
import type { DesignId, Locale } from "@/lib/site-types";

type Mode = Extract<DesignId, "assemblage" | "nocturne">;

export function ShowroomProcess({ locale, mode }: { locale: Locale; mode: Mode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const centre = track.getBoundingClientRect().left + (track.clientWidth / 2);
        const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-process-card]"));
        let closest = 0;
        let distance = Number.POSITIVE_INFINITY;
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const nextDistance = Math.abs((rect.left + (rect.width / 2)) - centre);
          if (nextDistance < distance) { closest = index; distance = nextDistance; }
        });
        setActive(closest);
      });
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTo = (index: number) => {
    const target = trackRef.current?.querySelectorAll<HTMLElement>("[data-process-card]")[index];
    target?.scrollIntoView({ behavior: reducedMotion.current ? "auto" : "smooth", block: "nearest", inline: "center" });
  };
  const move = (delta: number) => goTo(Math.max(0, Math.min(processSteps.length - 1, active + delta)));

  return (
    <section className={`showroom-process process-experience process-${mode}`} id="process" aria-labelledby={`${mode}-process-title`}>
      <header>
        <p>03 / {locale === "ar" ? "طريقة العمل" : "How the work moves"}</p>
        <h2 id={`${mode}-process-title`}>{locale === "ar" ? "أربع مراحل. قصة واحدة." : "Four stages. One story."}</h2>
        <span>{locale === "ar" ? "اسحب أو استخدم الأسهم لاستكشاف المراحل" : "Swipe or use the arrows to explore"}</span>
      </header>
      <div className="process-navigation">
        <div className="process-index" aria-label={locale === "ar" ? "مراحل العمل" : "Process stages"}>
          {processSteps.map((step, index) => (
            <button className={index === active ? "is-active" : ""} onClick={() => goTo(index)} key={step.number} aria-current={index === active ? "step" : undefined}>
              <b>{step.number}</b><span>{step.title[locale]}</span>
            </button>
          ))}
        </div>
        <div className="process-arrows">
          <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label={locale === "ar" ? "المرحلة السابقة" : "Previous stage"}>←</button>
          <span>{String(active + 1).padStart(2, "0")} / 04</span>
          <button type="button" onClick={() => move(1)} disabled={active === processSteps.length - 1} aria-label={locale === "ar" ? "المرحلة التالية" : "Next stage"}>→</button>
        </div>
      </div>
      <div className="process-rail" ref={trackRef} tabIndex={0} onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
        {processSteps.map((step, index) => {
          const media = getMedia(step.image);
          return (
            <article className={index === active ? "is-active" : ""} data-process-card key={step.number}>
              <figure><Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="(max-width: 760px) 86vw, 72vw" /><figcaption>{locale === "ar" ? `المرحلة ${step.number}` : `Stage ${step.number}`}</figcaption></figure>
              <div className="process-card-copy"><span>{step.number}</span><h3>{step.title[locale]}</h3><p>{step.text[locale]}</p></div>
              <i className="process-card-line" aria-hidden="true" />
            </article>
          );
        })}
        <div className="process-rail-end" aria-hidden="true" />
      </div>
    </section>
  );
}
