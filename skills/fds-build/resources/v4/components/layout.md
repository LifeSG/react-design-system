# Layout

> v4 — CSS Modules replace styled-components. See SKILL-v4.md for setup.

Import: `import { Layout } from "@lifesg/react-design-system/layout"`

## Composition

```
Layout.Container type="grid"        ← responsive 12-col grid (desktop) / 8-col (mobile)
├── Layout.ColDiv xsCols lgCols     ← column span — always set xsCols
├── Layout.ColDiv xsCols lgCols
└── Layout.ColDiv xsCols lgCols

Layout.Container type="flex"        ← horizontal flexbox row
└── {children}

Layout.Container type="flex-column" ← vertical flexbox column
└── {children}
```

`Layout.Section` and `Layout.Content` share the same props as `Layout.Container` and can be used in place of it for semantic HTML structure. Never nest `Layout.Container` inside another `Layout.Container`. Always set `xsCols` on every `Layout.ColDiv` — never set only `lgCols`.

-   `Layout.ColDiv` — responsive grid column div

## Usage

```tsx
import { Layout } from "@lifesg/react-design-system/layout";

<Layout.Container type="grid">
    <Layout.ColDiv xsCols={8} lgCols={6}>
        Content
    </Layout.ColDiv>
</Layout.Container>;
```

| `type`          | Use case                         |
| --------------- | -------------------------------- |
| `"grid"`        | Responsive column grid (default) |
| `"flex"`        | Horizontal flexbox layout        |
| `"flex-column"` | Vertical flexbox layout          |

## Props — `ContainerProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `SectionProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ContentProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ColProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ColDivProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Breakpoints

| Breakpoint | Min width | Columns | Gutter | Device                |
| ---------- | --------- | ------- | ------ | --------------------- |
| `xxs`      | 0px       | 8       | 16px   | Smallest mobile       |
| `xs`       | 321px     | 8       | 16px   | Small mobile          |
| `sm`       | 376px     | 8       | 16px   | Mobile                |
| `md`       | 481px     | 8       | 16px   | Large mobile / tablet |
| `lg`       | 769px     | 12      | 32px   | Desktop               |
| `xl`       | 1201px    | 12      | 32px   | Large desktop         |
| `xxl`      | 1441px    | 12      | 32px   | Extra-large           |

### Common column widths

| Use case                             | `xsCols` | `lgCols` | `xlCols` |
| ------------------------------------ | -------- | -------- | -------- |
| Full width                           | 8        | 12       | —        |
| Full width (form progress indicator) | 12       | 12       | —        |
| Narrow content (forms)               | 12       | 9        | 8        |
| Half-width (2-up cards)              | 8        | 6        | —        |
| Third-width (3-up cards)             | 8        | 4        | —        |
| Quarter-width (4-up metrics)         | 8        | 6        | 3        |
| Sidebar                              | 8        | 3        | —        |
| Main + sidebar main                  | 8        | 9        | —        |

## Responsive styles

Use CSS Module classes for responsive styles in v4. The `MediaQuery` breakpoint body classes replace `@media` queries in CSS Modules.

```tsx
import styles from "./MyComponent.module.css";

<div className={styles.responsiveDiv}>...</div>;
```

```css
/* MyComponent.module.css */
.responsiveDiv {
    padding: var(--fds-spacing-16);
}

:global(body.fds-breakpoint-lg-min) .responsiveDiv {
    padding: var(--fds-spacing-32);
}
```

| CSS Module selector                        | Query type          | When it applies                  |
| ------------------------------------------ | ------------------- | -------------------------------- |
| `:global(body.fds-breakpoint-md-min) .cls` | `min-width: 481px`  | md and up (tablet+)              |
| `:global(body.fds-breakpoint-lg-min) .cls` | `min-width: 769px`  | lg and up (desktop+)             |
| `:global(body.fds-breakpoint-md-max) .cls` | `max-width: 768px`  | md and below (mobile only)       |
| `:global(body.fds-breakpoint-lg-max) .cls` | `max-width: 1200px` | lg and below (non-large-desktop) |

Design mobile-first — define base styles for mobile, then override with `MinWidth` for larger screens.

## Props — `ContainerProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `SectionProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ContentProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ColProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ColDivProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ContainerProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `SectionProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ContentProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ColProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ColDivProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ContainerProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `SectionProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ContentProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ColProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ColDivProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ContainerProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `SectionProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ContentProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ColProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ColDivProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ContainerProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `SectionProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ContentProps`

| Prop          | Type              | Default | Description                                               |
| ------------- | ----------------- | ------- | --------------------------------------------------------- |
| `type`        | `ContainerType`   | "flex"  | Display mode applied to the container.                    |
| `children` \* | `React.ReactNode` | —       | —                                                         |
| `stretch`     | `boolean`         | false   | Stretches the element to fill its container's full width. |

## Props — `ColProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props — `ColDivProps`

| Prop      | Type      | Default | Description                                                                                                                                      |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xxlCols` | `ColSpan` | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`  | `ColSpan` | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`  | `ColSpan` | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`  | `ColSpan` | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`  | `ColSpan` | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`  | `ColSpan` | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols` | `ColSpan` | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Rules

-   Use CSS Modules for component-level styles — do not use plain inline styles for layout concerns.
-   Use `:where(body.fds-breakpoint-{bp}-min)` selectors for responsive styles — never hardcoded pixel breakpoints.
-   Use CSS custom properties for spacing (e.g. `var(--fds-spacing-16)`) — never hardcode pixel values.

Grid rules:

-   Always use `type="grid"` on Container for responsive column layouts.
-   Always specify `xsCols` on ColDiv — mobile-first; never only `lgCols`.
-   Max `xsCols` is 8 (mobile/tablet), max `lgCols` is 12 (desktop).
-   Never nest `Layout.Container` inside another `Layout.Container`.
-   A column span applies to all larger viewports until overridden.
