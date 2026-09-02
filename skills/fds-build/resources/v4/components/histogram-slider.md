# HistogramSlider

Import: `import { HistogramSlider } from "@lifesg/react-design-system/histogram-slider"`

A range slider with a histogram distribution chart above it — used in filter panels where showing the value distribution helps users pick a range (e.g. price range, age range).

## HistogramBinProps

| Prop       | Type     | Description                                         |
| ---------- | -------- | --------------------------------------------------- |
| `count`    | `number` | Number of items in this bin — determines bar height |
| `minValue` | `number` | Starting value of this bin                          |

## Props — `HistogramBinProps`

| Prop          | Type     | Default | Description                                              |
| ------------- | -------- | ------- | -------------------------------------------------------- |
| `count` \*    | `number` | —       | Number of items that fall within this bin's value range. |
| `minValue` \* | `number` | —       | Lower bound of this bin's value range.                   |

## Props — `HistogramSliderProps`

| Prop               | Type                                   | Default | Description                                                                                                                                             |
| ------------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                               | —       | —                                                                                                                                                       |
| `id`               | `string`                               | —       | —                                                                                                                                                       |
| `bins` \*          | `HistogramBinProps[]`                  | —       | The set of bins to render as bars.                                                                                                                      |
| `interval` \*      | `number`                               | —       | Controls the slider's step increment and minimum selectable range.                                                                                      |
| `disabled`         | `boolean`                              | —       | —                                                                                                                                                       |
| `readOnly`         | `boolean`                              | —       | —                                                                                                                                                       |
| `value`            | `[number, number]`                     | —       | The selected range as `[start, end]`. When omitted, the selection is initialised to `[minValue, minValue + interval]` derived from the provided `bins`. |
| `showRangeLabels`  | `boolean`                              | —       | When `true`, displays the current start and end values above the histogram.                                                                             |
| `rangeLabelPrefix` | `string`                               | —       | Text prepended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                            |
| `rangeLabelSuffix` | `string`                               | —       | Text appended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                             |
| `ariaLabels`       | `[string, string]`                     | —       | Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.                                                                               |
| `aria-labelledby`  | `string`                               | —       | ID of an element that labels the slider group.                                                                                                          |
| `aria-describedby` | `string`                               | —       | ID of an element that describes the slider group.                                                                                                       |
| `renderRangeLabel` | `((value: number) => React.ReactNode)` | —       | Custom renderer for each range label value. When provided, overrides the `rangeLabelPrefix` and `rangeLabelSuffix` combination.                         |
| `onChange`         | `((value: [number, number]) => void)`  | —       | Called on every selection change.                                                                                                                       |
| `onChangeEnd`      | `((value: [number, number]) => void)`  | —       | Called when a thumb is released after selection is complete.                                                                                            |
| `renderEmptyView`  | `(() => React.ReactNode)`              | —       | Rendered in place of the histogram and slider when all bins have a count of zero.                                                                       |

## Props — `HistogramBinProps`

| Prop          | Type     | Default | Description                                              |
| ------------- | -------- | ------- | -------------------------------------------------------- |
| `count` \*    | `number` | —       | Number of items that fall within this bin's value range. |
| `minValue` \* | `number` | —       | Lower bound of this bin's value range.                   |

## Props — `HistogramSliderProps`

| Prop               | Type                                   | Default | Description                                                                                                                                             |
| ------------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                               | —       | —                                                                                                                                                       |
| `id`               | `string`                               | —       | —                                                                                                                                                       |
| `bins` \*          | `HistogramBinProps[]`                  | —       | The set of bins to render as bars.                                                                                                                      |
| `interval` \*      | `number`                               | —       | Controls the slider's step increment and minimum selectable range.                                                                                      |
| `disabled`         | `boolean`                              | —       | —                                                                                                                                                       |
| `readOnly`         | `boolean`                              | —       | —                                                                                                                                                       |
| `value`            | `[number, number]`                     | —       | The selected range as `[start, end]`. When omitted, the selection is initialised to `[minValue, minValue + interval]` derived from the provided `bins`. |
| `showRangeLabels`  | `boolean`                              | —       | When `true`, displays the current start and end values above the histogram.                                                                             |
| `rangeLabelPrefix` | `string`                               | —       | Text prepended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                            |
| `rangeLabelSuffix` | `string`                               | —       | Text appended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                             |
| `ariaLabels`       | `[string, string]`                     | —       | Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.                                                                               |
| `aria-labelledby`  | `string`                               | —       | ID of an element that labels the slider group.                                                                                                          |
| `aria-describedby` | `string`                               | —       | ID of an element that describes the slider group.                                                                                                       |
| `renderRangeLabel` | `((value: number) => React.ReactNode)` | —       | Custom renderer for each range label value. When provided, overrides the `rangeLabelPrefix` and `rangeLabelSuffix` combination.                         |
| `onChange`         | `((value: [number, number]) => void)`  | —       | Called on every selection change.                                                                                                                       |
| `onChangeEnd`      | `((value: [number, number]) => void)`  | —       | Called when a thumb is released after selection is complete.                                                                                            |
| `renderEmptyView`  | `(() => React.ReactNode)`              | —       | Rendered in place of the histogram and slider when all bins have a count of zero.                                                                       |

## Props — `HistogramBinProps`

| Prop          | Type     | Default | Description                                              |
| ------------- | -------- | ------- | -------------------------------------------------------- |
| `count` \*    | `number` | —       | Number of items that fall within this bin's value range. |
| `minValue` \* | `number` | —       | Lower bound of this bin's value range.                   |

## Props — `HistogramSliderProps`

| Prop               | Type                                   | Default | Description                                                                                                                                             |
| ------------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                               | —       | —                                                                                                                                                       |
| `id`               | `string`                               | —       | —                                                                                                                                                       |
| `bins` \*          | `HistogramBinProps[]`                  | —       | The set of bins to render as bars.                                                                                                                      |
| `interval` \*      | `number`                               | —       | Controls the slider's step increment and minimum selectable range.                                                                                      |
| `disabled`         | `boolean`                              | —       | —                                                                                                                                                       |
| `readOnly`         | `boolean`                              | —       | —                                                                                                                                                       |
| `value`            | `[number, number]`                     | —       | The selected range as `[start, end]`. When omitted, the selection is initialised to `[minValue, minValue + interval]` derived from the provided `bins`. |
| `showRangeLabels`  | `boolean`                              | —       | When `true`, displays the current start and end values above the histogram.                                                                             |
| `rangeLabelPrefix` | `string`                               | —       | Text prepended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                            |
| `rangeLabelSuffix` | `string`                               | —       | Text appended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                             |
| `ariaLabels`       | `[string, string]`                     | —       | Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.                                                                               |
| `aria-labelledby`  | `string`                               | —       | ID of an element that labels the slider group.                                                                                                          |
| `aria-describedby` | `string`                               | —       | ID of an element that describes the slider group.                                                                                                       |
| `renderRangeLabel` | `((value: number) => React.ReactNode)` | —       | Custom renderer for each range label value. When provided, overrides the `rangeLabelPrefix` and `rangeLabelSuffix` combination.                         |
| `onChange`         | `((value: [number, number]) => void)`  | —       | Called on every selection change.                                                                                                                       |
| `onChangeEnd`      | `((value: [number, number]) => void)`  | —       | Called when a thumb is released after selection is complete.                                                                                            |
| `renderEmptyView`  | `(() => React.ReactNode)`              | —       | Rendered in place of the histogram and slider when all bins have a count of zero.                                                                       |

## Props — `HistogramBinProps`

| Prop          | Type     | Default | Description                                              |
| ------------- | -------- | ------- | -------------------------------------------------------- |
| `count` \*    | `number` | —       | Number of items that fall within this bin's value range. |
| `minValue` \* | `number` | —       | Lower bound of this bin's value range.                   |

## Props — `HistogramSliderProps`

| Prop               | Type                                   | Default | Description                                                                                                                                             |
| ------------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                               | —       | —                                                                                                                                                       |
| `id`               | `string`                               | —       | —                                                                                                                                                       |
| `bins` \*          | `HistogramBinProps[]`                  | —       | The set of bins to render as bars.                                                                                                                      |
| `interval` \*      | `number`                               | —       | Controls the slider's step increment and minimum selectable range.                                                                                      |
| `disabled`         | `boolean`                              | —       | —                                                                                                                                                       |
| `readOnly`         | `boolean`                              | —       | —                                                                                                                                                       |
| `value`            | `[number, number]`                     | —       | The selected range as `[start, end]`. When omitted, the selection is initialised to `[minValue, minValue + interval]` derived from the provided `bins`. |
| `showRangeLabels`  | `boolean`                              | —       | When `true`, displays the current start and end values above the histogram.                                                                             |
| `rangeLabelPrefix` | `string`                               | —       | Text prepended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                            |
| `rangeLabelSuffix` | `string`                               | —       | Text appended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                             |
| `ariaLabels`       | `[string, string]`                     | —       | Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.                                                                               |
| `aria-labelledby`  | `string`                               | —       | ID of an element that labels the slider group.                                                                                                          |
| `aria-describedby` | `string`                               | —       | ID of an element that describes the slider group.                                                                                                       |
| `renderRangeLabel` | `((value: number) => React.ReactNode)` | —       | Custom renderer for each range label value. When provided, overrides the `rangeLabelPrefix` and `rangeLabelSuffix` combination.                         |
| `onChange`         | `((value: [number, number]) => void)`  | —       | Called on every selection change.                                                                                                                       |
| `onChangeEnd`      | `((value: [number, number]) => void)`  | —       | Called when a thumb is released after selection is complete.                                                                                            |
| `renderEmptyView`  | `(() => React.ReactNode)`              | —       | Rendered in place of the histogram and slider when all bins have a count of zero.                                                                       |

## Props — `HistogramBinProps`

| Prop          | Type     | Default | Description                                              |
| ------------- | -------- | ------- | -------------------------------------------------------- |
| `count` \*    | `number` | —       | Number of items that fall within this bin's value range. |
| `minValue` \* | `number` | —       | Lower bound of this bin's value range.                   |

## Props — `HistogramSliderProps`

| Prop               | Type                                   | Default | Description                                                                                                                                             |
| ------------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                               | —       | —                                                                                                                                                       |
| `id`               | `string`                               | —       | —                                                                                                                                                       |
| `bins` \*          | `HistogramBinProps[]`                  | —       | The set of bins to render as bars.                                                                                                                      |
| `interval` \*      | `number`                               | —       | Controls the slider's step increment and minimum selectable range.                                                                                      |
| `disabled`         | `boolean`                              | —       | —                                                                                                                                                       |
| `readOnly`         | `boolean`                              | —       | —                                                                                                                                                       |
| `value`            | `[number, number]`                     | —       | The selected range as `[start, end]`. When omitted, the selection is initialised to `[minValue, minValue + interval]` derived from the provided `bins`. |
| `showRangeLabels`  | `boolean`                              | —       | When `true`, displays the current start and end values above the histogram.                                                                             |
| `rangeLabelPrefix` | `string`                               | —       | Text prepended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                            |
| `rangeLabelSuffix` | `string`                               | —       | Text appended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                             |
| `ariaLabels`       | `[string, string]`                     | —       | Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.                                                                               |
| `aria-labelledby`  | `string`                               | —       | ID of an element that labels the slider group.                                                                                                          |
| `aria-describedby` | `string`                               | —       | ID of an element that describes the slider group.                                                                                                       |
| `renderRangeLabel` | `((value: number) => React.ReactNode)` | —       | Custom renderer for each range label value. When provided, overrides the `rangeLabelPrefix` and `rangeLabelSuffix` combination.                         |
| `onChange`         | `((value: [number, number]) => void)`  | —       | Called on every selection change.                                                                                                                       |
| `onChangeEnd`      | `((value: [number, number]) => void)`  | —       | Called when a thumb is released after selection is complete.                                                                                            |
| `renderEmptyView`  | `(() => React.ReactNode)`              | —       | Rendered in place of the histogram and slider when all bins have a count of zero.                                                                       |

## Props — `HistogramBinProps`

| Prop          | Type     | Default | Description                                              |
| ------------- | -------- | ------- | -------------------------------------------------------- |
| `count` \*    | `number` | —       | Number of items that fall within this bin's value range. |
| `minValue` \* | `number` | —       | Lower bound of this bin's value range.                   |

## Props — `HistogramSliderProps`

| Prop               | Type                                   | Default | Description                                                                                                                                             |
| ------------------ | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`        | `string`                               | —       | —                                                                                                                                                       |
| `id`               | `string`                               | —       | —                                                                                                                                                       |
| `bins` \*          | `HistogramBinProps[]`                  | —       | The set of bins to render as bars.                                                                                                                      |
| `interval` \*      | `number`                               | —       | Controls the slider's step increment and minimum selectable range.                                                                                      |
| `disabled`         | `boolean`                              | —       | —                                                                                                                                                       |
| `readOnly`         | `boolean`                              | —       | —                                                                                                                                                       |
| `value`            | `[number, number]`                     | —       | The selected range as `[start, end]`. When omitted, the selection is initialised to `[minValue, minValue + interval]` derived from the provided `bins`. |
| `showRangeLabels`  | `boolean`                              | —       | When `true`, displays the current start and end values above the histogram.                                                                             |
| `rangeLabelPrefix` | `string`                               | —       | Text prepended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                            |
| `rangeLabelSuffix` | `string`                               | —       | Text appended to each range label value. Has no effect when `renderRangeLabel` is provided.                                                             |
| `ariaLabels`       | `[string, string]`                     | —       | Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.                                                                               |
| `aria-labelledby`  | `string`                               | —       | ID of an element that labels the slider group.                                                                                                          |
| `aria-describedby` | `string`                               | —       | ID of an element that describes the slider group.                                                                                                       |
| `renderRangeLabel` | `((value: number) => React.ReactNode)` | —       | Custom renderer for each range label value. When provided, overrides the `rangeLabelPrefix` and `rangeLabelSuffix` combination.                         |
| `onChange`         | `((value: [number, number]) => void)`  | —       | Called on every selection change.                                                                                                                       |
| `onChangeEnd`      | `((value: [number, number]) => void)`  | —       | Called when a thumb is released after selection is complete.                                                                                            |
| `renderEmptyView`  | `(() => React.ReactNode)`              | —       | Rendered in place of the histogram and slider when all bins have a count of zero.                                                                       |

## Rules

-   `onChange` fires continuously during drag — do not put API calls here; use `onChangeEnd`.
-   `interval` must match the gap between `minValue` of consecutive bins.
-   Always provide `ariaLabels` or `aria-labelledby` for accessibility.
-   Pair with `Filter` in a filter sidebar — `HistogramSlider` is not a `Form.*` component and does not use `label`/`errorMessage`.
