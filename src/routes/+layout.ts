// Every page of this site is a file on disk: there is no server at runtime.
export const prerender = true;

// The site's own links end in a slash (lib/site.ts builds them that way), and
// GitHub Pages answers /th/pricing/ only when the page was written as
// th/pricing/index.html.
export const trailingSlash = "always";
