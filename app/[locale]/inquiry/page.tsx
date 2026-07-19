import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { isLocale } from "@/lib/site-content";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbSchema, localePath, pageMetadata, seoCopy, SITE_URL } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, path: "/inquiry", title: seoCopy[locale].inquiryTitle, description: seoCopy[locale].inquiryDescription });
}

export default async function InquiryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <main className="inquiry-page subpage">
    <JsonLd data={[
      breadcrumbSchema(locale, [{ name: locale === "ar" ? "الرئيسية" : "Home", path: "" }, { name: locale === "ar" ? "ناقش مشروعك" : "Discuss a project", path: "/inquiry" }]),
      {
        "@context": "https://schema.org", "@type": "ContactPage", name: seoCopy[locale].inquiryTitle,
        description: seoCopy[locale].inquiryDescription, url: absoluteUrl(localePath(locale, "/inquiry")), inLanguage: locale,
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ]} />
    <aside className="inquiry-intro"><p className="eyebrow">SECTION / {locale === "ar" ? "استفسار مشروع" : "Project inquiry"}</p><h1>{locale === "ar" ? "ابدأ بما تحتاجه." : "Start with what you need."}</h1><p>{locale === "ar" ? "اختيارات بسيطة ثم الاسم ورقم الهاتف. إذا لم تكن متأكداً بعد، سنساعدك في الخطوة التالية." : "A few simple choices, then your name and phone. If you are not sure yet, we can help shape the next step."}</p><div><span>01</span>{locale === "ar" ? "لا قوائم طويلة أو بيانات غير ضرورية" : "No long forms or unnecessary details"}</div><div><span>02</span>{locale === "ar" ? "يمكنك إضافة ملاحظات أو ملفات اختيارياً" : "Notes and files are optional"}</div></aside><InquiryForm locale={locale} />
  </main>;
}
