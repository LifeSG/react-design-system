# Form.DateInput

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Collecting a single date from the user (e.g. date of birth, appointment date, submission deadline).
-   Any form field that requires calendar-based date selection.

## Usage

```tsx
const StyledDateInput = styled(Form.DateInput)`
    ${MediaQuery.MinWidth.lg} {
        max-width: 24rem;
    }
`;
```

Defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a styled wrapper — `max-width` constrains the component without conflicting with its internal `width: 100%`.

## Props

| Prop                       | Type                                  | Default       | Description                                                                                                                                             |
| -------------------------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —             | —                                                                                                                                                       |
| `id`                       | `string`                              | —             | —                                                                                                                                                       |
| `dropdownRootNode`         | `RefObject<HTMLElement>`              | document.body | The root element that contains the dropdown element.                                                                                                    |
| `readOnly`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `hideInputKeyboard`        | `boolean`                             | —             | When `true`, suppresses the native on-screen keyboard on mobile devices while still allowing the calendar picker to open.                               |
| `value`                    | `string`                              | —             | The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.                                                                 |
| `error`                    | `boolean`                             | —             | Renders the input in an error state.                                                                                                                    |
| `disabled`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `withButton`               | `boolean`                             | true          | Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown. When `false`, a selection immediately commits and closes the calendar. |
| `zIndex`                   | `number`                              | —             | The z-index of the calendar dropdown.                                                                                                                   |
| `onChange`                 | `((value: string) => void)`           | —             | Called when the user commits a date selection. Receives the selected date as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared. |
| `onFocus`                  | `(() => void)`                        | —             | Called when the input receives focus.                                                                                                                   |
| `onBlur`                   | `(() => void)`                        | —             | Called when focus leaves both the input and the calendar dropdown.                                                                                      |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —             | Called when the visible month or year in the calendar changes.                                                                                          |
| `minDate`                  | `string`                              | —             | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `maxDate`                  | `string`                              | —             | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `disabledDates`            | `string[]`                            | —             | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                                                                      |
| `allowDisabledSelection`   | `boolean`                             | —             | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable                                                   |
| `showActiveMonthDaysOnly`  | `boolean`                             | —             | Specifies if the calendar should display only dates for the selected month                                                                              |
| `label`                    | `FormLabelProps \| string`            | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                |
| `errorMessage`             | `string \| React.ReactNode`           | —             | Inline error text rendered below the input.                                                                                                             |
| `layoutType`               | `FormElementLayoutType`               | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                            |
| `xxlCols`                  | `ColSpan`                             | —             | Column span at the `xxl` breakpoint.                                                                                                                    |
| `xlCols`                   | `ColSpan`                             | —             | Column span at the `xl` breakpoint.                                                                                                                     |
| `lgCols`                   | `ColSpan`                             | —             | Column span at the `lg` breakpoint.                                                                                                                     |
| `mdCols`                   | `ColSpan`                             | —             | Column span at the `md` breakpoint.                                                                                                                     |
| `smCols`                   | `ColSpan`                             | —             | Column span at the `sm` breakpoint.                                                                                                                     |
| `xsCols`                   | `ColSpan`                             | —             | Column span at the `xs` breakpoint.                                                                                                                     |
| `xxsCols`                  | `ColSpan`                             | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.        |

## YearMonthDisplay

| Prop    | Type     | Description                       |
| ------- | -------- | --------------------------------- |
| `year`  | `number` | Currently displayed year (`YYYY`) |
| `month` | `number` | Currently displayed month (1–12)  |

## Props

| Prop                       | Type                                  | Default       | Description                                                                                                                                             |
| -------------------------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —             | —                                                                                                                                                       |
| `id`                       | `string`                              | —             | —                                                                                                                                                       |
| `dropdownRootNode`         | `RefObject<HTMLElement>`              | document.body | The root element that contains the dropdown element.                                                                                                    |
| `readOnly`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `hideInputKeyboard`        | `boolean`                             | —             | When `true`, suppresses the native on-screen keyboard on mobile devices while still allowing the calendar picker to open.                               |
| `value`                    | `string`                              | —             | The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.                                                                 |
| `error`                    | `boolean`                             | —             | Renders the input in an error state.                                                                                                                    |
| `disabled`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `withButton`               | `boolean`                             | true          | Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown. When `false`, a selection immediately commits and closes the calendar. |
| `zIndex`                   | `number`                              | —             | The z-index of the calendar dropdown.                                                                                                                   |
| `onChange`                 | `((value: string) => void)`           | —             | Called when the user commits a date selection. Receives the selected date as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared. |
| `onFocus`                  | `(() => void)`                        | —             | Called when the input receives focus.                                                                                                                   |
| `onBlur`                   | `(() => void)`                        | —             | Called when focus leaves both the input and the calendar dropdown.                                                                                      |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —             | Called when the visible month or year in the calendar changes.                                                                                          |
| `minDate`                  | `string`                              | —             | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `maxDate`                  | `string`                              | —             | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `disabledDates`            | `string[]`                            | —             | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                                                                      |
| `allowDisabledSelection`   | `boolean`                             | —             | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable                                                   |
| `showActiveMonthDaysOnly`  | `boolean`                             | —             | Specifies if the calendar should display only dates for the selected month                                                                              |
| `label`                    | `FormLabelProps \| string`            | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                |
| `errorMessage`             | `string \| React.ReactNode`           | —             | Inline error text rendered below the input.                                                                                                             |
| `layoutType`               | `FormElementLayoutType`               | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                            |
| `xxlCols`                  | `ColSpan`                             | —             | Column span at the `xxl` breakpoint.                                                                                                                    |
| `xlCols`                   | `ColSpan`                             | —             | Column span at the `xl` breakpoint.                                                                                                                     |
| `lgCols`                   | `ColSpan`                             | —             | Column span at the `lg` breakpoint.                                                                                                                     |
| `mdCols`                   | `ColSpan`                             | —             | Column span at the `md` breakpoint.                                                                                                                     |
| `smCols`                   | `ColSpan`                             | —             | Column span at the `sm` breakpoint.                                                                                                                     |
| `xsCols`                   | `ColSpan`                             | —             | Column span at the `xs` breakpoint.                                                                                                                     |
| `xxsCols`                  | `ColSpan`                             | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.        |

## Props

| Prop                       | Type                                  | Default       | Description                                                                                                                                             |
| -------------------------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —             | —                                                                                                                                                       |
| `id`                       | `string`                              | —             | —                                                                                                                                                       |
| `dropdownRootNode`         | `RefObject<HTMLElement>`              | document.body | The root element that contains the dropdown element.                                                                                                    |
| `readOnly`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `hideInputKeyboard`        | `boolean`                             | —             | When `true`, suppresses the native on-screen keyboard on mobile devices while still allowing the calendar picker to open.                               |
| `value`                    | `string`                              | —             | The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.                                                                 |
| `error`                    | `boolean`                             | —             | Renders the input in an error state.                                                                                                                    |
| `disabled`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `withButton`               | `boolean`                             | true          | Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown. When `false`, a selection immediately commits and closes the calendar. |
| `zIndex`                   | `number`                              | —             | The z-index of the calendar dropdown.                                                                                                                   |
| `onChange`                 | `((value: string) => void)`           | —             | Called when the user commits a date selection. Receives the selected date as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared. |
| `onFocus`                  | `(() => void)`                        | —             | Called when the input receives focus.                                                                                                                   |
| `onBlur`                   | `(() => void)`                        | —             | Called when focus leaves both the input and the calendar dropdown.                                                                                      |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —             | Called when the visible month or year in the calendar changes.                                                                                          |
| `minDate`                  | `string`                              | —             | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `maxDate`                  | `string`                              | —             | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `disabledDates`            | `string[]`                            | —             | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                                                                      |
| `allowDisabledSelection`   | `boolean`                             | —             | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable                                                   |
| `showActiveMonthDaysOnly`  | `boolean`                             | —             | Specifies if the calendar should display only dates for the selected month                                                                              |
| `label`                    | `FormLabelProps \| string`            | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                |
| `errorMessage`             | `string \| React.ReactNode`           | —             | Inline error text rendered below the input.                                                                                                             |
| `layoutType`               | `FormElementLayoutType`               | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                            |
| `xxlCols`                  | `ColSpan`                             | —             | Column span at the `xxl` breakpoint.                                                                                                                    |
| `xlCols`                   | `ColSpan`                             | —             | Column span at the `xl` breakpoint.                                                                                                                     |
| `lgCols`                   | `ColSpan`                             | —             | Column span at the `lg` breakpoint.                                                                                                                     |
| `mdCols`                   | `ColSpan`                             | —             | Column span at the `md` breakpoint.                                                                                                                     |
| `smCols`                   | `ColSpan`                             | —             | Column span at the `sm` breakpoint.                                                                                                                     |
| `xsCols`                   | `ColSpan`                             | —             | Column span at the `xs` breakpoint.                                                                                                                     |
| `xxsCols`                  | `ColSpan`                             | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.        |

## Props

| Prop                       | Type                                  | Default       | Description                                                                                                                                             |
| -------------------------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —             | —                                                                                                                                                       |
| `id`                       | `string`                              | —             | —                                                                                                                                                       |
| `dropdownRootNode`         | `RefObject<HTMLElement>`              | document.body | The root element that contains the dropdown element.                                                                                                    |
| `readOnly`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `hideInputKeyboard`        | `boolean`                             | —             | When `true`, suppresses the native on-screen keyboard on mobile devices while still allowing the calendar picker to open.                               |
| `value`                    | `string`                              | —             | The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.                                                                 |
| `error`                    | `boolean`                             | —             | Renders the input in an error state.                                                                                                                    |
| `disabled`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `withButton`               | `boolean`                             | true          | Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown. When `false`, a selection immediately commits and closes the calendar. |
| `zIndex`                   | `number`                              | —             | The z-index of the calendar dropdown.                                                                                                                   |
| `onChange`                 | `((value: string) => void)`           | —             | Called when the user commits a date selection. Receives the selected date as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared. |
| `onFocus`                  | `(() => void)`                        | —             | Called when the input receives focus.                                                                                                                   |
| `onBlur`                   | `(() => void)`                        | —             | Called when focus leaves both the input and the calendar dropdown.                                                                                      |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —             | Called when the visible month or year in the calendar changes.                                                                                          |
| `minDate`                  | `string`                              | —             | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `maxDate`                  | `string`                              | —             | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `disabledDates`            | `string[]`                            | —             | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                                                                      |
| `allowDisabledSelection`   | `boolean`                             | —             | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable                                                   |
| `showActiveMonthDaysOnly`  | `boolean`                             | —             | Specifies if the calendar should display only dates for the selected month                                                                              |
| `label`                    | `FormLabelProps \| string`            | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                |
| `errorMessage`             | `string \| React.ReactNode`           | —             | Inline error text rendered below the input.                                                                                                             |
| `layoutType`               | `FormElementLayoutType`               | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                            |
| `xxlCols`                  | `ColSpan`                             | —             | Column span at the `xxl` breakpoint.                                                                                                                    |
| `xlCols`                   | `ColSpan`                             | —             | Column span at the `xl` breakpoint.                                                                                                                     |
| `lgCols`                   | `ColSpan`                             | —             | Column span at the `lg` breakpoint.                                                                                                                     |
| `mdCols`                   | `ColSpan`                             | —             | Column span at the `md` breakpoint.                                                                                                                     |
| `smCols`                   | `ColSpan`                             | —             | Column span at the `sm` breakpoint.                                                                                                                     |
| `xsCols`                   | `ColSpan`                             | —             | Column span at the `xs` breakpoint.                                                                                                                     |
| `xxsCols`                  | `ColSpan`                             | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.        |

## Props

| Prop                       | Type                                  | Default       | Description                                                                                                                                             |
| -------------------------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —             | —                                                                                                                                                       |
| `id`                       | `string`                              | —             | —                                                                                                                                                       |
| `dropdownRootNode`         | `RefObject<HTMLElement>`              | document.body | The root element that contains the dropdown element.                                                                                                    |
| `readOnly`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `hideInputKeyboard`        | `boolean`                             | —             | When `true`, suppresses the native on-screen keyboard on mobile devices while still allowing the calendar picker to open.                               |
| `value`                    | `string`                              | —             | The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.                                                                 |
| `error`                    | `boolean`                             | —             | Renders the input in an error state.                                                                                                                    |
| `disabled`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `withButton`               | `boolean`                             | true          | Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown. When `false`, a selection immediately commits and closes the calendar. |
| `zIndex`                   | `number`                              | —             | The z-index of the calendar dropdown.                                                                                                                   |
| `onChange`                 | `((value: string) => void)`           | —             | Called when the user commits a date selection. Receives the selected date as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared. |
| `onFocus`                  | `(() => void)`                        | —             | Called when the input receives focus.                                                                                                                   |
| `onBlur`                   | `(() => void)`                        | —             | Called when focus leaves both the input and the calendar dropdown.                                                                                      |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —             | Called when the visible month or year in the calendar changes.                                                                                          |
| `minDate`                  | `string`                              | —             | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `maxDate`                  | `string`                              | —             | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `disabledDates`            | `string[]`                            | —             | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                                                                      |
| `allowDisabledSelection`   | `boolean`                             | —             | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable                                                   |
| `showActiveMonthDaysOnly`  | `boolean`                             | —             | Specifies if the calendar should display only dates for the selected month                                                                              |
| `label`                    | `FormLabelProps \| string`            | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                |
| `errorMessage`             | `string \| React.ReactNode`           | —             | Inline error text rendered below the input.                                                                                                             |
| `layoutType`               | `FormElementLayoutType`               | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                            |
| `xxlCols`                  | `ColSpan`                             | —             | Column span at the `xxl` breakpoint.                                                                                                                    |
| `xlCols`                   | `ColSpan`                             | —             | Column span at the `xl` breakpoint.                                                                                                                     |
| `lgCols`                   | `ColSpan`                             | —             | Column span at the `lg` breakpoint.                                                                                                                     |
| `mdCols`                   | `ColSpan`                             | —             | Column span at the `md` breakpoint.                                                                                                                     |
| `smCols`                   | `ColSpan`                             | —             | Column span at the `sm` breakpoint.                                                                                                                     |
| `xsCols`                   | `ColSpan`                             | —             | Column span at the `xs` breakpoint.                                                                                                                     |
| `xxsCols`                  | `ColSpan`                             | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.        |

## Props

| Prop                       | Type                                  | Default       | Description                                                                                                                                             |
| -------------------------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —             | —                                                                                                                                                       |
| `id`                       | `string`                              | —             | —                                                                                                                                                       |
| `dropdownRootNode`         | `RefObject<HTMLElement>`              | document.body | The root element that contains the dropdown element.                                                                                                    |
| `readOnly`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `hideInputKeyboard`        | `boolean`                             | —             | When `true`, suppresses the native on-screen keyboard on mobile devices while still allowing the calendar picker to open.                               |
| `value`                    | `string`                              | —             | The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.                                                                 |
| `error`                    | `boolean`                             | —             | Renders the input in an error state.                                                                                                                    |
| `disabled`                 | `boolean`                             | —             | —                                                                                                                                                       |
| `withButton`               | `boolean`                             | true          | Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown. When `false`, a selection immediately commits and closes the calendar. |
| `zIndex`                   | `number`                              | —             | The z-index of the calendar dropdown.                                                                                                                   |
| `onChange`                 | `((value: string) => void)`           | —             | Called when the user commits a date selection. Receives the selected date as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared. |
| `onFocus`                  | `(() => void)`                        | —             | Called when the input receives focus.                                                                                                                   |
| `onBlur`                   | `(() => void)`                        | —             | Called when focus leaves both the input and the calendar dropdown.                                                                                      |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —             | Called when the visible month or year in the calendar changes.                                                                                          |
| `minDate`                  | `string`                              | —             | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `maxDate`                  | `string`                              | —             | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                                                                               |
| `disabledDates`            | `string[]`                            | —             | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                                                                      |
| `allowDisabledSelection`   | `boolean`                             | —             | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable                                                   |
| `showActiveMonthDaysOnly`  | `boolean`                             | —             | Specifies if the calendar should display only dates for the selected month                                                                              |
| `label`                    | `FormLabelProps \| string`            | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                                |
| `errorMessage`             | `string \| React.ReactNode`           | —             | Inline error text rendered below the input.                                                                                                             |
| `layoutType`               | `FormElementLayoutType`               | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                            |
| `xxlCols`                  | `ColSpan`                             | —             | Column span at the `xxl` breakpoint.                                                                                                                    |
| `xlCols`                   | `ColSpan`                             | —             | Column span at the `xl` breakpoint.                                                                                                                     |
| `lgCols`                   | `ColSpan`                             | —             | Column span at the `lg` breakpoint.                                                                                                                     |
| `mdCols`                   | `ColSpan`                             | —             | Column span at the `md` breakpoint.                                                                                                                     |
| `smCols`                   | `ColSpan`                             | —             | Column span at the `sm` breakpoint.                                                                                                                     |
| `xsCols`                   | `ColSpan`                             | —             | Column span at the `xs` breakpoint.                                                                                                                     |
| `xxsCols`                  | `ColSpan`                             | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set.        |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage; `onChange` receives a `YYYY-MM-DD` string.
-   Use `minDate`/`maxDate` to constrain selectable dates to valid business ranges.
-   Use `disabledDates` for known blackout dates (e.g. public holidays).
-   Set `errorMessage` rather than `error` alone so users understand what is wrong.
-   Use `withButton` (default `true`) to require explicit confirmation before the value is committed.
-   Use `readOnly` on review or summary screens where the value should be visible but not editable.
-   Specify `dropdownRootNode` if the component is inside a scrollable container to prevent the calendar from clipping.
-   Date strings use `YYYY-MM-DD` format throughout (value, minDate, maxDate, disabledDates, onChange return).

## Anti-patterns

-   Do not use a plain text input for date collection — the picker enforces valid date formats automatically.
-   Do not set `allowDisabledSelection` unless there is a specific UX reason to allow out-of-range dates.
-   Do not rely on `error` prop alone without an `errorMessage`; users need descriptive feedback.
-   Do not use for date-range selection — use `Form.DateRangeInput` instead.
