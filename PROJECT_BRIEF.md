# SECTION — B2B digital showroom brief

## Product position

SECTION is a Cairo-based design coordination, custom wood manufacturing and site-delivery partner. The website is built primarily for property developers, architects, interior studios, procurement teams, hospitality operators and commercial clients.

Primary promise:

> **Made with wood. Built for ambitious spaces.**

The website has one conversion path: **Discuss a Project**. There is no e-commerce, product pricing, catalogue checkout, cart, inventory or consumer-shop journey in this release.

## Audience and information architecture

Primary audiences:

- Property developers and project owners
- Architects and interior design studios
- Procurement and project-management teams
- Hospitality, workplace and retail operators

Project sectors:

- Residential developments
- Hospitality
- Workplace
- Retail and public spaces

Website collections follow the client’s Drive library, with names refined for visitors:

- Kitchens
- Dressing Rooms
- Living Spaces (`Living rooms` in Drive)
- Custom Units (`Units` in Drive)
- Bedrooms
- Wall Cladding
- Architectural Doors (`Doors` in Drive)

The administrative, brand, About and People/Clients folders do not appear in the work index. They feed identity, company-story and enterprise-proof sections instead. Interior fit-out, joinery, manufacturing and installation remain important delivery capabilities, but they are described inside projects, collection pages and the inquiry rather than used as the homepage browsing taxonomy.

Public routes:

- `/en` and `/ar`
- `/[locale]/projects`
- `/[locale]/projects/[slug]`
- `/[locale]/collections/[slug]`
- `/[locale]/inquiry`

## Homepage story

1. Full-bleed brand and project hero
2. Contract-capability statement
3. Flagship editorial project study
4. Typography-led collection index based on the Drive taxonomy
5. Four-stage scroll-driven process
6. Manufacturing feature
7. Project index filtered by sector
8. Materials and quality principles
9. Qualified project inquiry CTA

Process stages:

1. Concept and briefing
2. Design and sketching
3. Manufacturing
4. Installation

## Brand system

The supplied `Section_BrandWorld_160925.pdf` is the visual source of truth.

- Black — `#000000`
- White — `#FFFFFF`
- Signal Yellow — `#FEDD10`
- Pastel Olive — `#FBF5DE`
- Grey Olive — `#A49E7B`
- Dark Olive — `#58533A`

Black and white carry the main structure, olive tones create material warmth, and yellow is reserved for action, numbering and high-value transitions.

The trial fonts embedded in the PDF must not be shipped without valid web licences. The English implementation uses open-licensed Saira Condensed for architectural display type, Saira for interface and utility copy, and Newsreader for editorial contrast. Headlines deliberately mix Saira Condensed with a small number of Newsreader italic words, occasionally revealed with a signal-yellow marker treatment. This expressive contrast is reserved for high-value phrases rather than applied to every word. IBM Plex Sans Arabic remains the Arabic display and reading face, with weight and colour providing the same emphasis without forcing Latin letterforms into RTL content. Licensed brand fonts can replace these through CSS tokens without redesigning layouts.

The client preview exposes four complete design systems through `?design=`. They share content, routes, SEO, inquiry behavior and media governance:

1. **Editorial** — expressive typography, documentary images and a disciplined print-like grid.
2. **Immersive** — a material orbit with layered motion and sculptural image presentation.
3. **Assemblage** — a light technical environment where drawings, planes and timber-like components assemble into place.
4. **Nocturne** — a dark cinematic showroom where photography moves through depth and objects emerge through controlled light.

`ENABLED_DESIGNS` and `DEFAULT_DESIGN` are the single source of truth. The design query persists across internal and language-switch links but is excluded from canonicals, `hreflang`, structured data and the sitemap. Once the client selects a direction, the other systems can be removed without changing content records or routes.

Motion is editorial-cinematic and progressively enhanced. Assemblage and Nocturne dynamically import Three.js only when selected. Their lifecycle controller caps DPR, pauses the canvas offscreen, handles context loss, disposes GPU resources and falls back to the static LCP poster for reduced motion or data-saving connections. DOM motion uses Motion and CSS. No system captures the mouse wheel or hides essential content behind effects.

## Content and media governance

The initial Drive audit found 62 images across People/Clients, Units, Wall Cladding and Doors, with AI-labelled imagery mixed into Units and Wall Cladding. The newer Kitchens, Dressing and partner folders have now been selectively ingested for the preview.

Current local preview ingestion:

- Five kitchen stories based on Kitchen 1–5, including the working names Obour and Sahar.
- Two dressing-room stories derived from the supplied dressing folder.
- Nine partner/collaborator marks: Karim Magdy, Taj Design House, MYS, Nawara / Alaa Ezzat, Mai Saad Designs, Ahmad Elsherif Designs, RA Interior Design, Evento Designs and Amaken Contracting.
- HEIC/HEIF, JPEG and PNG source copies are converted into optimized WebP derivatives. The originals remain in Drive and are not shipped in the production public directory.
- Drive IDs remain in the typed manifest for deduplication and later remapping.

Every media record tracks:

- Source folder and filename
- Project and client relationship
- Sector and capabilities
- Project stage
- Authenticity: verified real, AI concept or unknown
- Rights: approved, pending or restricted
- Orientation and quality
- Intended website usage

Rules:

- AI concepts never appear as project proof.
- Unknown images remain editorial placeholders until verified.
- Client names, logos, testimonials, figures and outcomes require explicit approval.
- SODIC and ORA names are approved for this client preview. Their logos, metrics, outcomes and unsupported scope details remain excluded.
- SODIC may use only the supplied factual scope: interior work, custom woodwork and furniture. ORA remains labelled as a selected collaboration until its exact scope is supplied.
- Partner marks remain globally presented and are not assigned to SODIC, ORA or another project until the relationship is verified.
- “People we worked with” must be separated into client logos, team photography and project photography.

Before public launch, verify:

- Legal business and brand name
- Founding year
- Factory address; the old site and brand PDF conflict
- Showroom address
- Phone and business email
- Client attribution and photography rights
- Project locations, years, scope and collaborators

## Case-study content model

Each flagship project needs:

- Approved client name or confidential label
- Sector, location and year
- Project scope and SECTION responsibilities
- Quantities, unit count or area when verified
- Materials and finish system
- Timeline and collaborators
- Outcome or testimonial
- Approved gallery and image captions

The current build intentionally labels all available projects as editorial studies with verification pending.

## Inquiry experience

The inquiry flow contains five low-friction steps:

1. Select one or more project elements from the Drive-based collections, including “I’m not sure yet”
2. Select how SECTION may help: design and develop, manufacture, install or full package
3. Select the rough project stage, including “I’m not sure yet”
4. Add an optional free-form note and optional reference files
5. Enter only a name, phone number and consent

No dropdowns are exposed. The choices qualify the lead without asking for location, sector, budget or email before the first conversation. The backend stores neutral defaults for those legacy database fields so the lead record remains compatible. Uploads accept up to three PDF/JPEG/PNG/WebP files at 10 MB each.

## Technical implementation

### July 2026 source-content integration

- The supplied `Section_BrandWorld_160925.pdf` is the canonical visual source for the SECTION wordmark and palette. The website uses transparent black and white derivatives of the actual wordmark shape rather than a font-built approximation.
- The footer contact information currently follows the brand document: showroom at Silver Star Downtown Mall, New Cairo; factory at Trolly Street, El-Marg, Cairo; phone `01272333832`. These details remain subject to final owner verification before the production launch.
- The About narrative is derived from `mission vision story.docx` and edited for a concise B2B voice: SECTION guides a brief from first conversation to final installation, balancing beauty, function and durability; the brand aims to be a trusted design-and-manufacturing partner for purposeful spaces.
- Seven real material-selection photographs from the `Materials used` Drive folder are ingested into the tracked media manifest. Assemblage and Nocturne use them in the manufacturing story and the manufacturing stage, with rights status kept as `pending` for preview.
- Assemblage now presents the four-stage process as technical assembly sheets with measured lines and native horizontal scroll-snap. Nocturne presents the same stages as illuminated exhibition rooms. Both use touch, keyboard, on-page arrows, a visible active-stage index, reduced-motion fallbacks and an end spacer that exposes the final installation stage completely.
- The nine partner marks use transparent derived PNGs produced from the supplied pixels. Only the captured presentation backgrounds are removed; logo color, proportion and drawing remain unchanged. Every mark is placed with `object-fit: contain` inside a contrast-appropriate matte so no artwork is cropped.

- Next.js App Router on the existing vinext/Cloudflare deployment
- Static typed project and capability content; no CMS in release one
- English and Arabic locale routes with RTL-aware layouts and alternate-language metadata
- Motion for React and CSS for DOM transitions
- Three.js client islands for Assemblage and Nocturne, dynamically imported only for the selected direction
- Shared adaptive WebGL lifecycle: capped DPR, offscreen pause, context-loss recovery, disposal, data-saver and reduced-motion fallbacks
- Native horizontal scroll-snap for project and piece galleries; no wheel capture or smooth-scroll library
- Local developer-only media importer using `heic-convert`, `sharp` and `ffmpeg-static`
- Cloudflare D1 for inquiry records
- Private Cloudflare R2 bucket for attachments
- `POST /api/inquiries` for multipart submission
- Expiring HMAC-signed attachment links
- Resend-compatible transactional email notification
- Honeypot, rate limiting, server validation, MIME limits and consent recording
- Public pages remain anonymous; ChatGPT sign-in is not used

## Search and discovery system

The production site is a server-rendered Next.js App Router application with an SEO layer designed for English and Arabic discovery. SEO must support qualified B2B relevance rather than traffic from consumer shopping terms.

- The server-rendered root document carries the correct `lang` and `dir` attributes before JavaScript runs.
- Every indexable page has a unique localized title, description, canonical URL and reciprocal English/Arabic/`x-default` `hreflang` links.
- Open Graph and Twitter metadata use the SECTION social preview and localized page copy.
- Organization and WebSite structured data appear site-wide. Project pages add CreativeWork and BreadcrumbList data; collection pages add Service and BreadcrumbList data; the inquiry page uses ContactPage data.
- The XML sitemap includes every localized homepage, project index, project story, collection and inquiry route with reciprocal language alternates.
- `robots.txt` exposes the sitemap and prevents crawling of APIs and internal runtime paths.
- Search targets focus on project intent: custom woodwork, joinery, interior fit-out, furniture manufacturing, architectural doors, wall cladding, hospitality furniture and residential-development interiors in Egypt.
- Pending client names, unsupported metrics and unapproved photographs are never introduced into metadata or structured data.
- Search Console verification is injected only when a verified token is configured.
- SEO performance depends on stable image dimensions, an optimized hero, semantic headings, crawlable links and a representative mobile LCP below 2.5 seconds.

Required deployment configuration:

- D1 binding: `DB`
- R2 binding: `UPLOADS`
- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `INQUIRY_FROM_EMAIL`
- `INQUIRY_FILE_SECRET`
- `NEXT_PUBLIC_SITE_URL` set to the final canonical production origin
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` after Search Console ownership is verified
- Apply the generated Drizzle migration before accepting inquiries

## Acceptance criteria

- English and Arabic routes render and switch correctly
- RTL layout has no accidental horizontal overflow
- Project and capability detail routes statically generate
- Inquiry validation and all conditional questions work
- Files outside the allowed type/count/size are rejected
- Inquiry is persisted before notification is attempted
- Notification failure never discards a saved inquiry
- Reduced-motion and keyboard-navigation paths remain complete
- Images use stable responsive containers and lazy loading below the first viewport
- No commerce or developer-tooling language appears in client-facing UI
- Arabic responses contain server-rendered `lang="ar"` and `dir="rtl"`
- Canonicals, `hreflang`, sitemap, robots, social metadata and JSON-LD validate on the production origin
- No unverified client name, statistic or image enters search metadata
- All four designs render the same server-side headings, links and inquiry actions without JavaScript
- `?design=` persists across navigation while canonical and sitemap URLs remain design-independent
- SODIC and ORA are visible without unsupported metrics, logos or collaborator claims
- All nine partner marks appear without recolouring, cropping, distortion or blend-mode treatment
- The project rail supports touch, pointer drag, keyboard arrows, RTL and a fully reachable final card
- Collection pages render inquiry-only named pieces with stable anchors and no `Product` or `Offer` schema

## Internal design and build references

Keep this section internal; do not include Codex, skills or implementation tooling in client-facing presentations.

- Current site: https://chestnut-rabbit-rcj1hm.mystrikingly.com/
- SODIC profile: https://www.sodic.com/about-us
- Poliform Contract: https://www.poliform.it/en-us/contract/elenco-progetti?country=Italy
- LEMA Contract: https://www.lemamobili.com/en/lema-contract/
- Carl Hansen craftsmanship: https://www.carlhansen.com/ja-jp/jajp/inspiration/craftsmanship
- MillerKnoll case studies: https://www.millerknoll.com/en-afr/ideas-in-action
- SiteInspire architecture collection: https://www.siteinspire.com/websites/category/architecture
- Official OpenAI frontend skill: https://github.com/openai/skills/blob/main/skills/.curated/frontend-skill/SKILL.md
