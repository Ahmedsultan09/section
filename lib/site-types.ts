export type Locale = "en" | "ar";

export type DesignId = "editorial" | "immersive" | "assemblage" | "nocturne";

export type LocalizedText = Record<Locale, string>;

export type ProjectSector =
  | "residential-developments"
  | "hospitality"
  | "workplace"
  | "retail-public";

export type CapabilitySlug =
  | "kitchens"
  | "dressing-rooms"
  | "living-rooms"
  | "custom-units"
  | "bedrooms"
  | "doors"
  | "wall-cladding"
  | "materials-finishes";

export type ProjectArea =
  | "cover"
  | "wall"
  | "bedroom"
  | "reception"
  | "reception-detail"
  | "kitchen"
  | "doors"
  | "units"
  | "rooms"
  | "stairs"
  | "dressing"
  | "dressing-detail"
  | "detail"
  | "outdoor-unit"
  | "other";

export type MediaAsset = {
  id: string;
  src: string;
  sourceFolder: string;
  sourceFolderId?: string;
  sourceName: string;
  projectSlug?: string;
  sector?: ProjectSector;
  capabilities: CapabilitySlug[];
  stage: "finished" | "process" | "detail" | "unknown";
  authenticity: "verified-real" | "ai-concept" | "unknown";
  rights: "approved" | "pending" | "restricted";
  orientation: "landscape" | "portrait" | "square";
  quality: "hero" | "editorial" | "reference";
  usage: "hero" | "project" | "process" | "capability" | "quarantine";
  alt: LocalizedText;
  driveFileId?: string;
  originalMime?: string;
  contentHash?: string;
  derived?: { webp?: string; avif?: string; jpeg?: string; poster?: string };
  publishStatus?: "preview" | "public" | "quarantined";
  area?: ProjectArea;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  sector: ProjectSector;
  sectorLabel: LocalizedText;
  location: LocalizedText;
  year: string;
  client: LocalizedText;
  clientVisibility: "approved" | "confidential" | "pending";
  verificationNote?: LocalizedText;
  summary: LocalizedText;
  scope: LocalizedText;
  elements?: LocalizedText;
  responsibilities: LocalizedText[];
  materials: LocalizedText[];
  outcome: LocalizedText;
  capabilities: CapabilitySlug[];
  media: string[];
  clientLogoId?: string;
  collaboratorIds?: string[];
  verificationStatus?: "verified" | "partial" | "pending";
  sourceFolderId?: string;
  sourceFolderTitle?: string;
  mediaAreas?: Record<string, ProjectArea>;
  publication?: "public" | "pending";
};

export type CollectionPiece = {
  slug: string;
  collection: CapabilitySlug;
  title: LocalizedText;
  location?: LocalizedText;
  story: LocalizedText;
  application: LocalizedText;
  scope: LocalizedText;
  materials?: LocalizedText[];
  media: string[];
  mediaTags?: Record<string, LocalizedText>;
  sourceFolderIds: string[];
  status: "preview" | "approved" | "quarantined";
};

export type PartnerLogo = {
  id: string;
  name: string;
  src: string;
  driveFileId: string;
  kind: "client" | "collaborator";
  preferredSurface: "light" | "dark";
  approval: "preview" | "approved";
  projectSlugs?: string[];
};

export type Capability = {
  slug: CapabilitySlug;
  number: string;
  title: LocalizedText;
  short: LocalizedText;
  intro: LocalizedText;
  applications: LocalizedText[];
  materials: LocalizedText[];
  process: LocalizedText[];
  image: string;
};

export type InquiryPayload = {
  locale: Locale;
  name: string;
  phone: string;
  projectElements: string[];
  projectReadiness: ProjectReadiness;
  installationIncluded: true;
  brief: string;
  consent: boolean;
};

export type ProjectReadiness = "has-brief" | "needs-ideas";

export type DriveAssetReference = {
  driveFileId: string;
  sourceFolderId: string;
  contentHash: string;
  approval: "preview" | "approved";
};

export type InquiryAttachment = {
  inquiryId: string;
  storageKey: string;
  originalName: string;
  mimeType: string;
  bytes: number;
};
