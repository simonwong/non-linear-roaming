import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/contents",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
  }),
});

export default defineConfig({
  collections: [posts],
});
