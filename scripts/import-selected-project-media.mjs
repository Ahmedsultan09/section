import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

/**
 * Rebuild selected-project delivery media from a Drive inventory.
 *
 * The inventory is generated from the canonical Drive folders before this
 * script runs. Every Drive file gets its own manifest record, even when two
 * files have the same filename or content, so the source ID remains auditable
 * and no requested photo is silently filtered out.
 */
const workspace = process.cwd();
const inventoryPath = join(workspace, ".tmp-drive-import", "drive-inventory.json");
const inventories = JSON.parse(await readFile(inventoryPath, "utf8"));
const existingRecords = JSON.parse(await readFile(join(workspace, "lib", "generated-selected-project-assets.json"), "utf8"));
const existingByDriveId = new Map(existingRecords.map((asset) => [asset.driveFileId, asset]));

const projectLabels = {
  "cfc-office": "CFC office",
  "swan-lake": "Swan Lake",
  "sodic-villette": "SODIC Villette",
  playa: "Playa",
};

// Captions are intentionally independent from Drive filenames. The source
// name remains in the manifest for auditability, but visitors should see a
// useful description of the interior rather than an export filename.
const projectCaptionSets = {
  "cfc-office": [
    { en: "A considered CFC office interior where warm timber meets soft light.", ar: "مساحة مكتبية متكاملة في CFC يلتقي فيها الخشب الدافئ مع الضوء الهادئ." },
    { en: "A tailored reception scene shaped by timber, glass and clean lines.", ar: "مشهد استقبال مصمم بعناية من الخشب والزجاج والخطوط النظيفة." },
    { en: "Integrated wall joinery and workstations bring order to the office.", ar: "تجمع وحدات الحائط ومحطات العمل المدمجة بين الوظيفة والنظام." },
    { en: "A close study of crafted surfaces, hardware and architectural light.", ar: "دراسة قريبة للأسطح المصنوعة بعناية والتجهيزات والضوء المعماري." },
    { en: "A finished workplace vignette with measured storage and warm materiality.", ar: "لقطة من مساحة عمل مكتملة بتخزين مدروس وخامات دافئة." },
    { en: "Timber details and layered lighting define this CFC office setting.", ar: "تفاصيل خشبية وإضاءة متعددة الطبقات تميز هذه المساحة المكتبية في CFC." },
  ],
  "swan-lake": [
    { en: "A warm living space framed by timber walls and integrated joinery.", ar: "مساحة معيشة دافئة تحيط بها حوائط خشبية ووحدات مدمجة." },
    { en: "A quiet bedroom composition with crafted timber and softened light.", ar: "تكوين هادئ لغرفة نوم من الخشب المصنوع بعناية وضوء ناعم." },
    { en: "Marble, walnut and built-in storage meet in a refined interior detail.", ar: "يلتقي الرخام والجوز والتخزين المدمج في تفصيلة داخلية راقية." },
    { en: "A dining setting carried by continuous timber lines and considered proportion.", ar: "منطقة طعام تقودها خطوط خشبية متصلة ونسب مدروسة." },
    { en: "Layered joinery and architectural light shape this Swan Lake interior.", ar: "تشكّل النجارة متعددة الطبقات والضوء المعماري هذا الجزء من مشروع Swan Lake." },
    { en: "A crafted residential vignette balancing storage, texture and calm.", ar: "لقطة سكنية مصنوعة بعناية توازن بين التخزين والخامة والهدوء." },
  ],
  "sodic-villette": [
    { en: "Fluted timber walls bring rhythm and warmth to the SODIC Villette home.", ar: "تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette." },
    { en: "A dressing storage detail resolved with precise joinery and quiet texture.", ar: "تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة." },
    { en: "A bedroom interior where timber, proportion and soft light work together.", ar: "مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم." },
    { en: "Continuous wall treatment connects storage, doors and living spaces.", ar: "تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة." },
    { en: "A close view of crafted surfaces and hardware across the Villette package.", ar: "لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette." },
    { en: "Residential joinery shaped around everyday movement and calm rooms.", ar: "نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة." },
  ],
  playa: [
    { en: "A Playa joinery detail with warm timber, clean lines and precise hardware.", ar: "تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة." },
    { en: "A tailored storage composition showing the quiet precision of the Playa package.", ar: "تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة." },
    { en: "A crafted doorway where material, proportion and movement meet.", ar: "مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة." },
    { en: "A stair and joinery study built around clean thresholds and durable detail.", ar: "دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة." },
    { en: "A considered interior view of timber surfaces, storage and soft natural light.", ar: "منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم." },
    { en: "Fine hardware and aligned panels give this Playa interior its quiet character.", ar: "تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ." },
    { en: "A close study of the thresholds, doors and fitted pieces that complete the room.", ar: "دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان." },
    { en: "Warm joinery and measured storage carry one continuous language through the space.", ar: "تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان." },
  ],
};

const captionFor = (projectSlug, order) => {
  const captions = projectCaptionSets[projectSlug] ?? [{
    en: `${projectLabels[projectSlug] ?? projectSlug} interior detail.`,
    ar: `تفصيلة داخلية من مشروع ${projectLabels[projectSlug] ?? projectSlug}.`,
  }];
  return captions[(Math.max(order, 1) - 1) % captions.length];
};

const hasFilenameCaption = (asset, sourceName) => Boolean(
  sourceName && (asset?.alt?.en?.includes(sourceName) || asset?.alt?.ar?.includes(sourceName)),
);

const safeSourceName = (sourceName) => sourceName.replace(/[^\w.-]+/g, "_");
const inputNameFor = (projectSlug, file) => `${projectSlug}--${String(file.order).padStart(3, "0")}--${safeSourceName(file.sourceName)}`;
const idFor = (projectSlug, order) => `${projectSlug}-drive-${String(order).padStart(3, "0")}`;

// Preserve the IDs already used by the first published selection, while
// giving every newly imported Drive file a collision-proof ID.
const legacyIdByDriveId = new Map([
  ["1mCbHAsQx9Ij_npKE69JYXNCKt80p7j4T", "swan-lake-01"],
  ["1vJDzYESn7P4rS7QU8urLydoC7rSjc4ix", "swan-lake-02"],
  ["1N2pphLlYyLglGkvBcQzaKhKl6wvOFys8", "swan-lake-03"],
  ["1NrcWiwS5pGhQYMiQit-cqFTxsDWDL-QB", "swan-lake-04"],
  ["1Ycd4DyHYiruethdrGJ1xY1HhvnDJmb-5", "swan-lake-05"],
  ["1-CR_lCzIWUnnR_uUVLO-Kq5O6fZSx-X-", "swan-lake-06"],
  ["1S4RMfXTbVK_iAXWRSEb-sY_t8IpcfydY", "swan-lake-07"],
  ["1rHJeeeWNXbq-9ldFdyjdw-bWQ_Z0DN09", "swan-lake-08"],
  ["19-Zg-F9LiIU_OGYSCO_4sQzVxLDJj7KX", "villette-01"],
  ["1m4SZkP2KRYSVO4e6Ly2xZb918KVotXUF", "villette-02"],
  ["1ahJxQRZM6nYlmrOJ5hT6ZdAGVYVxWGJL", "villette-03"],
  ["1zNAyw53pQvIU1jxqbnOAhe4JCQRPUdlt", "villette-04"],
  ["1J99sGjk07y4oXtuqTby82_wNsY2NZoU3", "villette-05"],
  ["1jG0MQlpnD5gVbXogi4WLp_5Dho4TKqYu", "villette-06"],
  ["1_7wC12TBZIn3tXBjXdm_nqlb3X3mYwfT", "playa-new-001"],
  ["156830ccZ3XA7stNs0_BdVWgyhMqlOabi", "playa-new-002"],
  ["1cm8YReir86YVsmD0pj-30iNAKIXGpFbW", "playa-new-003"],
  ["1tzXrFucZBs3crezGRP00t4YNd60QhWQu", "playa-new-004"],
  ["1Vc3xCOb8BGicFzi1SsrA8TAqVc1crT9P", "playa-new-005"],
  ["1bBGwXBoqa4duiZMEIireMD0Cqs5W-4Rx", "playa-new-006"],
  ["19v3qnMpLls0XSQsl_Q9gXoHjcKZymvYN", "playa-new-007"],
  ["186T3vnICFGEDqZjxd8cEsM7jYQo2nsmE", "playa-new-008"],
  ["1v0P8XmLWC3vsNSHUq-O_-G5iNljYB20j", "playa-new-009"],
  ["13m4oDVYptnAvlvJi84LEytpnkumSSdvK", "playa-new-010"],
  ["1nP5TgzGwFpq2pngyzRaYhyO1U4I9prBg", "playa-new-011"],
  ["1P6eZZpaaUBCqSilyOixfhTIMHyLsk1MP", "playa-new-012"],
  ["1DY4GCfGaWr5Fg6NlOM3mMk0wSJlPRl3a", "playa-new-013"],
  ["1CQXIfYa-nWrUW6kofjf8-barA0DGPXo1", "playa-new-014"],
  ["1Ax4tv0m0lEvbtoK3t--IGIJ_n71UsS7h", "playa-new-015"],
  ["13Ml7-d08UuuTZi2PJE3z7VOZaHtccpmT", "playa-new-016"],
  ["1XJCcDSlB5RysBHAS7ILnLFaRqOyYWpi_", "playa-new-017"],
  ["1Ttb8b0kNPTcopDfySTAiss7GKEt-4fdW", "cfc-office-01"],
  ["172xbRcLKiigQuyNc7ctm-yx-w7JTrm3L", "cfc-office-02"],
  ["1YgzFugyzqSjC8XKIoWRDIU8OZP7cp9YR", "cfc-office-03"],
]);

const records = [];

for (const project of inventories) {
  const previousCover = existingRecords.some((asset) => asset.projectSlug === project.projectSlug && asset.area === "cover");

  for (const file of project.files) {
    const previous = existingByDriveId.get(file.driveFileId);
    const id = legacyIdByDriveId.get(file.driveFileId) ?? idFor(project.projectSlug, file.order);
    const area = previous?.area ?? (!previousCover && file.order === 1 ? "cover" : "other");
    const inputName = inputNameFor(project.projectSlug, file);
    const sourcePath = join(workspace, ".tmp-drive-import", "input", inputName);
    let bytes;

    try {
      bytes = await readFile(sourcePath);
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
      if (previous) {
        records.push(previous);
        continue;
      }
      throw new Error(`Missing Drive source bytes for ${project.projectSlug}/${file.sourceName}`);
    }

    const contentHash = createHash("sha256").update(bytes).digest("hex");
    const outputDirectory = join(workspace, "public", "drive", "projects", "selected", project.projectSlug);
    await mkdir(outputDirectory, { recursive: true });
    const webpPath = join(outputDirectory, `${id}.webp`);
    const avifPath = join(outputDirectory, `${id}.avif`);
    const hasWebp = await access(webpPath).then(() => true).catch(() => false);
    const hasAvif = await access(avifPath).then(() => true).catch(() => false);
    const image = hasWebp && hasAvif
      ? sharp(webpPath)
      : sharp(/\.heic$/i.test(file.sourceName)
        ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
        : bytes).rotate();
    const metadata = await image.metadata();
    const orientation = metadata.width && metadata.height
      ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
      : "unknown";
    if (!hasWebp || !hasAvif) {
      await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(webpPath);
      await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).avif({ quality: 56 }).toFile(avifPath);
    }

    const alt = previous?.alt && !hasFilenameCaption(previous, file.sourceName)
      ? previous.alt
      : captionFor(project.projectSlug, file.order);
    records.push({
      id,
      projectSlug: project.projectSlug,
      area,
      driveFileId: file.driveFileId,
      sourceFolderId: project.sourceFolderId,
      sourceName: file.sourceName,
      localSrc: `/drive/projects/selected/${project.projectSlug}/${id}.webp`,
      originalMime: file.mimeType,
      contentHash,
      orientation,
      quality: previous?.quality ?? (area === "cover" ? "hero" : "editorial"),
      alt,
      derived: {
        webp: `/drive/projects/selected/${project.projectSlug}/${id}.webp`,
        avif: `/drive/projects/selected/${project.projectSlug}/${id}.avif`,
      },
      authenticity: previous?.authenticity ?? "verified-real",
      rights: previous?.rights ?? "approved",
      publishStatus: previous?.publishStatus ?? "public",
    });
  }
}

await writeFile(join(workspace, "lib", "generated-selected-project-assets.json"), `${JSON.stringify(records, null, 2)}\n`);
console.log(`Imported ${records.length} selected-project photos from ${inventories.length} Drive folders.`);
