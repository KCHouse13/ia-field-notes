---
name: "astro-content-collections"
description: "Patterns for Astro content collections with Zod schemas and dynamic routing"
domain: "content-architecture"
confidence: "medium"
source: "manual"
---

## Context
IA Field Notes uses Astro v6 content collections with Zod-validated frontmatter schemas. This skill covers patterns for defining, querying, and rendering content collections.

## Patterns

### Content config location
- Astro v6 uses `src/content.config.ts` (not `src/content/config.ts`)
- Uses `glob()` loader pattern, not the legacy `type: 'content'`

### Schema definition
```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const myCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/my-collection' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});
```

### Querying collections
```typescript
import { getCollection } from 'astro:content';
const posts = await getCollection('field-notes', ({ data }) => !data.draft);
```

### Dynamic routes
```typescript
// src/pages/field-notes/[...slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('field-notes');
  return posts.map(post => ({
    params: { slug: post.id },
    props: { post },
  }));
}
```

## Anti-Patterns
- Don't use the legacy `type: 'content'` pattern — Astro v6 uses `glob()` loader
- Don't hardcode content paths — use `getCollection()` API
- Don't skip Zod validation — every field must be typed
- Don't put config at `src/content/config.ts` — use `src/content.config.ts` for v6
