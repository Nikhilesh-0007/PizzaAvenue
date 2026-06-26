import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "i.pravatar.cc" },
      { hostname: "cdn-icons-png.flaticon.com" },
    ],
  },
  allowedDevOrigins: ["192.168.29.170"],
};

export default nextConfig;
