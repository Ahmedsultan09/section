import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const root = process.cwd();
const doorsRootId = "1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh";
const livingRootId = "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx";

const doors = [
  ["door-01", 1, "1F8veHcJiD9xIQhx5PvaeDeadd-wicF2X", "1.jpg", "image/jpeg"],
  ["door-02", 2, "1CKMiAT70o4O7OGRFktBN1mbMi1psPMoQ", "2.jpg", "image/jpeg"],
  ["door-03", 3, "17MrmOy6T4pM5CJP0rtFrEgRjZJaZ7CO4", "3.heif", "image/heif"],
  ["door-04", 4, "1KEN1faX_E0_kq3oYSdBPAY4o9EjZnTfZ", "4.jpg", "image/jpeg"],
  ["door-05", 5, "13iwbIMeQoVZne3X9GGtjdOg_m4ftQaPZ", "5.png", "image/png"],
  ["door-06", 6, "1H22o4onyJlOAFgBDiv1ee7hHEeTbCiah", "6.png", "image/png"],
  ["door-07", 7, "1f7-PZtaLOZ9zcEG9TzpK7UqkH5vBtQRR", "7.jpg", "image/jpeg"],
  ["door-08", 8, "1jcV6jlmq5LxNCl4mi1r8ZqITyXHGGW8j", "8.jpg", "image/jpeg"],
  ["door-09", 9, "1kvc13XiEF8rO5O3Rzg_8cOg3XUOrHz21", "9.heif", "image/heif"],
  ["door-10", 10, "17zfO76lNg3jsukIIzaYQzKmLg7e2kisJ", "10.jpg", "image/jpeg"],
  ["door-11", 11, "1EXZqxZX2Dckl7kTbHxEIhFNF73h7_UYK", "11.heif", "image/heif"],
  ["door-12", 12, "1FBLmBirzm4-7VPQkJGNkezdVHXOGZ3BO", "12.heif", "image/heif"],
  ["door-13", 13, "12mUFtM_GdsdDTxaA7PO6LYSATXwkuoE8", "13.jpg", "image/jpeg"],
  ["door-14", 14, "1UXPy3VCpRbrcrva4UNHhoH5rjZUBU-Os", "14.png", "image/png"],
  ["door-15", 15, "1pCk7GTvA6LgrQw6kEQkfMH_gQx5_a7-0", "15.jpg", "image/jpeg"],
  ["door-16", 16, "1ZT3W__-Fni-G0utTxXktIC0KFn1XcLzk", "16.jpg", "image/jpeg"],
  ["door-17", 17, "1C6RqIZv4FE2r5b6byq_xxy5NEPmAW9DJ", "17.JPG", "image/jpeg"],
  ["door-18", 18, "12Rw2WNkOoEOxIIum2vXZME2j8dF9vFG-", "18.heif", "image/heif"],
];

const living = [
  ["living-01-01", 1, "Living space 01", "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx", 1, "1IP5Y4nvH8wAc0Vd_Hogfn3CscVcEfplQ", "1.JPG", "image/jpeg"],
  ["living-01-02", 1, "Living space 01", "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx", 2, "1E0yk0GRI030nF2daSpY-IArDeJP611Dt", "2.heif", "image/heif"],
  ["living-01-03", 1, "Living space 01", "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx", 3, "1qOAB2Rml3nb7xUGSdwREW--wIftYBqvp", "3.jpg", "image/jpeg"],
  ["living-02-01", 2, "Living space 02", "1uhkdfxII741nyF3BIKKQod7XRBJC5727", 1, "16upIs3e-HDgA2Rmx2-wfh6ej_hjQAy_b", "1.PNG", "image/png"],
  ["living-02-02", 2, "Living space 02", "1uhkdfxII741nyF3BIKKQod7XRBJC5727", 2, "1GrveEkHps803x7Cdr5JIDMlSJUY7NvP8", "2.PNG", "image/png"],
  ["living-02-03", 2, "Living space 02", "1uhkdfxII741nyF3BIKKQod7XRBJC5727", 3, "14NepbIonk82Oc_f2bV5cQkGboQ82KGkG", "3.PNG", "image/png"],
  ["living-03-01", 3, "Living space 03", "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS", 1, "1wwbeDroqYh03crfQtqq8plfB_kjWHOzC", "1.PNG", "image/png"],
  ["living-03-02", 3, "Living space 03", "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS", 2, "1vJ_4CT-cFCTrnZBzSE2RBfI5ae6u0hJj", "2.PNG", "image/png"],
  ["living-03-03", 3, "Living space 03", "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS", 3, "1EgW4-Cm_mbxgJxSqrMBPKJTCcfXVspJN", "3.png", "image/png"],
  ["living-03-04", 3, "Living space 03", "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS", 4, "1xqKqCQrFfBP5ugzFI5XLcnU9vDPbnvtC", "4.PNG", "image/png"],
];

const cover = ["living-cover", "The main photo (to be shown outside).png", "1BtrNEYLnedPJZH5SopBZAaT6T85AhuXw", "image/png"];

async function importImage({ id, inputDir, outputDir, outputName, driveFileId, sourceName, originalMime, extra }) {
  if (/dont\s*upload/i.test(sourceName)) return null;
  const bytes = await readFile(join(root, ".tmp-drive-import", "input", inputDir, id));
  const contentHash = createHash("sha256").update(bytes).digest("hex");
  const decoded = originalMime === "image/heif"
    ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
    : bytes;
  const image = sharp(decoded).rotate();
  const metadata = await image.metadata();
  const orientation = metadata.width && metadata.height
    ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
    : "unknown";
  await mkdir(join(root, "public", "drive", outputDir), { recursive: true });
  const outputPath = join(root, "public", "drive", outputDir, outputName);
  await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(outputPath);
  return {
    id,
    driveFileId,
    ...extra,
    sourceName,
    localSrc: `/drive/${outputDir}/${outputName}`,
    originalMime,
    contentHash,
    orientation,
    authenticity: "verified-real",
    rights: "pending",
    publishStatus: "preview",
  };
}

const doorRecords = [];
for (const [id, imageOrder, driveFileId, sourceName, originalMime] of doors) {
  const record = await importImage({
    id,
    inputDir: "doors",
    outputDir: "doors",
    outputName: `${id}.webp`,
    driveFileId,
    sourceName,
    originalMime,
    extra: { sourceRootId: doorsRootId, sourceFolderId: doorsRootId, sourceFolderName: "Doors", imageOrder },
  });
  if (record) doorRecords.push(record);
}

const livingRecords = [];
for (const [id, projectOrder, sourceFolderName, sourceFolderId, imageOrder, driveFileId, sourceName, originalMime] of living) {
  const record = await importImage({
    id,
    inputDir: "living",
    outputDir: "living-spaces",
    outputName: `${id}.webp`,
    driveFileId,
    sourceName,
    originalMime,
    extra: { sourceRootId: livingRootId, sourceFolderId, sourceFolderName, projectOrder, imageOrder, role: "gallery" },
  });
  if (record) livingRecords.push(record);
}

const coverRecord = await importImage({
  id: cover[0],
  inputDir: "living",
  outputDir: "living-spaces",
  outputName: "living-cover.webp",
  driveFileId: cover[2],
  sourceName: cover[1],
  originalMime: cover[3],
  extra: { sourceRootId: livingRootId, sourceFolderId: livingRootId, sourceFolderName: "Living rooms", role: "cover" },
});
if (coverRecord) livingRecords.push(coverRecord);

await writeFile(join(root, "lib", "generated-doors-drive-assets.json"), `${JSON.stringify(doorRecords, null, 2)}\n`);
await writeFile(join(root, "lib", "generated-living-drive-assets.json"), `${JSON.stringify(livingRecords, null, 2)}\n`);
process.stdout.write(`Imported ${doorRecords.length} Doors images and ${livingRecords.length - (coverRecord ? 1 : 0)} Living Spaces images plus ${coverRecord ? 1 : 0} cover.\n`);
