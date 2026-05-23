---
name: "pagefind-integration"
description: "Pagefind search setup, indexing, and SearchBar component patterns for Astro"
domain: "search"
confidence: "medium"
source: "manual"
---

## Context
IA Field Notes uses Pagefind for client-side search. Pagefind indexes the built HTML files and provides a fast, offline-capable search experience.

## Patterns

### Build integration
Pagefind runs as a post-build step:
```bash
npm run build
npx pagefind --site dist
```

### GitHub Actions integration
In the deploy workflow, add after `npm run build`:
```yaml
- run: npx pagefind --site dist
```

### SearchBar component
```astro
<!-- Import Pagefind UI CSS and JS -->
<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
<script src="/pagefind/pagefind-ui.js" type="text/javascript"></script>

<div id="search"></div>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    new PagefindUI({ element: '#search', showSubResults: true });
  });
</script>
```

### Keyboard shortcut
Bind Cmd/Ctrl + K to open search overlay.

### Content exclusion
Add `data-pagefind-ignore` to elements that shouldn't be indexed (nav, footer).

## Anti-Patterns
- Don't run Pagefind before the build — it needs the dist/ output
- Don't index navigation or footer content
- Don't forget to include Pagefind in the deploy workflow
- Don't try to run Pagefind in dev mode — it only works on built output
