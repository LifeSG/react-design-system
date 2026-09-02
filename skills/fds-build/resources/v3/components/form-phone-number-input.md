# Form.PhoneNumberInput

Import: `import { Form } from "@lifesg/react-design-system/form"`

Type import: `import type { PhoneNumberInputValue } from "@lifesg/react-design-system/phone-number-input"`

## When to use

-   Collecting a phone number that requires a country code prefix.
-   International forms where users may have numbers from different countries.
-   Use `fixedCountry` when the service only accepts numbers from one country (e.g. Singapore-only services).

## Usage

```tsx
const StyledPhoneNumberInput = styled(Form.PhoneNumberInput)`
    ${MediaQuery.MinWidth.lg} {
        max-width: 24rem;
    }
`;
```

Defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a styled wrapper.

## Props

| Prop                      | Type                                       | Default  | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                   | `PhoneNumberInputValue`                    | —        | Controlled value containing the selected country code and phone number.                                                                          |
| `error`                   | `boolean`                                  | —        | Renders the input in an error state when `true`.                                                                                                 |
| `allowClear`              | `boolean`                                  | —        | Shows a clear button inside the input when `true` and the field has a value.                                                                     |
| `className`               | `string`                                   | —        | —                                                                                                                                                |
| `noBorder`                | `boolean`                                  | false    | Removes the visible border from the input group when `true`.                                                                                     |
| `fixedCountry`            | `boolean`                                  | false    | When `true`, the country code is displayed as a static label and the user cannot change it. When `false`, a searchable dropdown is rendered.     |
| `onChange`                | `((value: PhoneNumberInputValue) => void)` | —        | Called whenever the country or phone number changes.                                                                                             |
| `onClear`                 | `() => void`                               | —        | Called when the clear button is activated.                                                                                                       |
| `onBlur`                  | `(() => void)`                             | —        | Called when the input loses focus.                                                                                                               |
| `optionPlaceholder`       | `string`                                   | "Select" | Placeholder text shown in the country code dropdown when no country is selected.                                                                 |
| `optionSearchPlaceholder` | `string`                                   | —        | Placeholder text shown inside the search field of the country code dropdown. Only relevant when `enableSearch` is `true`.                        |
| `enableSearch`            | `boolean`                                  | —        | Enables a search field inside the country code dropdown.                                                                                         |
| `onHideOptions`           | `(() => void)`                             | —        | Called when the country code dropdown closes.                                                                                                    |
| `onShowOptions`           | `(() => void)`                             | —        | Called when the country code dropdown opens.                                                                                                     |
| `disabled`                | `boolean`                                  | —        | —                                                                                                                                                |
| `name`                    | `string`                                   | —        | —                                                                                                                                                |
| `pattern`                 | `string`                                   | —        | —                                                                                                                                                |
| `placeholder`             | `string`                                   | —        | —                                                                                                                                                |
| `readOnly`                | `boolean`                                  | —        | —                                                                                                                                                |
| `id`                      | `string`                                   | —        | —                                                                                                                                                |
| `autoComplete`            | `string`                                   | —        | —                                                                                                                                                |
| `getAriaLabel`            | `((country?: CountryValue) => string)`     | —        | Returns the accessible label for the phone number input.                                                                                         |
| `label`                   | `FormLabelProps \| string`                 | —        | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`            | `string \| React.ReactNode`                | —        | Inline error text rendered below the input.                                                                                                      |
| `layoutType`              | `FormElementLayoutType`                    | —        | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                  | —        | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                  | —        | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                  | —        | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                  | —        | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                  | —        | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                  | —        | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                  | —        | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## PhoneNumberInputValue

| Prop          | Type     | Description                                                                                                             |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `number`      | `string` | The phone number                                                                                                        |
| `countryCode` | `string` | The country code (e.g. `"+65"`). The `+` prefix is optional on input but always included in the `onChange` return value |

## Props

| Prop                      | Type                                       | Default  | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                   | `PhoneNumberInputValue`                    | —        | Controlled value containing the selected country code and phone number.                                                                          |
| `error`                   | `boolean`                                  | —        | Renders the input in an error state when `true`.                                                                                                 |
| `allowClear`              | `boolean`                                  | —        | Shows a clear button inside the input when `true` and the field has a value.                                                                     |
| `className`               | `string`                                   | —        | —                                                                                                                                                |
| `noBorder`                | `boolean`                                  | false    | Removes the visible border from the input group when `true`.                                                                                     |
| `fixedCountry`            | `boolean`                                  | false    | When `true`, the country code is displayed as a static label and the user cannot change it. When `false`, a searchable dropdown is rendered.     |
| `onChange`                | `((value: PhoneNumberInputValue) => void)` | —        | Called whenever the country or phone number changes.                                                                                             |
| `onClear`                 | `() => void`                               | —        | Called when the clear button is activated.                                                                                                       |
| `onBlur`                  | `(() => void)`                             | —        | Called when the input loses focus.                                                                                                               |
| `optionPlaceholder`       | `string`                                   | "Select" | Placeholder text shown in the country code dropdown when no country is selected.                                                                 |
| `optionSearchPlaceholder` | `string`                                   | —        | Placeholder text shown inside the search field of the country code dropdown. Only relevant when `enableSearch` is `true`.                        |
| `enableSearch`            | `boolean`                                  | —        | Enables a search field inside the country code dropdown.                                                                                         |
| `onHideOptions`           | `(() => void)`                             | —        | Called when the country code dropdown closes.                                                                                                    |
| `onShowOptions`           | `(() => void)`                             | —        | Called when the country code dropdown opens.                                                                                                     |
| `disabled`                | `boolean`                                  | —        | —                                                                                                                                                |
| `name`                    | `string`                                   | —        | —                                                                                                                                                |
| `pattern`                 | `string`                                   | —        | —                                                                                                                                                |
| `placeholder`             | `string`                                   | —        | —                                                                                                                                                |
| `readOnly`                | `boolean`                                  | —        | —                                                                                                                                                |
| `id`                      | `string`                                   | —        | —                                                                                                                                                |
| `autoComplete`            | `string`                                   | —        | —                                                                                                                                                |
| `getAriaLabel`            | `((country?: CountryValue) => string)`     | —        | Returns the accessible label for the phone number input.                                                                                         |
| `label`                   | `FormLabelProps \| string`                 | —        | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`            | `string \| React.ReactNode`                | —        | Inline error text rendered below the input.                                                                                                      |
| `layoutType`              | `FormElementLayoutType`                    | —        | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                  | —        | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                  | —        | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                  | —        | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                  | —        | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                  | —        | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                  | —        | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                  | —        | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                      | Type                                       | Default  | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                   | `PhoneNumberInputValue`                    | —        | Controlled value containing the selected country code and phone number.                                                                          |
| `error`                   | `boolean`                                  | —        | Renders the input in an error state when `true`.                                                                                                 |
| `allowClear`              | `boolean`                                  | —        | Shows a clear button inside the input when `true` and the field has a value.                                                                     |
| `className`               | `string`                                   | —        | —                                                                                                                                                |
| `noBorder`                | `boolean`                                  | false    | Removes the visible border from the input group when `true`.                                                                                     |
| `fixedCountry`            | `boolean`                                  | false    | When `true`, the country code is displayed as a static label and the user cannot change it. When `false`, a searchable dropdown is rendered.     |
| `onChange`                | `((value: PhoneNumberInputValue) => void)` | —        | Called whenever the country or phone number changes.                                                                                             |
| `onClear`                 | `() => void`                               | —        | Called when the clear button is activated.                                                                                                       |
| `onBlur`                  | `(() => void)`                             | —        | Called when the input loses focus.                                                                                                               |
| `optionPlaceholder`       | `string`                                   | "Select" | Placeholder text shown in the country code dropdown when no country is selected.                                                                 |
| `optionSearchPlaceholder` | `string`                                   | —        | Placeholder text shown inside the search field of the country code dropdown. Only relevant when `enableSearch` is `true`.                        |
| `enableSearch`            | `boolean`                                  | —        | Enables a search field inside the country code dropdown.                                                                                         |
| `onHideOptions`           | `(() => void)`                             | —        | Called when the country code dropdown closes.                                                                                                    |
| `onShowOptions`           | `(() => void)`                             | —        | Called when the country code dropdown opens.                                                                                                     |
| `disabled`                | `boolean`                                  | —        | —                                                                                                                                                |
| `name`                    | `string`                                   | —        | —                                                                                                                                                |
| `pattern`                 | `string`                                   | —        | —                                                                                                                                                |
| `placeholder`             | `string`                                   | —        | —                                                                                                                                                |
| `readOnly`                | `boolean`                                  | —        | —                                                                                                                                                |
| `id`                      | `string`                                   | —        | —                                                                                                                                                |
| `autoComplete`            | `string`                                   | —        | —                                                                                                                                                |
| `getAriaLabel`            | `((country?: CountryValue) => string)`     | —        | Returns the accessible label for the phone number input.                                                                                         |
| `label`                   | `FormLabelProps \| string`                 | —        | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`            | `string \| React.ReactNode`                | —        | Inline error text rendered below the input.                                                                                                      |
| `layoutType`              | `FormElementLayoutType`                    | —        | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                  | —        | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                  | —        | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                  | —        | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                  | —        | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                  | —        | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                  | —        | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                  | —        | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                      | Type                                       | Default  | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                   | `PhoneNumberInputValue`                    | —        | Controlled value containing the selected country code and phone number.                                                                          |
| `error`                   | `boolean`                                  | —        | Renders the input in an error state when `true`.                                                                                                 |
| `allowClear`              | `boolean`                                  | —        | Shows a clear button inside the input when `true` and the field has a value.                                                                     |
| `className`               | `string`                                   | —        | —                                                                                                                                                |
| `noBorder`                | `boolean`                                  | false    | Removes the visible border from the input group when `true`.                                                                                     |
| `fixedCountry`            | `boolean`                                  | false    | When `true`, the country code is displayed as a static label and the user cannot change it. When `false`, a searchable dropdown is rendered.     |
| `onChange`                | `((value: PhoneNumberInputValue) => void)` | —        | Called whenever the country or phone number changes.                                                                                             |
| `onClear`                 | `() => void`                               | —        | Called when the clear button is activated.                                                                                                       |
| `onBlur`                  | `(() => void)`                             | —        | Called when the input loses focus.                                                                                                               |
| `optionPlaceholder`       | `string`                                   | "Select" | Placeholder text shown in the country code dropdown when no country is selected.                                                                 |
| `optionSearchPlaceholder` | `string`                                   | —        | Placeholder text shown inside the search field of the country code dropdown. Only relevant when `enableSearch` is `true`.                        |
| `enableSearch`            | `boolean`                                  | —        | Enables a search field inside the country code dropdown.                                                                                         |
| `onHideOptions`           | `(() => void)`                             | —        | Called when the country code dropdown closes.                                                                                                    |
| `onShowOptions`           | `(() => void)`                             | —        | Called when the country code dropdown opens.                                                                                                     |
| `disabled`                | `boolean`                                  | —        | —                                                                                                                                                |
| `name`                    | `string`                                   | —        | —                                                                                                                                                |
| `pattern`                 | `string`                                   | —        | —                                                                                                                                                |
| `placeholder`             | `string`                                   | —        | —                                                                                                                                                |
| `readOnly`                | `boolean`                                  | —        | —                                                                                                                                                |
| `id`                      | `string`                                   | —        | —                                                                                                                                                |
| `autoComplete`            | `string`                                   | —        | —                                                                                                                                                |
| `getAriaLabel`            | `((country?: CountryValue) => string)`     | —        | Returns the accessible label for the phone number input.                                                                                         |
| `label`                   | `FormLabelProps \| string`                 | —        | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`            | `string \| React.ReactNode`                | —        | Inline error text rendered below the input.                                                                                                      |
| `layoutType`              | `FormElementLayoutType`                    | —        | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                  | —        | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                  | —        | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                  | —        | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                  | —        | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                  | —        | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                  | —        | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                  | —        | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                      | Type                                       | Default  | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                   | `PhoneNumberInputValue`                    | —        | Controlled value containing the selected country code and phone number.                                                                          |
| `error`                   | `boolean`                                  | —        | Renders the input in an error state when `true`.                                                                                                 |
| `allowClear`              | `boolean`                                  | —        | Shows a clear button inside the input when `true` and the field has a value.                                                                     |
| `className`               | `string`                                   | —        | —                                                                                                                                                |
| `noBorder`                | `boolean`                                  | false    | Removes the visible border from the input group when `true`.                                                                                     |
| `fixedCountry`            | `boolean`                                  | false    | When `true`, the country code is displayed as a static label and the user cannot change it. When `false`, a searchable dropdown is rendered.     |
| `onChange`                | `((value: PhoneNumberInputValue) => void)` | —        | Called whenever the country or phone number changes.                                                                                             |
| `onClear`                 | `() => void`                               | —        | Called when the clear button is activated.                                                                                                       |
| `onBlur`                  | `(() => void)`                             | —        | Called when the input loses focus.                                                                                                               |
| `optionPlaceholder`       | `string`                                   | "Select" | Placeholder text shown in the country code dropdown when no country is selected.                                                                 |
| `optionSearchPlaceholder` | `string`                                   | —        | Placeholder text shown inside the search field of the country code dropdown. Only relevant when `enableSearch` is `true`.                        |
| `enableSearch`            | `boolean`                                  | —        | Enables a search field inside the country code dropdown.                                                                                         |
| `onHideOptions`           | `(() => void)`                             | —        | Called when the country code dropdown closes.                                                                                                    |
| `onShowOptions`           | `(() => void)`                             | —        | Called when the country code dropdown opens.                                                                                                     |
| `disabled`                | `boolean`                                  | —        | —                                                                                                                                                |
| `name`                    | `string`                                   | —        | —                                                                                                                                                |
| `pattern`                 | `string`                                   | —        | —                                                                                                                                                |
| `placeholder`             | `string`                                   | —        | —                                                                                                                                                |
| `readOnly`                | `boolean`                                  | —        | —                                                                                                                                                |
| `id`                      | `string`                                   | —        | —                                                                                                                                                |
| `autoComplete`            | `string`                                   | —        | —                                                                                                                                                |
| `getAriaLabel`            | `((country?: CountryValue) => string)`     | —        | Returns the accessible label for the phone number input.                                                                                         |
| `label`                   | `FormLabelProps \| string`                 | —        | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`            | `string \| React.ReactNode`                | —        | Inline error text rendered below the input.                                                                                                      |
| `layoutType`              | `FormElementLayoutType`                    | —        | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                  | —        | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                  | —        | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                  | —        | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                  | —        | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                  | —        | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                  | —        | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                  | —        | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                      | Type                                       | Default  | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                   | `PhoneNumberInputValue`                    | —        | Controlled value containing the selected country code and phone number.                                                                          |
| `error`                   | `boolean`                                  | —        | Renders the input in an error state when `true`.                                                                                                 |
| `allowClear`              | `boolean`                                  | —        | Shows a clear button inside the input when `true` and the field has a value.                                                                     |
| `className`               | `string`                                   | —        | —                                                                                                                                                |
| `noBorder`                | `boolean`                                  | false    | Removes the visible border from the input group when `true`.                                                                                     |
| `fixedCountry`            | `boolean`                                  | false    | When `true`, the country code is displayed as a static label and the user cannot change it. When `false`, a searchable dropdown is rendered.     |
| `onChange`                | `((value: PhoneNumberInputValue) => void)` | —        | Called whenever the country or phone number changes.                                                                                             |
| `onClear`                 | `() => void`                               | —        | Called when the clear button is activated.                                                                                                       |
| `onBlur`                  | `(() => void)`                             | —        | Called when the input loses focus.                                                                                                               |
| `optionPlaceholder`       | `string`                                   | "Select" | Placeholder text shown in the country code dropdown when no country is selected.                                                                 |
| `optionSearchPlaceholder` | `string`                                   | —        | Placeholder text shown inside the search field of the country code dropdown. Only relevant when `enableSearch` is `true`.                        |
| `enableSearch`            | `boolean`                                  | —        | Enables a search field inside the country code dropdown.                                                                                         |
| `onHideOptions`           | `(() => void)`                             | —        | Called when the country code dropdown closes.                                                                                                    |
| `onShowOptions`           | `(() => void)`                             | —        | Called when the country code dropdown opens.                                                                                                     |
| `disabled`                | `boolean`                                  | —        | —                                                                                                                                                |
| `name`                    | `string`                                   | —        | —                                                                                                                                                |
| `pattern`                 | `string`                                   | —        | —                                                                                                                                                |
| `placeholder`             | `string`                                   | —        | —                                                                                                                                                |
| `readOnly`                | `boolean`                                  | —        | —                                                                                                                                                |
| `id`                      | `string`                                   | —        | —                                                                                                                                                |
| `autoComplete`            | `string`                                   | —        | —                                                                                                                                                |
| `getAriaLabel`            | `((country?: CountryValue) => string)`     | —        | Returns the accessible label for the phone number input.                                                                                         |
| `label`                   | `FormLabelProps \| string`                 | —        | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`            | `string \| React.ReactNode`                | —        | Inline error text rendered below the input.                                                                                                      |
| `layoutType`              | `FormElementLayoutType`                    | —        | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                 | `ColSpan`                                  | —        | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                  | `ColSpan`                                  | —        | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                  | `ColSpan`                                  | —        | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                  | `ColSpan`                                  | —        | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                  | `ColSpan`                                  | —        | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                  | `ColSpan`                                  | —        | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                 | `ColSpan`                                  | —        | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage; `onChange` returns `{ countryCode, number }`.
-   Use `enableSearch` when the country list is long and users need to find their country quickly.
-   Use `fixedCountry` together with a pre-set `value.countryCode` so the locked code is visible.
-   Use `allowClear` when the field can be optionally cleared by the user.
-   Set `errorMessage` rather than `error` alone so users understand what is wrong.

## Anti-patterns

-   Do not use a plain text input for international phone numbers — formatting and country code handling must be consistent.
-   Do not use without `fixedCountry` when only one country is supported — it creates unnecessary friction.
-   Do not omit `value.countryCode` when `fixedCountry` is true — the locked code won't render without it.
