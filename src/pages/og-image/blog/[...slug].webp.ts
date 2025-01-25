import type { APIRoute } from "astro";
import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import sharp from "sharp";
import { generateBlogImageSvg } from "../../../components/og-image/BlogImage";

export async function getStaticPaths() {
  const allBlogPosts = await getCollection("blog");
  return allBlogPosts.map((post) => ({
    params: { slug: post.id },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const post = await getEntry(
    "blog",
    params.id as CollectionEntry<"blog">["id"],
  );

  if (!post) {
    throw new Error(`post '${params.id}' not found`);
  }

  const svg = await generateBlogImageSvg({ post });
  const webp = await sharp(Buffer.from(svg)).webp().toBuffer();

  return new Response(webp, {
    headers: {
      "Content-Type": "image/webp",
      "Content-Length": webp.byteLength.toString(),
    },
  });
};
