import { getDb, schema } from "@/db";

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

  const data = await request.formData();
  if (value(data, "website")) return Response.json({ status: "received" });

  const name = value(data, "name");
  const phone = value(data, "phone");
  const message = value(data, "brief");
  const consent = value(data, "consent") === "true";
  const capabilities = parseChoiceList(value(data, "capabilities"));
  const serviceScope = parseChoiceList(value(data, "serviceScope"));
  const projectStage = parseChoiceList(value(data, "projectStage"));

  if (!name || !phone || !consent) {
    return Response.json({ error: "Name, phone and consent are required" }, { status: 400 });
  }

  if (!capabilities.length || !serviceScope.length || !projectStage.length) {
    return Response.json({ error: "All contact steps must include at least one option" }, { status: 400 });
  }

  const db = getDb();
  const [lead] = await db
    .insert(schema.leads)
    .values({
      name,
      phone,
      message: message || "No message provided.",
      choices: {
        capabilities,
        serviceScope,
        projectStage,
      },
      status: "not_contacted",
    })
    .returning({ id: schema.leads.id });

  return Response.json({ id: lead.id, status: "received" }, { status: 201 });
}
