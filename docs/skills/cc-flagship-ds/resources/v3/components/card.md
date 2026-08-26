# Card

Import: `import { Card } from "@lifesg/react-design-system/card"`

## When to use

Use to visually group related content — information panels, form sections, list items, or grid tiles.

## Usage

```tsx
import styled from "styled-components";
import { Card } from "@lifesg/react-design-system/card";
import { Spacing } from "@lifesg/react-design-system/theme";
import { Typography } from "@lifesg/react-design-system/typography";

const CardBody = styled.div`
    padding: ${Spacing["spacing-24"]};
`;

<Card>
    <CardBody>
        <Typography.HeadingSM>Card title</Typography.HeadingSM>
        <Typography.BodyMD>Card content goes here.</Typography.BodyMD>
    </CardBody>
</Card>;
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
