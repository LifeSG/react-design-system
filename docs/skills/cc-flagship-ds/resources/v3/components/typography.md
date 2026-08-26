# Typography

Import: `import { Typography } from "@lifesg/react-design-system/typography"`

## When to use

Use Typography components to render text content — headings, paragraphs, and links. Do not use for parent containers that have text children; use Font tokens instead (see `foundations/typography.md`).

## Sub-components

**Headings:** `Typography.HeadingXXL`, `Typography.HeadingXL`, `Typography.HeadingLG`, `Typography.HeadingMD`, `Typography.HeadingSM`, `Typography.HeadingXS`

**Body:** `Typography.BodyBL`, `Typography.BodyMD`, `Typography.BodySM`, `Typography.BodyXS`

**Links:** `Typography.LinkBL`, `Typography.LinkMD`, `Typography.LinkSM`, `Typography.LinkXS`

## Variants

| Component         | Default element | Usage                                  |
| ----------------- | --------------- | -------------------------------------- |
| `HeadingXXL`      | `h1`            | Hero/page-level title                  |
| `HeadingXL`       | `h2`            | Page title or primary section heading  |
| `HeadingLG`       | `h3`            | Section heading                        |
| `HeadingMD`       | `h4`            | Subsection heading                     |
| `HeadingSM`       | —               | Card heading, secondary heading        |
| `HeadingXS`       | —               | Small heading                          |
| `BodyBL`          | —               | Default paragraph text                 |
| `BodyMD`          | —               | Medium body text                       |
| `BodySM`          | —               | Helper text                            |
| `BodyXS`          | —               | Metadata, timestamps                   |
| `LinkBL/MD/SM/XS` | `<a>`           | Inline links, sized to match body text |

## Usage

```tsx
import { Typography } from "@lifesg/react-design-system/typography";

<>
    <Typography.HeadingXL>Page title</Typography.HeadingXL>
    <Typography.BodyBL paragraph>
        Supporting body text for the section. Use{" "}
        <Typography.LinkMD href="/learn-more">
            link components
        </Typography.LinkMD>{" "}
        for inline anchors.
    </Typography.BodyBL>
</>;
```

## Props

### Heading/Body props

Inherits `HTMLElement` attributes.

| Prop        | Type                                           | Default     | Description                                     |
| ----------- | ---------------------------------------------- | ----------- | ----------------------------------------------- |
| `as`        | `string`                                       | —           | Override rendered HTML element (e.g. `as="h1"`) |
| `weight`    | `"regular" \| "semibold" \| "bold" \| "light"` | `"regular"` | Font weight                                     |
| `inline`    | `boolean`                                      | —           | Display inline instead of block                 |
| `paragraph` | `boolean`                                      | `false`     | Add bottom margin for text block separation     |
| `maxLines`  | `number`                                       | —           | Truncate after N lines with ellipsis            |

### Link props

Inherits `HTMLAnchorElement` attributes.

| Prop             | Type                                           | Default       | Description                  |
| ---------------- | ---------------------------------------------- | ------------- | ---------------------------- |
| `weight`         | `"regular" \| "semibold" \| "bold" \| "light"` | `"regular"`   | Font weight                  |
| `external`       | `boolean`                                      | —             | Show external link indicator |
| `underlineStyle` | `"underline" \| "none"`                        | `"underline"` | Text decoration              |

## Rules

-   Default HTML elements: `HeadingXXL` → `h1`, `HeadingXL` → `h2`, `HeadingLG` → `h3`, `HeadingMD` → `h4`.
-   Text color is not set by the component — apply via `styled()` using Colour tokens.
-   Do not pass `color` as a prop — `TypographyProps` extends `HTMLAttributes` and forwards the value to the DOM, triggering a React warning.
-   Do not use Typography for parent containers — use Font tokens instead.
-   Heading components render default HTML elements — use the `as` prop when visual size and reading order don't match.
-   Heading levels must be sequential (h1 → h2 → h3) — never skip levels.
-   Apply text color via `styled()` using Colour tokens — never pass `color` as a prop.
-   Use the `weight` prop to adjust emphasis, not opacity.
-   Links are underlined by default — use `underlineStyle="none"` only when context makes the link obvious.
-   Always use the `external` prop for links that navigate outside the domain.

## Anti-patterns

-   Passing `color` directly as a prop — it forwards a Colour object to the DOM and triggers a React warning.
-   Skipping heading levels for visual sizing — use the `as` prop instead.
-   Using `<h1>` raw HTML inside a Typography component instead of `as="h1"`.
-   Using Typography on a container element to inherit font styles — use Font tokens.
