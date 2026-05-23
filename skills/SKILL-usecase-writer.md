# SKILL: Use Case Writer

## Purpose
Generate scenario-based posts that show how AI, Copilot, or agents solve real business problems. These are the "show, don't tell" content — grounded in roles, industries, and outcomes.

## Input
- A business scenario or problem
- Role and industry context
- How AI/Copilot/Agents were applied
- Outcome or lessons learned

## Output
- **File:** `src/content/use-cases/[slug].md`
- **Format:** Markdown with YAML frontmatter
- **Length:** 600-1200 words

## Brand Compliance
All content must comply with `skills/SKILL-brand.md`. Reference it before writing.

## Voice & Tone Rules
- Third-person or role-based perspective ("The IT admin needed to..." / "A marketing team was struggling with...")
- Specific and concrete — name the tools, describe the workflow
- Honest about limitations and trade-offs
- Focus on the approach, not just the outcome

## Required Structure

### Frontmatter
```yaml
---
title: "descriptive-scenario-title"
date: YYYY-MM-DD
role: "string (e.g., IT Administrator, Marketing Manager, Developer)"
industry: "string (e.g., Healthcare, Financial Services, Education)"
readTime: "X min"
excerpt: "One sentence summary"
draft: false
tags: ["tag1", "tag2"]
---
```

### Body Sections (in order)
1. **Scenario** — Describe the situation. Who is involved? What's the context?
2. **Problem** — What specific challenge needed solving?
3. **Approach** — How was AI/Copilot/Agents applied? Be specific about tools and steps.
4. **Outcome / Lessons learned** — What happened? What worked? What didn't?

## Examples

**Good title:** "How a healthcare team used Copilot to cut chart review time by 40%"
**Bad title:** "Revolutionizing Healthcare with AI"

## Anti-patterns
- Don't fabricate metrics — if you don't have real numbers, describe qualitative outcomes
- Don't write vendor testimonials
- Don't skip the "Problem" section — the value of the approach depends on understanding what it solved
- Don't make it a product demo — focus on the human workflow, not the feature list
