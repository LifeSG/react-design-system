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
    value?: [number, number] | undefined;
    showRangeLabels?: boolean | undefined;
    rangeLabelPrefix?: string | undefined;
    rangeLabelSuffix?: string | undefined;
    renderRangeLabel?: ((value: number) => React.ReactNode) | undefined;
    onChange?: (value: [number, number]) => void;
    renderEmptyView?: (() => React.ReactNode) | undefined;
}
