import { CheckboxProps, CheckboxSize } from "./types";
interface StyleProps {
    $unchecked?: boolean;
    $disabled?: boolean;
    $displaySize?: CheckboxSize;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, CheckboxProps, never>;
export {};