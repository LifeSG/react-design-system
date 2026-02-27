import { Variant } from "./types";
interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}
interface VariantStyleProps {
    $variant: Variant;
}
export declare const CircleIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantStyleProps>> & string;
export declare const LineIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantStyleProps>> & string;
export declare const TimelineIndicators: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimelineWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TimelineWrapperStyleProps>> & string;
export declare const TimelineTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
}, never>> & string;
export declare const TimelineItemTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
}, never>> & string;
export declare const TimelineItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimelineItemContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimelinePills: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimelinePill: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../pill").PillProps, never>> & string & Omit<({ type, colorType, children, icon, ...otherProps }: import("../pill").PillProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
