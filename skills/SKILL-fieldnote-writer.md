---
name: field-note-writer
title: Field Note Writer
description: Generate short-form Field Notes observation posts (300–600 words) as Markdown. Use when writing a dispatch-style observation for the Field Notes section.
applies_to: src/content/field-notes/*.md
brand_source_of_truth: skills/SKILL-brand.md
---

# SKILL: Field Note Writer

## Purpose
Generate short-form observation posts for the Field Notes section. These are dispatches from the field — concise, opinionated, and grounded in real experience.

## Input
- A topic, observation, or experience to write about
- Optional: specific product/feature context
- Optional: related links or references

## Output
- **File:** `src/content/field-notes/[slug].md`
- **Format:** Markdown with YAML frontmatter
- **Length:** 300-600 words

## Brand Compliance
All content must comply with `skills/SKILL-brand.md`. Reference it before writing.

## Voice & Tone Rules
- First-person perspective ("I observed..." / "In my experience...")
- Conversational but substantive
- One clear observation per post — don't try to cover everything
- End with an actionable implication

## Required Structure

### Frontmatter
```yaml
---
title: "descriptive-but-concise-title"
date: YYYY-MM-DD
topic: "see the topic vocabulary in SKILL-brand.md (e.g., Copilot, Agents, Adoption)"
readTime: "X min read"
excerpt: "One sentence summary — this appears in card views"
draft: false
tags: ["tag1", "tag2"]
---
```

### Body Sections (in order)
1. **Context** (2-3 lines) — Set the scene. Where were you, what were you doing?
2. **Observation** — The core insight. What did you notice?
3. **Implication** — So what? Why does this matter for the reader?
4. **Related** — Links to related content (internal or external)

## Examples

**Good title:** "Why Copilot adoption stalls after the first week"
**Bad title:** "7 Game-Changing Copilot Tips That Will Transform Your Workflow"

**Good excerpt:** "Most teams hit a plateau after initial Copilot excitement. Here's what I've seen work to push past it."
**Bad excerpt:** "Discover the revolutionary power of AI to unleash productivity!"

## Anti-patterns
- Don't write marketing copy
- Don't speculate without flagging it as speculation
- Don't make claims without evidence or experience backing them
- Don't exceed 600 words — if it's longer, it's probably a Use Case or Guide
- Don't use "we" when you mean "I" — be honest about perspective
