import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/thoughts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        colordark: z.string().optional(),
        colorlight: z.string().optional(),
        themename: z.string().optional(),
        goodDate: z.string().optional(),
        draft: z.boolean().default(false)
    }),
});

export const collections = { blog };