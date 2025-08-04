import { PopoverInlineStyle } from "../types";
interface StyledTextProps {
    $defaultStyle: PopoverInlineStyle;
    $hoverStyle: PopoverInlineStyle;
}
interface StyledIconProps {
    $standalone: boolean;
}
export declare const StyledText: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, StyledTextProps, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, StyledIconProps, never>;
export {};
