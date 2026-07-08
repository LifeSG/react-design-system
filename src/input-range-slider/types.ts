/**
 * Shared configuration for `InputRangeSlider` covering track bounds,
 * step interval, track colors, and label display.
 */
export interface BaseSliderProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The lower bound of the slider range.
     *
     * @default 0
     */
    min?: number | undefined;
    /**
     * The upper bound of the slider range.
     *
     * @default 100
     */
    max?: number | undefined;
    /**
     * The interval between selectable values.
     *
     * @default 1
     */
    step?: number | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /**
     * Colours applied to each track segment in order. The array length should
     * equal to `numOfThumbs + 1`.
     */
    colors?: (string | undefined)[] | undefined;
    /**
     * Renders label text at the minimum and maximum ends of the track.
     */
    showSliderLabels?: boolean | undefined;
    /**
     * Text prepended to each slider label value. Ignored when
     * `renderSliderLabel` is provided.
     */
    sliderLabelPrefix?: string | undefined;
    /**
     * Text appended to each slider label value. Ignored when
     * `renderSliderLabel` is provided.
     */
    sliderLabelSuffix?: string | undefined;
    /**
     * Renders a label above the slider showing the current selection.
     */
    showIndicatorLabel?: boolean | undefined;
    /**
     * Text prepended to the indicator label value.
     */
    indicatorLabelPrefix?: string | undefined;
    /**
     * Text appended to the indicator label value.
     */
    indicatorLabelSuffix?: string | undefined;
    /**
     * Custom renderer for the slider labels shown at the min and max track
     * ends. Takes precedence over `sliderLabelPrefix` and `sliderLabelSuffix`.
     */
    renderSliderLabel?: ((value: number) => React.ReactNode) | undefined;
}

/**
 * Props for `InputRangeSlider` component.
 */
export interface InputRangeSliderProps extends BaseSliderProps {
    /**
     * Controlled values for each thumb, indexed by position. Must have the
     * same length as `numOfThumbs`; when the lengths differ or `value` is
     * omitted, each thumb defaults to `min + step * index`.
     */
    value?: number[] | undefined;
    /**
     * The number of thumb controls rendered on the track.
     *
     * @default 2
     */
    numOfThumbs?: number | undefined;
    /**
     * The minimum allowed difference between adjacent thumb values.
     *
     * @default 0
     */
    minRange?: number | undefined;
    /**
     * Accessible labels for each thumb.
     */
    ariaLabels?: string[] | undefined;
    /**
     * Accessible description text for each thumb.
     */
    ariaDescriptions?: string[] | undefined;
    /**
     * Marks each thumb's native range input as invalid for assistive
     * technologies.
     */
    "aria-invalid"?: boolean | undefined;
    /**
     * ID(s) of an element(s) that labels the slider group.
     */
    "aria-labelledby"?: string | undefined;
    /**
     * ID(s) of an element(s) that provides additional information of the slider group.
     */
    "aria-describedby"?: string | undefined;
    /**
     * Called on every selection change.
     *
     * @param value The updated array of thumb values, in thumb order.
     */
    onChange?: ((value: number[]) => void) | undefined;
    /**
     * Called when a thumb is released after selection is complete.
     *
     * @param value The final array of thumb values, in thumb order.
     */
    onChangeEnd?: ((value: number[]) => void) | undefined;
}
