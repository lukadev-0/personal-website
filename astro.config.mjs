import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import arraybuffer from "vite-plugin-arraybuffer";

// https://astro.build/config
export default defineConfig({
  site: "https://lukadev.me",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [arraybuffer(), tailwindcss()],
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
