---
name: brand-voice-identity
title: Brand Voice & Identity
description: Canonical brand rules — voice, tone, banned words, formatting, metadata vocabulary — for all IA Field Notes content. The single source of truth every other skill references.
applies_to: all content (field-notes, use-cases, guides, prompt-library, news)
source_of_truth: true
---

# SKILL: Brand Voice & Identity

## Purpose
Master brand rules for all IA Field Notes content. **This file is the single source of truth (SSOT) for brand voice, the banned-words list, formatting, and content-metadata vocabulary.** Every other skill — and the Squad `brand-voice` team skill and agent charters — references this file rather than restating its rules. If a rule here conflicts with a copy elsewhere, this file wins; update the copy to match.

## Input
N/A — this is a reference document, not a generation skill.

## Output
N/A — used as a compliance check by all other skills and by SKILL-editor.md.

## Brand Identity

- **Name:** IA Field Notes
- **Tagline:** Intelligence, amplified
- **Subline:** Unlocking practical value from AI at work
- **Concept:** IA = Intelligence Augmentation. The shift from AI to IA reflects the real value: extending human capability, not replacing it.

## Voice & Tone Rules

- **Perspective:** Practitioner speaking to practitioner
- **Register:** Professional but conversational — like explaining something to a smart colleague
- **Authority:** Field-credible. Write from experience, not theory
- **Confidence:** Direct and clear, but honest about uncertainty
- **Warmth:** Supportive, never condescending

## Banned Words

This list is **canonical**. The Squad `brand-voice` team skill, the agent charters, and `docs/CONTRIBUTING.md` mirror it — keep them in sync with this file, not the other way around.

Never use these words/phrases in any content:
- revolutionary
- unleash
- game-changing
- transformative (when used as filler — acceptable when describing a specific, documented transformation)
- cutting-edge
- synergy
- leverage (as a verb — "use" is fine)
- unlock (overused — use sparingly and only when literal metaphor applies)
- disrupt / disruptive (unless quoting)
- paradigm shift
- best-in-class
- next-generation

## Preferred Alternatives

| Instead of | Use |
|---|---|
| leverage AI | use AI |
| unlock value | create value, find value |
| game-changing | significant, meaningful |
| cutting-edge | current, modern, recent |
| revolutionary | notable, important |
| synergize | combine, integrate |

## Citation Requirements

- Any claim from external sources must include a linked citation
- Data points must include source and date
- "According to..." must link to the original source, not a secondary summary

## Disclaimer Requirements

- Any content referencing specific vendors (Microsoft, Google, etc.) must include:
  > *This is not an official [vendor] resource. The views and guidance here represent personal perspective from work in the field.*
- The disclaimer appears in the About page and should be referenced (not repeated) in individual posts

## Formatting Standards

- Use sentence case for headings (not Title Case)
- Use Oxford comma
- Numbers: spell out one through nine, use numerals for 10+
- Dates: YYYY-MM-DD in frontmatter, "May 22, 2026" in body text
- Em dashes: use sparingly — and with spaces on both sides
- **`readTime` frontmatter:** write it as `"N min read"` (e.g., `"6 min read"`). Estimate as words ÷ 200, rounded up. This matches the `FieldNoteCard` default. Note: the Guides index intentionally passes an empty `readTime` so guide cards omit it (the value still shows on the guide page itself).

## Content metadata vocabulary

Frontmatter taxonomy fields are free strings (not enums in the schema), so keep values consistent with this shared, **non-exhaustive** vocabulary. Reuse an existing value before coining a new one.

- **`topic`** (field-notes, guides): Copilot, Agents, Adoption, Governance, Prompting, Productivity, Microsoft 365, Security.
- **`role`** (use-cases): IT Administrator, Developer, Marketing Manager, Analyst, Knowledge Worker, Executive.
- **`industry`** (use-cases): Healthcare, Financial Services, Education, Manufacturing, Retail, Public Sector.
- **`category`** (prompt-library): Summarization, Analysis, Writing, Code, Planning, Research.
- **`difficulty`** (guides) is a real enum — use exactly `beginner`, `intermediate`, or `advanced`.

## Anti-patterns

- No clickbait headlines
- No listicles disguised as insight ("7 Ways AI Will Transform Your Workplace")
- No content that reads like a product announcement or press release
- No unsubstantiated claims about productivity gains
- No "AI will replace X" framing — use "AI augments X" framing
