import Image from "next/image";
import { AdaptiveWebGL } from "./AdaptiveWebGL";
import { DesignAwareLink } from "./DesignAwareLink";
import { InquiryForm } from "./InquiryForm";
import { MaterialBrandMarquee } from "./MaterialBrandMarquee";
import { NocturneCategoryStack } from "./NocturneCategoryStack";
import { PartnerMarquee } from "./PartnerMarquee";
import { ProjectStoryRail } from "./ProjectStoryRail";
import { ShowroomProcess } from "./ShowroomProcess";
import { capabilities, copy, getMedia } from "@/lib/site-content";
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
  const heroImages = dark
    ? ["dressing-09", "kitchen-obour-01", "bedroom-a-01", "dressing-12", "kitchen-edited-02", "bedroom-b-03", "dressing-13"].map(getMedia)
    : [];

  return (
    <main className={`showroom-home design-${mode}`} data-design={mode}>
      <section className="showroom-hero">
        <Image unoptimized className="showroom-hero-poster" src={poster} alt="" fill priority sizes="100vw" />
        <AdaptiveWebGL mode={mode} imageSources={heroImages.map((image) => image.src)} />
        <div className="showroom-hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="showroom-hero-copy">
          <p>{dark ? "SECTION / MATERIAL THEATRE" : "SECTION / DESIGN · MAKE · INSTALL"}</p>
          <h1>{title}</h1>
          <div><span>{body}</span>{!dark && <DesignAwareLink href={`/${locale}/inquiry`}>{t.hero.primary} ↗</DesignAwareLink>}</div>
        </div>
      </section>

      <section className="showroom-statement">
        <p>01 / {locale === "ar" ? "فريق واحد" : "One accountable team"}</p>
        <h2>{locale === "ar" ? <>المشروع يتحرك في <em>خط واحد.</em></> : <>The project moves through <em>one line.</em></>}</h2>
        <span>{locale === "ar" ? "من موجز العمل إلى التصميم والتصنيع والتركيب—مع مراجعة كل انتقال." : "From brief to design, manufacturing and installation—with every handoff checked."}</span>
      </section>

      <section className="showroom-collections" id="capabilities">
        <header><p>02 / {t.capabilities.eyebrow}</p><h2>{t.capabilities.title}</h2></header>
        {dark && <NocturneCategoryStack locale={locale} items={capabilities.map((capability) => ({ capability, media: getMedia(capability.image) }))} />}
        <div className={`showroom-collection-list ${dark ? "nocturne-desktop-collections" : ""}`}>
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

      <ShowroomProcess locale={locale} mode={mode} />

      <section className="showroom-projects">
        <header><p>04 / {t.projects.eyebrow}</p><h2>{locale === "ar" ? <>الثقة تُبنى من <em>العمل.</em></> : <>Trust is built through <em>the work.</em></>}</h2></header>
        <ProjectStoryRail locale={locale} />
      </section>

      {!dark && <section className="showroom-manufacturing">
        <div className="showroom-manufacturing-media">
          <Image unoptimized src="/drive/materials/material-01.webp" alt={locale === "ar" ? "مراجعة عينة خشبية بعلامة SECTION" : "A SECTION-labelled timber sample under review"} fill sizes="(max-width: 760px) 100vw, 52vw" />
          <figure><Image unoptimized src="/drive/materials/material-03.webp" alt={locale === "ar" ? "مكتبة عينات للقشرة والتشطيبات" : "Veneer and finish sample library"} fill sizes="240px" /></figure>
          <figure><Image unoptimized src="/drive/materials/material-07.webp" alt={locale === "ar" ? "مراجعة عينات التشطيب يدوياً" : "Finishes being reviewed by hand"} fill sizes="240px" /></figure>
        </div>
        <div><p>05 / {locale === "ar" ? "الخامة والتصنيع" : "Material & manufacturing"}</p><h2>{locale === "ar" ? "نختار بالعين. ونثبت باليد." : "Chosen by eye. Proven by hand."}</h2><span>{locale === "ar" ? "نراجع الألواح والقشرة والتشطيبات والإكسسوارات كعينات فعلية قبل الإنتاج، حتى تتوافق الدرجة والملمس وقابلية التنفيذ مع موجز المشروع." : "Boards, veneers, finishes and hardware are reviewed as physical samples before production, aligning tone, texture and buildability with the project brief."}</span><ol>{(locale === "ar" ? ["مكتبات تشطيبات منسقة", "عينات واعتمادات فعلية", "مراجعة قبل بدء الإنتاج"] : ["Curated finish libraries", "Physical samples and approvals", "Review before production"]).map((fact, index) => <li key={fact}><b>0{index + 1}</b>{fact}</li>)}</ol></div>
      </section>}

      <section className="showroom-about" id="studio">
        <p>06 / {locale === "ar" ? "عن SECTION" : "About SECTION"}</p>
        <h2>{locale === "ar" ? <>الخشب هو الخامة. <em>والمكان هو القصة.</em></> : <>Wood is the medium. <em>The space is the story.</em></>}</h2>
        <div className="showroom-about-copy">
          <p>{locale === "ar" ? "نرشد المشروع من أول محادثة حتى التركيب النهائي، ونحوّل الرؤية إلى عناصر خشبية مصممة للمقاس تجمع بين الجمال والوظيفة والمتانة." : "We guide a project from the first conversation to final installation, turning the brief into made-to-fit timber interiors that balance beauty, function and durability."}</p>
          <p>{locale === "ar" ? "رؤيتنا أن نكون شريكاً موثوقاً للتصميم والتصنيع؛ نصنع مساحات ذات غرض واضح، تعكس هوية المشروع وتدوم بشكل جميل." : "Our vision is to be a trusted design-and-manufacturing partner: creating purposeful spaces that carry the project’s identity and last beautifully."}</p>
        </div>
        <blockquote>{locale === "ar" ? "أعد التفكير في التصميم. اروِ قصة المكان." : "Rethink the design. Tell the story of the space."}</blockquote>
      </section>

      {dark && <>
        <PartnerMarquee locale={locale} />
        <MaterialBrandMarquee locale={locale} />
        <section className="nocturne-final-cta">
          <p>{locale === "ar" ? "ابدأ من هنا" : "Start here"}</p>
          <h2>{locale === "ar" ? <>لنجعل فكرتك <em>مساحة حقيقية.</em></> : <>Let’s make your idea <em>a real space.</em></>}</h2>
          <DesignAwareLink href={`/${locale}/inquiry`}>{locale === "ar" ? "ناقش مشروعك" : "Discuss a project"} <span>↗</span></DesignAwareLink>
        </section>
      </>}

      {!dark && <section className="showroom-inquiry" id="inquiry">
        <header><p>07 / {locale === "ar" ? "ابدأ من هنا" : "Start here"}</p><h2>{locale === "ar" ? <>ما الذي تريد أن <em>نصنعه؟</em></> : <>What should we <em>make together?</em></>}</h2><span>{locale === "ar" ? "اختر المطلوب في خطوات قصيرة. الاسم ورقم الهاتف فقط مطلوبان." : "Qualify the request in a few simple choices. Only your name and phone are required."}</span></header>
        <InquiryForm locale={locale} />
      </section>}
    </main>
  );
}
