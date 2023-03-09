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
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** The variant of the component. Values `single` | `range` */
    variant?: DateInputVariant | undefined;
    /** The display cancel/done button inside calendar component. Defualt value as `true` */
    withButton?: boolean | undefined;
    /**
     * Actively between selection. Only accepted two values in an array format
     * as such ["2023-03-15", "2023-05-21"] or ["2023-05-21", "2023-03-15"]
     */
    between?: [string, string] | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an object format
     * as such { start: "YYYY-MM-DD", end: "YYYY-MM-DD"}
     */
    onChange?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an object format
     * as such { start: {year: "", month: "", day: "", end: {year: "", month: "", day: ""} }}
     */
    onChangeRaw?: ((value: RawInputValues) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an object format
     * as such { start: "YYYY-MM-DD", end: "YYYY-MM-DD"}
     */
    onBlur?: ((value: ChangeValueTypes) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an object format
     * as such { start: {year: "", month: "", day: "", end: {year: "", month: "", day: ""} }}
     */
    onBlurRaw?: ((value: RawInputValues) => void) | undefined;
}

export type DateInputVariant = "single" | "range";

export interface ChangeValueTypes {
    start?: string | undefined;
    end?: string | undefined;
}

export interface RawInputValues
    extends Partial<Record<keyof ChangeValueTypes, RawInputValue>> {}

interface RawInputValue {
    year?: string;
    month?: string;
    day?: string;
}
