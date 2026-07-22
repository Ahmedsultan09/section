import Image from "next/image";
import { partnerLogos, showroomCopy } from "@/lib/showroom-content";
import type { Locale } from "@/lib/site-types";

export function PartnerMarquee({ locale }: { locale: Locale }) {
  const items = [...partnerLogos, ...partnerLogos];
  return (
    <section className="partner-proof" aria-labelledby="partner-proof-title">
      <div className="partner-proof-head">
        <p id="partner-proof-title">{showroomCopy[locale].partners}</p>
        <span>{showroomCopy[locale].partnerNote}</span>
      </div>
      <div className="partner-marquee">
        <div className="partner-track">
          {items.map((partner, index) => (
            <figure className={`partner-logo ${partner.preferredSurface}`} key={`${partner.id}-${index}`} aria-hidden={index >= partnerLogos.length}>
              <Image unoptimized src={partner.src} alt={index < partnerLogos.length ? partner.name : ""} width={220} height={220} sizes="160px" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
