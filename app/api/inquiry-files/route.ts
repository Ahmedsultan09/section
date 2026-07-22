import { verifyFileAccess } from "@/lib/inquiry-security";
import { getInquiryAttachment } from "@/lib/inquiry-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key") ?? "";
  const signature = url.searchParams.get("sig") ?? "";
  const expires = Number(url.searchParams.get("expires"));
  const secret = process.env.INQUIRY_FILE_SECRET;
  if (!key.startsWith("inquiries/") || !secret || !(await verifyFileAccess(key, expires, signature, secret))) return new Response("Link invalid or expired", { status: 403 });
  const object = getInquiryAttachment(key);
  if (!object) return new Response("File not found", { status: 404 });
  const headers = new Headers();
  headers.set("Content-Type", object.mimeType);
  headers.set("Content-Disposition", `attachment; filename="${object.originalName.replace(/"/g, '\\"')}"`);
  headers.set("Cache-Control", "private, no-store");
  headers.set("X-Content-Type-Options", "nosniff");
  return new Response(object.file.stream(), { headers });
}
