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
export declare const MainInput: import("styled-components").StyledComponent<(props: import("..").InputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, MainInputStyleProps, never>;
export declare const AddOnContainer: import("styled-components").StyledComponent<"div", any, AddonStyleProps, never>;
export {};
