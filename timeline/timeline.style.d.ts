/// <reference types="react" />
import { Variant } from "./types";
interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}
interface VariantStyleProps {
    $variant: Variant;
}
export declare const CircleIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, VariantStyleProps, never>;
export declare const LineIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, VariantStyleProps, never>;
export declare const TimelineIndicators: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimelineWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimelineWrapperStyleProps, never>;
export declare const TimelineTitle: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const TimelineItemTitle: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const TimelineItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimelineItemContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimelinePills: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const TimelinePill: import("styled-components").StyledComponent<({ type, colorType, children, icon, ...otherProps }: import("../pill").PillProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
