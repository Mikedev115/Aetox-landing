"use client";
import { useState } from "react";
import type { Dict } from "@/lib/i18n";
import { RELEASES, STORE_URL, WINGET_CMD, asset } from "@/lib/site";
import Frame from "./ui/Frame";
import { PillLink } from "./ui/Pill";

export default function Hero({ t }: { t: Dict["hero"] }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(WINGET_CMD); } catch { /* clipboard blocked: the text is still selectable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="hero">
      <div className="wrap">
        <h1>{t.h1Before}<span className="hl">{t.h1Highlight}</span>{t.h1After}</h1>
        <p className="lede">{t.lede}</p>
        <div className="cta">
          <PillLink href={STORE_URL}>{t.download}</PillLink>
          <PillLink variant="ghost" trail="arrow" href={RELEASES}>{t.other}</PillLink>
        </div>
        <p className="fine">{t.fine}</p>
        <div className="cmd">
          <span>&gt;</span><b>{WINGET_CMD}</b>
          <button className={`copy${copied ? " done" : ""}`} type="button" aria-label={t.copyLabel} onClick={copy}>{copied ? t.copied : t.copy}</button>
        </div>
        <div className="hero-visual">
          <Frame addr={t.frameAddr} shot={{ src: asset("hero-plan.png"), alt: t.imgAlt, width: 1920, height: 1140, eager: true }} />
        </div>
      </div>
    </div>
  );
}
