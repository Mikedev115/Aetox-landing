import type { NextConfig } from "next";

// GitHub Pages publishes this project site at /Aetox-landing, while Vercel
// serves the deployment at its domain root. Local development follows the
// GitHub Pages URL shape; Vercel provides VERCEL=1 during its build.
const basePath = process.env.VERCEL === "1" ? "" : "/Aetox-landing";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true, // /th → out/th/index.html, which Pages serves as /th/
  images: { unoptimized: true }, // no image server on Pages
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
