import type { CollectionPiece, Locale, PartnerLogo } from "./site-types";
import { driveSrc } from "./media-manifest";
import generatedUnitProcessAssets from "./generated-unit-process-assets.json";

function driveSequence(prefix: string, count: number) {
  return Array.from({ length: count }, (_, index) => driveSrc(`${prefix}-${String(index + 1).padStart(2, "0")}`));
}

export const collectionPieces: CollectionPiece[] = [
  { slug: "obour-kitchen", collection: "kitchens", title: { en: "Obour Kitchen", ar: "مطبخ العبور" }, story: { en: "A calm fitted composition where storage, preparation and appliance zones read as one architectural line.", ar: "تكوين هادئ ومتكامل يجمع التخزين والتحضير والأجهزة في خط معماري واحد." }, application: { en: "Residential kitchen", ar: "مطبخ سكني" }, scope: { en: "Fitted cabinetry and coordinated installation", ar: "خزائن مدمجة وتركيب منسق" }, media: Array.from({ length: 16 }, (_, index) => driveSrc(`kitchen-obour-${String(index + 1).padStart(2, "0")}`)), sourceFolderIds: ["1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv"], status: "preview" },
  { slug: "timber-frame-kitchen", collection: "kitchens", title: { en: "Kitchen Study 07", ar: "دراسة مطبخ ٠٧" }, story: { en: "A warm timber kitchen with dark framed storage, integrated appliances and an extended preparation counter.", ar: "مطبخ خشبي دافئ يجمع التخزين بإطارات داكنة والأجهزة المدمجة وسطح تحضير ممتد." }, application: { en: "Residential kitchen", ar: "مطبخ سكني" }, scope: { en: "Kitchen cabinetry and coordinated fitting", ar: "خزائن مطبخ وتركيب منسق" }, media: Array.from({ length: 5 }, (_, index) => driveSrc(`kitchen-obour-${String(index + 17).padStart(2, "0")}`)), sourceFolderIds: ["1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv"], status: "preview" },
  { slug: "edited-kitchen-study", collection: "kitchens", title: { en: "Kitchen Study 06", ar: "دراسة مطبخ ٠٦" }, story: { en: "A selected kitchen study documented through the edited photographs supplied in the project’s Drive folder.", ar: "دراسة مطبخ مختارة موثقة بالصور المعدلة الموردة في مجلد المشروع على Drive." }, application: { en: "Residential kitchen", ar: "مطبخ سكني" }, scope: { en: "Kitchen cabinetry and coordinated fitting", ar: "خزائن مطبخ وتركيب منسق" }, media: Array.from({ length: 6 }, (_, index) => driveSrc(`kitchen-edited-${String(index + 1).padStart(2, "0")}`)), sourceFolderIds: ["16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M", "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ"], status: "preview" },
  { slug: "sahar-kitchen", collection: "kitchens", title: { en: "Sahar Kitchen", ar: "مطبخ سحر" }, story: { en: "A compact kitchen study shaped around clear circulation, concealed storage and an easy everyday rhythm.", ar: "دراسة لمطبخ مدمج تتشكل حول حركة واضحة وتخزين هادئ وإيقاع يومي سهل." }, application: { en: "Private residence", ar: "مسكن خاص" }, scope: { en: "Cabinetry development and fitting", ar: "تطوير الخزائن وتركيبها" }, media: [driveSrc("k02a"), driveSrc("k02b"), "/drive/kitchens/kitchen-02-c.webp", "/drive/kitchens/kitchen-02-d.webp"], sourceFolderIds: ["1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw"], status: "preview" },
  { slug: "kitchen-03", collection: "kitchens", title: { en: "Kitchen 03", ar: "المطبخ ٠٣" }, story: { en: "A material-led kitchen package developed from site dimensions into a precise fitted envelope.", ar: "حزمة مطبخ تقودها الخامة وتتطور من أبعاد الموقع إلى غلاف دقيق ومتكامل." }, application: { en: "Made-to-fit kitchen", ar: "مطبخ مصمم للمقاس" }, scope: { en: "Survey, detailing and production", ar: "رفع مقاسات وتفاصيل وتصنيع" }, media: [driveSrc("k03a"), driveSrc("k03b")], sourceFolderIds: ["1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU"], status: "preview" },
  { slug: "kitchen-04", collection: "kitchens", title: { en: "Kitchen 04", ar: "المطبخ ٠٤" }, story: { en: "A restrained storage system designed to keep the room visually quiet while every function stays close at hand.", ar: "نظام تخزين هادئ بصرياً يحافظ على قرب كل وظيفة وسهولة الوصول إليها." }, application: { en: "Residential development", ar: "مشروع سكني" }, scope: { en: "Joinery manufacturing and fitting", ar: "تصنيع نجارة وتركيب" }, media: [driveSrc("k04a"), driveSrc("k04b")], sourceFolderIds: ["13xG1rK3o4rdBb46kbVLMR_b2yflBEiE7"], status: "preview" },
  { slug: "kitchen-05", collection: "kitchens", title: { en: "Kitchen 05", ar: "المطبخ ٠٥" }, story: { en: "A practical kitchen sequence balancing durable surfaces with a clean, composed elevation.", ar: "تسلسل عملي يوازن بين الأسطح المتينة وواجهة نظيفة ومتزنة." }, application: { en: "Residential kitchen", ar: "مطبخ سكني" }, scope: { en: "Production and coordinated delivery", ar: "تصنيع وتسليم منسق" }, media: [driveSrc("k05a"), driveSrc("k05b"), "/drive/kitchens/kitchen-05-c.webp", "/drive/kitchens/kitchen-05-d.webp"], sourceFolderIds: ["1Va7QqpjC6Pmchnseo37B_tZq4kPiresk"], status: "preview" },
  { slug: "cnc-cladding", collection: "wall-cladding", title: { en: "CNC CLADDING", ar: "تكسية CNC" }, story: { en: "CNC-routed wall panels and sculpted feature surfaces shaped from a precise digital-to-built workflow.", ar: "ألواح حوائط وأسطح مميزة مشغلة بتقنية CNC ضمن مسار دقيق من التصميم الرقمي إلى التنفيذ." }, application: { en: "CNC-routed feature walls", ar: "حوائط مميزة مشغلة بتقنية CNC" }, scope: { en: "CNC wall cladding / sculpted panels", ar: "تكسية حوائط CNC / ألواح منحوتة" }, media: driveSequence("cladding-cnc", 14), sourceFolderIds: ["12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd"], status: "preview" },
  { slug: "melamine-cladding", collection: "wall-cladding", title: { en: "MELAMINE CLADDING", ar: "تكسية ميلامين" }, story: { en: "Warm, durable melamine surfaces organized into clean wall planes, reveals and built-in storage lines.", ar: "أسطح ميلامين دافئة ومتينة تتنظم في مستويات حائط واضحة وفواصل وخطوط تخزين مدمج." }, application: { en: "Residential and hospitality wall systems", ar: "أنظمة حوائط سكنية وفندقية" }, scope: { en: "Melamine wall cladding / fitted joinery", ar: "تكسية ميلامين / نجارة مدمجة" }, media: driveSequence("cladding-melamine", 13), sourceFolderIds: ["1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0"], status: "preview" },
  { slug: "veneer-painting-cladding", collection: "wall-cladding", title: { en: "VENEER & PAINTING CLADDING", ar: "تكسية القشرة والدهان" }, story: { en: "Natural veneer grain and painted profiles brought together for layered, architectural wall compositions.", ar: "تجتمع عروق القشرة الطبيعية مع القطاعات المدهونة لتكوين حوائط معمارية متعددة الطبقات." }, application: { en: "Feature walls, doors and room envelopes", ar: "حوائط مميزة وأبواب وغلاف الغرفة" }, scope: { en: "Veneer and painted wall cladding", ar: "تكسية حوائط بالقشرة والدهان" }, media: driveSequence("cladding-veneer-painting", 17), sourceFolderIds: ["12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR"], status: "preview" },
  { slug: "glass-frame-dressing", collection: "dressing-rooms", title: { en: "Glass-frame Dressing Room", ar: "غرفة ملابس بإطارات زجاجية" }, story: { en: "A full-height wardrobe system combining illuminated interiors, glass fronts and accessible storage hardware.", ar: "نظام خزائن بارتفاع كامل يجمع الإضاءة الداخلية والواجهات الزجاجية وإكسسوارات التخزين العملية." }, application: { en: "Bedroom dressing wall", ar: "حائط ملابس لغرفة نوم" }, scope: { en: "Wardrobes, lighting integration and fitting", ar: "خزائن ودمج إضاءة وتركيب" }, media: [driveSrc("d08"), driveSrc("d04"), driveSrc("d01"), driveSrc("d02"), driveSrc("dressing-09"), driveSrc("dressing-10"), driveSrc("dressing-11")], sourceFolderIds: ["1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X"], status: "preview" },
  { slug: "walk-in-dressing", collection: "dressing-rooms", title: { en: "Walk-in Dressing Room", ar: "غرفة ملابس داخلية" }, story: { en: "A room-scale storage system where lighting, hanging, drawers and display zones form a continuous sequence.", ar: "نظام تخزين بحجم الغرفة تتصل فيه الإضاءة والتعليق والأدراج ومساحات العرض في تسلسل واحد." }, application: { en: "Walk-in wardrobe", ar: "خزانة ملابس داخلية" }, scope: { en: "Internal planning, cabinetry and installation", ar: "تخطيط داخلي وخزائن وتركيب" }, media: [driveSrc("d06"), driveSrc("d05"), driveSrc("d07"), driveSrc("d03"), driveSrc("dressing-12"), driveSrc("dressing-13")], sourceFolderIds: ["1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X"], status: "preview" },
  { slug: "bedroom-study-a", collection: "bedrooms", title: { en: "Bedroom Study 01", ar: "دراسة غرفة نوم ٠١" }, story: { en: "A coordinated bedroom package documented across fitted storage, furniture and wall details.", ar: "حزمة غرفة نوم متناسقة موثقة عبر التخزين المدمج والأثاث وتفاصيل الحوائط." }, application: { en: "Residential bedroom", ar: "غرفة نوم سكنية" }, scope: { en: "Bedroom furniture, joinery and fitting", ar: "أثاث غرفة نوم ونجارة وتركيب" }, media: Array.from({ length: 11 }, (_, index) => driveSrc(`bedroom-a-${String(index + 1).padStart(2, "0")}`)), sourceFolderIds: ["10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j"], status: "preview" },
  { slug: "bedroom-study-b", collection: "bedrooms", title: { en: "Bedroom Study 02", ar: "دراسة غرفة نوم ٠٢" }, story: { en: "A second bedroom study showing the room as one composed package rather than isolated furniture pieces.", ar: "دراسة ثانية لغرفة نوم تعرض المساحة كحزمة متكاملة بدلاً من قطع أثاث منفصلة." }, application: { en: "Residential bedroom", ar: "غرفة نوم سكنية" }, scope: { en: "Bedroom furniture, joinery and fitting", ar: "أثاث غرفة نوم ونجارة وتركيب" }, media: Array.from({ length: 7 }, (_, index) => driveSrc(`bedroom-b-${String(index + 1).padStart(2, "0")}`)), sourceFolderIds: ["10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp"], status: "preview" },
  ...[
    ["living-rooms", "living-composition", "Living Composition", "تكوين للمعيشة", "/assets/141202_527604.jpeg"],
    ["doors", "timber-door-set", "Timber Door Set", "مجموعة باب خشبي", "/assets/412078_605141.jpeg"],
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
