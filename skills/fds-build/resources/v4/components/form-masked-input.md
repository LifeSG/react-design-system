# Form.MaskedInput

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Displaying sensitive data that should be partially hidden by default with a user-controlled reveal toggle (e.g. NRIC, FIN, passport number, bank account number).
-   Read-only fields that are loaded asynchronously and should show a loading / error state.

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## Props

| Prop                | Type                          | Default          | Description                                                                                                                                         |
| ------------------- | ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClear`           | `() => void`                  | —                | Called when the user activates the clear button. Use this to clear the controlled value.                                                            |
| `spacing`           | `number`                      | —                | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                       |
| `allowClear`        | `boolean`                     | false            | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                              |
| `styleType`         | `InputStyleType`              | "bordered"       | Visual style variant.                                                                                                                               |
| `value`             | `string`                      | —                | —                                                                                                                                                   |
| `iconUnmask`        | `JSX.Element`                 | <EyeIcon />      | Icon rendered inside the toggle button while the value is masked                                                                                    |
| `iconMask`          | `JSX.Element`                 | <EyeSlashIcon /> | Icon rendered inside the toggle button while the value is unmasked                                                                                  |
| `iconActiveColor`   | `string`                      | —                | CSS color value applied to the mask-toggle icon when it is active                                                                                   |
| `iconInactiveColor` | `string`                      | —                | CSS color value applied to the mask-toggle icon in its default inactive state.                                                                      |
| `disableMask`       | `boolean`                     | false            | When `true`, masking is permanently disabled and the raw value is always shown. The toggle icon is not rendered.                                    |
| `transformInput`    | `"uppercase" \| "lowercase"`  | —                | Automatically transforms the typed value before it is stored and passed to `onChange`.                                                              |
| `loadState`         | `MaskedInputLoadState`        | —                | Retrieval state for the value. Only applies when `readOnly` is `true`.                                                                              |
| `onMask`            | `(() => void)`                | —                | Called when the value transitions from unmasked to masked.                                                                                          |
| `onUnmask`          | `(() => void)`                | —                | Called when the value transitions from masked to unmasked.                                                                                          |
| `onTryAgain`        | `(() => void)`                | —                | Called when the user clicks the "Try again?" button shown in the `loadState="fail"` state. Only relevant when `readOnly` is `true`.                 |
| `maskRange`         | `number[]`                    | —                | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                    | —                | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                      | —                | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)` | —                | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                      | "•"              | Character used to replace each masked character in the displayed value.                                                                             |
| `label`             | `FormLabelProps \| string`    | —                | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                            |
| `errorMessage`      | `string \| React.ReactNode`   | —                | Inline error text rendered below the input.                                                                                                         |
| `layoutType`        | `FormElementLayoutType`       | —                | Controls whether the container uses flex layout or a responsive column grid.                                                                        |
| `xxlCols`           | `ColSpan`                     | —                | Column span at the `xxl` breakpoint.                                                                                                                |
| `xlCols`            | `ColSpan`                     | —                | Column span at the `xl` breakpoint.                                                                                                                 |
| `lgCols`            | `ColSpan`                     | —                | Column span at the `lg` breakpoint.                                                                                                                 |
| `mdCols`            | `ColSpan`                     | —                | Column span at the `md` breakpoint.                                                                                                                 |
| `smCols`            | `ColSpan`                     | —                | Column span at the `sm` breakpoint.                                                                                                                 |
| `xsCols`            | `ColSpan`                     | —                | Column span at the `xs` breakpoint.                                                                                                                 |
| `xxsCols`           | `ColSpan`                     | —                | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.    |

## Props

| Prop                | Type                          | Default          | Description                                                                                                                                         |
| ------------------- | ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClear`           | `() => void`                  | —                | Called when the user activates the clear button. Use this to clear the controlled value.                                                            |
| `spacing`           | `number`                      | —                | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                       |
| `allowClear`        | `boolean`                     | false            | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                              |
| `styleType`         | `InputStyleType`              | "bordered"       | Visual style variant.                                                                                                                               |
| `value`             | `string`                      | —                | —                                                                                                                                                   |
| `iconUnmask`        | `JSX.Element`                 | <EyeIcon />      | Icon rendered inside the toggle button while the value is masked                                                                                    |
| `iconMask`          | `JSX.Element`                 | <EyeSlashIcon /> | Icon rendered inside the toggle button while the value is unmasked                                                                                  |
| `iconActiveColor`   | `string`                      | —                | CSS color value applied to the mask-toggle icon when it is active                                                                                   |
| `iconInactiveColor` | `string`                      | —                | CSS color value applied to the mask-toggle icon in its default inactive state.                                                                      |
| `disableMask`       | `boolean`                     | false            | When `true`, masking is permanently disabled and the raw value is always shown. The toggle icon is not rendered.                                    |
| `transformInput`    | `"uppercase" \| "lowercase"`  | —                | Automatically transforms the typed value before it is stored and passed to `onChange`.                                                              |
| `loadState`         | `MaskedInputLoadState`        | —                | Retrieval state for the value. Only applies when `readOnly` is `true`.                                                                              |
| `onMask`            | `(() => void)`                | —                | Called when the value transitions from unmasked to masked.                                                                                          |
| `onUnmask`          | `(() => void)`                | —                | Called when the value transitions from masked to unmasked.                                                                                          |
| `onTryAgain`        | `(() => void)`                | —                | Called when the user clicks the "Try again?" button shown in the `loadState="fail"` state. Only relevant when `readOnly` is `true`.                 |
| `maskRange`         | `number[]`                    | —                | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                    | —                | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                      | —                | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)` | —                | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                      | "•"              | Character used to replace each masked character in the displayed value.                                                                             |
| `label`             | `FormLabelProps \| string`    | —                | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                            |
| `errorMessage`      | `string \| React.ReactNode`   | —                | Inline error text rendered below the input.                                                                                                         |
| `layoutType`        | `FormElementLayoutType`       | —                | Controls whether the container uses flex layout or a responsive column grid.                                                                        |
| `xxlCols`           | `ColSpan`                     | —                | Column span at the `xxl` breakpoint.                                                                                                                |
| `xlCols`            | `ColSpan`                     | —                | Column span at the `xl` breakpoint.                                                                                                                 |
| `lgCols`            | `ColSpan`                     | —                | Column span at the `lg` breakpoint.                                                                                                                 |
| `mdCols`            | `ColSpan`                     | —                | Column span at the `md` breakpoint.                                                                                                                 |
| `smCols`            | `ColSpan`                     | —                | Column span at the `sm` breakpoint.                                                                                                                 |
| `xsCols`            | `ColSpan`                     | —                | Column span at the `xs` breakpoint.                                                                                                                 |
| `xxsCols`           | `ColSpan`                     | —                | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.    |

## Props

| Prop                | Type                          | Default          | Description                                                                                                                                         |
| ------------------- | ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`             | `string`                      | —                | —                                                                                                                                                   |
| `onClear`           | `() => void`                  | —                | Called when the user activates the clear button. Use this to clear the controlled value.                                                            |
| `spacing`           | `number`                      | —                | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                       |
| `allowClear`        | `boolean`                     | false            | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                              |
| `styleType`         | `InputStyleType`              | "bordered"       | Visual style variant.                                                                                                                               |
| `iconUnmask`        | `JSX.Element`                 | <EyeIcon />      | Icon rendered inside the toggle button while the value is masked                                                                                    |
| `iconMask`          | `JSX.Element`                 | <EyeSlashIcon /> | Icon rendered inside the toggle button while the value is unmasked                                                                                  |
| `iconActiveColor`   | `string`                      | —                | CSS color value applied to the mask-toggle icon when it is active                                                                                   |
| `iconInactiveColor` | `string`                      | —                | CSS color value applied to the mask-toggle icon in its default inactive state.                                                                      |
| `disableMask`       | `boolean`                     | false            | When `true`, masking is permanently disabled and the raw value is always shown. The toggle icon is not rendered.                                    |
| `transformInput`    | `"uppercase" \| "lowercase"`  | —                | Automatically transforms the typed value before it is stored and passed to `onChange`.                                                              |
| `loadState`         | `MaskedInputLoadState`        | —                | Retrieval state for the value. Only applies when `readOnly` is `true`.                                                                              |
| `onMask`            | `(() => void)`                | —                | Called when the value transitions from unmasked to masked.                                                                                          |
| `onUnmask`          | `(() => void)`                | —                | Called when the value transitions from masked to unmasked.                                                                                          |
| `onTryAgain`        | `(() => void)`                | —                | Called when the user clicks the "Try again?" button shown in the `loadState="fail"` state. Only relevant when `readOnly` is `true`.                 |
| `maskRange`         | `number[]`                    | —                | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                    | —                | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                      | —                | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)` | —                | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                      | "•"              | Character used to replace each masked character in the displayed value.                                                                             |
| `label`             | `FormLabelProps \| string`    | —                | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                            |
| `errorMessage`      | `string \| React.ReactNode`   | —                | Inline error text rendered below the input.                                                                                                         |
| `layoutType`        | `FormElementLayoutType`       | —                | Controls whether the container uses flex layout or a responsive column grid.                                                                        |
| `xxlCols`           | `ColSpan`                     | —                | Column span at the `xxl` breakpoint.                                                                                                                |
| `xlCols`            | `ColSpan`                     | —                | Column span at the `xl` breakpoint.                                                                                                                 |
| `lgCols`            | `ColSpan`                     | —                | Column span at the `lg` breakpoint.                                                                                                                 |
| `mdCols`            | `ColSpan`                     | —                | Column span at the `md` breakpoint.                                                                                                                 |
| `smCols`            | `ColSpan`                     | —                | Column span at the `sm` breakpoint.                                                                                                                 |
| `xsCols`            | `ColSpan`                     | —                | Column span at the `xs` breakpoint.                                                                                                                 |
| `xxsCols`           | `ColSpan`                     | —                | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.    |

## Props

| Prop                | Type                          | Default          | Description                                                                                                                                         |
| ------------------- | ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`             | `string`                      | —                | —                                                                                                                                                   |
| `onClear`           | `() => void`                  | —                | Called when the user activates the clear button. Use this to clear the controlled value.                                                            |
| `spacing`           | `number`                      | —                | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                       |
| `allowClear`        | `boolean`                     | false            | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                              |
| `styleType`         | `InputStyleType`              | "bordered"       | Visual style variant.                                                                                                                               |
| `iconUnmask`        | `JSX.Element`                 | <EyeIcon />      | Icon rendered inside the toggle button while the value is masked                                                                                    |
| `iconMask`          | `JSX.Element`                 | <EyeSlashIcon /> | Icon rendered inside the toggle button while the value is unmasked                                                                                  |
| `iconActiveColor`   | `string`                      | —                | CSS color value applied to the mask-toggle icon when it is active                                                                                   |
| `iconInactiveColor` | `string`                      | —                | CSS color value applied to the mask-toggle icon in its default inactive state.                                                                      |
| `disableMask`       | `boolean`                     | false            | When `true`, masking is permanently disabled and the raw value is always shown. The toggle icon is not rendered.                                    |
| `transformInput`    | `"uppercase" \| "lowercase"`  | —                | Automatically transforms the typed value before it is stored and passed to `onChange`.                                                              |
| `loadState`         | `MaskedInputLoadState`        | —                | Retrieval state for the value. Only applies when `readOnly` is `true`.                                                                              |
| `onMask`            | `(() => void)`                | —                | Called when the value transitions from unmasked to masked.                                                                                          |
| `onUnmask`          | `(() => void)`                | —                | Called when the value transitions from masked to unmasked.                                                                                          |
| `onTryAgain`        | `(() => void)`                | —                | Called when the user clicks the "Try again?" button shown in the `loadState="fail"` state. Only relevant when `readOnly` is `true`.                 |
| `maskRange`         | `number[]`                    | —                | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                    | —                | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                      | —                | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)` | —                | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                      | "•"              | Character used to replace each masked character in the displayed value.                                                                             |
| `label`             | `FormLabelProps \| string`    | —                | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                            |
| `errorMessage`      | `string \| React.ReactNode`   | —                | Inline error text rendered below the input.                                                                                                         |
| `layoutType`        | `FormElementLayoutType`       | —                | Controls whether the container uses flex layout or a responsive column grid.                                                                        |
| `xxlCols`           | `ColSpan`                     | —                | Column span at the `xxl` breakpoint.                                                                                                                |
| `xlCols`            | `ColSpan`                     | —                | Column span at the `xl` breakpoint.                                                                                                                 |
| `lgCols`            | `ColSpan`                     | —                | Column span at the `lg` breakpoint.                                                                                                                 |
| `mdCols`            | `ColSpan`                     | —                | Column span at the `md` breakpoint.                                                                                                                 |
| `smCols`            | `ColSpan`                     | —                | Column span at the `sm` breakpoint.                                                                                                                 |
| `xsCols`            | `ColSpan`                     | —                | Column span at the `xs` breakpoint.                                                                                                                 |
| `xxsCols`           | `ColSpan`                     | —                | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.    |

## Props

| Prop                | Type                          | Default          | Description                                                                                                                                         |
| ------------------- | ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`             | `string`                      | —                | —                                                                                                                                                   |
| `onClear`           | `() => void`                  | —                | Called when the user activates the clear button. Use this to clear the controlled value.                                                            |
| `spacing`           | `number`                      | —                | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                       |
| `allowClear`        | `boolean`                     | false            | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                              |
| `styleType`         | `InputStyleType`              | "bordered"       | Visual style variant.                                                                                                                               |
| `iconUnmask`        | `JSX.Element`                 | <EyeIcon />      | Icon rendered inside the toggle button while the value is masked                                                                                    |
| `iconMask`          | `JSX.Element`                 | <EyeSlashIcon /> | Icon rendered inside the toggle button while the value is unmasked                                                                                  |
| `iconActiveColor`   | `string`                      | —                | CSS color value applied to the mask-toggle icon when it is active                                                                                   |
| `iconInactiveColor` | `string`                      | —                | CSS color value applied to the mask-toggle icon in its default inactive state.                                                                      |
| `disableMask`       | `boolean`                     | false            | When `true`, masking is permanently disabled and the raw value is always shown. The toggle icon is not rendered.                                    |
| `transformInput`    | `"uppercase" \| "lowercase"`  | —                | Automatically transforms the typed value before it is stored and passed to `onChange`.                                                              |
| `loadState`         | `MaskedInputLoadState`        | —                | Retrieval state for the value. Only applies when `readOnly` is `true`.                                                                              |
| `onMask`            | `(() => void)`                | —                | Called when the value transitions from unmasked to masked.                                                                                          |
| `onUnmask`          | `(() => void)`                | —                | Called when the value transitions from masked to unmasked.                                                                                          |
| `onTryAgain`        | `(() => void)`                | —                | Called when the user clicks the "Try again?" button shown in the `loadState="fail"` state. Only relevant when `readOnly` is `true`.                 |
| `maskRange`         | `number[]`                    | —                | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                    | —                | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                      | —                | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)` | —                | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                      | "•"              | Character used to replace each masked character in the displayed value.                                                                             |
| `label`             | `FormLabelProps \| string`    | —                | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                            |
| `errorMessage`      | `string \| React.ReactNode`   | —                | Inline error text rendered below the input.                                                                                                         |
| `layoutType`        | `FormElementLayoutType`       | —                | Controls whether the container uses flex layout or a responsive column grid.                                                                        |
| `xxlCols`           | `ColSpan`                     | —                | Column span at the `xxl` breakpoint.                                                                                                                |
| `xlCols`            | `ColSpan`                     | —                | Column span at the `xl` breakpoint.                                                                                                                 |
| `lgCols`            | `ColSpan`                     | —                | Column span at the `lg` breakpoint.                                                                                                                 |
| `mdCols`            | `ColSpan`                     | —                | Column span at the `md` breakpoint.                                                                                                                 |
| `smCols`            | `ColSpan`                     | —                | Column span at the `sm` breakpoint.                                                                                                                 |
| `xsCols`            | `ColSpan`                     | —                | Column span at the `xs` breakpoint.                                                                                                                 |
| `xxsCols`           | `ColSpan`                     | —                | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.    |

## Props

| Prop                | Type                          | Default          | Description                                                                                                                                         |
| ------------------- | ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`             | `string`                      | —                | —                                                                                                                                                   |
| `onClear`           | `() => void`                  | —                | Called when the user activates the clear button. Use this to clear the controlled value.                                                            |
| `spacing`           | `number`                      | —                | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                       |
| `allowClear`        | `boolean`                     | false            | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                              |
| `styleType`         | `InputStyleType`              | "bordered"       | Visual style variant.                                                                                                                               |
| `iconUnmask`        | `JSX.Element`                 | <EyeIcon />      | Icon rendered inside the toggle button while the value is masked                                                                                    |
| `iconMask`          | `JSX.Element`                 | <EyeSlashIcon /> | Icon rendered inside the toggle button while the value is unmasked                                                                                  |
| `iconActiveColor`   | `string`                      | —                | CSS color value applied to the mask-toggle icon when it is active                                                                                   |
| `iconInactiveColor` | `string`                      | —                | CSS color value applied to the mask-toggle icon in its default inactive state.                                                                      |
| `disableMask`       | `boolean`                     | false            | When `true`, masking is permanently disabled and the raw value is always shown. The toggle icon is not rendered.                                    |
| `transformInput`    | `"uppercase" \| "lowercase"`  | —                | Automatically transforms the typed value before it is stored and passed to `onChange`.                                                              |
| `loadState`         | `MaskedInputLoadState`        | —                | Retrieval state for the value. Only applies when `readOnly` is `true`.                                                                              |
| `onMask`            | `(() => void)`                | —                | Called when the value transitions from unmasked to masked.                                                                                          |
| `onUnmask`          | `(() => void)`                | —                | Called when the value transitions from masked to unmasked.                                                                                          |
| `onTryAgain`        | `(() => void)`                | —                | Called when the user clicks the "Try again?" button shown in the `loadState="fail"` state. Only relevant when `readOnly` is `true`.                 |
| `maskRange`         | `number[]`                    | —                | Index range `[start, end]` of the characters to mask (inclusive, zero-based). Characters outside this range remain visible.                         |
| `unmaskRange`       | `number[]`                    | —                | Index range `[start, end]` of the characters to keep visible (inclusive, zero-based). Characters outside this range are masked.                     |
| `maskRegex`         | `RegExp`                      | —                | Regular expression whose matches are replaced with `maskChar`.                                                                                      |
| `maskTransformer`   | `((value: string) => string)` | —                | Custom function that receives the raw value and returns the fully masked string. Takes precedence over `maskRegex`, `maskRange`, and `unmaskRange`. |
| `maskChar`          | `string`                      | "•"              | Character used to replace each masked character in the displayed value.                                                                             |
| `label`             | `FormLabelProps \| string`    | —                | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                            |
| `errorMessage`      | `string \| React.ReactNode`   | —                | Inline error text rendered below the input.                                                                                                         |
| `layoutType`        | `FormElementLayoutType`       | —                | Controls whether the container uses flex layout or a responsive column grid.                                                                        |
| `xxlCols`           | `ColSpan`                     | —                | Column span at the `xxl` breakpoint.                                                                                                                |
| `xlCols`            | `ColSpan`                     | —                | Column span at the `xl` breakpoint.                                                                                                                 |
| `lgCols`            | `ColSpan`                     | —                | Column span at the `lg` breakpoint.                                                                                                                 |
| `mdCols`            | `ColSpan`                     | —                | Column span at the `md` breakpoint.                                                                                                                 |
| `smCols`            | `ColSpan`                     | —                | Column span at the `sm` breakpoint.                                                                                                                 |
| `xsCols`            | `ColSpan`                     | —                | Column span at the `xs` breakpoint.                                                                                                                 |
| `xxsCols`           | `ColSpan`                     | —                | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.    |

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
