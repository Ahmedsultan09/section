import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: "SECTION",
  description: "B2B digital showroom for design, engineering, manufacturing, and installation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FEDD10",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
