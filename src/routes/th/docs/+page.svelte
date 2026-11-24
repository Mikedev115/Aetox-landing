<script lang="ts">
  import DocsHome from "#lib/components/docs/DocsHome.svelte";
  import type { PageProps } from "./$types";

  // /th/docs/ — the index of the section, in Thai.
  let { data }: PageProps = $props();
</script>

<DocsHome lang={data.lang} />
