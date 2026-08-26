# LinkList

Import: `import { LinkList } from "@lifesg/react-design-system/link-list"`

## When to use

Use to present a set of related links — related articles, resources, or quick-access shortcuts. Use `style="small"` for compact contexts such as sidebars or footnotes.

## Sub-components

### LinkListItemProps

| Prop                   | Type                                                   | Default | Description                                        |
| ---------------------- | ------------------------------------------------------ | ------- | -------------------------------------------------- |
| `title`                | `string`                                               | —       | Link label — required                              |
| `description`          | `string`                                               | —       | First-level supporting text below the title        |
| `secondaryDescription` | `string`                                               | —       | Second-level supporting text below the description |
| `options`              | `T`                                                    | —       | Custom properties to pass to the item              |
| `onClick`              | `(event: React.MouseEvent<HTMLAnchorElement>) => void` | —       | Per-item click handler — overrides `onItemClick`   |
| `data-testid`          | `string`                                               | —       | Test identifier for the item                       |

Inherits `HTMLAnchorElement` attributes (e.g. `href`, `target`).

### Custom labels

| Prop       | Type     | Default       | Description                    |
| ---------- | -------- | ------------- | ------------------------------ |
| `viewMore` | `string` | `"View more"` | Label for the show-more button |
| `viewLess` | `string` | `"View less"` | Label for the show-less button |

## Variants

| `style`     | Usage                                                  |
| ----------- | ------------------------------------------------------ |
| `"default"` | Standard size — use in main content areas              |
| `"small"`   | Compact — use in sidebars, footnotes, or dense layouts |

| `loadMode` | Usage                                                         |
| ---------- | ------------------------------------------------------------- |
| `"eager"`  | All items loaded upfront; use `maxShown` to collapse the list |
| `"lazy"`   | Items fetched on demand; requires `loadMore` and `onLoadMore` |

## Usage

```tsx
import { LinkList } from "@lifesg/react-design-system/link-list";

<LinkList
    items={[
        {
            title: "Apply for a grant",
            description: "Find out if you qualify.",
            href: "/grants/apply",
        },
        { title: "Check application status", href: "/grants/status" },
        { title: "Download forms", href: "/grants/forms" },
    ]}
    maxShown={2}
/>;
```

## Props

| Prop           | Type                                                                               | Default     | Description                                       |
| -------------- | ---------------------------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| `items`        | `LinkListItemProps<T>[]`                                                           | —           | Array of link items — required                    |
| `style`        | `"default"` \| `"small"`                                                           | `"default"` | Text size style                                   |
| `loadMode`     | `"eager"` \| `"lazy"`                                                              | `"eager"`   | Loading mode for items                            |
| `maxShown`     | `number`                                                                           | —           | Max items shown before collapse (eager mode only) |
| `loadMore`     | `boolean`                                                                          | —           | Whether more items can be lazy-loaded (lazy mode) |
| `onLoadMore`   | `() => void \| Promise<void>`                                                      | —           | Callback when "View more" is clicked (lazy mode)  |
| `onItemClick`  | `(item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement>) => void` | —           | Component-level click handler for all items       |
| `customLabels` | `object`                                                                           | —           | Override "View more" / "View less" button labels  |
| `className`    | `string`                                                                           | —           | Class selector                                    |
| `data-testid`  | `string`                                                                           | —           | Test identifier                                   |

## Rules

-   Use `maxShown` when the list has many items to avoid overwhelming the user on first load (eager mode).
-   In `"lazy"` mode, both `loadMore` and `onLoadMore` are required.
-   `onItemClick` applies to all items; per-item `onClick` in `LinkListItemProps` overrides it for that item.
-   Use per-item `onClick` when individual items need different handling; use `onItemClick` for a uniform handler across all items.
-   Use `description` to give users enough context to choose the right link without clicking.

## Anti-patterns

-   Using lazy mode without providing `onLoadMore` — the "View more" button will be non-functional.
-   Omitting `description` when link titles are ambiguous.
-   Using LinkList for non-link content — use a list or table instead.
