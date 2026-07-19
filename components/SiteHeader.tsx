import Link from "next/link";
import type { Locale } from "@/lib/site-types";
import { copy } from "@/lib/site-content";
import { LocaleSwitch } from "./LocaleSwitch";

export function Wordmark() {
  return <span className="wordmark" aria-label="Section">SECT<span>I</span>ON</span>;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const nav = copy[locale].nav;
  return (
    <header className="site-header">
      <Link className="brand-link" href={`/${locale}`}><Wordmark /><small>MADE WITH WOOD</small></Link>
      <nav className="desktop-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
        <Link href={`/${locale}/projects`}>{nav.work}</Link>
        <Link href={`/${locale}#capabilities`}>{nav.capabilities}</Link>
        <Link href={`/${locale}#process`}>{nav.process}</Link>
        <Link href={`/${locale}#studio`}>{nav.studio}</Link>
      </nav>
      <div className="header-actions">
        <LocaleSwitch locale={locale} />
        <Link className="header-cta" href={`/${locale}/inquiry`}>{nav.inquiry}<span>↗</span></Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}><i /><i /></summary>
        <nav>
          <Link href={`/${locale}/projects`}>{nav.work}</Link>
          <Link href={`/${locale}#capabilities`}>{nav.capabilities}</Link>
          <Link href={`/${locale}#process`}>{nav.process}</Link>
          <Link href={`/${locale}#studio`}>{nav.studio}</Link>
          <Link href={`/${locale}/inquiry`}>{nav.inquiry}</Link>
        </nav>
      </details>
    </header>
  );
}
