import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const root = process.cwd();
const sourceRootId = "1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS";

// The four numbered folders and the Collection folder under Dressing rooms are
// published. Files explicitly marked "Dont upload" in Collection stay outside
// this ordered source set.
const assets = [
  ["dressing-01-01", "1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w", "Dressing 1 (sodic vilette)", 1, "1QDRFfD6h9xy80KEiDT8onwGTRZ5IlUw6", "IMG_0343.heif", "image/heif"],
  ["dressing-01-02", "1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w", "Dressing 1 (sodic vilette)", 2, "1zasUfaNCnj2HYylnu2f8YqePtBxiG_hD", "IMG_0342.heif", "image/heif"],
  ["dressing-01-03", "1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w", "Dressing 1 (sodic vilette)", 3, "1uQ5FGSolzgERdxpZJWGUNlbFJESQSuv7", "IMG_0287.heif", "image/heif"],
  ["dressing-01-04", "1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w", "Dressing 1 (sodic vilette)", 4, "1ubTjOGhrv6ovCuO2VyQ4ekqBFDlniAJH", "IMG_0340.heif", "image/heif"],
  ["dressing-02-01", "1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-", "Dressing 2 (Playa)", 1, "1eMqHxwTRBjJC7714kD8DxXJ_miW_ux29", "321c1d47-e7a4-472d-8101-438d81f6b601.jpg", "image/jpeg"],
  ["dressing-02-02", "1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-", "Dressing 2 (Playa)", 2, "18ConaFENfcvIHiZ_-tlT91RPzdtW2Lrm", "IMG_1291.PNG", "image/png"],
  ["dressing-02-03", "1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-", "Dressing 2 (Playa)", 3, "1lg2SQ0ffqQhlgCEadbCROcZu5HAGQu-z", "30223268-a45c-4d92-8592-b4bbe584a906.jpg", "image/jpeg"],
  ["dressing-03-01", "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP", "Dressing 3 (sodic)", 1, "1HjUBYyy5gAZtyhT89InRDgkb8braTSRf", "IMG_0355.heif", "image/heif"],
  ["dressing-03-02", "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP", "Dressing 3 (sodic)", 2, "1y4cBRPiOh0zKHZFv-0k3ZHJzrJZUvpTp", "IMG_0352.heif", "image/heif"],
  ["dressing-03-03", "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP", "Dressing 3 (sodic)", 3, "1KEdRJaSCYQZHXIytcssjkTVfG2yZMkAb", "IMG_9547.heif", "image/heif"],
  ["dressing-03-04", "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP", "Dressing 3 (sodic)", 4, "1FFd31NBKrHyLO_izQ2sHhwjTv9ZzUvIM", "IMG_0356.heif", "image/heif"],
  ["dressing-03-05", "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP", "Dressing 3 (sodic)", 5, "1cDwIwEkp2PIKudiKPjJAZWlQgNuEEoKD", "IMG_0357.heif", "image/heif"],
  ["dressing-03-06", "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP", "Dressing 3 (sodic)", 6, "1d740lm_pxcIlJ1X98Nlsy0x9vMVLAjHL", "IMG_0353.heif", "image/heif"],
  ["dressing-04-01", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 1, "1p-lgPa4M-ki-QOEBUqjBy_ZwpctKeIsj", "IMG_0094.HEIC", "image/heif"],
  ["dressing-04-02", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 2, "1R2UC1McUloTQipzbC8SMV15m76cnO5Kg", "IMG_0099.HEIC", "image/heif"],
  ["dressing-04-03", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 3, "1PbPqPF1x9onYURULDeDlyGwo2fD-Ji4-", "IMG_0106.HEIC", "image/heif"],
  ["dressing-04-04", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 4, "1-hUAucXArkQCW235CRMtu0cecDStCK_j", "IMG_0105.HEIC", "image/heif"],
  ["dressing-04-05", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 5, "1exIaFzKBp5mZnjLJRSIuEdXe7WzPLock", "IMG_0104.HEIC", "image/heif"],
  ["dressing-04-06", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 6, "1CXJtiEwFys7JeQmLPuHrZi2jEmJiJ3DE", "IMG_0103.HEIC", "image/heif"],
  ["dressing-04-07", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 7, "1Pp5ueVbshw6hCSdxLGh-bfRcZW8IQZnd", "IMG_0097.HEIC", "image/heif"],
  ["dressing-04-08", "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs", "Dressing 4 (New Cairo)", 8, "1Lxl32tvU8jxnmTYRHXGfVvq5q0_XInD1", "IMG_0102.HEIC", "image/heif"],
  ["dressing-collection-01", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 1, "1tvrKnJ5UViC8T6Zw48GarZ_eMyuCRBLj", "1.JPG", "image/jpeg"],
  ["dressing-collection-02", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 2, "1e_C2o8BDOb6UVjxGVAevxT5hxU85XC72", "2.HEIC", "image/heif"],
  ["dressing-collection-03", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 3, "1K-SCs6f-cHuTBpSnFNw89YaOma4yNS5g", "IMG_2476.HEIC", "image/heif"],
  ["dressing-collection-04", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 4, "1me5mEA1oZ-doSr79KTKKdyaM6lKeHV7C", "4.PNG", "image/png"],
  ["dressing-collection-05", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 5, "1JhM0vR8NCrYFBLGcYd6OE7ZeF7-yqRd3", "5.PNG", "image/png"],
  ["dressing-collection-06", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 6, "12wqYTl-5qbbDvqsbScC9UKYdgeTuZJ7e", "6.JPG", "image/jpeg"],
  ["dressing-collection-07", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 7, "1XU6uO_3fDUoxKmn63FVN4Dp-WqwueN9h", "7.PNG", "image/png"],
  ["dressing-collection-08", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 8, "1FbKgQqfqnf4rT9q4W_-huN_mP2rA-3a8", "8.HEIC", "image/heif"],
  ["dressing-collection-09", "1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK", "Collection", 9, "1ak4BimvcwFk0yNbJRJ2zNz7bPdUCr5PE", "9.HEIC", "image/heif"],
];

const records = [];

for (const [id, sourceFolderId, sourceFolderName, imageOrder, driveFileId, sourceName, originalMime] of assets) {
  const sourcePath = join(root, ".tmp-drive-import", "input", "dressing", id);
  const bytes = await readFile(sourcePath);
  const contentHash = createHash("sha256").update(bytes).digest("hex");
  const decoded = originalMime === "image/heif"
    ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
    : bytes;
  const image = sharp(decoded).rotate();
  const metadata = await image.metadata();
  const orientation = metadata.width && metadata.height
    ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
    : "unknown";
  const outputPath = join(root, "public", "drive", "dressing", `${id}.webp`);
  await mkdir(join(root, "public", "drive", "dressing"), { recursive: true });
  await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(outputPath);

  records.push({
    id,
    driveFileId,
    sourceRootId,
    sourceFolderId,
    sourceFolderName,
    imageOrder,
    sourceName,
    localSrc: `/drive/dressing/${id}.webp`,
    originalMime,
    contentHash,
    orientation,
    authenticity: "verified-real",
    rights: "pending",
    publishStatus: "preview",
  });
}

await writeFile(join(root, "lib", "generated-dressing-drive-assets.json"), `${JSON.stringify(records, null, 2)}\n`);
process.stdout.write(`Imported ${records.length} dressing images in folder/image order.\n`);
