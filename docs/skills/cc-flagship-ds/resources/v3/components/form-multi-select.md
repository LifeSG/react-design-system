# Form.MultiSelect

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

Use when users can select more than one option from a predefined list. For single selections use `Form.Select`. For hierarchical options use `Form.NestedMultiSelect`.

## Variants

| `variant`   | When to use                                              |
| ----------- | -------------------------------------------------------- |
| `"default"` | Standard form context                                    |
| `"small"`   | Compact layouts — inline filters, dense data-entry forms |

## Usage

```tsx
import { Form } from "@lifesg/react-design-system/form";

const options = [
    { value: "doc", label: "Document" },
    { value: "img", label: "Image" },
    { value: "pdf", label: "PDF" },
];

<Form.MultiSelect
    label="File types"
    options={options}
    selectedOptions={selected}
    valueExtractor={(opt) => opt.value}
    listExtractor={(opt) => opt.label}
    displayValueExtractor={(opt) => opt.label}
    onSelectOptions={(opts) => {}}
/>;
```

## Props

### MultiSelect specific props

| Prop                    | Type                                     | Default         | Description                                                              |
| ----------------------- | ---------------------------------------- | --------------- | ------------------------------------------------------------------------ |
| `options`               | `T[]`                                    | —               | **Required.** List of option objects                                     |
| `selectedOptions`       | `T[]`                                    | —               | Controlled array of selected options                                     |
| `valueExtractor`        | `(option: T) => V`                       | —               | Derives the value from an option                                         |
| `listExtractor`         | `(option: T) => string`                  | —               | Derives the display text for dropdown list items                         |
| `displayValueExtractor` | `(option: T) => string`                  | —               | Derives the display text shown in the selector when options are selected |
| `name`                  | `string`                                 | —               | Name attribute of the component                                          |
| `placeholder`           | `string`                                 | `"Select"`      | Placeholder text                                                         |
| `disabled`              | `boolean`                                | —               | Disables selection                                                       |
| `error`                 | `boolean`                                | —               | Show error styling — not needed if `errorMessage` is set                 |
| `optionsLoadState`      | `"success"` \| `"loading"` \| `"failed"` | `"success"`     | Visual state for async option loading                                    |
| `optionTruncationType`  | `"end"` \| `"middle"`                    | `"end"`         | Truncation style for long option text                                    |
| `enableSearch`          | `boolean`                                | `false`         | Enable text-based search in the dropdown                                 |
| `searchFunction`        | `(searchValue: string) => T[]`           | —               | Custom search function                                                   |
| `maxSelectable`         | `number`                                 | —               | Maximum number of options that can be selected                           |
| `onSelectOptions`       | `(options: T[]) => void`                 | —               | Called when selection changes, or Select all / Unselect all is clicked   |
| `onShowOptions`         | `() => void`                             | —               | Called when the dropdown opens                                           |
| `onHideOptions`         | `() => void`                             | —               | Called when the dropdown closes                                          |
| `onRetry`               | `() => void`                             | —               | Called when retry is clicked after a failed load                         |
| `onSearch`              | `() => void`                             | —               | Called when a search is executed                                         |
| `hideNoResultsDisplay`  | `boolean`                                | —               | Suppress the default no-results UI                                       |
| `customLabels`          | `DropdownCustomLabelProps`               | —               | Override default dropdown label strings                                  |
| `variant`               | `"default"` \| `"small"`                 | `"default"`     | Size variant                                                             |
| `alignment`             | `"left"` \| `"right"`                    | `"left"`        | Dropdown alignment relative to the trigger                               |
| `dropdownZIndex`        | `number`                                 | `50`            | Custom z-index for the dropdown                                          |
| `dropdownWidth`         | `string`                                 | —               | Fixed width for the dropdown                                             |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                 | `document.body` | Root element that hosts the dropdown                                     |
| `data-testid`           | `string`                                 | —               | Test identifier for the component                                        |

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
-   Provide `valueExtractor` and `listExtractor` for typed option arrays — treat as required.
-   Always provide `displayValueExtractor` alongside `valueExtractor` when option objects have separate label/value fields. Without it, the component falls back to `valueExtractor`, showing raw values instead of labels in the closed selector.
-   Use `maxSelectable` when there is a business rule limiting how many options can be chosen; the component enforces it automatically.
-   Use `enableSearch` when the list exceeds ~10 items.
-   Provide `customLabels` to localise or contextualise "Select all", "Clear all", and count labels.
-   Use `optionsLoadState` to communicate async loading states.
-   Only override `dropdownZIndex` or `dropdownRootNode` when there are confirmed z-index or scroll conflicts.
-   `onSelectOptions` receives the complete updated selection array — not a delta.
-   Unlike `Form.Select`, there is no `readOnly` prop — use `disabled` for non-editable states.

## Anti-patterns

-   Do not use `Form.MultiSelect` when only one option can be selected — use `Form.Select`.
-   Do not use the deprecated `searchPlaceholder` or `noResultsDescription` props directly — use `customLabels`.
-   Do not set both `error` and `errorMessage`.
-   Do not manage selection capping manually in `onSelectOptions` — use `maxSelectable` instead.
