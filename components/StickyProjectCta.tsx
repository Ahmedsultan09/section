import { copy } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";
import { DesignAwareLink } from "./DesignAwareLink";

export function StickyProjectCta({ locale }: { locale: Locale }) {
  const label = copy[locale].nav.inquiry;
  const kicker = locale === "ar" ? "ابدأ من هنا" : "Start here";

  return (
    <DesignAwareLink
      className="sticky-project-cta"
      href={`/${locale}/inquiry`}
      aria-label={label}
    >
      <span className="sticky-project-cta-copy">
        <span className="sticky-project-cta-kicker">
          <i aria-hidden="true" />
          {kicker}
        </span>
        <strong>{label}</strong>
      </span>
      <span className="sticky-project-cta-arrow" aria-hidden="true">↗</span>
    </DesignAwareLink>
  );
}
