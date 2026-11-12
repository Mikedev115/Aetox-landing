import { docsEn } from "@/lib/docs/en";
import { llmsText } from "@/lib/docs/md";
import { docsUrl } from "@/lib/site";

// /llms.txt — the docs section as one index file for an agent that lands here.
// It is built from the same page list the sidebar draws, so it cannot list a
// page that does not exist. Static export evaluates this at build time and
// writes out/llms.txt.
export const dynamic = "force-static";

export function GET() {
  const body = llmsText(
    "Aetox docs",
    "Aetox is a Windows desktop harness: it gives a model real hands — files, a terminal, a browser, a language server — for documents and for code. These pages cover install, first run, connecting a model, the two desks, teams, memory and skills, and updating.",
    docsEn.groups,
    docsEn.pages,
    docsUrl("en"),
  );
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
