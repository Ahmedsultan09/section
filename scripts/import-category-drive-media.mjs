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

  // Wall cladding — CNC
  ["cladding-cnc-01", "1Agz6x9h41CQWD-UEGL3Q09fwH2USAInM", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2325.PNG", "image/jpeg", "cladding/cnc"],
  ["cladding-cnc-02", "1_tg92kR2qOHTrQFyAXfGF2ycs_J5_vXj", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2322.PNG", "image/png", "cladding/cnc"],
  ["cladding-cnc-03", "1BE28X5TQCOQd52DCnfLCxRJgarZkGx6O", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2320.PNG", "image/png", "cladding/cnc"],
  ["cladding-cnc-04", "1-IzL1L5Qa-JwNGe4DrCrFHvNmzQB0Gu-", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2318.PNG", "image/png", "cladding/cnc"],
  ["cladding-cnc-05", "1uE7zcAvG35zVvCR302WJqNdt_xML6KRI", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2316.PNG", "image/png", "cladding/cnc"],
  ["cladding-cnc-06", "1_wSsFSC_kYA094WDyAD7HlPjuWRKEEbW", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2314.PNG", "image/png", "cladding/cnc"],
  ["cladding-cnc-07", "1wr3rWFxeeF6Iga3T9Q0OPSSfGqTcCIAj", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_2312.PNG", "image/jpeg", "cladding/cnc"],
  ["cladding-cnc-08", "1vqnYhGbexAxktk-6ZCIjlyc6KNMgnKIg", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_0113.heif", "image/heif", "cladding/cnc"],
  ["cladding-cnc-09", "1-chxe8mQDoHAg2Rv_rgQPuwuxdkzfPbA", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_1987.heif", "image/heif", "cladding/cnc"],
  ["cladding-cnc-10", "109ZKKCzHbP5kE8utTi3Ww0MqiNpyHVaD", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "IMG_0805.heif", "image/heif", "cladding/cnc"],
  ["cladding-cnc-11", "18wepOnxnaEE1TsXNK8rUbYkHtvlYneRH", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "CAA6F07E-265E-4D21-9BA7-29E99D80E784.png", "image/png", "cladding/cnc"],
  ["cladding-cnc-12", "1VR4NVuQHMzXEE7Ww8zmQwqsMaQy9Cdad", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "7C5B9E60-6389-4053-B249-E325C7BADDDB.png", "image/png", "cladding/cnc"],
  ["cladding-cnc-13", "171gXuwod5BzvyV1pXDeGuAx-tVgNdqfV", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "F3B33140-0026-4EE2-92F6-EE1E1CB382F1.png", "image/png", "cladding/cnc"],
  ["cladding-cnc-14", "1oyBm-1BoM5r_3KshukuU7hinsGOwcmyz", "12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd", "arabesque.png", "image/png", "cladding/cnc"],

  // Wall cladding — melamine
  ["cladding-melamine-01", "1wgW8ffRjg_ITxbvVqL_5S18x1om1vYAE", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_2329.PNG", "image/png", "cladding/melamine"],
  ["cladding-melamine-02", "14Nmkp8qrJUqGDWg0VybduX9nsfu6NZUV", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0631.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-03", "1GiFXnnNGOAoMdB6BForJg2LlH1W2jiUX", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_2139.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-04", "1QqQq0O57VA6CzARe1ZTIaemdO1SuUs4e", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "AE0A724C-0C0C-44E4-BB50-F2E2B4423B60.PNG", "image/png", "cladding/melamine"],
  ["cladding-melamine-05", "1yeFEeT_yk5hWXOkldanXd3BGUuvCIkgy", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0210.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-06", "1CT3NTecN0xjqbjHdxtJ6C9oHx08yJSoI", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_7004.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-07", "1zHWfZ1hfUr5YXQyyAO94lz4C9SZTyxef", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0479.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-08", "1bdN5olItc1Pshcu93qK-kUPTDZzeIS1y", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0525.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-09", "1KpQgjQCo5TTPEcDKTCAMtnESgEWmeN0i", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0522.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-10", "1jGRQwaQVKL-_KGsTuOf4u5cyAnSEZ9n7", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0526.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-11", "1X6FDr7Hho94o-v4zZ5NKgyeC3WOBVMqt", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0103.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-12", "1QTj-GnmFPu5XQ5_h39Cn4dwZB3zsWDQ5", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_6958.HEIC", "image/heif", "cladding/melamine"],
  ["cladding-melamine-13", "13vd-C7Ddyw8rR_abmnRUZwREuPVwYmQS", "1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0", "IMG_0786.HEIC", "image/heif", "cladding/melamine"],

  // Wall cladding — veneer & painting
  ["cladding-veneer-painting-01", "19y1QqslNJpkXPC3bJ-z2cq4g-WZxtJ8v", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_2309.PNG", "image/png", "cladding/veneer-painting"],
  ["cladding-veneer-painting-02", "1DTZPbt_qnNwnqUG6tDJ_wJ-bViy2ytU8", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_2078.PNG", "image/png", "cladding/veneer-painting"],
  ["cladding-veneer-painting-03", "1Rq9Z7VfvlVf8fu9c0gIa_oHBEGAwqPp_", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_2011.HEIC", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-04", "1Sk9KGim8XEz_lvSvJrtNWjWI8UQs2YLY", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_1613.HEIC", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-05", "1mCQNUl6CSDuw4_UWj5GWxH6ReixV65ks", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_6990.HEIC", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-06", "1afoM0WRr_j10uY9kNIHxjyyYhlZfpT5f", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_4404.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-07", "125Bf4CgA4xARoX0YwCw2RVJMEVwFIiI0", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_9152.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-08", "1A2jgGnFFck6_jYxzwuV2imzlOJYoM-z4", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_4189.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-09", "1s1l0o7OCy1z52sP2mtyeD_ZGxqFjqmIQ", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_4499.jpeg", "image/jpeg", "cladding/veneer-painting"],
  ["cladding-veneer-painting-10", "1-Hn_ptQRHUET002c9z2BlebO53j4bolr", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_1284.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-11", "1oGy4gKhxPw8fT2H5-0rjg3SgB8e08ojV", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_1253.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-12", "1TvS1mXx8veAuGQrZAyK5nQqzFALOHEsk", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_1244.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-13", "1petY2eY7cdAiCkxcCXRu2Wk0xdHj_r8B", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_0655.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-14", "1lhShP17Xyk57RNETHFyBr7PwtBckWBf8", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "A8075502-5D0C-41A3-8FAC-0290486E5318.png", "image/png", "cladding/veneer-painting"],
  ["cladding-veneer-painting-15", "1CyPTKe-PSqEH7_6HCcZr_IqsTppKMUpP", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "9E31F52C-2452-46A8-AF5A-DA5018346B00.png", "image/png", "cladding/veneer-painting"],
  ["cladding-veneer-painting-16", "1kQyLGOYJKl5YzPehGY5q0_ZCuJ0km_Uy", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_6261.heif", "image/heif", "cladding/veneer-painting"],
  ["cladding-veneer-painting-17", "1o0i00p_xglYRvHYdUYDN9UApJIBcNB4_", "12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR", "IMG_0426.JPG", "image/jpeg", "cladding/veneer-painting"],

  // Dressing — complete the existing still-image set
  ["dressing-09", "1fYRcH5w_Rs4CcAgBOoEO8jHTnZCEwRaI", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0340.HEIC", "image/heif", "dressing"],
  ["dressing-10", "1lEw9I439xqdpOZf12Oo9fwYGOU5FXsmO", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0352.HEIC", "image/heif", "dressing"],
  ["dressing-11", "1f1TfkOPFBjpOjY4dwlH4b07SbUtMhj4a", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0342.HEIC", "image/heif", "dressing"],
  ["dressing-12", "1ZmLjpK_Ksj7ePAaaCt7AsoMlYujObwsJ", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0287.HEIC", "image/heif", "dressing"],
  ["dressing-13", "1bKRncA3QiCvOVaJJ8LdmIik4_w2tcAiG", "1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X", "IMG_0353.HEIC", "image/heif", "dressing"],
];

const workspace = process.cwd();
const temporaryDirectory = await mkdtemp(join(tmpdir(), "section-drive-import-"));
const requestedIds = new Set((process.env.IMPORT_CATEGORY_IDS ?? "").split(",").map((id) => id.trim()).filter(Boolean));
const records = [];
const seenHashes = new Set();

try {
  for (const [id, driveFileId, sourceFolderId, sourceName, originalMime, outputFolder] of assets) {
    if (requestedIds.size > 0 && !requestedIds.has(id)) continue;
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

  const existingRecords = requestedIds.size > 0
    ? JSON.parse(await readFile(join(workspace, "lib", "generated-category-drive-assets.json"), "utf8"))
    : [];
  const outputRecords = requestedIds.size > 0
    ? [...existingRecords.filter((record) => !requestedIds.has(record.id)), ...records]
    : records;

  await writeFile(
    join(workspace, "lib", "generated-category-drive-assets.json"),
    `${JSON.stringify(outputRecords, null, 2)}\n`,
  );
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
