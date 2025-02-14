export interface InputWrapperStyleProps {
    $disabled?: boolean | undefined;
    $error?: boolean | undefined;
    $readOnly?: boolean | undefined;
    $focused?: boolean | undefined;
    $position?: "left" | "right" | undefined;
}
export interface InputStyleProps {
    $variant?: "small" | "default" | undefined;
}
/**
 * basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export declare const InputBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputWrapperStyleProps, never>;
export declare const InputWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputWrapperStyleProps, never>;
/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export declare const BasicInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputStyleProps, never>;
/**
 * standalone native button with stripped-down styles
 */
export declare const BasicButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, InputStyleProps, never>;
