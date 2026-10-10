"use client";
import { useEffect, useRef } from "react";

// The light behind the hero: one soft beam falling from above the header onto
// the headline and the window under it. Three radial gradients on a 2D
// canvas, drawn at half resolution and breathing very slowly — the same read
// as the reference's WebGL light, without a shader. The beam hangs from the
// top centre like a lamp and swings a little toward the pointer, easing back
// when it leaves. Colour comes from the --light CSS variable so the light
// theme gets a blue wash instead of white.
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

    const rgb = () => getComputedStyle(canvas).getPropertyValue("--light").trim() || "255,255,255";

    const size = () => {
      const r = host.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width / 2));
      h = Math.max(1, Math.round(r.height / 2));
      canvas.width = w; canvas.height = h;
    };
    

    const draw = (now: number) => {
      const c = rgb();
      const t = (now - t0) / 1000;
      const breathe = reduced ? 1 : 1 + Math.sin(t / 3.2) * 0.07;
      const sway = reduced ? 0 : Math.sin(t / 5.1) * 0.03;
      aim += (target - aim) * 0.06;
      near += (nearTarget - near) * 0.06;
      const tilt = (aim * 0.5 + sway); // radians; about ±28° at the edges
      const cx = w / 2;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      // the wide wash: what makes the top of the page feel lit; leans with the beam
      let g = ctx.createRadialGradient(cx + aim * w * 0.08, -h * 0.35, 0, cx + aim * w * 0.08, -h * 0.35, h * 1.15);
      g.addColorStop(0, `rgba(${c},${0.30 * breathe})`);
      g.addColorStop(0.45, `rgba(${c},${0.08 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      // the beam: a tall ellipse hung from the top centre, swung toward the pointer
      ctx.save();
      ctx.translate(cx, 0); ctx.rotate(-tilt); ctx.translate(0, h * 0.42); ctx.scale(0.5, 1);
      g = ctx.createRadialGradient(0, 0, 0, 0, 0, h * 0.62);
      g.addColorStop(0, `rgba(${c},${(0.20 + near * 0.06) * breathe})`);
      g.addColorStop(0.5, `rgba(${c},${0.05 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(-w * 2, -h * 2, w * 4, h * 4);
      ctx.restore();
      // the hot spot right where the light enters
      g = ctx.createRadialGradient(cx, 0, 0, cx, 0, w * 0.18);
      g.addColorStop(0, `rgba(${c},${0.35 * breathe})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
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

    size(); draw(t0);
    if (!reduced) {
      raf = requestAnimationFrame(loop);
      addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }
    const ro = new ResizeObserver(() => { size(); draw(performance.now()); });
    ro.observe(host);
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
