/// <reference types="react" />
interface InputGroupWrapperProps {
    readOnly: boolean;
    $isDisabled: boolean;
}
interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string;
    $activeColor: string;
}
export declare const InputGroupWrapper: import("styled-components").StyledComponent<(<T, V>(props: import("../input-group").InputGroupProps<T, V> & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>), import("styled-components").DefaultTheme, InputGroupWrapperProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IconProps, never>;
export declare const LoadingWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LoadingLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../v2_text").V2_TextProps, never>;
export declare const Spinner: import("styled-components").StyledComponent<({ color, className, size, }: import("../shared/component-loading-spinner/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const TryAgainLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../v2_text").V2_TextProps, never>;
export declare const ErrorTextContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../v2_text").V2_TextProps, never>;
export declare const ClickableErrorWrapper: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export {};
