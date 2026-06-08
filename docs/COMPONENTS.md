# Component Reference

All components live in `src/components/` and `src/layouts/`. The site currently has
11 shared components in `src/components/`, bespoke guide components in
`src/components/guides/`, and 3 layouts in `src/layouts/` (`BaseLayout`,
`PostLayout`, `GuideWideLayout`).

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
For article-style pages (field notes, use cases, standard guides). Renders title, date, topic, and read time.

```astro
---
import PostLayout from '../layouts/PostLayout.astro';
---
<PostLayout title="Article Title" date={new Date()} topic="Copilot" readTime="5 min read" description="Summary">
  <!-- article body -->
</PostLayout>
```

### `<GuideWideLayout>`
Full-bleed layout for wide/interactive guides (frontmatter `width: wide`). The guides
route (`src/pages/guides/[...slug].astro`) selects it automatically:
`const Layout = post.data.width === 'wide' ? GuideWideLayout : PostLayout;`. A wide
guide is a thin MDX shell that renders one bespoke component from `src/components/guides/`.

## Content Components

### `<Hero>`
Large section header for homepages and index pages. The accent word renders in the italic display face; CTAs are optional.

```astro
<Hero
  title="Intelligence,"
  accentWord="amplified"
  subtitle="Unlocking practical value from AI at work"
  stampText="Field Notes"
  showCTA={true}
  primaryCTA={{ text: 'Browse Field Notes', href: '/field-notes/' }}
  secondaryCTA={{ text: 'About', href: '/about/' }}
/>
```

**Props:** `title` (string, optional), `accentWord` (string, optional — rendered italic), `subtitle` (string, optional), `stampText` (string, optional), `showCTA` (boolean, optional), `primaryCTA` (`{ text, href }`, optional), `secondaryCTA` (`{ text, href }`, optional)

### `<FieldNoteCard>`
Card for content list views. Links to `/{collection}/{slug}/`. The read-time line is
omitted when `readTime` is an empty string (the guides index does this).

```astro
<FieldNoteCard
  title="Title"
  slug="my-post-slug"
  date={new Date()}
  topic="Copilot"
  description="Short summary"
  collection="field-notes"
  readTime="3 min read"
/>
```

**Props:** `title` (string), `slug` (string), `date` (Date), `topic` (string, optional), `description` (string, optional), `collection` (string, optional — default `'field-notes'`), `readTime` (string, optional — default `'5 min read'`; pass `""` to hide the line)

### `<CategoryTile>`
Navigation card for sections and categories (homepage and index pages).

```astro
<CategoryTile
  title="Field Notes"
  description="Short observations from real AI deployments"
  href="/field-notes/"
  icon="📓"
  countText="12 notes"
/>
```

**Props:** `title` (string), `description` (string), `href` (string), `icon` (string, optional), `countText` (string, optional)

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

## Guide Components (`src/components/guides/`)

Wide/interactive guides keep their custom markup and styles in a single bespoke
component per guide, e.g. `CopilotChatBasicGuide.astro`. The guide's `.mdx` file sets
`width: wide` and renders the component:

```mdx
import CopilotChatBasicGuide from '../../components/guides/CopilotChatBasicGuide.astro';

<CopilotChatBasicGuide />
```

Keep component CSS namespaced to the guide, and store guide images under
`public/images/guides/<slug>/`. Mercer owns the component code; Quinn owns the guide content.
