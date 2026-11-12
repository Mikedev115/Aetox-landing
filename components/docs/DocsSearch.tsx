"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { DocsUI } from "@/lib/docs";

// ⌘K, the way every set of docs people already read works. The index is built
// on the server from the same pages the sidebar draws, so it can never list a
// page that does not exist, and the search itself is a plain substring match —
// nine pages do not need an index file fetched from anywhere.
type Item = { slug: string; title: string; sub: string; group: string; headings: string[] };

export default function DocsSearch({ t, items, base }: { t: DocsUI; items: Item[]; base: string }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    setQ("");
    setActive(0);
    input.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((i) => [i.title, i.sub, i.group, ...i.headings].join(" ").toLowerCase().includes(term));
  }, [q, items]);

  return (
    <>
      <button type="button" className="docs-search" onClick={() => setOpen(true)} aria-label={t.search}>
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.6-3.6" />
        </svg>
        <span>{t.search}</span>
        <kbd>{t.searchHint}</kbd>
      </button>
      {open ? (
        <div className="docs-pal" role="dialog" aria-modal="true" aria-label={t.search} onClick={() => setOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <input
              ref={input}
              type="search"
              value={q}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              onChange={(e) => {
                setQ(e.target.value);
                setActive(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((a) => Math.min(a + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((a) => Math.max(a - 1, 0));
                } else if (e.key === "Enter") {
                  const hit = results[active];
                  if (hit) window.location.assign(`${base}${hit.slug}/`);
                }
              }}
            />
            {results.length ? (
              <ul>
                {results.map((r, i) => (
                  <li key={r.slug}>
                    <a
                      href={`${base}${r.slug}/`}
                      className={i === active ? "on" : undefined}
                      onMouseEnter={() => setActive(i)}
                    >
                      <b>{r.title}</b>
                      <span>{r.group}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty">{t.searchEmpty}</p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
