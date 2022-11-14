import { TextWeight } from "../text";
interface StyleProps {
    $selected?: boolean;
    disabled?: boolean;
    $weight?: TextWeight;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"span", any, StyleProps, never>;
export {};
