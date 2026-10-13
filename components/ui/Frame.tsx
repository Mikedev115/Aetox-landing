"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useLightbox } from "@/components/dialogs/Lightbox";

/** `video` turns the still into its poster: a muted loop that plays on its own. */
export type Shot = { src: string; alt: string; width: number; height: number; eager?: boolean; video?: string };

/**
 * The app, in a window. Every screenshot on the page sits in the same frame,
 * and clicking one opens it in the lightbox. Pass `href` to make the frame a
 * link instead (used for the video card); pass neither for a frame that only
 * holds children. A shot with `video` plays in place and opens nothing.
 */
export default function Frame({ addr, shot, href, children, className, style }: {
  addr?: string; shot?: Shot; href?: string; children?: ReactNode; className?: string; style?: CSSProperties;
}) {
  const open = useLightbox();
  const vid = useRef<HTMLVideoElement>(null);
  // a loop is motion: under reduced motion the poster frame stays still
  useEffect(() => {
    if (vid.current && matchMedia("(prefers-reduced-motion: reduce)").matches) { vid.current.pause(); vid.current.removeAttribute("autoplay"); }
  }, []);
  const chrome = (
    <div className="chrome" aria-hidden="true"><i /><i /><i />{addr ? <span className="addr">{addr}</span> : null}</div>
  );
  const img = shot?.video ? (
    <video ref={vid} src={shot.video} poster={shot.src} width={shot.width} height={shot.height} aria-label={shot.alt}
      muted loop playsInline autoPlay preload={shot.eager ? "auto" : "metadata"} />
  ) : shot ? (
    <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} decoding="async"
      loading={shot.eager ? "eager" : "lazy"} fetchPriority={shot.eager ? "high" : undefined} />
  ) : null;
  const cls = ["frame", className].filter(Boolean).join(" ");

  if (href) {
    return <a className={cls} href={href} target="_blank" rel="noopener" style={style}>{chrome}{img}{children}</a>;
  }
  if (shot && !shot.video) {
    return (
      <button type="button" className={`shot ${cls}`} style={style} onClick={() => open(shot.src, shot.alt)}>
        {chrome}{img}{children}
      </button>
    );
  }
  return <div className={cls} style={style}>{chrome}{img}{children}</div>;
}
