import type { CapabilitySlug, MediaAsset, ProjectArea } from "./site-types";

const sourceFolderId = "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS";

const sourceFiles = [
  ["1st & cover .HEIC", "1PtMwqsohnjKgpFZoukq5-xWpLG2Z3nLJ"],
  ["2nd.HEIC", "1zV9r6xH02r-jWUyukvmsVN_UMzhaVjE_"],
  ["3rd.HEIC", "1DTphNqAJhJyoaf87DuInu05K3CDjUaDv"],
  ["4th.HEIC", "153Cn-ENFwIRjWxOM9c7LBhmlxcccJz6i"],
  ["5th.HEIC", "1m9P-Vt8V3n9Dsdn9II8ji_vMIbVULEl4"],
  ["6.HEIC", "17EbABIbvfcI4CI4Tnz34qCHJMop45EEE"],
  ["7.HEIC", "1YW_ppjuQ42-VJZaToohGLjNILcG_rJIL"],
  ["8.HEIC", "1se5IiFty4Aq5gtpXLSWjBKmOM1gpvZsa"],
  ["9.HEIC", "1zNP89LynCQ8VHwChuAkXivPWrW5FxS7R"],
  ["10.HEIC", "1b_xRsfK6K7JY9F3mNpefA3PEFaIpjAHw"],
  ["11.HEIC", "16z4rMmYjLqZ1GvM-zxPw9jcxm0UfVF1D"],
  ["12.HEIC", "1jG-0eHu523k7aDqcPj9tqrRbyCYr_w44"],
  ["13.HEIC", "1s-6b3qF6sfSJi1PlqTk6yRH3XJ3y4A_L"],
] as const;

const areas: ProjectArea[] = [
  "cover",
  "rooms",
  "wall",
  "doors",
  "stairs",
  "reception",
  "reception-detail",
  "doors",
  "kitchen",
  "units",
  "wall",
  "bedroom",
  "detail",
];

const captions = [
  { en: "A dining wall where sculptural light and curved detailing establish the SODIC arrival.", ar: "حائط طعام تضع فيه الإضاءة النحتية والتفاصيل المنحنية ملامح الوصول إلى سوديك." },
  { en: "A composed dining room bringing timber, lighting and furniture into one rhythm.", ar: "غرفة طعام متناسقة تجمع الخشب والإضاءة والأثاث في إيقاع واحد." },
  { en: "Media joinery and dark timber set a calm focal wall.", ar: "تحدد نجارة الوسائط والخشب الداكن حائطاً محورياً هادئاً." },
  { en: "A timber-lined threshold tying the entry to the stair.", ar: "عتبة مكسوة بالخشب تصل المدخل بالسلم." },
  { en: "A stair flight framed by glass, timber and precise shadow gaps.", ar: "سلم تؤطره الزجاجات والخشب وفواصل الظل الدقيقة." },
  { en: "Vertical wall profiles and stone artwork shape the reception interior.", ar: "تشكل القطاعات الرأسية والعمل الحجري مساحة الاستقبال الداخلية." },
  { en: "A close view of the reception package, from fluted wall to crafted display.", ar: "لقطة قريبة لحزمة الاستقبال من الحائط المخدد إلى وحدة العرض المصنوعة بعناية." },
  { en: "Entry wall cladding turns circulation into a considered interior moment.", ar: "تحول تكسية حائط المدخل مسار الحركة إلى لحظة داخلية مدروسة." },
  { en: "A compact kitchen and adjoining door set resolved as one residential package.", ar: "مطبخ مدمج ومجموعة أبواب مجاورة حُسمت كحزمة سكنية واحدة." },
  { en: "Full-height joinery adds storage and display to the living room.", ar: "تضيف النجارة بارتفاع كامل التخزين والعرض إلى غرفة المعيشة." },
  { en: "Open shelving and wall panels balance function with a lighter seating zone.", ar: "توازن الأرفف المفتوحة وألواح الحائط بين الوظيفة ومنطقة جلوس أخف." },
  { en: "A bedroom headboard and wall package continuing the same timber language.", ar: "رأس سرير وحزمة حائط تواصل اللغة الخشبية نفسها." },
  { en: "A close wall detail showing the junction between veneer, lighting and fabric.", ar: "تفصيلة حائط قريبة توضح التقاء القشرة والإضاءة والقماش." },
] as const;

function capabilitiesFor(area: ProjectArea): CapabilitySlug[] {
  if (area === "kitchen") return ["kitchens", "custom-units"];
  if (area === "bedroom") return ["bedrooms", "custom-units"];
  if (area === "doors") return ["doors", "wall-cladding"];
  if (area === "stairs" || area === "wall" || area === "reception-detail") return ["wall-cladding", "custom-units"];
  return ["living-rooms", "custom-units"];
}

export const sodicLinkedMedia: MediaAsset[] = sourceFiles.map(([sourceName, driveFileId], index) => {
  const number = String(index + 1).padStart(2, "0");
  const id = `sodic-linked-${number}`;
  const area = areas[index];
  const caption = captions[index];

  return {
    id,
    src: `/drive/projects/selected/sodic-ahmed-elsheref-linked/sodic-linked-${number}.webp`,
    sourceFolder: "SODIC / Ahmed Sherif photo set",
    sourceFolderId,
    sourceName,
    projectSlug: "sodic-collaboration",
    sector: "residential-developments",
    capabilities: capabilitiesFor(area),
    stage: "finished",
    authenticity: "verified-real",
    rights: "approved",
    orientation: "square",
    quality: area === "cover" ? "hero" : "editorial",
    usage: "project",
    alt: caption,
    driveFileId,
    originalMime: "image/heic",
    derived: { webp: `/drive/projects/selected/sodic-ahmed-elsheref-linked/sodic-linked-${number}.webp` },
    publishStatus: "public",
    area,
  } satisfies MediaAsset;
});

export const sodicLinkedMediaIds = sodicLinkedMedia.map((asset) => asset.id);
