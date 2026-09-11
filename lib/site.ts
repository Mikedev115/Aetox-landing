// Every outward link on the page, in one place. The Store id and the winget
// line are the two that change if the listing is ever re-published.

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = "https://mikedev115.github.io/aetox-landing/";

// The app repo's own Pages. A copy of the privacy policy has to stay there:
// that URL is registered with the Microsoft Store listing. This site carries
// the same policy at /privacy/ and /th/privacy/ — see privacyPath().
export const AETOX_PAGES = "https://mikedev115.github.io/Aetox/";
export const STORE_PRIVACY_URL = `${AETOX_PAGES}privacy.html`;
export const privacyPath = (lang: "en" | "th") => `${BASE}${lang === "en" ? "/" : "/th/"}privacy/`;
export const homePath = (lang: "en" | "th") => `${BASE}${lang === "en" ? "/" : "/th/"}`;
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
