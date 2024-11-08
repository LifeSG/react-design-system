/// <reference types="react" />
interface ListContainerProps {
    width?: string;
}
export declare const Container: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const List: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ListContainerProps, never>;
export declare const ResultStateContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const SelectAllContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DropdownCommonButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const Spinner: import("styled-components").StyledComponent<({ color, className, size, }: import("../component-loading-spinner/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
