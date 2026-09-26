// Every published number that appears on the site, once. Where each one is
// measured is in the app repo's docs/PUBLISHED-NUMBERS.md; the method is in
// BENCHMARK.md. Components import the values; prose in lib/i18n writes
// {DISK_MB} and the like, and dict() fills those in — so a new release means
// editing this file, not hunting through two dictionaries.
//
// 27 Sep 2026, v1.9.0.
export const NUMBERS = {
  DISK_MB: "90.4", // aetox.exe 55.1 + aetox-engine.exe 35.3 (MiB), the v1.9.0 portable zip's two files
  INSTALLER_MB: "36.7", // aetox-amd64-installer.exe on the v1.9.0 release (38,465,834 bytes)
  TESTS: "5,754", // Go + UI, the app README's count for v1.9.0
  TESTS_GO: "3,648",
  TESTS_UI: "2,106",
  TURN_MS: "0.32", // one turn assembled, 174.9 KB memory, 13 Aug 2026
  TOOLS: "35", // engine 34 + the window's browser
  TOKENS_PER_REQUEST: "10,700",
  PROVIDERS: "27", // the catalogue in dialogs/ProviderDialog.tsx, not counting the built-in aetox
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
