"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DesignAwareLink } from "./DesignAwareLink";
import { getMedia, projects } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";
import { ProjectAttribution } from "./ProjectAttribution";

export function ProjectStoryRail({ locale }: { locale: Locale }) {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.querySelectorAll<HTMLElement>("[data-project-card]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(Number((visible.target as HTMLElement).dataset.index ?? 0));
    }, { root: rail, threshold: [0.35, 0.65, 0.9] });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function move(direction: -1 | 1) {
    const cards = railRef.current?.querySelectorAll<HTMLElement>("[data-project-card]");
    const next = Math.max(0, Math.min(projects.length - 1, active + direction));
    const card = cards?.[next];
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("a, button")) return;
    const rail = railRef.current;
    if (!rail) return;
    dragRef.current = { active: true, startX: event.clientX, scrollLeft: rail.scrollLeft };
    rail.setPointerCapture(event.pointerId);
  }

  function drag(event: React.PointerEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail || !dragRef.current.active) return;
    rail.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  }

  function stopDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragRef.current.active = false;
    if (railRef.current?.hasPointerCapture(event.pointerId)) railRef.current.releasePointerCapture(event.pointerId);
  }

  return (
    <div className="story-rail-shell">
      <div className="story-rail-controls">
        <p>{locale === "ar" ? "قصص مشاريع مختارة" : "Selected project stories"}</p>
        <div>
          <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label={locale === "ar" ? "المشروع السابق" : "Previous project"}>←</button>
          <button type="button" onClick={() => move(1)} disabled={active === projects.length - 1} aria-label={locale === "ar" ? "المشروع التالي" : "Next project"}>→</button>
        </div>
      </div>
      <div
        className="story-rail"
        ref={railRef}
        tabIndex={0}
        aria-label={locale === "ar" ? "مشاريع مختارة" : "Selected projects"}
        onKeyDown={(event) => { if (event.key === "ArrowRight") move(locale === "ar" ? -1 : 1); if (event.key === "ArrowLeft") move(locale === "ar" ? 1 : -1); }}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        {projects.map((project, index) => {
          const image = getMedia(project.media[0]);
          const named = project.clientVisibility === "approved";
          return (
            <article className="story-card" key={project.slug} data-project-card data-index={index}>
              <div className="story-card-media"><Image unoptimized src={image.src} alt={image.alt[locale]} fill sizes="(max-width: 760px) 86vw, 72vw" /></div>
              <div className="story-card-copy">
                <p>{project.sectorLabel[locale]} / {project.location[locale]}</p>
                <h3 className={named ? "named-client" : ""}>{named ? project.client[locale] : project.title[locale]}</h3>
                <ProjectAttribution project={project} locale={locale} compact />
                <span>{project.summary[locale]}</span>
                <DesignAwareLink href={`/${locale}/projects/${project.slug}`}>{locale === "ar" ? "افتح القصة" : "Open the story"} ↗</DesignAwareLink>
              </div>
            </article>
          );
        })}
        <div className="story-rail-end" aria-hidden="true" />
      </div>
      <div className="story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${(active + 1) / projects.length})` }} /></div>
    </div>
  );
}
