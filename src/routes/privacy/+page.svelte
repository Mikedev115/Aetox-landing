<script lang="ts">
  import Privacy from "#lib/components/Privacy.svelte";

  let { data } = $props();
</script>

<Privacy p={data.policy} />
