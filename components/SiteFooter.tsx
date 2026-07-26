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
        <div className="footer-socials" aria-label={locale === "ar" ? "وسائل التواصل" : "Social links"}>
          <a className="footer-social-link" href={siteContact.whatsappHref} target="_blank" rel="noreferrer" aria-label={locale === "ar" ? "تواصل معنا عبر واتساب" : "Chat with SECTION on WhatsApp"}>
            <SocialIcon kind="whatsapp" />
            <span>WhatsApp</span>
          </a>
          <a className="footer-social-link" href={siteContact.instagramHref} target="_blank" rel="noreferrer" aria-label={locale === "ar" ? "تابع SECTION على إنستغرام" : "Follow SECTION on Instagram"}>
            <SocialIcon kind="instagram" />
            <span>{siteContact.instagramLabel}</span>
          </a>
        </div>
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

function SocialIcon({ kind }: { kind: "whatsapp" | "instagram" }) {
  if (kind === "whatsapp") {
    return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 19.8l1.2-4A8 8 0 1 1 20 11.6Z" /><path d="M8.3 8.1c.4-.4.8-.2 1 .2l.8 1.8c.1.3 0 .6-.3.9l-.5.5c.8 1.5 1.8 2.5 3.4 3.2l.5-.6c.3-.3.6-.4.9-.2l1.7.8c.4.2.6.6.3 1-.5.8-1.3 1.3-2.3 1.2-3.6-.4-7.1-3.8-7.5-7.3-.1-.6.5-1.2 1-1.5Z" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-dot" cx="17.4" cy="6.8" r="1" /></svg>;
}
