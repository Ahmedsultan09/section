import type { Locale } from "@/lib/site-types";
import { copy } from "@/lib/site-content";
import { LocaleSwitch } from "./LocaleSwitch";
import { DesignAwareLink } from "./DesignAwareLink";

export function Wordmark() {
  return <span className="wordmark" aria-label="Section">SECT<span>I</span>ON</span>;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const nav = copy[locale].nav;
  return (
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
      <details className="mobile-menu">
        <summary aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}><i /><i /></summary>
        <nav>
          <DesignAwareLink href={`/${locale}/projects`}>{nav.work}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}#capabilities`}>{nav.capabilities}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}#process`}>{nav.process}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}#studio`}>{nav.studio}</DesignAwareLink>
          <DesignAwareLink href={`/${locale}/inquiry`}>{nav.inquiry}</DesignAwareLink>
        </nav>
      </details>
    </header>
  );
}
