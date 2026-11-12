"use client";
import { useState } from "react";

// The whole page as Markdown, on the clipboard, the way every docs site now
// offers it: paste one page into a model instead of sending it a link.
export default function CopyPage({ md, label, copied, copyLabel }: { md: string; label: string; copied: string; copyLabel: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(md);
    } catch {
      /* clipboard blocked: the page is still selectable */
    }
    setDone(true);
    setTimeout(() => setDone(false), 1400);
  };
  return (
    <button type="button" className={`docs-copy${done ? " done" : ""}`} onClick={copy} aria-label={copyLabel}>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </svg>
      {done ? copied : label}
    </button>
  );
}
