import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const workspace = process.cwd();
const sourceFolderId = "1El0Bbk_JEOUvyfy6iDgc-7XmMyT5GgUZ";
const inputRoot = join(workspace, ".tmp-drive-import", "input");
const outputRoot = join(workspace, "public", "drive", "projects", "selected", "playa");
const manifestPath = join(workspace, "lib", "generated-selected-project-assets.json");

const sourceFiles = [
  ["1_7wC12TBZIn3tXBjXdm_nqlb3X3mYwfT", "1st.png", "image/png"],
  ["156830ccZ3XA7stNs0_BdVWgyhMqlOabi", "2nd.png", "image/jpeg"],
  ["1cm8YReir86YVsmD0pj-30iNAKIXGpFbW", "3rd.heif", "image/heif"],
  ["1tzXrFucZBs3crezGRP00t4YNd60QhWQu", "4th.heif", "image/heif"],
  ["1Vc3xCOb8BGicFzi1SsrA8TAqVc1crT9P", "5th.heif", "image/heif"],
  ["1bBGwXBoqa4duiZMEIireMD0Cqs5W-4Rx", "6th.heif", "image/heif"],
  ["19v3qnMpLls0XSQsl_Q9gXoHjcKZymvYN", "7th.heif", "image/heif"],
  ["186T3vnICFGEDqZjxd8cEsM7jYQo2nsmE", "8th.heif", "image/heif"],
  ["1v0P8XmLWC3vsNSHUq-O_-G5iNljYB20j", "9th.heif", "image/heif"],
  ["13m4oDVYptnAvlvJi84LEytpnkumSSdvK", "10.heif", "image/heif"],
  ["1nP5TgzGwFpq2pngyzRaYhyO1U4I9prBg", "11.heif", "image/heif"],
  ["1P6eZZpaaUBCqSilyOixfhTIMHyLsk1MP", "12.heif", "image/heif"],
  ["1DY4GCfGaWr5Fg6NlOM3mMk0wSJlPRl3a", "13.heif", "image/heif"],
  ["1CQXIfYa-nWrUW6kofjf8-barA0DGPXo1", "14.heif", "image/heif"],
  ["1Ax4tv0m0lEvbtoK3t--IGIJ_n71UsS7h", "15.heif", "image/heif"],
  ["13Ml7-d08UuuTZi2PJE3z7VOZaHtccpmT", "16.heif", "image/heif"],
  ["1XJCcDSlB5RysBHAS7ILnLFaRqOyYWpi_", "17.heif", "image/heif"],
];
const coverOrder = 4;

const captions = [
  ["A Playa interior view with warm timber, clean lines and precise detailing.", "منظور داخلي من Playa بخشب دافئ وخطوط نظيفة وتفاصيل دقيقة."],
  ["A tailored Playa joinery composition showing measured storage and calm material rhythm.", "تكوين نجارة مخصص من Playa يظهر التخزين المدروس وإيقاع الخامات الهادئ."],
  ["A crafted doorway where material, proportion and movement meet.", "مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة."],
  ["A stair and joinery study built around clean thresholds and durable detail.", "دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة."],
  ["A considered interior view of timber surfaces, storage and soft natural light.", "منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم."],
  ["Fine hardware and aligned panels give this Playa interior its quiet character.", "تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ."],
  ["A close study of the thresholds, doors and fitted pieces that complete the room.", "دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان."],
  ["Warm joinery and measured storage carry one continuous language through the space.", "تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان."],
];

const existing = JSON.parse(await readFile(manifestPath, "utf8"));
const retained = existing.filter((asset) => asset.projectSlug !== "playa");
const imported = [];

await mkdir(outputRoot, { recursive: true });

for (const [index, [driveFileId, sourceName, originalMime]] of sourceFiles.entries()) {
  const order = index + 1;
  const inputPath = join(inputRoot, `playa--${String(order).padStart(3, "0")}--${sourceName}`);
  const bytes = await readFile(inputPath);
  const contentHash = createHash("sha256").update(bytes).digest("hex");
  const decoded = /\.heif$/i.test(sourceName)
    ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
    : bytes;
  const image = sharp(decoded).rotate();
  const metadata = await image.metadata();
  const orientation = metadata.width && metadata.height
    ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
    : "landscape";
  const id = `playa-new-${String(order).padStart(3, "0")}`;
  const webp = join(outputRoot, `${id}.webp`);
  const avif = join(outputRoot, `${id}.avif`);
  await image.clone().resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(webp);
  await image.clone().resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).avif({ quality: 56 }).toFile(avif);
  const [en, ar] = captions[index % captions.length];
  imported.push({
    id,
    projectSlug: "playa",
    area: order === coverOrder ? "cover" : "other",
    driveFileId,
    sourceFolderId,
    sourceName,
    localSrc: `/drive/projects/selected/playa/${id}.webp`,
    originalMime,
    contentHash,
    orientation,
    quality: order === coverOrder ? "hero" : "editorial",
    alt: { en, ar },
    derived: {
      webp: `/drive/projects/selected/playa/${id}.webp`,
      avif: `/drive/projects/selected/playa/${id}.avif`,
    },
    authenticity: "verified-real",
    rights: "approved",
    publishStatus: "public",
  });
}

await writeFile(manifestPath, `${JSON.stringify([...retained, ...imported], null, 2)}\n`);
console.log(`Replaced Playa media with ${imported.length} images from Drive folder ${sourceFolderId}.`);
