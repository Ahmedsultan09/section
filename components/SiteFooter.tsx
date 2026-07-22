import type { Locale } from "@/lib/site-types";
import { Wordmark } from "./SiteHeader";
import { DesignAwareLink } from "./DesignAwareLink";
import { PartnerMarquee } from "./PartnerMarquee";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <PartnerMarquee locale={locale} />
      <div><Wordmark /><p>{locale === "ar" ? "مصنوع من الخشب. لمَساحات بطموح كبير." : "Made with wood. Built for ambitious spaces."}</p></div>
      <div className="footer-links">
        <DesignAwareLink href={`/${locale}/projects`}>{locale === "ar" ? "الأعمال" : "Projects"}</DesignAwareLink>
        <DesignAwareLink href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش مشروعك" : "Discuss a project"}</DesignAwareLink>
        <a href="tel:+201272333832">+20 127 233 3832</a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} SECTION</span>
        <span>{locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}</span>
      </div>
    </footer>
  );
}
