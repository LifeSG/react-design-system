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

export type FormLabelAddonType = "tooltip" | "popover";

export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType | undefined /* For informational purposes */;
    icon?: React.JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

export interface FormLabelAddonProps {
    content: string | React.JSX.Element;
    type?: FormLabelAddonType | undefined;
    icon?: React.JSX.Element | undefined;
    id?: string | undefined;
    zIndex?: number | undefined;
    "data-testid"?: string | undefined;
}

export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    addon?: FormLabelAddonProps | undefined;
    disabled?: boolean | undefined;
    subtitle?: string | React.JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

export type FormElementLayoutType = "flex" | "grid" | "v2-grid";

export interface BaseFormElementProps extends V2_ColProps, ColProps {
    label?: FormLabelProps | string | undefined;
    errorMessage?: string | undefined;
    "data-error-testid"?: string | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: FormElementLayoutType | undefined;
}

export interface FormWrapperProps extends BaseFormElementProps {
    children: React.JSX.Element | React.JSX.Element[];
    id?: string | undefined;
    disabled?: boolean | undefined;
}

export interface FormInputProps
    extends InputPartialProps,
    BaseFormElementProps { }

export interface FormInputGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
    BaseFormElementProps { }

export interface FormMaskedInputProps
    extends MaskedInputPartialProps,
    BaseFormElementProps { }

export interface FormTextareaProps
    extends TextareaPartialProps,
    BaseFormElementProps { }

export interface FormCustomFieldProps
    extends FormWrapperProps,
    BaseFormElementProps { }

export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
    BaseFormElementProps { }

export interface FormInputRangeSelectProps<T, V>
    extends InputRangeSelectPartialProps<T, V>,
    BaseFormElementProps { }

export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
    BaseFormElementProps { }

export interface FormNestedSelectProps<V1, V2, V3>
    extends InputNestedSelectPartialProps<V1, V2, V3>,
    BaseFormElementProps { }

export interface FormNestedMultiSelectProps<V1, V2, V3>
    extends InputNestedMultiSelectPartialProps<V1, V2, V3>,
    BaseFormElementProps { }

export interface FormDateInputProps
    extends DateInputProps,
    BaseFormElementProps { }

export interface FormDateRangeInputProps
    extends DateRangeInputProps,
    BaseFormElementProps { }

export interface FormTimepickerProps
    extends TimepickerProps,
    BaseFormElementProps { }

export interface FormUnitNumberInputProps
    extends UnitNumberInputProps,
    BaseFormElementProps { }

export interface FormPhoneNumberInputProps
    extends PhoneNumberInputProps,
    BaseFormElementProps { }

export interface FormTimeRangePickerProps
    extends TimeRangePickerProps,
    BaseFormElementProps { }

export interface FormPredictiveTextInputProps<T, V>
    extends PredictiveTextInputProps<T, V>,
    BaseFormElementProps { }

export interface FormSliderProps
    extends InputSliderProps,
    BaseFormElementProps { }

export interface FormRangeSliderProps
    extends InputRangeSliderProps,
    BaseFormElementProps { }

export interface FormHistogramSliderProps
    extends HistogramSliderProps,
    BaseFormElementProps { }

export interface FormESignatureProps
    extends EsignatureProps,
    BaseFormElementProps { }

export interface FormSelectHistogramProps
    extends SelectHistogramProps,
    BaseFormElementProps { }
