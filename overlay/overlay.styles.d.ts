export interface StyleProps {
    $show: boolean;
    $backgroundOpacity?: number | undefined;
    $backgroundBlur?: boolean | undefined;
    $disableTransition?: boolean | undefined;
    $zIndex?: number | undefined;
}
export declare const Root: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
