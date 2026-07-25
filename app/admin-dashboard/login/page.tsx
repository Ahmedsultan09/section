import styles from "@/app/admin-dashboard/admin-dashboard.module.css";

const errorMessages: Record<string, string> = {
  invalid: "Invalid email or password.",
  missing: "Email and password are required.",
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const errorCode = (await searchParams)?.error ?? "";
  const error = errorMessages[errorCode];

  return (
    <main className={styles.shell}>
      <section className={styles.loginWrap}>
        <article className={styles.panel}>
          <p className={styles.eyebrow}>SECTION / ADMIN</p>
          <h1 className={styles.title}>Admin dashboard login</h1>
          <p className={styles.sub}>Use your admin credentials to access leads and analytics.</p>
          {error ? <p className={styles.error}>{error}</p> : null}
          <form className={styles.form} method="post" action="/api/admin/login">
            <label className={styles.field}>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className={styles.field}>
              <span>Password</span>
              <input type="password" name="password" autoComplete="current-password" required />
            </label>
            <button className={styles.button} type="submit">
              Sign in
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
