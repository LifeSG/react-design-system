/// <reference types="react" />
interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
}
interface CaretProps {
    $color?: string;
}
interface ItemStyleProps {
    $styleProps?: string;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const Fade: import("styled-components").StyledComponent<"div", any, FadeProps, never>;
export declare const Item: import("styled-components").StyledComponent<"li", any, ItemStyleProps, never>;
export declare const Caret: import("styled-components").StyledComponent<({ type, ...props }: import("..").IconProps) => JSX.Element, any, CaretProps, never>;
export declare const CurrentLabel: import("styled-components").StyledComponent<"p", any, import("..").TextProps, never>;
export declare const PreviousLink: import("styled-components").StyledComponent<(props: import("..").TextLinkProps) => JSX.Element, any, {}, never>;
export {};
