/// <reference types="react" />
import { CheckboxProps, CheckboxSize } from "./types";
interface StyleProps {
    selected?: boolean;
    disabled?: boolean;
    $displaySize?: CheckboxSize;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, CheckboxProps, never>;
export declare const Checkmark: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, StyleProps, never>;
export {};
