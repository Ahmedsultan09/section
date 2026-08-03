import generatedSelectedProjectAssets from "./generated-selected-project-assets.json";
import type { CapabilitySlug, MediaAsset, Project, ProjectArea } from "./site-types";

export const SELECTED_PROJECTS_ROOT_FOLDER_ID = "1Dh1mQCh7iWs3Txayc20AaFgdPbYvY-Mh";

export const selectedProjectSourceFolders = [
  { order: 1, slug: "sodic-collaboration", title: "1-SODIC ahmed el sherif", sourceFolderId: "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS", publishStatus: "public" as const },
  { order: 2, slug: "swan-lake", title: "2-SWANLAKE", sourceFolderId: "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR", publishStatus: "public" as const },
  { order: 3, slug: "sodic-villette", title: "3-SODIC VILETTE with Mai saad", sourceFolderId: "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv", publishStatus: "public" as const },
  { order: 4, slug: "new-giza", title: "4-NEW GIZA mai saad", sourceFolderId: "1NmaXGLx8SRXereWz90DmS8YRh2I5J5cd", publishStatus: "pending" as const },
  { order: 5, slug: "playa", title: "5-PLAYA with Amaken", sourceFolderId: "1256mAU_FoUKShxofhCe8-pQEYja11tMr", publishStatus: "public" as const },
  { order: 6, slug: "cfc-office", title: "6-CFC office. (Commercial)", sourceFolderId: "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y", publishStatus: "public" as const },
] as const;

export const selectedProjectSlugs = selectedProjectSourceFolders.map((folder) => folder.slug);

const sourceFolderNames: Record<string, string> = {
  "swan-lake": "SWANLAKE",
  "sodic-villette": "SODIC VILETTE",
  playa: "PLAYA",
  "cfc-office": "CFC office",
};

function capabilitiesFor(projectSlug: string, area: ProjectArea): CapabilitySlug[] {
  if (area === "bedroom") return ["bedrooms", "custom-units"];
  if (area === "dressing" || area === "dressing-detail") return ["dressing-rooms", "custom-units"];
  if (area === "doors") return ["doors", "wall-cladding"];
  if (area === "stairs" || area === "wall") return ["wall-cladding", "custom-units"];
  if (projectSlug === "cfc-office") return ["custom-units", "wall-cladding"];
  return ["living-rooms", "custom-units"];
}

export const selectedProjectMedia: MediaAsset[] = generatedSelectedProjectAssets.map((asset) => {
  const area = asset.area as ProjectArea;
  return {
    id: asset.id,
    src: asset.localSrc,
    sourceFolder: sourceFolderNames[asset.projectSlug] ?? asset.sourceFolderId,
    sourceFolderId: asset.sourceFolderId,
    sourceName: asset.sourceName,
    projectSlug: asset.projectSlug,
    sector: asset.projectSlug === "cfc-office" ? "workplace" : "residential-developments",
    capabilities: capabilitiesFor(asset.projectSlug, area),
    stage: "finished",
    authenticity: asset.authenticity as MediaAsset["authenticity"],
    rights: asset.rights as MediaAsset["rights"],
    orientation: asset.orientation as MediaAsset["orientation"],
    quality: asset.quality as MediaAsset["quality"],
    usage: "project",
    alt: asset.alt,
    driveFileId: asset.driveFileId,
    originalMime: asset.originalMime,
    contentHash: asset.contentHash,
    derived: asset.derived,
    publishStatus: asset.publishStatus as MediaAsset["publishStatus"],
    area,
  };
});

const selectedProjectMediaIds = (projectSlug: string) => {
  const areas = new Set<string>();
  return selectedProjectMedia
    .filter((asset) => asset.projectSlug === projectSlug)
    .sort((a, b) => (a.area === "cover" ? -1 : b.area === "cover" ? 1 : 0))
    .filter((asset) => {
      const area = asset.area ?? "other";
      const areaGroup = area.endsWith("-detail") ? area.slice(0, -"-detail".length) : area;
      if (areas.has(areaGroup)) return false;
      areas.add(areaGroup);
      return true;
    })
    .map((asset) => asset.id);
};

const selectedProjectAreas = (projectSlug: string) => Object.fromEntries(
  selectedProjectMedia
    .filter((asset) => asset.projectSlug === projectSlug && asset.area)
    .map((asset) => [asset.id, asset.area as ProjectArea]),
) as Record<string, ProjectArea>;

export const selectedProjectRecords: Project[] = [
  {
    slug: "swan-lake",
    title: { en: "Swan Lake", ar: "سوان ليك" },
    sector: "residential-developments",
    sectorLabel: { en: "Residential developments", ar: "المشروعات السكنية" },
    location: { en: "Egypt", ar: "مصر" },
    year: "—",
    client: { en: "SWANLAKE", ar: "سوان ليك" },
    clientVisibility: "approved",
    verificationStatus: "verified",
    summary: { en: "A residential interior package where warm timber walls, media joinery and furniture carry one continuous language.", ar: "حزمة داخلية سكنية تجمع الجدران الخشبية الدافئة ونجارة الوسائط والأثاث في لغة واحدة." },
    scope: { en: "Representative living, wall and bedroom photography selected from the Drive source folder.", ar: "صور ممثلة للمعيشة والجدران وغرف النوم مختارة من مجلد Drive المصدر." },
    responsibilities: [{ en: "Interior joinery", ar: "النجارة الداخلية" }, { en: "Wall cladding", ar: "تكسية الجدران" }, { en: "Furniture coordination", ar: "تنسيق الأثاث" }],
    materials: [{ en: "Timber veneer", ar: "قشرة خشبية" }, { en: "Marble", ar: "رخام" }],
    outcome: { en: "A calm, coordinated interior package documented through selected areas.", ar: "حزمة داخلية هادئة ومنسقة موثقة عبر مناطق مختارة." },
    capabilities: ["living-rooms", "wall-cladding", "bedrooms", "custom-units"],
    media: selectedProjectMediaIds("swan-lake"),
    mediaAreas: selectedProjectAreas("swan-lake"),
    sourceFolderId: "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR",
    sourceFolderTitle: "2-SWANLAKE",
  },
  {
    slug: "sodic-villette",
    title: { en: "SODIC Villette", ar: "سوديك فيليت" },
    sector: "residential-developments",
    sectorLabel: { en: "Residential developments", ar: "المشروعات السكنية" },
    location: { en: "Egypt", ar: "مصر" },
    year: "—",
    client: { en: "SODIC", ar: "سوديك" },
    clientVisibility: "approved",
    verificationStatus: "verified",
    summary: { en: "Selected SODIC Villette rooms showing fluted walls, dressing storage, bedrooms and living spaces.", ar: "مساحات مختارة من سوديك فيليت تعرض الجدران المخددة والتخزين وغرف النوم والمعيشة." },
    scope: { en: "Representative room photography selected from the SODIC Villette Drive folder.", ar: "صور ممثلة للمساحات مختارة من مجلد سوديك فيليت على Drive." },
    responsibilities: [{ en: "Interior work", ar: "أعمال داخلية" }, { en: "Custom woodwork", ar: "نجارة مخصصة" }, { en: "Furniture", ar: "أثاث" }],
    materials: [{ en: "Timber veneer", ar: "قشرة خشبية" }, { en: "Fluted timber", ar: "خشب مخدد" }],
    outcome: { en: "A selected record of the completed residential spaces.", ar: "سجل مختار للمساحات السكنية المكتملة." },
    capabilities: ["wall-cladding", "dressing-rooms", "bedrooms", "living-rooms", "custom-units"],
    media: selectedProjectMediaIds("sodic-villette"),
    mediaAreas: selectedProjectAreas("sodic-villette"),
    sourceFolderId: "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv",
    sourceFolderTitle: "3-SODIC VILETTE with Mai saad",
    collaboratorIds: ["mai-saad"],
  },
  {
    slug: "new-giza",
    title: { en: "New Giza", ar: "نيو جيزة" },
    sector: "residential-developments",
    sectorLabel: { en: "Residential developments", ar: "المشروعات السكنية" },
    location: { en: "Egypt", ar: "مصر" },
    year: "—",
    client: { en: "NEW GIZA", ar: "نيو جيزة" },
    clientVisibility: "pending",
    verificationStatus: "pending",
    publication: "pending",
    verificationNote: { en: "The Drive folder is currently empty. The project is registered but remains gated until photography is uploaded and reviewed.", ar: "مجلد Drive فارغ حالياً. تم تسجيل المشروع لكنه محجوب حتى رفع الصور ومراجعتها." },
    summary: { en: "Selected project photography pending upload.", ar: "صور المشروع المختارة بانتظار الرفع." },
    scope: { en: "No media has been supplied yet.", ar: "لم يتم توفير أي وسائط بعد." },
    responsibilities: [],
    materials: [],
    outcome: { en: "Publication will begin after the Drive source receives reviewed photography.", ar: "سيبدأ النشر بعد إضافة صور مراجعة إلى مصدر Drive." },
    capabilities: [],
    media: [],
    sourceFolderId: "1NmaXGLx8SRXereWz90DmS8YRh2I5J5cd",
    sourceFolderTitle: "4-NEW GIZA mai saad",
    collaboratorIds: ["mai-saad"],
  },
  {
    slug: "playa",
    title: { en: "Playa", ar: "بلايا" },
    sector: "residential-developments",
    sectorLabel: { en: "Residential developments", ar: "المشروعات السكنية" },
    location: { en: "Egypt", ar: "مصر" },
    year: "—",
    client: { en: "PLAYA", ar: "بلايا" },
    clientVisibility: "approved",
    verificationStatus: "verified",
    summary: { en: "A selected Playa package moving from dressing-room systems to door and entry details.", ar: "حزمة مختارة من بلايا تنتقل من أنظمة غرف الملابس إلى تفاصيل الأبواب والمداخل." },
    scope: { en: "Representative dressing, doors and stairs selected from the Playa Drive folder.", ar: "صور ممثلة لغرف الملابس والأبواب والسلالم مختارة من مجلد بلايا على Drive." },
    responsibilities: [{ en: "Dressing-room joinery", ar: "نجارة غرف الملابس" }, { en: "Door sets", ar: "مجموعات الأبواب" }, { en: "Entry detailing", ar: "تفاصيل المداخل" }],
    materials: [{ en: "Painted timber", ar: "خشب مطلي" }, { en: "Oak veneer", ar: "قشرة بلوط" }],
    outcome: { en: "A concise visual record of storage, door and entry work.", ar: "سجل بصري مختصر لأعمال التخزين والأبواب والمداخل." },
    capabilities: ["dressing-rooms", "doors", "wall-cladding", "custom-units"],
    media: selectedProjectMediaIds("playa"),
    mediaAreas: selectedProjectAreas("playa"),
    sourceFolderId: "1256mAU_FoUKShxofhCe8-pQEYja11tMr",
    sourceFolderTitle: "5-PLAYA with Amaken",
    collaboratorIds: ["amaken"],
  },
  {
    slug: "cfc-office",
    title: { en: "CFC Office", ar: "مكتب CFC" },
    sector: "workplace",
    sectorLabel: { en: "Workplace", ar: "مساحات العمل" },
    location: { en: "Cairo", ar: "القاهرة" },
    year: "—",
    client: { en: "CFC", ar: "CFC" },
    clientVisibility: "approved",
    verificationStatus: "verified",
    summary: { en: "A commercial interior study with timber walls, reception and considered lighting details.", ar: "دراسة لمساحة تجارية بجدران خشبية واستقبال وتفاصيل إضاءة مدروسة." },
    scope: { en: "Representative wall, reception and detail photography selected from the CFC office Drive folder.", ar: "صور ممثلة للجدران والاستقبال والتفاصيل مختارة من مجلد مكتب CFC على Drive." },
    responsibilities: [{ en: "Commercial joinery", ar: "نجارة تجارية" }, { en: "Reception elements", ar: "عناصر الاستقبال" }, { en: "Site delivery", ar: "التنفيذ بالموقع" }],
    materials: [{ en: "Timber veneer", ar: "قشرة خشبية" }, { en: "Painted panels", ar: "ألواح مطلية" }],
    outcome: { en: "A focused record of the workplace package.", ar: "سجل مركز لحزمة مساحة العمل." },
    capabilities: ["wall-cladding", "custom-units", "living-rooms"],
    media: selectedProjectMediaIds("cfc-office"),
    mediaAreas: selectedProjectAreas("cfc-office"),
    sourceFolderId: "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y",
    sourceFolderTitle: "6-CFC office. (Commercial)",
  },
];

export const selectedProjectManifest = selectedProjectSourceFolders.map((folder) => ({
  ...folder,
  media: folder.slug === "sodic-collaboration" ? ["sodic-drive-06", "sodic-drive-08", "sodic-drive-03", "sodic-drive-01", "sodic-drive-02"] : selectedProjectRecords.find((project) => project.slug === folder.slug)?.media ?? [],
}));
