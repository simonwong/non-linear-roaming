import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withContentCollections(
  defineCloudflareConfig(
    {
      incrementalCache: r2IncrementalCache,
      ...nextConfig
    }
  )
);
