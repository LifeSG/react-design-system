export interface HistogramBinProps {
    count: number;
    minValue: number;
}

export interface HistogramSliderProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    bins: HistogramBinProps[];
    interval: number;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /** The selected range, in the format `[start, end]` */
    value?: [number, number] | undefined;
    showRangeLabels?: boolean | undefined;
    rangeLabelPrefix?: string | undefined;
    rangeLabelSuffix?: string | undefined;
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
    /** Called when selection range changes. Returns the value in the format `[start, end]` */
    onChange?: ((value: [number, number]) => void) | undefined;
    renderEmptyView?: (() => React.ReactNode) | undefined;
}
