import type { APIContext } from "astro";

export const prerender = true;

export async function get({ redirect }: APIContext) {
  return redirect("https://lukadev-randomquotes.vercel.app/", 308);
}
