import { FormCustomField } from "./form-custom-field";
import { FormDateInput } from "./form-date-input";
import { FormDateRangeInput } from "./form-date-range-input";
import { FormESignature } from "./form-e-signature";
import { FormHistogramSlider } from "./form-histogram";
import { FormInput } from "./form-input";
import { FormInputGroup } from "./form-input-group";
import { FormLabel } from "./form-label";
import { FormMaskedInput } from "./form-masked-input";
import { FormMultiSelect } from "./form-multi-select";
import { FormNestedMultiSelect } from "./form-nested-multi-select";
import { FormNestedSelect } from "./form-nested-select";
import { FormOtpVerification } from "./form-otp-verification";
import { FormPhoneNumberInput } from "./form-phone-number-input";
import { FormPredictiveTextInput } from "./form-predictive-text-input";
import { FormRangeSelect } from "./form-range-select";
import { FormRangeSlider } from "./form-range-slider";
import { FormSelect } from "./form-select";
import { FormSelectHistogram } from "./form-select-histogram";
import { FormSlider } from "./form-slider";
import { FormTextarea } from "./form-textarea";
import { FormTimeRangePicker } from "./form-time-range-picker";
import { FormTimepicker } from "./form-timepicker";
import { FormUnitNumberInput } from "./form-unit-number-input";

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
export const Form = {
    /** Layout shell that wraps any custom input element with label, subtitle, and error message. */
    CustomField: FormCustomField,

    /** Single date picker with form layout. */
    DateInput: FormDateInput,

    /** Date range picker with form layout. */
    DateRangeInput: FormDateRangeInput,

    /** E-signature capture field with form layout. */
    ESignature: FormESignature,

    /** Range slider with histogram overlay and form layout. */
    HistogramSlider: FormHistogramSlider,

    /** Single-line text input field with form layout. */
    Input: FormInput,

    /** Grouped inputs with shared label, error state, and form layout. */
    InputGroup: FormInputGroup,

    /** Standalone label element for use outside a `Form.*` field with optional subtitle and addon icon. */
    Label: FormLabel,

    /** Text input with a character-level input mask and form layout. */
    MaskedInput: FormMaskedInput,

    /** Multi-value dropdown select with form layout. */
    MultiSelect: FormMultiSelect,

    /** Hierarchical multi-value select with form layout. */
    NestedMultiSelect: FormNestedMultiSelect,

    /** Hierarchical single-value select with form layout. */
    NestedSelect: FormNestedSelect,

    /** OTP send-and-verify flow with form layout. */
    OtpVerification: FormOtpVerification,

    /** Phone number input with country code selection and form layout. */
    PhoneNumberInput: FormPhoneNumberInput,

    /** Text input with predictive suggestions and form layout. */
    PredictiveTextInput: FormPredictiveTextInput,

    /** Dual-value range dropdown select with form layout. */
    RangeSelect: FormRangeSelect,

    /** Dual-handle range slider with form layout. */
    RangeSlider: FormRangeSlider,

    /** Single-value dropdown select with form layout. */
    Select: FormSelect,

    /** Select control with histogram and form layout. */
    SelectHistogram: FormSelectHistogram,

    /** Single-value range slider with form layout. */
    Slider: FormSlider,

    /** Multi-line text area with form layout. */
    Textarea: FormTextarea,

    /** Time picker with form layout. */
    Timepicker: FormTimepicker,

    /** Time range picker with form layout. */
    TimeRangePicker: FormTimeRangePicker,

    /** Structured unit number input with form layout. */
    UnitNumberInput: FormUnitNumberInput,
};
