import type { AriaAttributes, RefObject } from "react";

import type { HistogramSliderProps } from "../histogram-slider";
import type { TruncateType } from "../shared/dropdown-list/types";
import type { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/**
 * Subset of `HistogramSliderProps` passed to `SelectHistogram` to configure the
 * embedded histogram slider rendered inside the dropdown.
 */
export type SelectHistogramSliderProps = Pick<
    HistogramSliderProps,
    "bins" | "interval" | "renderEmptyView" | "ariaLabels"
>;

/**
 * Props for `SelectHistogram`.
 */
export interface SelectHistogramProps
    extends Pick<
        AriaAttributes,
        "aria-labelledby" | "aria-describedby" | "aria-invalid"
    > {
    /**
     * Horizontal alignment of the dropdown relative to the trigger element.
     *
     * @default "left"
     */
    alignment?: DropdownAlignmentType | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    /** CSS `z-index` applied to the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /** Renders the trigger in an error state when `true`. */
    error?: boolean | undefined;
    id?: string | undefined;
    /** Configuration for the histogram slider rendered inside the dropdown. */
    histogramSlider: SelectHistogramSliderProps;
    /**
     * Controls how long option labels are truncated when they overflow.
     * - `"middle"` trims the centre of the text
     * - `"end"` trims from the right.
     *
     * @default "end"
     */
    optionTruncationType?: TruncateType | undefined;
    /**
     * Text shown in the trigger when no range is selected or no bins are provided.
     *
     * @default "Select"
     */
    placeholder?: string | undefined;
    /** Text prepended to each range label value. */
    rangeLabelPrefix?: string | undefined;
    /** Text appended to each range label value. */
    rangeLabelSuffix?: string | undefined;
    readOnly?: boolean | undefined;
    /**
     * The currently selected range as `[min, max]`. When omitted, the selection
     * initialises to `[minValue, minValue + interval]` derived from the first bin.
     */
    value?: [number, number] | undefined;
    /**
     * The root element that contains the dropdown element.
     *
     * @remarks Specify this if you need to change the parent of the
     * dropdown in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the dropdown,
     * the dropdown may be obscured.
     *
     * @default `document.body`
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /** Called when focus leaves both the input and the dropdown. */
    onBlur?: (() => void) | undefined;
    /**
     * Called on every selection change.
     *
     * @param value The current `[min, max]` selection.
     */
    onChange?: ((value: [number, number]) => void) | undefined;
    /**
     * Called when a thumb is released after selection is complete.
     *
     * @param value The settled `[min, max]` selection.
     */
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    /**
     * Custom renderer for each bound value displayed in the trigger label.
     * Overrides `rangeLabelPrefix`, `rangeLabelSuffix`, and the default `Typography.BodyBL` wrapper.
     *
     * @param value The numeric bound to render.
     */
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
}
