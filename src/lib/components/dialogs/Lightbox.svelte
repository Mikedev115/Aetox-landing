<script lang="ts">
  import { closeLightbox, lightbox } from "#lib/lightbox.svelte.ts";

  // One native <dialog> for the whole page — it gives Esc, the backdrop and
  // focus return for free, which is why this is not a div with a z-index.
  let { label, close }: { label: string; close: string } = $props();

  let ref: HTMLDialogElement;

  $effect(() => {
    if (lightbox.current && ref && !ref.open) ref.showModal();
  });

  function onBackdrop(event: MouseEvent) {
    if (event.target === ref) ref.close();
  }
</script>

<dialog id="lightbox" bind:this={ref} aria-label={label} onclick={onBackdrop} onclose={closeLightbox}>
  <button class="lb-close" type="button" aria-label={close} onclick={() => ref.close()}>✕</button>
  {#if lightbox.current}
    <img src={lightbox.current.src} alt={lightbox.current.alt} />
  {/if}
</dialog>
