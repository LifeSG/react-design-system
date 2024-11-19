/// <reference types="react" />
import { AlertSizeType, AlertType } from "./types";
interface StyleProps {
    $type: AlertType;
    $sizeType: AlertSizeType;
}
export interface TextWrapperContainerStyleProps {
    $showMore: boolean;
    $hasActionLink: boolean;
    $maxCollapsedHeight?: number;
}
export interface ShowMoreIconStyleProps {
    $expanded: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const AlertIconWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ActionLinkText: import("styled-components").StyledComponent<(props: import("../text").TextLinkProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ContentContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TextWrapperContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TextWrapperContainerStyleProps, never>;
export declare const ShowMoreButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, ShowMoreIconStyleProps, never>;
export {};
