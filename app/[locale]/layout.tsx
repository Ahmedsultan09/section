import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/site-content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { localeMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localeMetadata(locale);
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <div className="locale-shell" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
