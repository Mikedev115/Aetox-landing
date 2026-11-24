<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import Download from "#lib/components/Download.svelte";
  import MobilePreview from "#lib/components/MobilePreview.svelte";

  let { t, lang, version }: { t: Dict; lang: Lang; version: string } = $props();

  const p = $derived(t.pages.download);
</script>

<div class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{p.title}</h1>
    <p class="sub">{p.sub}</p>
  </div>
</div>
<Download t={p} {version} />
<MobilePreview {lang} />
