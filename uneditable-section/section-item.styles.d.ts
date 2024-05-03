/// <reference types="react" />
import { UneditableSectionItemDisplayWidth } from "./types";
interface ContainerStyleProps {
    $widthStyle: UneditableSectionItemDisplayWidth;
}
export declare const Container: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Clickable: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const LoadingLabel: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const Spinner: import("styled-components").StyledComponent<({ color, className, size, }: import("../shared/component-loading-spinner/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorLabel: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const TryAgainLabel: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledAlert: import("styled-components").StyledComponent<({ type, className, children, actionLink, actionLinkIcon, sizeType, showIcon, ...otherProps }: import("../alert").AlertProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
