<script lang="ts">
  import SupportersPage from "#lib/components/pages/SupportersPage.svelte";

  let { data } = $props();
</script>

<SupportersPage t={data.t} lang={data.lang} />
