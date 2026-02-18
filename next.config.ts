import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pmqodbfhsejbvfbmsfeq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
