# ProgressIndicator

Import: `import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator"`

## When to use

Use in multi-step forms or wizards to show the user's position within the flow.

## Usage

```tsx
import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator";

const steps = [
    { label: "Personal details" },
    { label: "Documents" },
    { label: "Review" },
];

<ProgressIndicator
    steps={steps}
    currentIndex={1}
    displayExtractor={(step) => step.label}
/>;
```

## Props

| Prop               | Type                    | Default | Description                                                                                              |
| ------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `steps` \*         | `T[]`                   | —       | Ordered list of step items to render as progress bars and labels.                                        |
| `currentIndex` \*  | `number`                | —       | Zero-based index of the current active step. All steps at or before this index are visually highlighted. |
| `displayExtractor` | `((item: T) => string)` | —       | Derives the display label for a step item.                                                               |
| `className`        | `string`                | —       | —                                                                                                        |
| `id`               | `string`                | —       | —                                                                                                        |

## Props

| Prop               | Type                    | Default | Description                                                                                              |
| ------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `steps` \*         | `T[]`                   | —       | Ordered list of step items to render as progress bars and labels.                                        |
| `currentIndex` \*  | `number`                | —       | Zero-based index of the current active step. All steps at or before this index are visually highlighted. |
| `displayExtractor` | `((item: T) => string)` | —       | Derives the display label for a step item.                                                               |
| `className`        | `string`                | —       | —                                                                                                        |
| `id`               | `string`                | —       | —                                                                                                        |

## Props

| Prop               | Type                    | Default | Description                                                                                              |
| ------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `steps` \*         | `T[]`                   | —       | Ordered list of step items to render as progress bars and labels.                                        |
| `currentIndex` \*  | `number`                | —       | Zero-based index of the current active step. All steps at or before this index are visually highlighted. |
| `displayExtractor` | `((item: T) => string)` | —       | Derives the display label for a step item.                                                               |
| `className`        | `string`                | —       | —                                                                                                        |
| `id`               | `string`                | —       | —                                                                                                        |

## Props

| Prop               | Type                    | Default | Description                                                                                              |
| ------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `steps` \*         | `T[]`                   | —       | Ordered list of step items to render as progress bars and labels.                                        |
| `currentIndex` \*  | `number`                | —       | Zero-based index of the current active step. All steps at or before this index are visually highlighted. |
| `displayExtractor` | `((item: T) => string)` | —       | Derives the display label for a step item.                                                               |
| `className`        | `string`                | —       | —                                                                                                        |
| `id`               | `string`                | —       | —                                                                                                        |

## Props

| Prop               | Type                    | Default | Description                                                                                              |
| ------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `steps` \*         | `T[]`                   | —       | Ordered list of step items to render as progress bars and labels.                                        |
| `currentIndex` \*  | `number`                | —       | Zero-based index of the current active step. All steps at or before this index are visually highlighted. |
| `displayExtractor` | `((item: T) => string)` | —       | Derives the display label for a step item.                                                               |
| `className`        | `string`                | —       | —                                                                                                        |
| `id`               | `string`                | —       | —                                                                                                        |

## Props

| Prop               | Type                    | Default | Description                                                                                              |
| ------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `steps` \*         | `T[]`                   | —       | Ordered list of step items to render as progress bars and labels.                                        |
| `currentIndex` \*  | `number`                | —       | Zero-based index of the current active step. All steps at or before this index are visually highlighted. |
| `displayExtractor` | `((item: T) => string)` | —       | Derives the display label for a step item.                                                               |
| `className`        | `string`                | —       | —                                                                                                        |
| `id`               | `string`                | —       | —                                                                                                        |

## Rules

-   `currentIndex` is zero-based — the first step is `0`.
-   Always provide `displayExtractor` when `steps` contains objects — without it, step labels will not render.
-   Update `currentIndex` as the user moves between steps.
-   Do not use `fadeColor` or `fadePosition` — these props are deprecated and have no effect in v3.

## Anti-patterns

-   Do not use ProgressIndicator on single-step pages.
-   Do not use it as a general progress bar for loading states — use a loading spinner or skeleton instead.
