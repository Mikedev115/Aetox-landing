<script lang="ts">
  import DocsHome from "#lib/components/docs/DocsHome.svelte";
  import type { PageProps } from "./$types";

  // /docs/ — the index of the section. The head, the dictionary and the version
  // are the layout's; the route only says which language it is drawing.
  let { data }: PageProps = $props();
</script>

<DocsHome lang={data.lang} />
