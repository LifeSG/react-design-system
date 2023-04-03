import { ToggleStyleType } from "./types";
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $indicator?: boolean;
}
interface ContainerStyleProps extends StyleProps {
    $styleType?: ToggleStyleType;
    $error?: boolean;
    $hasSubLabel?: boolean;
}
interface LabelStyleProps extends StyleProps {
}
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerStyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, LabelStyleProps, never>;
export {};
