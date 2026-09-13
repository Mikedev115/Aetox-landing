"use client";
import { useState } from "react";
import type { Dict, Lang } from "@/lib/i18n";
import { GITHUB, pagePath, type PageKey } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import ThemeToggle from "./ThemeToggle";

// The top bar is the same on every page. Each entry is a page of its own —
// no in-page anchors — and the one we are on is marked. The policy is not in
// the bar; it lives in the footer with the other policies.
export default function Header({ t, lang, page, version }: { t: Dict["nav"]; lang: Lang; page: PageKey; version: string }) {
  const [open, setOpen] = useState(false);
  const other: Lang = lang === "en" ? "th" : "en";
  const links: [PageKey, string][] = [
    ["home", t.overview], ["features", t.uses], ["pricing", t.pricing], ["safety", t.safety], ["work", t.work], ["faq", t.faq],
  ];
  return (
    <header>
      <div className="wrap bar">
        <a className="lockup" href={pagePath(lang)} aria-label={t.backToTop}>
          <svg className="mark" aria-hidden="true"><use href="#logoA" /></svg><span>Aetox</span>
        </a>
        {/* one string on purpose — split JSX would put comment nodes in the static HTML */}
        <span className="ver"><span className="led" aria-hidden="true" />{`v${version} · Windows`}</span>
        <nav id="nav" className={`primary${open ? " open" : ""}`} aria-label="Main" onClick={() => setOpen(false)}>
          {links.map(([key, label]) => (
            <a key={key} href={pagePath(lang, key)} aria-current={key === page ? "page" : undefined}>{label}</a>
          ))}
          <a href={GITHUB}>GitHub</a>
        </nav>
        <div className="tools">
          <a className="icon-btn" href={pagePath(other, page)} title={t.langTitle} lang={other}>{other.toUpperCase()}</a>
          <ThemeToggle label={t.theme} />
          <PillLink href={pagePath(lang, "download")} aria-current={page === "download" ? "page" : undefined}>{t.download}</PillLink>
          <button className="icon-btn menu-btn" type="button" aria-label={t.menu} aria-controls="nav" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
