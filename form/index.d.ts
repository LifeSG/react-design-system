export * from "./types";
/**
 * A collection of form field components that each combine a label, input
 * control, and inline error message with consistent ARIA wiring.
 *
 * Use `Form.*` sub-components to build accessible forms. Use `Form.CustomField` to wrap any
 * bespoke input element in the same layout.
 *
 * Sub-components:
 * - `Form.CustomField` — layout shell for wrapping custom input elements.
 * - `Form.DateInput` — single date picker.
 * - `Form.DateRangeInput` — date range picker.
 * - `Form.ESignature` — e-signature capture field.
 * - `Form.HistogramSlider` — range slider with histogram overlay.
 * - `Form.Input` — single-line text input field.
 * - `Form.InputGroup` — grouped inputs with shared label and error state.
 * - `Form.Label` — standalone label for use outside a `Form.*` field.
 * - `Form.MaskedInput` — text input with a character-level input mask.
 * - `Form.MultiSelect` — multi-value dropdown select.
 * - `Form.NestedMultiSelect` — hierarchical multi-value select.
 * - `Form.NestedSelect` — hierarchical single-value select.
 * - `Form.OtpVerification` — OTP send-and-verify flow.
 * - `Form.PhoneNumberInput` — phone number input with country code selection.
 * - `Form.PredictiveTextInput` — text input with predictive suggestions.
 * - `Form.RangeSelect` — dual-value range dropdown select.
 * - `Form.RangeSlider` — dual-handle range slider.
 * - `Form.Select` — single-value dropdown select.
 * - `Form.SelectHistogram` — select control with histogram.
 * - `Form.Slider` — single-value range slider.
 * - `Form.Textarea` — multi-line text area.
 * - `Form.Timepicker` — time picker.
 * - `Form.TimeRangePicker` — time range picker.
 * - `Form.UnitNumberInput` — structured unit number input.
 */
export declare const Form: {
    /** Layout shell that wraps any custom input element with label, subtitle, and error message. */
    CustomField: ({ id, "data-error-testid": errorTestId, "data-testid": testId, children, ...otherProps }: import("./types").FormCustomFieldProps) => JSX.Element;
    /** Single date picker with form layout. */
    DateInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormDateInputProps) => JSX.Element;
    /** Date range picker with form layout. */
    DateRangeInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormDateRangeInputProps) => JSX.Element;
    /** E-signature capture field with form layout. */
    ESignature: (props: import("./types").FormESignatureProps) => import("react/jsx-runtime").JSX.Element;
    /** Range slider with histogram overlay and form layout. */
    HistogramSlider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormHistogramSliderProps) => JSX.Element;
    /** Single-line text input field with form layout. */
    Input: (props: import("./types").FormInputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
    /** Grouped inputs with shared label, error state, and form layout. */
    InputGroup: <T, V>(props: import("./types").FormInputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
    /** Standalone label element for use outside a `Form.*` field with optional subtitle and addon icon. */
    Label: ({ id, children, addon, subtitle, "data-testid": testId, className, style, ...otherProps }: import("./types").FormLabelProps) => JSX.Element;
    /** Text input with a character-level input mask and form layout. */
    MaskedInput: (props: import("./types").FormMaskedInputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
    /** Multi-value dropdown select with form layout. */
    MultiSelect: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, variant, ...otherProps }: import("./types").FormMultiSelectProps<T, V>) => JSX.Element;
    /** Hierarchical multi-value select with form layout. */
    NestedMultiSelect: <V1, V2, V3>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormNestedMultiSelectProps<V1, V2, V3>) => JSX.Element;
    /** Hierarchical single-value select with form layout. */
    NestedSelect: <V1, V2, V3>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormNestedSelectProps<V1, V2, V3>) => JSX.Element;
    /** OTP send-and-verify flow with form layout. */
    OtpVerification: ({ label, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("../otp-verification").FormOtpVerificationProps) => JSX.Element;
    /** Phone number input with country code selection and form layout. */
    PhoneNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormPhoneNumberInputProps) => JSX.Element;
    /** Text input with predictive suggestions and form layout. */
    PredictiveTextInput: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormPredictiveTextInputProps<T, V>) => JSX.Element;
    /** Dual-value range dropdown select with form layout. */
    RangeSelect: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormInputRangeSelectProps<T, V>) => JSX.Element;
    /** Dual-handle range slider with form layout. */
    RangeSlider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormRangeSliderProps) => JSX.Element;
    /** Single-value dropdown select with form layout. */
    Select: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, variant, ...otherProps }: import("./types").FormInputSelectProps<T, V>) => JSX.Element;
    /** Select control with histogram and form layout. */
    SelectHistogram: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, histogramSlider, ...otherProps }: import("./types").FormSelectHistogramProps) => JSX.Element;
    /** Single-value range slider with form layout. */
    Slider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormSliderProps) => JSX.Element;
    /** Multi-line text area with form layout. */
    Textarea: (props: import("./types").FormTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>) => React.ReactElement | null;
    /** Time picker with form layout. */
    Timepicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormTimepickerProps) => JSX.Element;
    /** Time range picker with form layout. */
    TimeRangePicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormTimeRangePickerProps) => JSX.Element;
    /** Structured unit number input with form layout. */
    UnitNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./types").FormUnitNumberInputProps) => JSX.Element;
};
