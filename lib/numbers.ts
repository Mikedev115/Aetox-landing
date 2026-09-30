// Every published number that appears on the site, once. Where each one is
// measured is in the app repo's docs/reports/PUBLISHED-NUMBERS.md; the method is in
// BENCHMARK.md. Components import the values; prose in lib/i18n writes
// {DISK_MB} and the like, and dict() fills those in — so a new release means
// editing this file, not hunting through two dictionaries.
//
// Package sizes and providers: 30 Sep 2026, v1.9.4. Other figures retain their
// own measurement dates; the test counts below are historical, not recounted.
export const NUMBERS = {
  DISK_MB: "91.2", // v1.9.4: 58,240,000 + 37,425,152 bytes = 91.2333984375 MiB
  INSTALLER_MB: "37.0", // aetox-amd64-installer.exe on v1.9.4 (38,775,372 bytes)
  TESTS: "5,754", // Go + UI, measured on v1.7.2 on 17 Sep 2026 (dated in the app README)
  TESTS_GO: "3,648",
  TESTS_UI: "2,106",
  TURN_MS: "0.32", // one turn assembled, 174.9 KB memory, 13 Aug 2026
  TOOLS: "35", // engine 34 + the window's browser
  TOKENS_PER_REQUEST: "10,700",
  PROVIDERS: "28", // the app's internal/provider/catalog.go, not counting the built-in aetox
} as const;

const TOKEN = /\{([A-Z_]+)\}/g;

/** Replaces {NAME} in a string with the number of that name. Unknown names are left alone. */
export const fillNumbers = (s: string) => s.replace(TOKEN, (m, k: string) => (k in NUMBERS ? NUMBERS[k as keyof typeof NUMBERS] : m));

/** The same, through every string of a dictionary. */
export function fillDeep<T>(v: T): T {
  if (typeof v === "string") return fillNumbers(v) as T;
  if (Array.isArray(v)) return v.map(fillDeep) as T;
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fillDeep(x)])) as T;
  return v;
}
