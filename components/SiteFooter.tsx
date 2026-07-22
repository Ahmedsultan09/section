import type { Locale } from "@/lib/site-types";
import { Wordmark } from "./SiteHeader";
import { DesignAwareLink } from "./DesignAwareLink";
import { PartnerMarquee } from "./PartnerMarquee";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <PartnerMarquee locale={locale} />
      <div><Wordmark tone="light" /><p>{locale === "ar" ? "مصنوع من الخشب. لمَساحات بطموح كبير." : "Made with wood. Built for ambitious spaces."}</p></div>
      <div className="footer-links">
        <DesignAwareLink href={`/${locale}/projects`}>{locale === "ar" ? "الأعمال" : "Projects"}</DesignAwareLink>
        <DesignAwareLink href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش مشروعك" : "Discuss a project"}</DesignAwareLink>
        <a href="tel:+201272333832">+20 127 233 3832</a>
        <address>
          <span>{locale === "ar" ? "المعرض — سيلفر ستار داون تاون مول، القاهرة الجديدة" : "Showroom — Silver Star Downtown Mall, New Cairo"}</span>
          <span>{locale === "ar" ? "المصنع — شارع الترولي، المرج، القاهرة" : "Factory — Trolly Street, El-Marg, Cairo"}</span>
        </address>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} SECTION</span>
        <span>{locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}</span>
      </div>
    </footer>
  );
}
