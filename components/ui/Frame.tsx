"use client";
import type { CSSProperties, ReactNode } from "react";
import { useLightbox } from "@/components/dialogs/Lightbox";

export type Shot = { src: string; alt: string; width: number; height: number; eager?: boolean };

/**
 * The app, in a window. Every screenshot on the page sits in the same frame,
 * and clicking one opens it in the lightbox. Pass `href` to make the frame a
 * link instead (used for the video card); pass neither for a frame that only
 * holds children.
 */
export default function Frame({ addr, shot, href, children, className, style }: {
  addr?: string; shot?: Shot; href?: string; children?: ReactNode; className?: string; style?: CSSProperties;
}) {
  const open = useLightbox();
  const chrome = (
    <div className="chrome" aria-hidden="true"><i /><i /><i />{addr ? <span className="addr">{addr}</span> : null}</div>
  );
  const img = shot ? (
    <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} decoding="async"
      loading={shot.eager ? "eager" : "lazy"} fetchPriority={shot.eager ? "high" : undefined} />
  ) : null;
  const cls = ["frame", className].filter(Boolean).join(" ");

  if (href) {
    return <a className={cls} href={href} target="_blank" rel="noopener" style={style}>{chrome}{img}{children}</a>;
  }
  if (shot) {
    return (
      <button type="button" className={`shot ${cls}`} style={style} onClick={() => open(shot.src, shot.alt)}>
        {chrome}{img}{children}
      </button>
    );
  }
  return <div className={cls} style={style}>{chrome}{children}</div>;
}
