import { TimelineStatusProps } from "./types";
interface CircleIndicatorStyleProps {
    $filled?: boolean | undefined;
}
interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}
export declare const CircleIndicator: import("styled-components").StyledComponent<"div", any, CircleIndicatorStyleProps, never>;
export declare const LineIndicator: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineIndicators: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineWrapper: import("styled-components").StyledComponent<"div", any, TimelineWrapperStyleProps, never>;
export declare const TimelineTitle: import("styled-components").StyledComponent<"h3", any, import("../text").TextProps, never>;
export declare const TimelineItem: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineItemContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineItemTitle: import("styled-components").StyledComponent<"h4", any, import("../text").TextProps, never>;
export declare const TimelinePills: import("styled-components").StyledComponent<"h3", any, import("../text").TextProps, never>;
export declare const TimelinePill: import("styled-components").StyledComponent<"div", any, TimelineStatusProps, never>;
export {};
