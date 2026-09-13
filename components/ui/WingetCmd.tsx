"use client";
import { useState } from "react";
import { WINGET_CMD } from "@/lib/site";

/** The one-line install command with a copy button. */
export default function WingetCmd({ t }: { t: { copy: string; copied: string; copyLabel: string } }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(WINGET_CMD); } catch { /* clipboard blocked: the text is still selectable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="cmd">
      <span>&gt;</span><b>{WINGET_CMD}</b>
      <button className={`copy${copied ? " done" : ""}`} type="button" aria-label={t.copyLabel} onClick={copy}>{copied ? t.copied : t.copy}</button>
    </div>
  );
}
