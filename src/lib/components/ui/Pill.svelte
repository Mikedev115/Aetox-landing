<script lang="ts">
  import type { Snippet } from "svelte";

  // The one control shape on the page. With `href` it is a link, without one a
  // button — the same class list either way, so the two never drift apart.
  type Variant = "solid" | "soft" | "ghost";
  type Trail = "arrow" | "chev";

  let {
    variant = "solid",
    trail,
    href,
    type = "button",
    className = "",
    children,
    ...rest
  }: {
    variant?: Variant;
    trail?: Trail;
    href?: string;
    type?: "button" | "submit";
    className?: string;
    children?: Snippet;
    [key: string]: unknown;
  } = $props();

  const cls = $derived(["pill", variant, trail, className].filter(Boolean).join(" "));
</script>

{#if href}
  <a class={cls} {href} {...rest}>{@render children?.()}</a>
{:else}
  <button {type} class={cls} {...rest}>{@render children?.()}</button>
{/if}
