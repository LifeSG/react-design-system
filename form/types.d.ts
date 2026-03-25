import type { DateInputProps } from "../date-input/types";
import type { DateRangeInputProps } from "../date-range-input/types";
import type { EsignatureProps } from "../e-signature/types";
import type { HistogramSliderProps } from "../histogram-slider";
import type { InputPartialProps } from "../input/types";
import type { InputGroupPartialProps } from "../input-group/types";
import type { InputMultiSelectPartialProps } from "../input-multi-select/types";
import type { InputNestedMultiSelectPartialProps } from "../input-nested-multi-select";
import type { InputNestedSelectPartialProps } from "../input-nested-select";
import type { InputRangeSelectPartialProps } from "../input-range-select/types";
import type { InputRangeSliderProps } from "../input-range-slider/types";
import type { InputSelectPartialProps } from "../input-select/types";
import type { InputSliderProps } from "../input-slider";
import type { TextareaPartialProps } from "../input-textarea/types";
import type { ColProps } from "../layout/types";
import type { MaskedInputPartialProps } from "../masked-input/types";
import type { PhoneNumberInputProps } from "../phone-number-input/types";
import type { PredictiveTextInputProps } from "../predictive-text-input/types";
import type { SelectHistogramProps } from "../select-histogram";
import type { TimeRangePickerProps } from "../time-range-picker/types";
import type { TimepickerProps } from "../timepicker/types";
import type { UnitNumberInputProps } from "../unit-number/types";
import type { V2_ColProps } from "../v2_layout/types";
export type FormLabelAddonType = "tooltip" | "popover";
export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType | undefined;
    icon?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
}
export interface FormLabelAddonProps {
    content: string | JSX.Element;
    type?: FormLabelAddonType | undefined;
    icon?: JSX.Element | undefined;
    id?: string | undefined;
    zIndex?: number | undefined;
    "data-testid"?: string | undefined;
}
export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    addon?: FormLabelAddonProps | undefined;
    disabled?: boolean | undefined;
    subtitle?: string | JSX.Element | undefined;
    "data-testid"?: string | undefined;
}
export type FormElementLayoutType = "flex" | "grid" | "v2-grid";
export interface BaseFormElementProps extends V2_ColProps, ColProps {
    label?: FormLabelProps | string | undefined;
    errorMessage?: string | React.ReactNode | undefined;
    "data-testid"?: string | undefined;
    "data-error-testid"?: string | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: FormElementLayoutType | undefined;
}
export interface FormWrapperProps extends BaseFormElementProps {
    children: JSX.Element | JSX.Element[];
    id?: string | undefined;
    disabled?: boolean | undefined;
}
export interface FormInputProps extends InputPartialProps, BaseFormElementProps {
}
export interface FormInputGroupProps<T, V> extends InputGroupPartialProps<T, V>, BaseFormElementProps {
}
export interface FormMaskedInputProps extends MaskedInputPartialProps, BaseFormElementProps {
}
export interface FormTextareaProps extends TextareaPartialProps, BaseFormElementProps {
}
export interface FormCustomFieldProps extends FormWrapperProps, BaseFormElementProps {
}
export interface FormInputSelectProps<T, V> extends InputSelectPartialProps<T, V>, BaseFormElementProps {
}
export interface FormInputRangeSelectProps<T, V> extends InputRangeSelectPartialProps<T, V>, BaseFormElementProps {
}
export interface FormMultiSelectProps<T, V> extends InputMultiSelectPartialProps<T, V>, BaseFormElementProps {
}
export interface FormNestedSelectProps<V1, V2, V3> extends InputNestedSelectPartialProps<V1, V2, V3>, BaseFormElementProps {
}
export interface FormNestedMultiSelectProps<V1, V2, V3> extends InputNestedMultiSelectPartialProps<V1, V2, V3>, BaseFormElementProps {
}
export interface FormDateInputProps extends DateInputProps, BaseFormElementProps {
}
export interface FormDateRangeInputProps extends DateRangeInputProps, BaseFormElementProps {
}
export interface FormTimepickerProps extends TimepickerProps, BaseFormElementProps {
}
export interface FormUnitNumberInputProps extends UnitNumberInputProps, BaseFormElementProps {
}
export interface FormPhoneNumberInputProps extends PhoneNumberInputProps, BaseFormElementProps {
}
export interface FormTimeRangePickerProps extends TimeRangePickerProps, BaseFormElementProps {
}
export interface FormPredictiveTextInputProps<T, V> extends PredictiveTextInputProps<T, V>, BaseFormElementProps {
}
export interface FormSliderProps extends InputSliderProps, BaseFormElementProps {
}
export interface FormRangeSliderProps extends InputRangeSliderProps, BaseFormElementProps {
}
export interface FormHistogramSliderProps extends HistogramSliderProps, BaseFormElementProps {
}
export interface FormESignatureProps extends EsignatureProps, BaseFormElementProps {
}
export interface FormSelectHistogramProps extends SelectHistogramProps, BaseFormElementProps {
}
