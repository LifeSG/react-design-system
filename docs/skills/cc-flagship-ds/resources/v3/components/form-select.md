# Form.Select

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

Use when users must select exactly one option from a predefined list. For multiple selections use `Form.MultiSelect`. For hierarchical options use `Form.NestedSelect`.

## Variants

| `variant`   | When to use                                              |
| ----------- | -------------------------------------------------------- |
| `"default"` | Standard form context                                    |
| `"small"`   | Compact layouts — inline filters, dense data-entry forms |

## Usage

```tsx
import { Form } from "@lifesg/react-design-system/form";

const options = [
    { value: "sg", label: "Singapore" },
    { value: "my", label: "Malaysia" },
];

<Form.Select
    label="Country"
    options={options}
    selectedOption={selected}
    valueExtractor={(opt) => opt.value}
    listExtractor={(opt) => opt.label}
    displayValueExtractor={(opt) => opt.label}
    onSelectOption={(opt) => {}}
/>;
```

## Props

### Select specific props

| Prop                         | Type                                                     | Default         | Description                                                               |
| ---------------------------- | -------------------------------------------------------- | --------------- | ------------------------------------------------------------------------- |
| `options`                    | `T[]`                                                    | —               | **Required.** List of option objects                                      |
| `selectedOption`             | `T`                                                      | —               | Controlled selected option                                                |
| `valueExtractor`             | `(option: T) => V`                                       | —               | Derives the value from an option                                          |
| `listExtractor`              | `(option: T) => string`                                  | —               | Derives the display text for dropdown list items                          |
| `displayValueExtractor`      | `(option: T) => string`                                  | —               | Derives the display text shown in the selector when an option is selected |
| `valueToStringFunction`      | `(value: V) => string`                                   | —               | Converts a value to a string                                              |
| `name`                       | `string`                                                 | —               | Name attribute of the component                                           |
| `placeholder`                | `string`                                                 | `"Select"`      | Placeholder text                                                          |
| `disabled`                   | `boolean`                                                | —               | Disables selection                                                        |
| `readOnly`                   | `boolean`                                                | —               | Read-only state — selection not allowed                                   |
| `error`                      | `boolean`                                                | —               | Show error styling — not needed if `errorMessage` is set                  |
| `optionsLoadState`           | `"success"` \| `"loading"` \| `"failed"`                 | `"success"`     | Visual state for async option loading                                     |
| `optionTruncationType`       | `"end"` \| `"middle"`                                    | `"end"`         | Truncation style for long option text                                     |
| `enableSearch`               | `boolean`                                                | `false`         | Enable text-based search in the dropdown                                  |
| `searchFunction`             | `(searchValue: string) => T[]`                           | —               | Custom search function                                                    |
| `renderListItem`             | `(item: T, args: ListItemRenderArgs) => JSX.Element`     | —               | Custom list item renderer                                                 |
| `renderCustomSelectedOption` | `(option: T) => JSX.Element`                             | —               | Custom renderer for the selected option display in the selector           |
| `onSelectOption`             | `(option: T, extractedValue: T \| V) => void`            | —               | Called when an option is selected                                         |
| `onShowOptions`              | `() => void`                                             | —               | Called when the dropdown opens                                            |
| `onHideOptions`              | `() => void`                                             | —               | Called when the dropdown closes                                           |
| `onRetry`                    | `() => void`                                             | —               | Called when retry is clicked after a failed load                          |
| `onSearch`                   | `() => void`                                             | —               | Called when a search is executed                                          |
| `hideNoResultsDisplay`       | `boolean`                                                | —               | Suppress the default no-results UI                                        |
| `customLabels`               | `DropdownCustomLabelProps`                               | —               | Override default dropdown label strings                                   |
| `renderCustomCallToAction`   | `(hideOptions: () => void, options: T[]) => JSX.Element` | —               | Render a custom CTA at the bottom of the dropdown                         |
| `variant`                    | `"default"` \| `"small"`                                 | `"default"`     | Size variant                                                              |
| `alignment`                  | `"left"` \| `"right"`                                    | `"left"`        | Dropdown alignment relative to the trigger                                |
| `dropdownZIndex`             | `number`                                                 | `50`            | Custom z-index for the dropdown                                           |
| `dropdownRootNode`           | `RefObject<HTMLElement>`                                 | `document.body` | Root element that hosts the dropdown                                      |
| `dropdownWidth`              | `string`                                                 | —               | Fixed width for the dropdown (overrides matching the trigger width)       |
| `data-testid`                | `string`                                                 | —               | Test identifier for the component                                         |

### ListItemRenderArgs

| Prop       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `selected` | `boolean` | Whether the list item is currently selected |

### DropdownCustomLabelProps

| Prop                   | Type                    | Description                                                        |
| ---------------------- | ----------------------- | ------------------------------------------------------------------ |
| `searchPlaceholder`    | `string`                | Placeholder for the search field                                   |
| `noResultsLabel`       | `string`                | Replaces the default no-results label                              |
| `noResultsDescription` | `() => React.ReactNode` | Additional content after the no-results label                      |
| `selectAllButtonLabel` | `string`                | Label for the Select all button                                    |
| `clearAllButtonLabel`  | `string`                | Label for the Clear all button                                     |
| `allSelectedLabel`     | `string`                | Label shown when all options are selected                          |
| `multiSelectedLabel`   | `string`                | Label shown when multiple options are selected (e.g. "X selected") |

### Form specific props

| Prop                | Type                          | Default | Description                            |
| ------------------- | ----------------------------- | ------- | -------------------------------------- |
| `label`             | `string` \| `FormLabelProps`  | —       | Field label                            |
| `errorMessage`      | `string` \| `React.ReactNode` | —       | Validation error shown below the field |
| `data-error-testid` | `string`                      | —       | Test identifier for the error message  |

See [Form.Input props](./form-input.md) for `FormLabelProps` and `FormLabelAddonProps` structure.

## Rules

-   Always provide `options` — the component has no meaning without it.
-   Provide `valueExtractor` and `listExtractor` when the option objects are not plain strings — these are effectively required for typed option arrays.
-   Always provide `displayValueExtractor` alongside `valueExtractor` when option objects have separate label/value fields. Without it, the component falls back to `valueExtractor`, showing the raw value (e.g. "sg") in the closed selector instead of the label (e.g. "Singapore").
-   Use `optionsLoadState` to communicate async loading states — set to `"loading"` while fetching, `"failed"` on error (triggers retry UI).
-   Use `enableSearch` when the list exceeds ~10 items.
-   Provide `customLabels.searchPlaceholder` instead of the deprecated `searchPlaceholder` prop.
-   Use `readOnly` on review screens — not `disabled`.
-   Only override `dropdownZIndex` or `dropdownRootNode` when there are confirmed z-index or scroll conflicts.
-   Use `dropdownWidth` when the dropdown must be wider than the trigger (e.g. long option text).
-   `options` is the only mandatory component-specific prop.
-   Only specify `dropdownRootNode` when the default `body` rendering causes scroll or z-index conflicts.

## Anti-patterns

-   Do not use `Form.Select` when users can choose more than one option — use `Form.MultiSelect`.
-   Do not use the deprecated `searchPlaceholder` or `noResultsDescription` props directly — use `customLabels`.
-   Do not set both `error` and `errorMessage`.
-   Do not use `disabled` on review screens — use `readOnly`.
