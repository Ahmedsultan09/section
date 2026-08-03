import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource/saira/400.css";
import "@fontsource/saira/500.css";
import "@fontsource/saira/600.css";
import "@fontsource/saira-condensed/500.css";
import "@fontsource/saira-condensed/600.css";
import "@fontsource/saira-condensed/700.css";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@ibm/plex-sans-arabic/css/ibm-plex-sans-arabic-default.min.css";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

const nocturneBold = localFont({
  src: "./fonts/brand-bold.woff2",
  variable: "--font-nocturne-bold",
  display: "swap",
});

const nocturneVariable = localFont({
  src: "./fonts/brand-variable.woff2",
  variable: "--font-nocturne-variable",
  display: "swap",
  weight: "100 900",
});

const nocturneLight = localFont({
  src: "./fonts/brand-light.woff2",
  variable: "--font-nocturne-light",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SECTION",
  description: "B2B digital showroom for design, engineering, manufacturing, and installation.",
  icons: {
    icon: "/brand/section-favicon.png",
    shortcut: "/brand/section-favicon.png",
    apple: "/brand/section-favicon.png",
  },
  openGraph: {
    title: "SECTION — Made with wood",
    description: "Design, manufacturing and installation for ambitious interiors.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FEDD10",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${nocturneBold.variable} ${nocturneVariable.variable} ${nocturneLight.variable}`} lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
