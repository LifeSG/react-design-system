/// <reference types="react" />
interface WrapperStyleProps {
    $sticky: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperStyleProps, never>;
export declare const Container: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ContentLink: import("styled-components").StyledComponent<(props: import("../text").TextLinkProps) => JSX.Element, any, {}, never>;
export declare const StyledIconButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, {}, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<({ type, ...props }: import("../icon").IconProps) => JSX.Element, any, {}, never>;
export {};
