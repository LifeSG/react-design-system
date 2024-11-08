import { MonthVariant } from "./internal-calendar-month";
import { CalendarType } from "./types";
interface StyleProps {
    $variant: MonthVariant;
    $disabledDisplay?: boolean;
    $interactive?: boolean;
}
interface WrapperStyleProps {
    $type: CalendarType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapperStyleProps, never>;
export declare const MonthCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const CellLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../..").V2_TextProps & StyleProps, never>;
export {};
