"use client";
import { useEffect, useRef } from "react";

// The light behind the hero, as a dark-mode spotlight: a wide, soft cone hung
// from the very top of the page (the canvas starts under the header and runs
// to the hero's bottom, so the beam enters from the page's edge the way the
// reference does), a faint glow centred behind the headline, and a hot spot
// where the beam enters. Everything fades to nothing well before the hero's
// bottom edge, so the light never ends on a line.
//
// Drawn at the element's own pixel size times the device ratio: at half
// resolution the texture and the clip mask disagreed and the light showed up
// as a hard-edged rectangle the size of the buffer. Colour comes from --light,
// so the light theme gets a blue wash instead of white; the dotted grid behind
// it is CSS (.hero::before), not this canvas.
export default function HeroLight() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const host = canvas.parentElement!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, w = 0, h = 0, visible = true, t0 = performance.now();
    // pointer, as -1..1 across the hero's width; `aim` eases toward `target`
    let target = 0, aim = 0, near = 0, nearTarget = 0;
    // A hair of noise over the falloff: a slow gradient over 8-bit channels
    // bands in a dark room, and this breaks the steps without visible grain.
    let noise: CanvasPattern | null = null;

    const rgb = () => getComputedStyle(canvas).getPropertyValue("--light").trim() || "214,231,255";

    // The canvas runs above the hero's top edge, so it measures itself rather
    // than its parent; the parent is only the pointer's frame.
    const size = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = Math.max(1, Math.round(r.width * dpr));
      h = Math.max(1, Math.round(r.height * dpr));
      canvas.width = w; canvas.height = h;
    };

    const makeNoise = () => {
      const tile = document.createElement("canvas");
      tile.width = tile.height = 96;
      const c = tile.getContext("2d");
      if (!c) return;
      const img = c.createImageData(96, 96);
      for (let i = 0; i < img.data.length; i += 4) {
        img.data[i] = 255; img.data[i + 1] = 255; img.data[i + 2] = 255;
        img.data[i + 3] = Math.random() * 6;
      }
      c.putImageData(img, 0, 0);
      noise = ctx.createPattern(tile, "repeat");
    };

    const draw = (now: number) => {
      const c = rgb();
      const t = (now - t0) / 1000;
      const breathe = reduced ? 1 : 1 + Math.sin(t / 3.2) * 0.06;
      const sway = reduced ? 0 : Math.sin(t / 5.1) * 0.02;
      aim += (target - aim) * 0.06;
      near += (nearTarget - near) * 0.06;
      // The beam does not rotate: a scaled ellipse under rotation showed straight
      // edges. It slides sideways with the pointer instead, which keeps the light
      // alive without ever turning its silhouette.
      const tilt = sway;
      const dx = aim * w * 0.05;
      const cx = w / 2;
      // Reach is measured against the wider of the two sides, capped: tied to
      // the hero's height alone the light shrank into a tight dome, and the
      // page has been much shorter since the proof wall left the hero.
      const reach = Math.max(h, Math.min(w * 0.8, 1040));
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // 1. the cone: hung from the top edge, widening and fading as it falls
      // The cone's centre sits just below the top edge, not on it: a light at its
      // brightest against the hero's top line reads as a cut, because the header
      // above is dark.
      const mouth = h * 0.18;
      ctx.save();
      ctx.translate(cx + dx, mouth);
      ctx.rotate(-tilt * 0.4);
      ctx.scale(0.46, 1);
      let g = ctx.createRadialGradient(0, 0, 0, 0, 0, reach * 0.92);
      g.addColorStop(0, `rgba(${c},${(0.20 + near * 0.03) * breathe})`);
      g.addColorStop(0.22, `rgba(${c},${0.12 * breathe})`);
      g.addColorStop(0.45, `rgba(${c},${0.05 * breathe})`);
      g.addColorStop(0.7, `rgba(${c},${0.015 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(-w * 3, -mouth, w * 6, h * 2);
      ctx.restore();

      // 2. the faint wash across the whole hero
      g = ctx.createRadialGradient(cx, h * 0.02, 0, cx, h * 0.02, reach * 0.75);
      g.addColorStop(0, `rgba(${c},${0.06 * breathe})`);
      g.addColorStop(0.5, `rgba(${c},${0.025 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

      // 3. the soft glow behind the middle of the hero
      g = ctx.createRadialGradient(cx, h * 0.46, 0, cx, h * 0.46, Math.max(w * 0.42, h * 0.5));
      g.addColorStop(0, `rgba(${c},${0.05 * breathe})`);
      g.addColorStop(0.6, `rgba(${c},${0.02 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

      // 4. the hot spot where the beam enters
      g = ctx.createRadialGradient(cx + dx, mouth, 0, cx + dx, mouth, w * 0.24);
      g.addColorStop(0, `rgba(${c},${0.18 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

      if (noise) {
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = noise;
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1;
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => { if (visible) draw(now); raf = requestAnimationFrame(loop); };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      const inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      target = inside ? (x - 0.5) * 2 : 0;
      nearTarget = inside ? 1 : 0;
    };
    const onLeave = () => { target = 0; nearTarget = 0; };

    makeNoise();
    size(); draw(t0);
    if (!reduced) {
      raf = requestAnimationFrame(loop);
      addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }
    const ro = new ResizeObserver(() => { size(); draw(performance.now()); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
    io.observe(host);
    const mo = new MutationObserver(() => draw(performance.now()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); mo.disconnect();
      removeEventListener("pointermove", onMove); document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-light" aria-hidden="true" />;
}
