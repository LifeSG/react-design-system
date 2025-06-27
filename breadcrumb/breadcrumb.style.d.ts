/// <reference types="react" />
interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
}
interface ItemStyleProps {
    $styleProps?: string;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
export declare const Fade: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FadeProps, never>;
export declare const Item: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ItemStyleProps, never>;
export declare const Caret: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const CurrentLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("..").TextProps, never>;
export declare const PreviousLink: import("styled-components").StyledComponent<(props: import("..").TextLinkProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
