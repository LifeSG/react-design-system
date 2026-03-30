---
description: "Component catalog and usage rules for @lifesg/react-design-system"
applyTo: "**/*.{tsx,ts,jsx,js}"
---

This project uses **@lifesg/react-design-system** and **@lifesg/react-icons**.

## Step 1 — Use foundations first

Before writing any custom styles, use design system foundation tokens via **styled-components**. Never use inline styles, plain CSS, hardcoded hex values, or raw px/rem sizes.

### Typography

```tsx
import { Typography } from "@lifesg/react-design-system/typography";
// Headings: HeadingXXL HeadingXL HeadingLG HeadingMD HeadingSM HeadingXS
<Typography.HeadingLG weight="semibold" />
// Body: BodyBL BodyMD BodySM BodyXS
<Typography.BodyMD />
// Inline links (pass external for off-site)
<Typography.LinkMD href="..." external />
```

weight values: "regular" | "semibold" | "bold" | "light"

### Responsive / media queries

```tsx
import { MediaQuery } from "@lifesg/react-design-system/media";
const Wrapper = styled.div`
    padding: 2rem;
    ${MediaQuery.MaxWidth.tablet} {
        padding: 1rem;
    }
`;
```

Breakpoints: mobileS, mobileM, mobileL, tablet, desktopM, desktopL, desktop4k.

### Layout

```tsx
import { Layout } from "@lifesg/react-design-system/layout";
<Layout.Section>
    <Layout.Container>
        <Layout.Content>...</Layout.Content>
    </Layout.Container>
</Layout.Section>;
```

### Spacing

No spacing token. Use multiples of 0.5rem (8px grid). Prefer `gap` in flex/grid over margin on children.

---

## Step 2 — Use the component catalog

Read `node_modules/@lifesg/react-design-system/component-catalog.json` before writing any component code.

**Rules:**

1. Use the exact `importPath` from the catalog — never import from the package root.
2. Prefer design system components over custom implementations.
3. When unsure of exported names or props, read the `.d.ts` at `node_modules/@lifesg/react-design-system/<importPath>/index.d.ts` **before** using the component. Do not guess API shapes.

---

## Step 3 — Verified component patterns

### Form fields

```tsx
import { Form } from "@lifesg/react-design-system/form";

// Text input
<Form.Input label="Full name" placeholder="e.g. Tan Ah Kow" />

// Dropdown: always provide all four extractor props
<Form.Select
    options={OPTIONS}
    selectedOption={OPTIONS.find((o) => o.value === value)}
    onSelectOption={(option) => setValue(option.value)}
    valueExtractor={(o) => o.value}
    listExtractor={(o) => o.label}
    displayValueExtractor={(o) => o.label}
    placeholder="Select..."
/>
```

**Do NOT** use `label.addon` when the design shows a standalone (i) icon beside a label. Use `PopoverInline` in a manual label row instead.

### Popover (i) icon beside a label

`PopoverInline` is self-contained: renders its own trigger icon, accepts `popoverContent` directly — no wrapper button needed.

```tsx
import { PopoverInline } from "@lifesg/react-design-system/popover-v2";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";

const LabelRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 0.5rem;
`;

<LabelRow>
    <Typography.BodyBL weight="semibold">Label text</Typography.BodyBL>
    <PopoverInline
        content={<ICircleFillIcon />}
        popoverContent="Explanation shown in the popover."
        position="top"
    />
</LabelRow>;
{
    /* Render input below with no label prop — the row above replaces it */
}
<Form.Input placeholder="..." />;
```

Note: `PopoverTrigger` (also from `popover-v2`) wraps a custom child element. Use `PopoverInline` for the (i) label pattern.

### Alert with inline links and multiple paragraphs

```tsx
import { Alert } from "@lifesg/react-design-system/alert";

<Alert type="info" showIcon>
    <>
        <Typography.BodyMD>
            First paragraph with a{" "}
            <Typography.LinkMD href="https://example.com" external>
                link
            </Typography.LinkMD>
            .
        </Typography.BodyMD>
        <Typography.BodyMD style={{ marginTop: "0.75rem" }}>
            Second paragraph with{" "}
            <Typography.LinkMD href="https://example.com" external>
                another link
            </Typography.LinkMD>
            .
        </Typography.BodyMD>
    </>
</Alert>;
```

`type` values: "success" | "warning" | "error" | "info" | "description"

### Step progress indicator

```tsx
import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator";
// currentIndex is zero-based
<ProgressIndicator steps={["Step 1", "Step 2", "Step 3"]} currentIndex={1} />;
```

### Radio buttons with description cards

```tsx
import { RadioButton } from "@lifesg/react-design-system/radio-button";

const OptionCard = styled.label`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid #d1dce5;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 0.75rem;
    &:hover {
        border-color: #1c76d5;
        background: #f5f9ff;
    }
`;

<OptionCard htmlFor="option-id">
    <RadioButton
        id="option-id"
        name="group"
        value="sole"
        checked={value === "sole"}
        onChange={() => setValue("sole")}
    />
    <div>
        <Typography.BodyBL weight="semibold">Option title</Typography.BodyBL>
        <Typography.BodyMD>Option description.</Typography.BodyMD>
    </div>
</OptionCard>;
```

---

## Step 4 — Icons (@lifesg/react-icons)

Each icon is a named export from its own sub-path. Always verify names by scanning `node_modules/@lifesg/react-icons/*.d.ts` — do not guess icon names.

```tsx
import { PencilFillIcon } from "@lifesg/react-icons/pencil-fill";
import { DocPencilFillIcon } from "@lifesg/react-icons/doc-pencil-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { LightbulbFillIcon } from "@lifesg/react-icons/lightbulb-fill";
import { BookmarkFillIcon } from "@lifesg/react-icons/bookmark-fill";

<PencilFillIcon width={20} height={20} />;
```

Confirmed sub-paths: `pencil`, `pencil-fill`, `pencil-stroke`, `pencil-stroke-fill`, `doc-pencil`, `doc-pencil-fill`, `lightbulb`, `lightbulb-fill`, `i-circle`, `i-circle-fill`, `bookmark`, `bookmark-fill`, `bell`, `bell-fill`.

---

## Step 5 — File and folder structure

Split any non-trivial page into a folder:

```
src/pages/<page-name>/
    index.tsx   -- page component only; imports from ./styles and ./types
    styles.tsx  -- all styled-components; no logic
    types.ts    -- interfaces, constants, factory helpers; no JSX
```

-   `styles.tsx`: imports only styled-components and design system foundation packages.
-   `types.ts`: zero design system imports — pure data shapes and constants.
-   `index.tsx`: imports everything from `./styles` and `./types` by name; no inline `styled` calls.
