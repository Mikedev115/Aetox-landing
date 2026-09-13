// Every published number that appears on the site, once. Where each one is
// measured is in the app repo's docs/PUBLISHED-NUMBERS.md; the method is in
// BENCHMARK.md. Components import the values; prose in lib/i18n writes
// {DISK_MB} and the like, and dict() fills those in — so a new release means
// editing this file, not hunting through two dictionaries.
//
// 13 Sep 2026, v1.6.1.
export const NUMBERS = {
  DISK_MB: "80.8", // aetox.exe 49.2 + aetox-engine.exe 31.7, both files on disk after install
  INSTALLER_MB: "33.6", // the MSIX the Store ships
  TESTS: "5,118", // Go + UI
  TESTS_GO: "3,371",
  TESTS_UI: "1,747",
  TURN_MS: "0.32", // one turn assembled, 174.9 KB memory, 13 Aug 2026
  TOOLS: "35", // engine 34 + the window's browser
  TOKENS_PER_REQUEST: "10,300",
  PROVIDERS: "24", // the catalogue in dialogs/ProviderDialog.tsx, not counting the built-in aetox
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
