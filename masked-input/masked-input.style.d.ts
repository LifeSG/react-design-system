interface InputGroupWrapperProps {
    readOnly: boolean | undefined;
    $isDisabled: boolean | undefined;
}
interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string | undefined;
    $activeColor: string | undefined;
}
export declare const InputGroupWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("..").InputGroupProps<unknown, unknown> & import("react").RefAttributes<HTMLInputElement>, keyof InputGroupWrapperProps> & InputGroupWrapperProps, never> & Partial<Pick<import("styled-components").FastOmit<import("..").InputGroupProps<unknown, unknown> & import("react").RefAttributes<HTMLInputElement>, keyof InputGroupWrapperProps> & InputGroupWrapperProps, never>>> & string & Omit<(<T, V>(props: import("..").InputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null), keyof import("react").Component<any, {}, any>>;
export declare const IconContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof IconProps> & IconProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof IconProps> & IconProps, never>>> & string;
export declare const LoadingWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const LoadingLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never> & Partial<Pick<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const Spinner: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/component-loading-spinner").ComponentLoadingSpinnerProps, never> & Partial<Pick<import("../shared/component-loading-spinner").ComponentLoadingSpinnerProps, never>>> & string & Omit<({ color, className, size, ...otherProps }: import("../shared/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const TryAgainLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export declare const ErrorTextContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export declare const ErrorIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never> & Partial<Pick<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const ErrorLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export declare const ClickableErrorWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/input-wrapper").BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("../shared/input-wrapper").BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<(props: import("../shared/input-wrapper").BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ReadOnlyClickable: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>>> & string;
export declare const ReadOnlyValueText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export declare const ReadOnlyIconContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export {};
