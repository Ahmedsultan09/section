import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DesignAwareLink } from "@/components/DesignAwareLink";
import { JsonLd } from "@/components/JsonLd";
import { ProjectAttribution } from "@/components/ProjectAttribution";
import { capabilityLabel, getMedia, getProject, isLocale, locales, projects } from "@/lib/site-content";
import { breadcrumbSchema, pageMetadata, projectSchema } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProject(slug);
  if (!project) return {};
  const title = locale === "ar" ? `${project.title[locale]} — دراسة مشروع نجارة وتجهيز داخلي` : `${project.title[locale]} — Joinery & Fit-out Project Study`;
  return pageMetadata({ locale, path: `/projects/${slug}`, title, description: project.summary[locale], image: getMedia(project.media[0]).src });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const hero = getMedia(project.media[0]);

  return <main className="project-detail subpage design-nocturne" data-design="nocturne">
    <JsonLd data={[
      projectSchema(locale, project),
      breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
        { name: locale === "ar" ? "المشروعات" : "Projects", path: "/projects" },
        { name: project.title[locale], path: `/projects/${slug}` },
      ]),
    ]} />
    <header className="project-hero">
      <div className="project-hero-media"><Image unoptimized src={hero.src} alt={hero.alt[locale]} fill priority sizes="100vw" /></div>
      <div className="project-hero-copy"><p>{project.sectorLabel[locale]} / {project.location[locale]}</p><h1>{project.title[locale]}</h1><span>{project.client[locale]}</span><ProjectAttribution project={project} locale={locale} /></div>
    </header>
    <section className="project-overview section-pad">
      <div><p className="eyebrow">{locale === "ar" ? "نظرة عامة" : "Overview"}</p><h2>{project.summary[locale]}</h2></div>
      <div className="project-facts"><p>{project.scope[locale]}</p><dl><div><dt>{locale === "ar" ? "القطاع" : "Sector"}</dt><dd>{project.sectorLabel[locale]}</dd></div><div><dt>{locale === "ar" ? "الموقع" : "Location"}</dt><dd>{project.location[locale]}</dd></div><div><dt>{locale === "ar" ? "العناصر" : "Elements"}</dt><dd>{project.capabilities.map((capability) => capabilityLabel(capability, locale)).join(" · ")}</dd></div></dl></div>
    </section>
    <aside className="verification-note"><span>!</span><p>{project.verificationNote[locale]}</p></aside>
    <section className="editorial-gallery section-pad">
      {project.media.map((mediaId, mediaIndex) => { const asset = getMedia(mediaId); return <figure className={mediaIndex % 3 === 1 ? "portrait" : "landscape"} key={`${mediaId}-${mediaIndex}`}><div><Image unoptimized src={asset.src} alt={asset.alt[locale]} fill sizes="(max-width: 800px) 100vw, 75vw" /></div><figcaption><span>{String(mediaIndex + 1).padStart(2, "0")} / {String(project.media.length).padStart(2, "0")}</span>{asset.alt[locale]}</figcaption></figure>; })}
    </section>
    <section className="project-delivery section-pad"><div><p className="eyebrow">{locale === "ar" ? "مسؤوليتنا" : "Our responsibility"}</p><h2>{project.outcome[locale]}</h2></div><div><ul>{project.responsibilities.map((item) => <li key={item.en}>{item[locale]}</li>)}</ul><ul>{project.materials.map((item) => <li key={item.en}>{item[locale]}</li>)}</ul></div></section>
    <DesignAwareLink className="next-project section-pad" href={`/${locale}/projects/${next.slug}`}><p>{locale === "ar" ? "المشروع التالي" : "Next project"}</p><h2>{next.title[locale]}</h2><span>↗</span></DesignAwareLink>
  </main>;
}
