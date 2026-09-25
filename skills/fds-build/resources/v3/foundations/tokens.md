# Design Tokens

All tokens are imported from `@lifesg/react-design-system/theme`.

```tsx
import {
    Colour,
    Spacing,
    Radius,
    Font,
} from "@lifesg/react-design-system/theme";
```

**v4:** tokens are plain CSS variable strings — use directly in inline `style={{}}` props.
**v3:** tokens are styled-components interpolation functions — use only inside `styled` template literals, never in `style={{}}`.

---

## Token Usage Basics

`Colour`, `Spacing`, and `Font` values are **styled-components interpolation functions** — interpolate them directly inside tagged template literals. They resolve to the correct CSS value for the active `ThemeProvider` theme.

```ts
import { Colour, Spacing, Font } from "@lifesg/react-design-system/theme";
import styled from "styled-components";

const Card = styled.div`
    background: ${Colour["bg-stronger"]};
    padding: ${Spacing["spacing-16"]};
    ${Font["body-md-regular"]}
`;
```

**Using tokens as constants (outside styled-components):**

```ts
import { Colour, LifeSGTheme } from "@lifesg/react-design-system/theme";
import { useTheme } from "styled-components";

// In a React component — resolves based on current theme
const Component = () => {
    const theme = useTheme();
    const colour = Colour["text"]({ theme });
};

// With a fixed theme object (not reactive to theme switching)
const colour = Colour["text"]({ theme: LifeSGTheme });
```

**TypeScript setup (required once per project):**

```ts
// src/styled.d.ts
import "styled-components";
import { ThemeSpec } from "@lifesg/react-design-system/theme/types";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeSpec {
        maxColumns?: {
            xxs: 8;
            xs: 8;
            sm: 8;
            md: 8;
            lg: 12;
            xl: 12;
            xxl: 12;
        };
    }
}
```

Without this file every `${Colour[...]}` or `${Spacing[...]}` interpolation in a styled-component will emit a TypeScript error.

---

## Anti-patterns

| Anti-pattern                                              | Why it fails                                                                       | Correct alternative                                            |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `const bg = Colour['bg']` outside a template literal      | `Colour['bg']` is a function — renders as `[object Object]` in CSS                 | Interpolate directly: `${Colour['bg']}`                        |
| Creating a local token proxy file (`src/theme/tokens.ts`) | Plain strings do not resolve theme overrides — app silently breaks on theme change | Use `Colour[...]` / `Spacing[...]` directly                    |
| Accessing `props.theme.colourScheme` in styled-components | Does not work without the `styled.d.ts` augmentation                               | Use `Colour[...]` / `Spacing[...]` interpolations instead      |
| Hardcoding `var(--color-*)` CSS variables                 | FDS internal variable names may change                                             | Use `Colour[...]` tokens                                       |
| Using `SpacingValues`                                     | This export does not exist                                                         | Use `Spacing`                                                  |
| Using `Theme` (named export)                              | This export does not exist in `@lifesg/react-design-system/theme`                  | Use a named preset: `LifeSGTheme`, `SupportGoWhereTheme`, etc. |

---

## Colour

### Quick decision

| I need a colour for…                     | Token                           |
| ---------------------------------------- | ------------------------------- |
| Page / card background                   | `Colour.bg`                     |
| Emphasis panel / CTA surface             | `Colour["bg-strong"]`           |
| Brand-tinted surface                     | `Colour["bg-primary-subtlest"]` |
| Hover state (custom interactive)         | `Colour["bg-hover"]`            |
| Selected state                           | `Colour["bg-selected"]`         |
| Disabled background                      | `Colour["bg-disabled"]`         |
| Modal / drawer backdrop                  | `Colour["overlay-strong"]`      |
| Body copy, headings                      | `Colour.text`                   |
| Form labels, UI labels                   | `Colour["text-subtle"]`         |
| Descriptions, helper text, metadata      | `Colour["text-subtler"]`        |
| Placeholders                             | `Colour["text-subtlest"]`       |
| Active / brand text                      | `Colour["text-primary"]`        |
| Link text                                | `Colour.hyperlink`              |
| Text on dark backgrounds                 | `Colour["text-inverse"]`        |
| Disabled text                            | `Colour["text-disabled"]`       |
| Default border (inputs, cards, dividers) | `Colour.border`                 |
| Emphasis border                          | `Colour["border-strong"]`       |
| Brand border / active indicator          | `Colour["border-primary"]`      |
| Focus ring                               | `Colour["border-focus"]`        |
| Error border                             | `Colour["border-error"]`        |
| Default icon                             | `Colour.icon`                   |
| Secondary / subtle icon                  | `Colour["icon-subtle"]`         |
| Brand icon                               | `Colour["icon-primary"]`        |
| Icon on dark backgrounds                 | `Colour["icon-inverse"]`        |

### Notation

Single-word tokens use dot notation: `Colour.text`, `Colour.border`, `Colour.bg`, `Colour.icon`

Hyphenated tokens use bracket notation: `Colour["text-subtle"]`, `Colour["bg-hover"]`

### Status tokens

| Status  | Background   | Text           | Icon           | Border           |
| ------- | ------------ | -------------- | -------------- | ---------------- |
| Success | `bg-success` | `text-success` | `icon-success` | `border-success` |
| Warning | `bg-warning` | `text-warning` | `icon-warning` | `border-warning` |
| Error   | `bg-error`   | `text-error`   | `icon-error`   | `border-error`   |
| Info    | `bg-info`    | `text-info`    | `icon-info`    | `border-info`    |

All follow bracket notation: `Colour["bg-success"]`, `Colour["text-error"]`.

### Full token reference

#### Text colours

| Token key                | Use for                                    |
| ------------------------ | ------------------------------------------ |
| `text`                   | Default body text                          |
| `text-subtle`            | Secondary / supporting text                |
| `text-subtler`           | Tertiary / caption-like text               |
| `text-subtlest`          | Weakest text — muted labels, hints         |
| `text-primary`           | Brand-coloured text (links, active labels) |
| `text-hover`             | Text colour on hover states                |
| `text-selected`          | Text in selected / active state            |
| `text-selected-hover`    | Text in selected state on hover            |
| `text-disabled`          | Disabled state text                        |
| `text-disabled-subtle`   | Subtle disabled text                       |
| `text-disabled-subtlest` | Faintest disabled text                     |
| `text-selected-disabled` | Text in selected + disabled state          |
| `text-success`           | Success state text                         |
| `text-warning`           | Warning state text                         |
| `text-error`             | Inline validation error text               |
| `text-info`              | Informational state text                   |
| `text-inverse`           | Text on dark / inverted backgrounds        |

#### Icon colours

| Token key                | Use for                           |
| ------------------------ | --------------------------------- |
| `icon`                   | Default icon fill                 |
| `icon-subtle`            | Subdued / secondary icon          |
| `icon-strongest`         | Highest-contrast icon (very dark) |
| `icon-primary`           | Brand-coloured icon               |
| `icon-primary-subtle`    | Muted brand icon                  |
| `icon-primary-subtlest`  | Faintest brand icon               |
| `icon-hover`             | Icon on hover                     |
| `icon-selected`          | Icon in selected state            |
| `icon-selected-hover`    | Icon in selected state on hover   |
| `icon-disabled`          | Disabled icon                     |
| `icon-disabled-subtle`   | Subtle disabled icon              |
| `icon-selected-disabled` | Icon in selected + disabled state |
| `icon-success`           | Success state icon                |
| `icon-warning`           | Warning state icon                |
| `icon-error`             | Error state icon                  |
| `icon-error-strong`      | Strong / filled error icon        |
| `icon-info`              | Informational icon                |
| `icon-inverse`           | Icon on dark background           |
| `icon-primary-inverse`   | Brand icon on inverted background |

#### Border colours

| Token key                  | Use for                                     |
| -------------------------- | ------------------------------------------- |
| `border`                   | Default input / card / divider borders      |
| `border-strong`            | Stronger divider or emphasis border         |
| `border-stronger`          | Strongest border emphasis                   |
| `border-primary`           | Brand-coloured border                       |
| `border-primary-subtle`    | Muted brand-coloured border                 |
| `border-focus`             | Focus ring on interactive elements          |
| `border-focus-strong`      | Strong focus ring (accessibility highlight) |
| `border-hover`             | Border on hover                             |
| `border-hover-strong`      | Strong border on hover                      |
| `border-selected`          | Selected / active state border              |
| `border-selected-subtle`   | Subtle selected state border                |
| `border-selected-subtlest` | Faintest selected state border              |
| `border-selected-hover`    | Selected state border on hover              |
| `border-disabled`          | Disabled state border                       |
| `border-selected-disabled` | Selected + disabled state border            |
| `border-error`             | Error state border                          |
| `border-error-focus`       | Focus ring inside error state               |
| `border-error-strong`      | Strong error state border                   |
| `border-success`           | Success state border                        |
| `border-warning`           | Warning state border                        |
| `border-info`              | Informational border                        |

#### Background colours

| Token key                      | Use for                                     |
| ------------------------------ | ------------------------------------------- |
| `bg`                           | Default surface background                  |
| `bg-strong`                    | Slightly elevated surface                   |
| `bg-stronger`                  | Card / panel surface                        |
| `bg-strongest`                 | Highest elevation surface                   |
| `bg-hover`                     | Background on hover                         |
| `bg-hover-strong`              | Strong hover background                     |
| `bg-hover-subtle`              | Subtle hover background                     |
| `bg-hover-neutral`             | Neutral hover (non-primary elements)        |
| `bg-hover-neutral-strong`      | Strong neutral hover background             |
| `bg-selected`                  | Selected item background                    |
| `bg-selected-hover`            | Selected item background on hover           |
| `bg-selected-strong`           | Strong selected state                       |
| `bg-selected-strongest`        | Strongest selected fill                     |
| `bg-selected-strongest-hover`  | Strongest selected fill on hover            |
| `bg-disabled`                  | Disabled element background                 |
| `bg-selected-disabled`         | Selected + disabled background              |
| `bg-primary`                   | Brand-coloured fill                         |
| `bg-primary-subtle`            | Subtle brand tint                           |
| `bg-primary-subtler`           | Lighter brand tint                          |
| `bg-primary-subtlest`          | Faintest brand tint                         |
| `bg-primary-hover`             | Brand background on hover                   |
| `bg-primary-subtlest-hover`    | Faintest brand tint on hover                |
| `bg-primary-subtlest-selected` | Faintest brand tint in selected state       |
| `bg-success`                   | Success state background                    |
| `bg-success-hover`             | Success background on hover                 |
| `bg-success-strong`            | Strong success fill (badges, chips)         |
| `bg-success-strong-hover`      | Strong success fill on hover                |
| `bg-warning`                   | Warning state background                    |
| `bg-warning-hover`             | Warning background on hover                 |
| `bg-warning-strong`            | Strong warning fill                         |
| `bg-warning-strong-hover`      | Strong warning fill on hover                |
| `bg-error`                     | Error state background                      |
| `bg-error-hover`               | Error background on hover                   |
| `bg-error-strong`              | Strong error fill                           |
| `bg-error-strong-hover`        | Strong error fill on hover                  |
| `bg-info`                      | Informational background                    |
| `bg-info-hover`                | Informational background on hover           |
| `bg-info-strong`               | Strong informational fill                   |
| `bg-info-strong-hover`         | Strong informational fill on hover          |
| `bg-inverse`                   | Dark / inverted background                  |
| `bg-inverse-subtle`            | Subtle inverted background                  |
| `bg-inverse-subtler`           | Lighter inverted background                 |
| `bg-inverse-subtlest`          | Faintest inverted background                |
| `bg-inverse-hover`             | Inverted background on hover                |
| `bg-available`                 | Available / open slot (scheduling contexts) |
| `overlay-strong`               | Modal / drawer backdrop                     |
| `overlay-subtle`               | Soft overlay                                |

#### Hyperlink

| Token key           | Use for                 |
| ------------------- | ----------------------- |
| `hyperlink`         | Default link colour     |
| `hyperlink-inverse` | Link on dark background |

#### Focus

| Token key            | Use for                           |
| -------------------- | --------------------------------- |
| `focus-ring`         | Keyboard focus outline colour     |
| `focus-ring-inverse` | Focus outline on dark backgrounds |

### Overriding

```ts
const customTheme: ThemeSpec = {
    ...LifeSGTheme,
    overrides: {
        primitiveColour: { "primary-50": "#1768BE" },
        semanticColour: {
            "text-warning": Colour.Primitive["warning-10"],
            "text-error": "#A04747",
        },
    },
};
```

For dark mode, use `primitiveColourDark` / `semanticColourDark` keys instead.

### Rules

-   Never hardcode hex values — always use a Colour token
-   Use `hyperlink` for link text — not `text-primary`
-   DS components (Button, Form.Input, Card, etc.) handle their own colour states — only apply Colour tokens to custom elements

---

## Spacing

Base-4 system. Import: `Spacing["spacing-{n}"]`

| Token         | Value | Frequency    | Typical use                             |
| ------------- | ----- | ------------ | --------------------------------------- |
| `spacing-0`   | 0px   | Rare         | Reset / collapse                        |
| `spacing-4`   | 4px   | Rare         | Tight inline gaps                       |
| `spacing-8`   | 8px   | **Common**   | Icon-text gaps, heading-to-body gaps    |
| `spacing-12`  | 12px  | Occasional   | Tight component gaps                    |
| `spacing-16`  | 16px  | **Dominant** | List items, form fields, component gaps |
| `spacing-20`  | 20px  | Occasional   | Medium-small spacing                    |
| `spacing-24`  | 24px  | **Dominant** | Card padding, section gaps              |
| `spacing-32`  | 32px  | Common       | Large spacing, section padding          |
| `spacing-40`  | 40px  | Occasional   | Extra-large spacing                     |
| `spacing-48`  | 48px  | Occasional   | Page-level vertical rhythm              |
| `spacing-64`  | 64px  | Rare         | XXL spacing                             |
| `spacing-72`  | 72px  | Rare         | Extra-large structural spacing          |
| `layout-xs`   | —     | —            | Layout grid gutter xs breakpoint        |
| `layout-sm`   | —     | —            | Layout grid gutter sm breakpoint        |
| `layout-md`   | —     | —            | Layout grid gutter md breakpoint        |
| `layout-lg`   | —     | —            | Layout grid gutter lg breakpoint        |
| `layout-xl`   | —     | —            | Layout grid gutter xl breakpoint        |
| `layout-xxl`  | —     | —            | Layout grid gutter xxl breakpoint       |
| `layout-xxxl` | —     | —            | Layout grid gutter xxxl breakpoint      |

Always bracket notation: `Spacing["spacing-16"]`

Never hardcode `px` values — always use a Spacing token.

---

## Radius

| Token         | Value  | Use                                                  |
| ------------- | ------ | ---------------------------------------------------- |
| `Radius.none` | 0px    | Full-bleed, tables                                   |
| `Radius.xs`   | 2px    | Rarely needed                                        |
| `Radius.sm`   | 4px    | **Default** — form elements, small custom components |
| `Radius.md`   | 8px    | Cards, panels, overlays                              |
| `Radius.lg`   | 12px   | Modals, large overlays                               |
| `Radius.full` | 9999px | Pills, avatars, circular elements                    |

Always dot notation: `Radius.sm`, `Radius.md`

DS components have radius baked in — do not override: Input/Textarea (`sm`), Card/Drawer/Menu/Toast (`md`), Modal (`lg`), Pill (`full`).

**Overriding:**

```ts
const customTheme: ThemeSpec = {
    ...LifeSGTheme,
    overrides: { radius: { sm: 6 } },
};
```

---

## Typography

Use `Typography.*` components for all rendered text. Use `Font` tokens only when styling a non-text parent container that needs font styles.

### Typography component → heading level

| Component                | Default element | When to use                       |
| ------------------------ | --------------- | --------------------------------- |
| `Typography.HeadingXXL`  | `h1`            | Hero / landing page title         |
| `Typography.HeadingXL`   | `h2`            | Page title (top of view)          |
| `Typography.HeadingLG`   | `h3`            | Section heading — most common     |
| `Typography.HeadingMD`   | `h4`            | Card heading, subsection          |
| `Typography.HeadingSM`   | `h5`            | Small heading, list header        |
| `Typography.HeadingXS`   | `h6`            | Tiny heading, emphasized label    |
| `Typography.BodyBL`      | `p`             | Default body text, paragraphs     |
| `Typography.BodyBLSmall` | `p`             | Emphasized small body text        |
| `Typography.BodyMD`      | `p`             | Medium body text                  |
| `Typography.BodySM`      | `p`             | Small text, captions, helper text |
| `Typography.BodyXS`      | `p`             | Metadata, timestamps, footnotes   |

Use the `as` prop when visual size and semantic heading level don't match:

```tsx
{
    /* Visually large but logically a subsection h2 */
}
<Typography.HeadingLG as="h2">Section title</Typography.HeadingLG>;
```

Heading levels must be sequential (h1 → h2 → h3) — never skip levels.

### Rules

-   Sentence case for all UI text — "Save changes" not "Save Changes"
-   Always pair Font tokens with a Colour token — Font sets typography only, not colour
-   Heading level follows reading order, not visual size

---

## Font Tokens (v3 styled-components only)

> Import: `import { Font } from "@lifesg/react-design-system/theme"` > `Font[key]` injects a full set of CSS font properties (family, size, weight, line-height, letter-spacing) as a styled-components CSS block.
> Use `Font.Spec[key]` to access individual font spec values (e.g. just the font size).

Use `Typography.*` components for all rendered text content in JSX. Use `Font[...]` tokens only when initialising text styles in a styled-component container — e.g. to inherit to child elements, or to match an icon size to adjacent text.

```tsx
const CardHeader = styled.div`
    ${Font["heading-md-semibold"]}
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
`;

// Match an inline icon height to the text size
const Icon = styled.svg`
    height: ${Font.Spec["heading-size-xxl"]};
`;
```

Most headings use `-semibold`, not `-bold`. Default body is `body-baseline-regular`.

### Overriding

```ts
const customTheme: ThemeSpec = {
    ...LifeSGTheme,
    overrides: {
        fontSpec: { "heading-size-xxl": "5rem" },
        font: {
            "heading-body-light": css`
                font-family: serif;
                font-size: 1rem;
                font-weight: 300;
                line-height: 1.4rem;
                letter-spacing: 0;
            `,
        },
    },
};
```

When overriding a font spec token, all font tokens that reference it also reflect the new value. Use longhand CSS properties (e.g. `font-size`, not `font`) to avoid overwriting unrelated font values.

---

## Breakpoint / Media Query Tokens

> Import: `import { MediaQuery, Breakpoint } from "@lifesg/react-design-system/theme"`

`MediaQuery.MaxWidth.<tier>` and `MediaQuery.MinWidth.<tier>` inject a full `@media` rule into a styled-component template literal. Use `Breakpoint["<tier>-min"]` / `Breakpoint["<tier>-max"]` to access the raw pixel value at runtime (e.g. for JS conditional logic).

```ts
// Desktop-first: hide on xs and below
const Panel = styled.div`
    display: block;
    ${MediaQuery.MaxWidth.xs} {
        display: none;
    }
`;

// Mobile-first: two columns from lg upward
const Grid = styled.div`
    columns: 1;
    ${MediaQuery.MinWidth.lg} {
        columns: 2;
    }
`;

// Runtime value — compare against current window width
const Component = () => {
    const theme = useTheme();
    const tabletMin = Breakpoint["md-min"]({ theme });
    return window.innerWidth > tabletMin ? <Wide /> : <Narrow />;
};
```

### Breakpoint tiers

| Tier  | Screen width   | `*-min` value | `*-max` value | Columns | Gutter | Margin |
| ----- | -------------- | ------------- | ------------- | ------- | ------ | ------ |
| `xxs` | 0 – 320 px     | —             | 320 px        | 8       | 16 px  | 24 px  |
| `xs`  | 321 – 375 px   | 321 px        | 375 px        | 8       | 16 px  | 24 px  |
| `sm`  | 376 – 480 px   | 376 px        | 480 px        | 8       | 16 px  | 24 px  |
| `md`  | 481 – 768 px   | 481 px        | 768 px        | 8       | 16 px  | 24 px  |
| `lg`  | 769 – 1200 px  | 769 px        | 1200 px       | 12      | 32 px  | 48 px  |
| `xl`  | 1201 – 1440 px | 1201 px       | 1440 px       | 12      | 32 px  | 48 px  |
| `xxl` | ≥ 1441 px      | 1441 px       | —             | 12      | 32 px  | 48 px  |

### `Breakpoint` token keys

Each key returns a raw `number` (pixels) when called with `{ theme }`.

| Token key | Value | Use for                    |
| --------- | ----- | -------------------------- |
| `xxs-max` | 320   | Max-width JS check for xxs |
| `xs-min`  | 321   | Min-width JS check for xs  |
| `xs-max`  | 375   | Max-width JS check for xs  |
| `sm-min`  | 376   | Min-width JS check for sm  |
| `sm-max`  | 480   | Max-width JS check for sm  |
| `md-min`  | 481   | Min-width JS check for md  |
| `md-max`  | 768   | Max-width JS check for md  |
| `lg-min`  | 769   | Min-width JS check for lg  |
| `lg-max`  | 1200  | Max-width JS check for lg  |
| `xl-min`  | 1201  | Min-width JS check for xl  |
| `xl-max`  | 1440  | Max-width JS check for xl  |
| `xxl-min` | 1441  | Min-width JS check for xxl |

### Overriding

```ts
const customTheme: ThemeSpec = {
    ...LifeSGTheme,
    overrides: {
        breakpoint: {
            "sm-max": 430,
            "md-min": 431,
        },
    },
};
```

All `MediaQuery` helpers automatically reflect the overridden values.

### Known limitations

-   `MediaQuery` helpers are CSS-in-JS only — cannot be used outside a styled-component template literal
-   There is no built-in hook to reactively detect the current tier; wire `window.matchMedia` manually if needed

---

## Shadow Tokens

> Import: `import { Shadow } from "@lifesg/react-design-system/theme"`

```ts
const Card = styled.div`
    box-shadow: ${Shadow["sm-subtle"]};
`;

const Input = styled.input`
    box-shadow: ${Shadow["xs-focus-strong"]};
`;
```

### Token reference

| Token key         | Common use                            |
| ----------------- | ------------------------------------- |
| `xs-subtle`       | Subtle glow / container resting state |
| `xs-strong`       | Strong glow / hover or active state   |
| `xs-focus-strong` | Keyboard focus ring on inputs         |
| `xs-error-strong` | Error focus ring on inputs            |
| `sm-subtle`       | Card / panel resting elevation        |
| `sm-strong`       | Card hover / lifted state             |
| `md-subtle`       | Modal / drawer resting elevation      |
| `md-strong`       | Modal hover or prominent elevation    |

---

## Border Tokens

> Import: `import { Border } from "@lifesg/react-design-system/theme"`

`Border["width-*"]` for widths, `Border.Util["solid"]` for a full border shorthand.

```ts
// Individual properties
const Box = styled.div`
    border-width: ${Border["width-010"]};
    border-style: ${Border["solid"]};
`;

// Util shorthand
const Card = styled.div`
    ${Border.Util["solid"]};
`;

// Util with custom options
const Custom = styled.div`
    ${Border.Util["solid"]({ thickness: 2, colour: "red", radius: 8 })};
`;
```

### Token reference

| Token key   | Value | Common use                  |
| ----------- | ----- | --------------------------- |
| `width-005` | 0.5px | Hairline divider            |
| `width-010` | 1px   | Default input / card border |
| `width-020` | 2px   | Emphasis / selected border  |
| `solid`     | solid | Border style                |

Utilities: `Border.Util["solid"]` and `Border.Util["dashed-default"]` accept optional `{ thickness, colour, radius }` — all parameters optional, omit to use token defaults.

---

## Motion Tokens

> Import: `import { Motion } from "@lifesg/react-design-system/theme"`

```ts
const Button = styled.button`
    transition: background ${Motion["duration-250"]} ${Motion["ease-default"]};
    &:hover {
        background: darkgrey;
    }
`;
```

For elements with dynamic height or width (e.g. expandable panels), use `react-spring` instead — CSS transitions cannot handle layout animation reliably with dynamic content.

### Duration

| Token key       | Value  | Use for                 |
| --------------- | ------ | ----------------------- |
| `duration-150`  | 150ms  | Checkboxes, toggles     |
| `duration-250`  | 250ms  | Buttons, fades          |
| `duration-350`  | 350ms  | Icons, short movements  |
| `duration-500`  | 500ms  | Search bars, toasts     |
| `duration-800`  | 800ms  | Notifications, cards    |
| `duration-1000` | 1000ms | Full-screen transitions |

### Easing

| Token key       | Value                                  | Use for                               |
| --------------- | -------------------------------------- | ------------------------------------- |
| `ease-default`  | `cubic-bezier(0.45, 0.05, 0.55, 0.95)` | Non-moving elements — opacity, colour |
| `ease-standard` | `cubic-bezier(0.86, 0, 0.07, 1)`       | Visible throughout motion — dropdowns |
