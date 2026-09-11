"use client";
import { useEffect } from "react";

const KEY = "aetox-theme";

function apply(t: "light" | "dark") {
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t === "light" ? "#ffffff" : "#000000");
}

// The pre-paint script in RootShell has already set data-theme by the time
// this mounts; this only flips it and follows the OS while the visitor has
// not chosen for themselves. Which icon shows is decided in CSS from the
// data-theme attribute, so there is no theme state to hydrate here.
export default function ThemeToggle({ label }: { label: string }) {
  useEffect(() => {
    try {
      if (localStorage.getItem(KEY)) return;
      const mq = matchMedia("(prefers-color-scheme: light)");
      const on = (e: MediaQueryListEvent) => apply(e.matches ? "light" : "dark");
      mq.addEventListener("change", on);
      return () => mq.removeEventListener("change", on);
    } catch { /* storage blocked: follow nothing, keep what the pre-paint script chose */ }
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    apply(next);
    try { localStorage.setItem(KEY, next); } catch { /* fine */ }
  };

  return (
    <button className="icon-btn" type="button" aria-label={label} title={label} onClick={toggle}>
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
