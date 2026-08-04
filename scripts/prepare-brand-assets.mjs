import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();

function smoothstep(edge0, edge1, value) {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
}

// Some Drive logo exports contain a black matte around a circular mark. Remove
// only dark pixels connected to the canvas edge so dark details inside the
// actual mark remain untouched.
function removeEdgeConnectedDarkMatte(data, width, height) {
  const visited = new Uint8Array(width * height);
  const queue = [];
  const isDark = (x, y) => {
    const offset = ((y * width) + x) * 4;
    if (data[offset + 3] < 12) return false;
    const luma = (data[offset] * 0.2126) + (data[offset + 1] * 0.7152) + (data[offset + 2] * 0.0722);
    return luma < 52;
  };
  const enqueue = (x, y) => {
    const index = (y * width) + x;
    if (visited[index] || !isDark(x, y)) return;
    visited[index] = 1;
    queue.push(index);
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const index = queue[cursor];
    const x = index % width;
    const y = Math.floor(index / width);
    const offset = index * 4;
    data[offset + 3] = 0;
    if (x > 0) enqueue(x - 1, y);
    if (x < width - 1) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y < height - 1) enqueue(x, y + 1);
  }
}

function removeOutsideCircle(data, width, height) {
  const centerX = (width - 1) / 2;
  const centerY = (height - 1) / 2;
  const radius = Math.min(width, height) / 2;
  const radiusSquared = (radius + 1) ** 2;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const dx = x - centerX;
      const dy = y - centerY;
      if ((dx * dx) + (dy * dy) > radiusSquared) data[((y * width) + x) * 4 + 3] = 0;
    }
  }
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
  "partner-03.webp": { type: "color", color: [166, 45, 33], shape: "circle" },
  "partner-04.webp": { type: "light", shape: "circle" },
  "partner-05.webp": { type: "dark" },
  "partner-06.webp": { type: "dark" },
  "partner-07.webp": { type: "light" },
  "partner-08.webp": { type: "dark" },
  "partner-09.webp": { type: "light", shape: "circle" },
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

    removeEdgeConnectedDarkMatte(data, info.width, info.height);
    if (mode.shape === "circle") removeOutsideCircle(data, info.width, info.height);

    const cleaned = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .resize({ width: 620, height: 250, fit: "inside", withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const metadata = await sharp(cleaned).metadata();
    const left = Math.floor((720 - metadata.width) / 2);
    const top = Math.floor((320 - metadata.height) / 2);
    const outputPath = join(outputDir, file.replace(".webp", ".png"));
    if (mode.shape === "circle") {
      // Keep circular marks square so CSS contain sizing uses the actual mark,
      // rather than the wide 720×320 marquee canvas.
      await sharp(cleaned).png({ compressionLevel: 9 }).toFile(outputPath);
    } else {
      await sharp({ create: { width: 720, height: 320, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
        .composite([{ input: cleaned, left, top }])
        .png({ compressionLevel: 9 })
        .toFile(outputPath);
    }
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
