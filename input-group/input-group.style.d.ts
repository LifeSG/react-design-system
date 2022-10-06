/// <reference types="react" />
interface AddonStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: "left" | "right";
}
interface MainInputStyleProps {
    $position?: "left" | "right" | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, AddonStyleProps, never>;
export declare const MainInput: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("..").InputProps & import("react").RefAttributes<HTMLInputElement>>, any, MainInputStyleProps, never>;
export declare const AddOnContainer: import("styled-components").StyledComponent<"div", any, AddonStyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<({ type, ...props }: import("../icon").IconProps) => JSX.Element, any, {}, never>;
export {};
