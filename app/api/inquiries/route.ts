import { signFileAccess } from "@/lib/inquiry-security";
import { patchInquiry, saveInquiry, saveInquiryAttachment } from "@/lib/inquiry-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const allowedTypes = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);
const rateWindow = new Map<string, number[]>();

type RuntimeEnv = {
  RESEND_API_KEY?: string;
  INQUIRY_TO_EMAIL?: string;
  INQUIRY_FROM_EMAIL?: string;
  INQUIRY_FILE_SECRET?: string;
};

function value(data: FormData, key: string) {
  const entry = data.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateWindow.get(ip) ?? []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  rateWindow.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("cf-connecting-ip") ?? "unknown";
  if (isRateLimited(ip)) return Response.json({ error: "Too many requests" }, { status: 429 });

  const data = await request.formData();
  if (value(data, "website")) return Response.json({ id: crypto.randomUUID(), status: "received" });

  if (!value(data, "name") || !value(data, "phone") || value(data, "consent") !== "true") return Response.json({ error: "Name, phone and consent are required" }, { status: 400 });
  if (value(data, "email") && !/^\S+@\S+\.\S+$/.test(value(data, "email"))) return Response.json({ error: "Invalid email" }, { status: 400 });

  let capabilities: string[];
  try { capabilities = JSON.parse(value(data, "capabilities")); } catch { capabilities = []; }
  if (!Array.isArray(capabilities) || capabilities.length === 0 || capabilities.some((item) => typeof item !== "string")) return Response.json({ error: "Choose at least one project element" }, { status: 400 });

  const files = data.getAll("files").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (files.length > 3 || files.some((file) => file.size > 10 * 1024 * 1024 || !allowedTypes.has(file.type))) return Response.json({ error: "Invalid attachments" }, { status: 400 });

  const runtime = process.env as unknown as RuntimeEnv;

  const id = crypto.randomUUID();
  const createdAt = new Date();
  const email = value(data, "email");
  const projectName = value(data, "projectName") || "Website inquiry";
  const brief = value(data, "brief") || "No additional brief provided.";

  saveInquiry({
    id, createdAt, status: "received", locale: value(data, "locale") === "ar" ? "ar" : "en",
    name: value(data, "name"), company: value(data, "company") || "Website inquiry", role: value(data, "role") || "Not specified", email: email || "Not provided", phone: value(data, "phone"), preferredContact: "phone",
    sector: value(data, "sector") || "Not specified", projectName, location: value(data, "location") || "Not specified", projectStage: value(data, "projectStage") || "not-sure-yet", capabilities: JSON.stringify(capabilities),
    serviceScope: value(data, "serviceScope") || "not-sure-yet", scale: value(data, "scale") || "Not specified", drawingsStatus: value(data, "drawingsStatus") || "Not specified", roleDetail: value(data, "roleDetail") || null,
    targetDelivery: value(data, "targetDelivery") || "Not specified", budgetBand: value(data, "budgetBand") || "Not determined", procurementStatus: value(data, "procurementStatus") || "Not specified", decisionTimeline: value(data, "decisionTimeline") || "Not specified",
    brief, consent: true, sourceIp: ip, userAgent: request.headers.get("user-agent"),
  });

  const stored: Array<{ key: string; name: string }> = [];
  try {
    for (const file of files) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
      const key = `inquiries/${id}/${crypto.randomUUID()}-${safeName}`;
      saveInquiryAttachment({ id: crypto.randomUUID(), inquiryId: id, storageKey: key, originalName: file.name, mimeType: file.type, bytes: file.size, createdAt, file });
      stored.push({ key, name: file.name });
    }
  } catch (error) {
    patchInquiry(id, { status: "attachment_failed", notificationError: error instanceof Error ? error.message.slice(0, 500) : "Attachment storage failed" });
    return Response.json({ error: "Attachments could not be stored" }, { status: 500 });
  }

  try {
    await notifyTeam(request, runtime, id, stored, {
      name: value(data, "name"), company: value(data, "company") || "Website inquiry", email, phone: value(data, "phone"), project: projectName, sector: value(data, "sector") || "Not specified", brief, capabilities,
    });
    patchInquiry(id, { status: "notified" });
  } catch (error) {
    patchInquiry(id, { status: "notification_pending", notificationError: error instanceof Error ? error.message.slice(0, 500) : "Notification failed" });
  }

  return Response.json({ id, status: "received" }, { status: 201 });
}

async function notifyTeam(request: Request, runtime: RuntimeEnv, id: string, files: Array<{ key: string; name: string }>, details: { name: string; company: string; email: string; phone: string; project: string; sector: string; brief: string; capabilities: string[] }) {
  if (!runtime.RESEND_API_KEY || !runtime.INQUIRY_TO_EMAIL || !runtime.INQUIRY_FROM_EMAIL) throw new Error("Email configuration is incomplete");
  const expires = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const origin = new URL(request.url).origin;
  const links = runtime.INQUIRY_FILE_SECRET ? await Promise.all(files.map(async (file) => {
    const sig = await signFileAccess(file.key, expires, runtime.INQUIRY_FILE_SECRET!);
    return `<li><a href="${origin}/api/inquiry-files?key=${encodeURIComponent(file.key)}&expires=${expires}&sig=${sig}">${escapeHtml(file.name)}</a> <small>(expires in 7 days)</small></li>`;
  })) : [];
  const html = `<div style="font-family:Arial,sans-serif;max-width:680px"><p style="color:#6b6b55">SECTION / NEW PROJECT INQUIRY</p><h1>${escapeHtml(details.project)}</h1><p><strong>${escapeHtml(details.name)}</strong> — ${escapeHtml(details.company)}</p><p>${escapeHtml(details.email)} · ${escapeHtml(details.phone)}</p><hr><p><strong>Sector:</strong> ${escapeHtml(details.sector)}</p><p><strong>Project elements:</strong> ${escapeHtml(details.capabilities.join(", "))}</p><p>${escapeHtml(details.brief)}</p>${links.length ? `<h3>Private files</h3><ul>${links.join("")}</ul>` : ""}<p style="color:#777">Inquiry ID: ${id}</p></div>`;
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${runtime.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: runtime.INQUIRY_FROM_EMAIL, to: [runtime.INQUIRY_TO_EMAIL], ...(details.email ? { reply_to: details.email } : {}), subject: `SECTION inquiry — ${details.project}`, html }) });
  if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!);
}
