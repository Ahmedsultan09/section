import type { DriveAssetReference, MediaAsset } from "./site-types";

export const DRIVE_SOT_FOLDER_ID = "1J_E8PhUFAvRpUuIYrGL0XjwMU3c6V5uK";
export const SODIC_SOURCE_FOLDER_ID = "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS";
export const PEOPLE_SOURCE_FOLDER_ID = "1_gXLthKMbOmODh3n7X5nel79B8EYaH2d";
export const MATERIAL_BRANDS_SOURCE_FOLDER_ID = "1Zxpk16-Um3Y9pDDq99vuabCQYmssTt6a";

export type DriveLogo = DriveAssetReference & {
  id: string;
  name: string;
  src: string;
  preferredSurface: "light" | "dark";
};

export const materialBrandLogos: DriveLogo[] = [
  ["egger", "Egger", "17zkVnxD7b12afB4__TtrRkPLEzPwcIN1", "01", "ba74f930e36007b85d1cfa5c4de905f7f52471b73f7bc0a8d1b80eecce56b0cd", "light"],
  ["egypt-panel", "Egypt Panel", "1A1iPlQVbhfIn0BQ4AoRX2kmmg6aMltsU", "02", "fa4e0000aa4d429ecd1faef14c3a1bbff2466bea578767023c3c49d974e9223a", "light"],
  ["starwood", "Starwood", "1xS0yye2y21_7hWetvfjplEfUUbiD9Hdz", "03", "17fe07d2bcc7ad9ef51dddc66c9e3b280bde462f0c59b718be23a3f26e79f25f", "light"],
  ["kastamonu", "Kastamonu", "1Wz4F2syDGQIsEYSO3d9gBYbF18p98PS2", "04", "1a6ebd7cdaed117bb1492976af1c1ab1debeafae169d796335900b2690042cb4", "light"],
  ["gizir", "Gizir", "1v7gZJ2Zk8VdeagJWP4A-axZHfKb-h-Bl", "06", "7557d2f052e115352810d44533bff81700d08fe6831319c3e8ac010d65e0cd2f", "light"],
  ["salomil", "Salomil", "1qKfq6o8abkmM5FJU_hhGnmzvqAR_Blzt", "07", "6266e9987eb038b37e298d8cff62cba49f5fbe34d5f28aff4655f088e200fb5c", "light"],
  ["saviola", "Saviola", "1FiXNj8eA5ebTuoXVRr6i8G9NNH9bNG7D", "08", "832e86ef68f4b7490c5751829f0f344bcf7d22e5c80753dde6b004c0c1d2fdfb", "dark"],
  ["blum", "Blum", "1LAIjW26BAff8b_I-aiQu5_ti3ALz11BC", "09", "54ae10f7e0284511a4095fd32bf74148aeeff3ced24f185669206d547e7b6169", "light"],
  ["mesan", "Mesan Furniture Equipment", "1mEfssvpLyGIFKqXbfrhqIVDD4p8ZuT1w", "10", "3d08b59366ff360c03287d9439dda63698296afc4ed45b86ca32791a2fc4157e", "light"],
].map(([id, name, driveFileId, number, contentHash, preferredSurface]) => ({
  id,
  name,
  driveFileId,
  sourceFolderId: MATERIAL_BRANDS_SOURCE_FOLDER_ID,
  contentHash,
  approval: "approved" as const,
  src: `/drive/material-brands/material-brand-${number}.png`,
  preferredSurface: preferredSurface as "light" | "dark",
}));

const sodicSource = [
  ["01", "IMG_0524.HEIC", "1m9P-Vt8V3n9Dsdn9II8ji_vMIbVULEl4", "e9399c50590f7dc114aaaf3db7f2da6ddf76549b6eb559c2a2c7ea9edf817aac", "A timber staircase with glass balustrade", "سلم خشبي بدرابزين زجاجي"],
  ["02", "IMG_0522.HEIC", "1DTphNqAJhJyoaf87DuInu05K3CDjUaDv", "6c668e993ae9b3f41381e00fe2f4244d200566fc354ca9731f32b1806322b362", "Integrated timber television wall and cabinetry", "حائط تلفزيون وخزائن خشبية مدمجة"],
  ["03", "IMG_0515.HEIC", "1zNP89LynCQ8VHwChuAkXivPWrW5FxS7R", "53efb928669677a55785bcf228695c790ad981b1a8f49e2e21d54f03f2bf5d07", "Compact fitted kitchen and timber door", "مطبخ مدمج وباب خشبي"],
  ["04", "IMG_0518.HEIC", "1YW_ppjuQ42-VJZaToohGLjNILcG_rJIL", "637cc6365370aa399e713fe411965cef09cfd054b42314a624b1265434766d10", "Timber feature wall in a residential interior", "حائط خشبي مميز في مساحة سكنية"],
  ["05", "IMG_0520.HEIC", "1wcwLoJX-gAEEt2gyX2Bvg4hHDiNvzrSc", "9a601a9e12215cd95553e15d166478b57d72e1dffe5cfc4ccd0592a0f8ea15d3", "Dining area with coordinated timber details", "منطقة طعام بتفاصيل خشبية منسقة"],
  ["06", "IMG_0517.HEIC", "1zV9r6xH02r-jWUyukvmsVN_UMzhaVjE_", "ecee9c88211c34fd2d211252f747192b7c1be1c9c8dacc75a4de6a9658f91c84", "Residential dining room with fitted timber work", "غرفة طعام سكنية بأعمال خشبية مدمجة"],
  ["07", "IMG_0523.HEIC", "1MgSdmRUjs8QavgC-NVFbIOJWssbxGCfU", "d8b4d1c9e21d5e80871a9c3c352564167b787ff91caf67466b33331227d599af", "Full-height timber shelving and display wall", "مكتبة وحائط عرض خشبي بارتفاع كامل"],
  ["08", "IMG_0525.HEIC", "1se5IiFty4Aq5gtpXLSWjBKmOM1gpvZsa", "fdc5c5eb763d45d35b70c5ce66d054149a2d47eab08951e0c365fc354a4ba403", "Timber wall cladding along a residential hall", "تكسية حائط خشبية في ممر سكني"],
  ["09", "IMG_0526.HEIC", "153Cn-ENFwIRjWxOM9c7LBhmlxcccJz6i", "7bdcb6d49406a888c26122966ecac47cb54fefafdf3d6923b0751c97475484fe", "Timber cladding detail beside a staircase", "تفصيل تكسية خشبية بجوار سلم"],
] as const;

export const sodicMediaAssets: MediaAsset[] = sodicSource.map(([number, sourceName, driveFileId, contentHash, en, ar]) => ({
  id: `sodic-drive-${number}`,
  src: `/drive/projects/sodic-ahmed-elsheref/sodic-${number}.webp`,
  sourceFolder: "Sodic Ahmed elsheref",
  sourceFolderId: SODIC_SOURCE_FOLDER_ID,
  sourceName,
  projectSlug: "sodic-collaboration",
  sector: "residential-developments",
  capabilities: ["custom-units", "wall-cladding", "living-rooms"],
  stage: "finished",
  authenticity: "verified-real",
  rights: "approved",
  orientation: "portrait",
  quality: number === "06" ? "hero" : "editorial",
  usage: "project",
  alt: { en, ar },
  driveFileId,
  originalMime: "image/heic",
  contentHash,
  derived: {
    webp: `/drive/projects/sodic-ahmed-elsheref/sodic-${number}.webp`,
    avif: `/drive/projects/sodic-ahmed-elsheref/sodic-${number}.avif`,
  },
  publishStatus: "public",
}));

export const sodicVideoPosters = [
  {
    id: "sodic-video-01",
    driveFileId: "1sXahXE3x6Me9n5NO0-43VzHvsmi1AsAa",
    sourceFolderId: SODIC_SOURCE_FOLDER_ID,
    contentHash: "720d49f7052a3c5f3de90da5facf20652281e6f8bf0139ea1cf0b420a073e971",
    approval: "approved" as const,
    sourceName: "IMG_0168.MOV",
    poster: "/drive/projects/sodic-ahmed-elsheref/sodic-01-video-poster.webp",
  },
  {
    id: "sodic-video-02",
    driveFileId: "1Um3CARs8u0n3eeLvPx5TbWnpvFGbDln_",
    sourceFolderId: SODIC_SOURCE_FOLDER_ID,
    contentHash: "983380d2e21c3ffd476219ef5accea7b367e7807147e45d81b298d43c67bdc87",
    approval: "approved" as const,
    sourceName: "IMG_0202.MOV",
    poster: "/drive/projects/sodic-ahmed-elsheref/sodic-02-video-poster.webp",
  },
] satisfies Array<DriveAssetReference & { id: string; sourceName: string; poster: string }>;

export const siteContact = {
  phoneDisplay: "+20 127 233 3832",
  phoneHref: "tel:+201272333832",
  instagramLabel: "@sectionfurniture",
  instagramHref: "https://www.instagram.com/sectionfurniture/",
  showroom: {
    en: "Silver Star Downtown Mall, New Cairo",
    ar: "سيلفر ستار داون تاون مول، القاهرة الجديدة",
  },
  factory: {
    en: "Trolly Street, El-Marg, Cairo",
    ar: "شارع الترولي، المرج، القاهرة",
  },
} as const;
