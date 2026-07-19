import type { Metadata } from "next";
import type { Capability, Locale, Project } from "./site-types";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://section-furniture.com").replace(/\/$/, "");
export const SITE_NAME = "SECTION";
export const SEO_LAST_MODIFIED = new Date("2026-07-18T00:00:00.000Z");

export const seoCopy = {
  en: {
    siteTitle: "SECTION — Custom Woodwork, Joinery & Interior Fit-out in Egypt",
    titleTemplate: "%s | SECTION Egypt",
    description: "SECTION delivers design coordination, custom wood manufacturing, joinery, furniture and site installation for developers, architects and hospitality projects in Egypt.",
    projectsTitle: "Interior Fit-out & Custom Joinery Projects",
    projectsDescription: "Explore SECTION project studies across residential developments, hospitality, workplaces and public spaces in Egypt.",
    inquiryTitle: "Discuss an Interior Fit-out or Joinery Project",
    inquiryDescription: "Send SECTION your project scope, drawings, quantities and delivery programme for a focused technical review.",
  },
  ar: {
    siteTitle: "SECTION — أعمال خشبية ونجارة وتجهيز داخلي للمشروعات في مصر",
    titleTemplate: "%s | SECTION مصر",
    description: "تقدم SECTION تنسيق التصميم وتصنيع الأعمال الخشبية والنجارة والأثاث والتركيب بالموقع للمطورين والمعماريين ومشروعات الضيافة في مصر.",
    projectsTitle: "مشروعات التجهيز الداخلي والنجارة المخصصة",
    projectsDescription: "استكشف دراسات مشروعات SECTION في التطوير السكني والضيافة ومساحات العمل والمساحات العامة في مصر.",
    inquiryTitle: "ناقش مشروع تجهيز داخلي أو أعمال نجارة",
    inquiryDescription: "شارك SECTION نطاق المشروع والرسومات والكميات وبرنامج التسليم لبدء مراجعة فنية مركزة.",
  },
} as const;

const keywords: Record<Locale, string[]> = {
  en: [
    "custom woodwork Egypt", "interior fit-out Egypt", "joinery contractor Cairo", "furniture manufacturing Egypt",
    "architectural doors", "wall cladding", "hotel furniture manufacturer", "residential development interiors",
    "custom kitchens Egypt", "wardrobes Egypt", "B2B furniture manufacturer",
  ],
  ar: [
    "أعمال خشبية في مصر", "تجهيز داخلي", "نجارة مخصصة", "مصنع أثاث في مصر", "أبواب خشبية",
    "تكسية حوائط", "أثاث فنادق", "مطابخ مخصصة", "غرف ملابس", "مقاول تشطيبات داخلية",
  ],
};

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localePath(locale: Locale, path = "") {
  const suffix = path && path !== "/" ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `/${locale}${suffix}`;
}

export function alternates(locale: Locale, path = ""): Metadata["alternates"] {
  return {
    canonical: localePath(locale, path),
    languages: {
      en: localePath("en", path),
      ar: localePath("ar", path),
      "x-default": localePath("en", path),
    },
  };
}

export function localeMetadata(locale: Locale): Metadata {
  const text = seoCopy[locale];
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: { default: text.siteTitle, template: text.titleTemplate },
    description: text.description,
    keywords: keywords[locale],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Interior design, joinery and furniture manufacturing",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
    manifest: "/manifest.webmanifest",
    alternates: alternates(locale),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: localePath(locale),
      siteName: SITE_NAME,
      locale: locale === "ar" ? "ar_EG" : "en_EG",
      alternateLocale: locale === "ar" ? ["en_EG"] : ["ar_EG"],
      title: text.siteTitle,
      description: text.description,
      images: [{ url: "/og.png", width: 1680, height: 945, alt: `${SITE_NAME} — Made with wood. Built for ambitious spaces.` }],
    },
    twitter: {
      card: "summary_large_image",
      title: text.siteTitle,
      description: text.description,
      images: ["/og.png"],
    },
    other: {
      "geo.region": "EG-C",
      "geo.placename": locale === "ar" ? "القاهرة" : "Cairo",
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export function pageMetadata({ locale, path, title, description, image }: { locale: Locale; path: string; title: string; description: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      type: "website",
      url: localePath(locale, path),
      siteName: SITE_NAME,
      locale: locale === "ar" ? "ar_EG" : "en_EG",
      alternateLocale: locale === "ar" ? ["en_EG"] : ["ar_EG"],
      title,
      description,
      images: [{ url: image ?? "/og.png", width: 1680, height: 945, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image ?? "/og.png"] },
  };
}

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.svg"),
    description: seoCopy[locale].description,
    telephone: "+201272333832",
    areaServed: { "@type": "Country", name: locale === "ar" ? "مصر" : "Egypt" },
    knowsLanguage: ["en", "ar"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201272333832",
      contactType: "project inquiries",
      areaServed: "EG",
      availableLanguage: ["English", "Arabic"],
    },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: seoCopy[locale].description,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(locale: Locale, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localePath(locale, item.path)),
    })),
  };
}

export function serviceSchema(locale: Locale, capability: Capability) {
  const path = `/capabilities/${capability.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(localePath(locale, path))}#service`,
    name: capability.title[locale],
    description: capability.intro[locale],
    url: absoluteUrl(localePath(locale, path)),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: locale === "ar" ? "مصر" : "Egypt" },
    serviceType: capability.title[locale],
    audience: { "@type": "BusinessAudience", audienceType: locale === "ar" ? "المطورون والمعماريون وفرق المشروعات" : "Developers, architects and project teams" },
  };
}

export function projectSchema(locale: Locale, project: Project) {
  const path = `/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(localePath(locale, path))}#case-study`,
    name: project.title[locale],
    headline: project.title[locale],
    description: project.summary[locale],
    url: absoluteUrl(localePath(locale, path)),
    inLanguage: locale,
    about: project.capabilities.map((capability) => ({ "@type": "Thing", name: capability })),
    creator: { "@id": `${SITE_URL}/#organization` },
    spatialCoverage: project.location[locale],
  };
}
