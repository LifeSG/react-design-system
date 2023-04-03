/// <reference types="react" />
interface StyleProps {
    $selected: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const MobileWrapper: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const LinkItem: import("styled-components").StyledComponent<"li", any, {}, never>;
export declare const Link: import("styled-components").StyledComponent<(props: import("../text").TextLinkProps) => JSX.Element, any, StyleProps, never>;
export declare const LinkLabel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LinkIndicator: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LinkIconContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ExpandCollapseButton: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, StyleProps, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export {};
