# SKILL: Editor

## Purpose
Review content drafts before they are committed. This is the quality gate — every piece of content should pass editorial review.

## Input
- A draft content file (`.md` or `.mdx`)
- The content type (field-note, use-case, guide, news, prompt-library)

## Output
- **Pass/Fail** decision with specific corrections needed
- No file output — this SKILL reviews, it does not generate

## Brand Compliance
This SKILL enforces `skills/SKILL-brand.md` rules.

## Review Checklist

### 1. Structure Compliance
- [ ] Frontmatter matches the schema for this content type
- [ ] All required body sections are present and in correct order
- [ ] Word count is within range for the content type

### 2. Brand Voice
- [ ] No banned words (see SKILL-brand.md)
- [ ] Tone is practitioner-to-practitioner
- [ ] No marketing language or hype
- [ ] No clickbait headline

### 3. Citations & Disclaimers
- [ ] External claims include linked citations
- [ ] Data points include source and date
- [ ] Vendor references include disclaimer (or reference to About page)

### 4. Technical Accuracy
- [ ] Product names are correct and current
- [ ] Feature descriptions match current capabilities
- [ ] Code samples (if any) are syntactically correct

### 5. Formatting
- [ ] Sentence case headings
- [ ] Oxford comma used consistently
- [ ] Numbers formatted correctly (spell out 1-9, numerals for 10+)
- [ ] Dates formatted correctly

### 6. MDX Components (for .mdx files only)
- [ ] Components are imported correctly
- [ ] Props match component interface
- [ ] Components render meaningful content (not empty)

## Response Format

```
## Editorial Review: [filename]

**Verdict:** PASS | FAIL

### Issues Found
1. [Specific issue with line reference and correction]
2. [Another issue]

### Suggestions (non-blocking)
1. [Optional improvement]
```

## Anti-patterns
- Don't pass content that violates brand rules — ever
- Don't rewrite the content — provide specific corrections
- Don't block on stylistic preferences — only on rule violations
- Don't review your own work — the Editor should not be the same agent that wrote the content
