import { env } from "cloudflare:workers";
import { verifyFileAccess } from "@/lib/inquiry-security";

export const dynamic = "force-dynamic";

type RuntimeEnv = { UPLOADS?: R2Bucket; INQUIRY_FILE_SECRET?: string };

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key") ?? "";
  const signature = url.searchParams.get("sig") ?? "";
  const expires = Number(url.searchParams.get("expires"));
  const runtime = env as unknown as RuntimeEnv;
  if (!key.startsWith("inquiries/") || !runtime.UPLOADS || !runtime.INQUIRY_FILE_SECRET || !(await verifyFileAccess(key, expires, signature, runtime.INQUIRY_FILE_SECRET))) return new Response("Link invalid or expired", { status: 403 });
  const object = await runtime.UPLOADS.get(key);
  if (!object) return new Response("File not found", { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", "private, no-store");
  headers.set("X-Content-Type-Options", "nosniff");
  return new Response(object.body, { headers });
}
