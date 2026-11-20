import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    locale: z.enum(['fr', 'en']),
    title: z.string(),
    summary: z.string(),
    category: z.enum(['ai-agentic', 'web', 'java-csharp', 'data-sql', 'system-3d']),
    categoryLabel: z.string(),
    year: z.string(),
    image: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    repoUrl: z.string().optional(),
    docUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects };
