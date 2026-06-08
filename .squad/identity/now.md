---
updated_at: 2026-06-07T00:00:00.000Z
focus_area: "Post-v1 content build-out and agent/skill/docs alignment"
active_issues: []
---

# What We're Focused On

The v1 scaffold is shipped and live at https://intelligenceamplified.work (Astro static site on GitHub Pages, dark-mode-first "Practitioner's Intelligence Briefing" design). Current phase: aligning the Squad agents, SKILL files, and docs with what's actually been built, and growing real content.

## Active Work Streams

- **Agent/skill/docs alignment:** Reconciling charters, routing, team skills, and SKILL files with the as-built code (`skills/SKILL-brand.md` is the canonical brand SSOT).
- **Component library:** 13 Astro components (UI, search, layouts helpers) including `CategoryTile` and bespoke guide components under `src/components/guides/`.
- **Content architecture:** 4 content collections (field-notes, use-cases, guides, prompt-library) + the News typed data module (`src/data/news.ts`).
- **Guides:** standard (`PostLayout`) and wide/interactive (`GuideWideLayout`) formats, selected by the `width` frontmatter enum.
- **UI polish:** section-hero/about-hero radial glow, simplified footer, card refinements.
- **Content:** growing the first real guides, field notes, use cases, and curated news.

## What's Next

1. Keep agents/skills/docs in sync as the site evolves (Harper)
2. Expand the component set and design tokens as new content needs arise (Mercer)
3. Produce more guides and field notes from the SKILL files (Quinn, Sawyer)
4. Maintain the News roll-up and `NEWS_META` accuracy (Sawyer)
5. Review all content for brand compliance before merge (Harper)
