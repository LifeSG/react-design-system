# Layout & Composition Patterns

Cross-cutting rules for assembling FDS components into polished layouts. Apply alongside per-page template files.

---

## Vertical Spacing Rhythm

| Between…                                   | Token        |
| ------------------------------------------ | ------------ |
| Page title and first content section       | `spacing-32` |
| Major page sections (cards → table)        | `spacing-48` |
| Cards in a grid row (gap)                  | `spacing-24` |
| Heading and its body text within a section | `spacing-8`  |
| Form fields within a group                 | `spacing-24` |
| Form field groups (personal → address)     | `spacing-32` |
| Button row and the content above it        | `spacing-32` |
| Last content section and page bottom       | `spacing-64` |

Apply spacing tokens via inline `style` props:

```tsx
<section style={{ marginBottom: Spacing["spacing-48"] }}>...</section>
```

---

## Visual Hierarchy

Every page must use at least three distinct text levels.

| Level   | Component              | Colour token   | Use for                                 |
| ------- | ---------------------- | -------------- | --------------------------------------- |
| Primary | `Typography.HeadingXL` | `text`         | Page title — one per page               |
| Section | `Typography.HeadingMD` | `text`         | Section headings within the page        |
| Card    | `Typography.HeadingSM` | `text`         | Card titles, panel headers              |
| Body    | `Typography.BodyMD`    | `text`         | Default body text, descriptions         |
| Support | `Typography.BodySM`    | `text-subtle`  | Secondary info, timestamps, helper text |
| Caption | `Typography.BodyXS`    | `text-subtler` | Footnotes, disclaimers, metadata        |

Page title pattern: `Typography.HeadingXL` as `h1`, `Typography.BodyMD` with `style={{ color: Colour["text-subtle"] }}` directly below as subtitle.

---

## Anti-patterns

| Anti-pattern                            | Fix                                                               |
| --------------------------------------- | ----------------------------------------------------------------- |
| All text the same size and colour       | Use at least 3 Typography sizes; `text-subtle` for secondary text |
| No spacing between page sections        | `spacing-48` between major sections                               |
| Summary metric cards stacked vertically | Use a responsive grid: 3–4 across on desktop, stacked on mobile   |
| Buttons touching content above          | `spacing-32` above button row                                     |
| Missing page-bottom spacing             | `spacing-64` padding-bottom on page wrapper                       |
