# Squad Decisions

## Active Decisions

### 2026-05-22: Tech stack — Astro + Tailwind + TypeScript + Pagefind
**By:** Harper
**What:** The site is built with Astro (v6, static output), Tailwind CSS (v3), TypeScript (strict mode), and Pagefind for client-side search.
**Why:** Astro excels at content-heavy static sites with zero JS by default. Tailwind provides utility-first CSS. Pagefind provides search without a backend.

### 2026-05-22: Content format — Markdown/MDX with Zod-validated frontmatter
**By:** Finch
**What:** All content uses Astro content collections with Zod schemas. Field notes, use cases, and news use `.md`. Guides and prompt library use `.mdx` for component embedding.
**Why:** Zod validation catches frontmatter errors at build time. MDX allows interactive components in guides without affecting simpler content types.

### 2026-05-22: Brand voice — practitioner tone, no hype, banned word list
**By:** Harper
**What:** All content follows SKILL-brand.md rules. Banned words are enforced. Tone is practitioner-to-practitioner. No marketing language.
**Why:** The site's credibility depends on not sounding like a product page. The target audience (enterprise practitioners) responds to direct, grounded content.

### 2026-05-22: Deployment — GitHub Pages via GitHub Actions
**By:** Reeve
**What:** Auto-deploy on push to `main` branch. Workflow: checkout → build → pagefind index → deploy to GitHub Pages. Custom domain: intelligenceamplified.work.
**Why:** Free hosting, simple CI/CD, version-controlled deployment. No server management needed for a static site.

### 2026-05-22: CSS strategy — CSS custom properties for theming
**By:** Mercer
**What:** All brand colors are defined as CSS custom properties in `src/styles/global.css`. Components reference variables, never hardcoded hex values. Accent color is a placeholder to be finalized by the user.
**Why:** One variable change updates the entire site. Makes future theme changes (including dark mode in v2) straightforward.

### 2026-05-22: Typography — Source Serif 4 + Inter + JetBrains Mono
**By:** Mercer
**What:** Headings use Source Serif 4 (Google Fonts), body uses Inter, code uses JetBrains Mono. Base font size: 17px, line-height: 1.6.
**Why:** Editorial feel with excellent readability. Source Serif provides gravitas for headings, Inter is highly legible for body text, JetBrains Mono is purpose-built for code.

### 2026-05-22: Content structure — 5 types with required sections
**By:** Finch
**What:** Field Notes (300-600w), Use Cases (600-1200w), Guides (variable), News (200-400w), Prompt Library (variable). Each has required body sections defined in SKILL files.
**Why:** Consistent structure makes content scannable and maintainable. Required sections ensure every post delivers expected value.

### 2026-05-22: Prompt Library — hidden in nav for v1
**By:** Harper
**What:** Prompt Library pages exist and render at `/prompt-library/` but the section is NOT included in main navigation for v1. Accessible by direct URL only.
**Why:** Content type needs validation before public promotion. Build the infrastructure now, promote it when there's enough quality content.

### 2026-05-22: Content review gate — Harper reviews all content
**By:** Harper
**What:** All content written by Sawyer or Quinn must be reviewed by Harper using SKILL-editor.md checklist before merge. Authors cannot self-review.
**Why:** Maintains brand voice consistency and quality standards. Prevents banned words and structural violations from shipping.

### 2026-05-22: Astro v6 content config location
**By:** Finch
**What:** Content collection config lives at `src/content.config.ts` (not `src/content/config.ts`). Uses `glob()` loader pattern.
**Why:** Astro v6 changed the config location and API. The glob loader is the current recommended pattern.

### 2026-05-22: Visual redesign — "The Practitioner's Intelligence Briefing" v2
**By:** Mercer, Harper
**What:** Complete visual overhaul based on the Design Concept v2 reference. Dark-mode-first with light/dark toggle. New color palette, typography, layout patterns, and component styles.
**Why:** The original light-only design with green accent felt too generic. The new design establishes a distinctive editorial identity — serious, modern, and practitioner-focused.

### 2026-05-22: Typography change — Cormorant Garamond + Commit Mono
**By:** Mercer
**What:** Heading font changed from Source Serif 4 to Cormorant Garamond (italic variant for emphasis). Monospace font changed from JetBrains Mono to Commit Mono. Inter remains for body.
**Why:** Cormorant Garamond brings editorial gravitas with better large-size rendering. Its italic variant enables distinctive "accent word" styling in heroes. Commit Mono is lighter weight and pairs better with Inter.

### 2026-05-22: Color system — Blue accent with multi-layer backgrounds
**By:** Mercer
**What:** Accent changed from #2F5D4F (green) to #2563EB (blue, light) / #60A5FA (blue, dark). Background system now uses three layers: base, surface, raised. Borders use opacity-based values for theme compatibility.
**Why:** Blue accent provides stronger visual hierarchy and better contrast in both themes. Multi-layer backgrounds create depth without relying on shadows (which are removed in dark mode).

### 2026-05-22: Dark mode first with theme toggle
**By:** Mercer
**What:** Site defaults to dark theme with user-controlled toggle. Theme persists via localStorage. Falls back to prefers-color-scheme. Uses data-theme attribute on html element.
**Why:** Dark mode is the primary consumption environment for practitioners reading at their desks. Light mode available for preference. Previously a v2 goal, moved to v1.

### 2026-05-22: Max width increased to 1280px
**By:** Mercer
**What:** Site max-width increased from 1200px to 1280px. Content max-width remains 720px for articles.
**Why:** Extra width accommodates the new card grid layout and gives the design more breathing room on large screens.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
- Harper has final say on brand and scope decisions
- Reeve has final say on build and deployment decisions
- Finch has final say on content schema decisions
