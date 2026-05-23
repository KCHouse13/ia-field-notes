# SKILL: Prompt Library

## Purpose
Generate reusable prompt entries with context, expected output, and variations. Each entry teaches the reader how to use a specific prompt effectively.

## Input
- A use case for the prompt
- The prompt text
- Which model/tool it's designed for
- Expected output description
- Variations or tips

## Output
- **File:** `src/content/prompt-library/[slug].mdx`
- **Format:** MDX with YAML frontmatter and PromptExample component
- **Length:** Variable

## Brand Compliance
All content must comply with `skills/SKILL-brand.md`. Reference it before writing.

## Voice & Tone Rules
- Instructional and precise
- Show the prompt first, explain second
- Include real examples of expected output when possible

## Required Structure

### Frontmatter
```yaml
---
title: "descriptive-prompt-name"
date: YYYY-MM-DD
category: "string (e.g., Summarization, Analysis, Writing, Code)"
model: "string (e.g., GPT-4, Copilot in Word, Copilot in Teams)"
excerpt: "One sentence describing what this prompt does"
draft: false
tags: ["tag1", "tag2"]
---
```

### Body Sections (in order)
1. **Use case** — When and why you'd use this prompt
2. **Prompt** — The actual prompt text, displayed using `<PromptExample>` component
3. **Expected output** — What the model typically produces
4. **Variations / Tips** — Alternative phrasings, model-specific notes, when NOT to use it

### Component Usage
```mdx
import PromptExample from '../../components/PromptExample.astro';

<PromptExample
  title="Weekly status summary"
  prompt="Review my calendar, emails, and Teams chats from this week. Create a bullet-point summary of: key decisions made, action items assigned to me, and meetings scheduled for next week."
  notes="Best used with Copilot in Microsoft 365. Results improve when your calendar and email are well-organized."
/>
```

## Anti-patterns
- Don't include prompts without context — always explain when to use them
- Don't claim specific accuracy percentages for prompt outputs
- Don't include prompts that require sensitive data without a warning
- Don't skip the "Variations" section — it's what makes the entry reusable
