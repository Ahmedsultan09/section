import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

/**
 * Selected-project imports are deliberately explicit. Each record keeps the
 * Drive file ID beside the generated delivery paths so a local derivative can
 * always be traced back to its source-of-truth file.
 */
const assets = [
  ["swan-lake-01", "1mCbHAsQx9Ij_npKE69JYXNCKt80p7j4T", "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR", "IMG_4498.JPG", "swan-01.jpg", "swan-lake", "cover", "Living room with timber slat wall and integrated media joinery", "غرفة معيشة بجدار شرائح خشبية ونجارة وسائط مدمجة"],
  ["swan-lake-02", "1vJDzYESn7P4rS7QU8urLydoC7rSjc4ix", "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR", "IMG_4499.JPG", "swan-02.jpg", "swan-lake", "wall", "Marble vanity framed by timber wall panels", "وحدة مغسلة رخامية محاطة بألواح جدارية خشبية"],
  ["swan-lake-03", "1N2pphLlYyLglGkvBcQzaKhKl6wvOFys8", "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR", "IMG_4497.JPG", "swan-03.jpg", "swan-lake", "bedroom", "Bedroom with a full-height timber headboard wall", "غرفة نوم بجدار لوح رأسي خشبي كامل الارتفاع"],
  ["swan-lake-04", "1NrcWiwS5pGhQYMiQit-cqFTxsDWDL-QB", "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR", "IMG_1253.HEIC", "swan-04.heic", "swan-lake", "detail", "Illuminated timber bedhead detail", "تفصيل لوح رأسي خشبي مضاء"],

  ["villette-01", "19-Zg-F9LiIU_OGYSCO_4sQzVxLDJj7KX", "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", "IMG_0278.HEIC", "villette-01.heic", "sodic-villette", "wall", "Fluted timber wall with integrated desk and shelving", "جدار خشبي مخدد مع مكتب ورفوف مدمجة"],
  ["villette-02", "1m4SZkP2KRYSVO4e6Ly2xZb918KVotXUF", "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", "IMG_0343.HEIC", "villette-02.heic", "sodic-villette", "dressing", "Walnut wardrobe interior with pull-down rail", "خزانة ملابس من الجوز مع قضيب قابل للسحب"],
  ["villette-03", "1ahJxQRZM6nYlmrOJ5hT6ZdAGVYVxWGJL", "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", "IMG_0359.HEIC", "villette-03.heic", "sodic-villette", "bedroom", "Bedroom with a fluted timber feature wall", "غرفة نوم بجدار خشبي مخدد مميز"],
  ["villette-04", "1zNAyw53pQvIU1jxqbnOAhe4JCQRPUdlt", "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", "IMG_9536.HEIC", "villette-04.heic", "sodic-villette", "reception", "Living room seating and media wall", "جلسة معيشة وجدار وسائط"],
  ["villette-05", "1J99sGjk07y4oXtuqTby82_wNsY2NZoU3", "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", "IMG_9532.HEIC", "villette-05.heic", "sodic-villette", "reception-detail", "Sofa and timber wall detail", "تفصيل أريكة وجدار خشبي"],
  ["villette-06", "1jG0MQlpnD5gVbXogi4WLp_5Dho4TKqYu", "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", "IMG_9539.HEIC", "villette-06.heic", "sodic-villette", "cover", "Wide living room with a dark media wall", "غرفة معيشة واسعة بجدار وسائط داكن"],

  ["playa-01", "1wlZGDtxjTMgd4SoadLO0bNN9sRJ7Vfsu", "1256mAU_FoUKShxofhCe8-pQEYja11tMr", "IMG_2581.HEIC", "playa-01.heic", "playa", "dressing", "White fitted wardrobe with open storage", "خزانة ملابس بيضاء بوحدات تخزين مفتوحة"],
  ["playa-02", "1eH-YHNlaviqw9q-XotblZduEypFd9Op8", "1256mAU_FoUKShxofhCe8-pQEYja11tMr", "IMG_2582.HEIC", "playa-02.heic", "playa", "dressing-detail", "Close detail of wardrobe internals", "تفصيل داخلي لخزانة ملابس"],
  ["playa-03", "1gyf-n7KyLBRVmMxyyGnX9KDgpxNoInZ6", "1256mAU_FoUKShxofhCe8-pQEYja11tMr", "IMG_2546.HEIC", "playa-03.heic", "playa", "dressing-detail", "Wardrobe hardware and drawer detail", "تفصيل إكسسوارات وأدراج خزانة"],
  ["playa-04", "1SRyB5YdCyX3ZlwpVAKtW2yRyggoZFTgp", "1256mAU_FoUKShxofhCe8-pQEYja11tMr", "IMG_2607.HEIC", "playa-04.heic", "playa", "doors", "Oak double doors with perforated timber detail", "بابان من البلوط بتفصيل خشبي مثقب"],
  ["playa-05", "1vrdIsa6opQz-8XOTCUv1czDph4GxHGgF", "1256mAU_FoUKShxofhCe8-pQEYja11tMr", "IMG_2601.HEIC", "playa-05.heic", "playa", "stairs", "Illuminated entry steps and timber doorway", "درجات مدخل مضاءة وباب خشبي"],

  ["cfc-office-01", "1Ttb8b0kNPTcopDfySTAiss7GKEt-4fdW", "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y", "IMG_4192.HEIC", "cfc-01.heic", "cfc-office", "wall", "Timber wall and workstation detail in the CFC office", "تفصيل جدار خشبي ومكتب في مكتب CFC"],
  ["cfc-office-02", "172xbRcLKiigQuyNc7ctm-yx-w7JTrm3L", "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y", "IMG_4189.HEIC", "cfc-02.heic", "cfc-office", "cover", "CFC office reception and conference space", "منطقة استقبال واجتماعات في مكتب CFC"],
  ["cfc-office-03", "1YgzFugyzqSjC8XKIoWRDIU8OZP7cp9YR", "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y", "IMG_4193.HEIC", "cfc-03.heic", "cfc-office", "detail", "Lighting and seating detail in the CFC office", "تفصيل إضاءة ومقاعد في مكتب CFC"],
];

const workspace = process.cwd();
const records = [];
const seenHashes = new Set();

for (const [id, driveFileId, sourceFolderId, sourceName, inputName, projectSlug, area, en, ar] of assets) {
  const sourcePath = join(workspace, ".tmp-drive-import", "input", inputName);
  const bytes = await readFile(sourcePath);
  const contentHash = createHash("sha256").update(bytes).digest("hex");
  if (seenHashes.has(contentHash)) continue;
  seenHashes.add(contentHash);
  const decoded = /\.heic$/i.test(inputName)
    ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
    : bytes;
  const image = sharp(decoded).rotate();
  const metadata = await image.metadata();
  const orientation = metadata.width && metadata.height
    ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
    : "unknown";
  const outputDirectory = join(workspace, "public", "drive", "projects", "selected", projectSlug);
  await mkdir(outputDirectory, { recursive: true });
  const webpPath = join(outputDirectory, `${id}.webp`);
  const avifPath = join(outputDirectory, `${id}.avif`);
  await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(webpPath);
  await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).avif({ quality: 56 }).toFile(avifPath);
  records.push({
    id,
    projectSlug,
    area,
    driveFileId,
    sourceFolderId,
    sourceName,
    localSrc: `/drive/projects/selected/${projectSlug}/${id}.webp`,
    originalMime: /\.heic$/i.test(inputName) ? "image/heif" : "image/jpeg",
    contentHash,
    orientation,
    quality: area === "cover" ? "hero" : "editorial",
    alt: { en, ar },
    derived: {
      webp: `/drive/projects/selected/${projectSlug}/${id}.webp`,
      avif: `/drive/projects/selected/${projectSlug}/${id}.avif`,
    },
    authenticity: "verified-real",
    rights: "approved",
    publishStatus: "public",
  });
}

await writeFile(join(workspace, "lib", "generated-selected-project-assets.json"), `${JSON.stringify(records, null, 2)}\n`);
