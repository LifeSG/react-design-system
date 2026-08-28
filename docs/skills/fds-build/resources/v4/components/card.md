# Card

Import: `import { Card } from "@lifesg/react-design-system/card"`

## When to use

Use to visually group related content — information panels, form sections, list items, or grid tiles.

## Usage

```tsx
import styles from "./Card.module.css";
import { Card } from "@lifesg/react-design-system/card";
import { Typography } from "@lifesg/react-design-system/typography";

<Card>
    <div className={styles.cardBody}>
        <Typography.HeadingSM>Card title</Typography.HeadingSM>
        <Typography.BodyMD>Card content goes here.</Typography.BodyMD>
    </div>
</Card>;
```

```css
/* Card.module.css */
.cardBody {
    padding: var(--fds-spacing-24);
}
```

## Props

Inherits all standard `HTMLDivElement` attributes.

| Prop          | Type     | Default | Description                       |
| ------------- | -------- | ------- | --------------------------------- |
| `data-testid` | `string` | —       | Test identifier for the component |

## Rules

-   Card has no default padding — use `spacing-24` internal padding and `spacing-16` gap between content items as the standard.
-   Shadow (`Shadow["md-subtle"]`) is applied automatically — do not add `box-shadow` manually.
-   Do not nest cards inside cards.
-   Use Typography components for all text inside Card — not raw HTML elements.
-   Combine with `Layout.Container` and `Layout.ColDiv` for responsive card grids.

## Anti-patterns

-   Adding `box-shadow` via CSS — the Card component already applies the correct elevation shadow.
-   Using raw `<div>` with custom styling instead of Card when the DS Card fits the use case.
-   Nesting `<Card>` inside another `<Card>`.
