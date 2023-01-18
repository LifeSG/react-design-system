/// <reference types="react" />
import { TruncateType } from "../shared/dropdown-list/types";
export interface InputSelectStyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    error?: boolean;
    expanded?: boolean;
}
export interface ValueLabelStyleProps {
    truncateType?: TruncateType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Selector: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const ElementBoundary: import("styled-components").StyledComponent<"div", any, InputSelectStyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", any, InputSelectStyleProps, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<({ type, ...props }: import("../icon").IconProps) => JSX.Element, any, {}, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ValueLabel: import("styled-components").StyledComponent<"p", any, import("../text").TextProps & ValueLabelStyleProps, never>;
export declare const PlaceholderLabel: import("styled-components").StyledComponent<"p", any, import("../text").TextProps & ValueLabelStyleProps, never>;
