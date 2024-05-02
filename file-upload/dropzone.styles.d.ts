/// <reference types="react" />
interface StyleProps {
    $border?: boolean | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const HiddenInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const DragOverlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const OverlayText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const OverlayIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export {};
