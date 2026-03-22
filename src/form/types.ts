import { DateInputProps } from "../date-input/types";
import { DateRangeInputProps } from "../date-range-input/types";
import { HistogramSliderProps } from "../histogram-slider";
import { InputGroupPartialProps } from "../input-group/types";
import { InputMultiSelectPartialProps } from "../input-multi-select/types";
import { InputNestedMultiSelectPartialProps } from "../input-nested-multi-select";
import { InputNestedSelectPartialProps } from "../input-nested-select";
import { InputRangeSelectPartialProps } from "../input-range-select/types";
import { InputRangeSliderProps } from "../input-range-slider/types";
import { InputSelectPartialProps } from "../input-select/types";
import { InputSliderProps } from "../input-slider";
import { TextareaPartialProps } from "../input-textarea/types";
import { InputPartialProps } from "../input/types";
import { ColProps } from "../layout/types";
import { MaskedInputPartialProps } from "../masked-input/types";
import { PhoneNumberInputProps } from "../phone-number-input/types";
import { PredictiveTextInputProps } from "../predictive-text-input/types";
import { TimeRangePickerProps } from "../time-range-picker/types";
import { TimepickerProps } from "../timepicker/types";
import { UnitNumberInputProps } from "../unit-number/types";

export type FormLabelAddonType = "tooltip" | "popover";

export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType | undefined /* For informational purposes */;
    icon?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Configuration for an informational addon attached to a Form label.
 *
 * Renders as a tooltip or popover triggered by an icon next to the label,
 * providing supplementary context without cluttering the form field.
 *
 * @see FormLabelAddonType for available addon types
 */
export interface FormLabelAddonProps {
    /** The content to display inside the tooltip or popover. */
    content: string | JSX.Element;
    /**
     * The addon trigger type.
     *
     * - `"tooltip"`: Shows content in a hover tooltip.
     * - `"popover"`: Shows content in a click-toggled popover.
     *
     * @default undefined
     */
    type?: FormLabelAddonType | undefined;
    /** Custom icon element used as the addon trigger. */
    icon?: JSX.Element | undefined;
    /** The HTML `id` for the tooltip or popover container element. */
    id?: string | undefined;
    /**
     * Sets the `data-testid` attribute for the addon trigger in automated tests.
     */
    "data-testid"?: string | undefined;
}

/**
 * Props for the Form.Label sub-component - accessible form field label.
 *
 * Renders a `<label>` element with optional subtitle text and an informational
 * addon (tooltip or popover). Extends all standard HTML label attributes.
 *
 * @see FormLabelAddonProps for addon configuration
 */
export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * An informational addon (tooltip or popover) attached to the label.
     *
     * @see FormLabelAddonProps for configuration options
     * @default undefined
     */
    addon?: FormLabelAddonProps | undefined;
    /**
     * Applies disabled styling to the label.
     *
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Secondary descriptive text rendered below the main label text.
     *
     * @default undefined
     */
    subtitle?: string | JSX.Element | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the label in automated tests.
     */
    "data-testid"?: string | undefined;
}

/**
 * The layout strategy used to position the label and input within a form field.
 *
 * - `"flex"`: Uses flexbox layout; label and input flow in a column.
 * - `"grid"`: Uses CSS grid layout; useful for multi-column form layouts.
 */
export type FormElementLayoutType = "flex" | "grid";

/**
 * Base props shared by all Form field wrapper components.
 *
 * Provides label, error message, and responsive column layout. All `Form.*`
 * field components extend this interface via composition.
 *
 * @see FormLabelProps for label configuration
 * @see ColProps for column layout options
 */
export interface BaseFormElementProps extends ColProps {
    /**
     * The label for this form field.
     *
     * Pass a string for a simple text label, or a `FormLabelProps` object to
     * configure an addon (tooltip/popover) or subtitle text.
     *
     * @default undefined
     */
    label?: FormLabelProps | string | undefined;
    /**
     * An error message displayed below the field when validation fails.
     *
     * When set, the field input will also receive error styling.
     *
     * @default undefined
     */
    errorMessage?: string | undefined;
    /**
     * Sets the `data-testid` attribute on the error message element.
     */
    "data-error-testid"?: string | undefined;
    /**
     * The layout strategy used to position label and input.
     *
     * - `"flex"`: Column-based flex layout.
     * - `"grid"`: CSS grid layout for multi-column forms.
     *
     * @default undefined
     */
    layoutType?: FormElementLayoutType | undefined;
}

/**
 * Props for the Form.CustomField sub-component - wrapper for arbitrary form content.
 *
 * Use when none of the standard `Form.*` inputs fit the use case. Renders the
 * supplied children inside a standard form field wrapper with label and error
 * message support.
 * @keywords form field, input wrapper, form layout, field group, label input pair
 */
export interface FormWrapperProps extends BaseFormElementProps {
    /** The form control(s) to render inside the field wrapper. */
    children: JSX.Element | JSX.Element[];
    /** The HTML `id` forwarded to the wrapper element. */
    id?: string | undefined;
    /**
     * Disables all child inputs inside the wrapper.
     *
     * @default false
     */
    disabled?: boolean | undefined;
}

/** Props for `Form.Input` — wraps `Input` with a label and error message. */
export interface FormInputProps
    extends InputPartialProps,
        BaseFormElementProps {}

/** Props for `Form.InputGroup` — wraps `InputGroup` with a label and error message. */
export interface FormInputGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
        BaseFormElementProps {}

/** Props for `Form.MaskedInput` — wraps `MaskedInput` with a label and error message. */
export interface FormMaskedInputProps
    extends MaskedInputPartialProps,
        BaseFormElementProps {}

/** Props for `Form.Textarea` — wraps `InputTextarea` with a label and error message. */
export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps {}

/** Props for `Form.CustomField` — wraps arbitrary content with a label and error message. */
export interface FormCustomFieldProps
    extends FormWrapperProps,
        BaseFormElementProps {}

/** Props for `Form.Select` — wraps `InputSelect` with a label and error message. */
export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
        BaseFormElementProps {}

/** Props for `Form.RangeSelect` — wraps `InputRangeSelect` with a label and error message. */
export interface FormInputRangeSelectProps<T, V>
    extends InputRangeSelectPartialProps<T, V>,
        BaseFormElementProps {}

/** Props for `Form.MultiSelect` — wraps `InputMultiSelect` with a label and error message. */
export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
        BaseFormElementProps {}

/** Props for `Form.NestedSelect` — wraps `InputNestedSelect` with a label and error message. */
export interface FormNestedSelectProps<V1, V2, V3>
    extends InputNestedSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps {}

/** Props for `Form.NestedMultiSelect` — wraps `InputNestedMultiSelect` with a label and error message. */
export interface FormNestedMultiSelectProps<V1, V2, V3>
    extends InputNestedMultiSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps {}

/** Props for `Form.DateInput` — wraps `DateInput` with a label and error message. */
export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps {}

/** Props for `Form.DateRangeInput` — wraps `DateRangeInput` with a label and error message. */
export interface FormDateRangeInputProps
    extends DateRangeInputProps,
        BaseFormElementProps {}

/** Props for `Form.Timepicker` — wraps `Timepicker` with a label and error message. */
export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps {}

/** Props for `Form.UnitNumberInput` — wraps `UnitNumberInput` with a label and error message. */
export interface FormUnitNumberInputProps
    extends UnitNumberInputProps,
        BaseFormElementProps {}

/** Props for `Form.PhoneNumberInput` — wraps `PhoneNumberInput` with a label and error message. */
export interface FormPhoneNumberInputProps
    extends PhoneNumberInputProps,
        BaseFormElementProps {}

/** Props for `Form.TimeRangePicker` — wraps `TimeRangePicker` with a label and error message. */
export interface FormTimeRangePickerProps
    extends TimeRangePickerProps,
        BaseFormElementProps {}

/** Props for `Form.PredictiveTextInput` — wraps `PredictiveTextInput` with a label and error message. */
export interface FormPredictiveTextInputProps<T, V>
    extends PredictiveTextInputProps<T, V>,
        BaseFormElementProps {}

/** Props for `Form.Slider` — wraps `InputSlider` with a label and error message. */
export interface FormSliderProps
    extends InputSliderProps,
        BaseFormElementProps {}

/** Props for `Form.RangeSlider` — wraps `InputRangeSlider` with a label and error message. */
export interface FormRangeSliderProps
    extends InputRangeSliderProps,
        BaseFormElementProps {}

/** Props for `Form.HistogramSlider` — wraps `HistogramSlider` with a label and error message. */
export interface FormHistogramSliderProps
    extends HistogramSliderProps,
        BaseFormElementProps {}
