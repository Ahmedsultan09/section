import type { Capability, CapabilitySlug, Locale, MediaAsset, Project, ProjectSector } from "./site-types";
import { hydeParkMediaAssets, sodicMediaAssets } from "./drive-assets";
import generatedCategoryDriveAssets from "./generated-category-drive-assets.json";
import { selectedProjectMedia, selectedProjectRecords, selectedProjectSlugs } from "./selected-projects";

export const locales: Locale[] = ["en", "ar"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const sectors: Array<{ slug: ProjectSector; label: Record<Locale, string> }> = [
  { slug: "residential-developments", label: { en: "Residential developments", ar: "المشروعات السكنية" } },
  { slug: "hospitality", label: { en: "Hospitality", ar: "الضيافة" } },
  { slug: "workplace", label: { en: "Workplace", ar: "مساحات العمل" } },
  { slug: "retail-public", label: { en: "Retail & public spaces", ar: "التجزئة والمساحات العامة" } },
];

const categoryMediaAssets: MediaAsset[] = generatedCategoryDriveAssets.map((asset) => {
  const capability: CapabilitySlug = asset.id.startsWith("kitchen")
    ? "kitchens"
    : asset.id.startsWith("bedroom")
      ? "bedrooms"
      : "dressing-rooms";
  const labels: Record<CapabilitySlug, Record<Locale, string>> = {
    kitchens: { en: "Drive-supplied kitchen project photograph", ar: "صورة مشروع مطبخ موردة من Drive" },
    bedrooms: { en: "Drive-supplied bedroom project photograph", ar: "صورة مشروع غرفة نوم موردة من Drive" },
    "dressing-rooms": { en: "Drive-supplied dressing room photograph", ar: "صورة غرفة ملابس موردة من Drive" },
    "living-rooms": { en: "Living space", ar: "مساحة معيشة" },
    "custom-units": { en: "Custom unit", ar: "وحدة مخصصة" },
    doors: { en: "Architectural door", ar: "باب معماري" },
    "wall-cladding": { en: "Wall cladding", ar: "تكسية حائط" },
    "materials-finishes": { en: "Material finish", ar: "تشطيب خامة" },
  };
  return {
    id: asset.id,
    src: asset.localSrc,
    sourceFolder: asset.sourceFolderId,
    sourceFolderId: asset.sourceFolderId,
    sourceName: asset.sourceName,
    capabilities: [capability],
    stage: "finished",
    authenticity: asset.authenticity as MediaAsset["authenticity"],
    rights: asset.rights as MediaAsset["rights"],
    orientation: asset.orientation as MediaAsset["orientation"],
    quality: asset.id.endsWith("-01") ? "hero" : "editorial",
    usage: asset.id.endsWith("-01") ? "capability" : "project",
    alt: labels[capability],
    driveFileId: asset.driveFileId,
    originalMime: asset.originalMime,
    contentHash: asset.contentHash,
    derived: { webp: asset.localSrc },
    publishStatus: asset.publishStatus as MediaAsset["publishStatus"],
  };
});

export const mediaAssets: MediaAsset[] = [
  ...sodicMediaAssets,
  ...hydeParkMediaAssets,
  ...categoryMediaAssets,
  ...selectedProjectMedia,
  {
    id: "asset-living-01", src: "/assets/141202_527604.jpeg", sourceFolder: "Legacy site", sourceName: "141202_527604.jpeg",
    projectSlug: "residential-joinery-study", sector: "residential-developments", capabilities: ["living-rooms", "custom-units"],
    stage: "finished", authenticity: "unknown", rights: "pending", orientation: "landscape", quality: "hero", usage: "hero",
    alt: { en: "Warm residential interior with custom wood elements", ar: "مساحة سكنية دافئة بعناصر خشبية مصممة خصيصاً" },
  },
  {
    id: "asset-wall-01", src: "/assets/171467_688502.jpeg", sourceFolder: "Legacy site", sourceName: "171467_688502.jpeg",
    projectSlug: "residential-joinery-study", sector: "residential-developments", capabilities: ["wall-cladding", "living-rooms"],
    stage: "finished", authenticity: "unknown", rights: "pending", orientation: "landscape", quality: "hero", usage: "project",
    alt: { en: "Integrated wall cladding and media joinery", ar: "تكسية حائط ووحدة وسائط مدمجة" },
  },
  {
    id: "asset-unit-01", src: "/assets/217375_739589.jpeg", sourceFolder: "Legacy site", sourceName: "217375_739589.jpeg",
    projectSlug: "residential-joinery-study", sector: "residential-developments", capabilities: ["custom-units", "dressing-rooms"],
    stage: "detail", authenticity: "unknown", rights: "pending", orientation: "portrait", quality: "editorial", usage: "project",
    alt: { en: "Detail of a fitted storage system", ar: "تفصيلة من نظام تخزين مدمج" },
  },
  {
    id: "asset-door-01", src: "/assets/412078_605141.jpeg", sourceFolder: "Legacy site", sourceName: "412078_605141.jpeg",
    projectSlug: "architectural-doors-study", sector: "workplace", capabilities: ["doors", "wall-cladding"],
    stage: "finished", authenticity: "unknown", rights: "pending", orientation: "portrait", quality: "hero", usage: "project",
    alt: { en: "Architectural timber door and wall treatment", ar: "باب خشبي معماري ومعالجة متكاملة للحائط" },
  },
  {
    id: "asset-bedroom-01", src: "/assets/474743_155959.jpg", sourceFolder: "Legacy site", sourceName: "474743_155959.jpg",
    projectSlug: "hospitality-room-study", sector: "hospitality", capabilities: ["bedrooms", "custom-units", "dressing-rooms"],
    stage: "finished", authenticity: "unknown", rights: "pending", orientation: "landscape", quality: "hero", usage: "project",
    alt: { en: "Bedroom package with coordinated timber furniture", ar: "غرفة نوم بحزمة أثاث خشبي متناسقة" },
  },
  {
    id: "asset-process-01", src: "/assets/805180_442982.jpeg", sourceFolder: "Legacy site", sourceName: "805180_442982.jpeg",
    projectSlug: "workplace-joinery-study", sector: "workplace", capabilities: ["custom-units", "materials-finishes"],
    stage: "process", authenticity: "unknown", rights: "pending", orientation: "landscape", quality: "editorial", usage: "process",
    alt: { en: "Joinery work during fabrication", ar: "أعمال النجارة خلال التصنيع" },
  },
  {
    id: "asset-detail-01", src: "/assets/891416_45535.jpg", sourceFolder: "Legacy site", sourceName: "891416_45535.jpg",
    projectSlug: "hospitality-room-study", sector: "hospitality", capabilities: ["materials-finishes", "bedrooms"],
    stage: "detail", authenticity: "unknown", rights: "pending", orientation: "landscape", quality: "editorial", usage: "project",
    alt: { en: "Material and furniture detail", ar: "تفصيلة خامات وأثاث" },
  },
];

export function getMedia(id: string) {
  return mediaAssets.find((asset) => asset.id === id) ?? mediaAssets[0];
}

const capabilityCatalog: Capability[] = [
  {
    slug: "kitchens", number: "01", title: { en: "Kitchens", ar: "المطابخ" },
    short: { en: "Made-to-fit kitchens planned for everyday use and demanding project schedules.", ar: "مطابخ مصممة للمقاس تجمع الاستخدام اليومي مع متطلبات برامج المشاريع." },
    intro: { en: "Complete kitchen environments coordinated with appliances, services, worktops and site conditions before production begins.", ar: "بيئات مطابخ متكاملة تُنسق مع الأجهزة والخدمات وأسطح العمل وظروف الموقع قبل بدء التصنيع." },
    applications: [{ en: "Residential developments", ar: "المشروعات السكنية" }, { en: "Serviced residences", ar: "الوحدات الفندقية" }, { en: "Hospitality", ar: "الضيافة" }],
    materials: [{ en: "Moisture-resistant boards", ar: "ألواح مقاومة للرطوبة" }, { en: "Natural veneers", ar: "القشرة الطبيعية" }, { en: "Durable hardware", ar: "إكسسوارات عالية التحمل" }],
    process: [{ en: "Layout coordination", ar: "تنسيق المخطط" }, { en: "Sample approval", ar: "اعتماد العينة" }, { en: "Sequenced installation", ar: "التركيب المرحلي" }], image: "kitchen-obour-01",
  },
  {
    slug: "dressing-rooms", number: "02", title: { en: "Dressing Rooms", ar: "غرف الملابس" },
    short: { en: "Storage systems shaped around people, unit types and daily routines.", ar: "أنظمة تخزين تتشكل حول المستخدم ونمط الوحدة وروتين الحياة اليومي." },
    intro: { en: "Wardrobes and dressing rooms developed as complete systems with considered internals, finishes, hardware and lighting.", ar: "خزائن وغرف ملابس تُطوّر كنظم متكاملة تشمل التقسيمات والتشطيبات والإكسسوارات والإضاءة." },
    applications: [{ en: "Walk-in rooms", ar: "غرف ملابس داخلية" }, { en: "Built-in wardrobes", ar: "خزائن مدمجة" }, { en: "Hospitality storage", ar: "تخزين الضيافة" }],
    materials: [{ en: "Textured laminates", ar: "لامينيت محبب" }, { en: "Painted finishes", ar: "تشطيبات دهان" }, { en: "Glass and metal details", ar: "تفاصيل زجاج ومعدن" }],
    process: [{ en: "Internal planning", ar: "تخطيط التقسيمات" }, { en: "Hardware selection", ar: "اختيار الإكسسوارات" }, { en: "Quality inspection", ar: "فحص الجودة" }], image: "dressing-09",
  },
  {
    slug: "living-rooms", number: "03", title: { en: "Living Spaces", ar: "مساحات المعيشة" },
    short: { en: "Wall features, storage and furniture composed as one interior language.", ar: "حوائط مميزة وتخزين وأثاث تتكوّن كلغة داخلية واحدة." },
    intro: { en: "Living spaces bring fitted joinery, wall treatments and custom furniture together in one calm, coordinated composition.", ar: "تجمع مساحات المعيشة النجارة المدمجة ومعالجات الحوائط والأثاث المخصص في تكوين هادئ ومتناغم." },
    applications: [{ en: "Residential lounges", ar: "صالات المعيشة" }, { en: "Reception spaces", ar: "مساحات الاستقبال" }, { en: "Hospitality suites", ar: "الأجنحة الفندقية" }],
    materials: [{ en: "Natural veneer", ar: "قشرة طبيعية" }, { en: "Painted timber", ar: "خشب مدهون" }, { en: "Metal and upholstery details", ar: "تفاصيل معدن وتنجيد" }],
    process: [{ en: "Composition study", ar: "دراسة التكوين" }, { en: "Detail coordination", ar: "تنسيق التفاصيل" }, { en: "Final installation", ar: "التركيب النهائي" }], image: "asset-living-01",
  },
  {
    slug: "custom-units", number: "04", title: { en: "Custom Units", ar: "الوحدات المخصصة" },
    short: { en: "Purpose-built pieces engineered once and produced with consistency.", ar: "قطع مصممة لغرض محدد تُهندس مرة وتُنتج بجودة متسقة." },
    intro: { en: "Media units, storage, reception pieces and fitted elements developed around drawings, services and real site tolerances.", ar: "وحدات وسائط وتخزين واستقبال وعناصر مدمجة تُطوّر وفق الرسومات والخدمات وسماحات الموقع الفعلية." },
    applications: [{ en: "Media units", ar: "وحدات الوسائط" }, { en: "Integrated storage", ar: "التخزين المدمج" }, { en: "Reception joinery", ar: "نجارة الاستقبال" }],
    materials: [{ en: "Plywood and MDF", ar: "الأبلكاش وMDF" }, { en: "Veneers and laminates", ar: "القشرة واللامينيت" }, { en: "Integrated hardware", ar: "الإكسسوارات المدمجة" }],
    process: [{ en: "Site verification", ar: "مراجعة الموقع" }, { en: "Prototype and sample", ar: "النموذج والعينة" }, { en: "Controlled production", ar: "الإنتاج المنضبط" }], image: "asset-wall-01",
  },
  {
    slug: "bedrooms", number: "05", title: { en: "Bedrooms", ar: "غرف النوم" },
    short: { en: "Coordinated room packages with storage, furniture and crafted details.", ar: "حزم غرف متناسقة تجمع التخزين والأثاث والتفاصيل المصنوعة بعناية." },
    intro: { en: "Beds, night units, wardrobes and wall details developed together for repeatable residential and hospitality rooms.", ar: "أسرة ووحدات جانبية وخزائن وتفاصيل حوائط تُطوّر معاً لغرف سكنية وفندقية قابلة للتكرار." },
    applications: [{ en: "Residential bedrooms", ar: "غرف النوم السكنية" }, { en: "Hotel rooms", ar: "الغرف الفندقية" }, { en: "Serviced apartments", ar: "الشقق الفندقية" }],
    materials: [{ en: "Timber veneer", ar: "قشرة خشبية" }, { en: "Upholstery", ar: "التنجيد" }, { en: "Integrated lighting details", ar: "تفاصيل إضاءة مدمجة" }],
    process: [{ en: "Room-type study", ar: "دراسة نموذج الغرفة" }, { en: "Prototype review", ar: "مراجعة النموذج" }, { en: "Package installation", ar: "تركيب الحزمة" }], image: "bedroom-a-01",
  },
  {
    slug: "wall-cladding", number: "06", title: { en: "Wall cladding", ar: "تكسية الحوائط" },
    short: { en: "Integrated timber surfaces that conceal, protect and define space.", ar: "أسطح خشبية متكاملة تخفي وتحمي وتحدد هوية المكان." },
    intro: { en: "Feature walls, service panels and coordinated cladding designed around joints, access, acoustics and adjacent finishes.", ar: "حوائط مميزة وألواح خدمات وتكسيات منسقة وفق الفواصل وفتحات الصيانة والصوتيات والتشطيبات المجاورة." },
    applications: [{ en: "Lobbies", ar: "الردهات" }, { en: "Media walls", ar: "حوائط الوسائط" }, { en: "Circulation areas", ar: "مسارات الحركة" }],
    materials: [{ en: "Veneered panels", ar: "ألواح مكسوة بالقشرة" }, { en: "Fluted profiles", ar: "قطاعات مخددة" }, { en: "Acoustic substrates", ar: "طبقات صوتية" }],
    process: [{ en: "Setting-out", ar: "تحديد المحاور" }, { en: "Panel coordination", ar: "تنسيق الألواح" }, { en: "Protected installation", ar: "التركيب والحماية" }], image: "asset-wall-01",
  },
  {
    slug: "doors", number: "07", title: { en: "Architectural Doors", ar: "الأبواب المعمارية" },
    short: { en: "Complete door sets coordinated with walls, hardware and site tolerances.", ar: "مجموعات أبواب متكاملة ومنسقة مع الحوائط والإكسسوارات وسماحات الموقع." },
    intro: { en: "Each door is developed as a complete assembly: leaf, frame, architrave, hardware preparation, finish and installation sequence.", ar: "يُطوّر كل باب كمجموعة متكاملة تشمل الضلفة والحلق والحليات وتجهيز الإكسسوارات والتشطيب وتسلسل التركيب." },
    applications: [{ en: "Apartment entrances", ar: "مداخل الوحدات" }, { en: "Internal doors", ar: "الأبواب الداخلية" }, { en: "Concealed doors", ar: "الأبواب المخفية" }],
    materials: [{ en: "Natural veneer", ar: "قشرة طبيعية" }, { en: "Painted timber", ar: "خشب مدهون" }, { en: "Specified door cores", ar: "قلوب أبواب حسب المواصفات" }],
    process: [{ en: "Opening review", ar: "مراجعة الفتحات" }, { en: "Hardware coordination", ar: "تنسيق الإكسسوارات" }, { en: "Final adjustment", ar: "الضبط النهائي" }], image: "asset-door-01",
  },
  {
    slug: "materials-finishes", number: "08", title: { en: "Materials & Finishes", ar: "الخامات والتشطيبات" },
    short: { en: "A working finish library refined through samples, approvals and quality checks.", ar: "مكتبة تشطيبات عملية تتطور عبر العينات والاعتمادات وفحوص الجودة." },
    intro: { en: "Boards, veneers, laminates, paints and hardware are selected for the way each space will look, work and age.", ar: "تُختار الألواح والقشرة واللامينيت والدهانات والإكسسوارات وفق شكل المساحة واستخدامها وكيف ستتطور مع الزمن." },
    applications: [{ en: "Finish schedules", ar: "جداول التشطيبات" }, { en: "Material boards", ar: "لوحات الخامات" }, { en: "Project mock-ups", ar: "نماذج المشروع" }],
    materials: [{ en: "Natural veneers", ar: "القشرة الطبيعية" }, { en: "Technical laminates", ar: "اللامينيت التقني" }, { en: "Paint and hardware systems", ar: "أنظمة الدهان والإكسسوارات" }],
    process: [{ en: "Material shortlist", ar: "قائمة الخامات" }, { en: "Sample approval", ar: "اعتماد العينة" }, { en: "Finish control", ar: "ضبط التشطيب" }], image: "asset-detail-01",
  },
];

const capabilityOrder = ["wall-cladding", "kitchens", "dressing-rooms", "doors", "custom-units", "bedrooms"];

export const capabilities: Capability[] = [...capabilityCatalog].sort((a, b) => {
  const aIndex = capabilityOrder.indexOf(a.slug);
  const bIndex = capabilityOrder.indexOf(b.slug);
  return (aIndex === -1 ? capabilityOrder.length : aIndex) - (bIndex === -1 ? capabilityOrder.length : bIndex);
});

export const projects: Project[] = [
  {
    slug: "sodic-collaboration", title: { en: "SODIC Collaboration", ar: "تعاون مع سوديك" },
    sector: "residential-developments", sectorLabel: sectors[0].label, location: { en: "Egypt", ar: "مصر" }, year: "—",
    client: { en: "SODIC", ar: "سوديك" }, clientVisibility: "approved", verificationStatus: "partial",
    verificationNote: { en: "The client name and broad work categories are approved for this preview; detailed project facts remain under review.", ar: "اسم العميل وفئات العمل العامة معتمدة لهذه المعاينة، بينما تظل تفاصيل المشروع قيد المراجعة." },
    summary: { en: "A residential joinery package that moves from fluted walls and concealed storage to stair, kitchen and living details in one timber-led language.", ar: "حزمة نجارة سكنية تمتد من الجدران المخددة والتخزين المخفي إلى تفاصيل السلم والمطبخ والمعيشة ضمن لغة واحدة تقودها الخامة الخشبية." },
    scope: { en: "Selected wall, stair, kitchen and joinery photography from the SODIC Drive folder; quantities, locations and programme remain intentionally unlisted.", ar: "صور مختارة للجدران والسلم والمطبخ وتفاصيل النجارة من مجلد سوديك على Drive؛ لم تُدرج الكميات والمواقع والبرنامج الزمني عمداً." },
    responsibilities: [{ en: "Interior work", ar: "أعمال داخلية" }, { en: "Custom woodwork", ar: "نجارة مخصصة" }, { en: "Furniture", ar: "أثاث" }],
    materials: [], outcome: { en: "Selected collaboration shown without unsupported metrics or claims.", ar: "تعاون مختار معروض دون أرقام أو ادعاءات غير موثقة." },
    capabilities: ["custom-units", "wall-cladding", "living-rooms"], media: ["sodic-drive-06", "sodic-drive-02", "sodic-drive-01", "sodic-drive-04", "sodic-drive-08", "sodic-drive-07", "sodic-drive-03", "sodic-drive-05", "sodic-drive-09"], collaboratorIds: ["ahmed-elsheref"], sourceFolderId: "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS", sourceFolderTitle: "1-SODIC ahmed el sherif", mediaAreas: { "sodic-drive-06": "cover", "sodic-drive-02": "wall", "sodic-drive-01": "stairs", "sodic-drive-03": "kitchen", "sodic-drive-08": "wall" },
  },
  {
    slug: "hyde-park", title: { en: "Hyde Park", ar: "هايد بارك" },
    sector: "residential-developments", sectorLabel: sectors[0].label, location: { en: "Egypt", ar: "مصر" }, year: "—",
    client: { en: "HYDE PARK", ar: "هايد بارك" }, clientVisibility: "approved", verificationStatus: "partial",
    summary: { en: "A light-filled kitchen organized around a pair of islands, full-height storage and a quiet contrast between white fronts and dark timber.", ar: "مطبخ مضيء يتمحور حول جزيرتين وتخزين بارتفاع كامل وتباين هادئ بين الواجهات البيضاء والخشب الداكن." },
    scope: { en: "The Drive selection follows the kitchen from integrated appliance walls to island work surfaces and close joinery details.", ar: "تتبع صور Drive المطبخ من جدران الأجهزة المدمجة إلى أسطح الجزر وتفاصيل النجارة القريبة." },
    responsibilities: [{ en: "Kitchen cabinetry", ar: "خزائن المطبخ" }, { en: "Integrated appliance housings", ar: "وحدات الأجهزة المدمجة" }, { en: "Island work surfaces", ar: "أسطح عمل الجزر" }],
    materials: [{ en: "High-gloss white fronts", ar: "واجهات بيضاء عالية اللمعان" }, { en: "Dark timber worktops", ar: "أسطح عمل خشبية داكنة" }, { en: "White work surfaces", ar: "أسطح عمل بيضاء" }],
    outcome: { en: "A composed kitchen where storage, preparation and cooking zones read as one continuous interior.", ar: "مطبخ متناسق تتصل فيه مناطق التخزين والتحضير والطهي ضمن مساحة داخلية واحدة." },
    capabilities: ["kitchens", "custom-units"], media: ["white-island-kitchen-01", "white-island-kitchen-02", "white-island-kitchen-03", "white-island-kitchen-04", "white-island-kitchen-05", "white-island-kitchen-06", "white-island-kitchen-07"],
  },
  ...selectedProjectRecords,
  {
    slug: "residential-joinery-study", title: { en: "Residential Joinery Study", ar: "دراسة نجارة لمشروع سكني" },
    sector: "residential-developments", sectorLabel: sectors[0].label, location: { en: "Greater Cairo", ar: "القاهرة الكبرى" }, year: "—",
    client: { en: "Confidential developer", ar: "مطور عقاري — سري" }, clientVisibility: "pending",
    verificationNote: { en: "Editorial study. Client attribution and project facts are pending approval.", ar: "دراسة تحريرية. اسم العميل وبيانات المشروع في انتظار الاعتماد." },
    summary: { en: "A coordinated language of wall cladding, integrated storage and furniture for repeatable residential interiors.", ar: "لغة متناسقة من تكسيات الحوائط والتخزين المدمج والأثاث للمساحات السكنية القابلة للتكرار." },
    scope: { en: "Design coordination, detailed joinery development, manufacturing and installation planning.", ar: "تنسيق التصميم وتطوير تفاصيل النجارة والتصنيع وتخطيط التركيب." },
    responsibilities: [{ en: "Technical development", ar: "التطوير الفني" }, { en: "Joinery manufacturing", ar: "تصنيع النجارة" }, { en: "Installation coordination", ar: "تنسيق التركيب" }],
    materials: [{ en: "Natural veneer", ar: "قشرة طبيعية" }, { en: "Moisture-resistant MDF", ar: "MDF مقاوم للرطوبة" }],
    outcome: { en: "A coherent package designed to move from approved sample to controlled production.", ar: "حزمة متماسكة مصممة للانتقال من العينة المعتمدة إلى إنتاج مضبوط." },
    capabilities: ["wall-cladding", "custom-units", "living-rooms"], media: ["asset-wall-01", "asset-unit-01", "asset-living-01"],
  },
  {
    slug: "hospitality-room-study", title: { en: "Hospitality Room Package", ar: "حزمة غرفة ضيافة" },
    sector: "hospitality", sectorLabel: sectors[1].label, location: { en: "Egypt", ar: "مصر" }, year: "—",
    client: { en: "Confidential hospitality client", ar: "عميل ضيافة — سري" }, clientVisibility: "pending",
    verificationNote: { en: "Editorial study. Scope and photography require final verification.", ar: "دراسة تحريرية. النطاق والصور يحتاجان إلى مراجعة نهائية." },
    summary: { en: "A room-level package aligning bed, storage, surfaces and details under one manufacturing logic.", ar: "حزمة متكاملة للغرفة توحد السرير والتخزين والأسطح والتفاصيل ضمن منطق تصنيع واحد." },
    scope: { en: "Prototype-led development for coordinated room furniture and fitted joinery.", ar: "تطوير قائم على النموذج الأولي لأثاث الغرف والنجارة المدمجة." },
    responsibilities: [{ en: "Prototype development", ar: "تطوير النموذج" }, { en: "Furniture manufacturing", ar: "تصنيع الأثاث" }, { en: "Finish control", ar: "ضبط التشطيبات" }],
    materials: [{ en: "Timber veneer", ar: "قشرة خشبية" }, { en: "Upholstery coordination", ar: "تنسيق التنجيد" }],
    outcome: { en: "A repeatable room language ready for sample review and production planning.", ar: "لغة غرف قابلة للتكرار وجاهزة لمراجعة العينة وتخطيط الإنتاج." },
    capabilities: ["bedrooms", "custom-units", "dressing-rooms"], media: ["asset-bedroom-01", "asset-detail-01"],
  },
  {
    slug: "workplace-joinery-study", title: { en: "Workplace Joinery Study", ar: "دراسة نجارة لمساحة عمل" },
    sector: "workplace", sectorLabel: sectors[2].label, location: { en: "Cairo", ar: "القاهرة" }, year: "—",
    client: { en: "Confidential workplace client", ar: "عميل مساحات عمل — سري" }, clientVisibility: "pending",
    verificationNote: { en: "Editorial study. Project details are intentionally anonymized.", ar: "دراسة تحريرية. تم إخفاء بيانات المشروع عمداً." },
    summary: { en: "Architectural timber elements developed around daily use, services and site sequencing.", ar: "عناصر خشبية معمارية مطورة وفق الاستخدام اليومي والخدمات وتسلسل أعمال الموقع." },
    scope: { en: "Technical review, fabrication planning and coordination with adjacent trades.", ar: "مراجعة فنية وتخطيط التصنيع والتنسيق مع التخصصات المجاورة." },
    responsibilities: [{ en: "Technical review", ar: "المراجعة الفنية" }, { en: "Fabrication planning", ar: "تخطيط التصنيع" }, { en: "Site coordination", ar: "تنسيق الموقع" }],
    materials: [{ en: "Engineered timber", ar: "أخشاب مُصنّعة" }, { en: "Durable laminate", ar: "لامينيت عالي التحمل" }],
    outcome: { en: "A buildable joinery package organized for clearer approvals and site delivery.", ar: "حزمة نجارة قابلة للتنفيذ ومنظمة لاعتمادات وتسليم أوضح." },
    capabilities: ["custom-units", "doors"], media: ["asset-process-01", "asset-door-01"],
  },
  {
    slug: "architectural-doors-study", title: { en: "Architectural Doors Study", ar: "دراسة أبواب معمارية" },
    sector: "retail-public", sectorLabel: sectors[3].label, location: { en: "Egypt", ar: "مصر" }, year: "—",
    client: { en: "Confidential project", ar: "مشروع سري" }, clientVisibility: "pending",
    verificationNote: { en: "Editorial study. Final door specifications are pending confirmation.", ar: "دراسة تحريرية. مواصفات الأبواب النهائية في انتظار التأكيد." },
    summary: { en: "Door assemblies and adjacent timber surfaces considered as one architectural system.", ar: "مجموعات الأبواب والأسطح الخشبية المجاورة كنظام معماري واحد." },
    scope: { en: "Opening review, frame and leaf development, finish coordination and installation sequencing.", ar: "مراجعة الفتحات وتطوير الحلق والضلفة وتنسيق التشطيب وتسلسل التركيب." },
    responsibilities: [{ en: "Door-set development", ar: "تطوير مجموعة الباب" }, { en: "Hardware coordination", ar: "تنسيق الإكسسوارات" }, { en: "Installation", ar: "التركيب" }],
    materials: [{ en: "Veneered timber", ar: "خشب مكسو بالقشرة" }, { en: "Metal hardware", ar: "إكسسوارات معدنية" }],
    outcome: { en: "A coordinated assembly intended to reduce late site adjustments.", ar: "مجموعة منسقة تهدف إلى تقليل التعديلات المتأخرة في الموقع." },
    capabilities: ["doors", "wall-cladding"], media: ["asset-door-01", "asset-wall-01"],
  },
];

export const processSteps = [
  { number: "01", title: { en: "Concept & briefing", ar: "الفكرة والمتطلبات" }, text: { en: "We define the ambition, scope, quantities, programme and site realities in one decisive working brief.", ar: "نحدد الطموح والنطاق والكميات والبرنامج وواقع الموقع في موجز عمل واضح وحاسم." }, image: "asset-living-01" },
  { number: "02", title: { en: "Design & sketching", ar: "التصميم والرسم" }, text: { en: "Sketches, materials and technical decisions turn the brief into a buildable direction ready for approval.", ar: "تحول الرسومات والخامات والقرارات الفنية المتطلبات إلى اتجاه قابل للتنفيذ وجاهز للاعتماد." }, image: "asset-wall-01" },
  { number: "03", title: { en: "Manufacturing", ar: "التصنيع" }, text: { en: "Approved information moves through fabrication, assembly, finish control and documented quality checks.", ar: "تنتقل المعلومات المعتمدة عبر التصنيع والتجميع وضبط التشطيب وفحوص الجودة الموثقة." }, image: "asset-process-01" },
  { number: "04", title: { en: "Installation", ar: "التركيب" }, text: { en: "Protected delivery and sequenced site installation bring every coordinated element into its final position.", ar: "يجمع التسليم المحمي والتركيب المتسلسل في الموقع كل عنصر منسق في موضعه النهائي." }, image: "asset-door-01" },
];

export const manufacturingSteps = [
  { number: "01", topic: { en: "Material direction", ar: "توجيه الخامة" }, title: { en: "Select", ar: "الاختيار" }, text: { en: "Boards, veneers and hardware are aligned to the approved brief.", ar: "نطابق الألواح والقشرة والإكسسوارات مع الموجز المعتمد." }, image: "/drive/materials/material-03.webp", imageAlt: { en: "A fan of timber and stone finish samples", ar: "عينات متدرجة من الخشب والحجر والتشطيبات" } },
  { number: "02", topic: { en: "Production set-up", ar: "إعداد الإنتاج" }, title: { en: "Cut", ar: "القص" }, text: { en: "Panels are cut, edged and machined to the production drawings.", ar: "تُقص الألواح وتُشطب وتُشغل وفق رسومات الإنتاج." }, image: "/drive/materials/material-02.webp", imageAlt: { en: "Layered board and veneer samples prepared for production", ar: "عينات متراكبة من الألواح والقشرة جاهزة للإنتاج" } },
  { number: "03", topic: { en: "Assembly check", ar: "مراجعة التجميع" }, title: { en: "Assemble", ar: "التجميع" }, text: { en: "Parts are dry-fitted and checked before the finish is applied.", ar: "تُركب الأجزاء تجريبياً وتُراجع قبل تنفيذ التشطيب." }, image: "/drive/materials/material-04.webp", imageAlt: { en: "Tagged timber samples being checked as a set", ar: "عينات خشبية معلّمة تُراجع كمجموعة واحدة" } },
  { number: "04", topic: { en: "Finish matching", ar: "مطابقة التشطيب" }, title: { en: "Finish", ar: "التشطيب" }, text: { en: "Colour, texture and hardware are tuned by hand against the samples.", ar: "نضبط اللون والملمس والإكسسوارات يدوياً مقارنة بالعينات." }, image: "/drive/materials/material-06.webp", imageAlt: { en: "Hands comparing finish samples on a work table", ar: "أيدٍ تقارن عينات التشطيب على طاولة العمل" } },
  { number: "05", topic: { en: "Quality gate", ar: "بوابة الجودة" }, title: { en: "Check", ar: "الفحص" }, text: { en: "Every piece is inspected, protected and prepared for site.", ar: "نفحص كل قطعة ونحميها ونجهزها للموقع." }, image: "/drive/materials/material-01.webp", imageAlt: { en: "A SECTION material sample under a final quality review", ar: "عينة من خامة SECTION أثناء مراجعة الجودة النهائية" } },
];

export const publishedProjects = projects.filter((project) => project.publication !== "pending" && project.media.length > 0);

export const selectedProjects = selectedProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project && project.publication !== "pending" && project.media.length > 0));

export const copy = {
  en: {
    nav: { work: "Work", capabilities: "Collections", process: "Process", studio: "Studio", inquiry: "Discuss a project" },
    hero: { eyebrow: "SECTION / Made with wood", title: "Made with wood.\nBuilt for ambitious spaces.", body: "One team for design, custom making and installation.", primary: "Discuss a project", secondary: "View selected work", note: "Cairo / Design · Manufacture · Install" },
    proof: { eyebrow: "One accountable team", title: "From first line to final fit.", body: "You brief one team. We coordinate, make and install." },
    featured: { eyebrow: "Selected project", title: "The project tells the story.", link: "Open project" },
    capabilities: { eyebrow: "Browse by category", title: "Explore the work.", body: "Move through spaces, built elements and finishes.", view: "Open collection" },
    process: { eyebrow: "How work moves", title: "Four moves. One line.", body: "Scroll from idea to installation." },
    factory: { eyebrow: "Manufacturing", title: "Made here. Checked here.", body: "We build, assemble and check every piece before it travels to site.", facts: ["Review before production", "Sample before finish", "Check before delivery"] },
    projects: { eyebrow: "Selected work", title: "Work worth opening.", body: "Four project studies. Client names appear only after approval.", all: "All", open: "View project" },
    materials: { eyebrow: "Materials & quality", title: "Chosen to last.", body: "Every board, finish and fitting is selected for the way the space will be used.", items: ["The right substrate", "An approved finish sample", "Hardware matched to use", "A final check before delivery"] },
    close: { eyebrow: "Start with the brief", title: "Bring us the brief.", body: "Share the project, the stage and the deadline. We will take it from there.", action: "Discuss a project" },
  },
  ar: {
    nav: { work: "الأعمال", capabilities: "المجموعات", process: "المراحل", studio: "الاستوديو", inquiry: "ناقش مشروعك" },
    hero: { eyebrow: "SECTION / مصنوع من الخشب", title: "مصنوع من الخشب.\nلمساحات بطموح كبير.", body: "فريق واحد للتصميم والتصنيع المخصص والتركيب.", primary: "ناقش مشروعك", secondary: "شاهد الأعمال", note: "القاهرة / تصميم · تصنيع · تركيب" },
    proof: { eyebrow: "فريق واحد مسؤول", title: "من أول خط إلى آخر تركيب.", body: "تعرض علينا المشروع. ننسق ونصنع ونركب." },
    featured: { eyebrow: "مشروع مختار", title: "المشروع يروي القصة.", link: "افتح المشروع" },
    capabilities: { eyebrow: "تصفح حسب الفئة", title: "استكشف الأعمال.", body: "انتقل بين المساحات والعناصر المصنوعة والتشطيبات.", view: "افتح المجموعة" },
    process: { eyebrow: "كيف يتحرك العمل", title: "أربع مراحل. خط واحد.", body: "مرّر من الفكرة إلى التركيب." },
    factory: { eyebrow: "التصنيع", title: "نصنع هنا. ونراجع هنا.", body: "نصنع ونجمع ونراجع كل قطعة قبل انتقالها إلى الموقع.", facts: ["مراجعة قبل الإنتاج", "عينة قبل التشطيب", "فحص قبل التسليم"] },
    projects: { eyebrow: "أعمال مختارة", title: "أعمال تستحق أن تفتحها.", body: "أربع دراسات مشروعات. تظهر أسماء العملاء بعد الاعتماد فقط.", all: "الكل", open: "شاهد المشروع" },
    materials: { eyebrow: "الخامات والجودة", title: "مختارة لتدوم.", body: "نختار كل لوح وتشطيب وإكسسوار حسب طريقة استخدام المساحة.", items: ["لوح مناسب للاستخدام", "عينة تشطيب معتمدة", "إكسسوارات تناسب الاستخدام", "فحص نهائي قبل التسليم"] },
    close: { eyebrow: "ابدأ بالمتطلبات", title: "أرسل لنا المتطلبات.", body: "شارك المشروع ومرحلته وموعده. وسنكمل من هناك.", action: "ناقش مشروعك" },
  },
};

export function getCapability(slug: string) {
  return capabilities.find((capability) => capability.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function capabilityLabel(slug: CapabilitySlug, locale: Locale) {
  return capabilities.find((capability) => capability.slug === slug)?.title[locale] ?? slug;
}
