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
export {};
