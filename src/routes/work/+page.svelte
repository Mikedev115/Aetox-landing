<script lang="ts">
  import WorkPage from "#lib/components/pages/WorkPage.svelte";

  let { data } = $props();
</script>

<WorkPage t={data.t} lang={data.lang} />
