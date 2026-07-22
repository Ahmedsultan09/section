import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import convert from "heic-convert";
import sharp from "sharp";

const roots = ["public/drive/partners", "public/drive/dressing", "public/drive/kitchens"];

for (const root of roots) {
  const files = await readdir(root);
  for (const file of files) {
    const extension = extname(file).toLowerCase();
    if (![".heic", ".heif", ".jpg", ".jpeg", ".png"].includes(extension)) continue;
    const source = join(root, file);
    const target = join(root, file.replace(/\.(heic|heif|jpe?g|png)$/i, ".webp"));
    const input = await readFile(source);
    const decoded = [".heic", ".heif"].includes(extension)
      ? await convert({ buffer: input, format: "JPEG", quality: 0.92 })
      : input;
    await sharp(decoded).rotate().resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toFile(target);
    process.stdout.write(`converted ${source} -> ${target}\n`);
  }
}
