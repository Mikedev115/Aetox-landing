<script lang="ts">
  import SafetyPage from "#lib/components/pages/SafetyPage.svelte";

  let { data } = $props();
</script>

<SafetyPage t={data.t} lang={data.lang} />
