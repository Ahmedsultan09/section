import Link from "next/link";
import { ENABLED_DESIGNS, withDesign } from "@/lib/designs";
import type { DesignId, Locale } from "@/lib/site-types";

const labels: Record<DesignId, Record<Locale, string>> = {
  editorial: { en: "Editorial", ar: "تحريري" },
  immersive: { en: "Immersive", ar: "تفاعلي" },
  assemblage: { en: "Assemblage", ar: "تركيبي" },
  nocturne: { en: "Nocturne", ar: "ليلي" },
};

export type DesignVariant = DesignId;

export function DesignSwitcher({ locale, current, path = `/${locale}` }: { locale: Locale; current: DesignId; path?: string }) {
  return (
    <nav className="design-switcher" aria-label={locale === "ar" ? "اختيار اتجاه التصميم" : "Design direction"}>
      <span>{locale === "ar" ? "الاتجاه" : "View"}</span>
      {ENABLED_DESIGNS.map((design) => (
        <Link key={design} className={current === design ? "active" : ""} href={withDesign(path, design)} aria-current={current === design ? "page" : undefined}>
          {labels[design][locale]}
        </Link>
      ))}
    </nav>
  );
}
