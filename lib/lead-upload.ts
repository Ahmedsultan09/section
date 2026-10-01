import type { ValidatedLeadFile } from "./lead-files.ts";

export type PendingLeadAttachment = { kind: "photo" | "cad"; storageKey: string; originalName: string; mimeType: string; bytes: number };
export type LeadUploadBucket = {
  put(key: string, stream: ReadableStream, options: { httpMetadata: { contentType: string } }): Promise<unknown>;
  delete(key: string): Promise<void>;
};

export async function saveWithLeadFiles<T>(files: ValidatedLeadFile[], bucket: LeadUploadBucket | null, save: (pending: PendingLeadAttachment[]) => Promise<T>): Promise<T> {
  const uploadedKeys: string[] = [];
  const pending: PendingLeadAttachment[] = [];
  try {
    for (const item of files) {
      if (!bucket) throw new Error("Upload bucket is required for attachments.");
      const key = `leads/${crypto.randomUUID()}/${crypto.randomUUID()}`;
      uploadedKeys.push(key);
      await bucket.put(key, item.file.stream(), { httpMetadata: { contentType: item.mimeType } });
      pending.push({ kind: item.kind, storageKey: key, originalName: item.originalName, mimeType: item.mimeType, bytes: item.file.size });
    }
    return await save(pending);
  } catch (error) {
    if (bucket && uploadedKeys.length) {
      const results = await Promise.allSettled(uploadedKeys.map((key) => bucket.delete(key)));
      for (const result of results) if (result.status === "rejected") console.error("Could not clean up uploaded file", result.reason);
    }
    throw error;
  }
}
