/// <reference types="react" />
interface IStyleProps {
    $show: boolean;
    $viewHeight?: number | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, IStyleProps, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TopBar: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, {}, never>;
export {};
