import type { APIContext } from "astro";

export async function get({ redirect }: APIContext) {
  return redirect("https://www.roblox.com/users/1531696143/profile", 308);
}