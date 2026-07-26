import { materialBrandLogos } from "@/lib/drive-assets";
import type { Locale } from "@/lib/site-types";
import { LogoMarquee } from "./LogoMarquee";

export function MaterialBrandMarquee({ locale }: { locale: Locale }) {
  return <LogoMarquee
    title={locale === "ar" ? "علامات الخامات" : "Material brands"}
    note={locale === "ar" ? "شركاء الألواح والأسطح والإكسسوارات المعتمدون" : "Board, surface and hardware partners"}
    items={materialBrandLogos}
    className="material-brand-marquee"
  />;
}
