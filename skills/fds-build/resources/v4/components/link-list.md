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

| Prop                   | Type                                                        | Default | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `title` \*             | `string`                                                    | —       | Primary label displayed as the link text.                                                            |
| `description`          | `string`                                                    | —       | Secondary text shown below the title.                                                                |
| `secondaryDescription` | `JSX.Element`                                               | —       | Additional content rendered below the description. Accepts a JSX element for rich secondary content. |
| `options`              | `T`                                                         | —       | Arbitrary custom data passed through to the `onItemClick` callback.                                  |
| `onClick`              | `\| ((event: React.MouseEvent<HTMLAnchorElement>) => void)` | —       | Called when an item is clicked. This overrides the `onItemClick` event handler.                      |

## Props

| Prop                   | Type                                                        | Default | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `title` \*             | `string`                                                    | —       | Primary label displayed as the link text.                                                            |
| `description`          | `string`                                                    | —       | Secondary text shown below the title.                                                                |
| `secondaryDescription` | `JSX.Element`                                               | —       | Additional content rendered below the description. Accepts a JSX element for rich secondary content. |
| `options`              | `T`                                                         | —       | Arbitrary custom data passed through to the `onItemClick` callback.                                  |
| `onClick`              | `\| ((event: React.MouseEvent<HTMLAnchorElement>) => void)` | —       | Called when an item is clicked. This overrides the `onItemClick` event handler.                      |

## Props — `LinkListItemProps`

| Prop                   | Type                                                        | Default | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `title` \*             | `string`                                                    | —       | Primary label displayed as the link text.                                                            |
| `description`          | `string`                                                    | —       | Secondary text shown below the title.                                                                |
| `secondaryDescription` | `JSX.Element`                                               | —       | Additional content rendered below the description. Accepts a JSX element for rich secondary content. |
| `options`              | `T`                                                         | —       | Arbitrary custom data passed through to the `onItemClick` callback.                                  |
| `onClick`              | `\| ((event: React.MouseEvent<HTMLAnchorElement>) => void)` | —       | Called when an item is clicked. This overrides the `onItemClick` event handler.                      |

## Props — `LinkListBaseProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |

## Props — `LinkListEagerProps`

| Prop       | Type      | Default | Description                                                                                                                                                                               |
| ---------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loadMode` | `"eager"` | —       | When `"eager"`, all items are rendered immediately.                                                                                                                                       |
| `maxShown` | `number`  | —       | Maximum number of items shown before the list is truncated. Items beyond this count are hidden until the user activates the toggle. When omitted, all items are shown without truncation. |

## Props — `LinkListLazyProps`

| Prop            | Type                          | Default | Description                                                                               |
| --------------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `loadMode` \*   | `"lazy"`                      | —       | When `"lazy"`, items are loaded on demand.                                                |
| `loadMore` \*   | `boolean`                     | —       | Whether more items are available to load. When `false`, the "View more" button is hidden. |
| `onLoadMore` \* | `() => void \| Promise<void>` | —       | Called when the user activates the "View more" button.                                    |

## Props — `LinkListProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |
| `loadMode`     | `"eager"`                                                                                 | —         | When `"eager"`, all items are rendered immediately.                                                   |

## Props — `LinkListItemProps`

| Prop                   | Type                                                        | Default | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `title` \*             | `string`                                                    | —       | Primary label displayed as the link text.                                                            |
| `description`          | `string`                                                    | —       | Secondary text shown below the title.                                                                |
| `secondaryDescription` | `JSX.Element`                                               | —       | Additional content rendered below the description. Accepts a JSX element for rich secondary content. |
| `options`              | `T`                                                         | —       | Arbitrary custom data passed through to the `onItemClick` callback.                                  |
| `onClick`              | `\| ((event: React.MouseEvent<HTMLAnchorElement>) => void)` | —       | Called when an item is clicked. This overrides the `onItemClick` event handler.                      |

## Props — `LinkListBaseProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |

## Props — `LinkListEagerProps`

| Prop       | Type      | Default | Description                                                                                                                                                                               |
| ---------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loadMode` | `"eager"` | —       | When `"eager"`, all items are rendered immediately.                                                                                                                                       |
| `maxShown` | `number`  | —       | Maximum number of items shown before the list is truncated. Items beyond this count are hidden until the user activates the toggle. When omitted, all items are shown without truncation. |

## Props — `LinkListLazyProps`

| Prop            | Type                          | Default | Description                                                                               |
| --------------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `loadMode` \*   | `"lazy"`                      | —       | When `"lazy"`, items are loaded on demand.                                                |
| `loadMore` \*   | `boolean`                     | —       | Whether more items are available to load. When `false`, the "View more" button is hidden. |
| `onLoadMore` \* | `() => void \| Promise<void>` | —       | Called when the user activates the "View more" button.                                    |

## Props — `LinkListProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |
| `loadMode`     | `"eager"`                                                                                 | —         | When `"eager"`, all items are rendered immediately.                                                   |

## Props — `LinkListItemProps`

| Prop                   | Type                                                        | Default | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `title` \*             | `string`                                                    | —       | Primary label displayed as the link text.                                                            |
| `description`          | `string`                                                    | —       | Secondary text shown below the title.                                                                |
| `secondaryDescription` | `JSX.Element`                                               | —       | Additional content rendered below the description. Accepts a JSX element for rich secondary content. |
| `options`              | `T`                                                         | —       | Arbitrary custom data passed through to the `onItemClick` callback.                                  |
| `onClick`              | `\| ((event: React.MouseEvent<HTMLAnchorElement>) => void)` | —       | Called when an item is clicked. This overrides the `onItemClick` event handler.                      |

## Props — `LinkListBaseProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |

## Props — `LinkListEagerProps`

| Prop       | Type      | Default | Description                                                                                                                                                                               |
| ---------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loadMode` | `"eager"` | —       | When `"eager"`, all items are rendered immediately.                                                                                                                                       |
| `maxShown` | `number`  | —       | Maximum number of items shown before the list is truncated. Items beyond this count are hidden until the user activates the toggle. When omitted, all items are shown without truncation. |

## Props — `LinkListLazyProps`

| Prop            | Type                          | Default | Description                                                                               |
| --------------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `loadMode` \*   | `"lazy"`                      | —       | When `"lazy"`, items are loaded on demand.                                                |
| `loadMore` \*   | `boolean`                     | —       | Whether more items are available to load. When `false`, the "View more" button is hidden. |
| `onLoadMore` \* | `() => void \| Promise<void>` | —       | Called when the user activates the "View more" button.                                    |

## Props — `LinkListProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |
| `loadMode`     | `"eager"`                                                                                 | —         | When `"eager"`, all items are rendered immediately.                                                   |

## Props — `LinkListItemProps`

| Prop                   | Type                                                        | Default | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `title` \*             | `string`                                                    | —       | Primary label displayed as the link text.                                                            |
| `description`          | `string`                                                    | —       | Secondary text shown below the title.                                                                |
| `secondaryDescription` | `JSX.Element`                                               | —       | Additional content rendered below the description. Accepts a JSX element for rich secondary content. |
| `options`              | `T`                                                         | —       | Arbitrary custom data passed through to the `onItemClick` callback.                                  |
| `onClick`              | `\| ((event: React.MouseEvent<HTMLAnchorElement>) => void)` | —       | Called when an item is clicked. This overrides the `onItemClick` event handler.                      |

## Props — `LinkListBaseProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |

## Props — `LinkListEagerProps`

| Prop       | Type      | Default | Description                                                                                                                                                                               |
| ---------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loadMode` | `"eager"` | —       | When `"eager"`, all items are rendered immediately.                                                                                                                                       |
| `maxShown` | `number`  | —       | Maximum number of items shown before the list is truncated. Items beyond this count are hidden until the user activates the toggle. When omitted, all items are shown without truncation. |

## Props — `LinkListLazyProps`

| Prop            | Type                          | Default | Description                                                                               |
| --------------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `loadMode` \*   | `"lazy"`                      | —       | When `"lazy"`, items are loaded on demand.                                                |
| `loadMore` \*   | `boolean`                     | —       | Whether more items are available to load. When `false`, the "View more" button is hidden. |
| `onLoadMore` \* | `() => void \| Promise<void>` | —       | Called when the user activates the "View more" button.                                    |

## Props — `LinkListProps`

| Prop           | Type                                                                                      | Default   | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `items` \*     | `LinkListItemProps<T>[]`                                                                  | —         | The list of link items to render.                                                                     |
| `style`        | `LinkListStyle`                                                                           | "default" | Visual size variant applied to all items.                                                             |
| `className`    | `string`                                                                                  | —         | —                                                                                                     |
| `onItemClick`  | `\| (( item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement> ) => void)` | —         | Component-level click handler called for every item click, unless the item defines its own `onClick`. |
| `customLabels` | `\| { viewMore?: string; viewLess?: string; }`                                            | —         | Overrides the default toggle button labels.                                                           |
| `loadMode`     | `"eager"`                                                                                 | —         | When `"eager"`, all items are rendered immediately.                                                   |

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
