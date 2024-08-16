import { HistogramSliderProps } from "../histogram-slider";
import { TruncateType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

export type SelectHistogramSliderProps = Pick<
    HistogramSliderProps,
    "bins" | "interval" | "renderEmptyView"
>;

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
    onBlur?: (() => void) | undefined;
    onChange?: ((value: [number, number]) => void) | undefined;
    onChangeEnd?: ((value: [number, number]) => void) | undefined;
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
}
