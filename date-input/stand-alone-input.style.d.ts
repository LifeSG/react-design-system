import { DateInputVariant } from "./types";
interface SectionStyleProps {
    $readOnly?: boolean;
    $variant?: VariantStyleProps;
}
interface PlaceholderStyleProps {
    $isDirty?: boolean;
    $disabled?: boolean;
    $variant?: VariantStyleProps;
}
interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}
interface InputContainerStyleProps {
    $isHover?: boolean;
}
/**
 * input elements selector
 * @param single only render one input element
 * @param start start date input element in range calendar
 * @param range end date input element in range calendar
 */
export type VariantStyleProps = DateInputVariant | "start";
export declare const InputSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SectionStyleProps, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputContainerStyleProps, never>;
export declare const DayInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const MonthInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const YearInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const Divider: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("..").TextProps & LabelStyleProps, never>;
export declare const Placeholder: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, PlaceholderStyleProps, never>;
export {};
