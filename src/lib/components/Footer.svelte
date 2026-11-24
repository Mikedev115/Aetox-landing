<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { LANG_LABEL, LANGS, LANG_TAG } from "#lib/i18n/index.ts";
  import {
    BENCHMARK_MD,
    CONTACT_MAIL,
    GITHUB,
    ISSUES,
    LICENSE,
    RELEASES,
    THIRD_PARTY,
    pagePath,
    type PageKey,
  } from "#lib/site.ts";

  // Same footer on every page. Four lists: this site's pages, the app repo,
  // the policies, and how to reach a person.
  let {
    t,
    nav,
    lang,
    page,
    suffix = "",
  }: { t: Dict["footer"]; nav: Dict["nav"]; lang: Lang; page: PageKey; suffix?: string } = $props();

  const others = $derived(LANGS.filter((l) => l !== lang));
  const site = $derived<[PageKey, string][]>([
    ["home", nav.overview],
    ["features", nav.uses],
    ["pricing", nav.pricing],
    ["safety", nav.safety],
    ["work", nav.work],
    ["docs", nav.docs],
    ["faq", nav.faq],
    ["supporters", nav.supporters],
    ["download", nav.download],
  ]);
</script>

<footer>
  <div class="wrap">
    <div class="foot">
      <div class="brand">
        <svg class="mark" aria-label="Aetox harness"><use href="#logoA" /></svg>
        <p style="margin-top: 1rem; color: var(--muted); max-width: 32ch">{t.tag}</p>
      </div>
      <div>
        <h4>{t.site}</h4>
        <ul>
          {#each site as [key, label] (key)}<li><a href={pagePath(lang, key)}>{label}</a></li>{/each}
        </ul>
      </div>
      <div>
        <h4>{t.project}</h4>
        <ul>
          <li><a href={GITHUB}>GitHub</a></li>
          <li><a href={RELEASES}>{t.releases}</a></li>
          <li><a href={BENCHMARK_MD}>Benchmark</a></li>
        </ul>
      </div>
      <div>
        <h4>{t.policies}</h4>
        <ul>
          <li><a href={pagePath(lang, "privacy")}>{t.privacy}</a></li>
          <li><a href={LICENSE}>{t.license}</a></li>
          <li><a href={THIRD_PARTY}>{t.third}</a></li>
        </ul>
      </div>
      <div>
        <h4>{t.contact}</h4>
        <ul>
          <li><a href={ISSUES}>Issues</a></li>
          <li><a href={CONTACT_MAIL}>{t.mail}</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Mikedev115 · {t.rights}</span>
      {#each others as l (l)}
        <a class="lang" href={`${pagePath(l, page)}${suffix}`} lang={LANG_TAG[l]} title={nav.langTitle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"
            ><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg
          >
          <span>{LANG_LABEL[l]}</span>
        </a>
      {/each}
    </div>
  </div>
</footer>
