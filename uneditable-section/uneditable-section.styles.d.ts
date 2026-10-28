interface WrapperStyleProps {
    $background: boolean;
}
interface ContentStyleProps {
    $stretch: boolean | undefined;
}
interface GridStyleProps extends ContentStyleProps {
    $fullWidth?: boolean | undefined;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("..").ContentProps & import("react").RefAttributes<HTMLDivElement>, "$background"> & WrapperStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("..").ContentProps & import("react").RefAttributes<HTMLDivElement>, "$background"> & WrapperStyleProps, never>>> & string & Omit<(props: import("..").ContentProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const FullWidthWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$background"> & WrapperStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$background"> & WrapperStyleProps, never>>> & string;
export declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "$stretch"> & ContentStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "$stretch"> & ContentStyleProps, never>>> & string;
export declare const Description: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "$stretch"> & ContentStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, "$stretch"> & ContentStyleProps, never>>> & string;
export declare const CustomSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$stretch"> & ContentStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$stretch"> & ContentStyleProps, never>>> & string;
export declare const GridUl: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof GridStyleProps> & GridStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof GridStyleProps> & GridStyleProps, never>>> & string;
export {};
