import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fieldNotes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/field-notes' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    topic: z.string(),
    readTime: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    role: z.string(),
    industry: z.string(),
    readTime: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    topic: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    readTime: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    source: z.string(),
    sourceUrl: z.string().url(),
    readTime: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

const promptLibrary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/prompt-library' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    model: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'field-notes': fieldNotes,
  'use-cases': useCases,
  'guides': guides,
  'news': news,
  'prompt-library': promptLibrary,
};
