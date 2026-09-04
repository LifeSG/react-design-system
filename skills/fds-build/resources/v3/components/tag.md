# Tag

Import: `import { Tag } from "@lifesg/react-design-system/tag"`

## When to use

Use to label categories, apply filters, or tag items. Can be static or interactive — set `interactive` to render as a button for toggleable filters or selectable categories. For status labels, use Pill instead.

## Variants

| `type`      | Usage                                                 |
| ----------- | ----------------------------------------------------- |
| `"outline"` | Subtle, secondary label — default for most uses       |
| `"solid"`   | Higher emphasis — use when the tag needs to stand out |

| `colorType` | Semantic use                  |
| ----------- | ----------------------------- |
| `"green"`   | Success, active, approved     |
| `"red"`     | Error, rejected, danger       |
| `"yellow"`  | Warning, pending, in progress |
| `"blue"`    | Informational                 |
| `"grey"`    | Neutral, inactive, draft      |
| `"primary"` | Theme primary color           |
| `"black"`   | Default, no semantic meaning  |

## Usage

```tsx
import { Tag } from "@lifesg/react-design-system/tag";

{
    /* Static category tag */
}
<Tag type="outline" colorType="blue">
    Health
</Tag>;

{
    /* Interactive filter tag */
}
<Tag type="solid" colorType="primary" interactive onClick={() => {}}>
    Finance
</Tag>;
```

## Props

| Prop           | Type                | Default | Description                                                                                                                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*      | `TagType`           | —       | Visual style variant.                                                                                                                                |
| `colorType`    | `TagColorType`      | "black" | Color theme applied to the tag.                                                                                                                      |
| `icon`         | `JSX.Element`       | —       | Optional icon rendered alongside the label. The position is controlled by `iconPosition`.                                                            |
| `iconPosition` | `"left" \| "right"` | "left"  | Position of the icon relative to the label text.                                                                                                     |
| `interactive`  | `boolean`           | false   | When `true`, renders the tag as a `<button>` element to support click and keyboard interactions. When `false`, renders as a non-interactive `<div>`. |

## Props

| Prop           | Type                | Default | Description                                                                                                                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*      | `TagType`           | —       | Visual style variant.                                                                                                                                |
| `colorType`    | `TagColorType`      | "black" | Color theme applied to the tag.                                                                                                                      |
| `icon`         | `JSX.Element`       | —       | Optional icon rendered alongside the label. The position is controlled by `iconPosition`.                                                            |
| `iconPosition` | `"left" \| "right"` | "left"  | Position of the icon relative to the label text.                                                                                                     |
| `interactive`  | `boolean`           | false   | When `true`, renders the tag as a `<button>` element to support click and keyboard interactions. When `false`, renders as a non-interactive `<div>`. |

## Props — `TagProps`

| Prop           | Type                | Default | Description                                                                                                                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*      | `TagType`           | —       | Visual style variant.                                                                                                                                |
| `colorType`    | `TagColorType`      | "black" | Color theme applied to the tag.                                                                                                                      |
| `icon`         | `JSX.Element`       | —       | Optional icon rendered alongside the label. The position is controlled by `iconPosition`.                                                            |
| `iconPosition` | `"left" \| "right"` | "left"  | Position of the icon relative to the label text.                                                                                                     |
| `interactive`  | `boolean`           | false   | When `true`, renders the tag as a `<button>` element to support click and keyboard interactions. When `false`, renders as a non-interactive `<div>`. |

## Props — `TagProps`

| Prop           | Type                | Default | Description                                                                                                                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*      | `TagType`           | —       | Visual style variant.                                                                                                                                |
| `colorType`    | `TagColorType`      | "black" | Color theme applied to the tag.                                                                                                                      |
| `icon`         | `JSX.Element`       | —       | Optional icon rendered alongside the label. The position is controlled by `iconPosition`.                                                            |
| `iconPosition` | `"left" \| "right"` | "left"  | Position of the icon relative to the label text.                                                                                                     |
| `interactive`  | `boolean`           | false   | When `true`, renders the tag as a `<button>` element to support click and keyboard interactions. When `false`, renders as a non-interactive `<div>`. |

## Props — `TagProps`

| Prop           | Type                | Default | Description                                                                                                                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*      | `TagType`           | —       | Visual style variant.                                                                                                                                |
| `colorType`    | `TagColorType`      | "black" | Color theme applied to the tag.                                                                                                                      |
| `icon`         | `JSX.Element`       | —       | Optional icon rendered alongside the label. The position is controlled by `iconPosition`.                                                            |
| `iconPosition` | `"left" \| "right"` | "left"  | Position of the icon relative to the label text.                                                                                                     |
| `interactive`  | `boolean`           | false   | When `true`, renders the tag as a `<button>` element to support click and keyboard interactions. When `false`, renders as a non-interactive `<div>`. |

## Props — `TagProps`

| Prop           | Type                | Default | Description                                                                                                                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*      | `TagType`           | —       | Visual style variant.                                                                                                                                |
| `colorType`    | `TagColorType`      | "black" | Color theme applied to the tag.                                                                                                                      |
| `icon`         | `JSX.Element`       | —       | Optional icon rendered alongside the label. The position is controlled by `iconPosition`.                                                            |
| `iconPosition` | `"left" \| "right"` | "left"  | Position of the icon relative to the label text.                                                                                                     |
| `interactive`  | `boolean`           | false   | When `true`, renders the tag as a `<button>` element to support click and keyboard interactions. When `false`, renders as a non-interactive `<div>`. |

## Rules

-   When `interactive` is `true`, the component renders as a `<button>` with an extended touch target on mobile.
-   Always pair `interactive` with `onClick` — interactive tags are larger on mobile to extend the touch target.
-   Use color semantically — do not use `"red"` for non-error states.
-   Keep label text short — text does not wrap inside a tag.
-   Use Tag for categories, filters, and tagging — use Pill for statuses.

## Anti-patterns

-   Using Tag for status labels — use Pill instead.
-   Setting `interactive` without providing an `onClick` handler.
-   Using `"red"` for non-error states.
