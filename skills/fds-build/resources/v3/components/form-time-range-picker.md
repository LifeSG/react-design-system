# Form.TimeRangePicker

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Collecting a start and end time from the user (e.g. operating hours, meeting slot, booking window).
-   Use `variant="combobox"` with `interval` when users should pick from fixed time slots (e.g. every 30 minutes).
-   Use `variant="dial"` (default) for freeform time selection.

## Usage

```tsx
const StyledTimeRangePicker = styled(Form.TimeRangePicker)`
    ${MediaQuery.MinWidth.lg} {
        max-width: 24rem;
    }
`;
```

Defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a styled wrapper.

## Props

| Prop                     | Type                                      | Default       | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                                  | —             | —                                                                                                                                                |
| `id`                     | `string`                                  | —             | —                                                                                                                                                |
| `style`                  | `React.CSSProperties`                     | —             | —                                                                                                                                                |
| `aria-labelledby`        | `string`                                  | —             | ID of an element that labels both start and end time inputs.                                                                                     |
| `aria-describedby`       | `string`                                  | —             | ID of an element that describes both start and end time inputs.                                                                                  |
| `aria-invalid`           | `boolean`                                 | —             | —                                                                                                                                                |
| `value`                  | `TimeRangePickerValue`                    | —             | An object with `start` and `end` values as an empty string or a string based format.                                                             |
| `format`                 | `TimeRangePickerFormat`                   | "24hr"        | The time display and input format.                                                                                                               |
| `disabled`               | `boolean`                                 | —             | —                                                                                                                                                |
| `readOnly`               | `boolean`                                 | —             | —                                                                                                                                                |
| `error`                  | `boolean`                                 | —             | —                                                                                                                                                |
| `variant`                | `TimeRangePickerVariant`                  | "dial"        | The picker interaction style.                                                                                                                    |
| `interval`               | `number`                                  | —             | Minute interval between each option in the combobox dropdowns.                                                                                   |
| `startLimit`             | `string`                                  | —             | Earliest selectable time shown in the combobox dropdowns.                                                                                        |
| `endLimit`               | `string`                                  | —             | Latest selectable time shown in the combobox dropdowns.                                                                                          |
| `initialScrollStartTime` | `string`                                  | —             | The time that the start field dropdown scrolls to on open..                                                                                      |
| `initialScrollEndTime`   | `string`                                  | —             | The time that the end field dropdown scrolls to on open.                                                                                         |
| `alignment`              | `DropdownAlignmentType`                   | —             | Aligns the dropdown relative to the trigger element.                                                                                             |
| `dropdownZIndex`         | `number`                                  | —             | CSS `z-index` applied to the dropdown overlay.                                                                                                   |
| `dropdownRootNode`       | `RefObject<HTMLElement>`                  | document.body | The root element that contains the dropdown element.                                                                                             |
| `onChange`               | `((value: TimeRangePickerValue) => void)` | —             | Called when the selected time range changes.                                                                                                     |
| `onFocus`                | `(() => void)`                            | —             | Called when the field receives focus.                                                                                                            |
| `onBlur`                 | `(() => void)`                            | —             | Called when the field loses focus.                                                                                                               |
| `label`                  | `FormLabelProps \| string`                | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`           | `string \| React.ReactNode`               | —             | Inline error text rendered below the input.                                                                                                      |
| `layoutType`             | `FormElementLayoutType`                   | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                | `ColSpan`                                 | —             | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                 | `ColSpan`                                 | —             | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                 | `ColSpan`                                 | —             | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                 | `ColSpan`                                 | —             | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                 | `ColSpan`                                 | —             | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                 | `ColSpan`                                 | —             | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                | `ColSpan`                                 | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Combobox-variant-specific props

| Prop                     | Type     | Default | Description                                                  |
| ------------------------ | -------- | ------- | ------------------------------------------------------------ |
| `interval`               | `number` | `15`    | Minutes between each dropdown option                         |
| `startLimit`             | `string` | —       | Earliest time shown in the dropdown                          |
| `endLimit`               | `string` | —       | Latest time shown in the dropdown                            |
| `initialScrollStartTime` | `string` | —       | Time the start dropdown scrolls to when start field is empty |
| `initialScrollEndTime`   | `string` | —       | Time the end dropdown scrolls to when end field is empty     |

## TimeRangePickerValue

| Prop    | Type     | Description                                                                                                 |
| ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `start` | `string` | Start time. Dial 24hr: `"HH:mm"`, dial 12hr: `"hh:mmA"`. Combobox 24hr: `"HH:mm"`, combobox 12hr: `"h:mma"` |
| `end`   | `string` | End time, same format as `start`                                                                            |

## Props

| Prop                     | Type                                      | Default       | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                                  | —             | —                                                                                                                                                |
| `id`                     | `string`                                  | —             | —                                                                                                                                                |
| `style`                  | `React.CSSProperties`                     | —             | —                                                                                                                                                |
| `aria-labelledby`        | `string`                                  | —             | ID of an element that labels both start and end time inputs.                                                                                     |
| `aria-describedby`       | `string`                                  | —             | ID of an element that describes both start and end time inputs.                                                                                  |
| `aria-invalid`           | `boolean`                                 | —             | —                                                                                                                                                |
| `value`                  | `TimeRangePickerValue`                    | —             | An object with `start` and `end` values as an empty string or a string based format.                                                             |
| `format`                 | `TimeRangePickerFormat`                   | "24hr"        | The time display and input format.                                                                                                               |
| `disabled`               | `boolean`                                 | —             | —                                                                                                                                                |
| `readOnly`               | `boolean`                                 | —             | —                                                                                                                                                |
| `error`                  | `boolean`                                 | —             | —                                                                                                                                                |
| `variant`                | `TimeRangePickerVariant`                  | "dial"        | The picker interaction style.                                                                                                                    |
| `interval`               | `number`                                  | —             | Minute interval between each option in the combobox dropdowns.                                                                                   |
| `startLimit`             | `string`                                  | —             | Earliest selectable time shown in the combobox dropdowns.                                                                                        |
| `endLimit`               | `string`                                  | —             | Latest selectable time shown in the combobox dropdowns.                                                                                          |
| `initialScrollStartTime` | `string`                                  | —             | The time that the start field dropdown scrolls to on open..                                                                                      |
| `initialScrollEndTime`   | `string`                                  | —             | The time that the end field dropdown scrolls to on open.                                                                                         |
| `alignment`              | `DropdownAlignmentType`                   | —             | Aligns the dropdown relative to the trigger element.                                                                                             |
| `dropdownZIndex`         | `number`                                  | —             | CSS `z-index` applied to the dropdown overlay.                                                                                                   |
| `dropdownRootNode`       | `RefObject<HTMLElement>`                  | document.body | The root element that contains the dropdown element.                                                                                             |
| `onChange`               | `((value: TimeRangePickerValue) => void)` | —             | Called when the selected time range changes.                                                                                                     |
| `onFocus`                | `(() => void)`                            | —             | Called when the field receives focus.                                                                                                            |
| `onBlur`                 | `(() => void)`                            | —             | Called when the field loses focus.                                                                                                               |
| `label`                  | `FormLabelProps \| string`                | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`           | `string \| React.ReactNode`               | —             | Inline error text rendered below the input.                                                                                                      |
| `layoutType`             | `FormElementLayoutType`                   | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                | `ColSpan`                                 | —             | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                 | `ColSpan`                                 | —             | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                 | `ColSpan`                                 | —             | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                 | `ColSpan`                                 | —             | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                 | `ColSpan`                                 | —             | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                 | `ColSpan`                                 | —             | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                | `ColSpan`                                 | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                     | Type                                      | Default       | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                                  | —             | —                                                                                                                                                |
| `id`                     | `string`                                  | —             | —                                                                                                                                                |
| `style`                  | `React.CSSProperties`                     | —             | —                                                                                                                                                |
| `aria-labelledby`        | `string`                                  | —             | ID of an element that labels both start and end time inputs.                                                                                     |
| `aria-describedby`       | `string`                                  | —             | ID of an element that describes both start and end time inputs.                                                                                  |
| `aria-invalid`           | `boolean`                                 | —             | —                                                                                                                                                |
| `value`                  | `TimeRangePickerValue`                    | —             | An object with `start` and `end` values as an empty string or a string based format.                                                             |
| `format`                 | `TimeRangePickerFormat`                   | "24hr"        | The time display and input format.                                                                                                               |
| `disabled`               | `boolean`                                 | —             | —                                                                                                                                                |
| `readOnly`               | `boolean`                                 | —             | —                                                                                                                                                |
| `error`                  | `boolean`                                 | —             | —                                                                                                                                                |
| `variant`                | `TimeRangePickerVariant`                  | "dial"        | The picker interaction style.                                                                                                                    |
| `interval`               | `number`                                  | —             | Minute interval between each option in the combobox dropdowns.                                                                                   |
| `startLimit`             | `string`                                  | —             | Earliest selectable time shown in the combobox dropdowns.                                                                                        |
| `endLimit`               | `string`                                  | —             | Latest selectable time shown in the combobox dropdowns.                                                                                          |
| `initialScrollStartTime` | `string`                                  | —             | The time that the start field dropdown scrolls to on open..                                                                                      |
| `initialScrollEndTime`   | `string`                                  | —             | The time that the end field dropdown scrolls to on open.                                                                                         |
| `alignment`              | `DropdownAlignmentType`                   | —             | Aligns the dropdown relative to the trigger element.                                                                                             |
| `dropdownZIndex`         | `number`                                  | —             | CSS `z-index` applied to the dropdown overlay.                                                                                                   |
| `dropdownRootNode`       | `RefObject<HTMLElement>`                  | document.body | The root element that contains the dropdown element.                                                                                             |
| `onChange`               | `((value: TimeRangePickerValue) => void)` | —             | Called when the selected time range changes.                                                                                                     |
| `onFocus`                | `(() => void)`                            | —             | Called when the field receives focus.                                                                                                            |
| `onBlur`                 | `(() => void)`                            | —             | Called when the field loses focus.                                                                                                               |
| `label`                  | `FormLabelProps \| string`                | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`           | `string \| React.ReactNode`               | —             | Inline error text rendered below the input.                                                                                                      |
| `layoutType`             | `FormElementLayoutType`                   | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                | `ColSpan`                                 | —             | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                 | `ColSpan`                                 | —             | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                 | `ColSpan`                                 | —             | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                 | `ColSpan`                                 | —             | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                 | `ColSpan`                                 | —             | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                 | `ColSpan`                                 | —             | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                | `ColSpan`                                 | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                     | Type                                      | Default       | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                                  | —             | —                                                                                                                                                |
| `id`                     | `string`                                  | —             | —                                                                                                                                                |
| `style`                  | `React.CSSProperties`                     | —             | —                                                                                                                                                |
| `aria-labelledby`        | `string`                                  | —             | ID of an element that labels both start and end time inputs.                                                                                     |
| `aria-describedby`       | `string`                                  | —             | ID of an element that describes both start and end time inputs.                                                                                  |
| `aria-invalid`           | `boolean`                                 | —             | —                                                                                                                                                |
| `value`                  | `TimeRangePickerValue`                    | —             | An object with `start` and `end` values as an empty string or a string based format.                                                             |
| `format`                 | `TimeRangePickerFormat`                   | "24hr"        | The time display and input format.                                                                                                               |
| `disabled`               | `boolean`                                 | —             | —                                                                                                                                                |
| `readOnly`               | `boolean`                                 | —             | —                                                                                                                                                |
| `error`                  | `boolean`                                 | —             | —                                                                                                                                                |
| `variant`                | `TimeRangePickerVariant`                  | "dial"        | The picker interaction style.                                                                                                                    |
| `interval`               | `number`                                  | —             | Minute interval between each option in the combobox dropdowns.                                                                                   |
| `startLimit`             | `string`                                  | —             | Earliest selectable time shown in the combobox dropdowns.                                                                                        |
| `endLimit`               | `string`                                  | —             | Latest selectable time shown in the combobox dropdowns.                                                                                          |
| `initialScrollStartTime` | `string`                                  | —             | The time that the start field dropdown scrolls to on open..                                                                                      |
| `initialScrollEndTime`   | `string`                                  | —             | The time that the end field dropdown scrolls to on open.                                                                                         |
| `alignment`              | `DropdownAlignmentType`                   | —             | Aligns the dropdown relative to the trigger element.                                                                                             |
| `dropdownZIndex`         | `number`                                  | —             | CSS `z-index` applied to the dropdown overlay.                                                                                                   |
| `dropdownRootNode`       | `RefObject<HTMLElement>`                  | document.body | The root element that contains the dropdown element.                                                                                             |
| `onChange`               | `((value: TimeRangePickerValue) => void)` | —             | Called when the selected time range changes.                                                                                                     |
| `onFocus`                | `(() => void)`                            | —             | Called when the field receives focus.                                                                                                            |
| `onBlur`                 | `(() => void)`                            | —             | Called when the field loses focus.                                                                                                               |
| `label`                  | `FormLabelProps \| string`                | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`           | `string \| React.ReactNode`               | —             | Inline error text rendered below the input.                                                                                                      |
| `layoutType`             | `FormElementLayoutType`                   | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                | `ColSpan`                                 | —             | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                 | `ColSpan`                                 | —             | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                 | `ColSpan`                                 | —             | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                 | `ColSpan`                                 | —             | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                 | `ColSpan`                                 | —             | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                 | `ColSpan`                                 | —             | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                | `ColSpan`                                 | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                     | Type                                      | Default       | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                                  | —             | —                                                                                                                                                |
| `id`                     | `string`                                  | —             | —                                                                                                                                                |
| `style`                  | `React.CSSProperties`                     | —             | —                                                                                                                                                |
| `aria-labelledby`        | `string`                                  | —             | ID of an element that labels both start and end time inputs.                                                                                     |
| `aria-describedby`       | `string`                                  | —             | ID of an element that describes both start and end time inputs.                                                                                  |
| `aria-invalid`           | `boolean`                                 | —             | —                                                                                                                                                |
| `value`                  | `TimeRangePickerValue`                    | —             | An object with `start` and `end` values as an empty string or a string based format.                                                             |
| `format`                 | `TimeRangePickerFormat`                   | "24hr"        | The time display and input format.                                                                                                               |
| `disabled`               | `boolean`                                 | —             | —                                                                                                                                                |
| `readOnly`               | `boolean`                                 | —             | —                                                                                                                                                |
| `error`                  | `boolean`                                 | —             | —                                                                                                                                                |
| `variant`                | `TimeRangePickerVariant`                  | "dial"        | The picker interaction style.                                                                                                                    |
| `interval`               | `number`                                  | —             | Minute interval between each option in the combobox dropdowns.                                                                                   |
| `startLimit`             | `string`                                  | —             | Earliest selectable time shown in the combobox dropdowns.                                                                                        |
| `endLimit`               | `string`                                  | —             | Latest selectable time shown in the combobox dropdowns.                                                                                          |
| `initialScrollStartTime` | `string`                                  | —             | The time that the start field dropdown scrolls to on open..                                                                                      |
| `initialScrollEndTime`   | `string`                                  | —             | The time that the end field dropdown scrolls to on open.                                                                                         |
| `alignment`              | `DropdownAlignmentType`                   | —             | Aligns the dropdown relative to the trigger element.                                                                                             |
| `dropdownZIndex`         | `number`                                  | —             | CSS `z-index` applied to the dropdown overlay.                                                                                                   |
| `dropdownRootNode`       | `RefObject<HTMLElement>`                  | document.body | The root element that contains the dropdown element.                                                                                             |
| `onChange`               | `((value: TimeRangePickerValue) => void)` | —             | Called when the selected time range changes.                                                                                                     |
| `onFocus`                | `(() => void)`                            | —             | Called when the field receives focus.                                                                                                            |
| `onBlur`                 | `(() => void)`                            | —             | Called when the field loses focus.                                                                                                               |
| `label`                  | `FormLabelProps \| string`                | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`           | `string \| React.ReactNode`               | —             | Inline error text rendered below the input.                                                                                                      |
| `layoutType`             | `FormElementLayoutType`                   | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                | `ColSpan`                                 | —             | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                 | `ColSpan`                                 | —             | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                 | `ColSpan`                                 | —             | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                 | `ColSpan`                                 | —             | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                 | `ColSpan`                                 | —             | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                 | `ColSpan`                                 | —             | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                | `ColSpan`                                 | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                     | Type                                      | Default       | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                                  | —             | —                                                                                                                                                |
| `id`                     | `string`                                  | —             | —                                                                                                                                                |
| `style`                  | `React.CSSProperties`                     | —             | —                                                                                                                                                |
| `aria-labelledby`        | `string`                                  | —             | ID of an element that labels both start and end time inputs.                                                                                     |
| `aria-describedby`       | `string`                                  | —             | ID of an element that describes both start and end time inputs.                                                                                  |
| `aria-invalid`           | `boolean`                                 | —             | —                                                                                                                                                |
| `value`                  | `TimeRangePickerValue`                    | —             | An object with `start` and `end` values as an empty string or a string based format.                                                             |
| `format`                 | `TimeRangePickerFormat`                   | "24hr"        | The time display and input format.                                                                                                               |
| `disabled`               | `boolean`                                 | —             | —                                                                                                                                                |
| `readOnly`               | `boolean`                                 | —             | —                                                                                                                                                |
| `error`                  | `boolean`                                 | —             | —                                                                                                                                                |
| `variant`                | `TimeRangePickerVariant`                  | "dial"        | The picker interaction style.                                                                                                                    |
| `interval`               | `number`                                  | —             | Minute interval between each option in the combobox dropdowns.                                                                                   |
| `startLimit`             | `string`                                  | —             | Earliest selectable time shown in the combobox dropdowns.                                                                                        |
| `endLimit`               | `string`                                  | —             | Latest selectable time shown in the combobox dropdowns.                                                                                          |
| `initialScrollStartTime` | `string`                                  | —             | The time that the start field dropdown scrolls to on open..                                                                                      |
| `initialScrollEndTime`   | `string`                                  | —             | The time that the end field dropdown scrolls to on open.                                                                                         |
| `alignment`              | `DropdownAlignmentType`                   | —             | Aligns the dropdown relative to the trigger element.                                                                                             |
| `dropdownZIndex`         | `number`                                  | —             | CSS `z-index` applied to the dropdown overlay.                                                                                                   |
| `dropdownRootNode`       | `RefObject<HTMLElement>`                  | document.body | The root element that contains the dropdown element.                                                                                             |
| `onChange`               | `((value: TimeRangePickerValue) => void)` | —             | Called when the selected time range changes.                                                                                                     |
| `onFocus`                | `(() => void)`                            | —             | Called when the field receives focus.                                                                                                            |
| `onBlur`                 | `(() => void)`                            | —             | Called when the field loses focus.                                                                                                               |
| `label`                  | `FormLabelProps \| string`                | —             | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`           | `string \| React.ReactNode`               | —             | Inline error text rendered below the input.                                                                                                      |
| `layoutType`             | `FormElementLayoutType`                   | —             | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`                | `ColSpan`                                 | —             | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`                 | `ColSpan`                                 | —             | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`                 | `ColSpan`                                 | —             | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`                 | `ColSpan`                                 | —             | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`                 | `ColSpan`                                 | —             | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`                 | `ColSpan`                                 | —             | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`                | `ColSpan`                                 | —             | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage; `onChange` receives a `TimeRangePickerValue`.
-   Match `format` to the expected string format in `TimeRangePickerValue`.
-   Use `startLimit`/`endLimit` with `combobox` variant to restrict available options to valid business hours.
-   Set `errorMessage` rather than `error` alone.
-   Use `dropdownRootNode` when inside a modal or scrollable container.
-   Time string format differs between `dial` and `combobox` variants — see `TimeRangePickerValue` above.
-   `interval`, `startLimit`, `endLimit`, and `initialScroll*` props only apply when `variant="combobox"`.

## Anti-patterns

-   Do not use for single time selection — use `Form.TimePicker` instead.
-   Do not mix dial and combobox time string formats — the format differs between variants.
-   Do not set combobox-specific props (`interval`, `startLimit`, `endLimit`, `initialScroll*`) when `variant="dial"`.
