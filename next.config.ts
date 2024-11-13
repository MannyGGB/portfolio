import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manyggb-portfolio-server.vercel.app",
        port: "",
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
