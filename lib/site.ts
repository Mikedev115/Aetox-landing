// Every outward link on the page, in one place. The Store id and the winget
// line are the two that change if the listing is ever re-published.

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const GITHUB_PAGES_URL = "https://mikedev115.github.io/Aetox-landing/";
const VERCEL_SITE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : undefined;

// Set NEXT_PUBLIC_SITE_URL on Vercel when its production domain differs from
// VERCEL_URL. GitHub Pages remains the local-development and fallback URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? VERCEL_SITE_URL ?? GITHUB_PAGES_URL;

// The app repo's own Pages. A copy of the privacy policy has to stay there:
// that URL is registered with the Microsoft Store listing. This site carries
// the same policy at /privacy/ and /th/privacy/ — see privacyPath(). Since the
// repo became Aetox-Harness, Pages serves it there; the old /Aetox/ path is a 404
// (checked 18 Oct 2026), so the Store listing has to point at this one too.
export const AETOX_PAGES = "https://mikedev115.github.io/Aetox-Harness/";
export const STORE_PRIVACY_URL = `${AETOX_PAGES}privacy.html`;
// The site's pages. Every one exists in both languages: English at the root,
// Thai under /th/. The header, the footer and the language switch all draw
// from this list, so adding a page here is what makes it reachable.
export const PAGES = ["home", "features", "pricing", "safety", "work", "faq", "supporters", "download", "privacy"] as const;
export type PageKey = (typeof PAGES)[number];
const SLUG: Record<PageKey, string> = {
  home: "", features: "features/", pricing: "pricing/", safety: "safety/", work: "work/", faq: "faq/", supporters: "supporters/", download: "download/", privacy: "privacy/",
};
/** Site-relative href of a page, e.g. /Aetox-landing/th/pricing/ */
export const pagePath = (lang: "en" | "th", page: PageKey = "home") => `${BASE}${lang === "en" ? "/" : "/th/"}${SLUG[page]}`;
/** Absolute URL of a page, for canonical/alternate/og tags. */
export const pageUrl = (lang: "en" | "th", page: PageKey = "home") => new URL(`${lang === "en" ? "" : "th/"}${SLUG[page]}`, SITE_URL).toString();
export const privacyPath = (lang: "en" | "th") => pagePath(lang, "privacy");
export const homePath = (lang: "en" | "th") => pagePath(lang, "home");
export const CASE_STUDIES_URL = `https://mikedev115.github.io/Aetox-Harness/case-studies/web-pages/restaurant.html`;

export const STORE_URL = "https://apps.microsoft.com/detail/9N4KKBRRSCZZ";
export const WINGET_CMD = "winget install --id=9N4KKBRRSCZZ --source=msstore";
export const GITHUB = "https://github.com/Mikedev115/Aetox";
export const RELEASES = `${GITHUB}/releases/latest`;
// The app's own installer straight off the latest release, so the button
// downloads the file instead of opening the release page. Not code-signed:
// SmartScreen asks once (the Store package is the signed one).
export const APP_SETUP_URL = `${GITHUB}/releases/latest/download/aetox-amd64-installer.exe`;
export const MOBILE_RELEASE = "https://github.com/Mikedev115/Aetox-Harness/releases/tag/mobile-v0.3.4";
export const MOBILE_APK = "https://github.com/Mikedev115/Aetox-Harness/releases/download/mobile-v0.3.4/Aetox-Mobile-Android-Test.apk";
// The console's own installer (app repo DECISIONS §333): a separate download
// from the app, never in the Store. Named off the app updater's suffixes.
export const CLI_SETUP_URL = `${GITHUB}/releases/latest/download/aetox-cli-setup.exe`;
export const ISSUES = `${GITHUB}/issues`;
// The measurement shelf moved under docs/reports/ on 2026-09-20; ARCHITECTURE.md
// is a private record since 2026-09-19 and has no public address any more.
export const BENCHMARK_MD = `${GITHUB}/blob/main/docs/reports/BENCHMARK.md`;
// Every report and the latest edition of each subject: the proof wall's method link.
export const REPORTS = `${GITHUB}/blob/main/docs/reports/README.md`;
export const CODING_BENCH = `${GITHUB}/blob/main/docs/reports/coding-harness-1.10.0/README.md`;
// The score tables the proof wall's "next harness" names point at, one per model and language.
export const CODING_LUNA = `${GITHUB}/blob/main/docs/reports/coding-harness-1.10.0/README.en.md#gpt-6-luna--reasoning-medium`;
export const CODING_TERRA = `${GITHUB}/blob/main/docs/reports/coding-harness-1.10.0/README.en.md#gpt-56-terra--reasoning-medium`;
export const CODING_LUNA_TH = `${CODING_BENCH}#gpt-6-luna--ความคิด-medium`;
export const CODING_TERRA_TH = `${CODING_BENCH}#gpt-56-terra--ความคิด-medium`;
// The security-skill on/off test (section 2 of that release's report).
export const SECURITY_BENCH = `${GITHUB}/blob/main/docs/reports/coding-harness-1.9.27/README.md#2-ชนะ-cweval-เพราะอะไร`;
// The two models every same-model number was measured on, on OpenAI's own pages.
export const MODEL_LUNA = "https://developers.openai.com/api/docs/models/gpt-6-luna";
export const MODEL_TERRA = "https://developers.openai.com/api/docs/models/gpt-5.6-terra";
// The Thai tax invoice card's tests, written by the Aetox team.
export const INVOICE_TESTS = `${GITHUB}/tree/main/docs/reports/coding-harness-2026-09-27/tasks/F2-thai-invoice/hidden-tests`;
export const LICENSE = `${GITHUB}/blob/main/LICENSE`;
export const THIRD_PARTY = `${GITHUB}/blob/main/THIRD-PARTY-NOTICES.md`;
export const CONTACT_MAIL = "mailto:phrmsawanachyphl@gmail.com";
export const DEMO_VIDEO = "https://www.youtube.com/watch?v=FcbsND9iRhk";

/** A file served from this site's public/ folder. */
export const asset = (name: string) => `${BASE}/assets/${name}`;

/** The share card for a page, one per language (the home hero and its proof). */
export const ogImage = (lang: "en" | "th") => new URL(lang === "th" ? "assets/og-th.png" : "assets/og.png", SITE_URL).toString();
