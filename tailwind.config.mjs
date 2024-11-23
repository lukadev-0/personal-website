import defaultTheme from "tailwindcss/defaultTheme";

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#EFEFFA",
          100: "#E3E3F2",
          200: "#D9D9E9",
          300: "#CECEDF",
          400: "#ACACC1",
          500: "#8A8AA1",
          600: "#4C4C5C",
          700: "#2E2E3A",
          800: "#131318",
          900: "#0C0C0F",
          950: "#060609",
        },
        dark: "#060609",
        light: "#EFEFFA",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
};
