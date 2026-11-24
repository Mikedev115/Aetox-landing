<script lang="ts">
  import { WINGET_CMD } from "#lib/site.ts";

  /** The one-line install command with a copy button. */
  let { t }: { t: { copy: string; copied: string; copyLabel: string } } = $props();

  let copied = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  async function copy() {
    try {
      await navigator.clipboard.writeText(WINGET_CMD);
    } catch {
      /* clipboard blocked: the text is still selectable */
    }
    copied = true;
    clearTimeout(timer);
    timer = setTimeout(() => (copied = false), 1400);
  }

  $effect(() => () => clearTimeout(timer));
</script>

<div class="cmd">
  <span>&gt;</span><b>{WINGET_CMD}</b>
  <button class="copy" class:done={copied} type="button" aria-label={t.copyLabel} onclick={copy}>{copied ? t.copied : t.copy}</button>
</div>
