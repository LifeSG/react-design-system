import { Variant } from "./types";
interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}
interface VariantStyleProps {
    $variant: Variant;
}
export declare const CircleIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$variant"> & VariantStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$variant"> & VariantStyleProps, never>>> & string;
export declare const LineIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$variant"> & VariantStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$variant"> & VariantStyleProps, never>>> & string;
export declare const TimelineIndicators: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TimelineWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof TimelineWrapperStyleProps> & TimelineWrapperStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof TimelineWrapperStyleProps> & TimelineWrapperStyleProps, never>>> & string;
export declare const TimelineTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never> & Partial<Pick<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never>>> & string;
export declare const TimelineItemTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never> & Partial<Pick<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
} & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, never>>> & string;
export declare const TimelineItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TimelineItemContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TimelinePills: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TimelinePill: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").PillProps, never> & Partial<Pick<import("..").PillProps, never>>> & string & Omit<({ type, colorType, children, icon, ...otherProps }: import("..").PillProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
