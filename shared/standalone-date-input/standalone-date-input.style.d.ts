interface PlaceholderStyleProps {
    $hide?: boolean;
    $disabled?: boolean;
}
interface DividerStyleProps {
    $inactive?: boolean;
}
interface InputContainerStyleProps {
    $hover?: boolean;
}
export declare const InputSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputContainerStyleProps, never>;
export declare const DayInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps, never>;
export declare const MonthInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps, never>;
export declare const YearInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps, never>;
export declare const Divider: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../..").V2_TextProps & DividerStyleProps, never>;
export declare const Placeholder: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, PlaceholderStyleProps, never>;
export {};
