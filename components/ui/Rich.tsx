import type { ReactNode } from "react";
import { BENCHMARK_MD, CASE_STUDIES_URL, STORE_PRIVACY_URL } from "@/lib/site";

// Copy in lib/i18n carries a little inline markup so translators do not have
// to touch JSX: **bold**, `code`, [text](url). A url may also be one of the
// named links below, so the dictionaries never hard-code a URL that lib/site.ts
// already owns.
const NAMED_LINKS: Record<string, string> = { CASE_STUDIES_URL, STORE_PRIVACY_URL, BENCHMARK_MD };

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

export default function Rich({ text, className, as: Tag = "p" }: { text: string; className?: string; as?: "p" | "span" | "div" }) {
  const parts = text.split(TOKEN).filter(Boolean);
  const nodes: ReactNode[] = parts.map((part, i) => {
    if (part.startsWith("**")) return <b key={i}>{part.slice(2, -2)}</b>;
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = NAMED_LINKS[link[2]] ?? link[2];
      const external = /^https?:/.test(href);
      return (
        <a key={i} href={href} className="u" {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {link[1]}
        </a>
      );
    }
    return part;
  });
  return <Tag className={className}>{nodes}</Tag>;
}
