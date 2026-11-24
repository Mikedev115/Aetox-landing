import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// GitHub Pages publishes this project site at /Aetox-landing, while Vercel
// serves the deployment at its domain root. Local development follows the
// GitHub Pages URL shape; Vercel provides VERCEL=1 during its build.
const base = (process.env.VERCEL === "1" ? "" : "/Aetox-landing") as "" | "/Aetox-landing";

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
