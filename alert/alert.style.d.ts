/// <reference types="react" />
import { AlertType } from "./types";
interface StyleProps {
    $type: AlertType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const ActionLinkText: import("styled-components").StyledComponent<(props: import("../text").TextLinkProps) => JSX.Element, any, {}, never>;
export declare const ArrowIcon: import("styled-components").StyledComponent<({ type, ...props }: import("../icon").IconProps) => JSX.Element, any, {}, never>;
export {};
