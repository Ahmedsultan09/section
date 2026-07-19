import Link from "next/link";
import type { Locale } from "@/lib/site-types";

export type DesignVariant = "editorial" | "immersive";

export function DesignSwitcher({ locale, current }: { locale: Locale; current: DesignVariant }) {
  const isArabic = locale === "ar";
  return <nav className="design-switcher" aria-label={isArabic ? "اختيار اتجاه التصميم" : "Design direction"}>
    <span>{isArabic ? "الاتجاه" : "View"}</span>
    <Link className={current === "editorial" ? "active" : ""} href={`/${locale}?design=editorial`}>{isArabic ? "تحريري" : "Editorial"}</Link>
    <Link className={current === "immersive" ? "active" : ""} href={`/${locale}?design=immersive`}>{isArabic ? "تفاعلي" : "Immersive"}</Link>
  </nav>;
}
