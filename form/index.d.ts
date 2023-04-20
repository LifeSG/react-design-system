/// <reference types="react" />
export declare const Form: {
    DateInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, ...otherProps }: import("./types").FormDateInputProps) => JSX.Element;
    Input: (props: import("./types").FormInputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    InputGroup: <T, V>(props: import("./types").FormInputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Label: ({ children, addon, subtitle, "data-testid": testId, ...otherProps }: import("./types").FormLabelProps) => JSX.Element;
    MultiSelect: <T_1, V_1>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, ...otherProps }: import("./types").FormMultiSelectProps<T_1, V_1>) => JSX.Element;
    Select: <T_2, V_2>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, ...otherProps }: import("./types").FormInputSelectProps<T_2, V_2>) => JSX.Element;
    Textarea: (props: import("./types").FormTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Timepicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, ...otherProps }: import("./types").FormTimepickerProps) => JSX.Element;
    CustomField: ({ id, "data-error-testid": errorTestId, children, ...otherProps }: import("./types").FormCustomFieldProps) => JSX.Element;
    UnitNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, ...otherProps }: import("./types").FormUnitNumberInputProps) => JSX.Element;
    PhoneNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, ...otherProps }: import("./types").FormPhoneNumberInputProps) => JSX.Element;
};
