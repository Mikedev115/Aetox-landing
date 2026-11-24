<script lang="ts">
  import DocsHome from "#lib/components/docs/DocsHome.svelte";
  import type { PageProps } from "./$types";

  // /zh/docs/ — the index of the section, in Chinese.
  let { data }: PageProps = $props();
</script>

<DocsHome lang={data.lang} />
