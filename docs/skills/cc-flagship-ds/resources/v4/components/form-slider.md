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

| Prop                   | Type                                                              | Default | Description                                                   |
| ---------------------- | ----------------------------------------------------------------- | ------- | ------------------------------------------------------------- |
| `value`                | `number`                                                          | —       | Controlled value                                              |
| `min`                  | `number`                                                          | `0`     | Start of the range                                            |
| `max`                  | `number`                                                          | `100`   | End of the range                                              |
| `step`                 | `number`                                                          | `1`     | Interval between values                                       |
| `disabled`             | `boolean`                                                         | —       | Disables the slider; selection not allowed                    |
| `readOnly`             | `boolean`                                                         | —       | Read-only state                                               |
| `id`                   | `string`                                                          | —       | Unique identifier of the component                            |
| `className`            | `string`                                                          | —       | Class selector of the component                               |
| `data-testid`          | `string`                                                          | —       | Test identifier of the component                              |
| `colors`               | `(string \| ((props: ThemeStyleProps) => string \| undefined))[]` | —       | Custom colors for track segments `[leftTrack, rightTrack]`    |
| `showSliderLabels`     | `boolean`                                                         | —       | Shows min and max labels                                      |
| `sliderLabelPrefix`    | `string`                                                          | —       | Text prepended to min/max labels                              |
| `sliderLabelSuffix`    | `string`                                                          | —       | Text appended to min/max labels                               |
| `renderSliderLabel`    | `(value: number) => React.ReactNode`                              | —       | Custom renderer for min/max labels                            |
| `showIndicatorLabel`   | `boolean`                                                         | —       | Shows the current value as an indicator label above the thumb |
| `indicatorLabelPrefix` | `string`                                                          | —       | Text prepended to the indicator label                         |
| `indicatorLabelSuffix` | `string`                                                          | —       | Text appended to the indicator label                          |
| `ariaLabel`            | `string`                                                          | —       | Accessible label for screen readers                           |
| `onChange`             | `(value: number) => void`                                         | —       | Called on every value change (fires continuously during drag) |
| `onChangeEnd`          | `(value: number) => void`                                         | —       | Called when the thumb is released after a change              |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

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
