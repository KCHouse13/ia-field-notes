---
name: news-curator
title: News Curator
description: Maintain the News roll-up by editing the typed data module src/data/news.ts — add and verify official Microsoft Copilot announcements, monthly roll-ups, and featured launches. Use when updating the News section.
applies_to: src/data/news.ts
brand_source_of_truth: skills/SKILL-brand.md
---

# SKILL: News Curator

## Purpose
Maintain the **News roll-up** at `/news/` — a curated, scannable index of official
Microsoft 365 Copilot launches and feature updates. Every entry **links out to an
official Microsoft source**. This is a discovery layer, not a blog: there are no
internal article bodies. The job is to keep the index current, accurate, and easy
to scan as Microsoft publishes new announcements.

> This skill replaced the old model where News produced internal markdown articles
> in `src/content/news/`. That collection no longer exists. News is now powered by a
> single typed data file.

## How the News section is built
- **Single source of truth:** [`src/data/news.ts`](../src/data/news.ts) — a typed
  TypeScript module exporting all the data the page renders.
- **Page:** [`src/pages/news/index.astro`](../src/pages/news/index.astro) renders the
  hero, "Latest" (6 newest), "Featured" (flagship launches), the monthly cadence
  chips, and the filterable "Explore" list/cards entirely from `src/data/news.ts`.
  You normally **do not edit the page** — only the data file.
- **Stats auto-update:** the hero counters (announcement count, solution count) and
  the per-solution filter counts are derived from the data. Add an item and they
  update on the next build.

To update the News section, **edit `src/data/news.ts`** and nothing else.

## Data schemas (in `src/data/news.ts`)

### `NewsItem` — the main announcement list (`NEWS`)
```ts
{
  cat: CategoryKey,   // one of the 8 category keys below
  iso: string,        // 'YYYY-MM-DD' publish date — drives sort + displayed month
  source: SourceKey,  // one of: 'm365blog' | 'm365copilot' | 'agent365' | 'excelblog' | 'spblog' | 'hub'
  url: string,        // official Microsoft URL
  title: string,      // plain-language headline
  desc: string,       // ONE tight sentence: what changed + why it matters
  tags: string[],     // 2–3 short scan tags
}
```

### `FeaturedItem` — flagship launches (`FEATURED`, keep to 3)
```ts
{ title: string, iso: string, source: SourceKey, url: string, desc: string }
```

### `MonthlyItem` — official monthly roll-ups (`MONTHLY`)
```ts
{ iso: string, url: string }   // iso is the first of the month: 'YYYY-MM-01'
```
The month label ("Jun", "Jul", …) and year are derived from `iso` — don't store them.

### `NEWS_META`
```ts
{ monthsCovered: number, officialPct: number }
```
Shown in the hero.
- **`monthsCovered`** = the number of distinct calendar months (`YYYY-MM`) the roll-up spans — in practice the count of `MONTHLY` entries. Bump it by one only when you add a `MONTHLY` entry for a new month. (Current value: 13.)
- **`officialPct`** = the share of entries linking to an official Microsoft source, as a whole number. By policy every entry must link to an official source, so this stays **100**. Only recompute it if that policy ever changes.

## Category taxonomy (8 solutions)
Use exactly these keys for `cat`:

| key | label |
|-----|-------|
| `app` | Copilot App & Chat |
| `word` | Word |
| `excel` | Excel |
| `powerpoint` | PowerPoint |
| `outlook` | Outlook |
| `teams` | Teams |
| `knowledge` | SharePoint, OneDrive & Notebooks |
| `agents` | Agents, Models & Platform |

If an announcement spans multiple apps, pick the **primary** solution it's about, or
file it under `agents` when it's a platform/model/agent-wide change.

## Source taxonomy
Use exactly these keys for `source`:

| key | name | when |
|-----|------|------|
| `m365blog` | Microsoft 365 Blog | microsoft.com/microsoft-365/blog posts |
| `m365copilot` | Microsoft 365 Copilot Blog | Tech Community Copilot board posts and monthly roll-ups |
| `agent365` | Agent 365 Blog | Agent 365 registry, governance, identity, SDK, and admin control-plane updates |
| `excelblog` | Excel Blog | Excel product-team Copilot, Agent Mode, App Skills, connector, and attribution posts |
| `spblog` | SharePoint Blog | SharePoint AI, SharePoint agents, Knowledge Agent, and content-governance posts |
| `hub` | Microsoft 365 Copilot product news | the product news hub (use only when no dedicated post URL exists yet) |

## Sources to monitor
Check these regularly for anything published **after the newest `iso` already in `NEWS`**:

1. **Microsoft 365 Blog — Copilot product page**
   `https://www.microsoft.com/en-us/microsoft-365/blog/product/microsoft-365-copilot/`
2. **Microsoft 365 Copilot Blog (Tech Community)**
   `https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog`
3. **Agent 365 Blog (Tech Community)**
   `https://techcommunity.microsoft.com/category/microsoft365/blog/agent-365-blog`
4. **Excel Blog (Tech Community)** — only add posts directly about Copilot in Excel,
   Agent Mode, App Skills, federated connectors, attribution, or AI-assisted workbook work.
   `https://techcommunity.microsoft.com/category/microsoft365/blog/excelblog`
5. **SharePoint Blog (Tech Community)** — only add posts directly about SharePoint AI,
   SharePoint agents, Knowledge Agent, content grounding, or agentic building.
   `https://techcommunity.microsoft.com/category/content_management/blog/spblog`
6. **Monthly "What's new in Microsoft 365 Copilot" roll-ups** (Tech Community) — the
   app-by-app system of record. Each new month gets a `MONTHLY` entry.
7. **Microsoft 365 Copilot product news hub** — for very new launches that don't yet
   have a dedicated post (use `source: 'hub'`).

When you fetch a source, prefer the official permalink for the specific announcement.
Only fall back to the `hub` source when a dedicated URL doesn't exist yet.

## Workflow: updating the section

1. **Find the cutoff.** The newest `iso` in `NEWS` is the high-water mark. Look for
   official announcements published after it.
2. **Verify each item** against an official Microsoft URL. No URL, no entry.
3. **Classify** into one of the 8 categories (primary solution, or `agents` for
   platform-wide changes).
4. **Write one sentence** for `desc` — what changed and why it matters, in neutral,
   plain language. Not a feature dump, not marketing copy.
5. **Add 2–3 tags** — short, scannable, lowercase-ish keywords.
6. **Append to `NEWS`** (order doesn't matter; the page sorts by `iso`). Example:
   ```ts
   {
     cat: 'excel', iso: '2026-06-29', source: 'excelblog',
     url: 'https://techcommunity.microsoft.com/.../4530000',
     title: 'Scenario analysis in the Excel grid',
     desc: 'Copilot drafts and compares what-if scenarios directly in the workbook so you can decide faster.',
     tags: ['scenarios', 'what-if', 'in-grid'],
   },
   ```
7. **New monthly roll-up?** Add a `MONTHLY` entry with `iso` set to the first of that
   month, e.g. `{ iso: '2026-06-01', url: '…' }`.
8. **Flagship launch?** Promote it into `FEATURED` and drop the oldest so the list
   stays at 3. Featured items are the moments that define the product direction
   (major GAs, redesigns, platform shifts).
9. **Dedupe.** If a monthly roll-up and a dedicated post cover the same feature,
   prefer the dedicated post and don't list the same feature twice. Broad launch
   posts and product-team deep dives can both stay only when they serve distinct
   reader jobs, such as launch context vs. implementation detail.
10. **Update `NEWS_META.monthsCovered`** only if the span of covered months grew.

## Brand compliance
All copy must comply with [`skills/SKILL-brand.md`](SKILL-brand.md) — read it before
writing. Neutral, informative voice. Never promotional. This is an independent,
unofficial resource, so describe Microsoft features factually and at arm's length.

## Verification
After editing `src/data/news.ts`:
- `npm run build` must succeed (the data file is type-checked).
- Open `/news/` and confirm the new item appears in **Latest** (if recent), shows the
  right category color/label, and that its **Read on Microsoft** link resolves to the
  official page.
- Confirm the hero count and the per-solution filter count went up by the right amount.

## Anti-patterns
- **No internal articles.** Don't recreate `src/content/news/` or write long bodies.
  News links out; it does not host the content.
- **One sentence for `desc`.** Don't paste paragraphs or the press release.
- **Official sources only.** Every `url` must be a real, public Microsoft page. Never
  invent or guess URLs — fetch and verify.
- **Don't duplicate.** One entry per feature, even if multiple sources mention it.
- **Don't over-feature.** `FEATURED` stays at 3; promote sparingly.
- **Don't edit the page** for routine updates — the data file drives everything.
- **No vendor marketing language.** Translate hype into practical, neutral fact.
