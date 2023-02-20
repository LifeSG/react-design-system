export interface DateInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    readOnly?: boolean | undefined;

    // WAI-ARIA
    role?: React.AriaRole | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    value?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an array format
     * as such [day, month, year]
     */
    onChangeRaw?: ((value: ChangeValueTypes) => void) | undefined;
    onBlur?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an array format
     * as such [day, month, year]
     */
    onBlurRaw?: ((value: ChangeValueTypes) => void) | undefined;
}

export interface ChangeValueTypes {
    start?: StartChangeValue;
    end?: EndChangeValue;
}

interface StartChangeValue {
    "start-day": string;
    "start-month": string;
    "start-year": string;
}
interface EndChangeValue {
    "end-day": string;
    "end-month": string;
    "end-year": string;
}
