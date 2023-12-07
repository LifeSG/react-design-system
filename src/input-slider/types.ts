export interface InputSliderProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    value?: number | number[] | undefined;
    min?: number | undefined;
    max?: number | undefined;
    /** the interval between the prev and next value */
    step?: number | undefined;
    /** the number of controls */
    numOfThumbs?: number | undefined;
    /** the minimum difference between values, applicable if numOfThumbs > 1 */
    minRange?: number | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /** customise the color of each track segment. expected length is num + 1 */
    colors?: (string | ((props: unknown) => string))[] | undefined;
    showLabels?: boolean | undefined;
    labelPrefix?: string | undefined;
    labelSuffix?: string | undefined;
    renderLabel?: ((value: number) => React.ReactNode) | undefined;
    onChange?: ((value: number | number[]) => void) | undefined;
}
