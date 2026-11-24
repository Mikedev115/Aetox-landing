// Opens the provider list from anywhere on the page. The dialog registers its
// own opener when it mounts; until then a click does nothing, which only
// happens if the dialog is not in the layout at all.
let opener: (() => void) | null = null;

export function setProviderOpener(fn: (() => void) | null) {
  opener = fn;
}

export function openProviders() {
  opener?.();
}
