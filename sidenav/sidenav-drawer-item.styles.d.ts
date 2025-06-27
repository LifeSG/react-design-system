/// <reference types="react" />
interface LinkButtonStyleProp {
    $highlight?: boolean | undefined;
    $noChildren?: boolean | undefined;
}
interface IconStyleProp {
    $expanded?: boolean | undefined;
}
export declare const Container: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"li">, import("styled-components").DefaultTheme, {}, never>;
export declare const LinkButton: import("styled-components").StyledComponent<(props: import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, LinkButtonStyleProp, never>;
export declare const DrawerSubitemContainer: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const IconElement: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, IconStyleProp, never>;
export declare const TextElement: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DrawerContent: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"ul">, import("styled-components").DefaultTheme, {}, never>;
export {};
