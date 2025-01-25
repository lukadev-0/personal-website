import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
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
