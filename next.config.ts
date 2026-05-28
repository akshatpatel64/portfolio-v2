import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Profile image is local — no remote domains needed
    formats: ["image/avif", "image/webp"],
  },
  // Ensure trailing slash consistency
  trailingSlash: false,
};

export default nextConfig;
