import { SPRITE } from "./sprite";

/** Renders the symbol sprite once, hidden; every <use href="#…"> on the page points here. */
export default function BrandSprite() {
  return <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SPRITE }} />;
}
