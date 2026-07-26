import { partnerLogos, showroomCopy } from "@/lib/showroom-content";
import type { Locale } from "@/lib/site-types";
import { LogoMarquee } from "./LogoMarquee";

export function PartnerMarquee({ locale }: { locale: Locale }) {
  return <LogoMarquee
    title={showroomCopy[locale].partners}
    note={showroomCopy[locale].partnerNote}
    items={[
      { id: "sodic-attribution", name: "SODIC", textMark: "SODIC", preferredSurface: "dark" },
      ...partnerLogos,
    ]}
    className="people-marquee"
  />;
}
