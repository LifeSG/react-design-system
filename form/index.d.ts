/// <reference types="react" />
export declare const Form: {
    DateInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormDateInputProps) => JSX.Element;
    DateRangeInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormDateRangeInputProps) => JSX.Element;
    HistogramSlider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormHistogramSliderProps) => JSX.Element;
    Input: (props: import("./types").FormInputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    InputGroup: <T, V>(props: import("./types").FormInputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    MaskedInput: (props: import("./types").FormMaskedInputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Label: ({ children, addon, subtitle, "data-testid": testId, ...otherProps }: import("./types").FormLabelProps) => JSX.Element;
    MultiSelect: <T_1, V_1>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormMultiSelectProps<T_1, V_1>) => JSX.Element;
    NestedSelect: <V1, V2, V3>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormNestedSelectProps<V1, V2, V3>) => JSX.Element;
    NestedMultiSelect: <V1_1, V2_1, V3_1>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormNestedMultiSelectProps<V1_1, V2_1, V3_1>) => JSX.Element;
    Select: <T_2, V_2>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormInputSelectProps<T_2, V_2>) => JSX.Element;
    Slider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormSliderProps) => JSX.Element;
    RangeSlider: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormRangeSliderProps) => JSX.Element;
    RangeSelect: <T_3, V_3>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, enableSearch, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormInputRangeSelectProps<T_3, V_3>) => JSX.Element;
    Textarea: (props: import("./types").FormTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Timepicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormTimepickerProps) => JSX.Element;
    TimeRangePicker: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormTimeRangePickerProps) => JSX.Element;
    CustomField: ({ id, "data-error-testid": errorTestId, children, ...otherProps }: import("./types").FormCustomFieldProps) => JSX.Element;
    UnitNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormUnitNumberInputProps) => JSX.Element;
    PhoneNumberInput: ({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormPhoneNumberInputProps) => JSX.Element;
    PredictiveTextInput: <T_4, V_4>({ label, errorMessage, id, "data-error-testid": errorTestId, "data-testid": testId, layoutType, mobileCols, tabletCols, desktopCols, ...otherProps }: import("./types").FormPredictiveTextInputProps<T_4, V_4>) => JSX.Element;
};
