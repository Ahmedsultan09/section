import { SODIC_SOURCE_FOLDER_ID, hydeParkMediaAssets, sodicMediaAssets, sodicVideoPosters } from "./drive-assets";
import { selectedProjectMedia } from "./selected-projects";
import type { ProjectArea } from "./site-types";
import generatedDressingDriveAssets from "./generated-dressing-drive-assets.json";
import generatedCategoryDriveAssets from "./generated-category-drive-assets.json";
import { kitchenMediaAssets } from "./kitchen-media";
import generatedDoorsDriveAssets from "./generated-doors-drive-assets.json";
import generatedLivingDriveAssets from "./generated-living-drive-assets.json";

export type DriveMediaRecord = {
  id: string;
  driveFileId: string;
  sourceFolder: string;
  sourceFolderId?: string;
  sourceName: string;
  localSrc: string;
  originalMime: string;
  contentHash?: string;
  orientation?: "landscape" | "portrait" | "square" | "unknown";
  quality?: "hero" | "editorial" | "reference";
  derived?: { webp?: string; avif?: string; jpeg?: string; poster?: string };
  projectSlug?: string;
  area?: ProjectArea;
  authenticity: "verified-real" | "ai-concept" | "unknown";
  rights: "approved" | "pending" | "restricted";
  publishStatus: "preview" | "public" | "quarantined";
};

const driveMediaSeed: DriveMediaRecord[] = [
  { id: "k01a", driveFileId: "1Hv7GMYnP7qzss5Z-lElj6o72b7uX9kXh", sourceFolder: "Kitchens/Kitchen 1 (Obour)", sourceName: "IMG_9411.PNG", localSrc: "/drive/kitchens/kitchen-01-a.webp", originalMime: "image/jpeg", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k01b", driveFileId: "1y5OA8MBhG1Y-W1V7Dt3_qkNQjiAAxuit", sourceFolder: "Kitchens/Kitchen 1 (Obour)", sourceName: "IMG_9410.PNG", localSrc: "/drive/kitchens/kitchen-01-b.webp", originalMime: "image/png", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k01c", driveFileId: "15PX6xQLTHHcwgw-a_p9uviBgz7ZCf-8w", sourceFolder: "Kitchens/Kitchen 1 (Obour)", sourceName: "IMG_9413.PNG", localSrc: "/drive/kitchens/kitchen-01-c.webp", originalMime: "image/png", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k02a", driveFileId: "10819BvNKzsMfxkPho7FiGZMskyOFnxaT", sourceFolder: "Kitchens/Kitchen 2 (Sahar)", sourceName: "a63f7de2-a084-400e-be9b-fe465d3af53c.jpg", localSrc: "/drive/kitchens/kitchen-02-a.webp", originalMime: "image/jpeg", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k02b", driveFileId: "11yb5QCp9uONppPgxANDBLSWvCOS8MT0C", sourceFolder: "Kitchens/Kitchen 2 (Sahar)", sourceName: "e666bc45-4ac0-422d-9a8b-143c535db2d6.jpg", localSrc: "/drive/kitchens/kitchen-02-b.webp", originalMime: "image/jpeg", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k03a", driveFileId: "1MiqzILdZIhAYIichI46uxTMb5vOBPL3m", sourceFolder: "Kitchens/Kitchen 3", sourceName: "IMG_0304.heif", localSrc: "/drive/kitchens/kitchen-03-a.webp", originalMime: "image/heif", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k03b", driveFileId: "1yZ_Hh6iBOD_V-iahLabsybTNL6g6XYT7", sourceFolder: "Kitchens/Kitchen 3", sourceName: "IMG_0298.heif", localSrc: "/drive/kitchens/kitchen-03-b.webp", originalMime: "image/heif", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k04a", driveFileId: "1mwygWZo1b9d0NXtkeETDIYffUGEMbHzh", sourceFolder: "Kitchens/Kitchen 4", sourceName: "IMG_7819.heif", localSrc: "/drive/kitchens/kitchen-04-a.webp", originalMime: "image/heif", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k04b", driveFileId: "1-NylTtxw8GzZBzCn3g1X66HBuRWiftA_", sourceFolder: "Kitchens/Kitchen 4", sourceName: "IMG_7817.heif", localSrc: "/drive/kitchens/kitchen-04-b.webp", originalMime: "image/heif", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k05a", driveFileId: "1MaFkgFgZLcYEl98ufqo7DwqBsGCUeCu3", sourceFolder: "Kitchens/Kitchen 5", sourceName: "768ab4de-7929-4097-a69b-488ab12ec550.jpeg", localSrc: "/drive/kitchens/kitchen-05-a.webp", originalMime: "image/jpeg", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  { id: "k05b", driveFileId: "15vrqdtWjcMOQmTyZkm-S2m9usjMrvq1U", sourceFolder: "Kitchens/Kitchen 5", sourceName: "a08faa30-6467-48e2-9377-3ab5ac14639b.jpeg", localSrc: "/drive/kitchens/kitchen-05-b.webp", originalMime: "image/jpeg", authenticity: "verified-real", rights: "pending", publishStatus: "preview" },
  ...[
    ["material-01", "17c5xZN7lUnoUQmZDo2t2BuPd7zPAvWBn", "IMG_0362.PNG", "image/png"],
    ["material-02", "12UB_raYGjIKzzeHz6mqgoaK9nXu88bS9", "IMG_0265.PNG", "image/png"],
    ["material-03", "16u6J76HoR1oCmKSKnx59lLB9-8xTWj7E", "IMG_5784.PNG", "image/png"],
    ["material-04", "1fFfDfJGWdBNjYShHvxC9YgA-Wl_gQe-U", "IMG_0216.PNG.jpg", "image/jpeg"],
    ["material-05", "1rLMWuQH931sIZ5BCapViU7iN5-BwNowv", "IMG_0215.PNG", "image/png"],
    ["material-06", "1pjguo7CPdfmQ7NQKeM1BRfPn-24Ccrqb", "IMG_0213.PNG", "image/png"],
    ["material-07", "1YZQp-kAxh0iJ_ZCgztnVH1bCrMHpvei6", "IMG_0211.PNG", "image/png"],
  ].map(([id, driveFileId, sourceName, originalMime]) => ({ id, driveFileId, sourceFolder: "Materials used", sourceName, localSrc: `/drive/materials/${id}.webp`, originalMime, authenticity: "verified-real" as const, rights: "pending" as const, publishStatus: "preview" as const })),
  ...[
    ["d01", "19P_A2Q7w9AlxE67Y087iirRaHSiLY4Iq"], ["d02", "1ksvIGXGPsAp7XrAMDAmronYjYpXQsqb-"], ["d03", "1Nmvi7geXmXUvOgT6V6OycY8JX7m0pcAC"], ["d04", "1_kID2fqpB4jF6pfUjdXtGKfKg3TCInf6"],
    ["d05", "1oBpvLO3Mo3KhmLI4QnCI2YdaEopdEAdZ"], ["d06", "12EE_jOrRRMUKqkXjATFjETlJkXYUM_HH"], ["d07", "1VzGwxT4COzuoP-jqC0BwWIqj7UwWXmvR"], ["d08", "1MLLFKBXiphhfEUXitbc4IC2eZnaILlIa"],
  ].map(([id, driveFileId], index) => ({ id, driveFileId, sourceFolder: "Dressing", sourceName: `Dressing image ${index + 1}`, localSrc: `/drive/dressing/dressing-0${index + 1}.webp`, originalMime: "image/heif", authenticity: "verified-real" as const, rights: "pending" as const, publishStatus: "preview" as const })),
  ...generatedDressingDriveAssets.map((asset) => ({
    ...asset,
    sourceFolder: asset.sourceFolderName,
    sourceFolderId: asset.sourceFolderId,
    orientation: asset.orientation as DriveMediaRecord["orientation"],
    authenticity: asset.authenticity as DriveMediaRecord["authenticity"],
    rights: asset.rights as DriveMediaRecord["rights"],
    publishStatus: asset.publishStatus as DriveMediaRecord["publishStatus"],
  })),
  ...generatedDoorsDriveAssets.map((asset) => ({
    ...asset,
    sourceFolder: asset.sourceFolderName,
    sourceFolderId: asset.sourceFolderId,
    orientation: asset.orientation as DriveMediaRecord["orientation"],
    authenticity: asset.authenticity as DriveMediaRecord["authenticity"],
    rights: asset.rights as DriveMediaRecord["rights"],
    publishStatus: asset.publishStatus as DriveMediaRecord["publishStatus"],
  })),
  ...generatedLivingDriveAssets.map((asset) => ({
    ...asset,
    sourceFolder: asset.sourceFolderName,
    sourceFolderId: asset.sourceFolderId,
    orientation: asset.orientation as DriveMediaRecord["orientation"],
    authenticity: asset.authenticity as DriveMediaRecord["authenticity"],
    rights: asset.rights as DriveMediaRecord["rights"],
    publishStatus: asset.publishStatus as DriveMediaRecord["publishStatus"],
  })),
  ...generatedCategoryDriveAssets.map((asset) => ({
    ...asset,
    sourceFolder: asset.sourceFolderId,
    orientation: asset.orientation as DriveMediaRecord["orientation"],
    authenticity: asset.authenticity as DriveMediaRecord["authenticity"],
    rights: asset.rights as DriveMediaRecord["rights"],
    publishStatus: asset.publishStatus as DriveMediaRecord["publishStatus"],
  })),
  ...kitchenMediaAssets.map((asset) => ({
    id: asset.id,
    driveFileId: asset.driveFileId!,
    sourceFolder: asset.sourceFolder,
    sourceFolderId: asset.sourceFolderId,
    sourceName: asset.sourceName,
    localSrc: asset.src,
    originalMime: asset.originalMime!,
    orientation: asset.orientation,
    quality: asset.quality,
    derived: asset.derived,
    authenticity: asset.authenticity,
    rights: asset.rights,
    publishStatus: asset.publishStatus!,
  })),
  ...sodicMediaAssets.map((asset) => ({
    id: asset.id,
    driveFileId: asset.driveFileId!,
    sourceFolder: SODIC_SOURCE_FOLDER_ID,
    sourceName: asset.sourceName,
    localSrc: asset.src,
    originalMime: asset.originalMime!,
    contentHash: asset.contentHash,
    orientation: asset.orientation,
    quality: asset.quality,
    derived: asset.derived,
    authenticity: asset.authenticity,
    rights: asset.rights,
    publishStatus: asset.publishStatus!,
  })),
  ...hydeParkMediaAssets.map((asset) => ({
    id: asset.id,
    driveFileId: asset.driveFileId!,
    sourceFolder: asset.sourceFolderId!,
    sourceFolderId: asset.sourceFolderId,
    sourceName: asset.sourceName,
    localSrc: asset.src,
    originalMime: asset.originalMime!,
    contentHash: asset.contentHash,
    orientation: asset.orientation,
    quality: asset.quality,
    derived: asset.derived,
    authenticity: asset.authenticity,
    rights: asset.rights,
    publishStatus: asset.publishStatus!,
  })),
  ...selectedProjectMedia.map((asset) => ({
    id: asset.id,
    driveFileId: asset.driveFileId!,
    sourceFolder: asset.sourceFolder,
    sourceFolderId: asset.sourceFolderId,
    sourceName: asset.sourceName,
    localSrc: asset.src,
    originalMime: asset.originalMime!,
    projectSlug: asset.projectSlug,
    area: asset.area,
    contentHash: asset.contentHash,
    orientation: asset.orientation,
    quality: asset.quality,
    derived: asset.derived,
    authenticity: asset.authenticity,
    rights: asset.rights,
    publishStatus: asset.publishStatus!,
  })),
  ...sodicVideoPosters.map((video) => ({
    id: video.id,
    driveFileId: video.driveFileId,
    sourceFolder: video.sourceFolderId,
    sourceName: video.sourceName,
    localSrc: video.poster,
    originalMime: "video/quicktime",
    contentHash: video.contentHash,
    orientation: "portrait" as const,
    quality: "reference" as const,
    derived: { poster: video.poster },
    authenticity: "verified-real" as const,
    rights: "approved" as const,
    publishStatus: "public" as const,
  })),
];

function dedupeDriveMedia(records: DriveMediaRecord[]) {
  const seen = new Set<string>();
  return records.flatMap((record) => {
    const aiLabelled = /chatgpt|gemini/i.test(record.sourceName);
    const key = record.contentHash ? `hash:${record.contentHash}` : `drive:${record.driveFileId}`;
    if (seen.has(key)) return [];
    seen.add(key);
    return [{
      ...record,
      authenticity: aiLabelled ? "ai-concept" as const : record.authenticity,
      publishStatus: aiLabelled ? "quarantined" as const : record.publishStatus,
      orientation: record.orientation ?? "unknown" as const,
      quality: record.quality ?? "editorial" as const,
      derived: record.derived ?? { webp: record.localSrc },
    }];
  });
}

export const driveMediaManifest = dedupeDriveMedia(driveMediaSeed);

export function driveSrc(id: string) {
  return driveMediaManifest.find((item) => item.id === id)?.localSrc ?? "/assets/217375_739589.jpeg";
}
