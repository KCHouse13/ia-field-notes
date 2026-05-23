# SKILL: Guide Builder

## Purpose
Generate step-by-step interactive walkthroughs using MDX components. Guides teach the reader how to do something specific with AI tools.

## Input
- A specific task or workflow to walk through
- Difficulty level (beginner / intermediate / advanced)
- Required tools or prerequisites
- Expected outcome

## Output
- **File:** `src/content/guides/[slug].mdx`
- **Format:** MDX with YAML frontmatter and Astro components
- **Length:** Variable (as long as needed for clarity)

## Brand Compliance
All content must comply with `skills/SKILL-brand.md`. Reference it before writing.

## Voice & Tone Rules
- Second-person ("You'll need to..." / "Open the...")
- Patient and thorough — assume the reader is smart but new to this specific workflow
- Every step should be independently verifiable

## Required Structure

### Frontmatter
```yaml
---
title: "how-to-do-specific-thing"
date: YYYY-MM-DD
topic: "string"
difficulty: "beginner" | "intermediate" | "advanced"
readTime: "X min"
excerpt: "One sentence summary"
draft: false
tags: ["tag1", "tag2"]
---
```

### Body Structure
1. **Prerequisites** — What does the reader need before starting?
2. **Steps** — Each step uses `<WalkthroughStep number={N} title="Step Title">` component
3. **Tips/Warnings** — Use `<CalloutBox type="tip|warning|note">` as needed
4. **Prompts** — Use `<PromptExample>` for any prompt text
5. **Code** — Use `<CodeBlock>` for code snippets
6. **Summary** — What the reader accomplished

### Component Usage
```mdx
import WalkthroughStep from '../../components/WalkthroughStep.astro';
import CalloutBox from '../../components/CalloutBox.astro';
import PromptExample from '../../components/PromptExample.astro';
import CodeBlock from '../../components/CodeBlock.astro';

<WalkthroughStep number={1} title="Install the extension">
  Go to the VS Code marketplace...
</WalkthroughStep>

<CalloutBox type="tip">
  You can also install via the command line.
</CalloutBox>

<PromptExample
  title="Generate a summary"
  prompt="Summarize the key points from this document..."
  notes="Works best with documents under 10 pages"
/>
```

## Anti-patterns
- Don't skip steps — if you have to do something, document it
- Don't assume environment setup — list prerequisites
- Don't mix multiple workflows in one guide
- Don't use screenshots without describing what's in them (accessibility)
