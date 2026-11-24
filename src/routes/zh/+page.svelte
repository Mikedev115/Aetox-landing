<script lang="ts">
  import Landing from "#lib/components/Landing.svelte";

  let { data } = $props();
</script>

<Landing t={data.t} lang={data.lang} />
