/// <reference types="react" />
export declare type TimepickerFormat = "12hr" | "24hr";
export interface TimepickerProps extends React.AriaAttributes {
    className?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
    defaultValue?: string | undefined;
    format?: TimepickerFormat | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: (value: string) => void | undefined;
    onBlur?: () => void | undefined;
    onSelectionCancel?: () => void | undefined;
}
