import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();

function smoothstep(edge0, edge1, value) {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
}

async function createBrandMarks() {
  const source = join(root, "tmp", "brand-pdf", "logo-source.png");
  const crop = sharp(source).extract({ left: 1680, top: 1160, width: 1840, height: 440 });
  const { data, info } = await crop.raw().toBuffer({ resolveWithObject: true });
  const alpha = Buffer.alloc(info.width * info.height);

  for (let i = 0; i < info.width * info.height; i += 1) {
    const offset = i * info.channels;
    const lightness = Math.max(data[offset], data[offset + 1], data[offset + 2]);
    alpha[i] = Math.round(255 * smoothstep(18, 238, lightness));
  }

  await mkdir(join(root, "public", "brand"), { recursive: true });
  for (const [name, color] of [["section-black", [0, 0, 0]], ["section-white", [255, 255, 255]]]) {
    const rgba = Buffer.alloc(info.width * info.height * 4);
    for (let i = 0; i < info.width * info.height; i += 1) {
      const target = i * 4;
      rgba[target] = color[0];
      rgba[target + 1] = color[1];
      rgba[target + 2] = color[2];
      rgba[target + 3] = alpha[i] < 12 ? 0 : alpha[i];
    }
    await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim({ background: { r: color[0], g: color[1], b: color[2], alpha: 0 } })
      .resize({ width: 980, height: 220, fit: "inside", withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(join(root, "public", "brand", `${name}.png`));
  }
}

const partnerModes = {
  "partner-01.webp": { type: "dark" },
  "partner-02.webp": { type: "light" },
  "partner-03.webp": { type: "color", color: [166, 45, 33] },
  "partner-04.webp": { type: "light" },
  "partner-05.webp": { type: "dark" },
  "partner-06.webp": { type: "dark" },
  "partner-07.webp": { type: "light" },
  "partner-08.webp": { type: "dark" },
  "partner-09.webp": { type: "light" },
};

async function transparentPartnerLogos() {
  const sourceDir = join(root, "public", "drive", "partners");
  const outputDir = join(root, "public", "drive", "partners-transparent");
  await mkdir(outputDir, { recursive: true });

  for (const file of Object.keys(partnerModes)) {
    const mode = partnerModes[file];
    const { data, info } = await sharp(join(sourceDir, file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let i = 0; i < info.width * info.height; i += 1) {
      const offset = i * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const sourceAlpha = data[offset + 3] / 255;
      let keep = 1;

      if (mode.type === "dark") {
        const luma = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
        keep = smoothstep(100, 210, luma);
      } else {
        const background = mode.type === "light" ? [255, 255, 255] : mode.color;
        const distance = Math.sqrt(
          ((r - background[0]) ** 2) +
          ((g - background[1]) ** 2) +
          ((b - background[2]) ** 2),
        );
        keep = mode.type === "light" ? smoothstep(52, 142, distance) : smoothstep(42, 118, distance);
      }

      data[offset + 3] = Math.round(255 * sourceAlpha * keep);
    }

    const cleaned = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .resize({ width: 620, height: 250, fit: "inside", withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const metadata = await sharp(cleaned).metadata();
    const left = Math.floor((720 - metadata.width) / 2);
    const top = Math.floor((320 - metadata.height) / 2);
    await sharp({ create: { width: 720, height: 320, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([{ input: cleaned, left, top }])
      .png({ compressionLevel: 9 })
      .toFile(join(outputDir, file.replace(".webp", ".png")));
  }
}

async function convertMaterials() {
  const sourceDir = join(root, "tmp", "materials");
  const outputDir = join(root, "public", "drive", "materials");
  await mkdir(outputDir, { recursive: true });
  const files = await readdir(sourceDir);
  for (const file of files) {
    await sharp(join(sourceDir, file))
      .rotate()
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 })
      .toFile(join(outputDir, file.replace(/\.(png|jpe?g)$/i, ".webp")));
  }
}

await createBrandMarks();
await transparentPartnerLogos();
await convertMaterials();

process.stdout.write("Prepared brand marks, transparent partner logos, and material media.\n");
