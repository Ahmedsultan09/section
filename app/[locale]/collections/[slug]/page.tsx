import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DesignAwareLink } from "@/components/DesignAwareLink";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { JsonLd } from "@/components/JsonLd";
import { getDesign } from "@/lib/designs";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { capabilities, getCapability, getMedia, isLocale, locales, projects } from "@/lib/site-content";
import { piecesFor, showroomCopy } from "@/lib/showroom-content";

export function generateStaticParams() {
  return locales.flatMap((locale) => capabilities.map((collection) => ({ locale, slug: collection.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const collection = getCapability(slug);
  if (!collection) return {};
  const title = locale === "ar" ? `${collection.title[locale]} للمشروعات في مصر` : `${collection.title[locale]} — B2B Projects in Egypt`;
  return pageMetadata({ locale, path: `/collections/${slug}`, title, description: collection.intro[locale] });
}

export default async function CollectionPage({ params, searchParams }: { params: Promise<{ locale: string; slug: string }>; searchParams?: Promise<{ design?: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const collection = getCapability(slug);
  if (!collection) notFound();
  const design = getDesign((await searchParams)?.design);
  const image = getMedia(collection.image);
  const related = projects.filter((project) => project.capabilities.includes(collection.slug));
  const pieces = piecesFor(collection.slug);

  return <main className={`capability-detail subpage design-${design}`} data-design={design}>
    <DesignSwitcher locale={locale} current={design} path={`/${locale}/collections/${slug}`} />
    <JsonLd data={[
      serviceSchema(locale, collection),
      { "@context": "https://schema.org", "@type": "CollectionPage", name: collection.title[locale], inLanguage: locale, mainEntity: { "@type": "ItemList", itemListElement: pieces.map((piece, index) => ({ "@type": "ListItem", position: index + 1, name: piece.title[locale], url: `#${piece.slug}` })) } },
      breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
        { name: locale === "ar" ? "المجموعات" : "Collections", path: "/#capabilities" },
        { name: collection.title[locale], path: `/collections/${slug}` },
      ]),
    ]} />
    <header className="capability-hero"><div><p className="eyebrow">{locale === "ar" ? "مجموعات SECTION" : "SECTION collection"} / {collection.number}</p><h1>{collection.title[locale]}</h1><p>{collection.intro[locale]}</p><DesignAwareLink className="button-yellow" href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش نطاقك" : "Discuss your scope"}<span>↗</span></DesignAwareLink></div><div className="capability-hero-media"><Image unoptimized src={image.src} alt={image.alt[locale]} fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div></header>
    <section className="capability-spec section-pad"><SpecList number="01" title={locale === "ar" ? "التطبيقات" : "Applications"} items={collection.applications.map((item) => item[locale])} /><SpecList number="02" title={locale === "ar" ? "الخامات" : "Materials"} items={collection.materials.map((item) => item[locale])} /><SpecList number="03" title={locale === "ar" ? "مسار العمل" : "Delivery path"} items={collection.process.map((item) => item[locale])} /></section>
    <section className="collection-pieces section-pad" aria-labelledby="collection-pieces-title">
      <header><p className="eyebrow">{showroomCopy[locale].pieceLabel}</p><h2 id="collection-pieces-title">{locale === "ar" ? "تفاصيل تستحق الاستكشاف." : "Pieces worth exploring."}</h2><span>{locale === "ar" ? "كل قطعة مرجع يمكن تطويره وفقاً لاحتياجات مشروعك." : "Each piece is a made-to-order reference that can be developed for your project brief."}</span></header>
      <div className="collection-piece-list">
        {pieces.map((piece, index) => <article className="collection-piece" id={piece.slug} key={piece.slug}>
          <div className="collection-piece-heading"><span>{String(index + 1).padStart(2, "0")}</span><div><p>{piece.application[locale]}</p><h3>{piece.title[locale]}</h3><strong>{piece.story[locale]}</strong></div></div>
          <div className="collection-piece-gallery">{piece.media.map((src, mediaIndex) => <figure key={src}><Image unoptimized src={src} alt={`${piece.title[locale]} — ${mediaIndex + 1}`} fill sizes="(max-width: 760px) 82vw, 38vw" /><figcaption>{piece.scope[locale]}</figcaption></figure>)}</div>
          <DesignAwareLink href={`/${locale}/inquiry`}>{showroomCopy[locale].similar} ↗</DesignAwareLink>
        </article>)}
      </div>
    </section>
    {related.length > 0 && <section className="related-projects section-pad"><p className="eyebrow">{locale === "ar" ? "دراسات مرتبطة" : "Related studies"}</p>{related.map((project) => <DesignAwareLink href={`/${locale}/projects/${project.slug}`} key={project.slug}><span>{project.sectorLabel[locale]}</span><h2>{project.title[locale]}</h2><b>↗</b></DesignAwareLink>)}</section>}
  </main>;
}

function SpecList({ number, title, items }: { number: string; title: string; items: string[] }) {
  return <article><p>{number}</p><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
