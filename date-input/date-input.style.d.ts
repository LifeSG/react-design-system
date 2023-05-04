interface ContainerStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}
interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const BaseInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const MonthInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const YearInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const Divider: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("..").TextProps & LabelStyleProps, never>;
export declare const MonthDivider: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("..").TextProps & LabelStyleProps, never>;
export {};
