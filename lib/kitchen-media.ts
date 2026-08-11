import type { MediaAsset } from "./site-types";

type KitchenFile = {
  set: "01" | "02" | "03" | "04" | "05";
  locationEn: string;
  locationAr: string;
  folderId: string;
  sourceFolder: string;
  number: number;
  id: string;
  driveFileId: string;
  sourceName: string;
  originalMime: string;
  orientation: MediaAsset["orientation"];
  reference?: boolean;
};

const kitchenFiles: KitchenFile[] = [
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)", number: 1, id: "kitchen-01-01", driveFileId: "12pf2SpwL6R2k-j40NFvBSdUd_-nuKQHM", sourceName: "1.PNG", originalMime: "image/jpeg", orientation: "landscape" },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)", number: 2, id: "kitchen-01-02", driveFileId: "1ak1pREO34BmtMntEBWo8cJ7jYn_RS7ki", sourceName: "2.PNG", originalMime: "image/png", orientation: "portrait" },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)", number: 3, id: "kitchen-01-03", driveFileId: "1bMQ4Blod_mQAzzM-D6CtdJyN-hCY960h", sourceName: "3.PNG", originalMime: "image/png", orientation: "portrait" },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)", number: 4, id: "kitchen-01-04", driveFileId: "1r3k6rUhOa32JJ41h8qYbkyn8SlSlITlp", sourceName: "4.PNG", originalMime: "image/png", orientation: "portrait" },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)", number: 5, id: "kitchen-01-05", driveFileId: "18xePK2OLwR42VvpiCk8oTl1jryEPw-x8", sourceName: "5.PNG", originalMime: "image/png", orientation: "portrait" },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)", number: 6, id: "kitchen-01-06", driveFileId: "15aa3bVnj0p_VubvwkPC3vlfkx4B6kCm0", sourceName: "6.PNG", originalMime: "image/png", orientation: "portrait" },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound) / 3d", number: 1, id: "kitchen-01-ref-01", driveFileId: "1lUK_NphKtp-tou2G70C7JscxJtLA4Ksx", sourceName: "8983a9b4-701f-4aa1-808f-12e6f7ea15ef.jpg", originalMime: "image/jpeg", orientation: "portrait", reference: true },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound) / 3d", number: 2, id: "kitchen-01-ref-02", driveFileId: "1nCNk10O6KnFVGuLt45SukxlKOlkfZZqJ", sourceName: "abb3fe2b-facf-4b22-b615-002f67568363.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },
  { set: "01", locationEn: "Azad Compound", locationAr: "كمبوند آزاد", folderId: "1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP", sourceFolder: "Kitchens / Kitchen 1 (Azad Compound) / 3d", number: 3, id: "kitchen-01-ref-03", driveFileId: "1eFsy7oLVplnz0SV3Gm75joBXRbq65sF7", sourceName: "dc1a5bb6-a088-4f25-bf07-524c36e8c73d.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },

  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 1, id: "kitchen-02-01", driveFileId: "1v6izcMj2uzniinAbdyiYPRhMSKJeG2Au", sourceName: "1.png", originalMime: "image/png", orientation: "portrait" },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 2, id: "kitchen-02-02", driveFileId: "1kmc8OOs0sC6JwIk3qEq3YmV8EWayMVmf", sourceName: "2.png", originalMime: "image/png", orientation: "portrait" },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 3, id: "kitchen-02-03", driveFileId: "10TDx4VQXqzPVXAX49YrWpvgzEJBVICN_", sourceName: "3.png", originalMime: "image/png", orientation: "portrait" },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 4, id: "kitchen-02-04", driveFileId: "1uXNXtZT8Ce7f2O_BhY6CQgHH1vRTAHf1", sourceName: "4.png", originalMime: "image/png", orientation: "portrait" },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 5, id: "kitchen-02-05", driveFileId: "1_HcWBfAGHv84a4G0lis9l4mkwMPU2P4a", sourceName: "5.png", originalMime: "image/png", orientation: "portrait" },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 1, id: "kitchen-02-ref-01", driveFileId: "1rO8WGy4WubHyOjyWGD0WofIRCfB8VayI", sourceName: "Design 3d 01.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 2, id: "kitchen-02-ref-02", driveFileId: "10819BvNKzsMfxkPho7FiGZMskyOFnxaT", sourceName: "Design 3d 02.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },
  { set: "02", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw", sourceFolder: "Kitchens / Kitchen 2 (New Cairo)", number: 3, id: "kitchen-02-ref-03", driveFileId: "11yb5QCp9uONppPgxANDBLSWvCOS8MT0C", sourceName: "Design 3d 03.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },

  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 1, id: "kitchen-03-01", driveFileId: "1unJIg7XCihv18r1NRtyo_xmoRb-Z2SMh", sourceName: "1.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 2, id: "kitchen-03-02", driveFileId: "1AxQ-G15MQBDKXYKymMl45LHAYyGnHoD3", sourceName: "2.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 3, id: "kitchen-03-03", driveFileId: "1JlOGsxhMJmGn663psM6ElTybOcZGtl1J", sourceName: "3.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 4, id: "kitchen-03-04", driveFileId: "1wSL7gH1SBlnQDguOhfJqk2RdFsYws5eO", sourceName: "4.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 5, id: "kitchen-03-05", driveFileId: "1GD4S5-GUeU4SHeBW40KLmi-gJm7mGjd5", sourceName: "5.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 6, id: "kitchen-03-06", driveFileId: "1fm9thsUactR3BmEXKxZC7SuDsJ44eImx", sourceName: "6.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 7, id: "kitchen-03-07", driveFileId: "1yZ_Hh6iBOD_V-iahLabsybTNL6g6XYT7", sourceName: "7.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "03", locationEn: "New Cairo", locationAr: "القاهرة الجديدة", folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU", sourceFolder: "Kitchens / Kitchen 3 (New Cairo)", number: 8, id: "kitchen-03-08", driveFileId: "1MiqzILdZIhAYIichI46uxTMb5vOBPL3m", sourceName: "8.heif", originalMime: "image/heif", orientation: "portrait" },

  { set: "04", locationEn: "Hyde Park", locationAr: "هايد بارك", folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t", sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)", number: 1, id: "kitchen-04-01", driveFileId: "18uQ4HdpAkohOCsIvMCae9HcHuc6ZYqfL", sourceName: "1.png", originalMime: "image/png", orientation: "landscape" },
  { set: "04", locationEn: "Hyde Park", locationAr: "هايد بارك", folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t", sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)", number: 2, id: "kitchen-04-02", driveFileId: "1AwBEowwtSv51_gResny_wItqqWTqpTEw", sourceName: "2.png", originalMime: "image/png", orientation: "landscape" },
  { set: "04", locationEn: "Hyde Park", locationAr: "هايد بارك", folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t", sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)", number: 3, id: "kitchen-04-03", driveFileId: "1deym7-BZRB5HsvTLA9P0z9Hpt1csHZTK", sourceName: "3.heif", originalMime: "image/heif", orientation: "portrait" },
  { set: "04", locationEn: "Hyde Park", locationAr: "هايد بارك", folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t", sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)", number: 4, id: "kitchen-04-04", driveFileId: "1at1I3jvFVhaNtbA8-fvPAbTZDwdXCU6q", sourceName: "4.heif", originalMime: "image/heif", orientation: "landscape" },
  { set: "04", locationEn: "Hyde Park", locationAr: "هايد بارك", folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t", sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)", number: 5, id: "kitchen-04-05", driveFileId: "1mh6bEWV1lcQbU6LNllM-gpEFEqZjQTp6", sourceName: "5.heif", originalMime: "image/heif", orientation: "portrait" },

  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 1, id: "kitchen-05-01", driveFileId: "1E5hOa3jS7kZrc9KL-O7WSBEIn_yW9dRS", sourceName: "1.png", originalMime: "image/png", orientation: "portrait" },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 2, id: "kitchen-05-02", driveFileId: "1404XIGLSEfR10-8HZyI1omrsVKCF0jM6", sourceName: "2.png", originalMime: "image/png", orientation: "portrait" },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 3, id: "kitchen-05-03", driveFileId: "15PX6xQLTHHcwgw-a_p9uviBgz7ZCf-8w", sourceName: "3.png", originalMime: "image/png", orientation: "landscape" },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 4, id: "kitchen-05-04", driveFileId: "1y5OA8MBhG1Y-W1V7Dt3_qkNQjiAAxuit", sourceName: "4.png", originalMime: "image/png", orientation: "landscape" },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 5, id: "kitchen-05-05", driveFileId: "1ns1lkp1G3f2nQrT1Mbydl0-M_galEATA", sourceName: "5.png", originalMime: "image/png", orientation: "landscape" },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 1, id: "kitchen-05-ref-01", driveFileId: "1UWAIYhLbV-bVgDKxJrVksyWtGBcoNooa", sourceName: "Design 3d 01.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 2, id: "kitchen-05-ref-02", driveFileId: "1qsZC4zzyb9JK3r-HIm6K1G8HtYt9bBiD", sourceName: "Design 3d 02.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },
  { set: "05", locationEn: "Obour City", locationAr: "مدينة العبور", folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf", sourceFolder: "Kitchens / Kitchen 5 (Obour City)", number: 3, id: "kitchen-05-ref-03", driveFileId: "14i-MedS-zcdHCunt_QIoWywD7i3VrLqc", sourceName: "Design 3d 03.jpg", originalMime: "image/jpeg", orientation: "landscape", reference: true },
];

function arabicDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
}

export const kitchenMediaAssets: MediaAsset[] = kitchenFiles.map((file) => {
  const label = file.reference ? `3D reference ${file.number}` : `photo ${file.number}`;
  const arabicLabel = file.reference ? `مرجع ثلاثي الأبعاد ${arabicDigits(file.number)}` : `الصورة ${arabicDigits(file.number)}`;
  return {
    id: file.id,
    src: `/drive/kitchens/${file.id}.webp`,
    sourceFolder: file.sourceFolder,
    sourceFolderId: file.folderId,
    sourceName: file.sourceName,
    projectSlug: `kitchen-${file.set}`,
    capabilities: ["kitchens"],
    stage: file.reference ? "detail" : "finished",
    authenticity: file.reference ? "unknown" : "verified-real",
    rights: "pending",
    orientation: file.orientation,
    quality: file.reference ? "reference" : "editorial",
    usage: "project",
    alt: {
      en: `Kitchen ${file.set} — ${file.locationEn} — ${label}`,
      ar: `المطبخ ${file.set.replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])} — ${file.locationAr} — ${arabicLabel}`,
    },
    driveFileId: file.driveFileId,
    originalMime: file.originalMime,
    derived: { webp: `/drive/kitchens/${file.id}.webp` },
    publishStatus: "preview",
    area: "kitchen",
  };
});
