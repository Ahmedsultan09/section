import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SECTION — Made with wood",
    short_name: "SECTION",
    description: "Custom wood manufacturing, joinery, interior fit-out and installation for ambitious spaces.",
    start_url: "/en",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FEDD10",
    lang: "en",
    dir: "ltr",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
