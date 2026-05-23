# IA Field Notes — Project Build Plan

> **Purpose of this document:** This is the master build specification for the `ia-field-notes` site. It is intended to be read by an AI coding agent (GitHub Copilot agent mode or equivalent) and used to scaffold the entire project. Follow this plan top-to-bottom. Do not skip sections.

---

## 1. Project Overview

### 1.1 Brand
- **Name:** IA Field Notes
- **Tagline:** Intelligence, amplified
- **Subline:** Unlocking practical value from AI at work
- **Concept:** IA = Intelligence Augmentation. Field-credible, practitioner-written resource for applying Microsoft 365 Copilot, AI, and agents to real work.

### 1.2 Vision
A polished, editorial, easy-to-navigate resource site that feels written by a practitioner in the field — not produced by a marketing team. It is a living log of applied intelligence: observations, use cases, walkthroughs, and curated updates.

### 1.3 Audience
- Enterprise customers exploring Copilot, AI, and agent adoption
- Practitioners and builders shipping AI workflows
- Decision-makers needing grounded, non-hype guidance

### 1.4 Success Criteria (v1)
- Site is live at `https://intelligenceamplified.work`
- Homepage clearly communicates brand identity above the fold
- Navigation supports the 5 core content sections
- Site structure supports agent-generated content via SKILL files
- All pages render correctly on desktop and mobile
- Search functionality works across all content
- Site loads in under 2 seconds on broadband

### 1.5 Non-Goals (Out of Scope for v1)
- E-commerce / monetization
- User authentication
- Comments / community features
- Analytics tracking
- Dark mode (defer to v2)
- RSS feed (defer to v2)
- Newsletter integration

---

## 2. Repository & Deployment

### 2.1 Repository
- **Owner:** `KCHouse13`
- **Repo name:** `ia-field-notes`
- **Visibility:** Public (recommended for GitHub Pages free tier)
- **Default branch:** `main`

### 2.2 Domain
- **Custom domain:** `intelligenceamplified.work`
- Requires `CNAME` file in `/public/` containing: `intelligenceamplified.work`
- DNS will need an `A` record or `CNAME` pointing to GitHub Pages (instructions in README)

### 2.3 Deployment Target
- **GitHub Pages** via GitHub Actions
- Auto-deploy on push to `main` branch

---

## 3. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Astro | latest stable |
| Styling | Tailwind CSS | latest stable |
| Language | TypeScript | latest stable |
| Content | `.astro`, `.md`, `.mdx` | — |
| Search | Pagefind | latest stable |
| Deployment | GitHub Pages + Actions | — |
| Node version | 20.x LTS | — |

### 3.1 Installation Commands (for reference)
```bash
npm create astro@latest ia-field-notes -- --template minimal --typescript strict
cd ia-field-notes
npx astro add tailwind
npx astro add mdx
npx astro add sitemap
npm install pagefind
````

***

## 4. Folder Structure

Generate this exact structure:

```
ia-field-notes/
├── PROJECT-PLAN.md                       ← this file (reference for agent)
├── README.md                             ← human-facing readme
├── .gitignore
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
│
├── .github/
│   └── workflows/
│       └── deploy.yml                    ← GitHub Pages deploy action
│
├── skills/                               ← multi-SKILL agent instruction files
│   ├── SKILL-brand.md                    ← brand voice, identity, rules
│   ├── SKILL-fieldnote-writer.md         ← short-form observation posts
│   ├── SKILL-usecase-writer.md           ← scenario-based posts
│   ├── SKILL-guide-builder.md            ← interactive walkthroughs
│   ├── SKILL-news-curator.md             ← curated news summaries
│   ├── SKILL-prompt-library.md           ← prompt library entries
│   └── SKILL-editor.md                   ← reviews drafts before commit
│
├── public/
│   ├── CNAME                             ← contains: intelligenceamplified.work
│   ├── favicon.svg
│   └── images/
│       └── .gitkeep
│
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro              ← site shell, header, footer
│   │   └── PostLayout.astro              ← article layout for all content
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FieldNoteCard.astro
│   │   ├── CalloutBox.astro
│   │   ├── WalkthroughStep.astro
│   │   ├── PromptExample.astro
│   │   ├── CodeBlock.astro
│   │   ├── SectionDivider.astro
│   │   └── SearchBar.astro
│   │
│   ├── pages/
│   │   ├── index.astro                   ← homepage
│   │   ├── about.astro                   ← about page
│   │   │
│   │   ├── field-notes/
│   │   │   ├── index.astro               ← list view of all field notes
│   │   │   └── [...slug].astro           ← dynamic individual notes
│   │   │
│   │   ├── use-cases/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   │
│   │   ├── guides/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   │
│   │   ├── news/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   │
│   │   └── prompt-library/               ← present but NOT linked in nav for v1
│   │       ├── index.astro
│   │       └── [...slug].astro
│   │
│   ├── content/                          ← Astro content collections
│   │   ├── config.ts                     ← schema definitions
│   │   ├── field-notes/
│   │   │   └── .gitkeep
│   │   ├── use-cases/
│   │   │   └── .gitkeep
│   │   ├── guides/
│   │   │   └── .gitkeep
│   │   ├── news/
│   │   │   └── .gitkeep
│   │   └── prompt-library/
│   │       └── .gitkeep
│   │
│   └── styles/
│       └── global.css                    ← Tailwind directives + custom CSS vars
│
└── docs/
    ├── CONTRIBUTING.md                   ← how to add content
    └── COMPONENTS.md                     ← component usage guide
```

***

## 5. Visual Identity Specification

### 5.1 Color Palette

Dark-mode-first design with light/dark toggle. Defined as CSS custom properties in `src/styles/global.css`. Uses three background layers for depth.

```css
:root {
  /* Light theme (applied when data-theme="light") */
  --bg-base: #FAFAF7;
  --bg-surface: #FFFFFF;
  --bg-raised: #F5F5F2;
  --color-text: #1A1A1A;
  --color-text-muted: #6B6B6B;
  --color-border: rgba(0, 0, 0, 0.08);
  --color-accent: #2563EB;
  --color-accent-hover: #1D4ED8;
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.08);
  --color-callout-tip: #F0F4F1;
  --color-callout-warning: #FBF4E8;
  --color-callout-note: #EEF2F5;
}

[data-theme="dark"] {
  --bg-base: #0F1117;
  --bg-surface: #1A1D27;
  --bg-raised: #242834;
  --color-text: #E8E8ED;
  --color-text-muted: #9CA3AF;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-accent: #60A5FA;
  --color-accent-hover: #93C5FD;
  --shadow-card: none;
  --color-callout-tip: #1A2E1A;
  --color-callout-warning: #2E2A1A;
  --color-callout-note: #1A2433;
}
```

> **Note:** Dark mode is the default. Theme toggle persists via localStorage, falls back to `prefers-color-scheme`. All color references use variables — never hardcode hex values in components.

### 5.2 Typography

* **Headings:** Cormorant Garamond (Google Fonts), weights 400, 600, 700 — italic variant for accent-word spans in heroes
* **Body:** Inter (Google Fonts), weights 400, 500, 600
* **Code/mono:** Commit Mono (Google Fonts), weight 400

### 5.3 Spacing & Layout

* **Max content width:** 720px for article body
* **Max site width:** 1280px
* **Vertical rhythm:** Generous whitespace, editorial feel
* **Base font size:** 17px body, 1.6 line-height

### 5.4 Style Direction

Editorial / journal-like. Reference points: Stratechery, Vercel docs, Notion docs. Minimal, content-first, calm.

### 5.5 Imagery Rules

* No stock photos
* Prefer diagrams, screenshots, simple illustrations
* All images stored in `/public/images/` organized by content type subfolder

***

## 6. Component Library Specification

Each component must be self-contained with TypeScript props and documented usage.

### 6.1 `<BaseLayout>`

* Wraps all pages
* Includes Header, Footer, global styles, meta tags
* Props: `title`, `description`, `ogImage` (optional)

### 6.2 `<PostLayout>`

* Extends BaseLayout for article-style pages
* Renders title, date, topic, read time, then content
* Props: `title`, `date`, `topic`, `readTime`, `description`

### 6.3 `<Header>`

* Site logo (wordmark: "IA Field Notes")
* Navigation: Home, Field Notes, Use Cases, Guides, News
* Search icon (opens search overlay)
* About link in top-right or footer

### 6.4 `<Footer>`

* Tagline: "Intelligence, amplified"
* Links: About, GitHub repo, Contact (mailto or form)
* "Last updated" timestamp
* Disclaimer text (see About section)

### 6.5 `<Hero>`

* Used on homepage and section index pages
* Props: `title`, `tagline`, `subline`, `ctaText` (optional), `ctaHref` (optional)

### 6.6 `<FieldNoteCard>`

* Used in list views
* Props: `title`, `date`, `topic`, `excerpt`, `href`, `readTime`

### 6.7 `<CalloutBox>`

* Props: `type` ("tip" | "warning" | "note"), default slot for content
* Different background colors per type using CSS variables

### 6.8 `<WalkthroughStep>`

* Props: `number`, `title`, default slot for body
* Visual: numbered circle + title + body content

### 6.9 `<PromptExample>`

* Props: `title` (optional), `prompt` (string), `notes` (optional)
* Includes copy-to-clipboard button
* Monospace styling

### 6.10 `<CodeBlock>`

* Syntax-highlighted code
* Props: `lang`, `filename` (optional)
* Includes copy button

### 6.11 `<SectionDivider>`

* Decorative horizontal rule with optional label
* Props: `label` (optional)

### 6.12 `<SearchBar>`

* Powered by Pagefind
* Opens as overlay/modal
* Keyboard shortcut: `Cmd/Ctrl + K`

***

## 7. Content Types & Schema

Defined in `src/content/config.ts` using Astro content collections.

### 7.1 Field Note

**Purpose:** Short-form observations and lessons from the field.

```typescript
{
  title: string,
  date: Date,
  topic: string,
  readTime: string,
  excerpt: string,
  draft: boolean (default: false),
  tags: string[]
}
```

**Required body sections:**

1. Context (2-3 lines)
2. Observation
3. Implication
4. Related links

### 7.2 Use Case

**Purpose:** Real-world business scenarios.

```typescript
{
  title: string,
  date: Date,
  role: string,
  industry: string,
  readTime: string,
  excerpt: string,
  draft: boolean,
  tags: string[]
}
```

**Required body sections:**

1. Scenario
2. Problem
3. Approach (how AI/Copilot/Agents applied)
4. Outcome / Lessons learned

### 7.3 Guide

**Purpose:** Interactive step-by-step walkthroughs.

```typescript
{
  title: string,
  date: Date,
  topic: string,
  difficulty: "beginner" | "intermediate" | "advanced",
  readTime: string,
  excerpt: string,
  draft: boolean,
  tags: string[]
}
```

**Required components:** `<WalkthroughStep>`, `<CalloutBox>`, `<PromptExample>`, `<CodeBlock>` as needed.

### 7.4 News / Update

**Purpose:** Curated, plain-language summaries of what changed and why it matters.

```typescript
{
  title: string,
  date: Date,
  source: string,
  sourceUrl: string,
  readTime: string,
  excerpt: string,
  draft: boolean,
  tags: string[]
}
```

**Required body sections:**

1. What changed
2. Why it matters
3. What to do with it

### 7.5 Prompt Library Entry (Hidden in v1)

**Purpose:** Reusable prompts with context.

```typescript
{
  title: string,
  date: Date,
  category: string,
  model: string,
  excerpt: string,
  draft: boolean,
  tags: string[]
}
```

**Required body sections:**

1. Use case
2. Prompt (in `<PromptExample>`)
3. Expected output
4. Variations / tips

> **Important:** Prompt Library pages exist and render if accessed directly, but the section is **NOT** included in main navigation for v1. Add a TODO comment in `Header.astro` noting this.

***

## 8. Site Navigation

### 8.1 Main Navigation (in `<Header>`)

```
IA Field Notes  |  Field Notes  |  Use Cases  |  Guides  |  News  |  [Search Icon]
```

### 8.2 Footer Navigation

* About
* GitHub Repository
* Contact

### 8.3 Hidden but Accessible

* `/prompt-library/` — reachable by direct URL only in v1

***

## 9. Page-by-Page Build Order

Build in this sequence:

1. **Project scaffolding** — repo init, Astro install, dependencies
2. **Configuration files** — `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
3. **Global styles** — `src/styles/global.css` with CSS variables
4. **Content schemas** — `src/content/config.ts`
5. **Base components** — `BaseLayout`, `Header`, `Footer`
6. **Page layouts** — `PostLayout`
7. **UI components** — Hero, CalloutBox, WalkthroughStep, PromptExample, CodeBlock, FieldNoteCard, SectionDivider
8. **Search integration** — Pagefind setup + `SearchBar` component
9. **Homepage** — `src/pages/index.astro`
10. **About page** — `src/pages/about.astro`
11. **Section index pages** — `field-notes/index.astro`, `use-cases/index.astro`, `guides/index.astro`, `news/index.astro`
12. **Dynamic post pages** — `[...slug].astro` for each content type
13. **Prompt library pages** — built but unlinked
14. **GitHub Actions workflow** — `.github/workflows/deploy.yml`
15. **CNAME file** — `public/CNAME`
16. **README and docs** — `README.md`, `docs/CONTRIBUTING.md`, `docs/COMPONENTS.md`
17. **SKILL files** — all 7 SKILL files in `/skills/`

***

## 10. Homepage Specification (`src/pages/index.astro`)

### Above the fold

```
IA Field Notes
Intelligence, amplified
Unlocking practical value from AI at work

[ Browse Field Notes ]   [ Explore Use Cases ]
```

### Section 2 — What this is (3 short lines, no fluff)

> A practical resource for teams putting Microsoft 365 Copilot, AI, and agents to work.
> Written from the field, not from the slide deck.
> Updated regularly as the landscape evolves.

### Section 3 — Latest Field Notes

Grid of 3 most recent Field Notes (auto-populated from content collection)

### Section 4 — Browse by Category

Three tiles linking to Use Cases / Guides / News with short descriptions

### Section 5 — Footer

Standard footer component

***

## 11. About Page Specification (`src/pages/about.astro`)

**Tone:** Field-anonymous (no name, no employer mentioned). Practitioner voice.

**Draft content:**

```
About IA Field Notes

IA Field Notes is a practitioner-led resource for applying Microsoft 365 Copilot,
AI, and agents to real-world work.

Why "IA"?
The shift from AI (Artificial Intelligence) to IA (Intelligence Augmentation)
reflects the real story of this technology: it's most valuable when it extends
human capability, not when it replaces it. A bicycle for the mind, made for the
modern workplace.

What you'll find here
- Field Notes: short observations from real deployments
- Use Cases: scenario-based examples of AI in practice
- Guides: step-by-step walkthroughs
- News & Updates: curated, plain-language summaries of what changed and why it matters

What this isn't
This is not an official Microsoft resource. The views, observations, and guidance
here represent personal perspective from work in the field. Nothing here is
sponsored, endorsed, or reviewed by any vendor.

Why it exists
Most AI content lives in two extremes: hype-driven marketing or deep technical
documentation. IA Field Notes lives in the middle — practical, grounded, and
written for people doing the actual work.
```

***

## 12. GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - run: npx pagefind --site dist
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

***

## 13. SKILL Files Specification

Generate all 7 SKILL files in `/skills/`. Each file must follow this structure:

```markdown
# SKILL: [Name]

## Purpose
[One paragraph describing what this skill does]

## Input
[What the agent needs from the user to execute]

## Output
[Exact file location, format, and structure produced]

## Brand Compliance
[Reference to SKILL-brand.md rules]

## Voice & Tone Rules
[Specific to this content type]

## Required Structure
[Exact sections, components, frontmatter]

## Examples
[1-2 short examples of correct output]

## Anti-patterns
[What NOT to do]
```

### 13.1 `SKILL-brand.md` (Master Brand Rules)

* Name, tagline, subline
* Voice: field-credible, practical, direct, no hype
* Avoid words: revolutionary, unleash, game-changing, transformative (when used as filler), cutting-edge, synergy, leverage (as verb), unlock (overused — use sparingly)
* Tone: practitioner speaking to practitioner
* Disclaimer requirement: any content referencing specific vendors must include a note that views are not official
* Citation requirement: any claim from external sources must be linked

### 13.2 `SKILL-fieldnote-writer.md`

* Output: `src/content/field-notes/[slug].md`
* Length: 300-600 words
* Required sections: Context, Observation, Implication, Related
* Frontmatter schema (reference content config)

### 13.3 `SKILL-usecase-writer.md`

* Output: `src/content/use-cases/[slug].md`
* Length: 600-1200 words
* Required sections: Scenario, Problem, Approach, Outcome
* Must include role and industry in frontmatter

### 13.4 `SKILL-guide-builder.md`

* Output: `src/content/guides/[slug].mdx` (MDX for component use)
* Length: variable
* Must use `<WalkthroughStep>` for steps
* Must include difficulty level
* Encourage `<CalloutBox>` for tips/warnings

### 13.5 `SKILL-news-curator.md`

* Output: `src/content/news/[slug].md`
* Length: 200-400 words
* Required sections: What changed, Why it matters, What to do with it
* Must include source URL in frontmatter
* Must summarize in plain language — no jargon dump

### 13.6 `SKILL-prompt-library.md`

* Output: `src/content/prompt-library/[slug].mdx`
* Must use `<PromptExample>` component
* Required sections: Use case, Prompt, Expected output, Variations
* Must specify model in frontmatter

### 13.7 `SKILL-editor.md`

* Reviews drafts before commit
* Checks: brand voice compliance, banned word list, structure adherence, citation presence
* Returns: pass/fail with specific corrections needed

***

## 14. README.md Content

Create a `README.md` at repo root with:

* Project name and tagline
* Brief description (2-3 lines)
* Tech stack list
* Local dev setup instructions (`npm install`, `npm run dev`)
* Build command (`npm run build`)
* Content contribution flow (link to `docs/CONTRIBUTING.md`)
* Deployment info (auto-deploys on push to main)
* License (recommend: MIT or "All rights reserved" — agent: leave as TODO for user)

***

## 15. Acceptance Criteria

The project is complete when:

* [ ] Repo is initialized with the exact folder structure in Section 4
* [ ] All configuration files are present and valid
* [ ] Site builds locally with `npm run build` without errors
* [ ] Site runs locally with `npm run dev` and renders homepage
* [ ] All 12 components in Section 6 exist and are properly typed
* [ ] All 5 content schemas in Section 7 are defined in `content/config.ts`
* [ ] Homepage matches Section 10 specification
* [ ] About page matches Section 11 specification
* [ ] All section index pages exist (Field Notes, Use Cases, Guides, News)
* [ ] Prompt Library pages exist but are not in main nav
* [ ] Search bar is functional via Pagefind
* [ ] GitHub Actions workflow file is present and valid YAML
* [ ] CNAME file contains `intelligenceamplified.work`
* [ ] All 7 SKILL files exist in `/skills/` with proper structure
* [ ] README.md exists and includes setup instructions
* [ ] No console errors or warnings in browser dev tools
* [ ] Lighthouse scores: 90+ Performance, 95+ Accessibility, 100 Best Practices, 95+ SEO

***

## 16. Post-Build Tasks (For User, Not Agent)

After the agent completes the build, the user (Matt) will:

1. Review the scaffold and confirm structure
2. Finalize accent color in `src/styles/global.css`
3. Configure DNS for `intelligenceamplified.work` to point to GitHub Pages
4. Enable GitHub Pages in repo settings (source: GitHub Actions)
5. Push to `main` and verify deployment
6. Begin generating first batch of content using SKILL files
7. Test search functionality with real content

***

## 17. Future Enhancements (v2 Backlog)

Capture these for later — do not build in v1:

* RSS feed for Field Notes
* Dark mode toggle
* Newsletter signup
* Tag-based filtering
* Author/contributor system (if more practitioners join)
* Related content recommendations
* Reading progress indicator
* "Save for later" via localStorage
* Analytics (privacy-respecting, e.g., Plausible)
* Make Prompt Library visible in nav
* Social share buttons
* Print-friendly stylesheet for Guides

***

## 18. Agent Execution Notes

When executing this plan:

1. **Work top-to-bottom.** Do not skip ahead.
2. **Confirm before destructive actions.** If something exists and would be overwritten, ask first.
3. **Commit frequently** with clear messages. Suggested pattern: `feat: <section number> - <description>`
4. **Test as you go.** Run `npm run dev` after each major section.
5. **Reference SKILL-brand.md** for any user-facing text (page copy, button labels, etc.) — never use banned words.
6. **Flag ambiguities.** If anything in this plan is unclear, ask before guessing.
7. **No placeholder content in production pages.** Use lorem ipsum only inside `.gitkeep` files or commented-out blocks.
8. **Mobile-first.** All components must render correctly on mobile before desktop polish.

***

## 19. Sign-off

This plan represents the complete v1 build specification. Any deviations should be documented as comments in code or as issues in the GitHub repo.

**Plan version:** 1.0
**Created for:** KCHouse13 / ia-field-notes
**Target launch:** intelligenceamplified.work

```

---

# 📋 Next Steps for You

1. **Create the repo** on GitHub: `KCHouse13/ia-field-notes`
2. **Add this file** as `PROJECT-PLAN.md` at the root
3. **Open the repo in VS Code**
4. **Open GitHub Copilot agent mode** and prompt:

```

Read PROJECT-PLAN.md in the root of this repo and execute the full
build plan top-to-bottom. Follow Section 9 (page-by-page build order)
and pause at each major checkpoint so I can review before continuing.

```

5. **Review at each checkpoint** — don't let it run all the way through unattended the first time

---

# 🎯 What This Plan Gives You

- **Single source of truth** the agent references throughout the build
- **Multi-SKILL structure** ready for your content workflow
- **Prompt Library** built but hidden — flip it on later with one nav change
- **Search built-in** with Pagefind (no service to set up)
- **Accent color as CSS variable** so you swap it in one place when you decide
- **Disclaimer language** baked into About page (important given your role)
- **Acceptance criteria** so you know when v1 is actually "done"

Want me to also generate the **DNS configuration instructions** for `intelligenceamplified.work` → GitHub Pages as a follow-up reference doc?
```
