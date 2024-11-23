import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
