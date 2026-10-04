export type LeadFileKind = "photo" | "cad";
export type ValidatedLeadFile = { file: File; kind: LeadFileKind; mimeType: string; originalName: string };

export const MAX_FILES_PER_KIND = 3;
export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_REQUEST_BYTES = 64 * 1024 * 1024;

const photoTypes: Record<string, { mime: string; signature: (bytes: Uint8Array) => boolean }> = {
  jpg: { mime: "image/jpeg", signature: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  jpeg: { mime: "image/jpeg", signature: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  png: { mime: "image/png", signature: (b) => [137, 80, 78, 71, 13, 10, 26, 10].every((value, i) => b[i] === value) },
  webp: { mime: "image/webp", signature: (b) => String.fromCharCode(...b.slice(0, 4)) === "RIFF" && String.fromCharCode(...b.slice(8, 12)) === "WEBP" },
};
const cadExtensions = new Set(["dwg", "dxf", "step", "stp", "skp", "3dm"]);

export class LeadFileError extends Error {}

export function safeFileName(name: string) {
  return name.replace(/[\\/\x00-\x1f\x7f]/g, "_").replace(/["<>]/g, "_").trim().slice(0, 180) || "file";
}

export async function validateLeadFiles(data: FormData): Promise<ValidatedLeadFile[]> {
  const result: ValidatedLeadFile[] = [];
  for (const [key, entry] of data.entries()) {
    if (entry instanceof File && !["photos", "cadFiles"].includes(key)) throw new LeadFileError("Unexpected file field.");
  }
  for (const [field, kind] of [["photos", "photo"], ["cadFiles", "cad"]] as const) {
    const entries = data.getAll(field).filter((entry) => !(entry instanceof File && entry.name === "" && entry.size === 0));
    if (entries.length > MAX_FILES_PER_KIND) throw new LeadFileError(`Maximum ${MAX_FILES_PER_KIND} ${kind} files allowed.`);
    for (const entry of entries) {
      if (!(entry instanceof File) || !entry.name || entry.size === 0 || entry.size > MAX_FILE_BYTES) {
        throw new LeadFileError(`Each ${kind} file must be between 1 byte and 10 MB.`);
      }
      const originalName = safeFileName(entry.name);
      const extension = originalName.split(".").pop()?.toLowerCase() ?? "";
      if (kind === "photo") {
        const image = photoTypes[extension];
        if (!image || (entry.type && entry.type !== image.mime) || !image.signature(new Uint8Array(await entry.slice(0, 12).arrayBuffer()))) {
          throw new LeadFileError("Photos must be valid JPEG, PNG, or WebP images.");
        }
        result.push({ file: entry, kind, mimeType: image.mime, originalName });
      } else {
        const cadMime = !entry.type || entry.type === "application/octet-stream" || /^(application|image|model)\/(?:x-)?(?:vnd\.)?(?:.*(?:dwg|dxf|cad|step|sketchup|rhino|3dm)|octet-stream)$/.test(entry.type);
        if (!cadExtensions.has(extension) || !cadMime) {
          throw new LeadFileError("CAD files must be DWG, DXF, STEP, STP, SKP, or 3DM.");
        }
        result.push({ file: entry, kind, mimeType: "application/octet-stream", originalName });
      }
    }
  }
  return result;
}
