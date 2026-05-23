---
last_updated: 2026-05-22T05:17:00.000Z
---

# Team Wisdom

Reusable patterns and heuristics learned through work. NOT transcripts — each entry is a distilled, actionable insight.

## Patterns

**Pattern:** Astro v6 uses `src/content.config.ts` (not `src/content/config.ts`) with `glob()` loader.
**Context:** Content collection configuration changed in Astro v6. Always check the version before creating config files.

**Pattern:** Tailwind v3 compatibility is required — `@astrojs/tailwind` does not support Tailwind v4 yet.
**Context:** When installing dependencies, pin Tailwind to v3.x to avoid breaking the Astro integration.

**Pattern:** Content review is mandatory — Sawyer/Quinn write, Harper reviews, never self-review.
**Context:** Brand voice consistency requires a separate reviewer. The editorial workflow is: write → review → merge.

**Pattern:** CSS custom properties for all brand colors — never hardcode hex values in components.
**Context:** Theming flexibility and future dark mode support depend on centralized color definitions.

**Pattern:** Prompt Library exists but is hidden from nav in v1 — accessible by direct URL only.
**Context:** The section needs content validation before public promotion. Infrastructure is built, promotion is deferred.

**Pattern:** Dark mode is the default theme — use `data-theme="dark"` on `<html>`, toggle via localStorage.
**Context:** Site defaults to dark. Theme toggle persists choice. Respects prefers-color-scheme as fallback.

**Pattern:** Use three background layers: --bg-base (page), --bg-surface (cards), --bg-raised (elevated elements).
**Context:** Multi-layer backgrounds create depth. In dark mode, shadows are disabled; layers do the visual lifting.

**Pattern:** Typography: Cormorant Garamond for headings (with italic accent-word spans), Inter for body, Commit Mono for code/stamps.
**Context:** Changed from Source Serif 4 + JetBrains Mono. Cormorant provides editorial character; italic variant enables hero styling.

**Pattern:** Cards use --shadow-card in light mode, border-glow on hover in dark mode (no shadows).
**Context:** Shadow tokens evaluate to `none` in dark mode. Dark mode cards rely on border-color change + bg-raised for depth.
