import type { Locale, LocalizedText } from "@/lib/site-types";

export type BrandNarrativeContent = {
  story: LocalizedText;
  vision: LocalizedText;
  mission: LocalizedText;
};

export function BrandNarrative({ locale, content }: { locale: Locale; content: BrandNarrativeContent }) {
  const sections = [
    { label: locale === "ar" ? "قصتنا" : "Brand story", value: content.story[locale] },
    { label: locale === "ar" ? "رؤيتنا" : "Vision", value: content.vision[locale] },
    { label: locale === "ar" ? "مهمتنا" : "Mission", value: content.mission[locale] },
  ];
  return <section className="brand-narrative">{sections.map((item) => <article key={item.label}><p>{item.label}</p><h2>{item.value}</h2></article>)}</section>;
}
