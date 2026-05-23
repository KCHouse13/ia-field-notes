# Component Reference

All components live in `src/components/` and `src/layouts/`.

## Layouts

### `<BaseLayout>`
Wraps every page. Includes header, footer, global styles, and meta tags.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Title" description="Page description">
  <!-- page content -->
</BaseLayout>
```

**Props:** `title` (string), `description` (string), `ogImage` (string, optional)

### `<PostLayout>`
For article-style pages. Renders title, date, topic, and read time.

```astro
---
import PostLayout from '../layouts/PostLayout.astro';
---
<PostLayout title="Article Title" date={new Date()} topic="Copilot" readTime="5 min" description="Summary">
  <!-- article body -->
</PostLayout>
```

## Content Components

### `<Hero>`
Large section header for homepages and index pages.

```astro
<Hero title="Field Notes" tagline="Observations from the field" ctaText="Browse All" ctaHref="/field-notes/" />
```

### `<FieldNoteCard>`
Card for content list views.

```astro
<FieldNoteCard
  title="Title"
  date={new Date()}
  topic="Copilot"
  excerpt="Short summary"
  href="/field-notes/slug"
  readTime="3 min"
/>
```

### `<CalloutBox>`
Highlighted callout for tips, warnings, and notes.

```astro
<CalloutBox type="tip">
  This is a helpful tip.
</CalloutBox>
```

**Types:** `tip`, `warning`, `note`

### `<WalkthroughStep>`
Numbered step in a guide.

```astro
<WalkthroughStep number={1} title="Install the extension">
  Go to the VS Code marketplace and search for...
</WalkthroughStep>
```

### `<PromptExample>`
Formatted prompt with copy button.

```astro
<PromptExample
  title="Summarize meeting notes"
  prompt="Summarize the key decisions and action items from these meeting notes: [paste notes]"
  notes="Works best with GPT-4 or Copilot in Word"
/>
```

### `<CodeBlock>`
Syntax-highlighted code.

```astro
<CodeBlock lang="typescript" filename="example.ts" code="const greeting = 'Hello';" />
```

### `<SectionDivider>`
Decorative horizontal rule.

```astro
<SectionDivider label="Next Section" />
```

### `<SearchBar>`
Pagefind-powered search. Included in Header automatically.
