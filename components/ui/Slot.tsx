/**
 * Where a capture goes before it exists. The id is the slot's name in the
 * README's "ภาพและวิดีโอ" section, so an empty frame on the page says which
 * take fills it. `ratio` keeps the frame the height the capture will be.
 */
export default function Slot({ id, ratio = "16/10" }: { id: string; ratio?: string }) {
  return <div className="slot" style={{ aspectRatio: ratio }}><span>{id}</span></div>;
}
