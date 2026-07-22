"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site-types";
import { DesignAwareLink } from "./DesignAwareLink";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "en" ? "ar" : "en";
  const href = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);

  return <DesignAwareLink className="locale-switch" href={href} aria-label={locale === "en" ? "العربية" : "English"}>{locale === "en" ? "AR" : "EN"}</DesignAwareLink>;
}
