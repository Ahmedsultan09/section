import Link from "next/link";
import type { Locale } from "@/lib/site-types";
import { Wordmark } from "./SiteHeader";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div><Wordmark /><p>{locale === "ar" ? "مصنوع من الخشب. لمَساحات بطموح كبير." : "Made with wood. Built for ambitious spaces."}</p></div>
      <div className="footer-links">
        <Link href={`/${locale}/projects`}>{locale === "ar" ? "الأعمال" : "Projects"}</Link>
        <Link href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش مشروعك" : "Discuss a project"}</Link>
        <a href="tel:+201272333832">+20 127 233 3832</a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} SECTION</span>
        <span>{locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}</span>
      </div>
    </footer>
  );
}
