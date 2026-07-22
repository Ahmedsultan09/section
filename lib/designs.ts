import type { DesignId } from "./site-types";

export const ENABLED_DESIGNS: DesignId[] = ["editorial", "immersive", "assemblage", "nocturne"];
export const DEFAULT_DESIGN: DesignId = "editorial";

export function getDesign(value?: string): DesignId {
  return ENABLED_DESIGNS.includes(value as DesignId) ? (value as DesignId) : DEFAULT_DESIGN;
}

export function withDesign(href: string, design: DesignId) {
  const [path, hash] = href.split("#");
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}design=${design}${hash ? `#${hash}` : ""}`;
}
