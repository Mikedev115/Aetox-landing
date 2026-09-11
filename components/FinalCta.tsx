import type { Dict } from "@/lib/i18n";
import { STORE_URL } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

export default function FinalCta({ t }: { t: Dict["cta"] }) {
  return (
    <section id="get">
      <div className="wrap">
        <Reveal className="banner">
          <div><h2>{t.h2}</h2><p>{t.p}</p></div>
          <PillLink trail="chev" href={STORE_URL}>{t.btn}</PillLink>
        </Reveal>
      </div>
    </section>
  );
}
