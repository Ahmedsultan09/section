import { NextResponse } from "next/server";
import { adminSessionCookie } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/admin-dashboard/login", request.url), { status: 303 });
  response.cookies.set(adminSessionCookie.name, "", { ...adminSessionCookie.options, maxAge: 0 });
  return response;
}
