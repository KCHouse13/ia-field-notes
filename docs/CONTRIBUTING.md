# Contributing to IA Field Notes

## Adding Content

All content lives in `src/content/` organized by type:

```
src/content/
├── field-notes/    → Short observations (300-600 words)
├── use-cases/      → Business scenarios (600-1200 words)
├── guides/         → Step-by-step walkthroughs (variable length)
└── prompt-library/ → Reusable prompts (hidden in nav for v1)
```

> **News is different.** The News section is a curated roll-up that links out to
> official Microsoft sources, not internal articles. It is powered by a single
> data module — `src/data/news.ts` — rather than a content collection. To add an
> announcement, append an entry to that file. See `skills/SKILL-news-curator.md`
> for the schema and workflow.

## Content Workflow

1. **Choose the content type** that fits your topic
2. **Read the corresponding SKILL file** in `skills/` for formatting rules
3. **Create a new `.md` or `.mdx` file** in the appropriate `src/content/` directory
4. **Add required frontmatter** (see schemas in `src/content.config.ts`)
5. **Follow the required body sections** for that content type
6. **Submit a PR** — Harper (Lead) will review for brand compliance

## Frontmatter Examples

### Field Note
```yaml
---
title: "Your observation title"
date: 2026-05-22
topic: "Copilot"
readTime: "3 min read"
excerpt: "One-line summary of the observation"
draft: false
tags: ["copilot", "adoption"]
---
```

### Use Case
```yaml
---
title: "Your use case title"
date: 2026-05-22
role: "IT Administrator"
industry: "Healthcare"
readTime: "5 min read"
excerpt: "One-line summary"
draft: false
tags: ["copilot", "healthcare"]
---
```

### Guide
```yaml
---
title: "Your guide title"
date: 2026-05-22
topic: "Microsoft 365 Copilot"
difficulty: "beginner"      # beginner | intermediate | advanced
readTime: "10 min read"
excerpt: "One-line summary"
width: "standard"           # standard (PostLayout) | wide (GuideWideLayout)
draft: false
tags: ["copilot", "getting-started"]
---
```

> Set `width: wide` only for interactive guides that render a bespoke component from
> `src/components/guides/`. See `skills/SKILL-guide-builder.md`.

### Prompt Library
```yaml
---
title: "Your prompt title"
date: 2026-05-22
category: "Productivity"
model: "Microsoft 365 Copilot"
excerpt: "One-line summary"
draft: false
tags: ["copilot", "email"]
---
```

### News (data entry, not a content file)
News is not a content collection. Append a typed `NewsItem` to the `NEWS` array in `src/data/news.ts`:
```typescript
{
  cat: 'app',               // CategoryKey: app | word | excel | powerpoint | outlook | teams | knowledge | agents
  iso: '2026-05-22',        // YYYY-MM-DD — drives sorting + the displayed month
  source: 'm365blog',       // SourceKey: m365blog | m365copilot | agent365 | excelblog | spblog | hub
  url: 'https://www.microsoft.com/...',
  title: 'Plain-language headline',
  desc: 'One tight sentence on what changed and why it matters.',
  tags: ['copilot', 'chat'],
}
```

> Fields must match the `NewsItem` type in `src/data/news.ts`. Monthly "What's new"
> roll-ups go in the `MONTHLY` array; flagship launches go in `FEATURED` (keep 3).
> See `skills/SKILL-news-curator.md` for the full workflow and `NEWS_META` rules.

## Brand Rules

- **Voice:** Practitioner to practitioner — direct, credible, no hype
- **Banned words:** the canonical 12 in `skills/SKILL-brand.md` — revolutionary, unleash, game-changing, transformative (filler), cutting-edge, synergy, leverage (verb), unlock (overused), disrupt/disruptive, paradigm shift, best-in-class, next-generation
- **Citations:** All external claims must include linked sources
- **Disclaimers:** Any vendor reference needs a note that views are not official

See `skills/SKILL-brand.md` for the full brand guide.
