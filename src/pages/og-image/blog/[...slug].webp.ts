import type { APIRoute } from "astro";
import {
  getCollection,
  getEntry,
  type ValidContentEntrySlug,
} from "astro:content";
import { generateBlogImageSvg } from "../../../components/og-image/BlogImage";
import sharp from "sharp";

export async function getStaticPaths() {
  const allBlogPosts = await getCollection("blog");
  return allBlogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const post = await getEntry({
    collection: "blog",
    slug: params.slug as ValidContentEntrySlug<"blog">,
  });

  const svg = await generateBlogImageSvg({ post });
  const webp = await sharp(Buffer.from(svg)).webp().toBuffer();

  return new Response(webp, {
    headers: {
      "Content-Type": "image/webp",
      "Content-Length": webp.byteLength.toString(),
    },
  });
};
