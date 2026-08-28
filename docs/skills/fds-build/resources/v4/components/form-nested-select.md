# Form.NestedSelect

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

Use when options are organised in a hierarchy of up to 3 levels — e.g. industry → sector → role, or country → state → city. For flat single-select use `Form.Select`. For hierarchical multi-select use `Form.NestedMultiSelect`.

## Variants

| `variant`   | When to use           |
| ----------- | --------------------- |
| `"default"` | Standard form context |
| `"small"`   | Compact layouts       |

| `mode`       | When to use                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| `"default"`  | System decides initial expand state based on selected path                             |
| `"expand"`   | Expand all categories on open — useful when the list is short and browsing is expected |
| `"collapse"` | Collapse all categories on open — useful for long lists where search is primary        |

## Usage

### Three-level hierarchy with controlled keyPath

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";
import { L1OptionProps } from "@lifesg/react-design-system/input-nested-select";

interface RoleValue {
    id: string;
    label: string;
}

const options: L1OptionProps<RoleValue, RoleValue, RoleValue>[] = [
    {
        key: "engineering",
        label: "Engineering",
        subItems: [
            {
                key: "engineering-frontend",
                label: "Frontend",
                subItems: [
                    {
                        key: "engineering-frontend-react",
                        label: "React Developer",
                        value: { id: "fe-react", label: "React Developer" },
                    },
                    {
                        key: "engineering-frontend-vue",
                        label: "Vue Developer",
                        value: { id: "fe-vue", label: "Vue Developer" },
                    },
                ],
            },
            {
                key: "engineering-backend",
                label: "Backend",
                value: { id: "be", label: "Backend Developer" },
            },
        ],
    },
];

const NestedSelectExample = () => {
    // keyPath is the path of keys from root to selected node
    const [keyPath, setKeyPath] = useState<string[]>([]);
    const [value, setValue] = useState<RoleValue | undefined>();

    return (
        <Form.NestedSelect<RoleValue, RoleValue, RoleValue>
            label="Job role"
            options={options}
            selectedKeyPath={keyPath}
            // onChange receives the full key path and the node's value
            onChange={(path, val) => {
                setKeyPath(path);
                setValue(val);
            }}
            valueToStringFunction={(val) => val.label}
            selectableCategory // intermediate nodes (e.g. "Backend") are also selectable
            enableSearch
        />
    );
};
```

**keyPath explains the selection:** `["engineering", "engineering-frontend", "engineering-frontend-react"]` means the user drilled through Engineering → Frontend → React Developer. An empty array means nothing is selected.

## Props

### NestedSelect specific props

| Prop                    | Type                                                 | Default         | Description                                                         |
| ----------------------- | ---------------------------------------------------- | --------------- | ------------------------------------------------------------------- |
| `options`               | `L1OptionProps<V1, V2, V3>[]`                        | —               | **Required.** Nested option array (up to 3 levels)                  |
| `selectedKeyPath`       | `string[]`                                           | —               | Key path of the selected option (e.g. `["1", "1-2"]`)               |
| `placeholder`           | `string`                                             | `"Select"`      | Placeholder text                                                    |
| `disabled`              | `boolean`                                            | —               | Disables selection                                                  |
| `readOnly`              | `boolean`                                            | —               | Read-only state — selection not allowed                             |
| `error`                 | `boolean`                                            | —               | Show error styling — not needed if `errorMessage` is set            |
| `mode`                  | `"default"` \| `"expand"` \| `"collapse"`            | `"default"`     | Initial expand/collapse state of categories when the dropdown opens |
| `valueToStringFunction` | `(value: V1 \| V2 \| V3) => string`                  | —               | Converts the selected value to a display string                     |
| `selectableCategory`    | `boolean`                                            | —               | Allow selecting a parent category node directly                     |
| `optionsLoadState`      | `"success"` \| `"loading"` \| `"failed"`             | `"success"`     | Visual state for async option loading                               |
| `optionTruncationType`  | `"end"` \| `"middle"`                                | `"end"`         | Truncation style for long option text                               |
| `enableSearch`          | `boolean`                                            | —               | Enable text-based search in the dropdown                            |
| `customLabels`          | `DropdownCustomLabelProps`                           | —               | Override default dropdown label strings                             |
| `hideNoResultsDisplay`  | `boolean`                                            | —               | Suppress the default no-results UI                                  |
| `onSelectOption`        | `(keyPath: string[], value: V1 \| V2 \| V3) => void` | —               | Called when an option is selected                                   |
| `onShowOptions`         | `() => void`                                         | —               | Called when the dropdown opens                                      |
| `onHideOptions`         | `() => void`                                         | —               | Called when the dropdown closes                                     |
| `onRetry`               | `() => void`                                         | —               | Called when retry is clicked after a failed load                    |
| `onSearch`              | `() => void`                                         | —               | Called when a search is executed                                    |
| `onBlur`                | `() => void`                                         | —               | Called when the field loses focus                                   |
| `variant`               | `"default"` \| `"small"`                             | `"default"`     | Size variant                                                        |
| `alignment`             | `"left"` \| `"right"`                                | `"left"`        | Dropdown alignment relative to the trigger                          |
| `dropdownZIndex`        | `number`                                             | `50`            | Custom z-index for the dropdown                                     |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                             | `document.body` | Root element that hosts the dropdown                                |
| `dropdownWidth`         | `string`                                             | —               | Fixed width for the dropdown                                        |
| `className`             | `string`                                             | —               | Class selector for the component                                    |
| `data-testid`           | `string`                                             | —               | Test identifier for the component                                   |

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

-   Every option node must have a unique `key` string — the key path is used for controlled state.
-   Provide `valueToStringFunction` when values are not plain strings and the selected display needs to be derived from the value.
-   Enable `selectableCategory` only when selecting a parent category is a valid business outcome — otherwise category nodes serve as navigational groupings only.
-   Use `enableSearch` when the total option count across all levels is large.
-   Use `readOnly` on review screens — not `disabled`.
-   Provide `customLabels.searchPlaceholder` instead of the deprecated `searchPlaceholder` prop.
-   `options` is the only mandatory component-specific prop.
-   Options follow a nested structure: `{ key: string, label: string, value: V, subItems?: L2OptionProps[] }`. Every option must have a unique `key`.
-   `selectedKeyPath` is an array of keys tracing the path to the selected leaf (e.g. `["parent-key", "child-key"]`).
-   `selectableCategory` enables selection of non-leaf (parent category) nodes.

## Anti-patterns

-   Do not use `Form.NestedSelect` for flat option lists — use `Form.Select`.
-   Do not use when multiple selections are needed — use `Form.NestedMultiSelect`.
-   Do not use duplicate `key` values across options — selection state will break.
-   Do not set both `error` and `errorMessage`.
