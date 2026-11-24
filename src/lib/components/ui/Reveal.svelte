<script lang="ts" module>
  // Fades a block in the first time it scrolls into view. Progressive: the CSS
  // only hides [data-reveal] when motion is allowed, and this adds .in — so with
  // scripts off, or reduced motion on, everything is simply visible.
  function revealOnScroll(el: HTMLElement) {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return () => {};
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, className, as = "div" }: { children?: Snippet; className?: string; as?: "div" | "h2" | "p" | "article" } = $props();

  let el: HTMLElement;
  $effect(() => revealOnScroll(el));
</script>

<svelte:element this={as} bind:this={el} data-reveal="" class={className}>{@render children?.()}</svelte:element>
