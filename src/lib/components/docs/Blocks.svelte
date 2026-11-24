<script lang="ts" module>
  import type { Lang } from "#lib/i18n/index.ts";
  import { docsPath } from "#lib/site.ts";

  // Inline markup is the site's own — **bold**, `code`, [text](url) — plus
  // [text](docs:slug), which is rewritten here into this site's address for the
  // reader's language before Rich sees it.
  const DOCS_LINK = /\[([^\]]+)\]\(docs:([a-z0-9-]+)\)/g;

  function withDocsLinks(text: string, lang: Lang): string {
    return text.replace(DOCS_LINK, (_all, label: string, slug: string) => `[${label}](${docsPath(lang, slug)})`);
  }

  /** A card's own href: docs:slug becomes a page of this section, anything else as written. */
  function resolveHref(href: string, lang: Lang): string {
    return href.startsWith("docs:") ? docsPath(lang, href.slice(5)) : href;
  }
</script>

<script lang="ts">
  import { anchor } from "#lib/docs/index.ts";
  import type { Block } from "#lib/docs/index.ts";
  import Rich from "#lib/components/ui/Rich.svelte";

  // One block of a docs page. A page is data (lib/docs/*.ts), never markup, so
  // the same text can also be handed to the copy button and to llms.txt as
  // Markdown.
  let { blocks, lang }: { blocks: Block[]; lang: Lang } = $props();
</script>

{#each blocks as b, i (i)}
  {#if b.t === "p"}
    <Rich text={withDocsLinks(b.text, lang)} className="docs-p" />
  {:else if b.t === "h2"}
    <h2 id={anchor(b.text)}>{b.text}</h2>
  {:else if b.t === "h3"}
    <h3 id={anchor(b.text)}>{b.text}</h3>
  {:else if b.t === "ul"}
    <ul class="docs-ul">
      {#each b.items as item, n (n)}
        <li><Rich text={withDocsLinks(item, lang)} as="span" /></li>
      {/each}
    </ul>
  {:else if b.t === "ol"}
    <ol class="docs-ol">
      {#each b.items as item, n (n)}
        <li><Rich text={withDocsLinks(item, lang)} as="span" /></li>
      {/each}
    </ol>
  {:else if b.t === "steps"}
    <ol class="docs-steps">
      {#each b.items as step, n (n)}
        <li>
          <span class="n" aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
          <div>
            <b>{step.title}</b>
            <Rich text={withDocsLinks(step.text, lang)} as="span" />
          </div>
        </li>
      {/each}
    </ol>
  {:else if b.t === "code"}
    <figure class="docs-code">
      {#if b.label}<figcaption>{b.label}</figcaption>{/if}
      <pre><code>{b.text}</code></pre>
    </figure>
  {:else if b.t === "cmds"}
    <div class="docs-cmds">
      {#each b.items as c, n (n)}
        <div class="docs-cmd">
          <div class="h">
            <b>{c.label}</b>
            {#if c.text}<Rich text={withDocsLinks(c.text, lang)} as="span" />{/if}
          </div>
          <pre><code>{c.code}</code></pre>
        </div>
      {/each}
    </div>
  {:else if b.t === "note"}
    <aside class={`docs-note ${b.kind}`}>
      {#if b.title}<b>{b.title}</b>{/if}
      <Rich text={withDocsLinks(b.text, lang)} />
    </aside>
  {:else if b.t === "table"}
    <div class="docs-table">
      <table>
        <thead>
          <tr>{#each b.head as h, n (n)}<th scope="col">{h}</th>{/each}</tr>
        </thead>
        <tbody>
          {#each b.rows as row, n (n)}
            <tr>
              {#each row as cell, m (m)}
                <td data-label={b.head[m]}><Rich text={withDocsLinks(cell, lang)} as="span" /></td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else if b.t === "cards"}
    <div class="docs-cards">
      {#each b.items as c, n (n)}
        <a
          href={resolveHref(c.href, lang)}
          class="docs-card"
          target={/^https?:/.test(c.href) ? "_blank" : undefined}
          rel={/^https?:/.test(c.href) ? "noopener" : undefined}>
          <b>{c.title}</b>
          <Rich text={withDocsLinks(c.text, lang)} as="span" />
          <span class="go" aria-hidden="true">→</span>
        </a>
      {/each}
    </div>
  {:else if b.t === "dl"}
    <dl class="docs-dl">
      {#each b.items as r, n (n)}
        <div>
          <dt>{r.k}</dt>
          <dd><Rich text={withDocsLinks(r.v, lang)} as="span" /></dd>
        </div>
      {/each}
    </dl>
  {/if}
{/each}
