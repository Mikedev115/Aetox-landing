// GitHub Pages wants a real /404.html at the root of the published folder, and
// the rest of the site ends its links in a slash (see +layout.ts). Opting this
// one page out of that rule is what writes build/404.html instead of
// build/404/index.html.
export const trailingSlash = "never";
