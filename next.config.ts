import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/web_khach_san_ht" : undefined,
  trailingSlash: isGitHubPages,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    qualities: [75, 100],
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
