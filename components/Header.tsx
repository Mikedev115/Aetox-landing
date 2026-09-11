"use client";
import { useState } from "react";
import type { Dict, Lang } from "@/lib/i18n";
import { langPath } from "@/lib/i18n";
import { BASE, GITHUB, STORE_URL, homePath, privacyPath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import ThemeToggle from "./ThemeToggle";

/** `langHref` overrides where the language button goes (the policy page points at its own twin). */
export default function Header({ t, lang, version, langHref }: { t: Dict["nav"]; lang: Lang; version: string; langHref?: string }) {
  const [open, setOpen] = useState(false);
  const other: Lang = lang === "en" ? "th" : "en";
  // absolute to the home page, so the same header works from /privacy/
  const home = homePath(lang);
  const links: [string, string][] = [
    [`${home}#modes`, t.overview], [`${home}#uses`, t.uses], [`${home}#pricing`, t.pricing],
    [`${home}#safety`, t.safety], [`${home}#work`, t.work], [`${home}#faq`, t.faq],
    [privacyPath(lang), t.privacy], [GITHUB, "GitHub"],
  ];
  return (
    <header>
      <div className="wrap bar">
        <a className="lockup" href={home} aria-label={t.backToTop}>
          <svg className="mark" aria-hidden="true"><use href="#logoA" /></svg><span>Aetox</span>
        </a>
        {/* one string on purpose — split JSX would put comment nodes in the static HTML */}
        <span className="ver"><span className="led" aria-hidden="true" />{`v${version} · Windows`}</span>
        <nav id="nav" className={`primary${open ? " open" : ""}`} aria-label="Main" onClick={() => setOpen(false)}>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="tools">
          <a className="icon-btn" href={langHref ?? `${BASE}${langPath(other)}`} title={t.langTitle} lang={other}>{other.toUpperCase()}</a>
          <ThemeToggle label={t.theme} />
          <PillLink href={STORE_URL}>{t.get}</PillLink>
          <button className="icon-btn menu-btn" type="button" aria-label={t.menu} aria-controls="nav" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
