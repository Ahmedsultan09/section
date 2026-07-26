import Image from "next/image";

export type LogoMarqueeItem = {
  id: string;
  name: string;
  src?: string;
  preferredSurface?: "light" | "dark";
  textMark?: string;
};

export function LogoMarquee({
  title,
  note,
  items,
  className = "",
}: {
  title: string;
  note: string;
  items: LogoMarqueeItem[];
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <section className={`partner-proof logo-marquee-section ${className}`} aria-label={title}>
      <div className="partner-proof-head">
        <p>{title}</p>
        <span>{note}</span>
      </div>
      <div className="partner-marquee">
        <div className="partner-track">
          {loop.map((item, index) => (
            <figure
              className={`partner-logo ${item.preferredSurface ?? "light"} ${item.textMark ? "text-mark" : ""}`}
              data-logo-id={item.id}
              key={`${item.id}-${index}`}
              aria-hidden={index >= items.length}
            >
              {item.src
                ? <Image unoptimized src={item.src} alt={index < items.length ? item.name : ""} width={720} height={320} sizes="(max-width: 700px) 170px, 220px" />
                : <span aria-label={index < items.length ? item.name : undefined}>{item.textMark}</span>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
