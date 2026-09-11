import { IBM_Plex_Sans_Thai, Inter } from "next/font/google";
import type { Lang } from "@/lib/i18n";
import { BASE } from "@/lib/site";
import "@/app/globals.css";

// Both fonts are downloaded at build time and served from this site, so the
// page needs nothing from Google at runtime.
const plex = IBM_Plex_Sans_Thai({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-latin", display: "swap" });

// Decides the theme before first paint. Choosing after the stylesheet has
// painted is what causes the white/dark flash on load, so this cannot be a
// React effect — it has to be the very first script in <head>.
const themeScript = `(function(){try{var s=localStorage.getItem("aetox-theme");var t=s||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;

// One <html> for both languages. Each language has its own root layout only
// so that lang= is right in the static HTML — everything else is shared here.
export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning className={`${plex.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href={`${BASE}/favicon.svg`} type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
