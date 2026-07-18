"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  kicker: string;
  title: string;
  note: string;
  body: React.ReactNode;
  tone?: "paper" | "ink" | "rust" | "sage";
};

const oldSite = "https://chestnut-rabbit-rcj1hm.mystrikingly.com/";
const sohoHome = "https://www.sohohome.com/";
const sohoDesign = "https://www.sohohome.com/eu/soho-home-design";

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return <span aria-hidden="true">{direction === "right" ? "→" : "←"}</span>;
}

function Source({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      {children} ↗
    </a>
  );
}

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <article className={`slide tone-${slide.tone ?? "paper"}`}>
      <div className="slide-heading">
        <p className="kicker">{slide.kicker}</p>
        <h1>{slide.title}</h1>
      </div>
      <div className="slide-body">{slide.body}</div>
    </article>
  );
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const touchStart = useRef<number | null>(null);

  const slides = useMemo<Slide[]>(
    () => [
      {
        kicker: "Digital direction · owner presentation",
        title: "A more premium way to sell spaces—and the pieces inside them.",
        note: "Open with the business idea, not the website. We are proposing a digital showroom for Section Furniture: one brand, two clear ways to convert—start a complete project or buy a finished piece.",
        tone: "ink",
        body: (
          <div className="cover-grid">
            <div className="cover-copy">
              <p className="deck-intro">
                Section Furniture can feel as considered online as the rooms it creates.
              </p>
              <div className="cover-labels">
                <span>Interior design</span><span>Custom woodwork</span><span>Curated furniture</span>
              </div>
              <p className="meeting-date">Prepared for the owner meeting · July 2026</p>
            </div>
            <figure className="hero-frame">
              <img src="/assets/141202_527604.jpeg" alt="Section Furniture living room project" />
              <figcaption>Made in Cairo · designed around real life</figcaption>
            </figure>
          </div>
        ),
      },
      {
        kicker: "The decision in the room",
        title: "This is not only a landing page. It is a brand showroom with two doors.",
        note: "Make the strategic distinction clearly. A single campaign landing page usually has one action. This business needs a compact brand website: high-intent project leads plus a curated shop. The homepage can still be focused, but it must route people by intent.",
        body: (
          <div className="two-doors">
            <section className="door door-project">
              <span className="door-number">01</span>
              <div>
                <p className="eyebrow">High-value journey</p>
                <h2>Start a project</h2>
                <p>Interiors, kitchens, dressing rooms, cladding, bespoke pieces and full execution.</p>
              </div>
              <span className="door-cta">Book a consultation <Arrow /></span>
            </section>
            <section className="door door-shop">
              <span className="door-number">02</span>
              <div>
                <p className="eyebrow">Fast-conversion journey</p>
                <h2>Shop the collection</h2>
                <p>Side tables, consoles, mirrors and other pieces with clear size, price and delivery.</p>
              </div>
              <span className="door-cta">Explore pieces <Arrow /></span>
            </section>
          </div>
        ),
      },
      {
        kicker: "What exists today",
        title: "The proof is already there. The hierarchy is not.",
        note: "Be respectful: the current site contains a lot of proof, not a lack of effort. The problem is curation. Visitors meet many galleries and messages without a clear next step, and the template identity competes with the brand.",
        body: (
          <div className="audit-grid">
            <figure className="browser-card">
              <div className="browser-top"><i /><i /><i /><span>Current Strikingly site</span></div>
              <img src="/assets/old-site-home.png" alt="Existing Section Furniture website" />
            </figure>
            <div className="audit-list">
              <div className="audit-item good"><span>Keep</span><p>Real project photography, manufacturing story, showroom address and the design → prototype → build process.</p></div>
              <div className="audit-item"><span>Fix</span><p>A very long gallery, one-item navigation and no clear route to inquire, compare or buy.</p></div>
              <div className="audit-item"><span>Elevate</span><p>Brand naming, copy quality, art direction, project context and product information.</p></div>
              <Source href={oldSite}>Open the current website</Source>
            </div>
          </div>
        ),
      },
      {
        kicker: "Reference model · Soho Home",
        title: "Commerce becomes stronger when every product belongs to a world.",
        note: "Explain what we are borrowing from Soho Home—not its identity. The useful pattern is editorial commerce: styled spaces create desire, category cards make the catalogue navigable, product cards handle purchase facts, and a design service catches people who need help.",
        tone: "rust",
        body: (
          <div className="reference-layout">
            <div className="reference-quote">
              <p>“Sell the room.<br />Then sell the piece.”</p>
              <div className="mini-sources"><Source href={sohoHome}>Soho Home</Source><Source href={sohoDesign}>Design service</Source></div>
            </div>
            <div className="reference-patterns">
              <div><b>01</b><h3>Editorial first</h3><p>Large lifestyle imagery gives products emotional context.</p></div>
              <div><b>02</b><h3>Clear collection paths</h3><p>Shop by room, category and curated story—not one endless grid.</p></div>
              <div><b>03</b><h3>Service + shop</h3><p>The design service and the catalogue support each other.</p></div>
              <div><b>04</b><h3>Useful product facts</h3><p>Price, material, size, variants, lead time and availability are visible.</p></div>
            </div>
          </div>
        ),
      },
      {
        kicker: "The proposed experience",
        title: "A customer should know where to go in five seconds.",
        note: "Walk left to right. The homepage establishes the brand and immediately offers both intents. Service visitors move through projects, process and consultation. Product visitors move through collection, product details and checkout or an order request. WhatsApp is a support channel, not the whole experience.",
        body: (
          <div className="journey-map">
            <div className="journey-start"><span>Entry</span><strong>Homepage</strong><small>Positioning + proof + two CTAs</small></div>
            <div className="journey-split"><i /></div>
            <div className="journey-path project-path">
              <div><span>Services</span><small>What we do</small></div><Arrow /><div><span>Projects</span><small>Evidence</small></div><Arrow /><div><span>Consultation</span><small>Qualified lead</small></div>
            </div>
            <div className="journey-path shop-path">
              <div><span>Collection</span><small>Curated browse</small></div><Arrow /><div><span>Product</span><small>Decision facts</small></div><Arrow /><div><span>Order</span><small>Pay or request</small></div>
            </div>
            <p className="journey-principle">One navigation. Two primary conversions. Consistent trust throughout.</p>
          </div>
        ),
      },
      {
        kicker: "What can be sold online",
        title: "Use “Buy” only when the customer can understand the final price.",
        note: "This slide protects the UX and the business. Ready-made pieces with fixed dimensions can be purchased. Anything dependent on measurement, installation, material or site conditions should use a quotation flow. Made-to-order can sit in the middle if its options and lead time are controlled.",
        body: (
          <div className="commerce-matrix">
            <section>
              <p className="matrix-tag buy">Direct purchase</p>
              <h2>Fixed enough to decide</h2>
              <ul><li>Side & bedside tables</li><li>Consoles and coffee tables</li><li>Mirrors and small shelves</li><li>Standard-size accessories</li></ul>
              <p className="matrix-cta">CTA: Add to basket / Buy now</p>
            </section>
            <section>
              <p className="matrix-tag order">Made to order</p>
              <h2>Controlled choices</h2>
              <ul><li>2–3 finish options</li><li>Limited standard sizes</li><li>Clear lead time</li><li>Deposit or order request</li></ul>
              <p className="matrix-cta">CTA: Choose options / Order</p>
            </section>
            <section>
              <p className="matrix-tag quote">Request a quote</p>
              <h2>Site-dependent work</h2>
              <ul><li>Kitchens & dressing rooms</li><li>Built-ins and cladding</li><li>Full room execution</li><li>Installation-heavy pieces</li></ul>
              <p className="matrix-cta">CTA: Start your project</p>
            </section>
          </div>
        ),
      },
      {
        kicker: "Homepage storyboard",
        title: "The first page should feel edited—not empty and not endless.",
        note: "Describe the homepage as a sequence of confidence. First: promise and split CTA. Then: show the two business sides. Then: let the work speak. Then: prove how the company works and where it exists. End by repeating the two decisions.",
        body: (
          <div className="storyboard">
            <div className="story-frame large"><span>01 · Hero</span><b>Spaces made personal.<br />Pieces made to last.</b><small>Start a project · Shop furniture</small></div>
            <div className="story-frame image-story"><img src="/assets/171467_688502.jpeg" alt="Finished Section Furniture wall project" /><span>02 · Selected project</span></div>
            <div className="story-frame"><span>03 · Shop edit</span><b>Four signature pieces</b><small>Price · material · lead time</small></div>
            <div className="story-frame"><span>04 · Services</span><b>Design / Woodwork / Execution</b><small>Simple, scannable scope</small></div>
            <div className="story-frame image-story"><img src="/assets/412078_605141.jpeg" alt="Section Furniture custom door" /><span>05 · Craft proof</span></div>
            <div className="story-frame"><span>06 · Process + trust</span><b>Consult → design → make → install</b><small>Factory · showroom · partners · reviews</small></div>
            <div className="story-frame wide"><span>07 · Final choice</span><b>Planning a room—or looking for one distinctive piece?</b><small>Book a consultation · Explore the shop</small></div>
          </div>
        ),
      },
      {
        kicker: "Art direction",
        title: "Warm restraint: the wood is the color, the photography is the decoration.",
        note: "Introduce the palette as a recommendation, not a final identity lock. It is warmer and calmer than the current yellow/olive system, and it creates room for the projects to be the visual hero. The rust accent gives us one confident conversion color.",
        tone: "sage",
        body: (
          <div className="palette-layout">
            <div className="palette-copy"><p className="big-quote">Quiet rooms.<br />Tactile materials.<br />Confident details.</p><p>Editorial like Soho Home, but grounded in Section’s own craft, Cairo projects and workshop reality.</p></div>
            <div className="swatches">
              <div style={{ background: "#1c1b18", color: "#f3eee6" }}><b>Ink</b><span>#1C1B18</span></div>
              <div style={{ background: "#f3eee6", color: "#1c1b18" }}><b>Chalk</b><span>#F3EEE6</span></div>
              <div style={{ background: "#6b4b37", color: "#fff" }}><b>Walnut</b><span>#6B4B37</span></div>
              <div style={{ background: "#b45d3c", color: "#fff" }}><b>Oxide</b><span>#B45D3C</span></div>
              <div style={{ background: "#74755d", color: "#fff" }}><b>Sage</b><span>#74755D</span></div>
              <div style={{ background: "#c7a46a", color: "#1c1b18" }}><b>Brass</b><span>#C7A46A</span></div>
            </div>
          </div>
        ),
      },
      {
        kicker: "The visual language",
        title: "Luxury comes from editing: scale, rhythm, crop and material detail.",
        note: "Ask for a small professional shoot rather than trying to fix every old image. We need 1 hero room, 4–6 finished projects, a workshop/craft set, and clean product photos. The typography should pair an expressive editorial serif with a disciplined sans serif.",
        body: (
          <div className="visual-language">
            <div className="type-specimen"><p className="serif-display">Made with<br /><em>intention.</em></p><p className="sans-specimen">SECTION FURNITURE / NEW CAIRO<br />Editorial serif + precise sans</p></div>
            <div className="photo-grid">
              <figure className="photo-a"><img src="/assets/141202_527604.jpeg" alt="Living room detail" /><figcaption>01 · Lived-in hero</figcaption></figure>
              <figure className="photo-b"><img src="/assets/217375_739589.jpeg" alt="Built-in storage" /><figcaption>02 · Joinery precision</figcaption></figure>
              <figure className="photo-c"><img src="/assets/805180_442982.jpeg" alt="Craft work in progress" /><figcaption>03 · Process evidence</figcaption></figure>
            </div>
          </div>
        ),
      },
      {
        kicker: "The shop experience",
        title: "The product page must answer the questions that stop a furniture purchase.",
        note: "Do not show a mock checkout as the main selling point. Focus on decision confidence: dimensions, materials, finish, delivery, lead time and returns. Lifestyle and isolated product images should work together. If price varies, say ‘from’ and explain why.",
        body: (
          <div className="product-concept">
            <div className="product-visual"><div className="product-stage"><div className="table-top" /><div className="table-leg one" /><div className="table-leg two" /></div><span>Signature side table · concept</span></div>
            <div className="product-info">
              <p className="eyebrow">The Section Edit / 01</p><h2>Arc Side Table</h2><p className="price">EGP 8,900</p><p>Solid oak veneer, warm walnut finish. Made in our Cairo workshop.</p>
              <div className="product-facts"><span><b>45 × 45 × 52 cm</b>Dimensions</span><span><b>3–4 weeks</b>Lead time</span><span><b>2 finishes</b>Options</span><span><b>Cairo delivery</b>Calculated</span></div>
              <button type="button">Add to basket</button><small>Need a custom size? <u>Request a variation</u></small>
            </div>
          </div>
        ),
      },
      {
        kicker: "The project lead experience",
        title: "A better inquiry form feels like the first design conversation.",
        note: "The goal is not maximum form completion at any cost. It is a qualified, welcoming lead. Keep the first step light, then collect project type, location, timing, budget band and inspiration. Offer showroom or virtual consultation. Confirm what happens next.",
        tone: "ink",
        body: (
          <div className="consultation-concept">
            <div className="consult-copy"><span>01 / 04</span><h2>What would you like to create?</h2><p>A few thoughtful questions help us match you with the right designer and prepare for the first conversation.</p><small>Typical completion time · 2 minutes</small></div>
            <div className="choice-grid"><button>Complete interior</button><button>Kitchen or dressing</button><button>Custom woodwork</button><button>One bespoke piece</button><button>Commercial space</button><button>I’m not sure yet</button></div>
          </div>
        ),
      },
      {
        kicker: "Phased scope",
        title: "Launch the smallest version that feels complete—not the largest version we can imagine.",
        note: "Frame this as a sensible commercial sequence. Phase one creates credibility and qualified leads. Phase two proves commerce with a curated collection. Phase three adds richer content and operational integrations after real use tells us what matters.",
        body: (
          <div className="phases">
            <section><span>Phase 01</span><h2>Brand + leads</h2><p>Home, services, selected projects, process, about, consultation and contact.</p><b>Foundation</b></section>
            <section className="active"><span>Phase 02</span><h2>Curated shop</h2><p>6–12 pieces, product detail, cart or order request, delivery rules and payment.</p><b>Revenue test</b></section>
            <section><span>Phase 03</span><h2>Scale + content</h2><p>More collections, buying guides, project stories, trade leads and automation.</p><b>Growth</b></section>
          </div>
        ),
      },
      {
        kicker: "Recommended direction",
        title: "Make Section feel like a destination—not a gallery folder.",
        note: "Summarize the recommendation in one sentence. Ask for agreement on the two-door model, the warm editorial art direction and the phased launch—then move into the practical owner questions on the final slide.",
        tone: "ink",
        body: (
          <div className="closing-layout">
            <figure><img src="/assets/474743_155959.jpg" alt="Section Furniture bedroom project" /></figure>
            <div><p className="closing-statement">A digital showroom where people can trust the craft, imagine the space and choose the right next step.</p><div className="closing-actions"><span>01 · Approve direction</span><span>02 · Select launch products</span><span>03 · Gather content</span><span>04 · Prototype homepage</span></div><p className="thank-you">Section Furniture · made with intention</p></div>
          </div>
        ),
      },
      {
        kicker: "Owner discussion · before we start",
        title: "Seven practical decisions for a focused launch.",
        note: "Use this as the final discussion checklist. Record a clear answer, owner and deadline for each item. The most important outcomes are the business priority, launch product list, transaction method and content owner.",
        body: (
          <div className="decision-list">
            <div><span>01</span><p>In the first six months, should the website prioritize <b>qualified project inquiries, showroom visits or product sales</b>?</p></div>
            <div><span>02</span><p>Which <b>services and project types</b> are most profitable—and which ones do you want more of?</p></div>
            <div><span>03</span><p>Which <b>6–12 products are genuinely launch-ready</b> with final dimensions, materials, prices and production times?</p></div>
            <div><span>04</span><p>Should product customers <b>pay in full, pay a deposit or submit an order for confirmation</b>?</p></div>
            <div><span>05</span><p>Where can you deliver and install, what does it cost, and what lead time can you promise?</p></div>
            <div><span>06</span><p>Who will answer website inquiries and update products—and what response time can the team maintain?</p></div>
            <div><span>07</span><p>Which project photos, product photos, testimonials and specifications can be supplied <b>within the next two weeks</b>?</p></div>
          </div>
        ),
      },
    ],
    []
  );

  const move = useCallback((delta: number) => {
    setIndex((current) => Math.max(0, Math.min(slides.length - 1, current + delta)));
  }, [slides.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") move(1);
      if (event.key === "ArrowLeft" || event.key === "PageUp") move(-1);
      if (event.key.toLowerCase() === "n") setNotesOpen((value) => !value);
      if (event.key.toLowerCase() === "o" || event.key === "Escape") setOverviewOpen((value) => event.key === "Escape" ? false : !value);
      if (event.key === "Home") setIndex(0);
      if (event.key === "End") setIndex(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, slides.length]);

  const enterFullscreen = async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  };

  return (
    <main
      className="deck-shell"
      onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <aside className="brand-rail">
        <div className="section-mark">S<span>—</span></div>
        <div className="rail-word">SECTION FURNITURE</div>
        <div className="rail-count"><b>{String(index + 1).padStart(2, "0")}</b><span>/ {String(slides.length).padStart(2, "0")}</span></div>
      </aside>

      <div className="deck-stage">
        <SlideContent slide={slides[index]} />
        <div className="progress"><i style={{ width: `${((index + 1) / slides.length) * 100}%` }} /></div>
      </div>

      <nav className="deck-controls" aria-label="Presentation controls">
        <button type="button" onClick={() => move(-1)} disabled={index === 0} aria-label="Previous slide"><Arrow direction="left" /></button>
        <button type="button" onClick={() => setOverviewOpen(true)} aria-label="Open slide overview">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</button>
        <button type="button" onClick={() => move(1)} disabled={index === slides.length - 1} aria-label="Next slide"><Arrow /></button>
      </nav>

      <div className="utility-controls">
        <button type="button" onClick={() => setNotesOpen((value) => !value)}>Notes</button>
        <button type="button" onClick={() => setOverviewOpen(true)}>Overview</button>
        <button type="button" onClick={() => window.print()}>Print</button>
        <button type="button" onClick={enterFullscreen}>Present</button>
      </div>

      <aside className={`speaker-notes ${notesOpen ? "open" : ""}`} aria-hidden={!notesOpen}>
        <button type="button" onClick={() => setNotesOpen(false)} aria-label="Close notes">×</button>
        <p className="eyebrow">Speaker note · {String(index + 1).padStart(2, "0")}</p>
        <h2>{slides[index].title}</h2>
        <p>{slides[index].note}</p>
        <small>Shortcut: N · Navigate: ← → · Overview: O</small>
      </aside>

      {overviewOpen && (
        <div className="overview" role="dialog" aria-modal="true" aria-label="Slide overview">
          <div className="overview-top"><div><p className="kicker">Presentation map</p><h2>Choose a slide</h2></div><button type="button" onClick={() => setOverviewOpen(false)}>Close ×</button></div>
          <div className="overview-grid">
            {slides.map((slide, slideIndex) => (
              <button key={slide.title} type="button" className={slideIndex === index ? "current" : ""} onClick={() => { setIndex(slideIndex); setOverviewOpen(false); }}>
                <span>{String(slideIndex + 1).padStart(2, "0")}</span><b>{slide.kicker}</b><p>{slide.title}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="print-deck" aria-hidden="true">
        {slides.map((slide) => <SlideContent key={`print-${slide.title}`} slide={slide} />)}
      </div>
    </main>
  );
}
