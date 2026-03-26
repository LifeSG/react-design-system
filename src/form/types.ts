import { DateInputProps } from "../date-input/types";
import { DateRangeInputProps } from "../date-range-input/types";
import { EsignatureProps } from "../e-signature/types";
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
import { SelectHistogramProps } from "../select-histogram";
import { TimeRangePickerProps } from "../time-range-picker/types";
import { TimepickerProps } from "../timepicker/types";
import { UnitNumberInputProps } from "../unit-number/types";
import { V2_ColProps } from "../v2_layout/types";

/** Determines whether a label addon renders as an inline tooltip or a popover overlay. */
export type FormLabelAddonType = "tooltip" | "popover";

/** Props for the trigger element of a form label addon (tooltip or popover icon button). */
export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType | undefined /* For informational purposes */;
    icon?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

/** Configuration for a tooltip or popover attached to a form label. */
export interface FormLabelAddonProps {
    /** The content to display inside the tooltip or popover. */
    content: string | JSX.Element;
    /** The display type — `"tooltip"` for hover/focus inline hints, `"popover"` for dismissable overlays. */
    type?: FormLabelAddonType | undefined;
    /** Custom icon element used as the trigger. Defaults to an info icon. */
    icon?: JSX.Element | undefined;
    /** Unique identifier for the addon element. */
    id?: string | undefined;
    /** Z-index override for the tooltip or popover overlay. */
    zIndex?: number | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
}

/** Props for the label element that sits above a form field, including optional addon and subtitle. */
export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** Optional tooltip or popover addon attached to the label. */
    addon?: FormLabelAddonProps | undefined;
    /** Visually dims the label when `true` to match a disabled field state. */
    disabled?: boolean | undefined;
    /** Secondary text displayed beneath the main label text. */
    subtitle?: string | JSX.Element | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
}

/** Layout strategy for positioning the label alongside the input control. */
export type FormElementLayoutType = "flex" | "grid" | "v2-grid";

/**
 * Base props shared by all Form field components, providing label, error message, and layout configuration.
 *
 * @keywords form, label, error, layout, field, wrapper
 */
export interface BaseFormElementProps extends V2_ColProps, ColProps {
    /** Label displayed above the field. Accepts a string or a full `FormLabelProps` configuration. */
    label?: FormLabelProps | string | undefined;
    /** Error message shown below the field when validation fails. */
    errorMessage?: string | React.ReactNode | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Test identifier targeting the error message element. */
    "data-error-testid"?: string | undefined;
    /** The layout type for label and input positioning. Values: `"flex"` | `"grid"` | `"v2-grid"` */
    layoutType?: FormElementLayoutType | undefined;
}

/** Wraps arbitrary child elements with a form label, error message, and layout. Use for custom field content. */
export interface FormWrapperProps extends BaseFormElementProps {
    /** The field content to wrap — one or more JSX elements. */
    children: JSX.Element | JSX.Element[];
    /** Unique identifier for the wrapper element. */
    id?: string | undefined;
    /** Disables all child inputs and visually dims the label when `true`. */
    disabled?: boolean | undefined;
}

/** Form-wrapped `Input` field with label and error message support. */
export interface FormInputProps
    extends InputPartialProps,
        BaseFormElementProps {}

/** Form-wrapped `InputGroup` field with addon (label/list/custom) and error message support. */
export interface FormInputGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
        BaseFormElementProps {}

/** Form-wrapped `MaskedInput` field with label and error message support. */
export interface FormMaskedInputProps
    extends MaskedInputPartialProps,
        BaseFormElementProps {}

/** Form-wrapped `Textarea` field with label and error message support. */
export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps {}

/** A fully custom form field slot — wraps any content with label and error message support. */
export interface FormCustomFieldProps
    extends FormWrapperProps,
        BaseFormElementProps {}

/** Form-wrapped `InputSelect` dropdown with label and error message support. */
export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
        BaseFormElementProps {}

/** Form-wrapped `InputRangeSelect` with label and error message support. */
export interface FormInputRangeSelectProps<T, V>
    extends InputRangeSelectPartialProps<T, V>,
        BaseFormElementProps {}

/** Form-wrapped `InputMultiSelect` with label and error message support. */
export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
        BaseFormElementProps {}

/** Form-wrapped `InputNestedSelect` with label and error message support. */
export interface FormNestedSelectProps<V1, V2, V3>
    extends InputNestedSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps {}

/** Form-wrapped `InputNestedMultiSelect` with label and error message support. */
export interface FormNestedMultiSelectProps<V1, V2, V3>
    extends InputNestedMultiSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps {}

/** Form-wrapped `DateInput` with label and error message support. */
export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps {}

/** Form-wrapped `DateRangeInput` with label and error message support. */
export interface FormDateRangeInputProps
    extends DateRangeInputProps,
        BaseFormElementProps {}

/** Form-wrapped `Timepicker` with label and error message support. */
export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps {}

/** Form-wrapped `UnitNumberInput` with label and error message support. */
export interface FormUnitNumberInputProps
    extends UnitNumberInputProps,
        BaseFormElementProps {}

/** Form-wrapped `PhoneNumberInput` with label and error message support. */
export interface FormPhoneNumberInputProps
    extends PhoneNumberInputProps,
        BaseFormElementProps {}

/** Form-wrapped `TimeRangePicker` with label and error message support. */
export interface FormTimeRangePickerProps
    extends TimeRangePickerProps,
        BaseFormElementProps {}

/** Form-wrapped `PredictiveTextInput` with label and error message support. */
export interface FormPredictiveTextInputProps<T, V>
    extends PredictiveTextInputProps<T, V>,
        BaseFormElementProps {}

/** Form-wrapped `InputSlider` with label and error message support. */
export interface FormSliderProps
    extends InputSliderProps,
        BaseFormElementProps {}

/** Form-wrapped `InputRangeSlider` with label and error message support. */
export interface FormRangeSliderProps
    extends InputRangeSliderProps,
        BaseFormElementProps {}

/** Form-wrapped `HistogramSlider` with label and error message support. */
export interface FormHistogramSliderProps
    extends HistogramSliderProps,
        BaseFormElementProps {}

/** Form-wrapped `ESignature` capture field with label and error message support. */
export interface FormESignatureProps
    extends EsignatureProps,
        BaseFormElementProps {}

/** Form-wrapped `SelectHistogram` with label and error message support. */
export interface FormSelectHistogramProps
    extends SelectHistogramProps,
        BaseFormElementProps {}
