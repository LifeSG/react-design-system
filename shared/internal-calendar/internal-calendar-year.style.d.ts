import { YearVariant } from "./internal-calendar-year";
import { CalendarType } from "./types";
interface StyleProps {
    $disabledDisplay: boolean;
    $interactive: boolean;
    $variant: YearVariant;
}
interface WrapperStyleProps {
    $type: CalendarType;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapperStyleProps, never>;
export declare const YearCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const CellLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../..").TextProps & StyleProps, never>;
export {};
