<script lang="ts">
  import { onDestroy } from "svelte";

  // The whole page as Markdown, on the clipboard, the way every docs site now
  // offers it: paste one page into a model instead of sending it a link.
  let { md, label, copied, copyLabel }: { md: string; label: string; copied: string; copyLabel: string } = $props();

  let done = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  async function copy() {
    try {
      await navigator.clipboard.writeText(md);
    } catch {
      /* clipboard blocked: the page is still selectable */
    }
    done = true;
    clearTimeout(timer);
    timer = setTimeout(() => (done = false), 1400);
  }

  onDestroy(() => clearTimeout(timer));
</script>

<button type="button" class="docs-copy" class:done onclick={copy} aria-label={copyLabel}>
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
  {done ? copied : label}
</button>
