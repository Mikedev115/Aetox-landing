<script lang="ts">
  import type { Lang } from "#lib/i18n/index.ts";
  import { mobileCopy } from "#lib/i18n/mobile.ts";
  import { MOBILE_APK, MOBILE_RELEASE } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";

  let { lang }: { lang: Lang } = $props();

  const copy = $derived(mobileCopy[lang]);
</script>

<section id="mobile-preview" class="mobile-preview" aria-labelledby="mobile-preview-title">
  <div class="wrap">
    <div class="scard mobile-preview-card">
      <p class="eyebrow">{copy.status}</p>
      <h2 id="mobile-preview-title">{copy.title}</h2>
      <p class="mobile-preview-body">{copy.body}</p>
      <p class="mobile-preview-requirement">{copy.requirement}</p>
      <div class="mobile-preview-phones">
        <div id="android" class="mobile-preview-phone">
          <h3>{copy.android.title}</h3>
          <ol>{#each copy.android.steps as step (step)}<li>{step}</li>{/each}</ol>
          <div class="cta">
            <Pill href={MOBILE_APK}>{copy.apk}</Pill>
            <Pill href={MOBILE_RELEASE} variant="soft">{copy.notes}</Pill>
          </div>
          <p class="fine">{copy.android.note}</p>
        </div>
        <div id="iphone" class="mobile-preview-phone">
          <h3>{copy.iphone.title}</h3>
          <ol>{#each copy.iphone.steps as step (step)}<li>{step}</li>{/each}</ol>
          <p class="fine">{copy.iphone.note}</p>
        </div>
      </div>
    </div>
  </div>
</section>
