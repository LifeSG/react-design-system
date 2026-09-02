# Form.Slider

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Selecting a single numeric value within a bounded range (e.g. budget, age, percentage, rating).
-   When the relative position of a value matters more than typing an exact number.

## Usage

### Basic slider with display-only `onChange` and API-safe `onChangeEnd`

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";

const BudgetSlider = () => {
    const [displayValue, setDisplayValue] = useState(500);

    const handleChange = (value: number) => {
        // Safe: fires continuously during drag — update display only
        setDisplayValue(value);
    };

    const handleChangeEnd = (value: number) => {
        // Safe: fires once on mouse/touch release — trigger API calls here
        fetchResults({ maxBudget: value });
    };

    return (
        <Form.Slider
            label={`Budget: $${displayValue}`}
            min={0}
            max={2000}
            step={100}
            value={displayValue}
            onChange={handleChange}
            onChangeEnd={handleChangeEnd}
            showSliderLabels
            sliderLabelPrefix="$"
            showIndicatorLabel
            indicatorLabelPrefix="$"
        />
    );
};
```

**Never put API calls or expensive state updates in `onChange`** — it fires on every pixel of drag movement. Use `onChangeEnd` instead.

### Custom track colours

`colors` takes a two-element array: `[leftTrackColor, rightTrackColor]`.

```tsx
<Form.Slider
    label="Risk level"
    min={0}
    max={10}
    colors={["#4caf50", "#e0e0e0"]}
    showSliderLabels
    sliderLabelSuffix=" / 10"
/>
```

## Props

| Prop                   | Type                                   | Default | Description                                                                                                                                      |
| ---------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                | `number`                               | 0       | The controlled value of the thumb.                                                                                                               |
| `ariaLabel`            | `string`                               | —       | Accessible label for the thumb.                                                                                                                  |
| `onChange`             | `((value: number) => void)`            | —       | Called on every selection change.                                                                                                                |
| `onChangeEnd`          | `((value: number) => void)`            | —       | Called when a thumb is released after selection is complete.                                                                                     |
| `className`            | `string`                               | —       | —                                                                                                                                                |
| `id`                   | `string`                               | —       | —                                                                                                                                                |
| `min`                  | `number`                               | 0       | The lower bound of the slider range.                                                                                                             |
| `max`                  | `number`                               | 100     | The upper bound of the slider range.                                                                                                             |
| `step`                 | `number`                               | 1       | The interval between selectable values.                                                                                                          |
| `disabled`             | `boolean`                              | —       | —                                                                                                                                                |
| `readOnly`             | `boolean`                              | —       | —                                                                                                                                                |
| `colors`               | `(string)[]`                           | —       | Colours applied to each track segment in order. The array length should equal to `numOfThumbs + 1`.                                              |
| `showSliderLabels`     | `boolean`                              | —       | Renders label text at the minimum and maximum ends of the track.                                                                                 |
| `sliderLabelPrefix`    | `string`                               | —       | Text prepended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                         |
| `sliderLabelSuffix`    | `string`                               | —       | Text appended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                          |
| `showIndicatorLabel`   | `boolean`                              | —       | Renders a label above the slider showing the current selection.                                                                                  |
| `indicatorLabelPrefix` | `string`                               | —       | Text prepended to the indicator label value.                                                                                                     |
| `indicatorLabelSuffix` | `string`                               | —       | Text appended to the indicator label value.                                                                                                      |
| `renderSliderLabel`    | `((value: number) => React.ReactNode)` | —       | Custom renderer for the slider labels shown at the min and max track ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.    |
| `label`                | `FormLabelProps \| string`             | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`         | `string \| React.ReactNode`            | —       | Inline error text rendered below the input.                                                                                                      |
| `layoutType`           | `FormElementLayoutType`                | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`              | `ColSpan`                              | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`               | `ColSpan`                              | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`               | `ColSpan`                              | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`               | `ColSpan`                              | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`               | `ColSpan`                              | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`               | `ColSpan`                              | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`              | `ColSpan`                              | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                   | Type                                   | Default | Description                                                                                                                                      |
| ---------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                | `number`                               | 0       | The controlled value of the thumb.                                                                                                               |
| `ariaLabel`            | `string`                               | —       | Accessible label for the thumb.                                                                                                                  |
| `onChange`             | `((value: number) => void)`            | —       | Called on every selection change.                                                                                                                |
| `onChangeEnd`          | `((value: number) => void)`            | —       | Called when a thumb is released after selection is complete.                                                                                     |
| `className`            | `string`                               | —       | —                                                                                                                                                |
| `id`                   | `string`                               | —       | —                                                                                                                                                |
| `min`                  | `number`                               | 0       | The lower bound of the slider range.                                                                                                             |
| `max`                  | `number`                               | 100     | The upper bound of the slider range.                                                                                                             |
| `step`                 | `number`                               | 1       | The interval between selectable values.                                                                                                          |
| `disabled`             | `boolean`                              | —       | —                                                                                                                                                |
| `readOnly`             | `boolean`                              | —       | —                                                                                                                                                |
| `colors`               | `(string)[]`                           | —       | Colours applied to each track segment in order. The array length should equal to `numOfThumbs + 1`.                                              |
| `showSliderLabels`     | `boolean`                              | —       | Renders label text at the minimum and maximum ends of the track.                                                                                 |
| `sliderLabelPrefix`    | `string`                               | —       | Text prepended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                         |
| `sliderLabelSuffix`    | `string`                               | —       | Text appended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                          |
| `showIndicatorLabel`   | `boolean`                              | —       | Renders a label above the slider showing the current selection.                                                                                  |
| `indicatorLabelPrefix` | `string`                               | —       | Text prepended to the indicator label value.                                                                                                     |
| `indicatorLabelSuffix` | `string`                               | —       | Text appended to the indicator label value.                                                                                                      |
| `renderSliderLabel`    | `((value: number) => React.ReactNode)` | —       | Custom renderer for the slider labels shown at the min and max track ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.    |
| `label`                | `FormLabelProps \| string`             | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`         | `string \| React.ReactNode`            | —       | Inline error text rendered below the input.                                                                                                      |
| `layoutType`           | `FormElementLayoutType`                | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`              | `ColSpan`                              | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`               | `ColSpan`                              | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`               | `ColSpan`                              | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`               | `ColSpan`                              | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`               | `ColSpan`                              | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`               | `ColSpan`                              | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`              | `ColSpan`                              | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                   | Type                                   | Default | Description                                                                                                                                      |
| ---------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                | `number`                               | 0       | The controlled value of the thumb.                                                                                                               |
| `ariaLabel`            | `string`                               | —       | Accessible label for the thumb.                                                                                                                  |
| `onChange`             | `((value: number) => void)`            | —       | Called on every selection change.                                                                                                                |
| `onChangeEnd`          | `((value: number) => void)`            | —       | Called when a thumb is released after selection is complete.                                                                                     |
| `className`            | `string`                               | —       | —                                                                                                                                                |
| `id`                   | `string`                               | —       | —                                                                                                                                                |
| `min`                  | `number`                               | 0       | The lower bound of the slider range.                                                                                                             |
| `max`                  | `number`                               | 100     | The upper bound of the slider range.                                                                                                             |
| `step`                 | `number`                               | 1       | The interval between selectable values.                                                                                                          |
| `disabled`             | `boolean`                              | —       | —                                                                                                                                                |
| `readOnly`             | `boolean`                              | —       | —                                                                                                                                                |
| `colors`               | `(string)[]`                           | —       | Colours applied to each track segment in order. The array length should equal to `numOfThumbs + 1`.                                              |
| `showSliderLabels`     | `boolean`                              | —       | Renders label text at the minimum and maximum ends of the track.                                                                                 |
| `sliderLabelPrefix`    | `string`                               | —       | Text prepended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                         |
| `sliderLabelSuffix`    | `string`                               | —       | Text appended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                          |
| `showIndicatorLabel`   | `boolean`                              | —       | Renders a label above the slider showing the current selection.                                                                                  |
| `indicatorLabelPrefix` | `string`                               | —       | Text prepended to the indicator label value.                                                                                                     |
| `indicatorLabelSuffix` | `string`                               | —       | Text appended to the indicator label value.                                                                                                      |
| `renderSliderLabel`    | `((value: number) => React.ReactNode)` | —       | Custom renderer for the slider labels shown at the min and max track ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.    |
| `label`                | `FormLabelProps \| string`             | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`         | `string \| React.ReactNode`            | —       | Inline error text rendered below the input.                                                                                                      |
| `layoutType`           | `FormElementLayoutType`                | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`              | `ColSpan`                              | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`               | `ColSpan`                              | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`               | `ColSpan`                              | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`               | `ColSpan`                              | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`               | `ColSpan`                              | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`               | `ColSpan`                              | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`              | `ColSpan`                              | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                   | Type                                   | Default | Description                                                                                                                                      |
| ---------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                | `number`                               | 0       | The controlled value of the thumb.                                                                                                               |
| `ariaLabel`            | `string`                               | —       | Accessible label for the thumb.                                                                                                                  |
| `onChange`             | `((value: number) => void)`            | —       | Called on every selection change.                                                                                                                |
| `onChangeEnd`          | `((value: number) => void)`            | —       | Called when a thumb is released after selection is complete.                                                                                     |
| `className`            | `string`                               | —       | —                                                                                                                                                |
| `id`                   | `string`                               | —       | —                                                                                                                                                |
| `min`                  | `number`                               | 0       | The lower bound of the slider range.                                                                                                             |
| `max`                  | `number`                               | 100     | The upper bound of the slider range.                                                                                                             |
| `step`                 | `number`                               | 1       | The interval between selectable values.                                                                                                          |
| `disabled`             | `boolean`                              | —       | —                                                                                                                                                |
| `readOnly`             | `boolean`                              | —       | —                                                                                                                                                |
| `colors`               | `(string)[]`                           | —       | Colours applied to each track segment in order. The array length should equal to `numOfThumbs + 1`.                                              |
| `showSliderLabels`     | `boolean`                              | —       | Renders label text at the minimum and maximum ends of the track.                                                                                 |
| `sliderLabelPrefix`    | `string`                               | —       | Text prepended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                         |
| `sliderLabelSuffix`    | `string`                               | —       | Text appended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                          |
| `showIndicatorLabel`   | `boolean`                              | —       | Renders a label above the slider showing the current selection.                                                                                  |
| `indicatorLabelPrefix` | `string`                               | —       | Text prepended to the indicator label value.                                                                                                     |
| `indicatorLabelSuffix` | `string`                               | —       | Text appended to the indicator label value.                                                                                                      |
| `renderSliderLabel`    | `((value: number) => React.ReactNode)` | —       | Custom renderer for the slider labels shown at the min and max track ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.    |
| `label`                | `FormLabelProps \| string`             | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`         | `string \| React.ReactNode`            | —       | Inline error text rendered below the input.                                                                                                      |
| `layoutType`           | `FormElementLayoutType`                | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`              | `ColSpan`                              | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`               | `ColSpan`                              | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`               | `ColSpan`                              | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`               | `ColSpan`                              | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`               | `ColSpan`                              | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`               | `ColSpan`                              | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`              | `ColSpan`                              | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                   | Type                                   | Default | Description                                                                                                                                      |
| ---------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                | `number`                               | 0       | The controlled value of the thumb.                                                                                                               |
| `ariaLabel`            | `string`                               | —       | Accessible label for the thumb.                                                                                                                  |
| `onChange`             | `((value: number) => void)`            | —       | Called on every selection change.                                                                                                                |
| `onChangeEnd`          | `((value: number) => void)`            | —       | Called when a thumb is released after selection is complete.                                                                                     |
| `className`            | `string`                               | —       | —                                                                                                                                                |
| `id`                   | `string`                               | —       | —                                                                                                                                                |
| `min`                  | `number`                               | 0       | The lower bound of the slider range.                                                                                                             |
| `max`                  | `number`                               | 100     | The upper bound of the slider range.                                                                                                             |
| `step`                 | `number`                               | 1       | The interval between selectable values.                                                                                                          |
| `disabled`             | `boolean`                              | —       | —                                                                                                                                                |
| `readOnly`             | `boolean`                              | —       | —                                                                                                                                                |
| `colors`               | `(string)[]`                           | —       | Colours applied to each track segment in order. The array length should equal to `numOfThumbs + 1`.                                              |
| `showSliderLabels`     | `boolean`                              | —       | Renders label text at the minimum and maximum ends of the track.                                                                                 |
| `sliderLabelPrefix`    | `string`                               | —       | Text prepended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                         |
| `sliderLabelSuffix`    | `string`                               | —       | Text appended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                          |
| `showIndicatorLabel`   | `boolean`                              | —       | Renders a label above the slider showing the current selection.                                                                                  |
| `indicatorLabelPrefix` | `string`                               | —       | Text prepended to the indicator label value.                                                                                                     |
| `indicatorLabelSuffix` | `string`                               | —       | Text appended to the indicator label value.                                                                                                      |
| `renderSliderLabel`    | `((value: number) => React.ReactNode)` | —       | Custom renderer for the slider labels shown at the min and max track ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.    |
| `label`                | `FormLabelProps \| string`             | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`         | `string \| React.ReactNode`            | —       | Inline error text rendered below the input.                                                                                                      |
| `layoutType`           | `FormElementLayoutType`                | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`              | `ColSpan`                              | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`               | `ColSpan`                              | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`               | `ColSpan`                              | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`               | `ColSpan`                              | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`               | `ColSpan`                              | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`               | `ColSpan`                              | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`              | `ColSpan`                              | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop                   | Type                                   | Default | Description                                                                                                                                      |
| ---------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                | `number`                               | 0       | The controlled value of the thumb.                                                                                                               |
| `ariaLabel`            | `string`                               | —       | Accessible label for the thumb.                                                                                                                  |
| `onChange`             | `((value: number) => void)`            | —       | Called on every selection change.                                                                                                                |
| `onChangeEnd`          | `((value: number) => void)`            | —       | Called when a thumb is released after selection is complete.                                                                                     |
| `className`            | `string`                               | —       | —                                                                                                                                                |
| `id`                   | `string`                               | —       | —                                                                                                                                                |
| `min`                  | `number`                               | 0       | The lower bound of the slider range.                                                                                                             |
| `max`                  | `number`                               | 100     | The upper bound of the slider range.                                                                                                             |
| `step`                 | `number`                               | 1       | The interval between selectable values.                                                                                                          |
| `disabled`             | `boolean`                              | —       | —                                                                                                                                                |
| `readOnly`             | `boolean`                              | —       | —                                                                                                                                                |
| `colors`               | `(string)[]`                           | —       | Colours applied to each track segment in order. The array length should equal to `numOfThumbs + 1`.                                              |
| `showSliderLabels`     | `boolean`                              | —       | Renders label text at the minimum and maximum ends of the track.                                                                                 |
| `sliderLabelPrefix`    | `string`                               | —       | Text prepended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                         |
| `sliderLabelSuffix`    | `string`                               | —       | Text appended to each slider label value. Ignored when `renderSliderLabel` is provided.                                                          |
| `showIndicatorLabel`   | `boolean`                              | —       | Renders a label above the slider showing the current selection.                                                                                  |
| `indicatorLabelPrefix` | `string`                               | —       | Text prepended to the indicator label value.                                                                                                     |
| `indicatorLabelSuffix` | `string`                               | —       | Text appended to the indicator label value.                                                                                                      |
| `renderSliderLabel`    | `((value: number) => React.ReactNode)` | —       | Custom renderer for the slider labels shown at the min and max track ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.    |
| `label`                | `FormLabelProps \| string`             | —       | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`         | `string \| React.ReactNode`            | —       | Inline error text rendered below the input.                                                                                                      |
| `layoutType`           | `FormElementLayoutType`                | —       | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`              | `ColSpan`                              | —       | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`               | `ColSpan`                              | —       | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`               | `ColSpan`                              | —       | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`               | `ColSpan`                              | —       | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`               | `ColSpan`                              | —       | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`               | `ColSpan`                              | —       | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`              | `ColSpan`                              | —       | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Rules

-   Always supply a `label` so the field is accessible.
-   Always set `min` and `max` to meaningful bounds for the use case.
-   Use `step` to restrict values to meaningful increments (e.g. `step={500}` for a budget slider).
-   Use `onChangeEnd` for expensive operations (API calls, heavy computations) — `onChange` fires on every pixel of movement.
-   Enable `showSliderLabels` so users know the range bounds.
-   Enable `showIndicatorLabel` so users can see the current value while dragging.
-   Provide `ariaLabel` when the label alone does not fully describe the slider's purpose to screen readers.
-   `onChange` fires continuously during drag; use `onChangeEnd` for expensive operations such as API calls.
-   `colors` array format is `[leftTrack, rightTrack]`.

## Anti-patterns

-   Do not use `onChange` to trigger API calls — use `onChangeEnd` to avoid flooding the network.
-   Do not use when the user needs to enter a precise value — prefer a number input in that case.
-   Do not omit `min` and `max` — the defaults (0–100) may not be appropriate for the domain.
