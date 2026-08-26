# HistogramSlider

Import: `import { HistogramSlider } from "@lifesg/react-design-system/histogram-slider"`

A range slider with a histogram distribution chart above it — used in filter panels where showing the value distribution helps users pick a range (e.g. price range, age range).

## Props

| Prop               | Type                                | Default | Description                                                  |
| ------------------ | ----------------------------------- | ------- | ------------------------------------------------------------ |
| `bins`             | `HistogramBinProps[]`               | `[]`    | Histogram data — array of `{ count, minValue }` objects      |
| `interval`         | `number`                            | —       | **Required.** Width of each bin (e.g. `10` for 0–10, 10–20…) |
| `value`            | `[number, number]`                  | —       | Selected range as `[start, end]`                             |
| `onChange`         | `(value: [number, number]) => void` | —       | Fires on every drag movement                                 |
| `onChangeEnd`      | `(value: [number, number]) => void` | —       | Fires when thumb is released — use for API calls             |
| `disabled`         | `boolean`                           | `false` | Disables interaction                                         |
| `readOnly`         | `boolean`                           | `false` | Display only — no interaction                                |
| `showRangeLabels`  | `boolean`                           | —       | Show min/max value labels below the slider                   |
| `rangeLabelPrefix` | `string`                            | —       | Prefix for range labels (e.g. `"$"`)                         |
| `rangeLabelSuffix` | `string`                            | —       | Suffix for range labels (e.g. `" km"`)                       |
| `renderRangeLabel` | `(value: number) => ReactNode`      | —       | Custom range label renderer — overrides prefix/suffix        |
| `renderEmptyView`  | `() => ReactNode`                   | —       | Renders when `bins` is empty                                 |
| `ariaLabels`       | `[string, string]`                  | —       | Accessible labels for `[minThumb, maxThumb]`                 |
| `aria-labelledby`  | `string`                            | —       | ID of an external label element                              |
| `aria-describedby` | `string`                            | —       | ID of an external description element                        |
| `data-testid`      | `string`                            | —       | Test identifier                                              |

## HistogramBinProps

| Prop       | Type     | Description                                         |
| ---------- | -------- | --------------------------------------------------- |
| `count`    | `number` | Number of items in this bin — determines bar height |
| `minValue` | `number` | Starting value of this bin                          |

## Rules

-   `onChange` fires continuously during drag — do not put API calls here; use `onChangeEnd`.
-   `interval` must match the gap between `minValue` of consecutive bins.
-   Always provide `ariaLabels` or `aria-labelledby` for accessibility.
-   Pair with `Filter` in a filter sidebar — `HistogramSlider` is not a `Form.*` component and does not use `label`/`errorMessage`.
