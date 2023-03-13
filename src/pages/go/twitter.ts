import type { APIContext } from "astro";

export async function get({ redirect }: APIContext) {
  return redirect("https://twitter.com/lukadev_0", 308);
}
