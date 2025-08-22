import { RefObject } from "react";
import { HistogramSliderProps } from "../histogram-slider";
import { TruncateType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";
export type SelectHistogramSliderProps = Pick<HistogramSliderProps, "bins" | "interval" | "renderEmptyView" | "ariaLabels">;
export interface SelectHistogramProps {
    alignment?: DropdownAlignmentType | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    dropdownZIndex?: number | undefined;
    error?: boolean | undefined;
    id?: string | undefined;
    histogramSlider: SelectHistogramSliderProps;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;
    placeholder?: string | undefined;
    rangeLabelPrefix?: string | undefined;
    rangeLabelSuffix?: string | undefined;
    readOnly?: boolean | undefined;
    value?: [number, number] | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    onBlur?: (() => void) | undefined;
    onChange?: ((value: [number, number]) => void) | undefined;
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
}
