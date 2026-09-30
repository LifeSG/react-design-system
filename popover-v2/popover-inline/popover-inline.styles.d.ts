import { PopoverInlineStyle } from "../types";
interface StyledTextProps {
    $defaultStyle: PopoverInlineStyle;
    $hoverStyle: PopoverInlineStyle;
}
interface StyledIconProps {
    $standalone: boolean;
}
export declare const StyledText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, keyof StyledTextProps> & StyledTextProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, keyof StyledTextProps> & StyledTextProps, never>>> & string;
export declare const StyledIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "$standalone"> & StyledIconProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "$standalone"> & StyledIconProps, never>>> & string;
export {};
