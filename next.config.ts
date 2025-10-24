import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "fra.cloud.appwrite.io" },
    ],
  },
};

export default nextConfig;
