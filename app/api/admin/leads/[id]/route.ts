import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb, schema } from "@/db";
import { requireAuthenticatedAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isLeadStatus(value: string | null): value is "contacted" | "not_contacted" {
  return value === "contacted" || value === "not_contacted";
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  await requireAuthenticatedAdmin();
  const { id } = params;
  const data = await request.formData();
  const status = typeof data.get("status") === "string" ? data.get("status") : null;

  if (!isLeadStatus(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const db = getDb();
  await db.update(schema.leads).set({ status }).where(eq(schema.leads.id, id));

  return NextResponse.redirect(new URL("/admin-dashboard", request.url), { status: 303 });
}
