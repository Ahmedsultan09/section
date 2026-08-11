import type { CollectionPiece, Locale, PartnerLogo } from "./site-types";
import { driveSrc } from "./media-manifest";
import generatedDressingDriveAssets from "./generated-dressing-drive-assets.json";
import generatedDoorsDriveAssets from "./generated-doors-drive-assets.json";
import generatedLivingDriveAssets from "./generated-living-drive-assets.json";
import generatedUnitProcessAssets from "./generated-unit-process-assets.json";

function driveSequence(prefix: string, count: number) {
  return Array.from({ length: count }, (_, index) => driveSrc(`${prefix}-${String(index + 1).padStart(2, "0")}`));
}

const dressingRoomSeries = [
  {
    folderName: "Dressing 1 (sodic vilette)",
    folderId: "1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w",
    slug: "dressing-1-sodic-villette",
    title: { en: "Dressing 1 — SODIC Villette", ar: "غرفة الملابس ١ — سوديك فيليت" },
  },
  {
    folderName: "Dressing 2 (Playa)",
    folderId: "1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-",
    slug: "dressing-2-playa",
    title: { en: "Dressing 2 — Playa", ar: "غرفة الملابس ٢ — بلايا" },
  },
  {
    folderName: "Dressing 3 (sodic)",
    folderId: "1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP",
    slug: "dressing-3-sodic",
    title: { en: "Dressing 3 — SODIC", ar: "غرفة الملابس ٣ — سوديك" },
  },
  {
    folderName: "Dressing 4 (New Cairo)",
    folderId: "1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs",
    slug: "dressing-4-new-cairo",
    title: { en: "Dressing 4 — New Cairo", ar: "غرفة الملابس ٤ — القاهرة الجديدة" },
  },
] as const;

const dressingRoomPieces: CollectionPiece[] = dressingRoomSeries.map((series) => ({
  slug: series.slug,
  collection: "dressing-rooms",
  title: series.title,
  story: {
    en: "A Drive-supplied dressing-room sequence preserved in the source folder order.",
    ar: "تسلسل صور غرفة ملابس مورّد من Drive مع الحفاظ على ترتيب مجلد المصدر.",
  },
  application: { en: "Dressing room reference", ar: "مرجع غرفة ملابس" },
  scope: { en: "Wardrobes, storage and joinery", ar: "خزائن وتخزين وأعمال نجارة" },
  media: generatedDressingDriveAssets
    .filter((asset) => asset.sourceFolderName === series.folderName)
    .sort((a, b) => (a.imageOrder ?? 0) - (b.imageOrder ?? 0))
    .map((asset) => driveSrc(asset.id)),
  sourceFolderIds: [series.folderId],
  status: "preview",
}));

const doorGalleryPiece: CollectionPiece = {
  slug: "doors-gallery",
  collection: "doors",
  title: { en: "Doors", ar: "الأبواب" },
  story: {
    en: "The complete Doors sequence is shown as one combined gallery because the source folder has no subcategories.",
    ar: "يُعرض تسلسل الأبواب كاملاً في معرض واحد لأن مجلد المصدر لا يحتوي على فئات فرعية.",
  },
  application: { en: "Architectural door sets", ar: "مجموعات أبواب معمارية" },
  scope: { en: "18 ordered Drive-supplied photographs", ar: "١٨ صورة موردة من Drive بالترتيب" },
  media: generatedDoorsDriveAssets
    .sort((a, b) => a.imageOrder - b.imageOrder)
    .map((asset) => driveSrc(asset.id)),
  sourceFolderIds: ["1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh"],
  status: "preview",
};

const livingSpaceSeries = [
  { projectOrder: 1, folderName: "Living space 01", folderId: "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx", slug: "living-space-01", title: { en: "Living Space 01", ar: "مساحة المعيشة ٠١" } },
  { projectOrder: 2, folderName: "Living space 02", folderId: "1uhkdfxII741nyF3BIKKQod7XRBJC5727", slug: "living-space-02", title: { en: "Living Space 02", ar: "مساحة المعيشة ٠٢" } },
  { projectOrder: 3, folderName: "Living space 03", folderId: "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS", slug: "living-space-03", title: { en: "Living Space 03", ar: "مساحة المعيشة ٠٣" } },
] as const;

const livingSpacePieces: CollectionPiece[] = livingSpaceSeries.map((series) => ({
  slug: series.slug,
  collection: "living-rooms",
  title: series.title,
  story: {
    en: `Living Spaces project ${String(series.projectOrder).padStart(2, "0")} shown in the numbered order supplied in Drive.`,
    ar: `مشروع مساحة المعيشة ${String(series.projectOrder).padStart(2, "0")} معروض بالترتيب المرقم المورّد في Drive.`,
  },
  application: { en: "Residential living space", ar: "مساحة معيشة سكنية" },
  scope: { en: "Ordered project photographs", ar: "صور المشروع بالترتيب" },
  media: generatedLivingDriveAssets
    .filter((asset) => asset.role === "gallery" && asset.sourceFolderName === series.folderName)
    .sort((a, b) => (a.imageOrder ?? 0) - (b.imageOrder ?? 0))
    .map((asset) => driveSrc(asset.id)),
  sourceFolderIds: [series.folderId],
  status: "preview",
}));

function kitchenReferenceTags(prefix: string, count: number) {
  return Object.fromEntries(
    Array.from({ length: count }, (_, index) => [
      driveSrc(`${prefix}-${String(index + 1).padStart(2, "0")}`),
      { en: "3D Reference", ar: "مرجع ثلاثي الأبعاد" },
    ]),
  );
}

const kitchenPieces: CollectionPiece[] = [
  {
    slug: "kitchen-01",
    collection: "kitchens",
    title: { en: "Kitchen 01", ar: "المطبخ ٠١" },
    location: { en: "— Azad Compound", ar: "— كمبوند آزاد" },
    story: { en: "", ar: "" },
    application: { en: "Residential kitchen", ar: "مطبخ سكني" },
    scope: { en: "Drive-supplied project photographs", ar: "صور مشروع موردة من Drive" },
    media: driveSequence("kitchen-01", 6),
    sourceFolderIds: ["1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv"],
    status: "preview",
  },
  {
    slug: "kitchen-02",
    collection: "kitchens",
    title: { en: "Kitchen 02", ar: "المطبخ ٠٢" },
    location: { en: "— New Cairo", ar: "— القاهرة الجديدة" },
    story: { en: "The five supplied project photographs are followed by the client’s 3D reference views.", ar: "تتبع صور المشروع الخمس الصور المرجعية ثلاثية الأبعاد الموردة من العميل." },
    application: { en: "Residential kitchen", ar: "مطبخ سكني" },
    scope: { en: "Drive-supplied project photographs", ar: "صور مشروع موردة من Drive" },
    media: [...driveSequence("kitchen-02", 5), ...driveSequence("kitchen-02-ref", 3)],
    mediaTags: kitchenReferenceTags("kitchen-02-ref", 3),
    sourceFolderIds: ["1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw"],
    status: "preview",
  },
  {
    slug: "kitchen-03",
    collection: "kitchens",
    title: { en: "Kitchen 03", ar: "المطبخ ٠٣" },
    location: { en: "— New Cairo", ar: "— القاهرة الجديدة" },
    story: { en: "An eight-image New Cairo kitchen sequence, kept in the numbered Drive order.", ar: "تسلسل من ثماني صور لمطبخ في القاهرة الجديدة، مع الحفاظ على الترتيب المرقم في Drive." },
    application: { en: "Made-to-fit kitchen", ar: "مطبخ مصمم للمقاس" },
    scope: { en: "Drive-supplied project photographs", ar: "صور مشروع موردة من Drive" },
    media: driveSequence("kitchen-03", 8),
    sourceFolderIds: ["1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU"],
    status: "preview",
  },
  {
    slug: "kitchen-04",
    collection: "kitchens",
    title: { en: "Kitchen 04", ar: "المطبخ ٠٤" },
    location: { en: "— Hyde Park", ar: "— هايد بارك" },
    story: { en: "The five numbered Hyde Park photographs are shown; the remaining source-folder images are excluded.", ar: "تُعرض صور هايد بارك الخمس المرقمة، مع استبعاد الصور المتبقية من مجلد المصدر." },
    application: { en: "Residential development", ar: "مشروع سكني" },
    scope: { en: "Drive-supplied project photographs", ar: "صور مشروع موردة من Drive" },
    media: driveSequence("kitchen-04", 5),
    sourceFolderIds: ["1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t"],
    status: "preview",
  },
  {
    slug: "kitchen-05",
    collection: "kitchens",
    title: { en: "Kitchen 05", ar: "المطبخ ٠٥" },
    location: { en: "— Obour City", ar: "— مدينة العبور" },
    story: { en: "The five supplied project photographs are followed by the client’s 3D reference views.", ar: "تتبع صور المشروع الخمس الصور المرجعية ثلاثية الأبعاد الموردة من العميل." },
    application: { en: "Residential kitchen", ar: "مطبخ سكني" },
    scope: { en: "Drive-supplied project photographs", ar: "صور مشروع موردة من Drive" },
    media: [...driveSequence("kitchen-05", 5), ...driveSequence("kitchen-05-ref", 3)],
    mediaTags: kitchenReferenceTags("kitchen-05-ref", 3),
    sourceFolderIds: ["1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf"],
    status: "preview",
  },
];

export const collectionPieces: CollectionPiece[] = [
  ...kitchenPieces,
  { slug: "cnc-cladding", collection: "wall-cladding", title: { en: "CNC CLADDING", ar: "تكسية CNC" }, story: { en: "CNC-routed wall panels and sculpted feature surfaces shaped from a precise digital-to-built workflow.", ar: "ألواح حوائط وأسطح مميزة مشغلة بتقنية CNC ضمن مسار دقيق من التصميم الرقمي إلى التنفيذ." }, application: { en: "CNC-routed feature walls", ar: "حوائط مميزة مشغلة بتقنية CNC" }, scope: { en: "CNC wall cladding / sculpted panels", ar: "تكسية حوائط CNC / ألواح منحوتة" }, media: driveSequence("cladding-cnc", 14), sourceFolderIds: ["12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd"], status: "preview" },
  { slug: "melamine-cladding", collection: "wall-cladding", title: { en: "MELAMINE CLADDING", ar: "تكسية ميلامين" }, story: { en: "Warm, durable melamine surfaces organized into clean wall planes, reveals and built-in storage lines.", ar: "أسطح ميلامين دافئة ومتينة تتنظم في مستويات حائط واضحة وفواصل وخطوط تخزين مدمج." }, application: { en: "Residential and hospitality wall systems", ar: "أنظمة حوائط سكنية وفندقية" }, scope: { en: "Melamine wall cladding / fitted joinery", ar: "تكسية ميلامين / نجارة مدمجة" }, media: driveSequence("cladding-melamine", 13), sourceFolderIds: ["1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0"], status: "preview" },
  { slug: "veneer-painting-cladding", collection: "wall-cladding", title: { en: "VENEER & PAINTING CLADDING", ar: "تكسية القشرة والدهان" }, story: { en: "Natural veneer grain and painted profiles brought together for layered, architectural wall compositions.", ar: "تجتمع عروق القشرة الطبيعية مع القطاعات المدهونة لتكوين حوائط معمارية متعددة الطبقات." }, application: { en: "Feature walls, doors and room envelopes", ar: "حوائط مميزة وأبواب وغلاف الغرفة" }, scope: { en: "Veneer and painted wall cladding", ar: "تكسية حوائط بالقشرة والدهان" }, media: driveSequence("cladding-veneer-painting", 17).filter((src) => src !== driveSrc("cladding-veneer-painting-02")), sourceFolderIds: ["12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR"], status: "preview" },
  ...dressingRoomPieces,
  doorGalleryPiece,
  ...livingSpacePieces,
  { slug: "bedroom-study-a", collection: "bedrooms", title: { en: "Bedroom Study 01", ar: "دراسة غرفة نوم ٠١" }, story: { en: "A coordinated bedroom package documented across fitted storage, furniture and wall details.", ar: "حزمة غرفة نوم متناسقة موثقة عبر التخزين المدمج والأثاث وتفاصيل الحوائط." }, application: { en: "Residential bedroom", ar: "غرفة نوم سكنية" }, scope: { en: "Bedroom furniture, joinery and fitting", ar: "أثاث غرفة نوم ونجارة وتركيب" }, media: Array.from({ length: 11 }, (_, index) => driveSrc(`bedroom-a-${String(index + 1).padStart(2, "0")}`)), sourceFolderIds: ["10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j"], status: "preview" },
  { slug: "bedroom-study-b", collection: "bedrooms", title: { en: "Bedroom Study 02", ar: "دراسة غرفة نوم ٠٢" }, story: { en: "A second bedroom study showing the room as one composed package rather than isolated furniture pieces.", ar: "دراسة ثانية لغرفة نوم تعرض المساحة كحزمة متكاملة بدلاً من قطع أثاث منفصلة." }, application: { en: "Residential bedroom", ar: "غرفة نوم سكنية" }, scope: { en: "Bedroom furniture, joinery and fitting", ar: "أثاث غرفة نوم ونجارة وتركيب" }, media: Array.from({ length: 7 }, (_, index) => driveSrc(`bedroom-b-${String(index + 1).padStart(2, "0")}`)), sourceFolderIds: ["10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp"], status: "preview" },
  ...[
    ["materials-finishes", "finish-study", "Finish Study", "دراسة تشطيب", "/assets/891416_45535.jpg"],
  ].map(([collection, slug, en, ar, image]) => ({ slug, collection, title: { en, ar }, story: { en: "A selected SECTION study showing how one crafted element is coordinated with the wider interior.", ar: "دراسة مختارة من SECTION توضح كيف ينسق العنصر المصنوع مع المساحة الداخلية كاملة." }, application: { en: "Made-to-fit interior", ar: "عنصر داخلي مصمم للمقاس" }, scope: { en: "Design development, making and fitting", ar: "تطوير تصميم وتصنيع وتركيب" }, media: [image], sourceFolderIds: [], status: "preview" } as CollectionPiece)),
  ...generatedUnitProcessAssets.units.map((group) => {
    const copy = {
      "tv-unit": {
        title: { en: "TV Units", ar: "وحدات التلفزيون" },
        story: { en: "A complete TV-unit reference set showing the full range of built-in media and storage details.", ar: "مجموعة مرجعية كاملة لوحدات التلفزيون تعرض نطاق تفاصيل الوسائط والتخزين المدمج." },
      },
      "bathroom-units": {
        title: { en: "Bathroom Units", ar: "وحدات الحمامات" },
        story: { en: "Bathroom-unit references gathered as one category, with every supplied view available to explore.", ar: "مراجع وحدات الحمامات مجمعة في فئة واحدة مع إتاحة كل الصور الموردة للاستكشاف." },
      },
      "custom-units": {
        title: { en: "Custom Units", ar: "الوحدات المخصصة" },
        story: { en: "Purpose-built unit references covering the supplied custom storage and display pieces.", ar: "مراجع لوحدات مصممة لغرض محدد تشمل قطع التخزين والعرض المخصصة الموردة." },
      },
    }[group.id as "tv-unit" | "bathroom-units" | "custom-units"];
    if (!copy) throw new Error(`Unsupported unit group: ${group.id}`);
    return {
      slug: group.id,
      collection: "custom-units",
      title: copy.title,
      story: copy.story,
      application: { en: group.title.replace(/^\d+-/, ""), ar: group.title.replace(/^\d+-/, "") },
      scope: { en: `${group.files.length} supplied project photographs`, ar: `${group.files.length} صورة موردة من المشروع` },
      media: group.files.map((file) => file.localSrc),
      sourceFolderIds: [group.sourceFolderId],
      status: "preview",
    } satisfies CollectionPiece;
  }),
];

export const partnerLogos: PartnerLogo[] = [
  { id: "karim-magdy", name: "Karim Magdy", src: "/drive/partners-transparent/partner-01.png", driveFileId: "1IiQg5vYq1_OJQ4qMskBPi5tO3L2LL7bo", kind: "collaborator", preferredSurface: "dark", approval: "preview" },
  { id: "taj", name: "Taj Design House", src: "/drive/partners-transparent/partner-02.png", driveFileId: "1mwUeY1oHD95mEIMQE_lz4qJiKzevsnbP", kind: "collaborator", preferredSurface: "light", approval: "preview" },
  { id: "mys", name: "MYS", src: "/drive/partners-transparent/partner-03.png", driveFileId: "1QrmYNK6hGxTetEZSQSWGcTBzsjd5LgF4", kind: "collaborator", preferredSurface: "dark", approval: "preview" },
  { id: "nawara", name: "Nawara — Alaa Ezzat", src: "/drive/partners-transparent/partner-04.png", driveFileId: "1zSKp_VH6g6s3Hxxt5LzjQR0jGhkStk_o", kind: "collaborator", preferredSurface: "light", approval: "preview" },
  { id: "mai-saad", name: "Mai Saad Designs", src: "/drive/partners-transparent/partner-05.png", driveFileId: "1fGnufPbJE1ehgO58NgssAFAGqSygkJEy", kind: "collaborator", preferredSurface: "dark", approval: "preview" },
  { id: "ahmed-elsheref", name: "Ahmed Elsheref Designs", src: "/drive/partners-transparent/partner-06.png", driveFileId: "1-BcvpWLz8KUwOR7uwWLMf-gBMyBRNbXs", kind: "collaborator", preferredSurface: "dark", approval: "approved", projectSlugs: ["sodic-collaboration"] },
  { id: "ra", name: "RA Interior Design", src: "/drive/partners-transparent/partner-07.png", driveFileId: "1Jc9w8yMxhyAzNDk-_dKTPitLaLlfUIy3", kind: "collaborator", preferredSurface: "light", approval: "preview" },
  { id: "vento", name: "Vento Designs", src: "/drive/partners-transparent/partner-08.png", driveFileId: "1kkrKXJpd1K65oqPZ1UsAiT5pBqp2t-T1", kind: "collaborator", preferredSurface: "dark", approval: "preview" },
  { id: "amaken", name: "Amaken Contracting", src: "/drive/partners-transparent/partner-09.png", driveFileId: "1AeawK1pm8GH1Jfuiy9d1v7zvTs61xs-1", kind: "collaborator", preferredSurface: "light", approval: "preview" },
];

export function piecesFor(collection: string) {
  return collectionPieces.filter((piece) => piece.collection === collection && piece.status !== "quarantined");
}

export const showroomCopy: Record<Locale, { partners: string; partnerNote: string; similar: string; pieceLabel: string }> = {
  en: { partners: "People we work with", partnerNote: "Designers, studios and delivery partners", similar: "Discuss something similar", pieceLabel: "Selected project piece" },
  ar: { partners: "شركاء العمل", partnerNote: "مصممون واستوديوهات وشركاء تنفيذ", similar: "ناقش مشروعاً مشابهاً", pieceLabel: "قطعة مختارة من مشروع" },
};
