import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      slug: z.string(),
      draft: z.boolean().optional(),
      categories: z
        .array(
          z.enum([
            "Accesibilidad",
            "Ciencia",
            "Tecnología",
            "Desarrollo",
            "Crianza",
            "Bienestar",
            "Productividad",
            "Física",
            "IA",
            "Agile",
            "Interesante",
            "UX",
            "SEO",
            "Psicología",
            "Autoconocimiento",
          ]),
        )
        .optional(),
      tags: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
