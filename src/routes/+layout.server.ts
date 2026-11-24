import { dict } from "#lib/i18n/index.ts";
import { buildHead, type Head } from "#lib/head.ts";
import { langOf } from "#lib/lang.ts";
import { routeOf } from "#lib/route.ts";
import { currentVersion } from "#lib/version.ts";
import type { LayoutServerLoad } from "./$types";

// Runs while the site is built, once per page: the dictionary, the version
// badge, the <head> and the language are settled then and written into that
// page's HTML, so the client never repeats this work.
//
// A path that names no page still renders — SvelteKit hands it to
// +error.svelte, which raises its own 404. Throwing here instead would make the
// error page fail as well, because the layout runs for it too.
export const load: LayoutServerLoad = async ({ url }) => {
  const route = routeOf(url.pathname);
  const lang = route?.lang ?? langOf(url.pathname);
  const [t, version] = await Promise.all([dict(lang), currentVersion()]);
  const head: Head | null = route ? await buildHead(route.lang, route.page, route.slug) : null;
  return { lang, page: route?.page ?? "home", slug: route?.slug, t, version, head };
};
