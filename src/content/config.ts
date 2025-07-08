import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      category: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
    }),
});

const legal = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const pages = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      ogImage: image().optional(),
      banner: z.boolean().optional().default(false),
      containerClass: z.string().optional(),
    }),
});

export const collections = { blog, legal, pages };
