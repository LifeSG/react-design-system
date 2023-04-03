import { MonthVariant } from "./calendar-month";
import { CalendarType } from "./types";
interface StyleProps {
    $variant: MonthVariant;
}
interface WrapperStyleProps {
    $type: CalendarType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperStyleProps, never>;
export declare const MonthCell: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const CellLabel: import("styled-components").StyledComponent<"h5", any, import("..").TextProps & StyleProps, never>;
export {};
