import type { Dict, Lang } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { SUPPORTERS, supportTotal } from "@/lib/supporters";
import Reveal from "./ui/Reveal";

export default function Supporters({ t, lang }: { t: Dict["pages"]["supporters"]; lang: Lang }) {
  const formatter = new Intl.NumberFormat(lang === "th" ? "th-TH" : "en-US", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const supporters = [...SUPPORTERS].sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0));
  const total = formatter.format(supportTotal);

  return (
    <section className="supporters">
      <div className="wrap">
        <Reveal className="support-total">
          <p className="eyebrow">{t.total}</p>
          <p className="support-amount">{total}</p>
          <p className="support-sub">{t.totalSub}</p>
        </Reveal>
        <Reveal className="support-promptpay">
          <div>
            <p className="eyebrow">{t.promptPay}</p>
            <h2>{t.promptPayTitle}</h2>
            <p>{t.promptPaySub}</p>
          </div>
          <img src={asset("promptpay-qr.png")} alt={t.promptPayAlt} width={640} height={713} />
        </Reveal>
        <div className="support-list">
          <h2>{t.list}</h2>
          <ol>
            {supporters.map((supporter, index) => (
              <li key={"anonymous" in supporter ? `anonymous-${index}` : supporter.name}>
                <span>{"anonymous" in supporter ? t.anonymous : supporter.name}</span>
                <span className="support-person-amount">{formatter.format(supporter.amount ?? 0)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
