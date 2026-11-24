<script lang="ts">
  import type { DocsUI } from "#lib/docs/index.ts";

  // ⌘K, the way every set of docs people already read works. The index is built
  // from the same pages the sidebar draws, so it can never list a page that does
  // not exist, and the search itself is a plain substring match — nineteen pages
  // do not need an index file fetched from anywhere.
  type Item = { slug: string; title: string; sub: string; group: string; headings: string[] };

  let { t, items, base }: { t: DocsUI; items: Item[]; base: string } = $props();

  let open = $state(false);
  let q = $state("");
  let active = $state(0);
  let input: HTMLInputElement | undefined = $state();

  const results = $derived.by(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((i) => [i.title, i.sub, i.group, ...i.headings].join(" ").toLowerCase().includes(term));
  });

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      active = Math.min(active + 1, results.length - 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      active = Math.max(active - 1, 0);
    } else if (e.key === "Enter") {
      const hit = results[active];
      if (hit) window.location.assign(`${base}${hit.slug}/`);
    }
  }

  // ⌘K anywhere on the page opens it, Escape closes it.
  $effect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open = !open;
      } else if (e.key === "Escape") {
        open = false;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Opening starts from an empty box with the first hit marked, and the page
  // behind it does not scroll while it is open.
  $effect(() => {
    if (!open) return;
    q = "";
    active = 0;
    input?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  });
</script>

<button type="button" class="docs-search" onclick={() => (open = true)} aria-label={t.search}>
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.6-3.6" />
  </svg>
  <span>{t.search}</span>
  <kbd>{t.searchHint}</kbd>
</button>

{#if open}
  <!-- The overlay closes on a click anywhere outside the panel; Escape, which
       the window listener above already handles, is its keyboard twin. -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="docs-pal" role="dialog" aria-modal="true" aria-label={t.search} tabindex="-1" onclick={() => (open = false)}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="panel" onclick={(e) => e.stopPropagation()}>
      <input
        bind:this={input}
        type="search"
        bind:value={q}
        placeholder={t.searchPlaceholder}
        aria-label={t.searchPlaceholder}
        oninput={() => (active = 0)}
        onkeydown={onKeydown}
      />
      {#if results.length}
        <ul>
          {#each results as r, i (r.slug)}
            <li>
              <a href={`${base}${r.slug}/`} class:on={i === active} onmouseenter={() => (active = i)}>
                <b>{r.title}</b>
                <span>{r.group}</span>
              </a>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="empty">{t.searchEmpty}</p>
      {/if}
    </div>
  </div>
{/if}
