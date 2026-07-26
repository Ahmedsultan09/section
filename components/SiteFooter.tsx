import type { Locale } from "@/lib/site-types";
import { Wordmark } from "./SiteHeader";
import { DesignAwareLink } from "./DesignAwareLink";
import { PartnerMarquee } from "./PartnerMarquee";
import { siteContact } from "@/lib/drive-assets";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <PartnerMarquee locale={locale} />
      <div><Wordmark tone="light" /><p>{locale === "ar" ? "مصنوع من الخشب. لمَساحات بطموح كبير." : "Made with wood. Built for ambitious spaces."}</p></div>
      <div className="footer-links">
        <DesignAwareLink href={`/${locale}/projects`}>{locale === "ar" ? "الأعمال" : "Projects"}</DesignAwareLink>
        <DesignAwareLink href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش مشروعك" : "Discuss a project"}</DesignAwareLink>
        <a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a>
        <a href={siteContact.instagramHref} target="_blank" rel="noreferrer">{siteContact.instagramLabel}</a>
        <address>
          <span>{locale === "ar" ? `المعرض — ${siteContact.showroom.ar}` : `Showroom — ${siteContact.showroom.en}`}</span>
          <span>{locale === "ar" ? `المصنع — ${siteContact.factory.ar}` : `Factory — ${siteContact.factory.en}`}</span>
        </address>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} SECTION</span>
        <span>{locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}</span>
      </div>
    </footer>
  );
}
