# SKILL: News Curator

## Purpose
Generate curated, plain-language summaries of Microsoft AI, Copilot, and agent updates. No jargon dumps — translate announcements into what practitioners need to know.

## Input
- A news item, announcement, or change to summarize
- Source URL
- Source name

## Output
- **File:** `src/content/news/[slug].md`
- **Format:** Markdown with YAML frontmatter
- **Length:** 200-400 words

## Brand Compliance
All content must comply with `skills/SKILL-brand.md`. Reference it before writing.

## Voice & Tone Rules
- Neutral, informative — not promotional
- Plain language — assume the reader hasn't read the source
- Focus on practical impact, not feature lists
- Include a clear "what to do" recommendation

## Required Structure

### Frontmatter
```yaml
---
title: "plain-language-summary-title"
date: YYYY-MM-DD
source: "string (e.g., Microsoft 365 Blog, Tech Community)"
sourceUrl: "https://..."
readTime: "X min"
excerpt: "One sentence summary"
draft: false
tags: ["tag1", "tag2"]
---
```

### Body Sections (in order)
1. **What changed** — Factual summary of the update/announcement
2. **Why it matters** — Practical implications for practitioners and teams
3. **What to do with it** — Specific, actionable next steps

## Anti-patterns
- Don't copy-paste the press release
- Don't use vendor marketing language
- Don't skip "What to do with it" — this is the most valuable section
- Don't cover multiple unrelated updates in one post — split them
