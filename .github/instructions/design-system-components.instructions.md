---
description: "Component catalog and usage rules for @lifesg/react-design-system — consult foundations tokens first, then the component catalog, before writing any custom UI code."
applyTo: "**/*.{tsx,ts,jsx,js}"
---

This project uses **@lifesg/react-design-system**.

## Step 1 — Use foundations first

Before writing any custom styles or reaching for a third-party library, use the design system's foundation tokens. All styling must go through **styled-components** using these foundations. Never use inline styles, plain CSS, hardcoded hex values, or raw px/rem sizes.

### Colors

```tsx
import { Color } from "@lifesg/react-design-system/color";
import { DesignToken } from "@lifesg/react-design-system/design-token";
import styled from "styled-components";

const Card = styled.div`
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    box-shadow: ${DesignToken.ElevationBoxShadow};
`;
```

### Typography

```tsx
import { Text, TextStyleHelper } from "@lifesg/react-design-system/text";
import { Color } from "@lifesg/react-design-system/color";
import styled from "styled-components";

// In JSX — use Text components directly
<Text.H1>Heading</Text.H1>
<Text.Body>Body copy</Text.Body>

// In styled-components — use TextStyleHelper
const Label = styled.span`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};
`;
```

### Responsive / media queries

```tsx
import { MediaQuery } from "@lifesg/react-design-system/media";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2rem;

    ${MediaQuery.MaxWidth.tablet} {
        padding: 1rem;
    }
`;
```

Available breakpoints (via `MediaQuery.MaxWidth` and `MediaQuery.MinWidth`): `mobileS`, `mobileM`, `mobileL`, `tablet`, `desktopM`, `desktopL`, `desktop4k`.

### Layout

```tsx
import { Layout } from "@lifesg/react-design-system/layout";

<Layout.Section>
    <Layout.Container>
        <Layout.Content>...</Layout.Content>
    </Layout.Container>
</Layout.Section>;
```

### Spacing / gaps

There is no spacing token object — use multiples of `0.5rem` (8px grid). Prefer CSS `gap` in flex/grid containers over `margin` on individual children.

```tsx
const Row = styled.div`
    display: flex;
    gap: 1rem; /* 16px */
    padding: 1.5rem; /* 24px */
`;
```

---

## Step 2 — Use the component catalog

The machine-readable catalog lives at:

```
node_modules/@lifesg/react-design-system/component-catalog.json
```

**Always read this file before writing any component code.** Each entry contains:

| Field         | Purpose                                                  |
| ------------- | -------------------------------------------------------- |
| `name`        | Component name                                           |
| `importPath`  | Exact import path to use                                 |
| `description` | What the component does                                  |
| `searchKeys`  | Intent keywords — match these against the user's request |

**Rules:**

1. Read the catalog and match `searchKeys` against the user's intent to find the right component.
2. Use the exact `importPath` — never import from the package root.
3. Prefer components from this design system over third-party alternatives or custom implementations.
