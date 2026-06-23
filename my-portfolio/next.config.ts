import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(__dirname, "node_modules/tailwindcss"),
      "@vercel/analytics": path.join(__dirname, "node_modules/@vercel/analytics"),
    },
  },
};

export default nextConfig;
