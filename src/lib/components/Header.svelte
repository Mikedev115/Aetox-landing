<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { LANG_CODE, LANG_LABEL, LANGS, LANG_TAG } from "#lib/i18n/index.ts";
  import { GITHUB, RELEASES, pagePath, type PageKey } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import ThemeToggle from "#lib/components/ThemeToggle.svelte";

  // The top bar is the same on every page. Each entry is a page of its own —
  // no in-page anchors — and the one we are on is marked. The policy is not in
  // the bar; it lives in the footer with the other policies. Under the bar sits
  // one line of announcement: the current release, as a badge plus a sentence,
  // linking to the release notes — the version used to be a badge in the bar.
  let {
    t,
    lang,
    page,
    version,
    suffix = "",
  }: { t: Dict["nav"]; lang: Lang; page: PageKey; version: string; suffix?: string } = $props();

  let open = $state(false);
  const others = $derived(LANGS.filter((l) => l !== lang));
  const links = $derived<[PageKey, string][]>([
    ["home", t.overview],
    ["docs", t.docs],
    ["faq", t.faq],
  ]);
  const isUsesPage = $derived(["features", "pricing", "safety", "work"].includes(page));
</script>

<header>
  <div class="wrap bar">
    <a class="lockup" href={pagePath(lang)} aria-label={t.backToTop}>
      <svg class="mark" aria-hidden="true"><use href="#logoA" /></svg><span>Aetox harness</span>
    </a>
    <nav id="nav" class="primary" class:open aria-label="Main">
      {#each links.slice(0, 1) as [key, label] (key)}
        <a href={pagePath(lang, key)} aria-current={key === page ? "page" : undefined}>{label}</a>
      {/each}
      <details class="nav-group" class:current={isUsesPage}>
        <summary>{t.uses}</summary>
        <div class="nav-flyout">
          <a href={pagePath(lang, "features")} aria-current={page === "features" ? "page" : undefined}>{t.allUses}</a>
          <a href={pagePath(lang, "pricing")} aria-current={page === "pricing" ? "page" : undefined}>{t.pricing}</a>
          <a href={pagePath(lang, "work")} aria-current={page === "work" ? "page" : undefined}>{t.work}</a>
          <a href={pagePath(lang, "safety")} aria-current={page === "safety" ? "page" : undefined}>{t.safety}</a>
        </div>
      </details>
      {#each links.slice(1) as [key, label] (key)}
        <a href={pagePath(lang, key)} aria-current={key === page ? "page" : undefined}>{label}</a>
      {/each}
      <a href={pagePath(lang, "supporters")} aria-current={page === "supporters" ? "page" : undefined}>{t.supporters}</a>
      <a href={GITHUB}>GitHub</a>
    </nav>
    <div class="tools">
      <details class="lang-menu">
        <summary class="icon-btn" title={t.langTitle} aria-label={t.langTitle}>{LANG_CODE[lang]}</summary>
        <div class="nav-flyout">
          {#each others as l (l)}
            <a href={`${pagePath(l, page)}${suffix}`} lang={LANG_TAG[l]} hreflang={LANG_TAG[l]}>
              <span>{LANG_LABEL[l]}</span><span class="code">{LANG_CODE[l]}</span>
            </a>
          {/each}
        </div>
      </details>
      <ThemeToggle label={t.theme} />
      <Pill href={pagePath(lang, "download")} className="sm" aria-current={page === "download" ? "page" : undefined}>{t.download}</Pill>
      <button
        class="icon-btn menu-btn"
        type="button"
        aria-label={t.menu}
        aria-controls="nav"
        aria-expanded={open}
        onclick={() => (open = !open)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"
          ><path d="M4 7h16M4 12h16M4 17h16" /></svg
        >
      </button>
    </div>
  </div>
  <a class="announce" href={RELEASES}>
    <span class="badge">{`v${version}`}</span>
    <span class="txt">{t.announceBefore}{version}{t.announceAfter}<span class="arr" aria-hidden="true"> →</span></span>
  </a>
</header>
