/// <reference types="react" />
import { ToggleStyleType } from "./types";
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $indicator?: boolean;
}
interface ContainerStyleProps extends StyleProps {
    $styleType?: ToggleStyleType;
    $error?: boolean;
}
interface IndicatorLabelContainerStyleProps {
    $addPadding?: boolean;
}
interface LabelStyleProps extends StyleProps {
    $maxLines?: {
        desktop?: number;
        mobile?: number;
        tablet?: number;
    };
}
interface ExpandButtonStyleProps extends StyleProps {
    $paddingTopRequired?: boolean;
}
interface ChildrenStyleProps extends StyleProps {
    $isFinalItem?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const TextContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, LabelStyleProps, never>;
export declare const SubLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelStyleProps, never>;
export declare const HeaderContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const IndicatorLabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndicatorLabelContainerStyleProps, never>;
export declare const RemoveButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ExpandButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ExpandButtonStyleProps, never>;
export declare const ErrorContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const AlertContainer: import("styled-components").StyledComponent<({ type, className, children, actionLink, actionLinkIcon, sizeType, showIcon, customIcon, maxCollapsedHeight, ...otherProps }: import("../alert").AlertProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const Children: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ChildrenStyleProps, never>;
export declare const ErrorText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps & StyleProps, never>;
export declare const ErrorList: import("styled-components").StyledComponent<({ size, children, ...otherProps }: import("../text-list").UnorderedListProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, StyleProps, never>;
export {};
