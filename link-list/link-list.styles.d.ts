/// <reference types="react" />
interface ToggleStyleProps {
    $showMinimised: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemTitleDefault: import("styled-components").StyledComponent<"h3", any, import("../text").TextProps, never>;
export declare const ItemTitleSmall: import("styled-components").StyledComponent<"p", any, import("../text").TextProps, never>;
export declare const ItemIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const ItemContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Description: import("styled-components").StyledComponent<"p", any, import("../text").TextProps, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, any, {}, never>;
export declare const ExpandableChild: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ToggleButtonLabel: import("styled-components").StyledComponent<"h5", any, import("../text").TextProps, never>;
export declare const ViewMoreIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export declare const ViewLessIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export declare const ToggleButton: import("styled-components").StyledComponent<"button", any, ToggleStyleProps, never>;
export {};
