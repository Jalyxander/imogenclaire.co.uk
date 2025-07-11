import { defineCollection, z } from 'astro:content';

const artworkCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    dimensions: z.string(),
    price: z.string().optional(),
    available: z.boolean().default(true),
    featured: z.boolean().default(false),
    image: image(),
    alt: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  artwork: artworkCollection,
};
