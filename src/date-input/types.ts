export interface DateInputTarget {
    value: string;
    type?: string | undefined; // input type
    name?: string | undefined;
    id?: string | undefined;
}

/* This mimics the React.SyntheticEvent */
export interface DateInputEvent {
    bubbles: boolean;
    target: DateInputTarget;
}

export interface DateInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;

    // WAI-ARIA
    role?: string;

    // Input-specific Attributes
    value?: string | undefined;
    name?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: (value: string) => void | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an array format
     * as such [day, month, year]
     */
    onChangeRaw?: (value: string[]) => void | undefined;
    onBlur?: (value: string) => void | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an array format
     * as such [day, month, year]
     */
    onBlurRaw?: (value: string[]) => void | undefined;
}
