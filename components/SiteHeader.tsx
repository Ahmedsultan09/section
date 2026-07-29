import Image from "next/image";
import type { Locale } from "@/lib/site-types";
import { copy } from "@/lib/site-content";
import { LocaleSwitch } from "./LocaleSwitch";
import { DesignAwareLink } from "./DesignAwareLink";
import { siteContact } from "@/lib/drive-assets";

export function Wordmark({ tone = "auto" }: { tone?: "auto" | "dark" | "light" }) {
  return (
    <span className={`wordmark brand-mark brand-mark-${tone}`} aria-label="SECTION">
      <Image unoptimized className="brand-mark-dark" src="/brand/section-black.png" alt="" width={980} height={175} />
      <Image unoptimized className="brand-mark-light" src="/brand/section-white.png" alt="" width={980} height={175} />
    </span>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const nav = copy[locale].nav;
  return (
    <>
      <header className="site-header">
        <DesignAwareLink className="brand-link" href={`/${locale}`}><Wordmark /><small>MADE WITH WOOD</small></DesignAwareLink>
        <nav className="desktop-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          <DesignAwareLink href={`/${locale}/projects`}>{nav.work}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}#capabilities`}>{nav.capabilities}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}#process`}>{nav.process}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}#studio`}>{nav.studio}</DesignAwareLink>
        </nav>
        <div className="header-actions">
          <LocaleSwitch locale={locale} />
          <DesignAwareLink className="header-cta" href={`/${locale}/inquiry`}>{nav.inquiry}<span>↗</span></DesignAwareLink>
        </div>
      </header>
      <details className="mobile-menu">
        <summary aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}><i /><i /></summary>
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-overlay-header">
            <Wordmark tone="light" />
            <LocaleSwitch locale={locale} />
          </div>
          <nav className="mobile-nav-links" aria-label={locale === "ar" ? "التنقل عبر الموقع" : "Mobile navigation"}>
            <DesignAwareLink href={`/${locale}/projects`}>{nav.work}</DesignAwareLink>
            <DesignAwareLink href={`/${locale}#capabilities`}>{nav.capabilities}</DesignAwareLink>
            <DesignAwareLink href={`/${locale}#process`}>{nav.process}</DesignAwareLink>
            <DesignAwareLink href={`/${locale}#studio`}>{nav.studio}</DesignAwareLink>
            <DesignAwareLink href={`/${locale}/inquiry`}>{nav.inquiry}</DesignAwareLink>
          </nav>
          <section className="mobile-nav-contact" aria-label={locale === "ar" ? "تواصل معنا" : "Find us"}>
            <p>{locale === "ar" ? "تواصل معنا" : "Find us"}</p>
            <a href={siteContact.phoneHref}><span aria-hidden="true">☎</span>{siteContact.phoneDisplay}</a>
            <a href={siteContact.instagramHref} target="_blank" rel="noreferrer"><span aria-hidden="true">◎</span>{siteContact.instagramLabel}</a>
          </section>
        </div>
      </details>
    </>
  );
}
