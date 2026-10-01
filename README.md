# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Admin Dashboard + Leads (PostgreSQL)

This project now stores contact leads in PostgreSQL and includes a protected admin
portal at `/admin-dashboard`.

### Required environment variables

- `DATABASE_URL`: PostgreSQL connection string.
- `ADMIN_AUTH_SECRET`: long random secret used to sign admin sessions.

The inquiry form also uses the private Cloudflare R2 `UPLOADS` binding declared in
`.openai/hosting.json`. File uploads require the vinext/Cloudflare runtime; plain
`next dev` does not provide that binding. Inquiries without files continue to work
without R2. Use `npm run dev:cloudflare` to test uploads with the local R2
binding.

### Inquiry attachments

Apply `db/migrations/20261001_lead_attachments.sql` to an existing PostgreSQL database
before deploying the upload feature. It creates `lead_attachments` and its enum.
The earlier `drizzle/0000`–`0003` SQL files contain SQLite statements and must
not be replayed against PostgreSQL. Keep a database backup before applying the
new migration.

```bash
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f db/migrations/20261001_lead_attachments.sql
```

The form accepts up to three JPEG/PNG/WebP photos and three DWG/DXF/STEP/STP/SKP/3DM
files, at 10 MiB each. Files are private in R2; only authenticated admins can
preview photos or download CAD files through the lead dialog.

Copy `.env.example` to `.env.local` (or `.env`) and update values before running:

```bash
cp .env.example .env.local
```

### Default seeded admin

On first login request, the app seeds an admin user if missing:

- Email: `sectionadmin@section.com`
- Password: `Section@2026`
- Role: `admin`

### Data model

- `users`: `email`, `password_hash`, `role`, timestamps.
- `leads`: `name`, `phone`, `message`, `choices` (JSON), timestamp.

### Accessing PostgreSQL in TablePlus

1. Open TablePlus → **Create a new connection** → **PostgreSQL**.
2. Use the same host/port/database/user/password from `DATABASE_URL`.
3. After connect, open tables: `users` and `leads`.
4. To inspect data quickly, run:

```sql
SELECT id, email, role, created_at FROM users ORDER BY created_at DESC;
SELECT id, name, phone, message, choices, created_at FROM leads ORDER BY created_at DESC;
```

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
