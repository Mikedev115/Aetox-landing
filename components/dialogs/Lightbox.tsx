"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Open = (src: string, alt: string) => void;
const Ctx = createContext<Open>(() => {});
export const useLightbox = () => useContext(Ctx);

// One native <dialog> for the whole page — it gives Esc, the backdrop and
// focus return for free, which is why this is not a div with a z-index.
export default function LightboxProvider({ label, close, children }: { label: string; close: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);

  const open = useCallback<Open>((src, alt) => setImg({ src, alt }), []);
  useEffect(() => { if (img && ref.current && !ref.current.open) ref.current.showModal(); }, [img]);

  return (
    <Ctx.Provider value={open}>
      {children}
      <dialog id="lightbox" ref={ref} aria-label={label}
        onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
        onClose={() => setImg(null)}>
        <button className="lb-close" type="button" aria-label={close} onClick={() => ref.current?.close()}>✕</button>
        {img ? <img src={img.src} alt={img.alt} /> : null}
      </dialog>
    </Ctx.Provider>
  );
}
