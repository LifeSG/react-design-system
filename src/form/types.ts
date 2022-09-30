import { IconType } from "../icon/types";
import { InputGroupPartialProps } from "../input-group/types";
import {
    InputMultiSelectPartialProps,
    InputSelectPartialProps,
} from "../input-select/types";
import { InputPartialProps } from "../input/types";
import { TextareaPartialProps } from "../input-textarea/types";
import { DateInputProps } from "../date-input/types";
import { TimepickerProps } from "../timepicker/types";

export type FormLabelAddonType = "tooltip" | "popover";

export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType | undefined /* For informational purposes */;
    icon?: IconType | JSX.Element | undefined;
    "data-testid"?: string | undefined;
}

export interface FormLabelAddonProps {
    content: string | JSX.Element;
    type?: FormLabelAddonType | undefined;
    icon?: IconType | JSX.Element | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}

export interface FormLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    addon?: FormLabelAddonProps | undefined;
    disabled?: boolean | undefined;
}

export interface BaseFormElementProps {
    label?: FormLabelProps | string | undefined;
    errorMessage?: string | undefined;
    "data-error-testid"?: string | undefined;
}

export interface FormWrapperProps extends BaseFormElementProps {
    children: JSX.Element | JSX.Element[];
    id?: string | undefined;
    disabled?: boolean | undefined;
}

export interface FormFieldProps
    extends InputPartialProps,
        BaseFormElementProps {}

export interface FormFieldGroupProps<T, V>
    extends InputGroupPartialProps<T, V>,
        BaseFormElementProps {}

export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps {}
// export interface FormCustomFieldProps extends FormWrapperProps, BaseFormElementProps {}
export interface FormInputSelectProps<T, V>
    extends InputSelectPartialProps<T, V>,
        BaseFormElementProps {}

export interface FormMultiSelectProps<T, V>
    extends InputMultiSelectPartialProps<T, V>,
        BaseFormElementProps {}

export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps {}

export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps {}
