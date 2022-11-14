/// <reference types="react" />
interface IStyleProps {
    $show: boolean;
    $viewHeight?: number | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, IStyleProps, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TopBar: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<({ type, ...props }: import("../icon").IconProps) => JSX.Element, any, {}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, {}, never>;
export {};
