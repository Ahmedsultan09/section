import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { children: ReactNode };

export function DesignAwareLink({ href, children, ...props }: Props) {
  return <Link href={href} {...props}>{children}</Link>;
}
