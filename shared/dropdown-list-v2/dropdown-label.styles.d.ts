import { DropdownVariantType, LabelDisplayType, TruncateType } from "../dropdown-list/types";
interface LabelStyleProps {
    $labelDisplayType: LabelDisplayType;
    $variant: DropdownVariantType;
}
interface LabelTextStyleProps {
    $labelDisplayType?: LabelDisplayType;
    $maxLines?: number;
    $selected?: boolean;
    $disabled?: boolean;
    $truncateType?: TruncateType;
    $bold?: boolean;
}
interface MatchedTextStyleProps {
    $variant: DropdownVariantType;
}
export declare const PrimaryText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelTextStyleProps, never>;
export declare const SecondaryText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelTextStyleProps, never>;
export declare const MatchedText: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, MatchedTextStyleProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelStyleProps, never>;
export declare const TruncateFirstLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelTextStyleProps, never>;
export declare const TruncateSecondLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelTextStyleProps, never>;
export {};
