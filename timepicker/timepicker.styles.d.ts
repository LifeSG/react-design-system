interface StyleProps {
    focused?: boolean;
    disabled?: boolean;
    error?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InputSelectorElement: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("../shared/input-wrapper/input-wrapper").InputStyleProps & StyleProps, never>;
export {};
