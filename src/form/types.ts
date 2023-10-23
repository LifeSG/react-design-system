import { DateInputProps } from "../date-input/types";
import { DateRangeInputProps } from "../date-range-input/types";
import { InputGroupPartialProps } from "../input-group/types";
import { MaskedInputPartialProps } from "../masked-input/types";
import { InputMultiSelectPartialProps } from "../input-multi-select/types";
import { InputNestedSelectPartialProps } from "../input-nested-select";
import { InputNestedMultiSelectPartialProps } from "../input-nested-multi-select";
import { InputRangeSelectPartialProps } from "../input-range-select/types";
import { InputSelectPartialProps } from "../input-select/types";
import { TextareaPartialProps } from "../input-textarea/types";
import { InputPartialProps } from "../input/types";
import { PhoneNumberInputProps } from "../phone-number-input/types";
import { PredictiveTextInputProps } from "../predictive-text-input/types";
import { TimeRangePickerProps } from "../time-range-picker/types";
import { TimepickerProps } from "../timepicker/types";
import { UnitNumberInputProps } from "../unit-number/types";
import { ColProps } from "../layout/types";

export type FormLabelAddonType = "tooltip" | "popover";

export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType | undefined /* For informational purposes */;
    icon?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

export interface FormLabelAddonProps {
    content: string | JSX.Element;
    type?: FormLabelAddonType | undefined;
    icon?: JSX.Element | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}

export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    addon?: FormLabelAddonProps | undefined;
    disabled?: boolean | undefined;
    subtitle?: string | JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

export type FormElementLayoutType = "flex" | "grid";

export interface BaseFormElementProps {
    label?: FormLabelProps | string | undefined;
    errorMessage?: string | undefined;
    "data-error-testid"?: string | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: FormElementLayoutType | undefined;
}

export interface FormWrapperProps extends BaseFormElementProps, ColProps {
    children: JSX.Element | JSX.Element[];
    id?: string | undefined;
    disabled?: boolean | undefined;
}

export interface FormInputProps
    extends InputPartialProps,
        BaseFormElementProps,
        ColProps {}

export interface FormInputGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
        BaseFormElementProps,
        ColProps {}

export interface FormMaskedInputProps
    extends MaskedInputPartialProps,
        BaseFormElementProps,
        ColProps {}

export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps,
        ColProps {}

export interface FormCustomFieldProps
    extends FormWrapperProps,
        BaseFormElementProps,
        ColProps {}

export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
        BaseFormElementProps,
        ColProps {}

export interface FormInputRangeSelectProps<T, V>
    extends InputRangeSelectPartialProps<T, V>,
        BaseFormElementProps,
        ColProps {}

export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
        BaseFormElementProps,
        ColProps {}

export interface FormNestedSelectProps<V1, V2, V3>
    extends InputNestedSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps,
        ColProps {}

export interface FormNestedMultiSelectProps<V1, V2, V3>
    extends InputNestedMultiSelectPartialProps<V1, V2, V3>,
        BaseFormElementProps,
        ColProps {}

export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps,
        ColProps {}

export interface FormDateRangeInputProps
    extends DateRangeInputProps,
        BaseFormElementProps,
        ColProps {}

export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps,
        ColProps {}

export interface FormUnitNumberInputProps
    extends UnitNumberInputProps,
        BaseFormElementProps,
        ColProps {}

export interface FormPhoneNumberInputProps
    extends PhoneNumberInputProps,
        BaseFormElementProps,
        ColProps {}

export interface FormTimeRangePickerProps
    extends TimeRangePickerProps,
        BaseFormElementProps,
        ColProps {}

export interface FormPredictiveTextInputProps<T, V>
    extends PredictiveTextInputProps<T, V>,
        BaseFormElementProps,
        ColProps {}
