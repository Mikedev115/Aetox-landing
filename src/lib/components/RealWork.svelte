<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { DEMO_VIDEO, pagePath } from "#lib/site.ts";
  import Frame from "#lib/components/ui/Frame.svelte";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";
  import Slot from "#lib/components/ui/Slot.svelte";

  // With `teaser` (the home page) the section carries its own heading and ends
  // in a link to /work/; on /work/ the page head is the heading.
  let { t, lang, teaser }: { t: Dict["work"]; lang: Lang; teaser?: string } = $props();
</script>

<section id="work">
  <div class="wrap">
    {#if teaser}
      <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
      <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
    {/if}
    <div class="three">
      <Reveal as="article" className="wcard">
        <Frame addr={t.crm.addr}>
          <div class="fill-txt"><b>6:51</b><span>{t.crm.cap}</span></div>
        </Frame>
        <h3>{t.crm.title}</h3>
        <p>{t.crm.body}</p>
      </Reveal>
      <Reveal as="article" className="wcard">
        <Frame addr={t.n8n.addr}><Slot id="S08" /></Frame>
        <h3>{t.n8n.title}</h3>
        <p>{t.n8n.body}</p>
      </Reveal>
      <Reveal as="article" className="wcard">
        <Frame addr={t.video.addr} href={DEMO_VIDEO}><Slot id="S13" /></Frame>
        <h3><a href={DEMO_VIDEO} target="_blank" rel="noopener">{t.video.title}</a></h3>
        <Rich text={t.video.body} />
      </Reveal>
    </div>
    {#if teaser}<div class="more-row"><Pill variant="soft" trail="chev" href={pagePath(lang, "work")}>{teaser}</Pill></div>{/if}
  </div>
</section>
