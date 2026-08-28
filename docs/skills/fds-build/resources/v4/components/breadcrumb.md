# Breadcrumb

Import: `import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb"`

## When to use

Use on pages within a multi-level hierarchy to help users navigate to parent pages.

Do not use on:

-   The home page
-   Pages with no parent
-   Focused flows such as forms or wizards

## Variants

| `separatorStyle`      | When to use              |
| --------------------- | ------------------------ |
| `"chevron"` (default) | Standard pages           |
| `"slash"`             | Alternative visual style |

## Usage

```tsx
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";

<Breadcrumb
    links={[
        { children: "Home", href: "/" },
        { children: "Services", href: "/services" },
        { children: "Apply" },
    ]}
/>;
```

## Props

| Prop             | Type                          | Default     | Description                                                                                              |
| ---------------- | ----------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `links`          | `HTMLAnchorElement[]`         | —           | Breadcrumb items — **required**. Each item accepts standard anchor attributes (`children`, `href`, etc.) |
| `separatorStyle` | `"chevron" \| "slash"`        | `"chevron"` | Separator style between items                                                                            |
| `fadeColor`      | `string[] \| FadeColorSet`    | —           | Gradient color for scroll fade on overflow; set to match page background                                 |
| `fadePosition`   | `"left" \| "right" \| "both"` | `"both"`    | Which edges show the scroll fade                                                                         |
| `itemStyle`      | `CSS-JS string`               | —           | Custom style applied to each breadcrumb item                                                             |
| `id`             | `string`                      | —           | Unique identifier                                                                                        |
| `className`      | `string`                      | —           | Class selector                                                                                           |
| `data-testid`    | `string`                      | —           | Test identifier                                                                                          |

### FadeColorSet

| Prop    | Type       | Description                 |
| ------- | ---------- | --------------------------- |
| `left`  | `string[]` | Color(s) for the left fade  |
| `right` | `string[]` | Color(s) for the right fade |

## Rules

-   Always place the current page last in `links` — omit `href` on the last item.
-   Keep breadcrumb trails to 4 items or fewer; 5 or more items automatically collapse the middle into an overflow menu.
-   Set `fadeColor` to match the page background so the horizontal scroll fade blends correctly on mobile.
-   The last item in `links` is rendered as the current page (non-clickable, `aria-current="page"`). Omit `href` on the last item.
-   When 5 or more items are present, middle items automatically collapse into an overflow menu.
-   On mobile, breadcrumbs scroll horizontally with a fade effect at the edges controlled by `fadeColor` and `fadePosition`.

## Anti-patterns

-   Do not add `href` to the last breadcrumb item — it represents the current page and must not be clickable.
-   Do not use breadcrumbs on single-level or flat navigation structures.
-   Do not use breadcrumbs inside forms or wizard flows.
