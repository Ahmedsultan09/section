import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowroomHome } from "@/components/ShowroomHome";
import { isLocale } from "@/lib/site-content";
import { pageMetadata, seoCopy } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    ...pageMetadata({ locale, path: "", title: seoCopy[locale].siteTitle, description: seoCopy[locale].description }),
    title: { absolute: seoCopy[locale].siteTitle },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ShowroomHome locale={locale} mode="nocturne" />;
}
