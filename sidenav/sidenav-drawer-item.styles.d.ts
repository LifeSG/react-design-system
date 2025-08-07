interface LinkButtonStyleProp {
    $highlight?: boolean | undefined;
    $noChildren?: boolean | undefined;
}
interface IconStyleProp {
    $expanded?: boolean | undefined;
}
export declare const Container: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"li">, import("styled-components").DefaultTheme, {}, never>;
export declare const LinkButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../shared/input-wrapper").InputStyleProps & LinkButtonStyleProp, never>;
export declare const DrawerSubitemContainer: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, IconStyleProp, never>;
export declare const TextElement: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const DrawerContent: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"ul">, import("styled-components").DefaultTheme, {}, never>;
export {};
