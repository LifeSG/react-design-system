/**
 * Represents a single bin in the histogram distribution chart.
 */
export interface HistogramBinProps {
    /** The number of data points in this bin. */
    count: number;
    /** The lower bound value of this bin. */
    minValue: number;
}

/**
 * Props for the HistogramSlider component - range slider with histogram distribution.
 *
 * Combines a range slider with a histogram bar chart to show the distribution of
 * values across the selectable range. Commonly used for price-range or date-range
 * filters where showing data density helps users make informed range selections.
 *
 * @example
 * ```tsx
 * <HistogramSlider
 *     bins={priceDistribution}
 *     interval={100}
 *     min={0}
 *     max={10000}
 *     value={[1000, 5000]}
 *     onChange={(range) => setRange(range)}
 * />
 * ```
 * @keywords price range filter, distribution chart, bar chart slider, range histogram, density slider
 */
export interface HistogramSliderProps {
    /** Additional CSS class name. */
    className?: string | undefined;
    /** The HTML `id` attribute for the slider container. */
    id?: string | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the slider in automated tests.
     */
    "data-testid"?: string | undefined;
    /** The array of histogram bins describing value distribution. */
    bins: HistogramBinProps[];
    /** The width of each histogram bin (bucket size) in value units. */
    interval: number;
    /**
     * Disables the slider and prevents interaction.
     *
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Makes the slider read-only, preventing value changes.
     *
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * The current selected range as `[startValue, endValue]`.
     *
     * @default undefined
     */
    value?: [number, number] | undefined;
    /**
     * Shows numeric range labels at the ends of the selected range.
     *
     * @default false
     */
    showRangeLabels?: boolean | undefined;
    /** A prefix string prepended to each range label. */
    rangeLabelPrefix?: string | undefined;
    /** A suffix string appended to each range label. */
    rangeLabelSuffix?: string | undefined;
    /**
     * Renders a custom label for a given range endpoint value.
     *
     * @param value - The numeric value at the range boundary.
     */
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
    /**
     * Called on every value change while a thumb is being dragged.
     *
     * @param value - The current range as `[startValue, endValue]`.
     */
    onChange?: ((value: [number, number]) => void) | undefined;
    /**
     * Called once when a thumb is released after dragging completes.
     *
     * @param value - The final range as `[startValue, endValue]`.
     */
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    /**
     * Renders a custom empty state when no bins are provided.
     *
     * @default undefined
     */
    renderEmptyView?: (() => React.ReactNode) | undefined;
}
