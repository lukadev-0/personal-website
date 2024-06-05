import * as icons from "simple-icons";

export type Project = {
  name: string;
  description: string;
  url: string;
  github?: string;
  technologies: Technology[];
};

export type Technology =
  | "js"
  | "ts"
  | "rust"
  | "react"
  | "next"
  | "roblox"
  | "luau";

export type TechnologyInfo = {
  name: string;
  icon: string;
};

export const technologies: Record<Technology, TechnologyInfo> = {
  js: {
    name: "JS",
    icon: icons.siJavascript.path,
  },
  ts: {
    name: "TS",
    icon: icons.siTypescript.path,
  },
  rust: {
    name: "Rust",
    icon: icons.siRust.path,
  },
  react: {
    name: "React",
    icon: icons.siReact.path,
  },
  next: {
    name: "Next.js",
    icon: icons.siNextdotjs.path,
  },
  roblox: {
    name: "Roblox",
    icon: icons.siRoblox.path,
  },
  luau: {
    name: "Luau",
    icon: "M5.0718 0L24 5.0718L18.9282 24L0 18.9282L5.0718 0ZM14.2365 4.99156L21 6.80383L19.1877 13.5673L12.4243 11.755L14.2365 4.99156Z",
  },
};

export const projects: Project[] = [
  {
    name: "Bird",
    description: "A social media app similar to Twitter/X.",
    url: "https://bird.lukadev.me/",
    github: "lukadev-0/bird",
    technologies: ["ts", "react", "next"],
  },
  {
    name: "Random Quote Machine",
    description: "A website with random quotes.",
    url: "https://quote.lukadev.me/",
    github: "lukadev-0/random-quote-machine",
    technologies: ["ts", "react", "next"],
  },
  {
    name: "roblox-browser",
    description: "A web browser in Roblox.",
    url: "https://github.com/lukadev-0/roblox-browser",
    github: "lukadev-0/roblox-browser",
    technologies: ["luau", "rust", "roblox"],
  },
  {
    name: "util.luau",
    description: "A collection of useful utilities for Luau.",
    url: "https://lukadev-0.github.io/util.luau",
    github: "lukadev-0/util.luau",
    technologies: ["luau"],
  },
];
