type CustomColor = string | ((props: unknown) => string);

export interface BaseSliderProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    min?: number | undefined;
    max?: number | undefined;
    /** The interval between the prev and next value */
    step?: number | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /** Customise the color of each track segment. Expected length is (number of values + 1) */
    colors?: (CustomColor | undefined)[] | undefined;
    showLabels?: boolean | undefined;
    labelPrefix?: string | undefined;
    labelSuffix?: string | undefined;
    renderLabel?: ((value: number) => React.ReactNode) | undefined;
}

export interface InputRangeSliderProps extends BaseSliderProps {
    value?: number[] | undefined;
    /** The number of thumb controls */
    numOfThumbs?: number | undefined;
    /** The minimum difference between values */
    minRange?: number | undefined;
    onChange?: ((value: number[]) => void) | undefined;
}
