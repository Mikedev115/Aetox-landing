"use client";
import { useEffect, useRef } from "react";
import type { Dict } from "@/lib/i18n";
import { SPRITE } from "./icons/sprite";

// The statement between the hero and the modes: one sentence in the middle
// of a field of nodes — every model, editor and runtime Aetox connects to,
// drawn from the same sprite the provider list uses, joined by thin lines
// that come and go as the nodes drift. The block is 250vh tall and its
// inside is sticky, so while the visitor scrolls through it the words sharpen
// out of a blur one by one and the field brightens from almost nothing to
// full. All of it is one 2D canvas; nothing is loaded from the network.

// Brand colour per mark. The marks themselves are currentColor in the sprite.
const MARKS: [string, string][] = [
  ["claude", "#D97757"], ["openai", "#E9EDEF"], ["anthropic", "#D4A27F"], ["gemini", "#4E8CF9"],
  ["copilot", "#8B8BFF"], ["perplexity", "#20B8CD"], ["qwen", "#7C5CFF"], ["xai", "#E9EDEF"],
  ["nvidia", "#76B900"], ["groq", "#F55036"], ["deepseek", "#4D6BFE"], ["mistral", "#FF7000"],
  ["kimi", "#3C7BFF"], ["minimax", "#FF3D6A"], ["openrouter", "#B0B7FF"], ["ollama", "#E9EDEF"],
  ["lmstudio", "#5C7CFA"], ["vscode", "#3B99FC"], ["cursor", "#E9EDEF"], ["zed", "#084CCF"],
  ["windsurf", "#58E6D9"], ["opencode", "#E9EDEF"], ["kilo", "#FFB020"], ["zai", "#E9EDEF"],
  ["modelscope", "#624AFF"], ["thaillm", "#FF6A3D"],
];

// The other kind of node: a scrap of the work itself — a file it wrote, a
// command it ran, a token of the code it reads. Drawn as monospace text; the
// kind picks the colour (files in ink, commands dim, keywords in the blue).
type Kind = "file" | "cmd" | "kw";
const CODE: [string, Kind][] = [
  ["receipts.xlsx", "file"], ["summary.docx", "file"], ["crm-compare.csv", "file"], ["index.html", "file"], ["notes.md", "file"],
  ["main.go", "file"], ["app.tsx", "file"], ["clip.mp4", "file"], ["meeting.wav", "file"], ["schema.sql", "file"],
  ["git commit -m", "cmd"], ["npm run build", "cmd"], ["pwsh>", "cmd"], ["ffmpeg -i", "cmd"], ["curl -X POST", "cmd"],
  ["winget install", "cmd"], ["n8n", "cmd"], ["windmill", "cmd"], ["ocr", "cmd"], ["go test ./...", "cmd"],
  ["func main()", "kw"], ["async () =>", "kw"], ["SELECT *", "kw"], ["import", "kw"], ["def run():", "kw"],
  ["</>", "kw"], ["{ }", "kw"], ["await", "kw"], ["return", "kw"], ["<html>", "kw"], ["<>", "kw"], ["=>", "kw"],
];

type Node = { x: number; y: number; z: number; vx: number; vy: number; img?: HTMLImageElement; color?: string; size: number; text?: string; kind?: Kind };

/** Each mark as an <img> the canvas can draw, coloured, built from the sprite string. */
function loadMarks(): { img: HTMLImageElement; color: string }[] {
  const doc = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${SPRITE}</svg>`, "image/svg+xml");
  return MARKS.flatMap(([id, color]) => {
    const sym = doc.getElementById(`lg-${id}`);
    if (!sym) return [];
    const vb = sym.getAttribute("viewBox") ?? "0 0 24 24";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="64" height="64" fill="${color}" color="${color}">${sym.innerHTML}</svg>`;
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    return [{ img, color }];
  });
}

export default function Network({ t }: { t: Dict["network"] }) {
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const words = useRef<HTMLSpanElement[]>([]);
  const all = t.lines.flatMap((l, li) => l.split(" ").map((w) => ({ w, li })));

  useEffect(() => {
    const sec = root.current, cv = canvas.current;
    if (!sec || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, visible = false, progress = reduced ? 1 : 0;
    let nodes: Node[] = [];
    const marks = loadMarks();

    const seed = () => {
      const count = Math.round(Math.min(150, Math.max(70, (w * h) / 11000)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        const z = 0.35 + Math.random() * 0.65; // depth: far nodes are small, slow and faint
        nodes.push({ x: Math.random() * w, y: Math.random() * h, z, vx: (Math.random() - 0.5) * 0.12 * z, vy: (Math.random() - 0.5) * 0.12 * z, size: 1 + z * 1.6 });
      }
      // marks and code sit on the nearer nodes, away from the centre text and
      // at least a chip's width from each other, so nothing draws over anything
      // else; marks take every other slot, code the rest
      const pool = nodes.filter((n) => n.z > 0.45 && (Math.abs(n.x - w / 2) > w * 0.23 || Math.abs(n.y - h / 2) > h * 0.23)).sort(() => Math.random() - 0.5);
      const code = [...CODE].sort(() => Math.random() - 0.5).slice(0, 24);
      const gap = Math.min(115, w * 0.09);
      const taken: Node[] = [];
      let mi = 0, ci = 0;
      for (const n of pool) {
        if (mi >= marks.length && ci >= code.length) break;
        if (taken.some((t) => Math.hypot(t.x - n.x, t.y - n.y) < gap)) continue;
        if ((taken.length % 2 === 0 && mi < marks.length) || ci >= code.length) { const m = marks[mi++]; n.img = m.img; n.color = m.color; n.size = 9 + n.z * 8; }
        else { const [text, kind] = code[ci++]; n.text = text; n.kind = kind; n.size = 11 + n.z * 5; }
        taken.push(n);
      }
    };

    // a phone's address bar showing and hiding changes the height by a little;
    // that must not re-scatter the field, so only a real change reseeds
    const size = () => {
      const r = sec.getBoundingClientRect();
      const nw = Math.round(r.width), nh = Math.round(Math.min(innerHeight, r.height));
      const reseed = nw !== w || Math.abs(nh - h) > 120;
      w = nw; h = nh;
      cv.width = w * dpr; cv.height = h * dpr;
      cv.style.width = `${w}px`; cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reseed) seed();
    };

    const ink = () => (document.documentElement.dataset.theme === "light" ? "0,0,0" : "255,255,255");

    const draw = () => {
      const c = ink();
      const glow = 0.15 + progress * 0.85; // the whole field brightens as the words come in
      ctx.clearRect(0, 0, w, h);
      // lines between near nodes; alpha falls with distance and with depth
      const reach = Math.min(190, w * 0.16);
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > reach) continue;
          const al = (1 - d / reach) * 0.42 * Math.min(a.z, b.z) * glow;
          ctx.strokeStyle = `rgba(${c},${al})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // plain nodes
      for (const n of nodes) {
        if (n.img || n.text) continue;
        ctx.fillStyle = `rgba(${c},${(0.25 + n.z * 0.5) * glow})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2); ctx.fill();
      }
      // code: a monospace chip hanging off the node — filled so the lines
      // behind do not run through the letters, a hairline border, the text
      // coloured by kind; keyword chips carry the blue on the border too
      const light = document.documentElement.dataset.theme === "light";
      const kw = light ? "47,107,255" : "127,176,255";
      const chipBg = light ? "255,255,255" : "10,10,10";
      ctx.textBaseline = "middle";
      for (const n of nodes) {
        if (!n.text) continue;
        const a = Math.min(1, 0.25 + progress * 0.85) * (0.5 + n.z * 0.5);
        ctx.font = `${n.size}px "Cascadia Code", Consolas, "Courier New", monospace`;
        const tw = ctx.measureText(n.text).width;
        const px = n.size * 0.6, ph = n.size * 1.7, r = 6;
        const x = n.x + 7, y = n.y - ph / 2, wd = tw + px * 2;
        ctx.fillStyle = `rgba(${chipBg},${0.92 * a})`;
        ctx.beginPath(); ctx.roundRect(x, y, wd, ph, r); ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = n.kind === "kw" ? `rgba(${kw},${0.45 * a})` : `rgba(${c},${0.22 * a})`;
        ctx.stroke();
        ctx.fillStyle = n.kind === "kw" ? `rgba(${kw},${a})` : n.kind === "cmd" ? `rgba(${c},${a * 0.6})` : `rgba(${c},${a * 0.9})`;
        ctx.fillText(n.text, x + px, n.y + 0.5);
        // the node itself, and a short tie from it to the chip
        ctx.strokeStyle = `rgba(${c},${a * 0.35})`;
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(x, n.y); ctx.stroke();
        ctx.fillStyle = `rgba(${c},${a * 0.7})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, 2, 0, Math.PI * 2); ctx.fill();
        ctx.lineWidth = 0.75;
      }
      // marks, each with a halo in its own colour
      for (const n of nodes) {
        if (!n.img || !n.img.complete || !n.img.naturalWidth) continue;
        const s = n.size;
        ctx.save();
        ctx.globalAlpha = Math.min(1, 0.35 + progress * 0.9);
        ctx.shadowColor = n.color!; ctx.shadowBlur = 14 * n.z;
        ctx.drawImage(n.img, n.x - s, n.y - s, s * 2, s * 2);
        ctx.restore();
      }
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
      }
    };

    // where we are in the tall block: 0 at its top edge, 1 when its bottom
    // reaches the bottom of the viewport. The words follow this, not time.
    const measure = () => {
      if (reduced) return;
      const r = sec.getBoundingClientRect();
      const span = r.height - innerHeight;
      progress = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 1;
      const n = words.current.length;
      words.current.forEach((el, i) => {
        // each word owns a slice of the first 80% of the scroll; the last 20% is a hold
        const start = (i / n) * 0.8, end = start + 0.18;
        const k = Math.min(1, Math.max(0, (progress - start) / (end - start)));
        el.style.opacity = String(0.08 + k * 0.92);
        el.style.filter = k >= 1 ? "none" : `blur(${(1 - k) * 14}px)`;
      });
    };

    const loop = () => {
      if (visible) { if (!reduced) step(); measure(); draw(); }
      raf = requestAnimationFrame(loop);
    };

    size(); measure(); draw();
    const ro = new ResizeObserver(() => { size(); draw(); });
    ro.observe(sec);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !raf) raf = requestAnimationFrame(loop); });
    io.observe(sec);
    marks.forEach((m) => { m.img.onload = () => draw(); });
    const mo = new MutationObserver(draw);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); mo.disconnect(); };
  }, []);

  let k = 0;
  return (
    <section ref={root} className="network" aria-label={t.lines.join(" ")}>
      <div className="network-stage">
        <canvas ref={canvas} aria-hidden="true" />
        <h2 aria-hidden="true">
          {t.lines.map((line, li) => (
            <span className="line" key={li}>
              {all.filter((x) => x.li === li).map((x) => {
                const i = k++;
                return <span key={i}><span className="w" ref={(el) => { if (el) words.current[i] = el; }}>{x.w}</span>{" "}</span>;
              })}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
