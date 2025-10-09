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
export declare const PrimaryText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LabelTextStyleProps>> & string;
export declare const SecondaryText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LabelTextStyleProps>> & string;
export declare const MatchedText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, MatchedTextStyleProps>> & string;
export declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LabelStyleProps>> & string;
export declare const TruncateFirstLine: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LabelTextStyleProps>> & string;
export declare const TruncateSecondLine: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LabelTextStyleProps>> & string;
export {};
