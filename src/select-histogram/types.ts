import { HistogramSliderProps } from "../histogram-slider";
import { TruncateType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

export interface SelectHistogramSliderProps {
    error?: boolean | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    histogramSlider: HistogramSliderProps;
    id?: string | undefined;
    disabled?: boolean | undefined;
    "data-testid"?: string | undefined;
    placeholder?: string | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;
}
