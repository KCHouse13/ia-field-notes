---
name: "github-pages-deploy"
description: "Astro + GitHub Pages deployment patterns with custom domain"
domain: "deployment"
confidence: "medium"
source: "manual"
---

## Context
IA Field Notes deploys to GitHub Pages via GitHub Actions with a custom domain (intelligenceamplified.work).

## Patterns

### Workflow structure
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
```

### CNAME file
Must exist at `public/CNAME` containing exactly:
```
intelligenceamplified.work
```

### Astro config for GitHub Pages
```javascript
export default defineConfig({
  site: 'https://intelligenceamplified.work',
  output: 'static',
});
```

### DNS setup (manual)
- A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- Or CNAME: `KCHouse13.github.io`
- Enable HTTPS in GitHub Pages settings

### Deployment steps
1. actions/checkout@v4
2. actions/setup-node@v4 (Node 20, cache npm)
3. npm ci
4. npm run build
5. npx pagefind --site dist
6. actions/upload-pages-artifact@v3 (path: ./dist)
7. actions/deploy-pages@v4

## Anti-Patterns
- Don't use `output: 'server'` — GitHub Pages is static only
- Don't forget the CNAME file — GitHub Pages needs it for custom domains
- Don't use `base` in astro.config unless deploying to a subdirectory
- Don't skip the concurrency group — prevents parallel deployment conflicts
