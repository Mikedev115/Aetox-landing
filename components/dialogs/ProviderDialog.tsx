"use client";
import { createContext, useContext, useRef, type ReactNode } from "react";
import type { Dict } from "@/lib/i18n";

// Provider list, in the order of internal/provider/catalog.go's canonicalOrder.
// The two local runtimes are listed apart because they are the free, no-key path.
const LOCAL = [
  ["ollama", "https://ollama.com", "lg-ollama"],
  ["lmstudio", "https://lmstudio.ai", "lg-lmstudio"],
] as const;
const PROVIDERS = [
  ["github copilot", "https://github.com/features/copilot", "lg-copilot"],
  ["kilo", "https://kilo.ai", "lg-kilo"],
  ["anthropic", "https://www.anthropic.com", "lg-anthropic"],
  ["openai", "https://openai.com", "lg-openai"],
  ["gemini", "https://ai.google.dev", "lg-gemini"],
  ["deepseek", "https://www.deepseek.com", "lg-deepseek"],
  ["kimi", "https://platform.kimi.ai", "lg-kimi"],
  ["minimax", "https://platform.minimax.io", "lg-minimax"],
  ["openrouter", "https://openrouter.ai", "lg-openrouter"],
  ["mistral", "https://mistral.ai", "lg-mistral"],
  ["qwen", "https://qwen.ai", "lg-qwen"],
  ["groq", "https://groq.com", "lg-groq"],
  ["zai", "https://z.ai", "lg-zai"],
  ["xai", "https://x.ai", "lg-xai"],
  ["thaillm", "https://thaillm.or.th", "lg-thaillm"],
  ["modelscope", "https://modelscope.cn", "lg-modelscope"],
  ["nvidia", "https://build.nvidia.com", "lg-nvidia"],
  ["ollama cloud", "https://ollama.com/cloud", "lg-ollama"],
  // Added 13 Sep 2026 to match the app's catalogue (24 + the built-in aetox);
  // the app's OpenAI-compatible row is any endpoint of your own, so it has no
  // logo here and is named in providers.foot instead.
  ["chatgpt (codex)", "https://chatgpt.com", "lg-openai"],
  ["opencode zen", "https://opencode.ai/zen", "lg-opencode"],
  ["opencode go", "https://opencode.ai", "lg-opencode"],
] as const;

const Ctx = createContext<() => void>(() => {});
/** Any component can open the provider list: `const openProviders = useProviders()`. */
export const useProviders = () => useContext(Ctx);

function Pv({ name, href, icon }: { name: string; href: string; icon: string }) {
  return (
    <a className="pv" href={href} target="_blank" rel="noopener">
      <svg aria-hidden="true"><use href={`#${icon}`} /></svg>{name}
    </a>
  );
}

export default function ProviderDialogProvider({ t, children }: { t: Dict["providers"]; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();
  return (
    <Ctx.Provider value={open}>
      {children}
      <dialog id="pvbox" ref={ref} aria-label={t.title} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <button className="lb-close" type="button" aria-label={t.close} onClick={close}>✕</button>
        <h3>{t.localTitle}</h3>
        <p>{t.localSub}</p>
        <div className="pvs">{LOCAL.map(([n, h, i]) => <Pv key={n} name={n} href={h} icon={i} />)}</div>
        <h3>{t.provTitle}</h3>
        <p>{t.provSub}</p>
        <div className="pvs">{PROVIDERS.map(([n, h, i]) => <Pv key={n} name={n} href={h} icon={i} />)}</div>
        <p className="pvfoot">{t.foot}</p>
      </dialog>
    </Ctx.Provider>
  );
}
