/// <reference types="react" />
import { RadioButtonProps, RadioButtonSize } from "./types";
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $displaySize?: RadioButtonSize | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const StyledUnCheckedIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const StyledCheckedIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, RadioButtonProps, never>;
export {};
