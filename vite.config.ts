import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// GitHub Pages publishes this project site under /Aetox-landing, so every URL
// carries that prefix. Cloudflare (Workers static assets) and Vercel serve the
// same build from the root of a domain, where the prefix would 404. The hosting
// build sets one of these flags; local development keeps the Pages shape.
const atRoot =
  process.env.SITE_ROOT === "1" ||
  process.env.CF_PAGES === "1" ||
  process.env.WORKERS_CI === "1" ||
  process.env.VERCEL === "1";
const base = (atRoot ? "" : "/Aetox-landing") as "" | "/Aetox-landing";

export default defineConfig({
  // The one place the subpath is decided; src/lib/base.ts reads it back.
  define: { __BASE_PATH__: JSON.stringify(base) },
  plugins: [
    sveltekit({
      adapter: adapter({ pages: "build", assets: "build", strict: true }),
      paths: { base },
    }),
  ],
});
