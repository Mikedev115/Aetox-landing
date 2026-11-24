<script lang="ts">
  import DownloadPage from "#lib/components/pages/DownloadPage.svelte";

  let { data } = $props();
</script>

<DownloadPage t={data.t} lang={data.lang} version={data.version} />
