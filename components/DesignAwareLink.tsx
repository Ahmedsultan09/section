"use client";

import Link, { type LinkProps } from "next/link";
import { useSyncExternalStore } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getDesign, withDesign } from "@/lib/designs";

type Props = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { children: ReactNode };

const subscribeToLocation = () => () => {};
const getLocationSearch = () => window.location.search;
const getServerLocationSearch = () => "";

export function DesignAwareLink({ href, children, ...props }: Props) {
  const search = useSyncExternalStore(subscribeToLocation, getLocationSearch, getServerLocationSearch);
  const design = getDesign(new URLSearchParams(search).get("design") ?? undefined);
  const target = typeof href === "string" && href.startsWith("/") ? withDesign(href, design) : href;
  return <Link href={target} {...props}>{children}</Link>;
}
