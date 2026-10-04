import { asc, eq } from "drizzle-orm";
import { getDb, schema } from "@/db";
import { readAuthenticatedAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await readAuthenticatedAdmin())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  if (!uuid.test(id)) return Response.json({ error: "Invalid lead" }, { status: 400 });
  const attachments = await getDb().select({
    id: schema.leadAttachments.id,
    kind: schema.leadAttachments.kind,
    originalName: schema.leadAttachments.originalName,
    bytes: schema.leadAttachments.bytes,
  }).from(schema.leadAttachments).where(eq(schema.leadAttachments.leadId, id)).orderBy(asc(schema.leadAttachments.createdAt));
  return Response.json({ attachments }, { headers: { "Cache-Control": "private, no-store" } });
}
