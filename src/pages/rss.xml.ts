import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  posts.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });

  return rss({
    title: "lukadev's blog",
    description: "ramblings about software development.",
    site: "https://lukadev.me/",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
