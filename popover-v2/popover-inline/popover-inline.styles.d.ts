import { PopoverInlineStyle } from "../types";
interface StyledTextProps {
    $defaultStyle: PopoverInlineStyle;
    $hoverStyle: PopoverInlineStyle;
}
interface StyledIconProps {
    $standalone: boolean;
}
export declare const StyledText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, StyledTextProps>> & string;
export declare const StyledIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, StyledIconProps>> & string;
export {};
