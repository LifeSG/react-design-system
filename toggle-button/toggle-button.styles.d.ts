import { TextWeight } from "../text";
interface StyleProps {
    $selected?: boolean;
    disabled?: boolean;
    $weight?: TextWeight;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
