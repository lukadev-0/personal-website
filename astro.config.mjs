import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import arraybuffer from "vite-plugin-arraybuffer";

// https://astro.build/config
export default defineConfig({
  site: "https://lukadev.me",
  integrations: [mdx(), tailwind(), sitemap(), react()],
  vite: {
    plugins: [arraybuffer()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});

