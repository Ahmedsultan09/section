import type { MetadataRoute } from "next";
import { capabilities, locales, projects } from "@/lib/site-content";
import { absoluteUrl, localePath, SEO_LAST_MODIFIED } from "@/lib/seo";
import type { Locale } from "@/lib/site-types";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function localizedEntry(locale: Locale, path: string, priority: number, changeFrequency: ChangeFrequency): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(localePath(locale, path)),
    lastModified: SEO_LAST_MODIFIED,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: absoluteUrl(localePath("en", path)),
        ar: absoluteUrl(localePath("ar", path)),
        "x-default": absoluteUrl(localePath("en", path)),
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    localizedEntry(locale, "", 1, "monthly"),
    localizedEntry(locale, "/projects", 0.9, "monthly"),
    ...projects.map((project) => localizedEntry(locale, `/projects/${project.slug}`, 0.8, "monthly")),
    ...capabilities.map((capability) => localizedEntry(locale, `/collections/${capability.slug}`, 0.85, "monthly")),
    localizedEntry(locale, "/inquiry", 0.65, "yearly"),
  ]);
}
