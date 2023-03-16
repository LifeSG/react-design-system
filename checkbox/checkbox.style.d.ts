/// <reference types="react" />
import { CheckboxProps, CheckboxSize } from "./types";
interface StyleProps {
    selected?: boolean;
    disabled?: boolean;
    $displaySize?: CheckboxSize;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, CheckboxProps, never>;
export declare const Checkmark: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, StyleProps, never>;
export {};
