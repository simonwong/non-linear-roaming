import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.simonwong.cn',
      },
    ],
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default withContentCollections(nextConfig);
