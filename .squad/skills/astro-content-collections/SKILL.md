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

### Collections in this project
- Four collections: `field-notes`, `use-cases`, `guides`, `prompt-library`.
- **News is NOT a collection** — it lives in `src/data/news.ts` as a typed data module (link-out roll-up, no article bodies). Don't add a `news` collection to `content.config.ts`.

### Guides `width` enum and layout selection
The `guides` schema carries a `width` enum that drives which layout renders the post:
```typescript
const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    // ...
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    width: z.enum(['standard', 'wide']).default('standard'),
  }),
});
```
```astro
---
// src/pages/guides/[...slug].astro
import PostLayout from '../../layouts/PostLayout.astro';
import GuideWideLayout from '../../layouts/GuideWideLayout.astro';
const Layout = post.data.width === 'wide' ? GuideWideLayout : PostLayout;
---
```
Wide guides wrap a single bespoke component from `src/components/guides/` (e.g. `CopilotChatBasicGuide.astro`).

## Anti-Patterns
- Don't use the legacy `type: 'content'` pattern — Astro v6 uses `glob()` loader
- Don't hardcode content paths — use `getCollection()` API
- Don't skip Zod validation — every field must be typed
- Don't put config at `src/content/config.ts` — use `src/content.config.ts` for v6
