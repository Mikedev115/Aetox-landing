<script lang="ts" module>
  import type { Dict } from "#lib/i18n/index.ts";

  // Provider list, in the order of internal/provider/catalog.go's canonicalOrder.
  // The two local runtimes are listed apart because they are the free, no-key path.
  const LOCAL = [
    ["ollama", "https://ollama.com", "lg-ollama"],
    ["lmstudio", "https://lmstudio.ai", "lg-lmstudio"],
    // 22 Oct 2026: pictures on your own GPU — ComfyUI first, then Forge Neo /
    // Forge / A1111 (one API).
    ["comfyui (pictures)", "https://www.comfy.org", "lg-comfyui"],
    ["stable diffusion webui (pictures)", "https://github.com/Haoming02/sd-webui-forge-classic/tree/neo", "lg-automatic"],
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
    // 27 Sep 2026, v1.9.0: three rows the app gained after the list above.
    ["meta", "https://dev.meta.ai", "lg-meta"],
    ["xiaomi mimo", "https://platform.xiaomimimo.com", "lg-xiaomi"],
    ["xiaomi mimo token plan", "https://platform.xiaomimimo.com", "lg-xiaomi"],
  ] as const;
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { setProviderOpener } from "#lib/providers.ts";

  let { t }: { t: Dict["providers"] } = $props();

  let ref: HTMLDialogElement;

  const open = () => ref?.showModal();
  const close = () => ref?.close();

  onMount(() => {
    setProviderOpener(open);
    return () => setProviderOpener(null);
  });

  function onBackdrop(event: MouseEvent) {
    if (event.target === event.currentTarget) close();
  }
</script>

<dialog id="pvbox" bind:this={ref} aria-label={t.title} onclick={onBackdrop}>
  <button class="lb-close" type="button" aria-label={t.close} onclick={close}>✕</button>
  <h3>{t.localTitle}</h3>
  <p>{t.localSub}</p>
  <div class="pvs">
    {#each LOCAL as [name, href, icon] (name)}
      <a class="pv" {href} target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#{icon}" /></svg>{name}</a>
    {/each}
  </div>
  <h3>{t.provTitle}</h3>
  <p>{t.provSub}</p>
  <div class="pvs">
    {#each PROVIDERS as [name, href, icon] (name)}
      <a class="pv" {href} target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#{icon}" /></svg>{name}</a>
    {/each}
  </div>
  <p class="pvfoot">{t.foot}</p>
</dialog>
