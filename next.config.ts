import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The current Sites preview does not expose the ASSETS binding expected by
  // vinext's image transformer. The curated project files are already compact;
  // re-enable Cloudflare image transformation when the production binding is set.
  images: { unoptimized: true },
};

export default nextConfig;
