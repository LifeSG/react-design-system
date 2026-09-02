# Pill

Import: `import { Pill } from "@lifesg/react-design-system/pill"`

## When to use

Use to communicate a status — application state, approval outcome, or processing stage. For categories, filters, or tagging, use Tag instead.

## Variants

| `type`      | Usage                                                    |
| ----------- | -------------------------------------------------------- |
| `"outline"` | Subtle, secondary label — default for most uses          |
| `"solid"`   | Higher emphasis — use when the status needs to stand out |

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
import { Pill } from "@lifesg/react-design-system/pill";

<Pill type="outline" colorType="green">
    Approved
</Pill>;
```

## Props

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `type` \*   | `PillType`      | —       | Visual style variant for the pill.   |
| `colorType` | `PillColorType` | "black" | Color theme applied to the pill.     |
| `icon`      | `JSX.Element`   | —       | Icon rendered before the label text. |

## Props

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `type` \*   | `PillType`      | —       | Visual style variant for the pill.   |
| `colorType` | `PillColorType` | "black" | Color theme applied to the pill.     |
| `icon`      | `JSX.Element`   | —       | Icon rendered before the label text. |

## Props — `PillProps`

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `type` \*   | `PillType`      | —       | Visual style variant for the pill.   |
| `colorType` | `PillColorType` | "black" | Color theme applied to the pill.     |
| `icon`      | `JSX.Element`   | —       | Icon rendered before the label text. |

## Props — `PillProps`

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `type` \*   | `PillType`      | —       | Visual style variant for the pill.   |
| `colorType` | `PillColorType` | "black" | Color theme applied to the pill.     |
| `icon`      | `JSX.Element`   | —       | Icon rendered before the label text. |

## Props — `PillProps`

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `type` \*   | `PillType`      | —       | Visual style variant for the pill.   |
| `colorType` | `PillColorType` | "black" | Color theme applied to the pill.     |
| `icon`      | `JSX.Element`   | —       | Icon rendered before the label text. |

## Props — `PillProps`

| Prop        | Type            | Default | Description                          |
| ----------- | --------------- | ------- | ------------------------------------ |
| `type` \*   | `PillType`      | —       | Visual style variant for the pill.   |
| `colorType` | `PillColorType` | "black" | Color theme applied to the pill.     |
| `icon`      | `JSX.Element`   | —       | Icon rendered before the label text. |

## Rules

-   Use color semantically — do not use `"red"` for non-error states.
-   Use `"solid"` sparingly — reserve for statuses that need emphasis.
-   Keep label text to 1–2 words — text does not wrap inside a pill.
-   Pill is a static, non-interactive label — it does not accept `onClick`. Use Tag with `interactive` for clickable labels.

## Anti-patterns

-   Using Pill for categories or filters — use Tag instead.
-   Using `"red"` for non-error states.
-   Labels longer than 2–3 words — text overflow is not handled.
