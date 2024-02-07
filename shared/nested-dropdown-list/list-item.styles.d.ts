/// <reference types="react" />
import { TruncateType } from "./types";
interface ListProps {
    $expanded: boolean;
    $multiSelect: boolean;
}
interface ListItemSelectorProps {
    $selected: boolean;
    $multiSelect: boolean;
}
interface TruncateProps {
    $truncateType?: TruncateType;
}
interface ItemProps {
    $level: number;
    $multiSelect: boolean;
}
interface CheckboxInputProps {
    $type: "category" | "label";
}
interface ArrowButtonProps extends Pick<ListProps, "$expanded"> {
}
export declare const Category: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ListItemSelector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ListItemSelectorProps, never>;
export declare const Item: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ItemProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TruncateProps, never>;
export declare const Bold: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const TruncateContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TruncateFirstLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TruncateSecondLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ButtonSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CheckboxInput: import("styled-components").StyledComponent<({ className, checked, disabled, indeterminate, onChange, onKeyPress, displaySize, ...otherProps }: import("../../checkbox").CheckboxProps) => JSX.Element, import("styled-components").DefaultTheme, CheckboxInputProps, never>;
export declare const ArrowButton: import("styled-components").StyledComponent<(props: import("../../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, ArrowButtonProps, never>;
export declare const TriangleIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const TitleButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TruncateProps, never>;
export declare const List: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ListProps, never>;
export {};
