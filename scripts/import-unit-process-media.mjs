import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const workspace = process.cwd();
const inventory = JSON.parse(await readFile(join(workspace, "lib", "unit-process-source-inventory.json"), "utf8"));
const inputDirectory = join(workspace, ".tmp-drive-import", "input");

function extensionFor(asset) {
  const sourceExtension = extname(asset.sourceName);
  if (sourceExtension) return sourceExtension.toLowerCase();
  if (asset.originalMime === "image/heif") return ".heic";
  if (asset.originalMime === "image/png") return ".png";
  return ".jpg";
}

async function importAsset(asset, outputDirectory, folderLabel) {
  const inputPath = join(inputDirectory, `${asset.id}${extensionFor(asset)}`);
  const bytes = await readFile(inputPath);
  const contentHash = createHash("sha256").update(bytes).digest("hex");
  const decoded = asset.originalMime === "image/heif"
    ? await convert({ buffer: bytes, format: "JPEG", quality: 0.94 })
    : bytes;
  const image = sharp(decoded).rotate();
  const metadata = await image.metadata();
  const orientation = metadata.width && metadata.height
    ? metadata.width > metadata.height ? "landscape" : metadata.width < metadata.height ? "portrait" : "square"
    : "unknown";
  const localDirectory = join(workspace, "public", "drive", outputDirectory);
  const localFile = join(localDirectory, `${asset.id}.webp`);
  await mkdir(localDirectory, { recursive: true });
  await image.resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(localFile);
  return {
    id: asset.id,
    driveFileId: asset.driveFileId,
    sourceFolderId: asset.sourceFolderId,
    sourceFolderTitle: folderLabel,
    sourceName: asset.sourceName,
    originalMime: asset.originalMime,
    contentHash,
    orientation,
    localSrc: `/drive/${outputDirectory}/${asset.id}.webp`,
    authenticity: "verified-real",
    rights: "pending",
    publishStatus: "preview",
  };
}

const processAssets = [];
for (const asset of inventory.process) processAssets.push(await importAsset(asset, "process", "Four stages. One story."));

const units = [];
for (const group of inventory.units) {
  const files = [];
  for (const asset of group.files) files.push(await importAsset(asset, `units/${group.id}`, group.title));
  units.push({ id: group.id, title: group.title, sourceFolderId: group.sourceFolderId, files });
}

await writeFile(
  join(workspace, "lib", "generated-unit-process-assets.json"),
  `${JSON.stringify({ process: processAssets, units }, null, 2)}\n`,
);
console.log(`Imported ${processAssets.length} process images and ${units.reduce((count, group) => count + group.files.length, 0)} unit images.`);
