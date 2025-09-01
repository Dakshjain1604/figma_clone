import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liveblocks.io",
        // remove port since you're not using it
      },
    ],
  },
};

export default nextConfig;