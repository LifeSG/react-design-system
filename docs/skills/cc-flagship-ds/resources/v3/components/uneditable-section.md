# UneditableSection

Import: `import { UneditableSection } from "@lifesg/react-design-system/uneditable-section"`

## When to use

-   Displaying read-only label/value pairs on summary or review screens.
-   Showing retrieved or pre-filled data the user cannot edit.

## Sub-components

-   `UneditableSection.ItemSection` — wraps a group of items (extends `HTMLUListElement`)
-   `UneditableSection.Item` — individual label/value item

## Usage

```tsx
import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";

<UneditableSection
    title="Personal details"
    items={[
        { label: "Full name", value: "Jane Tan", displayWidth: "half" },
        { label: "Date of birth", value: "1 Jan 1990", displayWidth: "half" },
        { label: "Address", value: "123 Example Road, Singapore 123456" },
    ]}
/>;
```

## Props

### UneditableSection

| Prop            | Type                                         | Default | Description                                        |
| --------------- | -------------------------------------------- | ------- | -------------------------------------------------- |
| `items`         | `UneditableSectionItemProps[]`               | —       | Items displayed in label/value format              |
| `title`         | `string`                                     | —       | Section title (rendered as `Text.H3`)              |
| `description`   | `string`                                     | —       | Section description (rendered as `Text.Body`)      |
| `topSection`    | `JSX.Element`                                | —       | Custom section rendered above the items            |
| `bottomSection` | `JSX.Element`                                | —       | Custom section rendered below the items            |
| `children`      | `JSX.Element \| JSX.Element[]`               | —       | Full body; enables custom composition              |
| `background`    | `boolean`                                    | `true`  | Whether a background is rendered                   |
| `stretch`       | `boolean`                                    | —       | Contents take full width of the section            |
| `fullWidth`     | `boolean`                                    | —       | Removes default spacing/grid from `Layout.Content` |
| `onMask`        | `(item: UneditableSectionItemProps) => void` | —       | Called when the mask icon is clicked               |
| `onUnmask`      | `(item: UneditableSectionItemProps) => void` | —       | Called when the unmask icon is clicked             |
| `onTryAgain`    | `(item: UneditableSectionItemProps) => void` | —       | Called when "Try again?" indicator is clicked      |
| `id`            | `string`                                     | —       | Unique id of the component                         |
| `className`     | `string`                                     | —       | Class selector of the component                    |
| `data-testid`   | `string`                                     | —       | Test identifier of the component                   |

### UneditableSection.ItemSection

Inherits all props from `HTMLUListElement`.

| Prop      | Type      | Default | Description                                       |
| --------- | --------- | ------- | ------------------------------------------------- |
| `stretch` | `boolean` | —       | Contents take full width of the UneditableSection |

### UneditableSectionItemProps

| Prop                | Type                        | Default  | Description                                                 |
| ------------------- | --------------------------- | -------- | ----------------------------------------------------------- |
| `label` \*          | `string`                    | —        | Label of the item                                           |
| `value` \*          | `string \| React.ReactNode` | —        | Value of the item; masking only works for string values     |
| `displayWidth`      | `"half" \| "full"`          | `"full"` | Column span of the item                                     |
| `id`                | `string`                    | —        | Unique identifier of the item                               |
| `maskRange`         | `number[]`                  | —        | [start, end] index range to mask                            |
| `unmaskRange`       | `number[]`                  | —        | [start, end] index range to NOT mask                        |
| `maskRegex`         | `RegExp`                    | —        | Regex matched content replaced with `maskChar`              |
| `maskTransformer`   | `(value) => string`         | —        | Function to transform the value                             |
| `maskChar`          | `string`                    | `•`      | Character used for masking                                  |
| `maskState`         | `"masked" \| "unmasked"`    | —        | If undefined, no mask/unmask controls are rendered          |
| `maskLoadingState`  | `"loading" \| "fail"`       | —        | Loading state for mask/unmask action                        |
| `disableMaskUnmask` | `boolean`                   | —        | Value is masked/unmasked but no indicator is rendered       |
| `alert`             | `AlertProps`                | —        | Alert rendered under the section item                       |
| `onMask`            | `() => void`                | —        | Called when mask icon is clicked (on Item sub-component)    |
| `onUnmask`          | `() => void`                | —        | Called when unmask icon is clicked (on Item sub-component)  |
| `onTryAgain`        | `() => void`                | —        | Called when "Try again?" is clicked (on Item sub-component) |

`*` = required

## Rules

-   Always supply `items` with a `label` and `value` for each field.
-   Use `displayWidth: "half"` for short values (names, dates, codes) to show two per row; omit for long values.
-   Show `"—"` for any unanswered or empty field rather than leaving `value` blank.
-   Set `background={false}` when rendering inside a `BoxContainer` — the container already provides the visual boundary; the default background creates an unwanted nested box appearance.
-   Set `fullWidth` when rendering inside a container such as `BoxContainer` to remove the default `Layout.Content` spacing and allow content to fill the full width.

## Anti-patterns

-   Do not use `UneditableSection` for editable fields — use `Form.*` components with `readOnly` instead.
-   Do not nest `UneditableSection` inside another `UneditableSection`.
