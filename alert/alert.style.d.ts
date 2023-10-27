/// <reference types="react" />
import { AlertSizeType, AlertType } from "./types";
interface StyleProps {
    $type: AlertType;
    $sizeType: AlertSizeType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const AlertIconWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ActionLinkText: import("styled-components").StyledComponent<(props: import("../text").TextLinkProps) => JSX.Element, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
