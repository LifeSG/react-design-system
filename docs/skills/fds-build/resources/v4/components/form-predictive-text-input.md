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

| Prop                    | Type                                          | Default           | Description                                                      |
| ----------------------- | --------------------------------------------- | ----------------- | ---------------------------------------------------------------- |
| `fetchOptions`          | `(input: string) => Promise<T[]>`             | —                 | **Required.** Async function called to populate dropdown options |
| `selectedOption`        | `T`                                           | —                 | Controlled selected option object                                |
| `valueExtractor`        | `(option: T) => V`                            | —                 | Extracts the stored value from an option                         |
| `listExtractor`         | `(option: T) => string`                       | —                 | Extracts the display text shown in the dropdown list             |
| `displayValueExtractor` | `(option: T) => string`                       | —                 | Extracts the display text shown in the input after selection     |
| `onSelectOption`        | `(option: T, extractedValue: T \| V) => void` | —                 | Called when the user selects an option                           |
| `minimumCharacters`     | `number`                                      | `3`               | Minimum characters typed before options are fetched              |
| `placeholder`           | `string`                                      | `"Enter here..."` | Placeholder text of the input                                    |
| `disabled`              | `boolean`                                     | —                 | Disables the component; selection not allowed                    |
| `readOnly`              | `boolean`                                     | —                 | Read-only state; selection not allowed                           |
| `error`                 | `boolean`                                     | —                 | Sets error display (not needed if `errorMessage` is set)         |
| `className`             | `string`                                      | —                 | Class selector of the component                                  |
| `data-testid`           | `string`                                      | —                 | Test identifier of the component                                 |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

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
