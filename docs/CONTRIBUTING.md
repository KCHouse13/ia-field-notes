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
readTime: "3 min"
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
readTime: "5 min"
excerpt: "One-line summary"
draft: false
tags: ["copilot", "healthcare"]
---
```

## Brand Rules

- **Voice:** Practitioner to practitioner — direct, credible, no hype
- **Banned words:** revolutionary, unleash, game-changing, transformative (filler), cutting-edge, synergy, leverage (verb), unlock (overused)
- **Citations:** All external claims must include linked sources
- **Disclaimers:** Any vendor reference needs a note that views are not official

See `skills/SKILL-brand.md` for the full brand guide.
