import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { capabilities, copy, getMedia, isLocale, projects } from "@/lib/site-content";
import { Reveal } from "@/components/Reveal";
import { ProcessStory } from "@/components/ProcessStory";
import { InquiryForm } from "@/components/InquiryForm";
import { DesignSwitcher, type DesignVariant } from "@/components/DesignSwitcher";
import { ImmersiveHome } from "@/components/ImmersiveHome";
import { ShowroomHome } from "@/components/ShowroomHome";
import { ProjectStoryRail } from "@/components/ProjectStoryRail";
import { DesignAwareLink } from "@/components/DesignAwareLink";
import { pageMetadata, seoCopy } from "@/lib/seo";
import { getDesign } from "@/lib/designs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    ...pageMetadata({ locale, path: "", title: seoCopy[locale].siteTitle, description: seoCopy[locale].description }),
    title: { absolute: seoCopy[locale].siteTitle },
  };
}

export default async function HomePage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams?: Promise<{ design?: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const design: DesignVariant = getDesign((await searchParams)?.design);
  if (design === "immersive") return <ImmersiveHome locale={locale} />;
  if (design === "assemblage" || design === "nocturne") return <ShowroomHome locale={locale} mode={design} />;
  const t = copy[locale];
  const hero = getMedia("asset-living-01");
  const featured = projects[0];
  const featuredImage = getMedia(featured.media[0]);
  const factory = getMedia("asset-process-01");

  return (
    <main className={`design-${design}`} data-design={design}>
      <DesignSwitcher locale={locale} current={design} />
      <section className="hero" id="top">
        <div className="hero-image-frame">
          <Image unoptimized className="hero-image" src={hero.src} alt={hero.alt[locale]} fill priority sizes="(max-width: 700px) 100vw, 46vw" />
          <div className="hero-shade" />
          <span className="hero-frame-code">SECTION / 1:1</span>
        </div>
        <div className="hero-grid" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">{t.hero.eyebrow}</p>
          <h1 aria-label={t.hero.title.replace("\n", " ")}>
            {locale === "ar" ? <><span>مصنوع من <em>الخشب.</em></span><span>لمساحات <em>بطموح</em> كبير.</span></> : <><span>Made with <em>wood.</em></span><span>Built for <em>ambitious</em></span><span>spaces.</span></>}
          </h1>
          <div className="hero-bottom">
            <p>{t.hero.body}</p>
            <div className="hero-actions"><DesignAwareLink className="button-primary" href="#inquiry">{t.hero.primary}<span>↘</span></DesignAwareLink><DesignAwareLink className="text-link light" href={`/${locale}/projects`}>{t.hero.secondary}<span>↓</span></DesignAwareLink></div>
          </div>
        </div>
        <p className="hero-note">{t.hero.note}</p>
        <span className="scroll-cue">SCROLL <i /></span>
      </section>

      <section className="proof-section section-pad">
        <Reveal className="proof-number">01</Reveal>
        <Reveal className="proof-copy"><p className="eyebrow">{t.proof.eyebrow}</p><h2>{locale === "ar" ? <>من أول خط إلى <em>آخر تركيب.</em></> : <>From first line to <em>final fit.</em></>}</h2><p>{t.proof.body}</p></Reveal>
        <Reveal className="proof-mark" delay={0.12}><span>SECTION</span><small>DESIGN / MAKE / DELIVER</small></Reveal>
      </section>

      <section className="featured-project section-pad" id="work">
        <div className="section-heading split"><div><p className="eyebrow">{t.featured.eyebrow}</p><h2>{locale === "ar" ? <>المشروع يروي <em>القصة.</em></> : <>The project tells <em>the story.</em></>}</h2></div><span>02 — {featured.sectorLabel[locale]}</span></div>
        <Reveal className="featured-media">
          <Image unoptimized src={featuredImage.src} alt={featuredImage.alt[locale]} fill sizes="100vw" />
          <div className="featured-label"><p>{featured.client[locale]}</p><h3>{featured.title[locale]}</h3><span>{featured.location[locale]}</span></div>
          <DesignAwareLink href={`/${locale}/projects/${featured.slug}`} aria-label={t.featured.link}>{t.featured.link}<span>↗</span></DesignAwareLink>
        </Reveal>
      </section>

      <section className="capabilities-section section-pad" id="capabilities">
        <div className="section-heading split"><div><p className="eyebrow">{t.capabilities.eyebrow}</p><h2>{locale === "ar" ? <>استكشف <em>الأعمال.</em></> : <>Explore the <em>work.</em></>}</h2></div><p>{t.capabilities.body}</p></div>
        <div className="capability-index">
          {capabilities.map((capability) => {
            const image = getMedia(capability.image);
            return <DesignAwareLink href={`/${locale}/collections/${capability.slug}`} className="capability-row" key={capability.slug}>
              <span>{capability.number}</span><h3>{capability.title[locale]}</h3><p>{capability.short[locale]}</p><div className="capability-preview"><Image unoptimized src={image.src} alt={image.alt[locale]} fill sizes="28vw" /></div><b>↗</b>
            </DesignAwareLink>;
          })}
        </div>
      </section>

      <section className="process-intro section-pad" id="process">
        <div><p className="eyebrow">{t.process.eyebrow}</p><h2>{locale === "ar" ? <>أربع مراحل. <em>خط واحد.</em></> : <>Four moves. <em>One line.</em></>}</h2></div><p>{t.process.body}</p><span>{locale === "ar" ? "٤ مراحل" : "4 STAGES"}</span>
      </section>
      <ProcessStory locale={locale} />

      <section className="factory-section" id="studio">
        <div className="factory-media"><Image unoptimized src={factory.src} alt={factory.alt[locale]} fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <Reveal className="factory-copy"><p className="eyebrow">{t.factory.eyebrow}</p><h2>{locale === "ar" ? <>نصنع هنا. <em>ونراجع هنا.</em></> : <>Made here. <em>Checked here.</em></>}</h2><p>{t.factory.body}</p><ol>{t.factory.facts.map((fact, index) => <li key={fact}><span>0{index + 1}</span>{fact}</li>)}</ol></Reveal>
      </section>

      <section className="projects-section section-pad">
        <div className="section-heading split"><div><p className="eyebrow">{t.projects.eyebrow}</p><h2>{locale === "ar" ? <>أعمال تستحق <em>أن تفتحها.</em></> : <>Work worth <em>opening.</em></>}</h2></div><p>{t.projects.body}</p></div>
        <ProjectStoryRail locale={locale} />
      </section>

      <section className="materials-section section-pad">
        <Reveal className="materials-copy"><p className="eyebrow">{t.materials.eyebrow}</p><h2>{locale === "ar" ? <>مختارة <em>لتدوم.</em></> : <>Chosen to <em>last.</em></>}</h2><p>{t.materials.body}</p></Reveal>
        <div className="material-list">{t.materials.items.map((item, index) => <Reveal key={item} className="material-row" delay={index * 0.05}><span>0{index + 1}</span><p>{item}</p><i /></Reveal>)}</div>
      </section>

      <section className="closing-cta section-pad">
        <p className="eyebrow">{t.close.eyebrow}</p><h2>{locale === "ar" ? <>أرسل لنا <em>المتطلبات.</em></> : <>Bring us <em>the brief.</em></>}</h2><div><p>{t.close.body}</p><DesignAwareLink className="button-yellow" href="#inquiry">{t.close.action}<span>↘</span></DesignAwareLink></div>
      </section>

      <section className="landing-inquiry section-pad" id="inquiry">
        <div className="section-heading split"><div><p className="eyebrow">{locale === "ar" ? "ابدأ من هنا" : "Start here"}</p><h2>{locale === "ar" ? <>قل لنا ما <em>تحتاجه.</em></> : <>Tell us what <em>you need.</em></>}</h2></div><p>{locale === "ar" ? "خطوات قصيرة تساعدنا على فهم المطلوب. الاسم ورقم الهاتف فقط إلزاميان." : "A few easy choices help us understand the ask. Only your name and phone are required."}</p></div>
        <InquiryForm locale={locale} />
      </section>
    </main>
  );
}
