import type { Dict, Lang } from "@/lib/i18n";
import { langPath } from "@/lib/i18n";
import { ARCHITECTURE_MD, BASE, BENCHMARK_MD, CONTACT_MAIL, GITHUB, ISSUES, LICENSE, RELEASES, THIRD_PARTY, privacyPath } from "@/lib/site";

export default function Footer({ t, nav, lang, langHref }: { t: Dict["footer"]; nav: Dict["nav"]; lang: Lang; langHref?: string }) {
  const other: Lang = lang === "en" ? "th" : "en";
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="brand">
            <svg className="mark" aria-label="Aetox"><use href="#logoA" /></svg>
            <p style={{ marginTop: "1rem", color: "var(--muted)", maxWidth: "32ch" }}>{t.tag}</p>
          </div>
          <div>
            <h4>Aetox</h4>
            <ul>
              <li><a href={GITHUB}>GitHub</a></li>
              <li><a href={RELEASES}>{t.releases}</a></li>
              <li><a href={ARCHITECTURE_MD}>Architecture</a></li>
              <li><a href={BENCHMARK_MD}>Benchmark</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.policies}</h4>
            <ul>
              <li><a href={privacyPath(lang)}>{t.privacy}</a></li>
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
        <div className="foot-bottom">
          <span>© 2026 Mikedev115 · {t.rights}</span>
          <a className="lang" href={langHref ?? `${BASE}${langPath(other)}`} lang={other} title={nav.langTitle}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
            <span>{nav.lang}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
