import type { BasicButtonProps, BasicInputProps, InputBoxProps, InputWrapperProps } from "./types";
/**
 * Basic wrapper for input fields that provides the border style but does not
 * prescribe any layout for content
 */
export declare const InputBox: (props: InputBoxProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * Basic wrapper for input fields with spacing and flex layout for content
 */
export declare const InputWrapper: (props: InputWrapperProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * Standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export declare const BasicInput: (props: BasicInputProps & import("react").RefAttributes<HTMLInputElement>) => React.ReactElement | null;
/**
 * Standalone native button with stripped-down styles
 */
export declare const BasicButton: (props: BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
/**
 * Clear button with touch-target padding, offsetting negative margin, and
 * a fixed 2px focus outline
 */
export declare const ClearButton: (props: BasicButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
