<script lang="ts">
  import FaqPage from "#lib/components/pages/FaqPage.svelte";

  let { data } = $props();
</script>

<FaqPage t={data.t} />
