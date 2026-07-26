import type { DesignId } from "./site-types";

export const ENABLED_DESIGNS: DesignId[] = ["nocturne"];
export const DEFAULT_DESIGN: DesignId = "nocturne";

export function getDesign(value?: string): DesignId {
  return ENABLED_DESIGNS.includes(value as DesignId) ? (value as DesignId) : DEFAULT_DESIGN;
}

export function withDesign(href: string, design: DesignId) {
  void design;
  return href;
}
