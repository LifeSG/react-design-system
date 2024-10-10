/// <reference types="react" />
import { DropdownVariantType, TruncateType } from "../dropdown-list/types";
export interface DropdownWrapperStyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    error?: boolean;
    expanded?: boolean;
}
export interface ValueLabelStyleProps {
    truncateType?: TruncateType;
    $variant?: DropdownVariantType | undefined;
}
export interface SelectorStyleProps {
    $variant?: DropdownVariantType | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SelectorStyleProps, never>;
export declare const baseSelectorCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SelectorStyleProps, import("styled-components").DefaultTheme>>;
export declare const Selector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, SelectorStyleProps, never>;
export declare const SelectorDiv: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SelectorStyleProps, never>;
export declare const ElementBoundary: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DropdownWrapperStyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DropdownWrapperStyleProps, never>;
export declare const StyledChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, SelectorStyleProps, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ValueLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ValueLabelStyleProps, never>;
export declare const PlaceholderLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ValueLabelStyleProps, never>;
