interface CountdownStyleProps {
    $warn: boolean;
    $visible?: boolean | undefined;
    $top?: number | undefined;
    $left?: number | undefined;
    $right?: number | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BaseCountdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CountdownStyleProps, never>;
export declare const Countdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CountdownStyleProps, never>;
export declare const FixedCountdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CountdownStyleProps, never>;
export declare const TimeLeft: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Timer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimerIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, CountdownStyleProps, never>;
export {};
