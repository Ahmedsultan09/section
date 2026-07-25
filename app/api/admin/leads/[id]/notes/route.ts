import { and, desc, eq, lt } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { requireAuthenticatedAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function parseCursor(value: string | null) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export async function GET(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  await requireAuthenticatedAdmin();
  const { id } = await params;
  const url = new URL(request.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit") ?? 10), 1), 30);
  const cursor = parseCursor(url.searchParams.get("cursor"));

  const db = getDb();
  const notes = cursor
    ? await db
        .select({
          id: schema.leadNotes.id,
          body: schema.leadNotes.body,
          createdAt: schema.leadNotes.createdAt,
          updatedAt: schema.leadNotes.updatedAt,
        })
        .from(schema.leadNotes)
        .where(and(eq(schema.leadNotes.leadId, id), lt(schema.leadNotes.createdAt, cursor)))
        .orderBy(desc(schema.leadNotes.createdAt))
        .limit(limit)
    : await db
        .select({
          id: schema.leadNotes.id,
          body: schema.leadNotes.body,
          createdAt: schema.leadNotes.createdAt,
          updatedAt: schema.leadNotes.updatedAt,
        })
        .from(schema.leadNotes)
        .where(eq(schema.leadNotes.leadId, id))
        .orderBy(desc(schema.leadNotes.createdAt))
        .limit(limit);

  const nextCursor = notes.length === limit ? notes[notes.length - 1].createdAt.toISOString() : null;
  return NextResponse.json({ notes, nextCursor });
}

export async function POST(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  await requireAuthenticatedAdmin();
  const { id } = await params;
  const data = await request.formData();
  const bodyValue = data.get("body");
  const body = typeof bodyValue === "string" ? bodyValue.trim() : "";

  if (!body) {
    return NextResponse.json({ error: "Note body is required" }, { status: 400 });
  }

  const db = getDb();
  const [note] = await db
    .insert(schema.leadNotes)
    .values({
      leadId: id,
      body,
      updatedAt: new Date(),
    })
    .returning({
      id: schema.leadNotes.id,
      body: schema.leadNotes.body,
      createdAt: schema.leadNotes.createdAt,
      updatedAt: schema.leadNotes.updatedAt,
    });

  return NextResponse.json({ note }, { status: 201 });
}
