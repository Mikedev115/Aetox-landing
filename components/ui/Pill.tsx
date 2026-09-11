import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "solid" | "soft" | "ghost";
type Trail = "arrow" | "chev";

const cls = (variant: Variant, trail?: Trail, extra?: string) => ["pill", variant, trail, extra].filter(Boolean).join(" ");

/** The one control shape on the page — as a link. */
export function PillLink({ variant = "solid", trail, className, ...rest }: { variant?: Variant; trail?: Trail } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cls(variant, trail, className)} {...rest} />;
}

/** Same shape, as a button. */
export function PillButton({ variant = "solid", trail, className, type = "button", ...rest }: { variant?: Variant; trail?: Trail } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={cls(variant, trail, className)} {...rest} />;
}
