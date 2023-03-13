import type { APIContext } from "astro";

export async function get({ redirect }: APIContext) {
  return redirect("https://github.com/lukadev-0", 308);
}
