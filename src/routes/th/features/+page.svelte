<script lang="ts">
  import FeaturesPage from "#lib/components/pages/FeaturesPage.svelte";

  let { data } = $props();
</script>

<FeaturesPage t={data.t} lang={data.lang} />
