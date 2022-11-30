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
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerStyleProps, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, ContainerStyleProps, never>;
export declare const FloorInput: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const UnitInput: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const UnitNumberDivider: import("styled-components").StyledComponent<"p", any, import("..").TextProps & LabelStyleProps, never>;
export {};
