interface ContactInputWrapperStyleProps {
    $isMaxWidth?: boolean;
    $error?: boolean;
    $disabled?: boolean;
    $readonly?: boolean;
}
export declare const ContactSectionWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ContactInputSectionWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ContactInputWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContactInputWrapperStyleProps>> & string;
export declare const VerifiedIconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ContactButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>> & string & Omit<(props: import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const EmailContactInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").InputGroupProps<unknown, unknown> & import("react").RefAttributes<HTMLInputElement>, never>> & string & Omit<(<T, V>(props: import("..").InputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null), keyof import("react").Component<any, {}, any>>;
export declare const PhoneContactInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").PhoneNumberInputProps, never>> & string & Omit<({ id, onChange, value, allowClear, onClear, onBlur, error, fixedCountry, optionPlaceholder, optionSearchPlaceholder, enableSearch, onHideOptions, onShowOptions, placeholder, autoComplete, noBorder, getAriaLabel, ...otherProps }: import("..").PhoneNumberInputProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
