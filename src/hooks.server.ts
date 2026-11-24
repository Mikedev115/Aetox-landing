import type { Handle } from "@sveltejs/kit/hooks";
import { LANG_TAG } from "#lib/i18n/index.ts";
import { langOf } from "#lib/lang.ts";

// lang= has to be right in the prerendered file: the stylesheet picks its font
// stack from html[lang], and a crawler reads the attribute before any script
// runs. app.html carries the placeholder, this fills it per page.
export const handle: Handle = ({ event, resolve }) =>
  resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", LANG_TAG[langOf(event.url.pathname)]),
  });
