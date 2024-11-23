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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gray[700]"),
            "--tw-prose-headings": theme("colors.dark"),
            "--tw-prose-lead": theme("colors.gray[600]"),
            "--tw-prose-links": theme("colors.dark"),
            "--tw-prose-bold": theme("colors.gray[800]"),
            "--tw-prose-counters": theme("colors.gray[600]"),
            "--tw-prose-bullets": theme("colors.gray[400]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[300]"),
            "--tw-prose-captions": theme("colors.gray[700]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[100]"),
            "--tw-prose-pre-bg": theme("colors.gray[200]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),
            "--tw-prose-invert-body": theme("colors.gray[300]"),
            "--tw-prose-invert-headings": theme("colors.light"),
            "--tw-prose-invert-lead": theme("colors.gray[400]"),
            "--tw-prose-invert-links": theme("colors.light"),
            "--tw-prose-invert-bold": theme("colors.gray[100]"),
            "--tw-prose-invert-counters": theme("colors.gray[400]"),
            "--tw-prose-invert-bullets": theme("colors.gray[600]"),
            "--tw-prose-invert-hr": theme("colors.gray[700]"),
            "--tw-prose-invert-quotes": theme("colors.gray[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.gray[700]"),
            "--tw-prose-invert-captions": theme("colors.gray[400]"),
            "--tw-prose-invert-code": theme("colors.light"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-invert-th-borders": theme("colors.gray[600]"),
            "--tw-prose-invert-td-borders": theme("colors.gray[700]"),
            a: {
              "text-decoration-color": theme("colors.gray[500]"),
              transition: "text-decoration-color 150ms",
              "&:hover": {
                "text-decoration-color": "currentColor",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
