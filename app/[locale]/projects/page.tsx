import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, projects } from "@/lib/site-content";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbSchema, localePath, pageMetadata, seoCopy } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, path: "/projects", title: seoCopy[locale].projectsTitle, description: seoCopy[locale].projectsDescription });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <main className="subpage projects-page">
    <JsonLd data={[
      breadcrumbSchema(locale, [{ name: locale === "ar" ? "الرئيسية" : "Home", path: "" }, { name: locale === "ar" ? "المشروعات" : "Projects", path: "/projects" }]),
      {
        "@context": "https://schema.org", "@type": "CollectionPage", name: seoCopy[locale].projectsTitle,
        description: seoCopy[locale].projectsDescription, url: absoluteUrl(localePath(locale, "/projects")), inLanguage: locale,
        hasPart: projects.map((project) => ({ "@type": "CreativeWork", name: project.title[locale], url: absoluteUrl(localePath(locale, `/projects/${project.slug}`)) })),
      },
    ]} />
    <header className="page-intro"><p className="eyebrow">SECTION / {locale === "ar" ? "الأعمال" : "Work"}</p><h1>{locale === "ar" ? "مشروعات تروي كيف نعمل." : "Projects that show how we work."}</h1><p>{locale === "ar" ? "تصفح حسب القطاع. تُنشر أسماء العملاء والبيانات المؤكدة فقط بعد الاعتماد." : "Browse by sector. Client names and confirmed facts are published only after approval."}</p></header>
    <ProjectExplorer locale={locale} />
  </main>;
}
