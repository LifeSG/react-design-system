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
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, LabelStyleProps, never>;
export {};
