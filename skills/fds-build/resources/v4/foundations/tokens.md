# Design Tokens — v4

All tokens are imported from `@lifesg/react-design-system/theme`.

```tsx
import {
    Colour,
    Spacing,
    Radius,
    Font,
} from "@lifesg/react-design-system/theme";
```

In v4, tokens are **plain CSS variable strings** — use them directly in inline `style={{}}` props or as values in CSS Modules. They do not need to be called as functions and do not require `styled-components` or `useTheme`.

```tsx
// Inline style
<div
    style={{
        background: Colour["bg-stronger"],
        padding: Spacing["spacing-16"],
    }}
/>;

// CSS Modules — assign to a variable then reference
const bg = Colour["bg-stronger"]; // "var(--fds-colour-bg-stronger)"
```

No `styled.d.ts` augmentation required. No `useTheme()` hook needed.

---

## Anti-patterns

| Anti-pattern                                                      | Why it fails                                             | Correct alternative                         |
| ----------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| Using `Colour[...]` inside a `styled-components` template literal | `styled-components` is not installed in v4               | Use in `style={{}}` or CSS Modules          |
| Hardcoding `var(--fds-*)` directly                                | FDS internal variable names may change                   | Use `Colour[...]` / `Spacing[...]` tokens   |
| Hardcoding hex values                                             | Breaks theming                                           | Always use a Colour token                   |
| Creating a local token proxy file                                 | Plain strings do not respond to theme changes at runtime | Use `Colour[...]` / `Spacing[...]` directly |
| Using `SpacingValues`                                             | This export does not exist                               | Use `Spacing`                               |
| Using `Theme` (named export)                                      | This export does not exist                               | Use a named preset: `LifeSGTheme`, etc.     |

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

### Usage in v4

```tsx
// Inline style — most common
<p style={{ color: Colour["text-subtle"] }}>Secondary text</p>;

// CSS Modules — assign token to a variable
import styles from "./Card.module.css";

const Card = () => (
    <div
        className={styles.card}
        style={{
            background: Colour["bg-stronger"],
            borderColor: Colour.border,
        }}
    />
);
```

DS components (Button, Form.Input, Card, etc.) handle their own colour states — only apply Colour tokens to custom elements.

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

Pass a `colorScheme` override when creating a custom ThemeProvider theme:

```tsx
<ThemeProvider
    theme="lifesg"
    overrides={{
        primitiveColour: { "primary-50": "#1768BE" },
        semanticColour: { "text-error": "#A04747" },
    }}
>
```

For dark mode overrides, use `primitiveColourDark` / `semanticColourDark`.

### Rules

-   Never hardcode hex values — always use a Colour token
-   Use `hyperlink` for link text — not `text-primary`
-   DS components (Button, Form.Input, Card, etc.) handle their own colour states — only apply Colour tokens to custom elements

---

## Spacing

Base-4 system. Import: `Spacing["spacing-{n}"]` — returns a CSS variable string.

```tsx
<div style={{ gap: Spacing["spacing-16"], padding: Spacing["spacing-24"] }} />
```

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

`Radius.*` returns a CSS variable string. Use in `style={{ borderRadius: Radius.md }}`.

| Token         | Value  | Use                                                  |
| ------------- | ------ | ---------------------------------------------------- |
| `Radius.none` | 0px    | Full-bleed, tables                                   |
| `Radius.xs`   | 2px    | Rarely needed                                        |
| `Radius.sm`   | 4px    | **Default** — form elements, small custom components |
| `Radius.md`   | 8px    | Cards, panels, overlays                              |
| `Radius.lg`   | 12px   | Modals, large overlays                               |
| `Radius.full` | 9999px | Pills, avatars, circular elements                    |

Always dot notation: `Radius.sm`, `Radius.md`

DS components have radius baked in — do not override.

---

## Typography

Use `Typography.*` components for all rendered text — same as v3.

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
<Typography.HeadingLG as="h2">Section title</Typography.HeadingLG>
```

Heading levels must be sequential (h1 → h2 → h3) — never skip levels.

### Rules

-   Sentence case for all UI text — "Save changes" not "Save Changes"
-   Heading level follows reading order, not visual size

### Font tokens in v4

In v4, `Font[...]` tokens return CSS variable strings for individual font properties. Use `Typography.*` components for all text content in JSX — only use `Font` tokens when you need to apply font styles to a non-text container element.

```tsx
// Match an icon size to adjacent text — use Font.Spec for raw values
<img style={{ height: Font.Spec["heading-size-xxl"] }} />
```

There is no multi-property CSS block injection in v4 (that was styled-components only). Use `Typography.*` components instead.

---

## Breakpoints / Media Queries

In v4 there is no `MediaQuery` helper for CSS-in-JS. Use standard CSS media queries in your CSS Modules files.

```css
/* Card.module.css */
.grid {
    display: grid;
    grid-template-columns: 1fr;
}

@media (min-width: 769px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

`Breakpoint` can still be imported for JS conditional logic:

```tsx
import { Breakpoint } from "@lifesg/react-design-system/theme";

const isDesktop = window.innerWidth > Breakpoint["lg-min"];
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

---

## Shadow Tokens

`Shadow[...]` returns a CSS variable string. Use in `style={{ boxShadow: Shadow["sm-subtle"] }}`.

```tsx
import { Shadow } from "@lifesg/react-design-system/theme";

<div style={{ boxShadow: Shadow["sm-subtle"] }} />;
```

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

`Border` is a flat object of CSS variable strings. Import from `@lifesg/react-design-system/theme`.

```tsx
import { Border } from "@lifesg/react-design-system/theme";

// Individual properties
<div
    style={{
        borderWidth: Border["width-010"],
        borderStyle: Border.solid,
        borderColor: Colour.border,
    }}
/>

// Shorthand using template literal
<div style={{ border: `${Border["width-010"]} ${Border.solid} ${Colour.border}` }} />
```

There is no `Border.Util` in v4 — compose border properties manually using the tokens above.

### Token reference

| Token key   | Value | Common use                  |
| ----------- | ----- | --------------------------- |
| `width-005` | 0.5px | Hairline divider            |
| `width-010` | 1px   | Default input / card border |
| `width-020` | 2px   | Emphasis / selected border  |
| `width-040` | 4px   | Strong emphasis border      |
| `solid`     | solid | Border style                |

---

## Motion Tokens

`Motion[...]` returns a CSS variable string. Use in `style={{ transition: ... }}` or in CSS Modules.

```tsx
import { Motion } from "@lifesg/react-design-system/theme";

<button
    style={{
        transition: `background ${Motion["duration-250"]} ${Motion["ease-default"]}`,
    }}
/>;
```

For elements with dynamic height or width (e.g. expandable panels), use `react-spring` instead — CSS transitions cannot handle layout animation with dynamic content.

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
