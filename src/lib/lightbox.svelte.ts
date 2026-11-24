// One lightbox for the whole page. A module rather than a context because the
// page has exactly one, and every Frame deep inside a section needs to open it
// without a provider chain threaded through every component in between.
export const lightbox = $state<{ current: { src: string; alt: string } | null }>({ current: null });

export function openLightbox(src: string, alt: string) {
  lightbox.current = { src, alt };
}

export function closeLightbox() {
  lightbox.current = null;
}
