import type { RequestHandler } from "./$types";
import { docs as loadDocs } from "#lib/docs/index.ts";
import { llmsText } from "#lib/docs/md.ts";
import { docsUrl } from "#lib/site.ts";

// /llms.txt — the docs section as one index file for an agent that lands here.
// It is built from the same page list the sidebar draws, so it cannot list a
// page that does not exist. The build writes it out as a plain text file.
export const prerender = true;

const TITLE = "Aetox docs";
const SUMMARY =
  "Aetox is a Windows desktop harness: it gives a model real hands — files, a terminal, a browser, a language server — for documents and for code. These pages cover install, first run, connecting a model, the two desks, teams, memory and skills, and updating.";

export const GET: RequestHandler = () => {
  const d = loadDocs("en");
  const body = llmsText(TITLE, SUMMARY, d.groups, d.pages, docsUrl("en"));
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
