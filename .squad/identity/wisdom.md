---
last_updated: 2026-06-07T00:00:00.000Z
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

**Pattern:** Guides have two formats selected by the `width` enum: `standard` → `PostLayout`, `wide` → `GuideWideLayout` (full-bleed). The route `src/pages/guides/[...slug].astro` picks the layout.
**Context:** Wide/interactive guides wrap a single bespoke component in `src/components/guides/` (e.g. `CopilotChatBasicGuide.astro`) with namespaced CSS. Quinn owns content, Mercer owns the component.

**Pattern:** News is a typed data module (`src/data/news.ts`), not a content collection. The News page derives `NEWS_META` (monthsCovered, officialPct) from the entries.
**Context:** News links out to official sources instead of hosting article bodies. `monthsCovered` = distinct months among `MONTHLY` entries; `officialPct` stays 100 by policy.

**Pattern:** `FieldNoteCard` omits the readTime line when passed an empty string (`{readTime && ...}`); the guides index passes `readTime=""` deliberately.
**Context:** readTime format is canonical `"N min read"` (words ÷ 200, rounded up). The component default is `"5 min read"`.

**Pattern:** Section index pages and About use a reusable `.section-hero` / `.about-hero` radial glow built from dedicated tokens in `global.css`.
**Context:** The hero needs `overflow: clip`/`visible` so the glow can fade past its edges. Helper tokens include `--bar-bg` and `--tag-bg`.

**Pattern:** Site shell max-width is 1280px; article content stays at 720px.
**Context:** Increased from 1200px to give the card grid breathing room. Don't reintroduce 1200 in components or docs.

**Pattern:** `skills/SKILL-brand.md` is the single source of truth for brand voice, the 12 banned words, readTime format, and metadata vocabulary.
**Context:** The Squad `brand-voice` skill, Harper's charter, and docs mirror it. If they diverge, update them to match SKILL-brand.md.
