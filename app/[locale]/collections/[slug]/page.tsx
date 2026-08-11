import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DesignAwareLink } from "@/components/DesignAwareLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { capabilities, getCapability, getMedia, isLocale, locales, projects } from "@/lib/site-content";
import { piecesFor, showroomCopy } from "@/lib/showroom-content";
import type { CollectionPiece } from "@/lib/site-types";

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

export default async function CollectionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const collection = getCapability(slug);
  if (!collection) notFound();
  const image = getMedia(collection.image);
  const claddingNoteImage = "/drive/cladding/water-based-substrate.webp";
  const related = projects.filter((project) => project.capabilities.includes(collection.slug));
  const pieces = piecesFor(collection.slug);
  const renderPiece = (piece: CollectionPiece, index: number) => <article className={`collection-piece ${collection.slug === "wall-cladding" ? "cladding-piece" : ""}`} id={piece.slug} key={piece.slug}>
    <div className="collection-piece-heading"><span>{String(index + 1).padStart(2, "0")}</span><div><p>{piece.application[locale]}</p><h3>{piece.title[locale]}</h3>{piece.location && <p className="collection-piece-location">{piece.location[locale]}</p>}</div></div>
    <div className="collection-piece-gallery">{piece.media.map((src, mediaIndex) => <figure key={src}><Image unoptimized src={src} alt={`${piece.title[locale]} — ${mediaIndex + 1}`} fill sizes="(max-width: 760px) 82vw, 38vw" /></figure>)}</div>
    <DesignAwareLink href={`/${locale}/inquiry`}>{showroomCopy[locale].similar} ↗</DesignAwareLink>
  </article>;

  return <main className="capability-detail subpage design-nocturne" data-design="nocturne">
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
    <section className="collection-pieces section-pad" aria-labelledby="collection-pieces-title">
      <header><p className="eyebrow">{showroomCopy[locale].pieceLabel}</p><h2 id="collection-pieces-title">{locale === "ar" ? "تفاصيل تستحق الاستكشاف." : "Pieces worth exploring."}</h2><span>{locale === "ar" ? "كل قطعة مرجع يمكن تطويره وفقاً لاحتياجات مشروعك." : "Each piece is a made-to-order reference that can be developed for your project brief."}</span></header>
      {slug === "wall-cladding" && <aside className="cladding-material-note" aria-labelledby="cladding-material-note-title">
        <div className="cladding-material-note-copy">
          <p className="cladding-material-note-kicker">{locale === "ar" ? "ملاحظة خامة / 01" : "Material note / 01"}</p>
          <h2 id="cladding-material-note-title">{locale === "ar" ? <>كل التكسية مبنية على <em>عزل مائي الأساس.</em></> : <>All cladding is built over <em>water-based insulation.</em></>}</h2>
          <p>{locale === "ar" ? "ملاحظة واحدة تمتد عبر CNC والميلامين والقشرة والدهان — موضحة هنا في المرجع الأخضر." : "One material note carried across CNC, melamine, and veneer & painting cladding — shown here in the green reference."}</p>
          <span>{locale === "ar" ? "مواصفة تستحق أن تبقى واضحة." : "A specification worth keeping visible."}</span>
        </div>
        <figure>
          <Image unoptimized src={claddingNoteImage} alt={locale === "ar" ? "قاعدة خشبية خضراء للتكسية قبل التشطيب" : "Green wood substrate base for cladding before the finish"} fill sizes="(max-width: 760px) 84vw, 28vw" />
          <figcaption>{locale === "ar" ? "مرجع قاعدة الخشب والعزل المائي الأساس" : "Wood substrate / water-based insulation reference"}</figcaption>
        </figure>
      </aside>}
      <div className="collection-piece-list">
        {slug === "bedrooms" ? ([
          { key: "adults", title: { en: "Adults", ar: "للبالغين" }, pieces: pieces.filter((piece) => piece.group?.en === "Adults") },
          { key: "kids", title: { en: "Kids", ar: "للأطفال" }, pieces: pieces.filter((piece) => piece.group?.en === "Kids") },
        ] as const).map((group) => <section className="collection-piece-group is-highlighted" aria-labelledby={`bedroom-group-${group.key}`} key={group.key}>
          <header className="collection-piece-group-heading"><p>{locale === "ar" ? "فئة غرف النوم" : "Bedroom category"}</p><h3 id={`bedroom-group-${group.key}`}>{group.title[locale]}</h3></header>
          {group.pieces.map(renderPiece)}
        </section>) : pieces.map(renderPiece)}
      </div>
    </section>
    <section className="capability-spec section-pad"><SpecList number="01" title={locale === "ar" ? "التطبيقات" : "Applications"} items={collection.applications.map((item) => item[locale])} /><SpecList number="02" title={locale === "ar" ? "الخامات" : "Materials"} items={collection.materials.map((item) => item[locale])} /><SpecList number="03" title={locale === "ar" ? "مسار العمل" : "Delivery path"} items={collection.process.map((item) => item[locale])} /></section>
    {related.length > 0 && <section className="related-projects section-pad"><p className="eyebrow">{locale === "ar" ? "دراسات مرتبطة" : "Related studies"}</p>{related.map((project) => <DesignAwareLink href={`/${locale}/projects/${project.slug}`} key={project.slug}><span>{project.sectorLabel[locale]}</span><h2>{project.title[locale]}</h2><b>↗</b></DesignAwareLink>)}</section>}
  </main>;
}

function SpecList({ number, title, items }: { number: string; title: string; items: string[] }) {
  return <article><p>{number}</p><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
