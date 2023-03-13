import type { APIContext } from "astro";

export async function get({ redirect }: APIContext) {
  return redirect("https://luau-guide.vercel.app/", 308);
}
