import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("ships the bilingual B2B route and content model", async () => {
  const [root, localeLayout, home, content] = await Promise.all([
    read("app/(root)/page.tsx"),
    read("app/[locale]/layout.tsx"),
    read("app/[locale]/page.tsx"),
    read("lib/site-content.ts"),
  ]);

  assert.match(root, /redirect\("\/en"\)/);
  assert.match(localeLayout, /lang=\{locale\}/);
  assert.match(localeLayout, /dir=\{locale === "ar" \? "rtl" : "ltr"\}/);
  assert.match(home, /t\.hero\.primary/);
  assert.match(content, /Made with wood\.\\nBuilt for ambitious spaces\./);
  assert.match(content, /مصنوع من الخشب/);
  assert.match(content, /export const capabilities: Capability\[\]/);
  assert.match(content, /title: \{ en: "Kitchens"/);
  assert.match(content, /title: \{ en: "Dressing Rooms"/);
  assert.match(content, /title: \{ en: "Living Spaces"/);
  assert.match(content, /title: \{ en: "Custom Units"/);
  assert.match(content, /title: \{ en: "Bedrooms"/);
  assert.match(content, /title: \{ en: "Wall cladding"/i);
  assert.match(content, /title: \{ en: "Architectural Doors"/);
  assert.match(content, /title: \{ en: "Materials & Finishes"/);
  assert.doesNotMatch(content, /slug: "interior-fit-out"/);
  assert.doesNotMatch(content, /slug: "joinery-fitted-units"/);
  assert.match(content, /export const processSteps/);
  assert.match(content, /Concept & briefing/);
  assert.match(content, /Design & sketching/);
  assert.match(content, /title: \{ en: "Manufacturing"/);
  assert.match(content, /title: \{ en: "Installation"/);
  assert.doesNotMatch(content, /seven accountable stages/);
  assert.match(content, /rights: "pending"/);
  assert.match(content, /authenticity: "unknown"/);
});

test("implements the complete multilingual SEO discovery layer", async () => {
  const [seo, localeLayout, sitemap, robots, manifest, projectPage, capabilityPage, inquiryPage] = await Promise.all([
    read("lib/seo.ts"),
    read("app/[locale]/layout.tsx"),
    read("app/sitemap.ts"),
    read("app/robots.ts"),
    read("app/manifest.ts"),
    read("app/[locale]/projects/[slug]/page.tsx"),
    read("app/[locale]/collections/[slug]/page.tsx"),
    read("app/[locale]/inquiry/page.tsx"),
  ]);

  assert.match(localeLayout, /<html lang=\{locale\} dir=/);
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
});

test("implements a durable, validated inquiry pipeline", async () => {
  const [route, schema, hosting, security] = await Promise.all([
    read("app/api/inquiries/route.ts"),
    read("db/schema.ts"),
    read(".openai/hosting.json"),
    read("lib/inquiry-security.ts"),
  ]);

  assert.match(route, /files\.length > 3/);
  assert.match(route, /10 \* 1024 \* 1024/);
  assert.match(route, /allowedTypes/);
  assert.match(route, /getDb\(\)/);
  assert.match(route, /db\.insert\(inquiries\)/);
  assert.match(route, /runtime\.UPLOADS!\.put/);
  assert.match(route, /notification_pending/);
  assert.match(route, /status: "received"/);
  assert.ok(route.indexOf("db.insert(inquiries)") < route.indexOf("notifyTeam("));
  assert.match(schema, /inquiry_attachments/);
  assert.match(hosting, /"d1": "DB"/);
  assert.match(hosting, /"r2": "UPLOADS"/);
  assert.match(security, /HMAC/);
});

test("includes responsive, RTL, and reduced-motion safeguards", async () => {
  const [css, home, process] = await Promise.all([
    read("app/globals.css"),
    read("app/[locale]/page.tsx"),
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
  assert.match(home, /<em>wood\.<\/em>/);
  assert.match(home, /<em>the brief\.<\/em>/);
  assert.match(process, /\["0%", "-75%"\]/);
});

test("keeps inquiry qualification card-based and low-friction", async () => {
  const [form, home, route] = await Promise.all([
    read("components/InquiryForm.tsx"),
    read("app/[locale]/page.tsx"),
    read("app/api/inquiries/route.ts"),
  ]);

  assert.doesNotMatch(form, /<select/);
  assert.match(form, /choice-card/);
  assert.match(form, /not-sure-yet/);
  assert.match(form, /Name \*/);
  assert.match(form, /Phone number \*/);
  assert.match(home, /<InquiryForm locale=\{locale\} \/>/);
  assert.match(route, /Name, phone and consent are required/);
  assert.match(route, /Not specified/);
});
