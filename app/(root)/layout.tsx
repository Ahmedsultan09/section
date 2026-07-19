import "@fontsource/saira/400.css";
import "@fontsource/saira/500.css";
import "@fontsource/saira/600.css";
import "@fontsource/saira-condensed/500.css";
import "@fontsource/saira-condensed/600.css";
import "@fontsource/saira-condensed/700.css";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@ibm/plex-sans-arabic/css/ibm-plex-sans-arabic-default.min.css";
import "../globals.css";

export default function RedirectLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
