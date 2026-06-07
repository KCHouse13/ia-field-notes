---
name: "editorial-workflow"
description: "Content creation → review → publish pipeline for IA Field Notes"
domain: "workflow"
confidence: "medium"
source: "manual"
---

## Context
IA Field Notes has a structured content pipeline. Content is written by Sawyer or Quinn, reviewed by Harper, and published via PR merge to main.

## Patterns

### Content creation flow
1. **Author** (Sawyer or Quinn) reads the relevant SKILL file
2. **Author** creates content file in the correct `src/content/` subdirectory
3. **Author** ensures frontmatter matches Zod schema exactly
4. **Author** follows required body sections for the content type
5. **Harper** reviews using SKILL-editor.md checklist
6. **Harper** approves → PR merges → auto-deploy

### Content type routing
| Type | Author | SKILL File | Output Dir |
|------|--------|-----------|------------|
| Field Notes | Sawyer | SKILL-fieldnote-writer.md | src/content/field-notes/ |
| Use Cases | Sawyer | SKILL-usecase-writer.md | src/content/use-cases/ |
| News | Sawyer | SKILL-news-curator.md | src/data/news.ts |
| Guides | Quinn | SKILL-guide-builder.md | src/content/guides/ |
| Prompt Library | Quinn | SKILL-prompt-library.md | src/content/prompt-library/ |

### File naming
- Use kebab-case slugs: `my-observation-title.md`
- Guides and prompt library use `.mdx` extension
- No spaces, no uppercase in filenames

### Review criteria (Harper)
- Brand voice compliance (SKILL-brand.md)
- Structure compliance (correct sections in order)
- Word count within range
- Citations and disclaimers present
- Technical accuracy

## Anti-Patterns
- Don't skip the review step — Harper must review all content
- Don't self-review — the author cannot approve their own content
- Don't merge content PRs without brand compliance check
- Don't publish draft content (draft: true in frontmatter)
