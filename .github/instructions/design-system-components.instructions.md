---
description: "Component catalog and usage rules for @lifesg/react-design-system — consult foundation tokens first, then the component catalog, before writing any custom UI code."
applyTo: "**/*.{tsx,ts,jsx,js}"
---

This project uses **@lifesg/react-design-system** and **@lifesg/react-icons**.

When writing UI code, follow these steps in order:

1. **Foundation tokens first** — use `Colour`, `Spacing`, `MediaQuery` from the design system; no raw hex, px, or rem unless a spacing token doesn't exist.
2. **Check the component catalog** — read `component-catalog.json` to find the right component and import path before writing any custom UI.
3. **File structure** — page components in `src/pages/`; everything else in `src/components/`.
4. **Page layout** — always wrap sections in `Layout.Section` + `Layout.Container`.
5. **Typography** — use `Typography.*` components; never raw `<h1>`, `<p>`, or `<a>` tags.
6. **Icons** — use `@lifesg/react-icons`;

---

## Step 1 — Foundation tokens first

All styling goes through **styled-components** using design system tokens. No inline styles, hardcoded hex values, or raw px/rem sizes.

```tsx
import { Colour, Spacing } from "@lifesg/react-design-system/theme";
import { MediaQuery } from "@lifesg/react-design-system/media";
import styled from "styled-components";

const Card = styled.div`
    background: ${Colour["bg-strong"]};
    border: 1px solid ${Colour["border-strong"]};
    color: ${Colour["text-subtle"]};
    padding: ${Spacing["spacing-16"]};
    gap: ${Spacing["spacing-8"]};

    ${MediaQuery.MaxWidth.tablet} {
        padding: ${Spacing["spacing-12"]};
    }
`;
```

**Spacing tokens** (`Spacing` from `@lifesg/react-design-system/theme`):

For layout-level gaps and padding there are also `"layout-xs"` through `"layout-xxxl"` keys.

If a spacing value does not match any token (e.g. 6px, 10px), use `rem` instead (e.g. `0.375rem`, `0.625rem`).

**Breakpoints** (`MediaQuery.MaxWidth` / `MediaQuery.MinWidth`): `mobileS`, `mobileM`, `mobileL`, `tablet`, `desktopM`, `desktopL`, `desktop4k`.

---

## Step 2 — Component catalog

Read `node_modules/@lifesg/react-design-system/component-catalog.json` before writing any component code. Match `searchKeys` to your intent, then use the exact `importPath`. Never import from the package root.

---

## Step 3 — File structure

Supporting files must **not** live in `src/pages/`. Keep only the page component in `src/pages/`; put everything else in `src/components/`.

```
src/
├── pages/<feature>/
│   └── index.tsx              # page component only
└── components/<feature>/
    ├── types.ts               # all interfaces and types
    └── <feature>.styles.tsx   # all styled-components
```

-   Import types with `import type` from `src/components/<feature>/types`.
-   Import styles by name from `src/components/<feature>/<feature>.styles`.
-   Shared constants go in `src/components/<feature>/constants.ts`; page-only constants stay in `index.tsx`.

---

## Step 4 — Page layout

Always use `Layout.Section` + `Layout.Container` for every structural section. Never use a plain `<div>` with a manual `max-width`.

```tsx
import { Layout } from "@lifesg/react-design-system/layout";

<Layout.Section>
    {" "}
    {/* full-width background band */}
    <Layout.Container>
        {" "}
        {/* constrains width + adds padding */}
        ...
    </Layout.Container>
</Layout.Section>;
```

---

## Step 5 — Typography

Never use raw HTML elements for text, links, or emphasis.

| Instead of                | Use                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `<a href="...">`          | `<Typography.LinkSM href="...">` (BL / MD / SM / XS to match surrounding text size) |
| `<strong>text</strong>`   | `<Typography.BodySM weight="semibold" inline>`                                      |
| `<h1>` … `<p>` … `<span>` | `Typography.HeadingLG`, `Typography.BodyBL`, etc.                                   |

Add the `inline` prop when the element sits inside a paragraph to prevent block-level wrapping.

---

## Step 6 — Icons

Icons come from **`@lifesg/react-icons`** — one component per file. The component name is the filename in PascalCase with an `Icon` suffix, e.g. `bin-fill` → `BinFillIcon`.

When a button has an icon, use `ButtonWithIcon` (not `Button.Default` with a text prefix like `+`).

```tsx
import { ButtonWithIcon } from "@lifesg/react-design-system/button-with-icon";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import { BinFillIcon } from "@lifesg/react-icons/bin-fill";

<ButtonWithIcon.Default styleType="secondary" icon={<PlusCircleFillIcon />}>
  Add item
</ButtonWithIcon.Default>

<ButtonWithIcon.Default styleType="link" danger icon={<BinFillIcon />}>
  Remove
</ButtonWithIcon.Default>
```

To find available icons, browse `node_modules/@lifesg/react-icons/*.d.ts`.

---

## Step 7 — Pre-implementation checklist

Before writing any code, enumerate **every section** in the ticket scope and map each to a design system component. Do not skip sections marked "covered in a separate ticket" — render a visible placeholder instead.

Common sections to check:

| Section                                         | Component                                   |
| ----------------------------------------------- | ------------------------------------------- |
| Step / progress tracker                         | `ProgressIndicator`                         |
| Item / record cards                             | `BoxContainer`                              |
| Sub-sections inside a card (e.g. beneficiaries) | placeholder with `ButtonWithIcon`           |
| Info / warning banners                          | `Alert` + `Typography.LinkSM` for any links |
| Confirmation dialogs                            | `Modal` + `Modal.Box`                       |
| Status notifications                            | `Toast`                                     |
| Buttons with an icon                            | `ButtonWithIcon`                            |
