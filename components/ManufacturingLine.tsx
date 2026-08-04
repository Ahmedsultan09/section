"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { manufacturingSteps } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";

export function ManufacturingLine({ locale }: { locale: Locale }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const rail = root?.querySelector<HTMLElement>("[data-manufacturing-rail]");
    if (!root || !rail) return;

    const cards = Array.from(rail.querySelectorAll<HTMLElement>("[data-manufacturing-step]"));
    if (!cards.length) return;

    root.classList.add("is-ready");
    // The rail becomes horizontally scrollable at this breakpoint, so scrolling
    // remains the source of truth anywhere the compact layout is active.
    const mobileQuery = window.matchMedia("(max-width: 980px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let timer: number | undefined;
    const updateActive = () => {
      if (!mobileQuery.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const centre = window.innerWidth / 2;
        let closest = 0;
        let distance = Number.POSITIVE_INFINITY;
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const nextDistance = Math.abs((rect.left + (rect.width / 2)) - centre);
          if (nextDistance < distance) {
            closest = index;
            distance = nextDistance;
          }
        });
        setActive(closest);
      });
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
      if (mobileQuery.matches && entries.some((entry) => entry.isIntersecting)) updateActive();
    }, { rootMargin: "-12% 0px -44% 0px", threshold: [0.15, 0.5] });

    const stopAuto = () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
        timer = undefined;
      }
    };
    const startAuto = () => {
      stopAuto();
      if (mobileQuery.matches || motionQuery.matches) return;
      timer = window.setInterval(() => {
        setActive((current) => (current + 1) % cards.length);
      }, 3200);
    };
    const handleModeChange = () => {
      stopAuto();
      if (mobileQuery.matches) {
        updateActive();
        return;
      }
      setActive(0);
      startAuto();
    };

    cards.forEach((card) => observer.observe(card));
    handleModeChange();
    rail.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    mobileQuery.addEventListener("change", handleModeChange);
    motionQuery.addEventListener("change", handleModeChange);
    return () => {
      cancelAnimationFrame(frame);
      stopAuto();
      observer.disconnect();
      rail.removeEventListener("scroll", updateActive);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      mobileQuery.removeEventListener("change", handleModeChange);
      motionQuery.removeEventListener("change", handleModeChange);
    };
  }, []);

  const progress = `${((active + 1) / manufacturingSteps.length) * 100}%`;

  return (
    <div className="showroom-statement-flow" ref={rootRef}>
      <div className="showroom-statement-flow-head">
        <p>{locale === "ar" ? "داخل خط التصنيع" : "Inside the manufacturing line"}</p>
        <span aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(manufacturingSteps.length).padStart(2, "0")}</span>
      </div>
      <div className="showroom-statement-flow-rail" data-manufacturing-rail>
        <i className="showroom-statement-flow-track" aria-hidden="true" />
        <i className="showroom-statement-flow-progress" aria-hidden="true" style={{ "--flow-progress": progress } as React.CSSProperties} />
        <ol aria-label={locale === "ar" ? "خطوات التصنيع" : "Manufacturing steps"}>
          {manufacturingSteps.map((step, index) => (
            <li
              className={index === active ? "is-active" : undefined}
              data-manufacturing-step
              aria-current={index === active ? "step" : undefined}
              key={step.number}
            >
              <div className="showroom-statement-flow-marker" aria-hidden="true"><span>{step.number}</span></div>
              <figure>
                <Image unoptimized src={step.image} alt={step.imageAlt[locale]} fill sizes="(max-width: 700px) 78vw, 19vw" />
                <figcaption>{step.topic[locale]}</figcaption>
              </figure>
              <div className="showroom-statement-flow-copy">
                <h3>{step.title[locale]}</h3>
                <p>{step.text[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
