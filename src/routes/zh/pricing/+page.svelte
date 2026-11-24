<script lang="ts">
  import PricingPage from "#lib/components/pages/PricingPage.svelte";

  let { data } = $props();
</script>

<PricingPage t={data.t} lang={data.lang} />
