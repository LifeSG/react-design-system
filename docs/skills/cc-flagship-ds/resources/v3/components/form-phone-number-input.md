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

| Prop                      | Type                                     | Default    | Description                                                             |
| ------------------------- | ---------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| `value`                   | `PhoneNumberInputValue`                  | —          | Controlled value containing country code and number                     |
| `allowClear`              | `boolean`                                | —          | Shows a clear icon button inside the input                              |
| `noBorder`                | `boolean`                                | `false`    | Removes the border wrapper                                              |
| `disabled`                | `boolean`                                | —          | Disables the component; selection not allowed                           |
| `readOnly`                | `boolean`                                | —          | Read-only state; input not allowed                                      |
| `error`                   | `boolean`                                | —          | Sets error display (not needed if `errorMessage` is set)                |
| `enableSearch`            | `boolean`                                | `false`    | Enables text search within the country code dropdown                    |
| `fixedCountry`            | `boolean`                                | `false`    | Locks the country code; hides the dropdown selector                     |
| `id`                      | `string`                                 | —          | Unique identifier of the component                                      |
| `name`                    | `string`                                 | —          | Name attribute of the component                                         |
| `className`               | `string`                                 | —          | Class selector of the component                                         |
| `data-testid`             | `string`                                 | —          | Test identifier of the component                                        |
| `optionPlaceholder`       | `string`                                 | —          | Placeholder for the country code dropdown                               |
| `optionSearchPlaceholder` | `string`                                 | —          | Placeholder for the country code search field (requires `enableSearch`) |
| `pattern`                 | `string`                                 | —          | Regex the input value should match                                      |
| `placeholder`             | `string`                                 | `"Select"` | Placeholder for the number input                                        |
| `autoComplete`            | `string`                                 | —          | `autocomplete` attribute for the input field                            |
| `onChange`                | `(value: PhoneNumberInputValue) => void` | —          | Called on number input change or country code selection                 |
| `onClear`                 | `() => void`                             | —          | Called when the clear icon is clicked                                   |
| `onBlur`                  | `() => void`                             | —          | Called on defocus                                                       |
| `onShowOptions`           | `() => void`                             | —          | Called when the country code dropdown expands                           |
| `onHideOptions`           | `() => void`                             | —          | Called when the country code dropdown collapses                         |

## PhoneNumberInputValue

| Prop          | Type     | Description                                                                                                             |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `number`      | `string` | The phone number                                                                                                        |
| `countryCode` | `string` | The country code (e.g. `"+65"`). The `+` prefix is optional on input but always included in the `onChange` return value |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

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
