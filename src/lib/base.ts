// vite.config.ts is the one place that decides where the site is served from,
// and it passes the same value here, so a link built in a component and a link
// SvelteKit builds for an asset agree at build time and in the browser alike.
declare const __BASE_PATH__: string;

export const BASE_PATH: string = __BASE_PATH__;
