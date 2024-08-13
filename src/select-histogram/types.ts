import { HistogramSliderProps } from "../histogram-slider";
import { TruncateType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

export interface SelectHistogramSliderProps {
    error?: boolean | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    id?: string | undefined;
    disabled?: boolean | undefined;
    "data-testid"?: string | undefined;
    placeholder?: string | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;
    onBlur?: (() => void) | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
    rangeLabelPrefix?: string | undefined;
    rangeLabelSuffix?: string | undefined;
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
    onChange?: ((value: [number, number]) => void) | undefined;
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    value?: [number, number] | undefined;
    histogramSlider: Pick<
        HistogramSliderProps,
        "bins" | "interval" | "renderEmptyView"
    >;
}
