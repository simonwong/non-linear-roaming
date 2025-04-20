import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mmbiz.qpic.cn',
        port: '',
        pathname: '/sz_mmbiz_png/**',
        search: '',
      },
    ],
  },
};

export default withContentCollections(nextConfig);
