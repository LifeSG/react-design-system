interface GeneralStyleProps {
    $wrap?: boolean;
}
interface IndicatorStyleProps extends GeneralStyleProps {
    $position: "start" | "end" | "none";
    $error: boolean | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, GeneralStyleProps, never>;
export declare const Break: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ElementContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowRight: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Indicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndicatorStyleProps, never>;
export {};
