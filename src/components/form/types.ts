import { InputGroupPartialProps } from "../input-group/types";
import { InputSelectPartialProps } from "../input-select/types";
import { InputPartialProps } from "../input/types";
import { TextareaPartialProps } from "../textarea/types";
import { DateInputProps } from "../date-input/types";
import { LabelHTMLAttributes } from "react";
import { TimepickerProps } from "../timepicker/types";

export type FormLabelAddonType = "tooltip" | "popover";

export interface FormLabelAddonTriggerProps {
    addonType?: FormLabelAddonType /* For informational purposes */;
    "data-testid"?: string;
}

export interface FormLabelAddonProps {
    type?: FormLabelAddonType;
    content: string | JSX.Element;
    id?: string;
    "data-testid"?: string;
}

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    text?: string;
    addon?: FormLabelAddonProps;
    disabled?: boolean;
}

export interface BaseFormElementProps {
    label?: FormLabelProps | string;
    errorMessage?: string;
    errorMessageTestId?: string;
}

export interface FormWrapperProps extends BaseFormElementProps {
    id?: string;
    disabled?: boolean;
    children: JSX.Element | JSX.Element[];
}

export interface FormFieldProps
    extends InputPartialProps,
        BaseFormElementProps {}
export interface FormFieldGroupProps<T>
    extends InputGroupPartialProps<T>,
        BaseFormElementProps {}
export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps {}
export interface FormCustomFieldProps
    extends FormWrapperProps,
        BaseFormElementProps {}
export interface FormInputSelectProps<T>
    extends InputSelectPartialProps<T>,
        BaseFormElementProps {}
export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps {}

export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps {}
