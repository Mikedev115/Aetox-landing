<script lang="ts">
  import { page } from "$app/state";

  // The header and footer come from the layout, so an unknown address still
  // looks like this site. The wording is the one the Next build shipped.
  const status = $derived(page.status);
</script>

<svelte:head>
  <title>{status} · This page could not be found · Aetox</title>
</svelte:head>

<section class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{status}</h1>
    <p class="sub">This page could not be found.</p>
  </div>
</section>
