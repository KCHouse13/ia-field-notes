---
name: guide-builder
title: Guide Builder
description: Generate step-by-step Guides (MDX) for the Guides section. Supports two formats — standard guides built from shared walkthrough components, and wide/interactive guides driven by a bespoke component. Use when writing a how-to.
applies_to: src/content/guides/*.mdx
brand_source_of_truth: skills/SKILL-brand.md
---

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

## Guide formats: standard vs wide/interactive
Guides come in two formats, selected by the `width` frontmatter field (schema in `src/content.config.ts`). The route `src/pages/guides/[...slug].astro` picks the layout automatically.

| `width` | Layout used | When to use |
|---|---|---|
| `standard` (default) | `PostLayout` | Most guides — prose plus the shared MDX components below. |
| `wide` | `GuideWideLayout` (full-bleed) | Rich, app-like guides that need the full viewport (custom sections, lightbox imagery, sticky sub-nav, scroll progress). |

**Standard guides** are authored entirely in MDX using the shared components (`WalkthroughStep`, `CalloutBox`, `PromptExample`, `CodeBlock`). Start here unless the design genuinely needs more.

**Wide/interactive guides** wrap a single **bespoke component** that lives in `src/components/guides/<Name>.astro`. The MDX file is a thin shell — frontmatter (`width: wide`) plus an import and one tag. The live example is [`src/content/guides/copilot-chat-basic.mdx`](../src/content/guides/copilot-chat-basic.mdx), which renders [`src/components/guides/CopilotChatBasicGuide.astro`](../src/components/guides/CopilotChatBasicGuide.astro):

```mdx
---
title: "Copilot Chat (Basic): Overview & Getting Started"
date: 2026-06-07
topic: "Microsoft 365 Copilot"
difficulty: "beginner"
readTime: "18 min read"
excerpt: "One sentence summary"
tags: ["Microsoft 365", "Copilot Chat", "Getting started"]
draft: false
width: wide
---

import CopilotChatBasicGuide from '../../components/guides/CopilotChatBasicGuide.astro';

<CopilotChatBasicGuide />
```

Conventions for a bespoke guide component:
- **Scope the CSS.** Prefix every class with a short guide-specific token (e.g. `cgb-` for the Copilot Chat Basic guide) so styles can't leak.
- **Images** go under `public/images/guides/<slug>/` and are referenced with absolute `/images/guides/<slug>/…` paths. Every image needs descriptive alt text.
- **Keep behavior self-contained** (lightbox, sub-nav, scroll progress) inside the component; don't add global scripts.
- **Ownership is a collaboration:** Quinn owns the guide content and structure; Mercer owns the component code and layout wiring (`src/components/guides/**`). See `.squad/routing.md`.

Use a wide guide only when a standard guide can't do the job — it's more code to maintain.

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
readTime: "X min read"
excerpt: "One sentence summary"
draft: false
tags: ["tag1", "tag2"]
width: "standard"   # or "wide" for a bespoke interactive guide (see above)
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
