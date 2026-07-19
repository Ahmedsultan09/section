import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, getCapability, getMedia, isLocale, locales, projects } from "@/lib/site-content";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

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
  const related = projects.filter((project) => project.capabilities.includes(collection.slug));

  return <main className="capability-detail subpage">
    <JsonLd data={[
      serviceSchema(locale, collection),
      breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
        { name: locale === "ar" ? "المجموعات" : "Collections", path: "/#capabilities" },
        { name: collection.title[locale], path: `/collections/${slug}` },
      ]),
    ]} />
    <header className="capability-hero"><div><p className="eyebrow">{locale === "ar" ? "مجموعات SECTION" : "SECTION collection"} / {collection.number}</p><h1>{collection.title[locale]}</h1><p>{collection.intro[locale]}</p><Link className="button-yellow" href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش نطاقك" : "Discuss your scope"}<span>↗</span></Link></div><div className="capability-hero-media"><Image unoptimized src={image.src} alt={image.alt[locale]} fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div></header>
    <section className="capability-spec section-pad"><SpecList number="01" title={locale === "ar" ? "التطبيقات" : "Applications"} items={collection.applications.map((item) => item[locale])} /><SpecList number="02" title={locale === "ar" ? "الخامات" : "Materials"} items={collection.materials.map((item) => item[locale])} /><SpecList number="03" title={locale === "ar" ? "مسار العمل" : "Delivery path"} items={collection.process.map((item) => item[locale])} /></section>
    {related.length > 0 && <section className="related-projects section-pad"><p className="eyebrow">{locale === "ar" ? "دراسات مرتبطة" : "Related studies"}</p>{related.map((project) => <Link href={`/${locale}/projects/${project.slug}`} key={project.slug}><span>{project.sectorLabel[locale]}</span><h2>{project.title[locale]}</h2><b>↗</b></Link>)}</section>}
  </main>;
}

function SpecList({ number, title, items }: { number: string; title: string; items: string[] }) {
  return <article><p>{number}</p><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
