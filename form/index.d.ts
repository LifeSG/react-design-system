export type { FormCustomFieldProps } from "./form-custom-field/types";
export type { FormDateInputProps } from "./form-date-input/types";
export type { FormDateRangeInputProps } from "./form-date-range-input/types";
export type { FormESignatureProps } from "./form-e-signature/types";
export type { FormHistogramSliderProps } from "./form-histogram-slider/types";
export type { FormInputProps } from "./form-input/types";
export type { FormInputGroupProps } from "./form-input-group/types";
export type { FormLabelAddonProps, FormLabelAddonType, FormLabelProps, } from "./form-label/types";
export type { FormMaskedInputProps } from "./form-masked-input/types";
export type { FormMultiSelectProps } from "./form-multi-select/types";
export type { FormNestedMultiSelectProps } from "./form-nested-multi-select/types";
export type { FormNestedSelectProps } from "./form-nested-select/types";
export type { FormPhoneNumberInputProps } from "./form-phone-number-input/types";
export type { FormPredictiveTextInputProps } from "./form-predictive-text-input/types";
export type { FormInputRangeSelectProps } from "./form-range-select/types";
export type { FormRangeSliderProps } from "./form-range-slider/types";
export type { FormInputSelectProps } from "./form-select/types";
export type { FormSelectHistogramProps } from "./form-select-histogram/types";
export type { FormSliderProps } from "./form-slider/types";
export type { FormTextareaProps } from "./form-textarea/types";
export type { FormTimeRangePickerProps } from "./form-time-range-picker/types";
export type { FormTimepickerProps } from "./form-timepicker/types";
export type { FormUnitNumberInputProps } from "./form-unit-number-input/types";
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
 * @keywords field, label, input
 */
export declare const Form: {
    /** Layout shell that wraps any custom input element with label, subtitle, and error message. */
    CustomField: ({ id, "data-error-testid": errorTestId, "data-testid": testId, children, ...otherProps }: import("./form-custom-field").FormCustomFieldProps) => JSX.Element;
    /** Single date picker with form layout. */
    DateInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-date-input").FormDateInputProps) => JSX.Element;
    /** Date range picker with form layout. */
    DateRangeInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-date-range-input").FormDateRangeInputProps) => JSX.Element;
    /** E-signature capture field with form layout. */
    ESignature: (props: import("./form-e-signature").FormESignatureProps) => import("react/jsx-runtime").JSX.Element;
    /** Range slider with histogram overlay and form layout. */
    HistogramSlider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-histogram-slider").FormHistogramSliderProps) => JSX.Element;
    /** Single-line text input field with form layout. */
    Input: (props: import("./form-input").FormInputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
    /** Grouped inputs with shared label, error state, and form layout. */
    InputGroup: <T, V>(props: import("./form-input-group").FormInputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
    /** Standalone label element for use outside a `Form.*` field with optional subtitle and addon icon. */
    Label: ({ id, children, addon, subtitle, "data-testid": testId, className, style, ...otherProps }: import("./form-label").FormLabelProps) => JSX.Element;
    /** Text input with a character-level input mask and form layout. */
    MaskedInput: (props: import("./form-masked-input").FormMaskedInputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
    /** Multi-value dropdown select with form layout. */
    MultiSelect: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, variant, ...otherProps }: import("./form-multi-select").FormMultiSelectProps<T, V>) => JSX.Element;
    /** Hierarchical multi-value select with form layout. */
    NestedMultiSelect: <V1, V2, V3>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-nested-multi-select").FormNestedMultiSelectProps<V1, V2, V3>) => JSX.Element;
    /** Hierarchical single-value select with form layout. */
    NestedSelect: <V1, V2, V3>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-nested-select").FormNestedSelectProps<V1, V2, V3>) => JSX.Element;
    /** OTP send-and-verify flow with form layout. */
    OtpVerification: ({ label, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-otp-verification").FormOtpVerificationProps) => JSX.Element;
    /** Phone number input with country code selection and form layout. */
    PhoneNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-phone-number-input").FormPhoneNumberInputProps) => JSX.Element;
    /** Text input with predictive suggestions and form layout. */
    PredictiveTextInput: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-predictive-text-input").FormPredictiveTextInputProps<T, V>) => JSX.Element;
    /** Dual-value range dropdown select with form layout. */
    RangeSelect: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-range-select").FormInputRangeSelectProps<T, V>) => JSX.Element;
    /** Dual-handle range slider with form layout. */
    RangeSlider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-range-slider").FormRangeSliderProps) => JSX.Element;
    /** Single-value dropdown select with form layout. */
    Select: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, variant, ...otherProps }: import("./form-select").FormInputSelectProps<T, V>) => JSX.Element;
    /** Select control with histogram and form layout. */
    SelectHistogram: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, histogramSlider, ...otherProps }: import("./form-select-histogram").FormSelectHistogramProps) => JSX.Element;
    /** Single-value range slider with form layout. */
    Slider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-slider").FormSliderProps) => JSX.Element;
    /** Multi-line text area with form layout. */
    Textarea: (props: import("./form-textarea").FormTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>) => React.ReactElement | null;
    /** Time picker with form layout. */
    Timepicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-timepicker").FormTimepickerProps) => JSX.Element;
    /** Time range picker with form layout. */
    TimeRangePicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-time-range-picker").FormTimeRangePickerProps) => JSX.Element;
    /** Structured unit number input with form layout. */
    UnitNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, xxsCols, xsCols, smCols, mdCols, lgCols, xlCols, xxlCols, ...otherProps }: import("./form-unit-number-input").FormUnitNumberInputProps) => JSX.Element;
};
