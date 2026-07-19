import Image from "next/image";
import Link from "next/link";
import { capabilities, getMedia, projects } from "@/lib/site-content";
import type { Locale } from "@/lib/site-types";
import { DesignSwitcher } from "./DesignSwitcher";
import { ImmersiveWebGL } from "./ImmersiveWebGL";
import { ImmersiveProcessStory } from "./ImmersiveProcessStory";
import { InquiryForm } from "./InquiryForm";

export function ImmersiveHome({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const languageTarget = locale === "en" ? "ar" : "en";
  const heroFrames = ["asset-living-01", "asset-wall-01", "asset-unit-01", "asset-bedroom-01", "asset-door-01"].map(getMedia);

  return (
    <main className="design-immersive" data-design="immersive">
      <DesignSwitcher locale={locale} current="immersive" />

      <header className="immersive-header">
        <Link className="immersive-wordmark" href={`/${locale}?design=immersive`}>SECT<span>I</span>ON</Link>
        <nav aria-label={isArabic ? "التنقل" : "Navigation"}>
          <a href="#collections">{isArabic ? "ما نصنعه" : "What we make"}</a>
          <a href="#process">{isArabic ? "كيف نعمل" : "How it moves"}</a>
          <a href="#projects">{isArabic ? "المشروعات" : "Projects"}</a>
        </nav>
        <div className="immersive-header-actions">
          <Link href={`/${languageTarget}?design=immersive`}>{languageTarget.toUpperCase()}</Link>
          <a className="immersive-header-cta" href="#inquiry">{isArabic ? "ابدأ مشروعاً" : "Start a project"}<span>↗</span></a>
        </div>
      </header>

      <section className="immersive-hero" id="top">
        <ImmersiveWebGL />
        <div className="immersive-hero-noise" aria-hidden="true" />
        <div className="immersive-hero-reel" aria-hidden="true">
          <div className="immersive-hero-reel-track">
            {[...heroFrames, ...heroFrames].map((media, index) => <figure className={`frame-${index % heroFrames.length}`} key={`${media.id}-${index}`}><Image unoptimized src={media.src} alt="" fill priority={index < 2} sizes="(max-width: 760px) 42vw, 22vw" /><span>SECTION / {String((index % heroFrames.length) + 1).padStart(2, "0")}</span></figure>)}
          </div>
        </div>
        <div className="immersive-hero-copy">
          <p>{isArabic ? "تصميم / تصنيع / تركيب" : "Design / Manufacture / Install"}</p>
          <h1>{isArabic ? <>نجعل المساحة<br /><em>ملموسة.</em></> : <>Spaces, made<br /><em>tangible.</em></>}</h1>
          <div className="immersive-hero-foot">
            <span>{isArabic ? "من أول فكرة إلى آخر تفصيلة." : "From the first idea to the final fit."}</span>
            <a href="#approach" aria-label={isArabic ? "اكتشف المزيد" : "Explore the page"}><i>↓</i>{isArabic ? "استكشف" : "Enter"}</a>
          </div>
        </div>
      </section>

      <section className="immersive-approach" id="approach">
        <p className="immersive-label">{isArabic ? "منهجنا" : "Our approach"}</p>
        <h2>{isArabic ? <>خط المعماري<br />يصبح <em>شيئاً حقيقياً.</em></> : <>The architect’s line<br />becomes <em>something real.</em></>}</h2>
        <div className="immersive-approach-body">
          <p>{isArabic ? "ننسق التفاصيل، نصنع كل عنصر، ونركبه في موقعه. هذا يعني قرارات أقل ضياعاً ونتيجة أكثر تماسكاً." : "We coordinate the detail, make every element and place it on site. Fewer lost decisions. A more coherent result."}</p>
          <span>{isArabic ? "فريق واحد مسؤول" : "One accountable team"}</span>
        </div>
      </section>

      <section className="immersive-collections" id="collections">
        <div className="immersive-collections-intro">
          <p className="immersive-label">{isArabic ? "ما نصنعه" : "What we make"}</p>
          <h2>{isArabic ? "ثمانية عوالم. خبرة واحدة." : "Eight worlds. One craft."}</h2>
          <p>{isArabic ? "ادخل من العنصر الذي يحتاجه المشروع." : "Enter through the element your project needs."}</p>
        </div>
        <div className="immersive-collection-stack">
          {capabilities.map((capability) => {
            const media = getMedia(capability.image);
            return <Link className="immersive-collection" href={`/${locale}/collections/${capability.slug}`} key={capability.slug}>
              <div className="immersive-collection-media"><Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="(max-width: 780px) 100vw, 54vw" /></div>
              <div className="immersive-collection-copy"><span>{capability.number}</span><h3>{capability.title[locale]}</h3><p>{capability.short[locale]}</p><b>Open ↗</b></div>
            </Link>;
          })}
        </div>
      </section>

      <section className="immersive-process" id="process">
        <div className="immersive-process-title">
          <p className="immersive-label">{isArabic ? "كيف نعمل" : "How it moves"}</p>
          <h2>{isArabic ? <>أربع حركات.<br /><em>تسليم واحد.</em></> : <>Four moves.<br /><em>One handover.</em></>}</h2>
        </div>
        <ImmersiveProcessStory locale={locale} />
      </section>

      <section className="immersive-projects" id="projects">
        <div className="immersive-projects-head"><p className="immersive-label">{isArabic ? "مشروعات مختارة" : "Selected work"}</p><h2>{isArabic ? "المشروع هو الدليل." : "The project is the proof."}</h2><Link href={`/${locale}/projects`}>{isArabic ? "شاهد الكل" : "View all"} ↗</Link></div>
        <div className="immersive-project-rail">
          {projects.map((project) => {
            const media = getMedia(project.media[0]);
            return <Link className="immersive-project" href={`/${locale}/projects/${project.slug}`} key={project.slug}>
              <div><Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="(max-width: 780px) 86vw, 54vw" /></div>
              <span>{project.sectorLabel[locale]}</span><h3>{project.title[locale]}</h3><p>{project.summary[locale]}</p>
            </Link>;
          })}
        </div>
      </section>

      <section className="immersive-inquiry" id="inquiry">
        <div className="immersive-inquiry-head"><p className="immersive-label">{isArabic ? "الخطوة التالية" : "The next move"}</p><h2>{isArabic ? <>لديك فكرة؟<br /><em>لنجعلها حقيقية.</em></> : <>Have a brief?<br /><em>Let’s make it real.</em></>}</h2><p>{isArabic ? "اختر ما تحتاجه واترك اسمك ورقمك. سنكمل الحديث معاً." : "Choose what you need, then leave your name and number. We’ll continue the conversation."}</p></div>
        <InquiryForm locale={locale} />
      </section>

      <footer className="immersive-footer"><span>SECTION © 2026</span><span>{isArabic ? "صُنع في القاهرة" : "MADE IN CAIRO"}</span><a href="#top">{isArabic ? "إلى الأعلى" : "BACK TO ORBIT"} ↑</a></footer>
    </main>
  );
}
