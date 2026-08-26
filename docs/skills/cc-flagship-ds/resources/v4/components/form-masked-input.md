# Form.MaskedInput

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Displaying sensitive data that should be partially hidden by default with a user-controlled reveal toggle (e.g. NRIC, FIN, passport number, bank account number).
-   Read-only fields that are loaded asynchronously and should show a loading / error state.

## Props

Inherits all props from `Form.Input`. Additional props:

| Prop                | Type                               | Default            | Description                                                                                    |
| ------------------- | ---------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| `maskRange`         | `number[]`                         | —                  | `[startIndex, endIndex]` — character index range to mask                                       |
| `unmaskRange`       | `number[]`                         | —                  | `[startIndex, endIndex]` — character index range to NOT mask                                   |
| `maskRegex`         | `RegExp`                           | —                  | Regex matched characters are replaced with `maskChar`                                          |
| `maskTransformer`   | `(value: string) => string`        | —                  | Custom function to transform the masked value                                                  |
| `maskChar`          | `string`                           | `"•"`              | Character used for masking                                                                     |
| `iconMask`          | `string`                           | `<EyeSlashIcon />` | Icon shown when the field is masked                                                            |
| `iconUnmask`        | `string`                           | `<EyeIcon />`      | Icon shown when the field is unmasked                                                          |
| `iconActiveColor`   | `string`                           | `Color.Primary`    | Color of the mask icon in active state                                                         |
| `iconInactiveColor` | `string`                           | `Color.Neutral[3]` | Color of the mask icon in inactive state                                                       |
| `transformInput`    | `"uppercase" \| "lowercase"`       | —                  | Auto-transforms input casing                                                                   |
| `loadState`         | `"loading" \| "fail" \| "success"` | —                  | Async load state — only applies in `readOnly` mode                                             |
| `onMask`            | `() => void`                       | —                  | Called when the field becomes masked                                                           |
| `onUnmask`          | `() => void`                       | —                  | Called when the field becomes unmasked                                                         |
| `onTryAgain`        | `() => void`                       | —                  | Called when the "Try again" button is clicked in `loadState="fail"` mode (requires `readOnly`) |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## Rules

-   Always supply a `label` so the field is accessible.
-   Choose one masking strategy per instance: `maskRange`, `unmaskRange`, `maskRegex`, or `maskTransformer`.
-   Use `maskRange` for fixed-position sensitive segments (e.g. `[1, 4]` for NRIC middle characters).
-   Use `maskRegex` when the characters to mask follow a pattern rather than a fixed range.
-   Use `transformInput="uppercase"` for identifiers that are conventionally uppercase (e.g. NRIC, passport).
-   Use `loadState` only when `readOnly` is also `true` — for fields that are fetched asynchronously.
-   Provide `onTryAgain` when `loadState="fail"` so users can retry the fetch.
-   `loadState` only takes effect when `readOnly` is also `true`.
-   Provide only one of `maskRange`, `unmaskRange`, `maskRegex`, or `maskTransformer` per instance.

## Anti-patterns

-   Do not use for non-sensitive fields — masking adds friction and should be reserved for data that genuinely requires it.
-   Do not set `loadState` without `readOnly` — it has no effect in editable mode.
-   Do not combine multiple masking strategies (`maskRange` + `maskRegex`) on the same instance.
