/// <reference types="react" />
interface InputStyleProps {
    error?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    type?: React.HTMLInputTypeAttribute;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, InputStyleProps, never>;
export declare const InputElement: import("styled-components").StyledComponent<"input", any, InputStyleProps, never>;
export declare const ClearContainer: import("styled-components").StyledComponent<"button", any, InputStyleProps, never>;
export declare const ClearIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export {};
