# **Intelligence, amplified** — Unlocking practical value from AI at work

A resource for applying Microsoft 365 Copilot, AI, and agents to real-world work. 

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Astro](https://astro.build) | 6.x (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) | 3.x |
| Language | TypeScript | strict |
| Content | Markdown, MDX | — |
| Search | [Pagefind](https://pagefind.app) | latest |
| Runtime | Node.js | 20.x LTS |
| Deployment | GitHub Pages + Actions | — |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Sections

- **Field Notes** — Short-form observations from real AI deployments
- **Use Cases** — Scenario-based examples of AI in practice
- **Guides** — Step-by-step walkthroughs (standard and wide/interactive formats)
- **News** — A curated roll-up of official Microsoft 365 Copilot announcements that links out to the source (powered by `src/data/news.ts`)

The **Prompt Library** (`/prompt-library/`) exists but is intentionally not in the main navigation yet — reachable by direct link or search.

## Contributing

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for how to add content.

See [docs/COMPONENTS.md](docs/COMPONENTS.md) for component usage.

## Deployment

Auto-deploys to [intelligenceamplified.work](https://intelligenceamplified.work) on push to `main` via GitHub Actions.

## License

Not yet finalized. Until a license is chosen, the project is **All Rights Reserved**
(© 2026 KCHouse13). Moving to an open license (e.g. MIT) later only grants additional
rights, so this is the safe default in the meantime.
