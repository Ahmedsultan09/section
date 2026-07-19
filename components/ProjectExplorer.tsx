"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getMedia, projects, sectors } from "@/lib/site-content";
import type { Locale, ProjectSector } from "@/lib/site-types";

export function ProjectExplorer({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const [filter, setFilter] = useState<ProjectSector | "all">("all");
  const visible = projects.filter((project) => filter === "all" || project.sector === filter);

  return (
    <div className={compact ? "project-explorer compact" : "project-explorer"}>
      {!compact && (
        <div className="project-filters" role="group" aria-label={locale === "ar" ? "تصفية المشروعات" : "Filter projects"}>
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>{locale === "ar" ? "الكل" : "All"}</button>
          {sectors.map((sector) => <button className={filter === sector.slug ? "active" : ""} key={sector.slug} onClick={() => setFilter(sector.slug)}>{sector.label[locale]}</button>)}
        </div>
      )}
      <div className="project-list">
        {visible.map((project, index) => {
          const asset = getMedia(project.media[0]);
          return (
            <Link className="project-row" href={`/${locale}/projects/${project.slug}`} key={project.slug}>
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="project-thumb"><Image unoptimized src={asset.src} alt={asset.alt[locale]} fill sizes="(max-width: 700px) 100vw, 36vw" /></div>
              <div className="project-row-copy"><p>{project.sectorLabel[locale]}</p><h3>{project.title[locale]}</h3><span>{project.location[locale]} · {project.year}</span></div>
              <span className="project-arrow">↗</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
