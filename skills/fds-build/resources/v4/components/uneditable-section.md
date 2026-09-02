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

## Props — `UneditableSectionItemProps`

| Prop                | Type                                    | Default | Description                                                                                                                                         |
| ------------------- | --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                | —       | —                                                                                                                                                   |
| `label` \*          | `string`                                | —       | Field label shown above the item value.                                                                                                             |
| `value` \*          | `string \| React.ReactNode`             | —       | The display value for the field.                                                                                                                    |
| `displayWidth`      | `UneditableSectionItemDisplayWidth`     | "full"  | Grid column span for the item within the section layout.                                                                                            |
| `maskState`         | `UneditableSectionItemMaskState`        | —       | Controls whether the value is masked or unmasked. When undefined, no mask or unmask controls are rendered.                                          |
| `maskLoadingState`  | `UneditableSectionItemMaskLoadingState` | —       | Async loading state during a mask or unmask action. When undefined, the resolved value is rendered directly.                                        |
| `disableMaskUnmask` | `boolean`                               | —       | Prevents the user from toggling the mask or unmask control.                                                                                         |
| `alert`             | `AlertProps`                            | —       | Alert rendered below the item value.                                                                                                                |
| `maskRange`         | `number[]`                              | —       | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                              | —       | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                                | —       | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)`           | —       | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                                | "•"     | Character used to replace each masked character in the displayed value.                                                                             |

## Props — `UneditableSectionItemSectionProps`

| Prop      | Type      | Default | Description                                                    |
| --------- | --------- | ------- | -------------------------------------------------------------- |
| `stretch` | `boolean` | —       | Stretches every child item to fill the full width of the grid. |

## Props — `UneditableSectionProps`

| Prop            | Type                                           | Default | Description                                                                                      |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `items`         | `UneditableSectionItemProps[]`                 | —       | List of labeled read-only field items to render in a responsive grid.                            |
| `title`         | `string`                                       | —       | Optional heading rendered above the items grid.                                                  |
| `description`   | `string`                                       | —       | Optional description rendered below `title` and above the items grid.                            |
| `topSection`    | `JSX.Element`                                  | —       | Custom content rendered above the items grid, below `description`.                               |
| `bottomSection` | `JSX.Element`                                  | —       | Custom content rendered below the items grid.                                                    |
| `children`      | `JSX.Element \| JSX.Element[]`                 | —       | Fully custom section body.                                                                       |
| `className`     | `string`                                       | —       | —                                                                                                |
| `id`            | `string`                                       | —       | —                                                                                                |
| `background`    | `boolean`                                      | true    | Applies a grey background to the section container. Set to `false` for a transparent background. |
| `stretch`       | `boolean`                                      | —       | Stretches every item to fill the full column width of the grid.                                  |
| `fullWidth`     | `boolean`                                      | —       | When `true`, allows the section to span the full available width of its parent.                  |
| `onMask`        | `((item: UneditableSectionItemProps) => void)` | —       | Called when a mask control is activated on an item.                                              |
| `onUnmask`      | `((item: UneditableSectionItemProps) => void)` | —       | Called when an unmask control is activated on an item.                                           |
| `onTryAgain`    | `((item: UneditableSectionItemProps) => void)` | —       | Called when the retry button is clicked on an item in error state.                               |

## Props — `UneditableSectionItemProps`

| Prop                | Type                                    | Default | Description                                                                                                                                         |
| ------------------- | --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                | —       | —                                                                                                                                                   |
| `label` \*          | `string`                                | —       | Field label shown above the item value.                                                                                                             |
| `value` \*          | `string \| React.ReactNode`             | —       | The display value for the field.                                                                                                                    |
| `displayWidth`      | `UneditableSectionItemDisplayWidth`     | "full"  | Grid column span for the item within the section layout.                                                                                            |
| `maskState`         | `UneditableSectionItemMaskState`        | —       | Controls whether the value is masked or unmasked. When undefined, no mask or unmask controls are rendered.                                          |
| `maskLoadingState`  | `UneditableSectionItemMaskLoadingState` | —       | Async loading state during a mask or unmask action. When undefined, the resolved value is rendered directly.                                        |
| `disableMaskUnmask` | `boolean`                               | —       | Prevents the user from toggling the mask or unmask control.                                                                                         |
| `alert`             | `AlertProps`                            | —       | Alert rendered below the item value.                                                                                                                |
| `maskRange`         | `number[]`                              | —       | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                              | —       | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                                | —       | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)`           | —       | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                                | "•"     | Character used to replace each masked character in the displayed value.                                                                             |

## Props — `UneditableSectionItemSectionProps`

| Prop      | Type      | Default | Description                                                    |
| --------- | --------- | ------- | -------------------------------------------------------------- |
| `stretch` | `boolean` | —       | Stretches every child item to fill the full width of the grid. |

## Props — `UneditableSectionProps`

| Prop            | Type                                           | Default | Description                                                                                      |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `items`         | `UneditableSectionItemProps[]`                 | —       | List of labeled read-only field items to render in a responsive grid.                            |
| `title`         | `string`                                       | —       | Optional heading rendered above the items grid.                                                  |
| `description`   | `string`                                       | —       | Optional description rendered below `title` and above the items grid.                            |
| `topSection`    | `JSX.Element`                                  | —       | Custom content rendered above the items grid, below `description`.                               |
| `bottomSection` | `JSX.Element`                                  | —       | Custom content rendered below the items grid.                                                    |
| `children`      | `JSX.Element \| JSX.Element[]`                 | —       | Fully custom section body.                                                                       |
| `className`     | `string`                                       | —       | —                                                                                                |
| `id`            | `string`                                       | —       | —                                                                                                |
| `background`    | `boolean`                                      | true    | Applies a grey background to the section container. Set to `false` for a transparent background. |
| `stretch`       | `boolean`                                      | —       | Stretches every item to fill the full column width of the grid.                                  |
| `fullWidth`     | `boolean`                                      | —       | When `true`, allows the section to span the full available width of its parent.                  |
| `onMask`        | `((item: UneditableSectionItemProps) => void)` | —       | Called when a mask control is activated on an item.                                              |
| `onUnmask`      | `((item: UneditableSectionItemProps) => void)` | —       | Called when an unmask control is activated on an item.                                           |
| `onTryAgain`    | `((item: UneditableSectionItemProps) => void)` | —       | Called when the retry button is clicked on an item in error state.                               |

## Props — `UneditableSectionItemProps`

| Prop                | Type                                    | Default | Description                                                                                                                                         |
| ------------------- | --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                | —       | —                                                                                                                                                   |
| `label` \*          | `string`                                | —       | Field label shown above the item value.                                                                                                             |
| `value` \*          | `string \| React.ReactNode`             | —       | The display value for the field.                                                                                                                    |
| `displayWidth`      | `UneditableSectionItemDisplayWidth`     | "full"  | Grid column span for the item within the section layout.                                                                                            |
| `maskState`         | `UneditableSectionItemMaskState`        | —       | Controls whether the value is masked or unmasked. When undefined, no mask or unmask controls are rendered.                                          |
| `maskLoadingState`  | `UneditableSectionItemMaskLoadingState` | —       | Async loading state during a mask or unmask action. When undefined, the resolved value is rendered directly.                                        |
| `disableMaskUnmask` | `boolean`                               | —       | Prevents the user from toggling the mask or unmask control.                                                                                         |
| `alert`             | `AlertProps`                            | —       | Alert rendered below the item value.                                                                                                                |
| `maskRange`         | `number[]`                              | —       | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                              | —       | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                                | —       | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)`           | —       | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                                | "•"     | Character used to replace each masked character in the displayed value.                                                                             |

## Props — `UneditableSectionItemSectionProps`

| Prop      | Type      | Default | Description                                                    |
| --------- | --------- | ------- | -------------------------------------------------------------- |
| `stretch` | `boolean` | —       | Stretches every child item to fill the full width of the grid. |

## Props — `UneditableSectionProps`

| Prop            | Type                                           | Default | Description                                                                                      |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `items`         | `UneditableSectionItemProps[]`                 | —       | List of labeled read-only field items to render in a responsive grid.                            |
| `title`         | `string`                                       | —       | Optional heading rendered above the items grid.                                                  |
| `description`   | `string`                                       | —       | Optional description rendered below `title` and above the items grid.                            |
| `topSection`    | `JSX.Element`                                  | —       | Custom content rendered above the items grid, below `description`.                               |
| `bottomSection` | `JSX.Element`                                  | —       | Custom content rendered below the items grid.                                                    |
| `children`      | `JSX.Element \| JSX.Element[]`                 | —       | Fully custom section body.                                                                       |
| `className`     | `string`                                       | —       | —                                                                                                |
| `id`            | `string`                                       | —       | —                                                                                                |
| `background`    | `boolean`                                      | true    | Applies a grey background to the section container. Set to `false` for a transparent background. |
| `stretch`       | `boolean`                                      | —       | Stretches every item to fill the full column width of the grid.                                  |
| `fullWidth`     | `boolean`                                      | —       | When `true`, allows the section to span the full available width of its parent.                  |
| `onMask`        | `((item: UneditableSectionItemProps) => void)` | —       | Called when a mask control is activated on an item.                                              |
| `onUnmask`      | `((item: UneditableSectionItemProps) => void)` | —       | Called when an unmask control is activated on an item.                                           |
| `onTryAgain`    | `((item: UneditableSectionItemProps) => void)` | —       | Called when the retry button is clicked on an item in error state.                               |

## Props — `UneditableSectionItemProps`

| Prop                | Type                                    | Default | Description                                                                                                                                         |
| ------------------- | --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                | —       | —                                                                                                                                                   |
| `label` \*          | `string`                                | —       | Field label shown above the item value.                                                                                                             |
| `value` \*          | `string \| React.ReactNode`             | —       | The display value for the field.                                                                                                                    |
| `displayWidth`      | `UneditableSectionItemDisplayWidth`     | "full"  | Grid column span for the item within the section layout.                                                                                            |
| `maskState`         | `UneditableSectionItemMaskState`        | —       | Controls whether the value is masked or unmasked. When undefined, no mask or unmask controls are rendered.                                          |
| `maskLoadingState`  | `UneditableSectionItemMaskLoadingState` | —       | Async loading state during a mask or unmask action. When undefined, the resolved value is rendered directly.                                        |
| `disableMaskUnmask` | `boolean`                               | —       | Prevents the user from toggling the mask or unmask control.                                                                                         |
| `alert`             | `AlertProps`                            | —       | Alert rendered below the item value.                                                                                                                |
| `maskRange`         | `number[]`                              | —       | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                              | —       | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                                | —       | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)`           | —       | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                                | "•"     | Character used to replace each masked character in the displayed value.                                                                             |

## Props — `UneditableSectionItemSectionProps`

| Prop      | Type      | Default | Description                                                    |
| --------- | --------- | ------- | -------------------------------------------------------------- |
| `stretch` | `boolean` | —       | Stretches every child item to fill the full width of the grid. |

## Props — `UneditableSectionProps`

| Prop            | Type                                           | Default | Description                                                                                      |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `items`         | `UneditableSectionItemProps[]`                 | —       | List of labeled read-only field items to render in a responsive grid.                            |
| `title`         | `string`                                       | —       | Optional heading rendered above the items grid.                                                  |
| `description`   | `string`                                       | —       | Optional description rendered below `title` and above the items grid.                            |
| `topSection`    | `JSX.Element`                                  | —       | Custom content rendered above the items grid, below `description`.                               |
| `bottomSection` | `JSX.Element`                                  | —       | Custom content rendered below the items grid.                                                    |
| `children`      | `JSX.Element \| JSX.Element[]`                 | —       | Fully custom section body.                                                                       |
| `className`     | `string`                                       | —       | —                                                                                                |
| `id`            | `string`                                       | —       | —                                                                                                |
| `background`    | `boolean`                                      | true    | Applies a grey background to the section container. Set to `false` for a transparent background. |
| `stretch`       | `boolean`                                      | —       | Stretches every item to fill the full column width of the grid.                                  |
| `fullWidth`     | `boolean`                                      | —       | When `true`, allows the section to span the full available width of its parent.                  |
| `onMask`        | `((item: UneditableSectionItemProps) => void)` | —       | Called when a mask control is activated on an item.                                              |
| `onUnmask`      | `((item: UneditableSectionItemProps) => void)` | —       | Called when an unmask control is activated on an item.                                           |
| `onTryAgain`    | `((item: UneditableSectionItemProps) => void)` | —       | Called when the retry button is clicked on an item in error state.                               |

## Props — `UneditableSectionItemProps`

| Prop                | Type                                    | Default | Description                                                                                                                                         |
| ------------------- | --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                | —       | —                                                                                                                                                   |
| `label` \*          | `string`                                | —       | Field label shown above the item value.                                                                                                             |
| `value` \*          | `string \| React.ReactNode`             | —       | The display value for the field.                                                                                                                    |
| `displayWidth`      | `UneditableSectionItemDisplayWidth`     | "full"  | Grid column span for the item within the section layout.                                                                                            |
| `maskState`         | `UneditableSectionItemMaskState`        | —       | Controls whether the value is masked or unmasked. When undefined, no mask or unmask controls are rendered.                                          |
| `maskLoadingState`  | `UneditableSectionItemMaskLoadingState` | —       | Async loading state during a mask or unmask action. When undefined, the resolved value is rendered directly.                                        |
| `disableMaskUnmask` | `boolean`                               | —       | Prevents the user from toggling the mask or unmask control.                                                                                         |
| `alert`             | `AlertProps`                            | —       | Alert rendered below the item value.                                                                                                                |
| `maskRange`         | `number[]`                              | —       | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                              | —       | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                                | —       | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)`           | —       | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                                | "•"     | Character used to replace each masked character in the displayed value.                                                                             |

## Props — `UneditableSectionItemSectionProps`

| Prop      | Type      | Default | Description                                                    |
| --------- | --------- | ------- | -------------------------------------------------------------- |
| `stretch` | `boolean` | —       | Stretches every child item to fill the full width of the grid. |

## Props — `UneditableSectionProps`

| Prop            | Type                                           | Default | Description                                                                                      |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `items`         | `UneditableSectionItemProps[]`                 | —       | List of labeled read-only field items to render in a responsive grid.                            |
| `title`         | `string`                                       | —       | Optional heading rendered above the items grid.                                                  |
| `description`   | `string`                                       | —       | Optional description rendered below `title` and above the items grid.                            |
| `topSection`    | `JSX.Element`                                  | —       | Custom content rendered above the items grid, below `description`.                               |
| `bottomSection` | `JSX.Element`                                  | —       | Custom content rendered below the items grid.                                                    |
| `children`      | `JSX.Element \| JSX.Element[]`                 | —       | Fully custom section body.                                                                       |
| `className`     | `string`                                       | —       | —                                                                                                |
| `id`            | `string`                                       | —       | —                                                                                                |
| `background`    | `boolean`                                      | true    | Applies a grey background to the section container. Set to `false` for a transparent background. |
| `stretch`       | `boolean`                                      | —       | Stretches every item to fill the full column width of the grid.                                  |
| `fullWidth`     | `boolean`                                      | —       | When `true`, allows the section to span the full available width of its parent.                  |
| `onMask`        | `((item: UneditableSectionItemProps) => void)` | —       | Called when a mask control is activated on an item.                                              |
| `onUnmask`      | `((item: UneditableSectionItemProps) => void)` | —       | Called when an unmask control is activated on an item.                                           |
| `onTryAgain`    | `((item: UneditableSectionItemProps) => void)` | —       | Called when the retry button is clicked on an item in error state.                               |

## Props — `UneditableSectionItemProps`

| Prop                | Type                                    | Default | Description                                                                                                                                         |
| ------------------- | --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                | —       | —                                                                                                                                                   |
| `label` \*          | `string`                                | —       | Field label shown above the item value.                                                                                                             |
| `value` \*          | `string \| React.ReactNode`             | —       | The display value for the field.                                                                                                                    |
| `displayWidth`      | `UneditableSectionItemDisplayWidth`     | "full"  | Grid column span for the item within the section layout.                                                                                            |
| `maskState`         | `UneditableSectionItemMaskState`        | —       | Controls whether the value is masked or unmasked. When undefined, no mask or unmask controls are rendered.                                          |
| `maskLoadingState`  | `UneditableSectionItemMaskLoadingState` | —       | Async loading state during a mask or unmask action. When undefined, the resolved value is rendered directly.                                        |
| `disableMaskUnmask` | `boolean`                               | —       | Prevents the user from toggling the mask or unmask control.                                                                                         |
| `alert`             | `AlertProps`                            | —       | Alert rendered below the item value.                                                                                                                |
| `maskRange`         | `number[]`                              | —       | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                              | —       | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                                | —       | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)`           | —       | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                                | "•"     | Character used to replace each masked character in the displayed value.                                                                             |

## Props — `UneditableSectionItemSectionProps`

| Prop      | Type      | Default | Description                                                    |
| --------- | --------- | ------- | -------------------------------------------------------------- |
| `stretch` | `boolean` | —       | Stretches every child item to fill the full width of the grid. |

## Props — `UneditableSectionProps`

| Prop            | Type                                           | Default | Description                                                                                      |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `items`         | `UneditableSectionItemProps[]`                 | —       | List of labeled read-only field items to render in a responsive grid.                            |
| `title`         | `string`                                       | —       | Optional heading rendered above the items grid.                                                  |
| `description`   | `string`                                       | —       | Optional description rendered below `title` and above the items grid.                            |
| `topSection`    | `JSX.Element`                                  | —       | Custom content rendered above the items grid, below `description`.                               |
| `bottomSection` | `JSX.Element`                                  | —       | Custom content rendered below the items grid.                                                    |
| `children`      | `JSX.Element \| JSX.Element[]`                 | —       | Fully custom section body.                                                                       |
| `className`     | `string`                                       | —       | —                                                                                                |
| `id`            | `string`                                       | —       | —                                                                                                |
| `background`    | `boolean`                                      | true    | Applies a grey background to the section container. Set to `false` for a transparent background. |
| `stretch`       | `boolean`                                      | —       | Stretches every item to fill the full column width of the grid.                                  |
| `fullWidth`     | `boolean`                                      | —       | When `true`, allows the section to span the full available width of its parent.                  |
| `onMask`        | `((item: UneditableSectionItemProps) => void)` | —       | Called when a mask control is activated on an item.                                              |
| `onUnmask`      | `((item: UneditableSectionItemProps) => void)` | —       | Called when an unmask control is activated on an item.                                           |
| `onTryAgain`    | `((item: UneditableSectionItemProps) => void)` | —       | Called when the retry button is clicked on an item in error state.                               |

## Rules

-   Always supply `items` with a `label` and `value` for each field.
-   Use `displayWidth: "half"` for short values (names, dates, codes) to show two per row; omit for long values.
-   Show `"—"` for any unanswered or empty field rather than leaving `value` blank.
-   Set `background={false}` when rendering inside a `BoxContainer` — the container already provides the visual boundary; the default background creates an unwanted nested box appearance.
-   Set `fullWidth` when rendering inside a container such as `BoxContainer` to remove the default `Layout.Content` spacing and allow content to fill the full width.

## Anti-patterns

-   Do not use `UneditableSection` for editable fields — use `Form.*` components with `readOnly` instead.
-   Do not nest `UneditableSection` inside another `UneditableSection`.
