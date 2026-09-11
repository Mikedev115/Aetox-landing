"use client";
import type { Dict } from "@/lib/i18n";
import { useProviders } from "./dialogs/ProviderDialog";
import { PillButton } from "./ui/Pill";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

const LOCAL_MARKS = [["lg-ollama", "Ollama"], ["lg-lmstudio", "LM Studio"]];
const PROVIDER_MARKS = [["lg-anthropic", "Anthropic"], ["lg-openai", "OpenAI"], ["lg-gemini", "Gemini"], ["lg-deepseek", "DeepSeek"], ["lg-copilot", "Copilot"]];

function Path({ t, marks, more }: { t: Dict["pricing"]["local"]; marks: string[][]; more?: string }) {
  return (
    <div className="path">
      <h3>{t.title}</h3>
      <p className="price"><span>{t.price}</span><small>{t.sub}</small></p>
      <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
      <p className="who">{t.who}</p>
      <div className="pvrow">
        {marks.map(([icon, name]) => (
          <span className="pv" key={icon}><svg aria-hidden="true"><use href={`#${icon}`} /></svg>{name}</span>
        ))}
        {more ? <span className="pv">{more}</span> : null}
      </div>
    </div>
  );
}

export default function Pricing({ t }: { t: Dict["pricing"] }) {
  const openProviders = useProviders();
  return (
    <Reveal className="wide">
      <div className="head">
        <div><h2>{t.h2}</h2><p>{t.p}</p></div>
        <PillButton variant="soft" trail="chev" onClick={openProviders}>{t.all}</PillButton>
      </div>
      <div className="paths">
        <Path t={t.local} marks={LOCAL_MARKS} />
        <Path t={t.provider} marks={PROVIDER_MARKS} more={t.provider.more} />
      </div>
      <Rich className="bench-foot" text={t.note} />
    </Reveal>
  );
}
