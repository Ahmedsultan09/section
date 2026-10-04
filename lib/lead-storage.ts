type StoredObject = { arrayBuffer(): Promise<ArrayBuffer> };
type UploadBucket = {
  put(key: string, value: ReadableStream, options?: { httpMetadata?: { contentType: string } }): Promise<unknown>;
  get(key: string): Promise<StoredObject | null>;
  delete(key: string): Promise<void>;
};

export async function uploadsBucket(): Promise<UploadBucket> {
  const { env } = await import("cloudflare:workers");
  const bucket = (env as unknown as { UPLOADS?: UploadBucket }).UPLOADS;
  if (!bucket) throw new Error("UPLOADS R2 binding is required.");
  return bucket;
}
