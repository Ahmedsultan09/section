import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { requireAuthenticatedAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: { noteId: string } | Promise<{ noteId: string }> }) {
  await requireAuthenticatedAdmin();
  const { noteId } = await params;
  const data = await request.formData();
  const body = typeof data.get("body") === "string" ? data.get("body").trim() : "";

  if (!body) {
    return NextResponse.json({ error: "Note body is required" }, { status: 400 });
  }

  const db = getDb();
  const [note] = await db
    .update(schema.leadNotes)
    .set({ body, updatedAt: new Date() })
    .where(eq(schema.leadNotes.id, noteId))
    .returning({
      id: schema.leadNotes.id,
      body: schema.leadNotes.body,
      createdAt: schema.leadNotes.createdAt,
      updatedAt: schema.leadNotes.updatedAt,
    });

  return NextResponse.json({ note });
}

export async function DELETE(_request: Request, { params }: { params: { noteId: string } | Promise<{ noteId: string }> }) {
  await requireAuthenticatedAdmin();
  const { noteId } = await params;
  const db = getDb();
  await db.delete(schema.leadNotes).where(eq(schema.leadNotes.id, noteId));
  return NextResponse.json({ ok: true });
}
