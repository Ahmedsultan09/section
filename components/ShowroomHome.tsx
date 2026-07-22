import Image from "next/image";
import { AdaptiveWebGL } from "./AdaptiveWebGL";
import { DesignAwareLink } from "./DesignAwareLink";
import { DesignSwitcher } from "./DesignSwitcher";
import { InquiryForm } from "./InquiryForm";
import { ProjectStoryRail } from "./ProjectStoryRail";
import { capabilities, copy, getMedia, processSteps } from "@/lib/site-content";
import type { DesignId, Locale } from "@/lib/site-types";

type Mode = Extract<DesignId, "assemblage" | "nocturne">;

export function ShowroomHome({ locale, mode }: { locale: Locale; mode: Mode }) {
  const t = copy[locale];
  const dark = mode === "nocturne";
  const title = locale === "ar"
    ? dark ? <>مساحات <em>تظهر</em> في الضوء.</> : <>من الفكرة إلى <em>قطعة متكاملة.</em></>
    : dark ? <>Spaces <em>revealed</em> in light.</> : <>From first line to <em>final assembly.</em></>;
  const body = locale === "ar"
    ? dark ? "رحلة بصرية عبر الخامة والتصنيع والمكان المكتمل." : "نصمم وننسق ونصنع ونركب العناصر الخشبية للمشروعات الطموحة."
    : dark ? "A cinematic journey through material, making and the completed space." : "We design, coordinate, make and install timber elements for ambitious projects.";
  const poster = dark ? "/drive/dressing/dressing-08.webp" : "/assets/171467_688502.jpeg";

  return (
    <main className={`showroom-home design-${mode}`} data-design={mode}>
      <DesignSwitcher locale={locale} current={mode} />
      <section className="showroom-hero">
        <Image unoptimized className="showroom-hero-poster" src={poster} alt="" fill priority sizes="100vw" />
        <AdaptiveWebGL mode={mode} />
        <div className="showroom-hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="showroom-hero-copy">
          <p>{dark ? "SECTION / MATERIAL THEATRE" : "SECTION / DESIGN · MAKE · INSTALL"}</p>
          <h1>{title}</h1>
          <div><span>{body}</span><DesignAwareLink href={`/${locale}/inquiry`}>{t.hero.primary} ↗</DesignAwareLink></div>
        </div>
        <div className="showroom-hero-proof" aria-label={locale === "ar" ? "عملاء مختارون" : "Selected client work"}>
          <span>{locale === "ar" ? "أعمال مختارة مع" : "Selected work with"}</span><strong>SODIC</strong><i>+</i><strong>ORA</strong>
        </div>
      </section>

      <section className="showroom-statement">
        <p>01 / {locale === "ar" ? "فريق واحد" : "One accountable team"}</p>
        <h2>{locale === "ar" ? <>المشروع يتحرك في <em>خط واحد.</em></> : <>The project moves through <em>one line.</em></>}</h2>
        <span>{locale === "ar" ? "من موجز العمل إلى التصميم والتصنيع والتركيب—مع مراجعة كل انتقال." : "From brief to design, manufacturing and installation—with every handoff checked."}</span>
      </section>

      <section className="showroom-collections" id="capabilities">
        <header><p>02 / {t.capabilities.eyebrow}</p><h2>{t.capabilities.title}</h2></header>
        <div className="showroom-collection-list">
          {capabilities.map((capability, index) => {
            const media = getMedia(capability.image);
            return (
              <DesignAwareLink href={`/${locale}/collections/${capability.slug}`} key={capability.slug} className="showroom-collection-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title[locale]}</h3>
                <p>{capability.short[locale]}</p>
                <div><Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="(max-width: 760px) 38vw, 22vw" /></div>
                <b>↗</b>
              </DesignAwareLink>
            );
          })}
        </div>
      </section>

      <section className="showroom-process" id="process">
        <header><p>03 / {t.process.eyebrow}</p><h2>{locale === "ar" ? <>أربع مراحل. <em>قصة واحدة.</em></> : <>Four stages. <em>One story.</em></>}</h2></header>
        <div className="showroom-process-track">
          {processSteps.map((step) => {
            const media = getMedia(step.image);
            return <article key={step.number}>
              <div className="showroom-process-media"><Image unoptimized src={media.src} alt={media.alt[locale]} fill sizes="(max-width: 760px) 88vw, 42vw" /></div>
              <span>{step.number}</span><h3>{step.title[locale]}</h3><p>{step.text[locale]}</p>
            </article>;
          })}
        </div>
      </section>

      <section className="showroom-projects">
        <header><p>04 / {t.projects.eyebrow}</p><h2>{locale === "ar" ? <>الثقة تُبنى من <em>العمل.</em></> : <>Trust is built through <em>the work.</em></>}</h2></header>
        <ProjectStoryRail locale={locale} />
      </section>

      <section className="showroom-manufacturing">
        <div className="showroom-manufacturing-media"><Image unoptimized src="/assets/805180_442982.jpeg" alt={getMedia("asset-process-01").alt[locale]} fill sizes="(max-width: 760px) 100vw, 52vw" /></div>
        <div><p>05 / {t.factory.eyebrow}</p><h2>{t.factory.title}</h2><span>{t.factory.body}</span><ol>{t.factory.facts.map((fact, index) => <li key={fact}><b>0{index + 1}</b>{fact}</li>)}</ol></div>
      </section>

      <section className="showroom-inquiry" id="inquiry">
        <header><p>06 / {locale === "ar" ? "ابدأ من هنا" : "Start here"}</p><h2>{locale === "ar" ? <>ما الذي تريد أن <em>نصنعه؟</em></> : <>What should we <em>make together?</em></>}</h2><span>{locale === "ar" ? "اختر المطلوب في خطوات قصيرة. الاسم ورقم الهاتف فقط مطلوبان." : "Qualify the request in a few simple choices. Only your name and phone are required."}</span></header>
        <InquiryForm locale={locale} />
      </section>
    </main>
  );
}
