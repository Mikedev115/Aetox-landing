<script lang="ts" module>
  import type { Dict } from "#lib/i18n/index.ts";
  import { openProviders } from "#lib/providers.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // The model side as the three ways in: sign in with an account you have, paste a
  // key, or run one on your own machine for free. Marks come from the site's sprite
  // in each brand's colour; the near-white ones take the ink so they show in both
  // themes. The button opens the full list in the provider dialog.
  const INK = "var(--text)";
  const SIGNIN: [string, string, string][] = [
    ["lg-openai", "ChatGPT", INK],
    ["lg-copilot", "GitHub Copilot", "#8B8BFF"],
    ["lg-openrouter", "OpenRouter", "#B0B7FF"],
  ];
  const KEY: [string, string, string][] = [
    ["lg-anthropic", "Anthropic", "#D4A27F"],
    ["lg-openai", "OpenAI", INK],
    ["lg-gemini", "Gemini", "#4E8CF9"],
    ["lg-deepseek", "DeepSeek", "#4D6BFE"],
    ["lg-qwen", "Qwen", "#7C5CFF"],
    ["lg-kimi", "Kimi", "#3C7BFF"],
    ["lg-minimax", "MiniMax", "#FF3D6A"],
    ["lg-zai", "Z.ai", INK],
    ["lg-mistral", "Mistral", "#FF7000"],
    ["lg-groq", "Groq", "#F55036"],
    ["lg-xai", "xAI", INK],
    ["lg-meta", "Meta", "#0866FF"],
    ["lg-nvidia", "NVIDIA", "#76B900"],
    ["lg-xiaomi", "Xiaomi MiMo", "#FF6900"],
    ["lg-modelscope", "ModelScope", "#624AFF"],
    ["lg-thaillm", "ThaiLLM", "#FF6A3D"],
    ["lg-kilo", "Kilo", "#FFB020"],
    ["lg-opencode", "OpenCode", INK],
    ["lg-ollama", "Ollama Cloud", INK],
  ];
  const LOCAL: [string, string, string][] = [
    ["lg-ollama", "Ollama", INK],
    ["lg-lmstudio", "LM Studio", "#5C7CFA"],
  ];
  // Pictures on your own GPU: ComfyUI (the main one) and Stable Diffusion WebUI
  // (Forge / A1111). Named from the dictionary because the "pictures" half of
  // each label is copy, not a brand. ComfyUI's own yellow vanishes on the light
  // theme, so it takes the ink.
  const PICS: [string, string, "comfy" | "sd"][] = [
    ["lg-comfyui", INK, "comfy"],
    ["lg-automatic", "#E00054", "sd"],
  ];
</script>

<script lang="ts">
  let { t }: { t: Dict["models"] } = $props();
  const signin = $derived(t.ways[0]);
  const key = $derived(t.ways[1]);
  const local = $derived(t.ways[2]);
</script>

<section id="models" class="models-band">
  <div class="wrap">
    <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
    <Reveal as="p" className="sec-sub">{t.p}</Reveal>
    <div class="mways">
      <div class="mway">
        <p class="wk">{signin.k}</p>
        <h3>{signin.h}</h3>
        <ul class="way-big">
          {#each SIGNIN as [icon, name, color] (name)}<li><svg aria-hidden="true" style="color: {color}"><use href="#{icon}" /></svg>{name}</li>{/each}
        </ul>
        <p class="ws">{signin.s}</p>
      </div>
      <div class="mway">
        <p class="wk">{key.k}</p>
        <h3>{key.h}</h3>
        <ul class="way-grid">
          {#each KEY as [icon, name, color] (name)}
            <li title={name}><svg aria-hidden="true" style="color: {color}"><use href="#{icon}" /></svg><span class="sr">{name}</span></li>
          {/each}
        </ul>
        <p class="ws">{key.s}</p>
      </div>
      <div class="mway">
        <p class="wk">{local.k}</p>
        <h3>{local.h}</h3>
        <span class="way-free">{t.free}</span>
        <ul class="way-big">
          {#each LOCAL as [icon, name, color] (name)}<li><svg aria-hidden="true" style="color: {color}"><use href="#{icon}" /></svg>{name}</li>{/each}
          {#each PICS as [icon, color, kind] (kind)}<li><svg aria-hidden="true" style="color: {color}"><use href="#{icon}" /></svg>{t.pics[kind]}</li>{/each}
        </ul>
        <p class="ws">{t.picsNote}</p>
        <p class="ws">{local.s}</p>
      </div>
    </div>
    <div class="more-row"><Pill variant="soft" trail="chev" onclick={openProviders}>{t.more}</Pill></div>
  </div>
</section>
