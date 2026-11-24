<script lang="ts">
  import "../app.css";
  import type { Snippet } from "svelte";
  import type { LayoutProps } from "./$types";
  import BrandSprite from "#lib/components/icons/BrandSprite.svelte";
  import Header from "#lib/components/Header.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import Lightbox from "#lib/components/dialogs/Lightbox.svelte";
  import ProviderDialog from "#lib/components/dialogs/ProviderDialog.svelte";

  // The frame around every page of the site: sprite, dialogs, header, footer,
  // and the <head> that the layout load built for this URL. A route decides
  // which sections go in the middle; the shell decides nothing about content,
  // only that the header knows which page it is on (so the nav marks it and the
  // language button lands on the same page in the other language).
  let { data, children }: LayoutProps = $props();

  const suffix = $derived(data.slug ? `${data.slug}/` : "");
  const mainClass = $derived(data.page === "privacy" ? "doc" : undefined);
</script>

<svelte:head>
  {#if data.head}
  <title>{data.head.title}</title>
  <meta name="description" content={data.head.description} />
  <link rel="canonical" href={data.head.canonical} />
  {#each data.head.alternates as alt (alt.hreflang)}
    <link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
  {/each}
  <meta name="theme-color" content={data.head.themeColor} />
  <meta property="og:type" content={data.head.ogType} />
  <meta property="og:site_name" content="Aetox" />
  <meta property="og:locale" content={data.head.locale} />
  <meta property="og:url" content={data.head.canonical} />
  <meta property="og:title" content={data.head.title} />
  <meta property="og:description" content={data.head.ogDescription} />
  <meta property="og:image" content={data.head.image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={data.head.imageAlt} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.head.title} />
  <meta name="twitter:description" content={data.head.ogDescription} />
  <meta name="twitter:image" content={data.head.image} />
  {/if}
</svelte:head>

<BrandSprite />
<Header t={data.t.nav} lang={data.lang} page={data.page} version={data.version} {suffix} />
<main class={mainClass}>
  {@render children?.()}
</main>
<Footer t={data.t.footer} nav={data.t.nav} lang={data.lang} page={data.page} {suffix} />
<ProviderDialog t={data.t.providers} />
<Lightbox label={data.t.lightbox.label} close={data.t.lightbox.close} />
