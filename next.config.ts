import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "www.kcell.kz",
      },
      {
        protocol: "https",
        hostname: "imageproxy.wolt.com",
      },
      {
        protocol: "https",
        hostname: "www.retail.ru",
      },
      {
        protocol: "https",
        hostname: "the-steppe.com",
      },
      {
        protocol: "https",
        hostname: "ltvakcent.kz",
      },
      {
        protocol: "https",
        hostname: "elaba24.kz",
      },
    ],
  },
};

export default nextConfig;
