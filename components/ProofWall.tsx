import type { Dict } from "@/lib/i18n";
import Rich from "./ui/Rich";

// Every card has the same four lines in the same places, so the six areas read
// as one claim: the area, Aetox's number, what it was compared with on the
// same model, and the test it came from. Numbers are {NAME}s in lib/numbers.ts.
export default function ProofWall({ t }: { t: Dict["wall"] }) {
  return (
    <div className="wall">
      <ul className="wall-grid">
        {t.cards.map((c) => (
          <li className="wall-card" key={c.k}>
            <p className="wk">{c.k}</p>
            <p className="wn">{c.n}</p>
            <Rich className="wv" text={c.vs} />
            <Rich className="wc" text={c.cond} />
          </li>
        ))}
      </ul>
      <Rich className="wall-note" text={t.note} />
    </div>
  );
}
