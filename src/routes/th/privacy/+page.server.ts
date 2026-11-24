import { policy } from "#lib/i18n/index.ts";
import type { PageServerLoad } from "./$types";

// The policy text is one dictionary per language, read while the page is built
// so the whole text is in the prerendered HTML (as the React page did).
export const load: PageServerLoad = async () => ({ policy: await policy("th") });
