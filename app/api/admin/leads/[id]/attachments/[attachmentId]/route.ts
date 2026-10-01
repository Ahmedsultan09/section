import { and, eq } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { readAuthenticatedAdmin } from "@/lib/admin-auth";
import { safeFileName } from "@/lib/lead-files";
import { uploadsBucket } from "@/lib/lead-storage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(_request: Request, { params }: { params: Promise<{ id: string; attachmentId: string }> }) {
  if (!(await readAuthenticatedAdmin())) return new Response("Unauthorized", { status: 401 });
  const { id, attachmentId } = await params;
  if (!uuid.test(id) || !uuid.test(attachmentId)) return new Response("Invalid attachment", { status: 400 });
  const [attachment] = await getDb().select().from(schema.leadAttachments).where(and(
    eq(schema.leadAttachments.id, attachmentId),
    eq(schema.leadAttachments.leadId, id),
  )).limit(1);
  if (!attachment) return new Response("File not found", { status: 404 });
  const object = await (await uploadsBucket()).get(attachment.storageKey);
  if (!object) return new Response("File not found", { status: 404 });
  const bytes = await object.arrayBuffer();
  const name = safeFileName(attachment.originalName);
  const asciiName = name.replace(/[^\x20-\x7e]/g, "_");
  const headers = new Headers({
    "Content-Type": attachment.kind === "photo" ? attachment.mimeType : "application/octet-stream",
    "Content-Disposition": `${attachment.kind === "photo" ? "inline" : "attachment"}; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(name)}`,
    "Content-Length": String(bytes.byteLength),
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
  });
  return new Response(bytes, { headers });
}
