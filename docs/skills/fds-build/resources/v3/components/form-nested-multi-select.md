# Form.NestedMultiSelect

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

Use when users can select multiple options from a hierarchically organised list of up to 3 levels. For hierarchical single-select use `Form.NestedSelect`. For flat multi-select use `Form.MultiSelect`.

## Variants

| `variant`   | When to use           |
| ----------- | --------------------- |
| `"default"` | Standard form context |
| `"small"`   | Compact layouts       |

| `mode`       | When to use                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| `"default"`  | System decides initial expand state                                                      |
| `"expand"`   | Expand all categories on open — for short, browsable lists                               |
| `"collapse"` | Collapse all categories on open — for long lists where search is the primary interaction |

## Usage

### Multi-select with parallel keyPaths / values arrays

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";
import { L1OptionProps } from "@lifesg/react-design-system/input-nested-select";

interface SkillValue {
    id: string;
    name: string;
}

const options: L1OptionProps<SkillValue, SkillValue, SkillValue>[] = [
    {
        key: "design",
        label: "Design",
        subItems: [
            {
                key: "design-ux",
                label: "UX Design",
                value: { id: "ux", name: "UX Design" },
            },
            {
                key: "design-ui",
                label: "UI Design",
                value: { id: "ui", name: "UI Design" },
            },
        ],
    },
    {
        key: "engineering",
        label: "Engineering",
        subItems: [
            {
                key: "eng-fe",
                label: "Frontend",
                value: { id: "fe", name: "Frontend" },
            },
            {
                key: "eng-be",
                label: "Backend",
                value: { id: "be", name: "Backend" },
            },
        ],
    },
];

const NestedMultiSelectExample = () => {
    // keyPaths[i] and values[i] always refer to the same selection — keep them in sync
    const [keyPaths, setKeyPaths] = useState<string[][]>([
        ["design", "design-ux"], // pre-selected: UX Design
    ]);
    const [values, setValues] = useState<SkillValue[]>([
        { id: "ux", name: "UX Design" },
    ]);

    return (
        <Form.NestedMultiSelect<SkillValue, SkillValue, SkillValue>
            label="Skills"
            options={options}
            selectedKeyPaths={keyPaths}
            // onSelectOptions provides the NEXT full selection state — replace, don't merge
            onSelectOptions={(nextKeyPaths, nextValues) => {
                setKeyPaths(nextKeyPaths);
                setValues(nextValues as SkillValue[]);
            }}
            valueToStringFunction={(val) => val.name}
            enableSearch
        />
    );
};
```

**The parallel-array contract:** index `i` in `keyPaths` and index `i` in `values` always describe the same selected item. `onSelectOptions` delivers the complete next state — replace both arrays together, never splice one independently. Initialise both arrays with matching entries when pre-populating selections.

## Props

### NestedMultiSelect specific props

| Prop                    | Type                                                            | Default         | Description                                                                                                            |
| ----------------------- | --------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `options`               | `L1OptionProps<V1, V2, V3>[]`                                   | —               | **Required.** Nested option array (up to 3 levels)                                                                     |
| `selectedKeyPaths`      | `string[][]`                                                    | —               | Array of key paths for all selected options                                                                            |
| `placeholder`           | `string`                                                        | `"Select"`      | Placeholder text                                                                                                       |
| `disabled`              | `boolean`                                                       | —               | Disables selection                                                                                                     |
| `readOnly`              | `boolean`                                                       | —               | Read-only state — selection not allowed                                                                                |
| `error`                 | `boolean`                                                       | —               | Show error styling — not needed if `errorMessage` is set                                                               |
| `mode`                  | `"default"` \| `"expand"` \| `"collapse"`                       | `"default"`     | Initial expand/collapse state of categories when the dropdown opens                                                    |
| `valueToStringFunction` | `(value: V1 \| V2 \| V3) => string`                             | —               | Converts values to display strings. Single function used for all levels — assumes values are homogeneous across levels |
| `optionsLoadState`      | `"success"` \| `"loading"` \| `"failed"`                        | `"success"`     | Visual state for async option loading                                                                                  |
| `optionTruncationType`  | `"end"` \| `"middle"`                                           | `"end"`         | Truncation style for long option text                                                                                  |
| `enableSearch`          | `boolean`                                                       | `false`         | Enable text-based search in the dropdown                                                                               |
| `hideNoResultsDisplay`  | `boolean`                                                       | `false`         | Suppress the default no-results UI                                                                                     |
| `customLabels`          | `DropdownCustomLabelProps`                                      | —               | Override default dropdown label strings                                                                                |
| `onSelectOptions`       | `(keyPaths: string[][], values: Array<V1 \| V2 \| V3>) => void` | —               | Called when selections change                                                                                          |
| `onShowOptions`         | `() => void`                                                    | —               | Called when the dropdown opens                                                                                         |
| `onHideOptions`         | `() => void`                                                    | —               | Called when the dropdown closes                                                                                        |
| `onRetry`               | `() => void`                                                    | —               | Called when retry is clicked after a failed load                                                                       |
| `onSearch`              | `() => void`                                                    | —               | Called when a search is executed                                                                                       |
| `onBlur`                | `() => void`                                                    | —               | Called when the field loses focus                                                                                      |
| `variant`               | `"default"` \| `"small"`                                        | `"default"`     | Size variant                                                                                                           |
| `alignment`             | `"left"` \| `"right"`                                           | `"left"`        | Dropdown alignment relative to the trigger                                                                             |
| `dropdownZIndex`        | `number`                                                        | `50`            | Custom z-index for the dropdown                                                                                        |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                                        | `document.body` | Root element that hosts the dropdown                                                                                   |
| `dropdownWidth`         | `string`                                                        | —               | Fixed width for the dropdown                                                                                           |
| `className`             | `string`                                                        | —               | Class selector for the component                                                                                       |
| `data-testid`           | `string`                                                        | —               | Test identifier for the component                                                                                      |

### DropdownCustomLabelProps

| Prop                   | Type                    | Description                                    |
| ---------------------- | ----------------------- | ---------------------------------------------- |
| `searchPlaceholder`    | `string`                | Placeholder for the search field               |
| `noResultsLabel`       | `string`                | Replaces the default no-results label          |
| `noResultsDescription` | `() => React.ReactNode` | Additional content after the no-results label  |
| `selectAllButtonLabel` | `string`                | Label for the Select all button                |
| `clearAllButtonLabel`  | `string`                | Label for the Clear all button                 |
| `allSelectedLabel`     | `string`                | Label shown when all options are selected      |
| `multiSelectedLabel`   | `string`                | Label shown when multiple options are selected |

### Form specific props

| Prop                | Type                          | Default | Description                            |
| ------------------- | ----------------------------- | ------- | -------------------------------------- |
| `label`             | `string` \| `FormLabelProps`  | —       | Field label                            |
| `errorMessage`      | `string` \| `React.ReactNode` | —       | Validation error shown below the field |
| `data-error-testid` | `string`                      | —       | Test identifier for the error message  |

See [Form.Input props](./form-input.md) for `FormLabelProps` and `FormLabelAddonProps` structure.

## Rules

-   Every option node must have a unique `key` string — key paths are used for controlled state.
-   Provide `valueToStringFunction` when values are not plain strings. The same function is applied to values at all nesting levels — ensure values are homogeneous across levels, or that the function handles all types.
-   Use `enableSearch` when the total option count across all levels is large.
-   Use `readOnly` on review screens — not `disabled`.
-   Provide `customLabels` to localise "Select all", "Clear all", and count labels.
-   `options` is the only mandatory component-specific prop.
-   Options follow the same nested structure as `Form.NestedSelect`: `{ key: string, label: string, value: V, subItems?: L2OptionProps[] }`. Every option must have a unique `key`.
-   `selectedKeyPaths` is an array of key-path arrays — one per selected item.
-   `onSelectOptions` receives the complete updated `keyPaths` and `values` arrays on every change.
-   `valueToStringFunction` uses a single callback for all nesting levels — values across levels must be the same type or handled uniformly.

## Anti-patterns

-   Do not use `Form.NestedMultiSelect` for flat option lists — use `Form.MultiSelect`.
-   Do not use when only one option can be selected — use `Form.NestedSelect`.
-   Do not use duplicate `key` values across options — selection state will break.
-   Do not set both `error` and `errorMessage`.
-   Do not use the deprecated `searchPlaceholder` or `noResultsDescription` props directly — use `customLabels`.
