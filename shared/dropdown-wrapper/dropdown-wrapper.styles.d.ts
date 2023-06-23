/// <reference types="react" />
import { TruncateType } from "../dropdown-list/types";
export interface DropdownWrapperStyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    error?: boolean;
    expanded?: boolean;
}
export interface ValueLabelStyleProps {
    truncateType?: TruncateType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Selector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const ElementBoundary: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DropdownWrapperStyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DropdownWrapperStyleProps, never>;
export declare const StyledChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ValueLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../text").TextProps & ValueLabelStyleProps, never>;
export declare const PlaceholderLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../text").TextProps & ValueLabelStyleProps, never>;
