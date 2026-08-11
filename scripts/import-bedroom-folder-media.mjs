import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const bedroomRootFolderId = "1Mki1dVI9TJP5AiVjf4x5IbMZ3Koqhm8X";

const assets = [
  // Adult bedroom / Bedroom 1
  ["bedroom-adult-01-01", "1O4cOfO9gUMqaBU9OXCxqIWKT1pN0LTQQ", "1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP", "Bedroom 1", "1.JPG", "image/jpeg", 1, 1],
  ["bedroom-adult-01-02", "1ewIbLQ3s0eAgT192t2_qehosipTkYkP2", "1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP", "Bedroom 1", "2.JPG", "image/jpeg", 1, 2],
  ["bedroom-adult-01-03", "1c43IHm6djHpHYhIcHUg4xxojZCdBnZZO", "1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP", "Bedroom 1", "3.png", "image/png", 1, 3],
  ["bedroom-adult-01-04", "1eGvBlIY-EA5FPA_Zr23FXGO2NbX-7Ka_", "1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP", "Bedroom 1", "4.png", "image/png", 1, 4],
  ["bedroom-adult-01-05", "12mvviKJ0CjREYTYaWSF9BZqkX53Mz62b", "1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP", "Bedroom 1", "5.JPG", "image/jpeg", 1, 5],
  ["bedroom-adult-01-06", "1nlQIvLqLnEHFLQSgbwjCxWAp3UyGZdRM", "1NJ4BZOHi0NgQP6U0v3DM_1N5r972zHfP", "Bedroom 1", "6.JPG", "image/jpeg", 1, 6],

  // Adult bedroom / bedroom 2
  ["bedroom-adult-02-01", "1hHSHa6beCVIQQv6Ji7G2qIXw2citYtYh", "1p4obdncuGFOY9ZSPxazkCNnwA0wVU4hT", "Bedroom 2", "1", "image/jpeg", 2, 1],
  ["bedroom-adult-02-02", "1fbE6sCkQ_-G1uU3OmtDIbnE-6FDihV3y", "1p4obdncuGFOY9ZSPxazkCNnwA0wVU4hT", "Bedroom 2", "2.HEIC", "image/heif", 2, 2],
  ["bedroom-adult-02-03", "1BZhNNCuX1n107rlbqBGkLjYNWZUhwr2S", "1p4obdncuGFOY9ZSPxazkCNnwA0wVU4hT", "Bedroom 2", "3.HEIC", "image/heif", 2, 3],
  ["bedroom-adult-02-04", "14dobgMOSZqNg6S62JpNomeqBoT_NcwR9", "1p4obdncuGFOY9ZSPxazkCNnwA0wVU4hT", "Bedroom 2", "4", "image/jpeg", 2, 4],

  // Collection of bedroom items
  ["bedroom-collection-05", "1PS0l56lz739XXCpN9znEq3ag4NP7dLqS", "1uqjXyNQfm7H29-_TH4v6akhZns1ziwJG", "collection of bedroom items", "5", "image/png", 1, 5],
  ["bedroom-collection-07", "1vUEpI0Z6yzbMIpK74_aaanhp_dRVAu8m", "1uqjXyNQfm7H29-_TH4v6akhZns1ziwJG", "collection of bedroom items", "7", "image/png", 1, 7],
  ["bedroom-collection-08", "1aUSK9s38Qd_-PdXCklJiVrt1nHGNDQKP", "1uqjXyNQfm7H29-_TH4v6akhZns1ziwJG", "collection of bedroom items", "8", "image/png", 1, 8],

  // Kids / Br 1
  ["bedroom-kids-br1-01", "1TVqJz8vqWDeZHHl2N20yf03YPcAD5wEl", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "1.JPG", "image/jpeg", 1, 1],
  ["bedroom-kids-br1-02", "1lDYO9ehnvJG3XiMY12z_gKGmjiExtYBw", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "2", "image/heif", 1, 2],
  ["bedroom-kids-br1-03", "1iSBZfMJmEAn4q1P8_fFhN1HAVCjtdRj0", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "3", "image/heif", 1, 3],
  ["bedroom-kids-br1-04", "12UAQyXFxKqE4uYdi_Diex3a8mRXGGdj0", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "4.heif", "image/heif", 1, 4],
  ["bedroom-kids-br1-05", "1orvK8VuwLiGEY5qxtu2TOOsvC0W3fALb", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "5.heif", "image/heif", 1, 5],
  ["bedroom-kids-br1-06", "18_qQ0LbsybZ7AjVQKSzTpWxSIDatq1yu", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "6", "image/jpeg", 1, 6],
  ["bedroom-kids-br1-07", "1pLJYJdVD_3-s6PWPIxn8i2nBlNrSaBS3", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "7", "image/jpeg", 1, 7],
  ["bedroom-kids-br1-08", "1LHgr8xbSoTwgHNiqeeY3zwcXIZPUg-AY", "14jbn8JsB8KFxM26IBphuea7oYHpZzi6u", "Br 1", "8", "image/heif", 1, 8],

  // Kids / BR 2. The parent folder is currently inaccessible through the connector,
  // but this source image remains available and is retained by its original IDs.
  ["bedroom-kids-br2-03", "1N5iHK9y-ZCwHBY3KuyXw2XibvkJrhyiI", "1BFZ2f318tyKJYvg-q31Sq8L1JW3dJlrz", "BR 2", "3.png", "image/png", 2, 3],

  // Kids / Br 3
  ["bedroom-kids-br3-01", "1IuoCzLQ8AYxVAysgaJXQ3BNMq27zuLJK", "1UuKJop3toV3wYnYbC4sNo6AHl1sIrHQc", "Br 3", "1.JPG", "image/jpeg", 3, 1],
  ["bedroom-kids-br3-02", "1t1bdcHe92KQgf2VKSHru11FkowaZBuif", "1UuKJop3toV3wYnYbC4sNo6AHl1sIrHQc", "Br 3", "2", "image/jpeg", 3, 2],
  ["bedroom-kids-br3-03", "1fXMwzYRtBu_8wj_N4wqUMCY0pR_TifDL", "1UuKJop3toV3wYnYbC4sNo6AHl1sIrHQc", "Br 3", "3", "image/jpeg", 3, 3],
  ["bedroom-kids-br3-04", "1BO6AueWLhZZtpIXVfoRPTCmV9K32mZv_", "1UuKJop3toV3wYnYbC4sNo6AHl1sIrHQc", "Br 3", "4.heif", "image/heif", 3, 4],
  ["bedroom-kids-br3-05", "1NlHxSG6PCI-mLBcecUkNHmD2KCfRSZZ7", "1UuKJop3toV3wYnYbC4sNo6AHl1sIrHQc", "Br 3", "5.JPG", "image/jpeg", 3, 5],

  // Kids / Br 4
  ["bedroom-kids-br4-01", "1n3pPU6gUOZFsLKOxMSbPHM6i58hw56V9", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6940.HEIC", "image/heif", 4, 1],
  ["bedroom-kids-br4-02", "1qFenFsvn12w0T-XMAcKa3ytQtxHE6l3w", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6943.HEIC", "image/heif", 4, 2],
  ["bedroom-kids-br4-03", "1aUDa9Rphq7XFELRQ_uhNLyp6W3sSWUDE", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6944.HEIC", "image/heif", 4, 3],
  ["bedroom-kids-br4-04", "1puHKtrGeJQi3XAmtPgzMRjrcOoXrT2FY", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6946.HEIC", "image/heif", 4, 4],
  ["bedroom-kids-br4-05", "1z9Z5O0gtHF5NGYu2ZPtq-N_nnRYCxBDo", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6974.HEIC", "image/heif", 4, 5],
  ["bedroom-kids-br4-06", "1D1ToI6Cu43z9s8RB7GN6mt_6pR9r1I6o", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6976.HEIC", "image/heif", 4, 6],
  ["bedroom-kids-br4-07", "1Y_ePFoUye9jh9yPnAh876hBanFTUTWP6", "1b2SsyYOkHuIxc8sCLhS_Mf9G-H3D_r6e", "Br 4", "IMG_6981.HEIC", "image/heif", 4, 7],
];

const workspace = process.cwd();
const inputRoot = join(workspace, ".tmp-drive-import", "input");
const outputRoot = join(workspace, "public", "drive", "bedrooms");
const manifestPath = join(workspace, "lib", "generated-category-drive-assets.json");

async function resolveInputPath(id) {
  const candidates = [id, `${id}.png`, `${id}.jpg`, `${id}.jpeg`, `${id}.heic`, `${id}.HEIC`];
  for (const candidate of candidates) {
    const sourcePath = join(inputRoot, candidate);
    try {
      await access(sourcePath);
      return sourcePath;
    } catch {
      // Try the next materialized filename; Drive downloads are not uniform.
    }
  }
  throw new Error(`Missing bedroom source file for ${id}`);
}

await mkdir(outputRoot, { recursive: true });

const records = [];
for (const [id, driveFileId, sourceFolderId, sourceFolderName, sourceName, originalMime, subcategoryOrder, imageOrder] of assets) {
  const sourcePath = await resolveInputPath(id);
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
  await image
    .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(join(outputRoot, `${id}.webp`));

  records.push({
    id,
    driveFileId,
    sourceRootFolderId: bedroomRootFolderId,
    sourceFolderId,
    sourceFolderName,
    bedroomCategory: sourceFolderName === "collection of bedroom items" ? "collection" : sourceFolderName.startsWith("Bedroom") ? "adult-bedroom" : "kids",
    subcategoryOrder,
    imageOrder,
    sourceName,
    localSrc: `/drive/bedrooms/${id}.webp`,
    originalMime,
    contentHash,
    orientation,
    authenticity: "verified-real",
    rights: "pending",
    publishStatus: "preview",
  });
}

const existingRecords = JSON.parse(await readFile(manifestPath, "utf8"));
const outputRecords = [
  ...existingRecords.filter((record) => !record.id.startsWith("bedroom-")),
  ...records,
];
await writeFile(manifestPath, `${JSON.stringify(outputRecords, null, 2)}\n`, "utf8");
process.stdout.write(`Imported ${records.length} bedroom images from Drive folder ${bedroomRootFolderId}.\n`);
