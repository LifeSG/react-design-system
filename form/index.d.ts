/// <reference types="react" />
export declare const Form: {
    DateInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, ...otherProps }: import("./types").FormDateInputProps) => JSX.Element;
    Input: import("react").ForwardRefExoticComponent<import("./types").FormInputProps & import("react").RefAttributes<HTMLInputElement>>;
    InputGroup: import("react").ForwardRefExoticComponent<import("./types").FormInputGroupProps<unknown, unknown> & import("react").RefAttributes<HTMLInputElement>>;
    Label: ({ children, addon, ...otherProps }: import("./types").FormLabelProps) => JSX.Element;
    MultiSelect: <T, V>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, ...otherProps }: import("./types").FormMultiSelectProps<T, V>) => JSX.Element;
    Select: <T_1, V_1>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, ...otherProps }: import("./types").FormInputSelectProps<T_1, V_1>) => JSX.Element;
    Textarea: import("react").ForwardRefExoticComponent<import("./types").FormTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
    Timepicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, ...otherProps }: import("./types").FormTimepickerProps) => JSX.Element;
};
