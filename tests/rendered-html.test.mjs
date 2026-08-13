import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("ships the bilingual B2B route and content model", async () => {
  const [root, localeLayout, home, showroomHome, content, manufacturing] = await Promise.all([
    read("app/(root)/page.tsx"),
    read("app/[locale]/layout.tsx"),
    read("app/[locale]/page.tsx"),
    read("components/ShowroomHome.tsx"),
    read("lib/site-content.ts"),
    read("components/ManufacturingLine.tsx"),
  ]);

  assert.match(root, /redirect\("\/en"\)/);
  assert.match(localeLayout, /lang=\{locale\}/);
  assert.match(localeLayout, /dir=\{locale === "ar" \? "rtl" : "ltr"\}/);
  assert.match(home, /mode="nocturne"/);
  assert.match(showroomHome, /nocturne-final-cta/);
  assert.match(showroomHome, /<ManufacturingLine locale=\{locale\} \/>/);
  assert.match(await read("app/layout.tsx"), /section-favicon\.png/);
  assert.match(await read("public/favicon.svg"), /data:image\/png;base64,/);
  assert.match(content, /Made with wood\.\\nBuilt for ambitious spaces\./);
  assert.match(content, /مصنوع من الخشب/);
  assert.match(content, /export const capabilities: Capability\[\]/);
  assert.match(content, /title: \{ en: "Kitchens"/);
  assert.match(content, /title: \{ en: "Dressing Rooms"/);
  assert.match(content, /title: \{ en: "Living Spaces"/);
  assert.match(content, /title: \{ en: "Custom Units"/);
  assert.match(content, /title: \{ en: "Bedrooms"/);
  assert.match(content, /title: \{ en: "Wall cladding"/i);
  assert.match(content, /title: \{ en: "Doors"/);
  assert.doesNotMatch(content, /Materials & Finishes|الخامات والتشطيبات|materials-finishes/);
  assert.match(content, /slug: "wall-cladding", number: "01"/);
  assert.match(content, /slug: "kitchens", number: "02"/);
  assert.match(content, /slug: "dressing-rooms", number: "03"/);
  assert.match(content, /slug: "doors", number: "04"/);
  assert.match(content, /slug: "custom-units", number: "05"/);
  assert.match(content, /slug: "bedrooms", number: "06"/);
  assert.match(content, /slug: "living-rooms", number: "07"/);
  assert.match(content, /const capabilityOrder: CapabilitySlug\[\] = \["wall-cladding", "kitchens", "dressing-rooms", "doors", "custom-units", "bedrooms", "living-rooms"\]/);
  assert.doesNotMatch(content, /slug: "interior-fit-out"/);
  assert.doesNotMatch(content, /slug: "joinery-fitted-units"/);
  assert.match(content, /export const processSteps/);
  assert.match(content, /export const manufacturingSteps/);
  assert.match(content, /title: \{ en: "Select", ar: "الاختيار" \}/);
  assert.match(content, /image: "\/drive\/materials\/material-03\.webp"/);
  assert.match(manufacturing, /IntersectionObserver/);
  assert.match(content, /Concept & briefing/);
  assert.match(content, /Design & sketching/);
  assert.match(content, /title: \{ en: "Manufacturing"/);
  assert.match(content, /title: \{ en: "Installation"/);
  assert.doesNotMatch(content, /seven accountable stages/);
  assert.match(content, /rights: "pending"/);
  assert.match(content, /authenticity: "unknown"/);
});

test("implements the complete multilingual SEO discovery layer", async () => {
  const [seo, localeLayout, sitemap, robots, manifest, projectPage, capabilityPage, inquiryPage, renderedCladding, renderedKitchens] = await Promise.all([
    read("lib/seo.ts"),
    read("app/[locale]/layout.tsx"),
    read("app/sitemap.ts"),
    read("app/robots.ts"),
    read("app/manifest.ts"),
    read("app/[locale]/projects/[slug]/page.tsx"),
    read("app/[locale]/collections/[slug]/page.tsx"),
    read("app/[locale]/inquiry/page.tsx"),
    read(".next/server/app/en/collections/wall-cladding.html"),
    read(".next/server/app/en/collections/kitchens.html"),
  ]);

  assert.match(localeLayout, /className="locale-shell" lang=\{locale\} dir=/);
  assert.match(localeLayout, /localeMetadata\(locale\)/);
  assert.match(seo, /"x-default"/);
  assert.match(seo, /canonical:/);
  assert.match(seo, /max-image-preview/);
  assert.match(seo, /NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION/);
  assert.match(seo, /Organization/);
  assert.match(seo, /WebSite/);
  assert.match(seo, /BreadcrumbList/);
  assert.match(seo, /"@type": "Service"/);
  assert.match(sitemap, /projects\.map/);
  assert.match(sitemap, /capabilities\.map/);
  assert.match(sitemap, /alternates/);
  assert.match(robots, /disallow: "\/api\/"/);
  assert.match(robots, /sitemap:/);
  assert.match(manifest, /theme_color: "#FEDD10"/);
  assert.match(projectPage, /projectSchema/);
  assert.match(capabilityPage, /serviceSchema/);
  assert.match(capabilityPage, /\/drive\/cladding\/water-based-substrate\.webp/);
  assert.doesNotMatch(renderedCladding, /\/assets\/217375_739589\.jpeg/);
  assert.match(renderedCladding, /\/drive\/cladding\/cnc\/cladding-cnc-10\.webp/);
  assert.doesNotMatch(renderedCladding, /\/drive\/cladding\/veneer-painting\/cladding-veneer-painting-02\.webp/);
  assert.doesNotMatch(renderedKitchens, /A six-image fitted-kitchen sequence from Azad Compound/);
  assert.match(inquiryPage, /ContactPage/);
});

test("keeps visitor-facing source free of commerce and developer-tool language", async () => {
  const visitorFiles = [
    "app/[locale]/page.tsx",
    "app/[locale]/projects/page.tsx",
    "app/[locale]/projects/[slug]/page.tsx",
    "app/[locale]/collections/[slug]/page.tsx",
    "app/[locale]/inquiry/page.tsx",
    "components/SiteHeader.tsx",
    "components/SiteFooter.tsx",
    "components/InquiryForm.tsx",
  ];
  const source = (await Promise.all(visitorFiles.map(read))).join("\n");

  assert.doesNotMatch(source, /\b(add to cart|checkout|buy now|shopping cart|codex|developer kit)\b/i);
  assert.match(source, /inquiry|Discuss|ناقش/);
  assert.match(source, /mobileMenuRef/);
  assert.match(source, /removeAttribute\("open"\)/);
});

test("implements the four-step validated inquiry pipeline", async () => {
  const [route, schema, hosting, form] = await Promise.all([
    read("app/api/inquiries/route.ts"),
    read("db/schema.ts"),
    read(".openai/hosting.json"),
    read("components/InquiryForm.tsx"),
  ]);

  assert.match(route, /getDb\(\)/);
  assert.match(route, /\.insert\(schema\.leads\)/);
  assert.match(route, /\["has-brief", "needs-ideas"\]/);
  assert.match(route, /installationIncluded: true/);
  assert.doesNotMatch(route, /value\(data, "installationIncluded"\)/);
  assert.match(route, /status: "received"/);
  assert.match(schema, /projectReadiness\?: "has-brief" \| "needs-ideas"/);
  assert.match(schema, /installationIncluded\?: true/);
  assert.match(schema, /serviceScope\?: string\[\]/);
  assert.match(schema, /projectStage\?: string\[\]/);
  assert.match(form, /\(step \+ 1\) \/ 4/);
  assert.match(form, /briefLabel: "Project brief"/);
  assert.match(form, /optional-badge/);
  assert.match(form, /Skip \/ Next/);
  assert.match(form, /data\.append\("brief", values\.brief\.trim\(\)\)/);
  assert.match(hosting, /"d1": "DB"/);
  assert.match(hosting, /"r2": "UPLOADS"/);
});

test("includes responsive, RTL, and reduced-motion safeguards", async () => {
  const [css, showroomHome, process] = await Promise.all([
    read("app/globals.css"),
    read("components/ShowroomHome.tsx"),
    read("components/ProcessStory.tsx"),
  ]);

  assert.match(css, /\[dir="rtl"\]/);
  assert.match(css, /scroll-snap-type:\s*x mandatory/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /animation-duration:\s*\.01ms/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /--display: "Saira Condensed"/);
  assert.match(css, /--editorial: "Newsreader"/);
  assert.match(css, /@keyframes marker-sweep/);
  assert.match(css, /\.process-track \{ width: 400vw; \}/);
  assert.match(css, /\.process-card \{ width: 100vw; min-width: 100vw; \}/);
  assert.match(showroomHome, /Spaces <em>revealed<\/em> in light\./);
  assert.match(showroomHome, /nocturne-final-cta/);
  assert.match(process, /\["0%", "-75%"\]/);
});

test("keeps inquiry qualification card-based and low-friction", async () => {
  const [form, showroom, route] = await Promise.all([
    read("components/InquiryForm.tsx"),
    read("components/ShowroomHome.tsx"),
    read("app/api/inquiries/route.ts"),
  ]);

  assert.doesNotMatch(form, /<select/);
  assert.match(form, /choice-card/);
  assert.match(form, /not-sure-yet/);
  assert.match(form, /has-brief/);
  assert.match(form, /needs-ideas/);
  assert.match(form, /Name \*/);
  assert.match(form, /Phone number \*/);
  assert.match(showroom, /!dark && <section className="showroom-inquiry"/);
  assert.match(showroom, /nocturne-final-cta/);
  assert.match(route, /Name, phone and consent are required/);
  assert.match(route, /Capabilities and project readiness are required/);
});

test("publishes Nocturne as the only SECTION view", async () => {
  const [designs, home, showroom, webgl, collection, projects, css] = await Promise.all([
    read("lib/designs.ts"),
    read("app/[locale]/page.tsx"),
    read("components/ShowroomHome.tsx"),
    read("components/AdaptiveWebGL.tsx"),
    read("app/[locale]/collections/[slug]/page.tsx"),
    read("components/ProjectStoryRail.tsx"),
    read("app/globals.css"),
  ]);

  assert.match(designs, /ENABLED_DESIGNS: DesignId\[\] = \["nocturne"\]/);
  assert.match(designs, /DEFAULT_DESIGN/);
  assert.match(home, /mode="nocturne"/);
  assert.doesNotMatch(home, /DesignSwitcher|ImmersiveHome|design ===/);
  assert.doesNotMatch(showroom, /<DesignSwitcher/);
  assert.match(showroom, /mode === "nocturne"/);
  assert.match(webgl, /import\("three"\)/);
  assert.match(webgl, /prefers-reduced-motion/);
  assert.match(webgl, /webglcontextlost/);
  assert.match(webgl, /IntersectionObserver/);
  assert.match(collection, /data-design="nocturne"/);
  assert.doesNotMatch(collection, /DesignSwitcher|getDesign/);
  assert.match(collection, /ItemList/);
  assert.match(collection, /collection-piece-list/);
  assert.doesNotMatch(collection, /"@type": "(?:Product|Offer)"/);
  assert.match(projects, /onKeyDown/);
  assert.match(projects, /story-rail-end/);
  assert.match(css, /\.design-assemblage/);
  assert.match(css, /\.design-nocturne/);
});

test("keeps Drive media, SODIC attribution and partner marks governed", async () => {
  const [manifest, showroom, content, home, partners, logoMarquee, attribution, driveAssets, inventory, categoryAssets, doorAssets, livingAssets, unitAssets, unitInventory, css, brandPrep] = await Promise.all([
    read("lib/media-manifest.ts"),
    read("lib/showroom-content.ts"),
    read("lib/site-content.ts"),
    read("components/ShowroomHome.tsx"),
    read("components/PartnerMarquee.tsx"),
    read("components/LogoMarquee.tsx"),
    read("components/ProjectAttribution.tsx"),
    read("lib/drive-assets.ts"),
    read("docs/nocturne-drive-asset-inventory.md"),
    read("lib/generated-category-drive-assets.json"),
    read("lib/generated-doors-drive-assets.json"),
    read("lib/generated-living-drive-assets.json"),
    read("lib/generated-unit-process-assets.json"),
    read("lib/unit-process-source-inventory.json"),
    read("app/globals.css"),
    read("scripts/prepare-brand-assets.mjs"),
  ]);

  assert.match(manifest, /driveFileId/);
  assert.match(manifest, /authenticity/);
  assert.match(manifest, /publishStatus/);
  assert.match(manifest, /image\/heif/);
  assert.match(manifest, /generatedDoorsDriveAssets/);
  assert.match(manifest, /generatedLivingDriveAssets/);
  assert.match(showroom, /Kitchen 01/);
  assert.match(showroom, /Azad Compound/);
  assert.match(showroom, /3D Reference/);
  assert.match(showroom, /Dressing 1 — SODIC Villette/);
  assert.match(showroom, /Dressing 4 — New Cairo/);
  assert.match(showroom, /doors-gallery/);
  assert.match(showroom, /living-space-01/);
  assert.match(showroom, /living-space-03/);
  assert.ok(showroom.indexOf('folderName: "Dressing 1') < showroom.indexOf('folderName: "Dressing 2'));
  assert.ok(showroom.indexOf('folderName: "Dressing 2') < showroom.indexOf('folderName: "Dressing 3'));
  assert.ok(showroom.indexOf('folderName: "Dressing 3') < showroom.indexOf('folderName: "Dressing 4'));
  assert.equal((showroom.match(/kind: "collaborator"/g) ?? []).length, 9);
  assert.match(content, /client: \{ en: "SODIC"/);
  assert.match(content, /collaboratorIds: \["ahmed-elsheref"\]/);
  assert.match(content, /media: sodicLinkedMediaIds/);
  assert.match(content, /slug: "hyde-park"/);
  assert.match(content, /client: \{ en: "HYDE PARK", ar: "هايد بارك" \}, clientVisibility: "approved"/);
  assert.match(content, /media: \["white-island-kitchen-01"/);
  assert.ok(content.indexOf('slug: "sodic-collaboration"') < content.indexOf('slug: "hyde-park"'));
  assert.ok(content.indexOf('slug: "hyde-park"') < content.indexOf('slug: "residential-joinery-study"'));
  assert.doesNotMatch(content, /ORA Collaboration|client: \{ en: "ORA"/);
  assert.doesNotMatch(content, /SODIC.{0,80}(?:units|sqm|m²|million)/i);
  assert.match(partners, /sodic-attribution/);
  assert.match(logoMarquee, /partner-logo/);
  assert.match(attribution, /data-logo-id=\{logo\.id\}/);
  assert.match(css, /\.people-marquee \.partner-logo\.dark[\s\S]*?background: transparent/);
  assert.match(css, /\.project-collaborator-logo\.dark[\s\S]*?background: transparent/);
  assert.match(brandPrep, /removeOutsideCircle/);
  assert.match(driveAssets, /11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS/);
  assert.match(driveAssets, /1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t/);
  assert.match(driveAssets, /1aD2z7kpl5x0XU0x6mLqVbo0U-K1P_ZUY/);
  assert.match(showroom, /1-BcvpWLz8KUwOR7uwWLMf-gBMyBRNbXs/);
  assert.match(inventory, /no logo file was found/i);
  assert.match(showroom, /1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ/);
  assert.match(showroom, /1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP/);
  assert.match(showroom, /1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP/);
  assert.match(showroom, /1p4obdncuGFOY9ZSPxazkCNnwA0wVU4hT/);
  assert.match(showroom, /group: \{ en: "Adults", ar: "للبالغين" \}/);
  assert.match(showroom, /group: \{ en: "Kids", ar: "للأطفال" \}/);
  assert.match(showroom, /kids-bedroom-4/);
  assert.match(showroom, /CNC CLADDING/);
  assert.match(showroom, /MELAMINE CLADDING/);
  assert.match(showroom, /VENEER & PAINTING CLADDING/);
  const categoryAssetRecords = JSON.parse(categoryAssets);
  assert.equal(categoryAssetRecords.length, 114);
  assert.equal(categoryAssetRecords.filter((asset) => asset.id.startsWith("cladding-")).length, 44);
  const bedroomAssetRecords = categoryAssetRecords.filter((asset) => asset.id.startsWith("bedroom-"));
  assert.equal(bedroomAssetRecords.length, 38);
  assert.deepEqual(
    bedroomAssetRecords.reduce((counts, asset) => {
      counts[asset.sourceFolderName] = (counts[asset.sourceFolderName] ?? 0) + 1;
      return counts;
    }, {}),
    { "Bedroom 1": 6, "Bedroom 2": 4, "collection of bedroom items": 3, "Br 1": 8, "BR 2": 5, "Br 3": 5, "Br 4": 7 },
  );
  assert.deepEqual(
    bedroomAssetRecords.filter((asset) => asset.sourceFolderName === "BR 2").map((asset) => asset.sourceName),
    ["1.png", "2.png", "3.png", "4.png", "5.png"],
  );
  const doorAssetRecords = JSON.parse(doorAssets);
  assert.equal(doorAssetRecords.length, 18);
  assert.deepEqual(doorAssetRecords.map((asset) => asset.imageOrder), Array.from({ length: 18 }, (_, index) => index + 1));
  const livingAssetRecords = JSON.parse(livingAssets);
  const livingGalleryRecords = livingAssetRecords.filter((asset) => asset.role === "gallery");
  assert.equal(livingGalleryRecords.length, 10);
  assert.deepEqual(livingGalleryRecords.map((asset) => `${asset.projectOrder}.${asset.imageOrder}`), ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "3.1", "3.2", "3.3", "3.4"]);
  assert.ok(livingAssetRecords.some((asset) => asset.role === "cover" && asset.sourceName.includes("main photo")));
  assert.match(content, /image: "living-cover"/);
  assert.match(showroom, /generatedUnitProcessAssets\.units\.map/);
  const unitAssetRecords = JSON.parse(unitAssets);
  assert.deepEqual(unitAssetRecords.units.map((group) => [group.id, group.files.length]), [["tv-unit", 14], ["bathroom-units", 9], ["custom-units", 14]]);
  assert.deepEqual(unitAssetRecords.units[0].files.map((file) => file.sourceName), ["1", "2", "3", "4", "5", "6", "7", "8.png", "9", "10", "11", "12", "13", "14"]);
  assert.deepEqual(unitAssetRecords.units[2].files.map((file) => file.sourceName), ["1", "2", "4", "4.1", "6.png", "7", "7.png", "8", "9", "10.png", "11", "12", "13", "14"]);
  assert.ok(!unitAssetRecords.units[2].files.some((file) => file.id === "custom-unit-03"));
  assert.ok(unitAssetRecords.units[2].files.some((file) => file.id === "custom-unit-05"));
  const unitSourceRecords = JSON.parse(unitInventory);
  assert.equal(unitSourceRecords.units[0].files[0].driveFileId, "1nn2MA2kZYeE7Or3vtG4maR7lPCj7Hehv");
  assert.equal(unitSourceRecords.units[2].files[0].driveFileId, "14Lu1XQKHhj76PmYLt1j8QYG8KgHkbXwH");
  assert.match(home, /className="showroom-hero-established"/);
  assert.match(home, /Established since 2019|تأسست عام ٢٠١٩/);
  assert.doesNotMatch(home, /showroom-about-established/);
});

test("keeps Nocturne revisions isolated and ordered", async () => {
  const [home, categoryStack, categoryPage, narrative, layout, materials, logoMarquee, footer, contacts, css] = await Promise.all([
    read("components/ShowroomHome.tsx"),
    read("components/NocturneCategoryStack.tsx"),
    read("app/[locale]/collections/[slug]/page.tsx"),
    read("components/BrandNarrative.tsx"),
    read("app/layout.tsx"),
    read("components/MaterialBrandMarquee.tsx"),
    read("components/LogoMarquee.tsx"),
    read("components/SiteFooter.tsx"),
    read("lib/drive-assets.ts"),
    read("app/globals.css"),
  ]);

  assert.match(home, /\{!dark && <DesignAwareLink href=\{`\/\$\{locale\}\/inquiry`\}/);
  assert.match(home, /<ProjectStoryRail locale=\{locale\} \/>/);
  assert.match(home, /<PartnerMarquee locale=\{locale\} \/>/);
  assert.match(home, /<MaterialBrandMarquee locale=\{locale\} \/>/);
  assert.ok(home.indexOf("<ProjectStoryRail") < home.indexOf("<section className=\"showroom-about\""));
  assert.ok(home.indexOf("<section className=\"showroom-about\"") < home.indexOf("<PartnerMarquee"));
  assert.match(categoryStack, /IntersectionObserver/);
  assert.match(categoryStack, /mostVisible/);
  assert.ok(categoryPage.indexOf("collection-piece-list") < categoryPage.indexOf("capability-spec"));
  assert.match(categoryPage, /collection-piece-group/);
  assert.match(categoryPage, /is-highlighted/);
  assert.match(categoryPage, /Bedroom category/);
  assert.match(narrative, /Brand story/);
  assert.doesNotMatch(home, /<BrandNarrative/);
  assert.match(layout, /next\/font\/local/);
  assert.match(layout, /brand-variable\.woff2/);
  assert.match(materials, /direction="reverse"/);
  assert.match(logoMarquee, /marquee-\$\{direction\}/);
  assert.match(logoMarquee, /partner-logo-tooltip/);
  assert.doesNotMatch(home, /Selected work with/);
  assert.doesNotMatch(home, /showroom-hero-proof/);
  assert.match(footer, /SocialIcon kind="whatsapp"/);
  assert.match(contacts, /https:\/\/wa\.me\/201272333832/);
  assert.match(css, /@keyframes partner-run-reverse/);
  assert.match(css, /\.material-brand-marquee \.partner-logo \{/);
  assert.match(css, /\.showroom-hero-established \{/);
  assert.doesNotMatch(css, /\.showroom-about-established/);
  assert.match(css, /\.design-nocturne \.showroom-collection-list \{ display: grid; gap:/);
  assert.match(css, /\.inquiry-page \.form-action-area \{\s+position: fixed;\s+top: 12px;/);
});

test("keeps the numbered selected-project Drive catalog traceable", async () => {
  const [catalog, generated, rail, content, inventory, projectPage] = await Promise.all([
    read("lib/selected-projects.ts"),
    read("lib/generated-selected-project-assets.json"),
    read("components/ProjectStoryRail.tsx"),
    read("lib/site-content.ts"),
    read("docs/nocturne-drive-asset-inventory.md"),
    read("app/[locale]/projects/[slug]/page.tsx"),
  ]);
  const assets = JSON.parse(generated);
  assert.match(catalog, /SELECTED_PROJECTS_ROOT_FOLDER_ID = "1Dh1mQCh7iWs3Txayc20AaFgdPbYvY-Mh"/);
  assert.match(catalog, /slug: "sodic-collaboration"/);
  assert.match(catalog, /slug: "swan-lake"/);
  assert.match(catalog, /slug: "sodic-villette"/);
  assert.match(catalog, /slug: "new-giza".*publishStatus: "pending"/s);
  assert.match(catalog, /slug: "playa"/);
  assert.match(catalog, /slug: "playa".*sourceFolderId: "1El0Bbk_JEOUvyfy6iDgc-7XmMyT5GgUZ"/s);
  assert.match(catalog, /slug: "cfc-office"/);
  assert.match(catalog, /sourceFolderId: "1bX0LcksoN1DGEKnkmpm8NHk0opmyhNlH"/);
  assert.match(catalog, /sourceFolderTitle: "Sodic vilette mai saad new folder"/);
  assert.doesNotMatch(catalog, /11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv/);
  assert.equal(assets.length, 64);
  assert.equal(new Set(assets.map((asset) => asset.id)).size, assets.length);
  for (const [projectSlug, expectedCount] of Object.entries({
    "cfc-office": 9,
    "swan-lake": 16,
    "sodic-villette": 22,
    playa: 17,
  })) {
    assert.equal(assets.filter((asset) => asset.projectSlug === projectSlug).length, expectedCount);
  }
  const sodicAssets = assets.filter((asset) => asset.projectSlug === "sodic-villette");
  assert.ok(sodicAssets.every((asset) => asset.sourceFolderId === "1bX0LcksoN1DGEKnkmpm8NHk0opmyhNlH"));
  assert.deepEqual(sodicAssets.map((asset) => asset.sourceName), [
    "1st.heif",
    "2nd.heif",
    "3rd.heif",
    "4th.heif",
    "5th.heif",
    "6th.heif",
    "7th.heif",
    "8th.heif",
    "9th.heif",
    "10th.JPG",
    "11th.heif",
    "12.heif",
    "13.heif",
    "14.heif",
    "15.heif",
    "16.heif",
    "17.heif",
    "18.heif",
    "19.heif",
    "20.heif",
    "21.heif",
    "22.jpeg",
  ]);
  assert.ok(assets.every((asset) => asset.driveFileId && asset.sourceFolderId && asset.contentHash && asset.derived?.webp && asset.derived?.avif));
  assert.ok(assets.every((asset) => !asset.alt.en.includes(asset.sourceName) && !asset.alt.ar.includes(asset.sourceName)));
  const playaAssets = assets.filter((asset) => asset.projectSlug === "playa");
  assert.deepEqual(playaAssets.map((asset) => asset.driveFileId), [
    "1_7wC12TBZIn3tXBjXdm_nqlb3X3mYwfT",
    "156830ccZ3XA7stNs0_BdVWgyhMqlOabi",
    "1cm8YReir86YVsmD0pj-30iNAKIXGpFbW",
    "1tzXrFucZBs3crezGRP00t4YNd60QhWQu",
    "1Vc3xCOb8BGicFzi1SsrA8TAqVc1crT9P",
    "1bBGwXBoqa4duiZMEIireMD0Cqs5W-4Rx",
    "19v3qnMpLls0XSQsl_Q9gXoHjcKZymvYN",
    "186T3vnICFGEDqZjxd8cEsM7jYQo2nsmE",
    "1v0P8XmLWC3vsNSHUq-O_-G5iNljYB20j",
    "13m4oDVYptnAvlvJi84LEytpnkumSSdvK",
    "1nP5TgzGwFpq2pngyzRaYhyO1U4I9prBg",
    "1P6eZZpaaUBCqSilyOixfhTIMHyLsk1MP",
    "1DY4GCfGaWr5Fg6NlOM3mMk0wSJlPRl3a",
    "1CQXIfYa-nWrUW6kofjf8-barA0DGPXo1",
    "1Ax4tv0m0lEvbtoK3t--IGIJ_n71UsS7h",
    "13Ml7-d08UuuTZi2PJE3z7VOZaHtccpmT",
    "1XJCcDSlB5RysBHAS7ILnLFaRqOyYWpi_",
  ]);
  assert.deepEqual(playaAssets.map((asset) => asset.sourceName), [
    "1st.png",
    "2nd.png",
    "3rd.heif",
    "4th.heif",
    "5th.heif",
    "6th.heif",
    "7th.heif",
    "8th.heif",
    "9th.heif",
    "10.heif",
    "11.heif",
    "12.heif",
    "13.heif",
    "14.heif",
    "15.heif",
    "16.heif",
    "17.heif",
  ]);
  assert.ok(playaAssets.every((asset) => asset.sourceFolderId === "1El0Bbk_JEOUvyfy6iDgc-7XmMyT5GgUZ"));
  const playaCover = playaAssets.find((asset) => asset.area === "cover");
  assert.equal(playaCover?.sourceName, "4th.heif");
  assert.equal(playaCover?.driveFileId, "1tzXrFucZBs3crezGRP00t4YNd60QhWQu");
  assert.match(rail, /selectedProjects\.map/);
  assert.doesNotMatch(rail, /projects\.map/);
  assert.match(content, /export const selectedProjects = selectedProjectSlugs/);
  assert.match(projectPage, /selectedProjects\.some\(\(item\) => item\.slug === slug\)/);
  assert.match(projectPage, /const next = navigationProjects\[\(index \+ 1\) % navigationProjects\.length\]/);
  assert.match(inventory, /Selected projects source of truth/);
  assert.match(inventory, /Sodic vilette mai saad new folder/);
  assert.match(inventory, /New Giza.*Folder is empty/s);
});
