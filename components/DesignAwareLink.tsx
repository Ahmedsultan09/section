"use client";

import Link, { type LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getDesign, withDesign } from "@/lib/designs";

type Props = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { children: ReactNode };

export function DesignAwareLink({ href, children, ...props }: Props) {
  const searchParams = useSearchParams();
  const design = getDesign(searchParams.get("design") ?? undefined);
  const target = typeof href === "string" && href.startsWith("/") ? withDesign(href, design) : href;
  return <Link href={target} {...props}>{children}</Link>;
}
