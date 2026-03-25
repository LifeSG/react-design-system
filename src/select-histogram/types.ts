import { AriaAttributes, RefObject } from "react";
import { HistogramSliderProps } from "../histogram-slider";
import { TruncateType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/**
 * Subset of HistogramSlider props passed to the embedded histogram slider.
 *
 * @keywords histogram, slider, bins, interval
 */
export type SelectHistogramSliderProps = Pick<
    HistogramSliderProps,
    "bins" | "interval" | "renderEmptyView" | "ariaLabels"
>;

/**
 * Props for the SelectHistogram component, a dropdown that embeds a histogram
 * slider so users can select a numeric range visually.
 *
 * @keywords select-histogram, histogram, range, slider, dropdown, filter
 */
export interface SelectHistogramProps
    extends Pick<
        AriaAttributes,
        "aria-labelledby" | "aria-describedby" | "aria-invalid"
    > {
    /** Alignment of the dropdown relative to the trigger. */
    alignment?: DropdownAlignmentType | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Disables user interaction with the component. */
    disabled?: boolean | undefined;
    /** Z-index applied to the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /** Displays the component in an error state. */
    error?: boolean | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Configuration for the embedded histogram slider. */
    histogramSlider: SelectHistogramSliderProps;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;
    /** Placeholder text shown when no range is selected. */
    placeholder?: string | undefined;
    /** String prepended to the lower bound label in the trigger display. */
    rangeLabelPrefix?: string | undefined;
    /** String appended to the upper bound label in the trigger display. */
    rangeLabelSuffix?: string | undefined;
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** The currently selected range as a `[min, max]` tuple. */
    value?: [number, number] | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /** Callback fired when the component loses focus. */
    onBlur?: (() => void) | undefined;
    /** Callback fired while the range slider value changes. */
    onChange?: ((value: [number, number]) => void) | undefined;
    /** Callback fired when the user finishes dragging the range slider. */
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    /** Custom renderer for the range label displayed in the trigger. */
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
}
