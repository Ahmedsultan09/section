import sharp from "sharp";

const [input, output = "public/og-showroom.jpg"] = process.argv.slice(2);
if (!input) throw new Error("Usage: node scripts/create-og.mjs <input> [output]");

const overlay = Buffer.from(`
  <svg width="1680" height="945" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#000" stop-opacity=".72"/>
        <stop offset=".62" stop-color="#000" stop-opacity=".05"/>
      </linearGradient>
    </defs>
    <rect width="1680" height="945" fill="url(#shade)"/>
    <rect x="86" y="102" width="18" height="132" fill="#FEDD10"/>
    <text x="132" y="205" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="126" font-weight="800" letter-spacing="-8">SECTION</text>
    <text x="94" y="742" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="62" font-weight="700">MADE WITH WOOD.</text>
    <rect x="91" y="770" width="800" height="78" fill="#FEDD10"/>
    <text x="112" y="829" fill="#000000" font-family="Arial, sans-serif" font-size="48" font-weight="700">BUILT FOR AMBITIOUS SPACES.</text>
  </svg>
`);

await sharp(input)
  .resize(1680, 945, { fit: "cover" })
  .composite([{ input: overlay }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(output);

process.stdout.write(`${output}\n`);
