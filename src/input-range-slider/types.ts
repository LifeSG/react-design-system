type CustomColor = string | ((props: unknown) => string);

/**
 * Shared configuration props used by both `InputSlider` and `InputRangeSlider`.
 */
export interface BaseSliderProps {
    /** Additional CSS class name. */
    className?: string | undefined;
    /** The HTML `id` attribute for the slider container. */
    id?: string | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the slider in automated tests.
     */
    "data-testid"?: string | undefined;
    /** The minimum selectable value. */
    min?: number | undefined;
    /** The maximum selectable value. */
    max?: number | undefined;
    /**
     * The step interval between selectable values.
     *
     * @default 1
     */
    step?: number | undefined;
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
     * Custom colors for each track segment between thumb positions.
     *
     * The array length must be `(number of thumbs + 1)` to cover each segment.
     * Accepts a CSS color string or a function returning a color string.
     *
     * @default undefined
     */
    colors?: (CustomColor | undefined)[] | undefined;
    /**
     * Shows static value labels at the min and max tick positions.
     *
     * @default false
     */
    showSliderLabels?: boolean | undefined;
    /** A prefix string prepended to each slider tick label. */
    sliderLabelPrefix?: string | undefined;
    /** A suffix string appended to each slider tick label. */
    sliderLabelSuffix?: string | undefined;
    /**
     * Shows a floating label above the active thumb displaying its current value.
     *
     * @default false
     */
    showIndicatorLabel?: boolean | undefined;
    /** A prefix string prepended to the floating thumb indicator label. */
    indicatorLabelPrefix?: string | undefined;
    /** A suffix string appended to the floating thumb indicator label. */
    indicatorLabelSuffix?: string | undefined;
    /**
     * Renders a custom label for a given slider tick value.
     *
     * @param value - The numeric value of the tick.
     */
    renderSliderLabel?: ((value: number) => React.ReactNode) | undefined;
}

/**
 * Props for the InputRangeSlider component - dual-thumb numeric range slider.
 *
 * Renders a horizontal slider with two thumbs for selecting a numeric range
 * (min and max values). Supports multiple thumbs, minimum range constraint,
 * track colour customisation, and value labels. For a single-value slider
 * use `InputSlider`.
 *
 * @example
 * ```tsx
 * <InputRangeSlider
 *     min={0}
 *     max={100}
 *     value={[20, 80]}
 *     onChange={(values) => setRange(values)}
 * />
 * ```
 * @keywords dual thumb slider, min max slider, two handle slider, range slider, price range slider
 */
export interface InputRangeSliderProps extends BaseSliderProps {
    /**
     * The current selected range as `[startValue, endValue]`.
     *
     * @default undefined
     */
    value?: number[] | undefined;
    /**
     * The number of draggable thumb controls.
     *
     * @default 2
     */
    numOfThumbs?: number | undefined;
    /**
     * The minimum allowed gap between any two adjacent thumb values.
     *
     * @default undefined
     */
    minRange?: number | undefined;
    /**
     * Accessible labels for each thumb, indexed by thumb position.
     *
     * @default undefined
     */
    ariaLabels?: string[] | undefined;
    /**
     * Called on every value change while a thumb is being dragged.
     *
     * @param value - The current range as `[startValue, endValue]`.
     */
    onChange?: ((value: number[]) => void) | undefined;
    /**
     * Called once when a thumb is released after dragging completes.
     *
     * @param value - The final range as `[startValue, endValue]`.
     */
    onChangeEnd?: ((value: number[]) => void) | undefined;
}
