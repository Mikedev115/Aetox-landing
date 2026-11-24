<script lang="ts" module>
  import type { Dict } from "#lib/i18n/index.ts";
  import { asset } from "#lib/site.ts";
  import Frame from "#lib/components/ui/Frame.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  // Two files that leave the machine: a document in the reader's language, and a
  // workbook someone else keeps using. The three pages are this repo's own
  // templates filled and printed to PDF, so the strip shows three real scripts
  // side by side rather than three mock-ups. The pictures are the same in every
  // language — the pages do not change with the interface — so only the captions
  // and alts come from the dictionary. Files: public/assets/doc-th|doc-en|doc-zh
  // and sheet-quote.png.
  const PAGES = ["doc-th", "doc-en", "doc-zh"] as const;
</script>

<script lang="ts">
  let { t }: { t: Dict["docs"] } = $props();
</script>

<section id="documents" class="docset">
  <div class="wrap">
    <div class="docset-head">
      <div class="eyebrow">{t.kick}</div>
      <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
      <Rich className="lead" text={t.lead} />
    </div>
    <div class="docset-rows">
      <div class="vcut-grid">
        <div class="docset-pages">
          {#each PAGES as name, i (name)}
            <figure>
              <img src={asset(`${name}.png`)} alt={t.doc.alts[i]} width="1653" height="2339" loading="lazy" decoding="async" />
              <figcaption>{t.doc.captions[i]}</figcaption>
            </figure>
          {/each}
        </div>
        <div class="vcut-copy">
          <h3>{t.doc.title}</h3>
          <Rich text={t.doc.body} />
          <ul class="vcut-chips">
            {#each t.doc.chips as c (c)}<li>{c}</li>{/each}
          </ul>
        </div>
      </div>
      <div class="vcut-grid">
        <div class="vcut-copy">
          <h3>{t.sheet.title}</h3>
          <Rich text={t.sheet.body} />
          <ul class="vcut-chips">
            {#each t.sheet.chips as c (c)}<li>{c}</li>{/each}
          </ul>
        </div>
        <Frame addr={t.sheet.addr} shot={{ src: asset("sheet-quote.png"), alt: t.sheet.alt, width: 1254, height: 608 }} />
      </div>
    </div>
    <p class="docset-note">{t.note}</p>
  </div>
</section>
