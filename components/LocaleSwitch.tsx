"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site-types";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "en" ? "ar" : "en";
  const href = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);

  return <Link className="locale-switch" href={href} aria-label={locale === "en" ? "العربية" : "English"}>{locale === "en" ? "AR" : "EN"}</Link>;
}
