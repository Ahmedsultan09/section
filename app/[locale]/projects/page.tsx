import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { JsonLd } from "@/components/JsonLd";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ProjectStoryRail } from "@/components/ProjectStoryRail";
import { getDesign } from "@/lib/designs";
import { isLocale, projects } from "@/lib/site-content";
import { absoluteUrl, breadcrumbSchema, localePath, pageMetadata, seoCopy } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, path: "/projects", title: seoCopy[locale].projectsTitle, description: seoCopy[locale].projectsDescription });
}

export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ design?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const design = getDesign((await searchParams)?.design);

  return <main className={`subpage projects-page design-${design}`} data-design={design}>
    <JsonLd data={[
      breadcrumbSchema(locale, [{ name: locale === "ar" ? "الرئيسية" : "Home", path: "" }, { name: locale === "ar" ? "المشروعات" : "Projects", path: "/projects" }]),
      {
        "@context": "https://schema.org", "@type": "CollectionPage", name: seoCopy[locale].projectsTitle,
        description: seoCopy[locale].projectsDescription, url: absoluteUrl(localePath(locale, "/projects")), inLanguage: locale,
        hasPart: projects.map((project) => ({ "@type": "CreativeWork", name: project.title[locale], url: absoluteUrl(localePath(locale, `/projects/${project.slug}`)) })),
      },
    ]} />
    <DesignSwitcher locale={locale} current={design} path={`/${locale}/projects`} />
    <header className="page-intro">
      <p className="eyebrow">SECTION / {locale === "ar" ? "الأعمال" : "Work"}</p>
      <h1>{locale === "ar" ? "مشروعات تروي كيف نعمل." : "Projects that show how we work."}</h1>
      <p>{locale === "ar" ? "قصص مختارة بنطاق واضح وصور موثوقة، من التصور حتى التركيب." : "Selected stories with clear scope and verified imagery, from concept through installation."}</p>
    </header>
    <section className="projects-story-section section-pad"><ProjectStoryRail locale={locale} /></section>
    <ProjectExplorer locale={locale} />
  </main>;
}
