import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/db/schema";

type GlobalWithDb = typeof globalThis & {
  __sectionPgPool?: Pool;
  __sectionPgDb?: ReturnType<typeof drizzle>;
};

function requireDatabaseUrl() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is required for PostgreSQL.");
  return url;
}

export function getDb() {
  const globalScope = globalThis as GlobalWithDb;
  globalScope.__sectionPgPool ??= new Pool({ connectionString: requireDatabaseUrl() });
  globalScope.__sectionPgDb ??= drizzle(globalScope.__sectionPgPool);
  return globalScope.__sectionPgDb;
}

export { schema };
