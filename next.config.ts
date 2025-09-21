import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages (project site) under /manualdolojista
  output: "export",
  basePath: "/manualdolojista",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/manualdolojista",
  },
};

export default nextConfig;
