import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
        pathname: "/project_modules/**",
      },
    ],
  },
};

export default nextConfig;
