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
    endValue?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    /** The variant of the component. Values `single` | `range` */
    variant?: DateInputVariant | undefined;
    /** The display cancel/done button inside component.*/
    withButton?: boolean | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an object format
     * as such { start: "DD-MM-YYYY", end: "DD-MM-YYYY"}
     */
    onChange?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an object format
     * as such { start: {year: "", month: "", day: "" }}
     */
    onChangeRaw?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an object format
     * as such { start: "DD-MM-YYYY", end: "DD-MM-YYYY"}
     */
    onBlur?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an object format
     * as such { start: {year: "", month: "", day: "" }}
     */
    onBlurRaw?: ((value: ChangeValueTypes) => void) | undefined;
}

export type DateInputVariant = "single" | "range";

export interface ChangeValueTypes {
    start?: ChangeValue;
    end?: ChangeValue;
}

interface ChangeValue {
    day: string;
    month: string;
    year: string;
}
