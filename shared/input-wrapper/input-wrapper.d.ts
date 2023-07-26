export interface InputWrapperStyleProps {
    $disabled?: boolean | undefined;
    $error?: boolean | undefined;
    $readOnly?: boolean | undefined;
    $position?: "left" | "right" | undefined;
}
export declare const InputWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputWrapperStyleProps, never>;
/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export declare const BasicInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
