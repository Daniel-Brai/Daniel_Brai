import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from "astro-robots-txt";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMermaid from "astro-diagram/remark-mermaid";
import react from "@astrojs/react";
import { SITE_LINK } from './src/consts';


// https://astro.build/config
export default defineConfig({
  site: SITE_LINK,
  markdown: {
    remarkPlugins: [remarkToc, remarkMermaid, [remarkCollapse, {
      test: "Table of contents"
    }]],
    extendDefaultPlugins: true,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      warp: true
    }
  },
  integrations: [mdx({
    extendMarkdownConfig: true
  }), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), robotsTxt()]
});
