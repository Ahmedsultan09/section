import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import convert from "heic-convert";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const root = process.cwd();
const source = join(root, "tmp", "nocturne-drive");
const fontOutput = join(root, "app", "fonts");
const materialOutput = join(root, "public", "drive", "material-brands");
const sodicOutput = join(root, "public", "drive", "projects", "sodic-ahmed-elsheref");

await Promise.all([
  mkdir(fontOutput, { recursive: true }),
  mkdir(materialOutput, { recursive: true }),
  mkdir(sodicOutput, { recursive: true }),
]);

const records = [];

async function sha256(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

for (const name of ["brand-bold.woff2", "brand-light.woff2", "brand-variable.woff2"]) {
  const input = join(source, name);
  const output = join(fontOutput, name);
  await copyFile(input, output);
  records.push({ source: name, output: output.slice(root.length + 1).replaceAll("\\", "/"), sha256: await sha256(input) });
}

for (let index = 1; index <= 10; index += 1) {
  const stem = `material-brand-${String(index).padStart(2, "0")}`;
  const input = join(source, `${stem}${index === 5 ? ".jpg" : ".png"}`);
  const output = join(materialOutput, `${stem}.png`);
  await sharp(input)
    .rotate()
    .trim({ background: "#ffffff", threshold: 14 })
    .resize({ width: 900, height: 420, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(output);
  records.push({ source: `${stem}${index === 5 ? ".jpg" : ".png"}`, output: output.slice(root.length + 1).replaceAll("\\", "/"), sha256: await sha256(input) });
}

for (let index = 1; index <= 9; index += 1) {
  const stem = `sodic-${String(index).padStart(2, "0")}`;
  const input = join(source, `${stem}.heic`);
  const jpeg = await convert({ buffer: await readFile(input), format: "JPEG", quality: 0.92 });
  const image = sharp(jpeg).rotate().resize({ width: 1800, height: 1400, fit: "inside", withoutEnlargement: true });
  const webpOutput = join(sodicOutput, `${stem}.webp`);
  const avifOutput = join(sodicOutput, `${stem}.avif`);
  await Promise.all([
    image.clone().webp({ quality: 84, effort: 5 }).toFile(webpOutput),
    image.clone().avif({ quality: 55, effort: 5 }).toFile(avifOutput),
  ]);
  records.push({
    source: `${stem}.heic`,
    output: webpOutput.slice(root.length + 1).replaceAll("\\", "/"),
    avif: avifOutput.slice(root.length + 1).replaceAll("\\", "/"),
    sha256: await sha256(input),
  });
}

if (!ffmpegPath) throw new Error("ffmpeg-static did not provide a binary");

for (let index = 1; index <= 2; index += 1) {
  const stem = `sodic-${String(index).padStart(2, "0")}`;
  const input = join(source, `${stem}.mov`);
  const frame = join(source, `${stem}-poster.jpg`);
  const output = join(sodicOutput, `${stem}-video-poster.webp`);
  const result = spawnSync(ffmpegPath, ["-y", "-ss", "00:00:01.000", "-i", input, "-frames:v", "1", "-q:v", "2", frame], {
    encoding: "utf8",
  });
  if (result.status !== 0) throw new Error(result.stderr || `Could not create poster for ${stem}.mov`);
  await sharp(frame)
    .rotate()
    .resize({ width: 1800, height: 1400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(output);
  records.push({ source: `${stem}.mov`, output: output.slice(root.length + 1).replaceAll("\\", "/"), sha256: await sha256(input) });
}

const materialTiles = await Promise.all(
  Array.from({ length: 10 }, async (_, index) => {
    const label = String(index + 1).padStart(2, "0");
    const buffer = await sharp(join(materialOutput, `material-brand-${label}.png`))
      .resize({ width: 420, height: 210, fit: "contain", background: "#fbf5de" })
      .extend({ top: 42, bottom: 18, left: 18, right: 18, background: "#fbf5de" })
      .composite([{ input: Buffer.from(`<svg width="456" height="270"><text x="18" y="28" font-family="Arial" font-size="20" fill="#111">Material ${label}</text></svg>`), top: 0, left: 0 }])
      .png()
      .toBuffer();
    return { input: buffer, left: (index % 2) * 456, top: Math.floor(index / 2) * 270 };
  }),
);

await sharp({
  create: { width: 912, height: 1350, channels: 4, background: "#11110e" },
})
  .composite(materialTiles)
  .png()
  .toFile(join(source, "material-brands-contact-sheet.png"));

const sodicTiles = await Promise.all(
  Array.from({ length: 11 }, async (_, index) => {
    const isVideo = index >= 9;
    const label = isVideo ? `Video ${String(index - 8).padStart(2, "0")}` : `Photo ${String(index + 1).padStart(2, "0")}`;
    const file = isVideo
      ? join(sodicOutput, `sodic-${String(index - 8).padStart(2, "0")}-video-poster.webp`)
      : join(sodicOutput, `sodic-${String(index + 1).padStart(2, "0")}.webp`);
    const buffer = await sharp(file)
      .resize({ width: 420, height: 280, fit: "cover" })
      .extend({ top: 42, bottom: 18, left: 18, right: 18, background: "#11110e" })
      .composite([{ input: Buffer.from(`<svg width="456" height="340"><text x="18" y="28" font-family="Arial" font-size="20" fill="#fedd10">${label}</text></svg>`), top: 0, left: 0 }])
      .png()
      .toBuffer();
    return { input: buffer, left: (index % 2) * 456, top: Math.floor(index / 2) * 340 };
  }),
);

await sharp({
  create: { width: 912, height: 2040, channels: 4, background: "#050504" },
})
  .composite(sodicTiles)
  .png()
  .toFile(join(source, "sodic-contact-sheet.png"));

await writeFile(join(source, "generated-manifest.json"), `${JSON.stringify(records, null, 2)}\n`, "utf8");
process.stdout.write(`Prepared ${records.length} Drive-backed Nocturne assets.\n`);
