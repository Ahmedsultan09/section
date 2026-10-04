import { getDb, schema } from "@/db";
import { LeadFileError, MAX_REQUEST_BYTES, validateLeadFiles } from "@/lib/lead-files";
import { uploadsBucket } from "@/lib/lead-storage";
import { saveWithLeadFiles } from "@/lib/lead-upload";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const rateWindow = new Map<string, number[]>();

function value(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function parseChoiceList(raw: string) {
  if (!raw) return [] as string[];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  } catch {
    return [];
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateWindow.get(ip) ?? []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  rateWindow.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("cf-connecting-ip") ??
    "unknown";
  if (isRateLimited(ip)) return Response.json({ error: "Too many requests" }, { status: 429 });

  const contentLength = Number(request.headers.get("content-length"));
  if (contentLength > MAX_REQUEST_BYTES) return Response.json({ error: "Upload exceeds the 64 MB request limit" }, { status: 413 });

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }
  if (value(data, "website")) return Response.json({ status: "received" });

  const name = value(data, "name");
  const phone = value(data, "phone");
  const message = value(data, "brief");
  const consent = value(data, "consent") === "true";
  const capabilities = parseChoiceList(value(data, "capabilities"));
  const projectReadiness = value(data, "projectReadiness");

  if (!name || !phone || !consent) {
    return Response.json({ error: "Name, phone and consent are required" }, { status: 400 });
  }

  if (!capabilities.length || !["has-brief", "needs-ideas"].includes(projectReadiness)) {
    return Response.json({ error: "Capabilities and project readiness are required" }, { status: 400 });
  }

  let files;
  try {
    files = await validateLeadFiles(data);
  } catch (error) {
    if (error instanceof LeadFileError) return Response.json({ error: error.message, code: "invalid_files" }, { status: 400 });
    throw error;
  }

  try {
    const bucket = files.length ? await uploadsBucket() : null;
    const leadId = await saveWithLeadFiles(files, bucket, (pending) => getDb().transaction(async (tx) => {
      const [lead] = await tx.insert(schema.leads).values({
        name,
        phone,
        message: message || "No message provided.",
        choices: {
          capabilities,
          projectReadiness: projectReadiness as "has-brief" | "needs-ideas",
          installationIncluded: true,
        },
        status: "not_contacted",
      }).returning({ id: schema.leads.id });
      if (pending.length) await tx.insert(schema.leadAttachments).values(pending.map((item) => ({ ...item, leadId: lead.id })));
      return lead.id;
    }));
    return Response.json({ id: leadId, status: "received" }, { status: 201 });
  } catch (error) {
    console.error("Inquiry submission failed", error);
    return Response.json({ error: "Could not save your inquiry. Please try again." }, { status: 500 });
  }
}
