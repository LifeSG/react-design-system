/// <reference types="react" />
import { DropdownVariantType, IconProps, LabelDisplayType, TruncateType } from "./types";
interface ListContainerProps {
    width?: string;
}
interface ListItemProps {
    $checked?: boolean;
}
interface ListItemSelectorProps {
    $multiSelect?: boolean;
    $hasNextLineLabel?: boolean;
    $variant?: DropdownVariantType;
}
interface LabelProps {
    $truncateType?: TruncateType;
    $maxLines?: number;
    $labelDisplayType?: LabelDisplayType;
    $variant?: DropdownVariantType;
}
interface ResultStateProps {
    $variant?: DropdownVariantType;
}
export declare const Container: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const List: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ListContainerProps, never>;
export declare const ListItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ListItemProps, never>;
export declare const ListItemSelector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ListItemSelectorProps, never>;
export declare const PrimaryText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const SecondaryText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const TruncateFirstLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const TruncateSecondLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const ListCheckbox: import("styled-components").StyledComponent<({ className, checked, disabled, indeterminate, onChange, onKeyPress, displaySize, ...otherProps }: import("../../checkbox").CheckboxProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const SelectAllContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DropdownCommonButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const ResultStateContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ResultStateText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ResultStateProps, never>;
export declare const LabelIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, IconProps, never>;
export {};
