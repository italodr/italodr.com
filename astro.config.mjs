// @ts-check
import { SITE_URL } from "./src/consts";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "assets",
  },

  site: SITE_URL,

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },

  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
    }),
    react(),
  ],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    fallback: {
      en: "es",
    },
    routing: {
      fallbackType: "rewrite",
      prefixDefaultLocale: false,
    },
  },

  adapter: vercel(),
});
