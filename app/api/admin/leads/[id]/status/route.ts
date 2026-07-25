import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { requireAuthenticatedAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isLeadStatus(value: string | null): value is "contacted" | "not_contacted" {
  return value === "contacted" || value === "not_contacted";
}

export async function PATCH(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  await requireAuthenticatedAdmin();
  const { id } = await params;
  const data = await request.formData();
  const statusValue = data.get("status");
  const status = typeof statusValue === "string" ? statusValue : null;

  if (!isLeadStatus(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const db = getDb();
  await db.update(schema.leads).set({ status }).where(eq(schema.leads.id, id));

  return NextResponse.json({ ok: true, status });
}
