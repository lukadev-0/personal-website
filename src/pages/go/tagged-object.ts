import type { APIContext } from "astro";

export const prerender = true;

export async function get({ redirect }: APIContext) {
  return redirect("https://github.com/lukadev-0/tagged-object", 308);
}
