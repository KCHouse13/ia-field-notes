# Work Routing

How to decide who handles what on the IA Field Notes project.

## Routing Table

| Work Type | Route To | Examples |
|-----------|----------|----------|
| Astro components & layouts | Mercer | Build Hero component, fix Header responsive, update PostLayout |
| Styling & Tailwind | Mercer | Update global.css, fix mobile layout, adjust typography |
| Content schemas & page routing | Finch | Update content config, add new collection, fix dynamic routes |
| SEO & metadata | Finch | Add og:image support, fix meta descriptions, sitemap config |
| Field notes content | Sawyer | Write new field note, edit observation, draft dispatch |
| Use case content | Sawyer | Write use case, document scenario, describe outcome |
| News content | Sawyer | Summarize announcement, curate update, write news post |
| Guide content | Quinn | Write walkthrough, build step-by-step guide, create tutorial |
| Prompt library content | Quinn | Create prompt entry, document prompt pattern, add variations |
| CI/CD & deployment | Reeve | Fix deploy workflow, update GitHub Actions, build errors |
| Search & Pagefind | Reeve | Configure Pagefind, fix search indexing, SearchBar issues |
| Performance & Lighthouse | Reeve | Diagnose slow loads, optimize images, improve scores |
| Brand compliance review | Harper | Review content for banned words, tone check, voice alignment |
| Content review | Harper | Final review on all content PRs before merge |
| Code review | Harper | Review component PRs, architecture decisions |
| SKILL file governance | Harper | Update SKILL files, add new content type rules |
| Documentation | Harper | Update README, CONTRIBUTING, COMPONENTS docs |
| Scope & priorities | Harper | What to build next, trade-offs, release decisions |
| Session logging | Scribe | Automatic — never needs routing |

## Issue Routing

| Label | Action | Who |
|-------|--------|-----|
| `squad` | Triage: analyze issue, assign `squad:{member}` label | Harper |
| `squad:harper` | Leadership, review, brand governance | Harper |
| `squad:mercer` | Frontend components and styling | Mercer |
| `squad:finch` | Content architecture and page routing | Finch |
| `squad:sawyer` | Written content (field notes, use cases, news) | Sawyer |
| `squad:quinn` | Guides, walkthroughs, prompt library | Quinn |
| `squad:reeve` | DevOps, CI/CD, performance | Reeve |

### How Issue Assignment Works

1. When a GitHub issue gets the `squad` label, **Harper** triages it — analyzing content, assigning the right `squad:{member}` label, and commenting with triage notes.
2. When a `squad:{member}` label is applied, that member picks up the issue in their next session.
3. Members can reassign by removing their label and adding another member's label.
4. The `squad` label is the "inbox" — untriaged issues waiting for Harper's review.

## Domain Routing (file patterns)

| Pattern | Owner | Reason |
|---------|-------|--------|
| `src/layouts/**` | Mercer | Layout components |
| `src/components/**` | Mercer | UI components |
| `src/styles/**` | Mercer | CSS and Tailwind |
| `tailwind.config.*` | Mercer | Tailwind configuration |
| `src/content/config.ts` | Finch | Content schemas |
| `src/content.config.ts` | Finch | Content schemas (v6) |
| `src/pages/**` | Finch | Page routing |
| `src/content/field-notes/**` | Sawyer | Field note content |
| `src/content/use-cases/**` | Sawyer | Use case content |
| `src/data/news.ts` | Sawyer | News roll-up data |
| `src/content/guides/**` | Quinn | Guide content |
| `src/content/prompt-library/**` | Quinn | Prompt library content |
| `.github/workflows/**` | Reeve | CI/CD workflows |
| `astro.config.*` | Reeve | Build configuration |
| `skills/**` | Harper | SKILL file governance |
| `docs/**` | Harper | Documentation |
| `README.md` | Harper | Project readme |

## Rules

1. **Eager by default** — spawn all agents who could usefully start work, including anticipatory downstream work.
2. **Scribe always runs** after substantial work, always as `mode: "background"`. Never blocks.
3. **Quick facts → coordinator answers directly.** Don't spawn an agent for "what font do we use?"
4. **When two agents could handle it**, pick the one whose domain is the primary concern.
5. **"Team, ..." → fan-out.** Spawn all relevant agents in parallel as `mode: "background"`.
6. **Anticipate downstream work.** If Sawyer writes a field note, spawn Harper to review it simultaneously.
7. **Issue-labeled work** — when a `squad:{member}` label is applied to an issue, route to that member. Harper handles all `squad` (base label) triage.
8. **Content always gets reviewed.** Any content written by Sawyer or Quinn must be reviewed by Harper before merge.
