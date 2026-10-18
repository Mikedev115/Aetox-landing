// Every published number that appears on the site, once. Where each one is
// measured is in the app repo's docs/reports/PUBLISHED-NUMBERS.md; the method is in
// BENCHMARK.md. Components import the values; prose in lib/i18n writes
// {DISK_MB} and the like, and dict() fills those in — so a new release means
// editing this file, not hunting through two dictionaries.
//
// Installer size and providers: 18 Oct 2026, v1.10.0; disk: 18 Oct 2026, v1.9.28. Other figures
// retain their own measurement dates; the test counts below are historical, not recounted.
export const NUMBERS = {
  DISK_MB: "122.3", // v1.9.28 portable zip: 79,546,368 + 48,733,696 bytes, rounded from the byte total
  INSTALLER_MB: "48.9", // aetox-amd64-installer.exe on v1.10.0 (51,226,370 bytes, MiB)
  TESTS: "5,754", // Go + UI, measured on v1.7.2 on 17 Sep 2026 (dated in the app README)
  TESTS_GO: "3,648",
  TESTS_UI: "2,106",
  TURN_MS: "0.32", // one turn assembled, 174.9 KB memory, 13 Aug 2026
  TOOLS: "35", // engine 34 + the window's browser
  TOKENS_PER_REQUEST: "10,700",
  PROVIDERS: "31", // entries in the app's internal/provider/catalog.go, not counting the built-in aetox
  PROVIDERS_MORE: "24", // PROVIDERS minus the 5 marks on the provider card and Ollama + LM Studio on the local one
  // Same-model coding results: 11 tasks × 2 models × 3 rounds, hidden tests, the same account
  // for every harness (app repo docs/reports/coding-harness-1.10.0). "Others" = the best of
  // OpenCode, Codex CLI, omp and pi on that column.
  SECURE_US: "93.3", // CWEval func-sec@1, GPT-6 Luna
  SECURE_NEXT: "68.9", // omp, the best other harness on Luna
  MULTI_US: "95.2", // SlopCodeBench % tests passed, GPT-5.6 Terra
  MULTI_NEXT: "92.8", // OpenCode, the best other harness on Terra
  CHEAP_PCT: "91.6", // SlopCodeBench % tests passed, GPT-6 Luna on Aetox
  CHEAP_MIN: "26", // minutes for all 11 tasks, GPT-6 Luna on Aetox
  BIG_PCT: "91.3–92.8", // the other harnesses on GPT-5.6 Terra, same column
  BIG_MIN: "46–63", // their minutes on GPT-5.6 Terra
  PRICE_X: "20", // GPT-5.6 Terra costs about 20× GPT-6 Luna per token (models.dev list prices)
} as const;

// CWEval func-sec@1 on GPT-6 Luna, same account for every harness, judged by hidden
// tests (app repo docs/reports/coding-harness-1.10.0).
export const CODING_SECURE: readonly (readonly [string, number])[] = [
  ["Aetox", 93.3], ["omp", 68.9], ["OpenCode", 66.7], ["Codex CLI", 66.7], ["pi", 64.4],
];

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
