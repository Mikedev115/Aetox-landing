import type { Lang } from "../lib/i18n";
import { mobileCopy } from "../lib/i18n/mobile";
import { MOBILE_APK, MOBILE_RELEASE } from "../lib/site";
import { PillLink } from "./ui/Pill";

export function MobilePreview({ lang }: { lang: Lang }) {
  const copy = mobileCopy[lang];
  return (
    <section id="mobile-preview" className="mobile-preview" aria-labelledby="mobile-preview-title">
      <div className="wrap">
        <div className="scard mobile-preview-card">
          <p className="eyebrow">{copy.status}</p>
          <h2 id="mobile-preview-title">{copy.title}</h2>
          <p className="mobile-preview-body">{copy.body}</p>
          <p className="mobile-preview-requirement">{copy.requirement}</p>
          <div className="cta">
            <PillLink href={MOBILE_APK}>{copy.apk}</PillLink>
            <PillLink href={MOBILE_RELEASE} variant="soft">{copy.notes}</PillLink>
          </div>
          <p className="fine mobile-preview-iphone">{copy.iphone}</p>
          <p className="fine">{copy.pending}</p>
        </div>
      </div>
    </section>
  );
}
