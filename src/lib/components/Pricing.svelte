<script lang="ts" module>
  const LOCAL_MARKS = [["lg-ollama", "Ollama"], ["lg-lmstudio", "LM Studio"]];
  const PROVIDER_MARKS = [["lg-anthropic", "Anthropic"], ["lg-openai", "OpenAI"], ["lg-gemini", "Gemini"], ["lg-deepseek", "DeepSeek"], ["lg-copilot", "Copilot"]];
</script>

<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import { openProviders } from "#lib/providers.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  let { t }: { t: Dict["pricing"] } = $props();
</script>

{#snippet path(t: Dict["pricing"]["local"], marks: string[][], more?: string)}
  <div class="path">
    <h3>{t.title}</h3>
    <p class="price"><span>{t.price}</span><small>{t.sub}</small></p>
    <ul>{#each t.points as p (p)}<li>{p}</li>{/each}</ul>
    <p class="who">{t.who}</p>
    <div class="pvrow">
      {#each marks as [icon, name] (icon)}
        <span class="pv"><svg aria-hidden="true"><use href={`#${icon}`} /></svg>{name}</span>
      {/each}
      {#if more}<span class="pv">{more}</span>{/if}
    </div>
  </div>
{/snippet}

<Reveal className="wide">
  <div class="head">
    <div><h2>{t.h2}</h2><p>{t.p}</p></div>
    <Pill variant="soft" trail="chev" onclick={openProviders}>{t.all}</Pill>
  </div>
  <div class="paths">
    {@render path(t.local, LOCAL_MARKS)}
    {@render path(t.provider, PROVIDER_MARKS, t.provider.more)}
  </div>
  <Rich className="bench-foot" text={t.note} />
</Reveal>
