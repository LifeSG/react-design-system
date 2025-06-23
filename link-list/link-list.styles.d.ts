interface ToggleStyleProps {
    $showMinimised: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ItemTitleDefault: import("styled-components").StyledComponent<keyof JSX.IntrinsicElements, import("styled-components").DefaultTheme, import("../typography").TypographyProps & {
    as: "div";
}, "as">;
export declare const ItemTitleSmall: import("styled-components").StyledComponent<keyof JSX.IntrinsicElements, import("styled-components").DefaultTheme, import("../typography").TypographyProps & {
    as: "div";
}, "as">;
export declare const ItemIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, {}, never>;
export declare const ItemContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Description: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const ExpandableChild: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ToggleButtonLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps & {
    as: string;
}, "as">;
export declare const ViewMoreIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ViewLessIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ToggleButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ToggleStyleProps, never>;
export {};
