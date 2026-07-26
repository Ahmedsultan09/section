"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DesignAwareLink } from "./DesignAwareLink";
import type { Capability, Locale, MediaAsset } from "@/lib/site-types";

export function NocturneCategoryStack({
  locale,
  items,
}: {
  locale: Locale;
  items: Array<{ capability: Capability; media: MediaAsset }>;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = Array.from(root.current?.querySelectorAll<HTMLElement>("[data-category-card]") ?? []);
    const observer = new IntersectionObserver((entries) => {
      const mostVisible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (mostVisible) setActive(Number((mostVisible.target as HTMLElement).dataset.index ?? 0));
    }, { rootMargin: "-20% 0px -20%", threshold: [0.25, 0.5, 0.75] });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nocturne-mobile-collections" ref={root}>
      {items.map(({ capability, media }, index) => (
        <DesignAwareLink
          className={`nocturne-category-card ${active === index ? "active" : ""}`}
          data-category-card
          data-index={index}
          href={`/${locale}/collections/${capability.slug}`}
          key={capability.slug}
        >
          <Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="100vw" />
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{capability.title[locale]}</h3>
            <p>{capability.short[locale]}</p>
          </div>
          <b aria-hidden="true">↗</b>
        </DesignAwareLink>
      ))}
    </div>
  );
}
