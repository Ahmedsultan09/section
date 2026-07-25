import { NextResponse } from "next/server";
import { adminSessionCookie, authenticateAdmin, ensureSeedAdminUser, issueAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function formValue(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

export async function POST(request: Request) {
  await ensureSeedAdminUser();

  const data = await request.formData();
  const email = formValue(data, "email");
  const password = formValue(data, "password");

  if (!email || !password) {
    return NextResponse.redirect(new URL("/admin-dashboard/login?error=missing", request.url), { status: 303 });
  }

  const admin = await authenticateAdmin(email, password);
  if (!admin) {
    return NextResponse.redirect(new URL("/admin-dashboard/login?error=invalid", request.url), { status: 303 });
  }

  const { token, maxAge } = issueAdminSession(admin.id);
  const response = NextResponse.redirect(new URL("/admin-dashboard", request.url), { status: 303 });
  response.cookies.set(adminSessionCookie.name, token, { ...adminSessionCookie.options, maxAge });
  return response;
}
