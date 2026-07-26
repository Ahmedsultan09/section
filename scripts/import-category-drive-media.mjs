import { createHash } from "node:crypto";
import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { extname, join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const assets = [
  // Kitchens — Obour
  ["kitchen-obour-01", "1tMnbWs7EX6BLe6jYqL-SiorGf9hjT7bh", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_9414.PNG", "image/png", "kitchens"],
  ["kitchen-obour-02", "1k-fM110ILq-3U1kWzjcMZ5ET--E5pa64", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_9411.PNG", "image/jpeg", "kitchens"],
  ["kitchen-obour-03", "16m4KwKCXQ-pBQNRO5r0Y_EZGkPG47KiH", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_9410.PNG", "image/png", "kitchens"],
  ["kitchen-obour-04", "1RfYwap6fxUHrgWci3hG_hDJeu5XDckRm", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_9413.PNG", "image/png", "kitchens"],
  ["kitchen-obour-05", "14_OuicIfdjPpdck1w_VNZx1TEKfM8o-z", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_9409.PNG", "image/png", "kitchens"],
  ["kitchen-obour-06", "12lIlgCbnizWOvdIzHzN2Mtj8CbMiUHbz", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_9400.PNG", "image/png", "kitchens"],
  ["kitchen-obour-07", "1UBkEXu_ECV2NBF-gtlSOP1u03H8mMieR", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2525.heic", "image/heif", "kitchens"],
  ["kitchen-obour-08", "1RZrjcWUzVNrRZK2mMy3E9U_4wIdcH8nT", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2522.heic", "image/heif", "kitchens"],
  ["kitchen-obour-09", "1gMO0A3lPxMk2IIPU8IF3KWsKS8zKx8jp", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2524.heic", "image/heif", "kitchens"],
  ["kitchen-obour-10", "1tYDk-675SLhRo0iwdAiJbFKbUhFhqcS_", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2532.heic", "image/heif", "kitchens"],
  ["kitchen-obour-11", "195BQnO_OpS6KEj2C5gi1JLT7shSB00D9", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2531.heic", "image/heif", "kitchens"],
  ["kitchen-obour-12", "1Ta34gmWsUtoPApQRT4PzwdFF3oJVK-Rf", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2526.heic", "image/heif", "kitchens"],
  ["kitchen-obour-13", "1L5_wFTNZvTfuNl-d2tM7-x7Sqk9VZUCb", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "11f7c376-2d2d-4a0b-a9e3-b7e685b9688f.jpg", "image/jpeg", "kitchens"],
  ["kitchen-obour-14", "1Jl7jhjE97vVrwdMBdjIActz4rnK_It_G", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2523.heic", "image/heif", "kitchens"],
  ["kitchen-obour-15", "1CMR8A03y12QW0ybFSQNzUU8jNdYnoWXF", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2533.heic", "image/heif", "kitchens"],
  ["kitchen-obour-16", "1kvmsNriLZ6K7q_Xof0sZYAMk-XgejZju", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "IMG_2534.heic", "image/heif", "kitchens"],
  ["kitchen-obour-17", "1mE1OXV3EjXHcPEyO5vuwtarSh1cVO-Ak", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "0600d022-fec8-4d34-b89b-9821362f7945.jpg", "image/jpeg", "kitchens"],
  ["kitchen-obour-18", "14pisp5kNa9xxBtgSLILZIxjWjv0iW0hL", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "6924bfbf-de99-476c-a4a2-3e5d2729ba38.jpg", "image/jpeg", "kitchens"],
  ["kitchen-obour-19", "1hHt5VnWsKZF1JGQL11dIWSixRMxAZKHf", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "dcdf6165-ef8f-4cba-a053-44f1562ac869.jpg", "image/jpeg", "kitchens"],
  ["kitchen-obour-20", "1EryUvaxMekl1CMnzfnEM1W1ykSZ4yaJQ", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "4a6b2691-fc4b-4141-9f6f-78751c1ee2bb.jpg", "image/jpeg", "kitchens"],
  ["kitchen-obour-21", "1o-93Rgn7qFVMHkGl7aG5tYbYToOMGqi_", "1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv", "89ed5665-3724-473f-8cf5-077c9968768c.jpg", "image/jpeg", "kitchens"],

  // Kitchens — edited photographs
  ["kitchen-edited-01", "1r3k6rUhOa32JJ41h8qYbkyn8SlSlITlp", "16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "IMG_0958.PNG", "image/png", "kitchens"],
  ["kitchen-edited-02", "18xePK2OLwR42VvpiCk8oTl1jryEPw-x8", "16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "IMG_0959.PNG", "image/png", "kitchens"],
  ["kitchen-edited-03", "1ak1pREO34BmtMntEBWo8cJ7jYn_RS7ki", "16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "IMG_0960.PNG", "image/png", "kitchens"],
  ["kitchen-edited-04", "12pf2SpwL6R2k-j40NFvBSdUd_-nuKQHM", "16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "IMG_0961.PNG", "image/jpeg", "kitchens"],
  ["kitchen-edited-05", "15aa3bVnj0p_VubvwkPC3vlfkx4B6kCm0", "16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "IMG_0962.PNG", "image/png", "kitchens"],
  ["kitchen-edited-06", "1bMQ4Blod_mQAzzM-D6CtdJyN-hCY960h", "16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "IMG_0956.PNG", "image/png", "kitchens"],

  // Bedrooms — two Drive-backed projects
  ...[
    ["01", "1NG0WV2PJxIRdVeIp1wHucpBuyoUs6apo", "IMG_5857.HEIC"],
    ["02", "1U_h0qkyaXtlh2TaOQ-r75VJZxUBb5c5P", "IMG_5865.HEIC"],
    ["03", "1tC94OTyxyhoKVbzK_5wqb63iWS6GINh2", "IMG_5946.HEIC"],
    ["04", "1v1JEOOaTdC4jEO6UoblkNMAIpIr4an-m", "IMG_5886.HEIC"],
    ["05", "1aGFBwa0OuazJrhNjw4yPzcGqN9CHo0zg", "IMG_5876.HEIC"],
    ["06", "1RcTHaewzbp0v-7bImFygjMw1rp-zNN-o", "IMG_5840.HEIC"],
    ["07", "1yYZC7zy5K0D6ohQYtGC5-cKPxgZyWaRj", "IMG_5819.HEIC"],
    ["08", "1O-CiDeedVPpBRuCy9CR1jpiIOb5cw0av", "IMG_5864.HEIC"],
    ["09", "10iDqpYjALFu_ChL1tueYDowf0YZXIzWD", "IMG_5843.HEIC"],
    ["10", "1pS2s8sixoLmWWVKJKStwTuKcWHJb6IT2", "IMG_5834.HEIC"],
    ["11", "1kT_1GQIbNzFlrMGLPanLyIPMsgJNzyT0", "IMG_5849.HEIC"],
  ].map(([number, id, name]) => [`bedroom-a-${number}`, id, "10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j", name, "image/heif", "bedrooms"]),
  ...[
    ["01", "19OMksMj2TT8yEO1Z8gIAicyX7YlqbTTa", "IMG_9719.HEIC"],
    ["02", "1zC4HCcavaED8EynrA0PShqFn9hPISHHU", "IMG_9727.HEIC"],
    ["03", "1PsuKvdear5tmhzDoOx3MW0Zf2wa7gC3s", "IMG_9728.HEIC"],
    ["04", "1aDewiO2rMyFNMR3PqQZZmDTYblOJNw5j", "IMG_9733.HEIC"],
    ["05", "1hf-CfG8vmm3pa-aZWujnmJg8CheG46w2", "IMG_9724.HEIC"],
    ["06", "1_j2VCplA2J16BfIMiPIqKXnKJGmtog67", "IMG_9738.HEIC"],
    ["07", "1atdXjTqlu19jcZ0nMaxQHcrn3HuIKFzM", "IMG_9717.HEIC"],
  ].map(([number, id, name]) => [`bedroom-b-${number}`, id, "10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp", name, "image/heif", "bedrooms"]),

  // Dressing — complete the existing still-image set
  ["dressing-09", "1fYRcH5w_Rs4CcAgBOoEO8jHTnZCEwRaI", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0340.HEIC", "image/heif", "dressing"],
  ["dressing-10", "1lEw9I439xqdpOZf12Oo9fwYGOU5FXsmO", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0352.HEIC", "image/heif", "dressing"],
  ["dressing-11", "1f1TfkOPFBjpOjY4dwlH4b07SbUtMhj4a", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0342.HEIC", "image/heif", "dressing"],
  ["dressing-12", "1ZmLjpK_Ksj7ePAaaCt7AsoMlYujObwsJ", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0287.HEIC", "image/heif", "dressing"],
  ["dressing-13", "1bKRncA3QiCvOVaJJ8LdmIik4_w2tcAiG", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0353.HEIC", "image/heif", "dressing"],
];

const workspace = process.cwd();
const temporaryDirectory = await mkdtemp(join(tmpdir(), "section-drive-import-"));
const records = [];
const seenHashes = new Set();

try {
  for (const [id, driveFileId, sourceFolderId, sourceName, originalMime, outputFolder] of assets) {
    const extension = extname(sourceName) || (originalMime === "image/heif" ? ".heic" : ".jpg");
    const sourcePath = join(temporaryDirectory, `${id}${extension}`);
    const authenticatedDownload = join(workspace, ".tmp-drive-import", "input", id);
    let bytes;
    try {
      bytes = await readFile(authenticatedDownload);
    } catch {
      throw new Error(`Missing authenticated Drive download for ${sourceName}. Place it at ${authenticatedDownload}.`);
    }
    const contentHash = createHash("sha256").update(bytes).digest("hex");
    if (seenHashes.has(contentHash)) {
      process.stdout.write(`skipped duplicate ${sourceName} (${driveFileId})\n`);
      continue;
    }
    seenHashes.add(contentHash);
    await writeFile(sourcePath, bytes);

    const decoded = originalMime === "image/heif"
      ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
      : bytes;
    const image = sharp(decoded).rotate();
    const metadata = await image.metadata();
    const orientation = metadata.width && metadata.height
      ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
      : "unknown";
    const outputDirectory = join(workspace, "public", "drive", outputFolder);
    const outputPath = join(outputDirectory, `${id}.webp`);
    await mkdir(outputDirectory, { recursive: true });
    await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(outputPath);

    records.push({
      id,
      driveFileId,
      sourceFolderId,
      sourceName,
      localSrc: `/drive/${outputFolder}/${id}.webp`,
      originalMime,
      contentHash,
      orientation,
      authenticity: "verified-real",
      rights: "pending",
      publishStatus: "preview",
    });
    process.stdout.write(`imported ${sourceName} -> ${outputPath}\n`);
  }

  await writeFile(
    join(workspace, "lib", "generated-category-drive-assets.json"),
    `${JSON.stringify(records, null, 2)}\n`,
  );
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
