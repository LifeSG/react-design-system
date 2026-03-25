import { ThemeStyleProps } from "../theme/types";

type CustomColor = string | ((props: ThemeStyleProps) => string);

/**
 * Base props shared between all slider variants.
 *
 * @keywords slider, range, numeric, track, thumb, label
 */
export interface BaseSliderProps {
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The minimum value of the slider range. */
    min?: number | undefined;
    /** The maximum value of the slider range. */
    max?: number | undefined;
    /** The interval between the prev and next value */
    step?: number | undefined;
    /** Disables user interaction with the component. */
    disabled?: boolean | undefined;
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** Customise the color of each track segment. Expected length is (number of values + 1) */
    colors?: (CustomColor | undefined)[] | undefined;
    /** Whether to show labels below each thumb on the slider track. */
    showSliderLabels?: boolean | undefined;
    /** Prefix string prepended to each slider label. */
    sliderLabelPrefix?: string | undefined;
    /** Suffix string appended to each slider label. */
    sliderLabelSuffix?: string | undefined;
    /** Whether to show a floating label above the active thumb indicating its current value. */
    showIndicatorLabel?: boolean | undefined;
    /** Prefix string prepended to the indicator label. */
    indicatorLabelPrefix?: string | undefined;
    /** Suffix string appended to the indicator label. */
    indicatorLabelSuffix?: string | undefined;
    /** Custom render function for slider track labels. */
    renderSliderLabel?: ((value: number) => React.ReactNode) | undefined;
}

/**
 * A slider input that supports one or more thumbs for selecting a numeric range.
 *
 * @keywords range-slider, dual-thumb, numeric-range, slider, filter, histogram
 */
export interface InputRangeSliderProps extends BaseSliderProps {
    /** The controlled value(s) of the slider thumbs. */
    value?: number[] | undefined;
    /** The number of thumb controls */
    numOfThumbs?: number | undefined;
    /** The minimum difference between values */
    minRange?: number | undefined;
    /** Accessible labels for each thumb, one per thumb in order. */
    ariaLabels?: string[] | undefined;
    /** Accessible descriptions for each thumb, one per thumb in order. */
    ariaDescriptions?: string[] | undefined;
    "aria-invalid"?: boolean | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-describedby"?: string | undefined;
    /** Called on every selection change */
    onChange?: ((value: number[]) => void) | undefined;
    /** Called when a thumb is released after selection is complete */
    onChangeEnd?: ((value: number[]) => void) | undefined;
}
