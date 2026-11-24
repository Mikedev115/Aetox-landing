<script lang="ts">
  import DocsShell from "#lib/components/docs/DocsShell.svelte";
  import { docs as loadDocs, findDoc } from "#lib/docs/index.ts";
  import type { PageProps } from "./$types";

  // One Chinese docs page, drawn by DocsShell.
  let { data }: PageProps = $props();

  const doc = $derived(findDoc(loadDocs(data.lang), data.slug));
</script>

{#if doc}
  <DocsShell lang={data.lang} {doc} />
{/if}
