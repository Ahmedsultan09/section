import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/site-content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { localeMetadata, organizationSchema, websiteSchema } from "@/lib/seo";
import "@fontsource/saira/400.css";
import "@fontsource/saira/500.css";
import "@fontsource/saira/600.css";
import "@fontsource/saira-condensed/500.css";
import "@fontsource/saira-condensed/600.css";
import "@fontsource/saira-condensed/700.css";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@ibm/plex-sans-arabic/css/ibm-plex-sans-arabic-default.min.css";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FEDD10",
  colorScheme: "light dark",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localeMetadata(locale);
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
        <div className="locale-shell">
          <SiteHeader locale={locale} />
          {children}
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
