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

## Props — `FadeColorSet`

| Prop    | Type       | Default | Description                                      |
| ------- | ---------- | ------- | ------------------------------------------------ |
| `left`  | `string[]` | —       | Gradient color stops for the left fade overlay.  |
| `right` | `string[]` | —       | Gradient color stops for the right fade overlay. |

## Props — `BreadcrumbProps`

| Prop             | Type                                              | Default      | Description                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links` \*       | `React.AnchorHTMLAttributes<HTMLAnchorElement>[]` | —            | Navigation items rendered as the breadcrumb trail. The last item is treated as the current page (`aria-current="page"`) and is not clickable. Items without `href` render as non-clickable labels. Items without `children` are skipped. |
| `fadeColor`      | `string[] \| FadeColorSet`                        | —            | Gradient color stops for the fade overlays shown on horizontal scroll. Pass a `string[]` to apply the same gradient to both edges, or a `FadeColorSet` to configure each edge independently.                                             |
| `fadePosition`   | `FadePosition`                                    | "both"       | Which edges display fade overlays when content overflows.                                                                                                                                                                                |
| `separatorStyle` | `SeparatorStyle`                                  | "chevron"    | Visual separator between breadcrumb items.                                                                                                                                                                                               |
| `className`      | `string`                                          | —            | —                                                                                                                                                                                                                                        |
| `id`             | `string`                                          | "breadcrumb" | HTML `id` for the wrapper element.                                                                                                                                                                                                       |

## Props — `FadeColorSet`

| Prop    | Type       | Default | Description                                      |
| ------- | ---------- | ------- | ------------------------------------------------ |
| `left`  | `string[]` | —       | Gradient color stops for the left fade overlay.  |
| `right` | `string[]` | —       | Gradient color stops for the right fade overlay. |

## Props — `BreadcrumbProps`

| Prop             | Type                                              | Default      | Description                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links` \*       | `React.AnchorHTMLAttributes<HTMLAnchorElement>[]` | —            | Navigation items rendered as the breadcrumb trail. The last item is treated as the current page (`aria-current="page"`) and is not clickable. Items without `href` render as non-clickable labels. Items without `children` are skipped. |
| `fadeColor`      | `string[] \| FadeColorSet`                        | —            | Gradient color stops for the fade overlays shown on horizontal scroll. Pass a `string[]` to apply the same gradient to both edges, or a `FadeColorSet` to configure each edge independently.                                             |
| `fadePosition`   | `FadePosition`                                    | "both"       | Which edges display fade overlays when content overflows.                                                                                                                                                                                |
| `separatorStyle` | `SeparatorStyle`                                  | "chevron"    | Visual separator between breadcrumb items.                                                                                                                                                                                               |
| `className`      | `string`                                          | —            | —                                                                                                                                                                                                                                        |
| `id`             | `string`                                          | "breadcrumb" | HTML `id` for the wrapper element.                                                                                                                                                                                                       |

## Props — `FadeColorSet`

| Prop    | Type       | Default | Description                                      |
| ------- | ---------- | ------- | ------------------------------------------------ |
| `left`  | `string[]` | —       | Gradient color stops for the left fade overlay.  |
| `right` | `string[]` | —       | Gradient color stops for the right fade overlay. |

## Props — `BreadcrumbProps`

| Prop             | Type                                              | Default      | Description                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links` \*       | `React.AnchorHTMLAttributes<HTMLAnchorElement>[]` | —            | Navigation items rendered as the breadcrumb trail. The last item is treated as the current page (`aria-current="page"`) and is not clickable. Items without `href` render as non-clickable labels. Items without `children` are skipped. |
| `fadeColor`      | `string[] \| FadeColorSet`                        | —            | Gradient color stops for the fade overlays shown on horizontal scroll. Pass a `string[]` to apply the same gradient to both edges, or a `FadeColorSet` to configure each edge independently.                                             |
| `fadePosition`   | `FadePosition`                                    | "both"       | Which edges display fade overlays when content overflows.                                                                                                                                                                                |
| `separatorStyle` | `SeparatorStyle`                                  | "chevron"    | Visual separator between breadcrumb items.                                                                                                                                                                                               |
| `className`      | `string`                                          | —            | —                                                                                                                                                                                                                                        |
| `id`             | `string`                                          | "breadcrumb" | HTML `id` for the wrapper element.                                                                                                                                                                                                       |

## Props — `FadeColorSet`

| Prop    | Type       | Default | Description                                      |
| ------- | ---------- | ------- | ------------------------------------------------ |
| `left`  | `string[]` | —       | Gradient color stops for the left fade overlay.  |
| `right` | `string[]` | —       | Gradient color stops for the right fade overlay. |

## Props — `BreadcrumbProps`

| Prop             | Type                                              | Default      | Description                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links` \*       | `React.AnchorHTMLAttributes<HTMLAnchorElement>[]` | —            | Navigation items rendered as the breadcrumb trail. The last item is treated as the current page (`aria-current="page"`) and is not clickable. Items without `href` render as non-clickable labels. Items without `children` are skipped. |
| `fadeColor`      | `string[] \| FadeColorSet`                        | —            | Gradient color stops for the fade overlays shown on horizontal scroll. Pass a `string[]` to apply the same gradient to both edges, or a `FadeColorSet` to configure each edge independently.                                             |
| `fadePosition`   | `FadePosition`                                    | "both"       | Which edges display fade overlays when content overflows.                                                                                                                                                                                |
| `separatorStyle` | `SeparatorStyle`                                  | "chevron"    | Visual separator between breadcrumb items.                                                                                                                                                                                               |
| `className`      | `string`                                          | —            | —                                                                                                                                                                                                                                        |
| `id`             | `string`                                          | "breadcrumb" | HTML `id` for the wrapper element.                                                                                                                                                                                                       |

## Props — `FadeColorSet`

| Prop    | Type       | Default | Description                                      |
| ------- | ---------- | ------- | ------------------------------------------------ |
| `left`  | `string[]` | —       | Gradient color stops for the left fade overlay.  |
| `right` | `string[]` | —       | Gradient color stops for the right fade overlay. |

## Props — `BreadcrumbProps`

| Prop             | Type                                              | Default      | Description                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links` \*       | `React.AnchorHTMLAttributes<HTMLAnchorElement>[]` | —            | Navigation items rendered as the breadcrumb trail. The last item is treated as the current page (`aria-current="page"`) and is not clickable. Items without `href` render as non-clickable labels. Items without `children` are skipped. |
| `fadeColor`      | `string[] \| FadeColorSet`                        | —            | Gradient color stops for the fade overlays shown on horizontal scroll. Pass a `string[]` to apply the same gradient to both edges, or a `FadeColorSet` to configure each edge independently.                                             |
| `fadePosition`   | `FadePosition`                                    | "both"       | Which edges display fade overlays when content overflows.                                                                                                                                                                                |
| `separatorStyle` | `SeparatorStyle`                                  | "chevron"    | Visual separator between breadcrumb items.                                                                                                                                                                                               |
| `className`      | `string`                                          | —            | —                                                                                                                                                                                                                                        |
| `id`             | `string`                                          | "breadcrumb" | HTML `id` for the wrapper element.                                                                                                                                                                                                       |

## Props — `FadeColorSet`

| Prop    | Type       | Default | Description                                      |
| ------- | ---------- | ------- | ------------------------------------------------ |
| `left`  | `string[]` | —       | Gradient color stops for the left fade overlay.  |
| `right` | `string[]` | —       | Gradient color stops for the right fade overlay. |

## Props — `BreadcrumbProps`

| Prop             | Type                                              | Default      | Description                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links` \*       | `React.AnchorHTMLAttributes<HTMLAnchorElement>[]` | —            | Navigation items rendered as the breadcrumb trail. The last item is treated as the current page (`aria-current="page"`) and is not clickable. Items without `href` render as non-clickable labels. Items without `children` are skipped. |
| `fadeColor`      | `string[] \| FadeColorSet`                        | —            | Gradient color stops for the fade overlays shown on horizontal scroll. Pass a `string[]` to apply the same gradient to both edges, or a `FadeColorSet` to configure each edge independently.                                             |
| `fadePosition`   | `FadePosition`                                    | "both"       | Which edges display fade overlays when content overflows.                                                                                                                                                                                |
| `separatorStyle` | `SeparatorStyle`                                  | "chevron"    | Visual separator between breadcrumb items.                                                                                                                                                                                               |
| `className`      | `string`                                          | —            | —                                                                                                                                                                                                                                        |
| `id`             | `string`                                          | "breadcrumb" | HTML `id` for the wrapper element.                                                                                                                                                                                                       |

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
