import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mannyggb-portfolio-server.vercel.app",
        port: "",
        pathname: "/api/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
