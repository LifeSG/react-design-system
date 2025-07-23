import { AccordionItemType } from "./types";
interface ContainerStyleProps {
    $expanded?: boolean | undefined;
}
interface ExpandCollapseButtonProps {
    $expanded: boolean;
    $collapsible: boolean;
}
interface TitleProps {
    $type: AccordionItemType;
    $isCollapsed?: boolean | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const ExpandCollapseButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ExpandCollapseButtonProps, never>;
export declare const Title: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TitleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const ContentContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
