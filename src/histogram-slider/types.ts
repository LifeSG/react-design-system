/**
 * A single bin (bar) in the histogram, representing a value range and its
 * item count.
 *
 * The upper bound of the bin's range is `minValue + interval`, where
 * `interval` is provided separately via `HistogramSliderProps`.
 */
export interface HistogramBinProps {
    /**
     * Number of items that fall within this bin's value range.
     */
    count: number;
    /** Lower bound of this bin's value range. */
    minValue: number;
}

/** Props for `HistogramSlider`. */
export interface HistogramSliderProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The set of bins to render as bars.
     */
    bins: HistogramBinProps[];
    /**
     * Controls the slider's step increment and minimum selectable range.
     */
    interval: number;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /**
     * The selected range as `[start, end]`.
     *
     * When omitted, the selection is initialised to
     * `[minValue, minValue + interval]` derived from the provided `bins`.
     */
    value?: [number, number] | undefined;
    /**
     * When `true`, displays the current start and end values above the
     * histogram.
     */
    showRangeLabels?: boolean | undefined;
    /**
     * Text prepended to each range label value.
     * Has no effect when `renderRangeLabel` is provided.
     */
    rangeLabelPrefix?: string | undefined;
    /**
     * Text appended to each range label value.
     * Has no effect when `renderRangeLabel` is provided.
     */
    rangeLabelSuffix?: string | undefined;
    /**
     * Accessible labels for the two slider thumbs, as `[startLabel, endLabel]`.
     */
    ariaLabels?: [string, string] | undefined;
    /**
     * ID of an element that labels the slider group.
     */
    "aria-labelledby"?: string | undefined;
    /**
     * ID of an element that describes the slider group.
     */
    "aria-describedby"?: string | undefined;
    /**
     * Custom renderer for each range label value. When provided, overrides the
     * `rangeLabelPrefix` and `rangeLabelSuffix` combination.
     */
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
    /** Called on every selection change. Returns the value in the format `[start, end]` */
    onChange?: ((value: [number, number]) => void) | undefined;
    /** Called when a thumb is released after selection is complete. Returns the value in the format `[start, end]` */
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    /**
     * Rendered in place of the histogram and slider when all bins have a count
     * of zero.
     */
    renderEmptyView?: (() => React.ReactNode) | undefined;
}
