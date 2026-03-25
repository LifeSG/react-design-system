/** Describes a single histogram bin with its frequency count and lower boundary value. */
export interface HistogramBinProps {
    /** The number of data points that fall within this bin. */
    count: number;
    /** The lower boundary value of this bin. */
    minValue: number;
}

/**
 * A range slider overlaid on a histogram bar chart for filtering numeric data by a visual frequency distribution.
 * Bins define the histogram bars; the selected range is returned via `onChange` and `onChangeEnd`.
 *
 * @keywords histogram, slider, range, filter, chart, distribution
 */
export interface HistogramSliderProps {
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Array of histogram bins defining the bar heights and their lower boundary values. */
    bins: HistogramBinProps[];
    /** The width of each bin (the numeric distance between adjacent `minValue` boundaries). */
    interval: number;
    /** Disables interaction with the slider when `true`. */
    disabled?: boolean | undefined;
    /** Renders the slider in a non-interactive read-only state. */
    readOnly?: boolean | undefined;
    /** The selected range in the format `[start, end]`. */
    value?: [number, number] | undefined;
    /** Shows numeric range labels below the slider thumbs. */
    showRangeLabels?: boolean | undefined;
    /** Text prepended to each range label value. */
    rangeLabelPrefix?: string | undefined;
    /** Text appended to each range label value. */
    rangeLabelSuffix?: string | undefined;
    /** Accessible labels for the two slider thumbs in the format `[startLabel, endLabel]`. */
    ariaLabels?: [string, string] | undefined;
    /** ID of an external element that labels the slider (WAI-ARIA). */
    "aria-labelledby"?: string | undefined;
    /** ID of an external element that describes the slider (WAI-ARIA). */
    "aria-describedby"?: string | undefined;
    /** Custom renderer for range label text. Receives the numeric value and returns a React node. */
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
    /** Called on every selection change. Returns the updated range as `[start, end]`. */
    onChange?: ((value: [number, number]) => void) | undefined;
    /** Called when a thumb is released after selection is complete. Returns the final range as `[start, end]`. */
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    /** Custom renderer for the empty/zero-data state of the histogram. */
    renderEmptyView?: (() => React.ReactNode) | undefined;
}
