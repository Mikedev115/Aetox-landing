"use client";
import type { Dict } from "@/lib/i18n";
import { useProviders } from "./dialogs/ProviderDialog";
import { PillButton } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// The model side as the three ways in: sign in with an account you have, paste a
// key, or run one on your own machine for free. Marks come from the site's sprite
// in each brand's colour; the near-white ones take the ink so they show in both
// themes. The button opens the full list in the provider dialog.
const INK = "var(--text)";
const SIGNIN: [string, string, string][] = [["lg-openai", "ChatGPT", INK], ["lg-copilot", "GitHub Copilot", "#8B8BFF"], ["lg-openrouter", "OpenRouter", "#B0B7FF"]];
const KEY: [string, string, string][] = [
  ["lg-anthropic", "Anthropic", "#D4A27F"], ["lg-openai", "OpenAI", INK], ["lg-gemini", "Gemini", "#4E8CF9"], ["lg-deepseek", "DeepSeek", "#4D6BFE"],
  ["lg-qwen", "Qwen", "#7C5CFF"], ["lg-kimi", "Kimi", "#3C7BFF"], ["lg-minimax", "MiniMax", "#FF3D6A"], ["lg-zai", "Z.ai", INK],
  ["lg-mistral", "Mistral", "#FF7000"], ["lg-groq", "Groq", "#F55036"], ["lg-xai", "xAI", INK], ["lg-meta", "Meta", "#0866FF"],
  ["lg-nvidia", "NVIDIA", "#76B900"], ["lg-xiaomi", "Xiaomi MiMo", "#FF6900"], ["lg-modelscope", "ModelScope", "#624AFF"], ["lg-thaillm", "ThaiLLM", "#FF6A3D"],
  ["lg-kilo", "Kilo", "#FFB020"], ["lg-opencode", "OpenCode", INK], ["lg-ollama", "Ollama Cloud", INK],
];
const LOCAL: [string, string, string][] = [["lg-ollama", "Ollama", INK], ["lg-lmstudio", "LM Studio", "#5C7CFA"]];

const Mark = ({ icon, color }: { icon: string; color: string }) => (
  <svg aria-hidden="true" style={{ color }}><use href={`#${icon}`} /></svg>
);

export default function Models({ t }: { t: Dict["models"] }) {
  const openProviders = useProviders();
  const [signin, key, local] = t.ways;
  return (
    <section id="models" className="models-band">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.p}</Reveal>
        <div className="mways">
          <div className="mway">
            <p className="wk">{signin.k}</p><h3>{signin.h}</h3>
            <ul className="way-big">{SIGNIN.map(([i, n, c]) => <li key={n}><Mark icon={i} color={c} />{n}</li>)}</ul>
            <p className="ws">{signin.s}</p>
          </div>
          <div className="mway">
            <p className="wk">{key.k}</p><h3>{key.h}</h3>
            <ul className="way-grid">{KEY.map(([i, n, c]) => <li key={n} title={n}><Mark icon={i} color={c} /><span className="sr">{n}</span></li>)}</ul>
            <p className="ws">{key.s}</p>
          </div>
          <div className="mway">
            <p className="wk">{local.k}</p><h3>{local.h}</h3>
            <span className="way-free">{t.free}</span>
            <ul className="way-big">{LOCAL.map(([i, n, c]) => <li key={n}><Mark icon={i} color={c} />{n}</li>)}</ul>
            <p className="ws">{local.s}</p>
          </div>
        </div>
        <div className="more-row"><PillButton variant="soft" trail="chev" onClick={openProviders}>{t.more}</PillButton></div>
      </div>
    </section>
  );
}
