// Every outward link on the page, in one place. The Store id and the winget
// line are the two that change if the listing is ever re-published.

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = "https://mikedev115.github.io/aetox-landing/";

// The app repo's own Pages. A copy of the privacy policy has to stay there:
// that URL is registered with the Microsoft Store listing. This site carries
// the same policy at /privacy/ and /th/privacy/ — see privacyPath().
export const AETOX_PAGES = "https://mikedev115.github.io/Aetox/";
export const STORE_PRIVACY_URL = `${AETOX_PAGES}privacy.html`;
// The site's pages. Every one exists in both languages: English at the root,
// Thai under /th/. The header, the footer and the language switch all draw
// from this list, so adding a page here is what makes it reachable.
export const PAGES = ["home", "features", "pricing", "safety", "work", "faq", "supporters", "download", "privacy"] as const;
export type PageKey = (typeof PAGES)[number];
const SLUG: Record<PageKey, string> = {
  home: "", features: "features/", pricing: "pricing/", safety: "safety/", work: "work/", faq: "faq/", supporters: "supporters/", download: "download/", privacy: "privacy/",
};
/** Site-relative href of a page, e.g. /aetox-landing/th/pricing/ */
export const pagePath = (lang: "en" | "th", page: PageKey = "home") => `${BASE}${lang === "en" ? "/" : "/th/"}${SLUG[page]}`;
/** Absolute URL of a page, for canonical/alternate/og tags. */
export const pageUrl = (lang: "en" | "th", page: PageKey = "home") => new URL(`${lang === "en" ? "" : "th/"}${SLUG[page]}`, SITE_URL).toString();
export const privacyPath = (lang: "en" | "th") => pagePath(lang, "privacy");
export const homePath = (lang: "en" | "th") => pagePath(lang, "home");
export const CASE_STUDIES_URL = `${AETOX_PAGES}case-studies/web-pages/restaurant.html`;

export const STORE_URL = "https://apps.microsoft.com/detail/9N4KKBRRSCZZ";
export const WINGET_CMD = "winget install --id=9N4KKBRRSCZZ --source=msstore";
export const GITHUB = "https://github.com/Mikedev115/Aetox";
export const RELEASES = `${GITHUB}/releases/latest`;
export const ISSUES = `${GITHUB}/issues`;
export const BENCHMARK_MD = `${GITHUB}/blob/main/BENCHMARK.md`;
export const ARCHITECTURE_MD = `${GITHUB}/blob/main/ARCHITECTURE.md`;
export const LICENSE = `${GITHUB}/blob/main/LICENSE`;
export const THIRD_PARTY = `${GITHUB}/blob/main/THIRD-PARTY-NOTICES.md`;
export const CONTACT_MAIL = "mailto:phrmsawanachyphl@gmail.com";
export const DEMO_VIDEO = "https://www.youtube.com/watch?v=FcbsND9iRhk";

/** A file served from this site's public/ folder. */
export const asset = (name: string) => `${BASE}/assets/${name}`;
