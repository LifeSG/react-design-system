import { DayVariant } from "./internal-calendar-day";
import { CalendarType } from "./types";
export interface StyleProps {
    $disabled?: boolean;
    $overlap?: boolean;
    $hovered?: boolean;
    $selected?: boolean;
}
interface DayLabelStyleProps extends StyleProps {
    $variant: DayVariant;
}
interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}
interface WrapperStyleProps {
    $type: CalendarType;
}
interface InteractiveCircleProps extends DayLabelStyleProps {
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapperStyleProps, never>;
export declare const HeaderCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const RowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const GrowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const OverflowDisplay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverflowDisplayProps, never>;
export declare const InteractiveCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InteractiveCircleProps, never>;
export declare const DayLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../../text").TextProps & DayLabelStyleProps, never>;
export {};
