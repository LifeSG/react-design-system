# Form.PredictiveTextInput

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   The option set is too large for a static dropdown and must be fetched dynamically (e.g. address lookup, postal code search, product search, large dataset autocomplete).
-   Users need to type to narrow down results before selecting.

## Usage

### Location search — three extractors working together

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";

interface Location {
    id: string;
    name: string;
    address: string;
}

const LocationSearchExample = () => {
    const [selected, setSelected] = useState<Location | undefined>();

    const fetchOptions = async (input: string): Promise<Location[]> => {
        const res = await api.searchLocations(input);
        return res.results;
    };

    return (
        <Form.PredictiveTextInput<Location, string>
            label="Search location"
            minimumCharacters={3} // fetch only after 3 chars typed
            fetchOptions={fetchOptions}
            // Populates the text field when an option is selected
            valueExtractor={(item) => item.name}
            // Populates each row in the dropdown list
            listExtractor={(item) => `${item.name} — ${item.address}`}
            // Displays the chosen value as a chip / confirmation label
            displayValueExtractor={(item) => item.name}
            selectedOption={selected}
            onSelectOption={(item) => setSelected(item ?? undefined)}
        />
    );
};
```

**How the three extractors divide responsibility:**

| Extractor               | When it runs               | What it renders                  |
| ----------------------- | -------------------------- | -------------------------------- |
| `listExtractor`         | While the dropdown is open | Each option row in the list      |
| `valueExtractor`        | After selection            | The text field value             |
| `displayValueExtractor` | After selection            | The chip / confirmed-value label |

Debounce `fetchOptions` internally (e.g. with `setTimeout` or a library) — the component calls it on every character change.

## Props

| Prop                    | Type                                            | Default         | Description                                                                                                                                                 |
| ----------------------- | ----------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                        | —               | —                                                                                                                                                           |
| `className`             | `string`                                        | —               | —                                                                                                                                                           |
| `minimumCharacters`     | `number`                                        | 3               | Minimum number of characters the user must type before `fetchOptions` is called and the dropdown opens.                                                     |
| `placeholder`           | `string`                                        | "Enter here..." | Placeholder text shown inside the input when it is empty.                                                                                                   |
| `readOnly`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `disabled`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `error`                 | `boolean`                                       | —               | Applies error styling to the input wrapper.                                                                                                                 |
| `selectedOption`        | `T`                                             | —               | The currently confirmed option. Updating this prop resets the displayed text and clears the dropdown options list. Pass `undefined` to clear the selection. |
| `alignment`             | `DropdownAlignmentType`                         | —               | Horizontal alignment of the dropdown relative to the input element.                                                                                         |
| `dropdownZIndex`        | `number`                                        | —               | CSS `z-index` applied to the dropdown overlay.                                                                                                              |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                        | document.body   | The root element that contains the dropdown element.                                                                                                        |
| `dropdownWidth`         | `string`                                        | —               | Custom width for the dropdown. When specified, the dropdown uses this width instead of matching the trigger element width.                                  |
| `fetchOptions` \*       | `(input: string) => Promise<T[]>`               | —               | Async function called with the current input string to retrieve matching options. A rejected promise triggers the error state in the dropdown.              |
| `valueExtractor`        | `((item: T) => V)`                              | —               | Derives the submitted value `V` from a selected item `T`.                                                                                                   |
| `listExtractor`         | `((item: T) => string \| ListItemDisplayProps)` | —               | Derives the display label for each option in the dropdown list.                                                                                             |
| `displayValueExtractor` | `((option: T) => string)`                       | —               | Derives the text shown in the input field after an option is selected.                                                                                      |
| `onSelectOption`        | `\| ((option: T, extractedValue: V) => void)`   | —               | Called when the user selects an option from the dropdown or clears the field.                                                                               |
| `label`                 | `FormLabelProps \| string`                      | —               | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                    |
| `errorMessage`          | `string \| React.ReactNode`                     | —               | Inline error text rendered below the input.                                                                                                                 |
| `layoutType`            | `FormElementLayoutType`                         | —               | Controls whether the container uses flex layout or a responsive column grid.                                                                                |
| `xxlCols`               | `ColSpan`                                       | —               | Column span at the `xxl` breakpoint.                                                                                                                        |
| `xlCols`                | `ColSpan`                                       | —               | Column span at the `xl` breakpoint.                                                                                                                         |
| `lgCols`                | `ColSpan`                                       | —               | Column span at the `lg` breakpoint.                                                                                                                         |
| `mdCols`                | `ColSpan`                                       | —               | Column span at the `md` breakpoint.                                                                                                                         |
| `smCols`                | `ColSpan`                                       | —               | Column span at the `sm` breakpoint.                                                                                                                         |
| `xsCols`                | `ColSpan`                                       | —               | Column span at the `xs` breakpoint.                                                                                                                         |
| `xxsCols`               | `ColSpan`                                       | —               | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.            |

## Props

| Prop                    | Type                                            | Default         | Description                                                                                                                                                 |
| ----------------------- | ----------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                        | —               | —                                                                                                                                                           |
| `className`             | `string`                                        | —               | —                                                                                                                                                           |
| `minimumCharacters`     | `number`                                        | 3               | Minimum number of characters the user must type before `fetchOptions` is called and the dropdown opens.                                                     |
| `placeholder`           | `string`                                        | "Enter here..." | Placeholder text shown inside the input when it is empty.                                                                                                   |
| `readOnly`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `disabled`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `error`                 | `boolean`                                       | —               | Applies error styling to the input wrapper.                                                                                                                 |
| `selectedOption`        | `T`                                             | —               | The currently confirmed option. Updating this prop resets the displayed text and clears the dropdown options list. Pass `undefined` to clear the selection. |
| `alignment`             | `DropdownAlignmentType`                         | —               | Horizontal alignment of the dropdown relative to the input element.                                                                                         |
| `dropdownZIndex`        | `number`                                        | —               | CSS `z-index` applied to the dropdown overlay.                                                                                                              |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                        | document.body   | The root element that contains the dropdown element.                                                                                                        |
| `dropdownWidth`         | `string`                                        | —               | Custom width for the dropdown. When specified, the dropdown uses this width instead of matching the trigger element width.                                  |
| `fetchOptions` \*       | `(input: string) => Promise<T[]>`               | —               | Async function called with the current input string to retrieve matching options. A rejected promise triggers the error state in the dropdown.              |
| `valueExtractor`        | `((item: T) => V)`                              | —               | Derives the submitted value `V` from a selected item `T`.                                                                                                   |
| `listExtractor`         | `((item: T) => string \| ListItemDisplayProps)` | —               | Derives the display label for each option in the dropdown list.                                                                                             |
| `displayValueExtractor` | `((option: T) => string)`                       | —               | Derives the text shown in the input field after an option is selected.                                                                                      |
| `onSelectOption`        | `\| ((option: T, extractedValue: V) => void)`   | —               | Called when the user selects an option from the dropdown or clears the field.                                                                               |
| `label`                 | `FormLabelProps \| string`                      | —               | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                    |
| `errorMessage`          | `string \| React.ReactNode`                     | —               | Inline error text rendered below the input.                                                                                                                 |
| `layoutType`            | `FormElementLayoutType`                         | —               | Controls whether the container uses flex layout or a responsive column grid.                                                                                |
| `xxlCols`               | `ColSpan`                                       | —               | Column span at the `xxl` breakpoint.                                                                                                                        |
| `xlCols`                | `ColSpan`                                       | —               | Column span at the `xl` breakpoint.                                                                                                                         |
| `lgCols`                | `ColSpan`                                       | —               | Column span at the `lg` breakpoint.                                                                                                                         |
| `mdCols`                | `ColSpan`                                       | —               | Column span at the `md` breakpoint.                                                                                                                         |
| `smCols`                | `ColSpan`                                       | —               | Column span at the `sm` breakpoint.                                                                                                                         |
| `xsCols`                | `ColSpan`                                       | —               | Column span at the `xs` breakpoint.                                                                                                                         |
| `xxsCols`               | `ColSpan`                                       | —               | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.            |

## Props

| Prop                    | Type                                            | Default         | Description                                                                                                                                                 |
| ----------------------- | ----------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                        | —               | —                                                                                                                                                           |
| `className`             | `string`                                        | —               | —                                                                                                                                                           |
| `minimumCharacters`     | `number`                                        | 3               | Minimum number of characters the user must type before `fetchOptions` is called and the dropdown opens.                                                     |
| `placeholder`           | `string`                                        | "Enter here..." | Placeholder text shown inside the input when it is empty.                                                                                                   |
| `readOnly`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `disabled`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `error`                 | `boolean`                                       | —               | Applies error styling to the input wrapper.                                                                                                                 |
| `selectedOption`        | `T`                                             | —               | The currently confirmed option. Updating this prop resets the displayed text and clears the dropdown options list. Pass `undefined` to clear the selection. |
| `alignment`             | `DropdownAlignmentType`                         | —               | Horizontal alignment of the dropdown relative to the input element.                                                                                         |
| `dropdownZIndex`        | `number`                                        | —               | CSS `z-index` applied to the dropdown overlay.                                                                                                              |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                        | document.body   | The root element that contains the dropdown element.                                                                                                        |
| `dropdownWidth`         | `string`                                        | —               | Custom width for the dropdown. When specified, the dropdown uses this width instead of matching the trigger element width.                                  |
| `fetchOptions` \*       | `(input: string) => Promise<T[]>`               | —               | Async function called with the current input string to retrieve matching options. A rejected promise triggers the error state in the dropdown.              |
| `valueExtractor`        | `((item: T) => V)`                              | —               | Derives the submitted value `V` from a selected item `T`.                                                                                                   |
| `listExtractor`         | `((item: T) => string \| ListItemDisplayProps)` | —               | Derives the display label for each option in the dropdown list.                                                                                             |
| `displayValueExtractor` | `((option: T) => string)`                       | —               | Derives the text shown in the input field after an option is selected.                                                                                      |
| `onSelectOption`        | `\| ((option: T, extractedValue: V) => void)`   | —               | Called when the user selects an option from the dropdown or clears the field.                                                                               |
| `label`                 | `FormLabelProps \| string`                      | —               | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                    |
| `errorMessage`          | `string \| React.ReactNode`                     | —               | Inline error text rendered below the input.                                                                                                                 |
| `layoutType`            | `FormElementLayoutType`                         | —               | Controls whether the container uses flex layout or a responsive column grid.                                                                                |
| `xxlCols`               | `ColSpan`                                       | —               | Column span at the `xxl` breakpoint.                                                                                                                        |
| `xlCols`                | `ColSpan`                                       | —               | Column span at the `xl` breakpoint.                                                                                                                         |
| `lgCols`                | `ColSpan`                                       | —               | Column span at the `lg` breakpoint.                                                                                                                         |
| `mdCols`                | `ColSpan`                                       | —               | Column span at the `md` breakpoint.                                                                                                                         |
| `smCols`                | `ColSpan`                                       | —               | Column span at the `sm` breakpoint.                                                                                                                         |
| `xsCols`                | `ColSpan`                                       | —               | Column span at the `xs` breakpoint.                                                                                                                         |
| `xxsCols`               | `ColSpan`                                       | —               | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.            |

## Props

| Prop                    | Type                                            | Default         | Description                                                                                                                                                 |
| ----------------------- | ----------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                        | —               | —                                                                                                                                                           |
| `className`             | `string`                                        | —               | —                                                                                                                                                           |
| `minimumCharacters`     | `number`                                        | 3               | Minimum number of characters the user must type before `fetchOptions` is called and the dropdown opens.                                                     |
| `placeholder`           | `string`                                        | "Enter here..." | Placeholder text shown inside the input when it is empty.                                                                                                   |
| `readOnly`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `disabled`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `error`                 | `boolean`                                       | —               | Applies error styling to the input wrapper.                                                                                                                 |
| `selectedOption`        | `T`                                             | —               | The currently confirmed option. Updating this prop resets the displayed text and clears the dropdown options list. Pass `undefined` to clear the selection. |
| `alignment`             | `DropdownAlignmentType`                         | —               | Horizontal alignment of the dropdown relative to the input element.                                                                                         |
| `dropdownZIndex`        | `number`                                        | —               | CSS `z-index` applied to the dropdown overlay.                                                                                                              |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                        | document.body   | The root element that contains the dropdown element.                                                                                                        |
| `dropdownWidth`         | `string`                                        | —               | Custom width for the dropdown. When specified, the dropdown uses this width instead of matching the trigger element width.                                  |
| `fetchOptions` \*       | `(input: string) => Promise<T[]>`               | —               | Async function called with the current input string to retrieve matching options. A rejected promise triggers the error state in the dropdown.              |
| `valueExtractor`        | `((item: T) => V)`                              | —               | Derives the submitted value `V` from a selected item `T`.                                                                                                   |
| `listExtractor`         | `((item: T) => string \| ListItemDisplayProps)` | —               | Derives the display label for each option in the dropdown list.                                                                                             |
| `displayValueExtractor` | `((option: T) => string)`                       | —               | Derives the text shown in the input field after an option is selected.                                                                                      |
| `onSelectOption`        | `\| ((option: T, extractedValue: V) => void)`   | —               | Called when the user selects an option from the dropdown or clears the field.                                                                               |
| `label`                 | `FormLabelProps \| string`                      | —               | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                    |
| `errorMessage`          | `string \| React.ReactNode`                     | —               | Inline error text rendered below the input.                                                                                                                 |
| `layoutType`            | `FormElementLayoutType`                         | —               | Controls whether the container uses flex layout or a responsive column grid.                                                                                |
| `xxlCols`               | `ColSpan`                                       | —               | Column span at the `xxl` breakpoint.                                                                                                                        |
| `xlCols`                | `ColSpan`                                       | —               | Column span at the `xl` breakpoint.                                                                                                                         |
| `lgCols`                | `ColSpan`                                       | —               | Column span at the `lg` breakpoint.                                                                                                                         |
| `mdCols`                | `ColSpan`                                       | —               | Column span at the `md` breakpoint.                                                                                                                         |
| `smCols`                | `ColSpan`                                       | —               | Column span at the `sm` breakpoint.                                                                                                                         |
| `xsCols`                | `ColSpan`                                       | —               | Column span at the `xs` breakpoint.                                                                                                                         |
| `xxsCols`               | `ColSpan`                                       | —               | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.            |

## Props

| Prop                    | Type                                            | Default         | Description                                                                                                                                                 |
| ----------------------- | ----------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                        | —               | —                                                                                                                                                           |
| `className`             | `string`                                        | —               | —                                                                                                                                                           |
| `minimumCharacters`     | `number`                                        | 3               | Minimum number of characters the user must type before `fetchOptions` is called and the dropdown opens.                                                     |
| `placeholder`           | `string`                                        | "Enter here..." | Placeholder text shown inside the input when it is empty.                                                                                                   |
| `readOnly`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `disabled`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `error`                 | `boolean`                                       | —               | Applies error styling to the input wrapper.                                                                                                                 |
| `selectedOption`        | `T`                                             | —               | The currently confirmed option. Updating this prop resets the displayed text and clears the dropdown options list. Pass `undefined` to clear the selection. |
| `alignment`             | `DropdownAlignmentType`                         | —               | Horizontal alignment of the dropdown relative to the input element.                                                                                         |
| `dropdownZIndex`        | `number`                                        | —               | CSS `z-index` applied to the dropdown overlay.                                                                                                              |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                        | document.body   | The root element that contains the dropdown element.                                                                                                        |
| `dropdownWidth`         | `string`                                        | —               | Custom width for the dropdown. When specified, the dropdown uses this width instead of matching the trigger element width.                                  |
| `fetchOptions` \*       | `(input: string) => Promise<T[]>`               | —               | Async function called with the current input string to retrieve matching options. A rejected promise triggers the error state in the dropdown.              |
| `valueExtractor`        | `((item: T) => V)`                              | —               | Derives the submitted value `V` from a selected item `T`.                                                                                                   |
| `listExtractor`         | `((item: T) => string \| ListItemDisplayProps)` | —               | Derives the display label for each option in the dropdown list.                                                                                             |
| `displayValueExtractor` | `((option: T) => string)`                       | —               | Derives the text shown in the input field after an option is selected.                                                                                      |
| `onSelectOption`        | `\| ((option: T, extractedValue: V) => void)`   | —               | Called when the user selects an option from the dropdown or clears the field.                                                                               |
| `label`                 | `FormLabelProps \| string`                      | —               | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                    |
| `errorMessage`          | `string \| React.ReactNode`                     | —               | Inline error text rendered below the input.                                                                                                                 |
| `layoutType`            | `FormElementLayoutType`                         | —               | Controls whether the container uses flex layout or a responsive column grid.                                                                                |
| `xxlCols`               | `ColSpan`                                       | —               | Column span at the `xxl` breakpoint.                                                                                                                        |
| `xlCols`                | `ColSpan`                                       | —               | Column span at the `xl` breakpoint.                                                                                                                         |
| `lgCols`                | `ColSpan`                                       | —               | Column span at the `lg` breakpoint.                                                                                                                         |
| `mdCols`                | `ColSpan`                                       | —               | Column span at the `md` breakpoint.                                                                                                                         |
| `smCols`                | `ColSpan`                                       | —               | Column span at the `sm` breakpoint.                                                                                                                         |
| `xsCols`                | `ColSpan`                                       | —               | Column span at the `xs` breakpoint.                                                                                                                         |
| `xxsCols`               | `ColSpan`                                       | —               | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.            |

## Props

| Prop                    | Type                                            | Default         | Description                                                                                                                                                 |
| ----------------------- | ----------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                        | —               | —                                                                                                                                                           |
| `className`             | `string`                                        | —               | —                                                                                                                                                           |
| `minimumCharacters`     | `number`                                        | 3               | Minimum number of characters the user must type before `fetchOptions` is called and the dropdown opens.                                                     |
| `placeholder`           | `string`                                        | "Enter here..." | Placeholder text shown inside the input when it is empty.                                                                                                   |
| `readOnly`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `disabled`              | `boolean`                                       | —               | —                                                                                                                                                           |
| `error`                 | `boolean`                                       | —               | Applies error styling to the input wrapper.                                                                                                                 |
| `selectedOption`        | `T`                                             | —               | The currently confirmed option. Updating this prop resets the displayed text and clears the dropdown options list. Pass `undefined` to clear the selection. |
| `alignment`             | `DropdownAlignmentType`                         | —               | Horizontal alignment of the dropdown relative to the input element.                                                                                         |
| `dropdownZIndex`        | `number`                                        | —               | CSS `z-index` applied to the dropdown overlay.                                                                                                              |
| `dropdownRootNode`      | `RefObject<HTMLElement>`                        | document.body   | The root element that contains the dropdown element.                                                                                                        |
| `dropdownWidth`         | `string`                                        | —               | Custom width for the dropdown. When specified, the dropdown uses this width instead of matching the trigger element width.                                  |
| `fetchOptions` \*       | `(input: string) => Promise<T[]>`               | —               | Async function called with the current input string to retrieve matching options. A rejected promise triggers the error state in the dropdown.              |
| `valueExtractor`        | `((item: T) => V)`                              | —               | Derives the submitted value `V` from a selected item `T`.                                                                                                   |
| `listExtractor`         | `((item: T) => string \| ListItemDisplayProps)` | —               | Derives the display label for each option in the dropdown list.                                                                                             |
| `displayValueExtractor` | `((option: T) => string)`                       | —               | Derives the text shown in the input field after an option is selected.                                                                                      |
| `onSelectOption`        | `\| ((option: T, extractedValue: V) => void)`   | —               | Called when the user selects an option from the dropdown or clears the field.                                                                               |
| `label`                 | `FormLabelProps \| string`                      | —               | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                    |
| `errorMessage`          | `string \| React.ReactNode`                     | —               | Inline error text rendered below the input.                                                                                                                 |
| `layoutType`            | `FormElementLayoutType`                         | —               | Controls whether the container uses flex layout or a responsive column grid.                                                                                |
| `xxlCols`               | `ColSpan`                                       | —               | Column span at the `xxl` breakpoint.                                                                                                                        |
| `xlCols`                | `ColSpan`                                       | —               | Column span at the `xl` breakpoint.                                                                                                                         |
| `lgCols`                | `ColSpan`                                       | —               | Column span at the `lg` breakpoint.                                                                                                                         |
| `mdCols`                | `ColSpan`                                       | —               | Column span at the `md` breakpoint.                                                                                                                         |
| `smCols`                | `ColSpan`                                       | —               | Column span at the `sm` breakpoint.                                                                                                                         |
| `xsCols`                | `ColSpan`                                       | —               | Column span at the `xs` breakpoint.                                                                                                                         |
| `xxsCols`               | `ColSpan`                                       | —               | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.            |

## Rules

-   Always supply a `label` so the field is accessible.
-   `fetchOptions` is required — it must be async and return an array of option objects.
-   Debounce inside `fetchOptions` to avoid flooding the API on every keystroke.
-   Set `minimumCharacters` to a value that produces useful results — `3` is the default, but adjust for your data source.
-   Always provide `valueExtractor`, `listExtractor`, and `displayValueExtractor` — omitting any of these produces inconsistent display behaviour.
-   Use `selectedOption` and `onSelectOption` for controlled selection.
-   Set `errorMessage` when the selected option fails validation.
-   `fetchOptions` is called on every keystroke after `minimumCharacters` is reached — debounce inside the function if needed.
-   Generic type `T` is the option object shape; `V` is the extracted value type.

## Anti-patterns

-   Do not use when the full option list is small and known upfront — use `Form.Select` or `Form.MultiSelect` instead.
-   Do not use `fetchOptions` without debouncing — each keystroke fires a new call.
-   Do not omit extractor functions — the component cannot determine what to display without them.
