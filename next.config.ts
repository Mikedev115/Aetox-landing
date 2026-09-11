import type { NextConfig } from "next";

// Published at https://mikedev115.github.io/aetox-landing/ — a GitHub project
// site, so every absolute URL Next emits has to start with /aetox-landing.
// Local dev runs at http://localhost:3000/aetox-landing for the same reason:
// what you see is the same URL shape that ships. If the site ever moves to a
// custom domain, set basePath to "" and add a CNAME file under public/.
const basePath = "/aetox-landing";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true, // /th → out/th/index.html, which Pages serves as /th/
  images: { unoptimized: true }, // no image server on Pages
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
