import type { Dict } from "@/lib/i18n";
import { APP_SETUP_URL } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// Words and one button, no screenshot — the close of every page, the way the
// big product sites end theirs (Linear, Cursor, Claude).
export default function FinalCta({ t }: { t: Dict["cta"] }) {
  return (
    <section id="get">
      <div className="wrap">
        <Reveal className="banner">
          <div className="copy">
            <h2>{t.h2}</h2><p>{t.p}</p>
            <PillLink trail="chev" href={APP_SETUP_URL}>{t.btn}</PillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
