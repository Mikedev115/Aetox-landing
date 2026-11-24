<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { asset } from "#lib/site.ts";
  import { SUPPORTERS, supportTotal } from "#lib/supporters.ts";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  let { t, lang }: { t: Dict["pages"]["supporters"]; lang: Lang } = $props();

  const formatter = $derived(
    new Intl.NumberFormat(lang === "th" ? "th-TH" : "en-US", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  );
  const supporters = $derived([...SUPPORTERS].sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0)));
  const total = $derived(formatter.format(supportTotal));
</script>

<section class="supporters">
  <div class="wrap">
    <Reveal className="support-total">
      <p class="eyebrow">{t.total}</p>
      <p class="support-amount">{total}</p>
      <p class="support-sub">{t.totalSub}</p>
    </Reveal>
    <Reveal className="support-promptpay">
      <div>
        <p class="eyebrow">{t.promptPay}</p>
        <h2>{t.promptPayTitle}</h2>
        <p>{t.promptPaySub}</p>
      </div>
      <img src={asset("promptpay-qr.png")} alt={t.promptPayAlt} width={640} height={713} />
    </Reveal>
    <div class="support-list">
      <h2>{t.list}</h2>
      <ol>
        {#each supporters as supporter, index (("anonymous" in supporter) ? `anonymous-${index}` : supporter.name)}
          <li>
            <span>{"anonymous" in supporter ? t.anonymous : supporter.name}</span>
            <span class="support-person-amount">{formatter.format(supporter.amount ?? 0)}</span>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>
