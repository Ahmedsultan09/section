import { and, desc, eq, gte, lt, sql } from "drizzle-orm";
import Link from "next/link";
import styles from "@/app/admin-dashboard/admin-dashboard.module.css";
import { LeadDetailsDialog } from "@/app/admin-dashboard/LeadDetailsDialog";
import { getDb, schema } from "@/db";
import { ensureSeedAdminUser, requireAuthenticatedAdmin } from "@/lib/admin-auth";
import { Wordmark } from "@/components/SiteHeader";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type SearchParams = Promise<{
  page?: string;
  status?: string;
  from?: string;
  to?: string;
}>;

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

function parseDate(value: string | undefined, endOfDay = false) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  if (endOfDay) {
    date.setHours(23, 59, 59, 999);
  } else {
    date.setHours(0, 0, 0, 0);
  }
  return date;
}

function isLeadStatus(value: string | undefined): value is "contacted" | "not_contacted" {
  return value === "contacted" || value === "not_contacted";
}

export default async function AdminDashboardPage({ searchParams }: { searchParams?: SearchParams }) {
  await ensureSeedAdminUser();
  const admin = await requireAuthenticatedAdmin();
  const db = getDb();
  const filters = await searchParams;
  const page = Math.max(Number(filters?.page ?? 1) || 1, 1);
  const pageSize = 12;
  const offset = (page - 1) * pageSize;
  const fromDate = parseDate(filters?.from);
  const toDate = parseDate(filters?.to, true);
  const statusFilter = isLeadStatus(filters?.status) ? filters.status : undefined;

  const conditions = [];
  if (fromDate) conditions.push(gte(schema.leads.createdAt, fromDate));
  if (toDate) conditions.push(lt(schema.leads.createdAt, toDate));
  if (statusFilter) conditions.push(eq(schema.leads.status, statusFilter));

  const leadsQuery = db
    .select({
      id: schema.leads.id,
      name: schema.leads.name,
      phone: schema.leads.phone,
      message: schema.leads.message,
      choices: schema.leads.choices,
      status: schema.leads.status,
      createdAt: schema.leads.createdAt,
    })
    .from(schema.leads);

  const leads = conditions.length
    ? await leadsQuery.where(and(...conditions)).orderBy(desc(schema.leads.createdAt)).limit(pageSize).offset(offset)
    : await leadsQuery.orderBy(desc(schema.leads.createdAt)).limit(pageSize).offset(offset);

  const totalFilteredQuery = db.select({ total: sql<number>`count(*)::int` }).from(schema.leads);
  const [totalFiltered] = conditions.length
    ? await totalFilteredQuery.where(and(...conditions))
    : await totalFilteredQuery;

  const [stats] = await db
    .select({
      total: sql<number>`count(*)::int`,
      last24Hours: sql<number>`count(*) FILTER (WHERE ${schema.leads.createdAt} >= now() - interval '24 hours')::int`,
      last7Days: sql<number>`count(*) FILTER (WHERE ${schema.leads.createdAt} >= now() - interval '7 days')::int`,
    })
    .from(schema.leads);
  const totalPages = Math.max(Math.ceil(Number(totalFiltered?.total ?? 0) / pageSize), 1);
  const currentPage = Math.min(page, totalPages);
  const filterQuery = {
    ...(filters?.status ? { status: filters.status } : {}),
    ...(filters?.from ? { from: filters.from } : {}),
    ...(filters?.to ? { to: filters.to } : {}),
  };

  return (
    <main className={styles.shell}>
      <header className={styles.topbar}>
        <div className={styles.brandBlock}>
          <Wordmark tone="light" />
          <p className={styles.eyebrow}>SECTION / ADMIN DASHBOARD</p>
          <h1 className={styles.title}>Leads overview</h1>
          <p className={styles.user}>{admin.email}</p>
        </div>
        <form method="post" action="/api/admin/logout">
          <button className={styles.ghostButton} type="submit">
            Logout
          </button>
        </form>
      </header>

      <section className={styles.stats}>
        <article className={styles.stat}>
          <p>Total leads</p>
          <strong>{stats.total}</strong>
        </article>
        <article className={styles.stat}>
          <p>Last 24 hours</p>
          <strong>{stats.last24Hours}</strong>
        </article>
        <article className={styles.stat}>
          <p>Last 7 days</p>
          <strong>{stats.last7Days}</strong>
        </article>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <div>
            <p className={styles.eyebrow}>Newest first</p>
            <h2 className={styles.sectionTitle}>Recent leads</h2>
          </div>
          <p className={styles.sectionMeta}>
            Showing {leads.length} of {Number(totalFiltered.total)} leads
          </p>
        </div>

        <form className={styles.filters} method="get">
          <input name="page" type="hidden" value="1" />
          <label className={styles.filterField}>
            <span>Status</span>
            <select name="status" defaultValue={statusFilter ?? ""}>
              <option value="">All statuses</option>
              <option value="not_contacted">Not contacted</option>
              <option value="contacted">Contacted</option>
            </select>
          </label>
          <label className={styles.filterField}>
            <span>From</span>
            <input name="from" type="date" defaultValue={filters?.from ?? ""} />
          </label>
          <label className={styles.filterField}>
            <span>To</span>
            <input name="to" type="date" defaultValue={filters?.to ?? ""} />
          </label>
          <div className={styles.filterActions}>
            <button className={styles.filterButton} type="submit">
              Apply filters
            </button>
            <button className={styles.filterReset} type="submit" formAction="/admin-dashboard" formMethod="get">
              Reset
            </button>
          </div>
        </form>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Choices</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => {
                return (
                  <tr key={lead.id}>
                    <td data-label="Date">
                      <span className={styles.date}>{formatDate(lead.createdAt)}</span>
                    </td>
                    <td data-label="Name">
                      <span className={styles.name}>{lead.name}</span>
                    </td>
                    <td data-label="Phone">
                      <a className={styles.phone} href={`tel:${lead.phone}`}>
                        {lead.phone}
                      </a>
                    </td>
                    <td className={styles.messageCell} data-label="Message">
                      {lead.message}
                    </td>
                    <td data-label="Status">
                      <div className={styles.statusBadgeWrap}>
                        <span className={`${styles.statusBadge} ${lead.status === "contacted" ? styles.statusContacted : styles.statusPending}`}>
                          {lead.status === "contacted" ? "Contacted" : "Not contacted"}
                        </span>
                      </div>
                    </td>
                    <td data-label="Choices">
                      <LeadDetailsDialog leadId={lead.id} leadName={lead.name} leadStatus={lead.status} choices={lead.choices} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <Link className={styles.pageButton} href={{ pathname: "/admin-dashboard", query: { ...filterQuery, page: String(Math.max(currentPage - 1, 1)) } }} aria-disabled={currentPage <= 1}>
            Previous
          </Link>
          <span className={styles.pageMeta}>
            Page {currentPage} of {totalPages}
          </span>
          <Link className={styles.pageButton} href={{ pathname: "/admin-dashboard", query: { ...filterQuery, page: String(Math.min(currentPage + 1, totalPages)) } }} aria-disabled={currentPage >= totalPages}>
            Next
          </Link>
        </div>
      </section>
    </main>
  );
}
