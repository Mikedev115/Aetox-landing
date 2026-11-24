<script lang="ts">
  import DocsShell from "#lib/components/docs/DocsShell.svelte";
  import { docs as loadDocs, findDoc } from "#lib/docs/index.ts";
  import type { PageProps } from "./$types";

  // One docs page, drawn by DocsShell. The head, the language and the dictionary
  // are the layout's; +page.ts has already refused an address that is not a page
  // of this section, so the lookup below always finds one.
  let { data }: PageProps = $props();

  const doc = $derived(findDoc(loadDocs(data.lang), data.slug));
</script>

{#if doc}
  <DocsShell lang={data.lang} {doc} />
{/if}
