<script lang="ts" module>
  import {
    BENCHMARK_MD,
    CASE_STUDIES_URL,
    CODING_BENCH,
    CODING_LUNA,
    CODING_LUNA_TH,
    CODING_TERRA,
    CODING_TERRA_TH,
    INVOICE_TESTS,
    MODEL_LUNA,
    MODEL_TERRA,
    RELEASES,
    REPORTS,
    SECURITY_BENCH,
    STORE_PRIVACY_URL,
  } from "#lib/site.ts";

  // Copy in lib/i18n carries a little inline markup so translators do not have
  // to touch component markup: **bold**, `code`, [text](url). A url may also be
  // one of the named links below, so the dictionaries never hard-code a URL
  // that lib/site.ts already owns.
  const NAMED_LINKS: Record<string, string> = {
    CASE_STUDIES_URL,
    STORE_PRIVACY_URL,
    BENCHMARK_MD,
    RELEASES,
    CODING_BENCH,
    CODING_LUNA,
    CODING_TERRA,
    CODING_LUNA_TH,
    CODING_TERRA_TH,
    INVOICE_TESTS,
    MODEL_LUNA,
    MODEL_TERRA,
    SECURITY_BENCH,
    REPORTS,
  };

  const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

  type Part =
    | { kind: "text"; text: string }
    | { kind: "bold"; text: string }
    | { kind: "code"; text: string }
    | { kind: "link"; text: string; href: string; external: boolean };

  function parse(text: string): Part[] {
    return text
      .split(TOKEN)
      .filter(Boolean)
      .map((part) => {
        if (part.startsWith("**")) return { kind: "bold", text: part.slice(2, -2) } as Part;
        if (part.startsWith("`")) return { kind: "code", text: part.slice(1, -1) } as Part;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const href = NAMED_LINKS[link[2]] ?? link[2];
          return { kind: "link", text: link[1], href, external: /^https?:/.test(href) } as Part;
        }
        return { kind: "text", text: part } as Part;
      });
  }
</script>

<script lang="ts">
  let { text, className, as = "p" }: { text: string; className?: string; as?: "p" | "span" | "div" } = $props();
  const parts = $derived(parse(text));
</script>

<svelte:element this={as} class={className}>
  {#each parts as part}
    {#if part.kind === "bold"}<b>{part.text}</b>
    {:else if part.kind === "code"}<code>{part.text}</code>
    {:else if part.kind === "link"}<a href={part.href} class="u" target={part.external ? "_blank" : undefined} rel={part.external ? "noopener" : undefined}>{part.text}</a>
    {:else}{part.text}{/if}
  {/each}
</svelte:element>
