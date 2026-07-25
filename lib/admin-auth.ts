import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb, schema } from "@/db";

const SESSION_COOKIE = "section_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const DEFAULT_ADMIN_EMAIL = "sectionadmin@section.com";
const DEFAULT_ADMIN_PASSWORD = "Section@2026";
const HASH_PREFIX = "scrypt";

type SessionPayload = {
  userId: string;
  exp: number;
};

function authSecret() {
  const secret = process.env.ADMIN_AUTH_SECRET;
  if (!secret) throw new Error("ADMIN_AUTH_SECRET is required for admin authentication.");
  return secret;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function hashPassword(password: string, salt = randomBytes(16).toString("hex")) {
  const digest = scryptSync(password, salt, 64).toString("hex");
  return `${HASH_PREFIX}$${salt}$${digest}`;
}

function verifyPassword(password: string, storedHash: string) {
  const [prefix, salt, digest] = storedHash.split("$");
  if (prefix !== HASH_PREFIX || !salt || !digest) return false;
  const expected = Buffer.from(digest, "hex");
  const provided = Buffer.from(scryptSync(password, salt, 64).toString("hex"), "hex");
  return expected.length === provided.length && timingSafeEqual(expected, provided);
}

function signSessionPayload(payload: SessionPayload) {
  return createHmac("sha256", authSecret())
    .update(`${payload.userId}.${payload.exp}`)
    .digest("base64url");
}

function serializeSession(payload: SessionPayload) {
  const signature = signSessionPayload(payload);
  return `${payload.userId}.${payload.exp}.${signature}`;
}

function parseSession(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const [userId, expRaw, signature] = token.split(".");
  const exp = Number(expRaw);
  if (!userId || !signature || !Number.isFinite(exp) || exp <= Date.now()) return null;
  const payload = { userId, exp };
  const expected = signSessionPayload(payload);
  if (expected.length !== signature.length) return null;
  if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return null;
  return payload;
}

let seedPromise: Promise<void> | null = null;

export async function ensureSeedAdminUser() {
  if (seedPromise) return seedPromise;
  seedPromise = (async () => {
    const db = getDb();
    const [existing] = await db
      .select({ id: schema.users.id })
      .from(schema.users)
      .where(eq(schema.users.email, DEFAULT_ADMIN_EMAIL))
      .limit(1);

    if (existing) return;

    await db.insert(schema.users).values({
      email: DEFAULT_ADMIN_EMAIL,
      passwordHash: hashPassword(DEFAULT_ADMIN_PASSWORD),
      role: "admin",
    });
  })();
  return seedPromise;
}

export async function authenticateAdmin(email: string, password: string) {
  const db = getDb();
  const [user] = await db
    .select({
      id: schema.users.id,
      email: schema.users.email,
      passwordHash: schema.users.passwordHash,
      role: schema.users.role,
    })
    .from(schema.users)
    .where(eq(schema.users.email, normalizeEmail(email)))
    .limit(1);

  if (!user || user.role !== "admin") return null;
  if (!verifyPassword(password, user.passwordHash)) return null;
  return { id: user.id, email: user.email, role: user.role };
}

export function issueAdminSession(userId: string) {
  const exp = Date.now() + SESSION_TTL_SECONDS * 1000;
  return {
    token: serializeSession({ userId, exp }),
    maxAge: SESSION_TTL_SECONDS,
  };
}

export async function readAuthenticatedAdmin() {
  const cookieStore = await cookies();
  const session = parseSession(cookieStore.get(SESSION_COOKIE)?.value);
  if (!session) return null;
  const db = getDb();
  const [user] = await db
    .select({
      id: schema.users.id,
      email: schema.users.email,
      role: schema.users.role,
    })
    .from(schema.users)
    .where(eq(schema.users.id, session.userId))
    .limit(1);
  if (!user || user.role !== "admin") return null;
  return user;
}

export async function requireAuthenticatedAdmin() {
  const admin = await readAuthenticatedAdmin();
  if (!admin) redirect("/admin-dashboard/login");
  return admin;
}

export const adminSessionCookie = {
  name: SESSION_COOKIE,
  options: {
    path: "/",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_TTL_SECONDS,
  },
};
