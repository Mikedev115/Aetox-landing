<script lang="ts" module>
  import type { Snippet } from "svelte";

  /** `video` turns the still into its poster: a muted loop that plays on its own. */
  export type Shot = { src: string; alt: string; width: number; height: number; eager?: boolean; video?: string };
</script>

<script lang="ts">
  import { openLightbox } from "#lib/lightbox.svelte.ts";

  /**
   * The app, in a window. Every screenshot on the page sits in the same frame,
   * and clicking one opens it in the lightbox. Pass `href` to make the frame a
   * link instead (used for the video card); pass neither for a frame that only
   * holds children. A shot with `video` plays in place and opens nothing.
   */
  let {
    addr,
    shot,
    href,
    children,
    className = "",
    style,
  }: { addr?: string; shot?: Shot; href?: string; children?: Snippet; className?: string; style?: string } = $props();

  // A binding target only: nothing reads it in markup, so it stays a plain
  // variable and $effect reads it once when the element is there.
  let vid: HTMLVideoElement | undefined = $state(undefined);
  const cls = $derived(["frame", className].filter(Boolean).join(" "));

  // a loop is motion: under reduced motion the poster frame stays still
  $effect(() => {
    if (vid && matchMedia("(prefers-reduced-motion: reduce)").matches) {
      vid.pause();
      vid.removeAttribute("autoplay");
    }
  });
</script>

{#snippet chromeBar()}
  <div class="chrome" aria-hidden="true"><i></i><i></i><i></i>{#if addr}<span class="addr">{addr}</span>{/if}</div>
{/snippet}

{#snippet media()}
  {#if shot?.video}
    <video
      bind:this={vid}
      src={shot.video}
      poster={shot.src}
      width={shot.width}
      height={shot.height}
      aria-label={shot.alt}
      muted
      loop
      playsinline
      autoplay
      preload={shot.eager ? "auto" : "metadata"}></video>
  {:else if shot}
    <img
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      decoding="async"
      loading={shot.eager ? "eager" : "lazy"}
      fetchpriority={shot.eager ? "high" : undefined} />
  {/if}
{/snippet}

{#if href}
  <a class={cls} {href} target="_blank" rel="noopener" {style}>{@render chromeBar()}{@render media()}{@render children?.()}</a>
{:else if shot && !shot.video}
  <button type="button" class="shot {cls}" {style} onclick={() => openLightbox(shot.src, shot.alt)}>
    {@render chromeBar()}{@render media()}{@render children?.()}
  </button>
{:else}
  <div class={cls} {style}>{@render chromeBar()}{@render media()}{@render children?.()}</div>
{/if}
