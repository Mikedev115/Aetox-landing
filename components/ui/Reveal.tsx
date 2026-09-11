"use client";
import { createElement, useEffect, useRef, type ReactNode } from "react";

// Fades a block in the first time it scrolls into view. Progressive: the CSS
// only hides [data-reveal] when motion is allowed, and this effect adds .in —
// so with scripts off, or reduced motion on, everything is simply visible.
export default function Reveal({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "h2" | "p" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return createElement(as, { ref, "data-reveal": "", className }, children);
}
