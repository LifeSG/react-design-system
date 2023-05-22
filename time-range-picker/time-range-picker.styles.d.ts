/// <reference types="react" />
interface StyleProps {
    $focused?: boolean;
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}
interface ContainerStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const ArrowRangeContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowRight: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const BottomHighlightStartTime: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BottomHighlightEndTime: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InputSelectorStartTimeElement: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const InputSelectorEndTimeElement: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
