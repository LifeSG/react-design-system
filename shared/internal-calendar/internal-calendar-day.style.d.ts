import { DayVariant } from "./internal-calendar-day";
export interface StyleProps {
    $disabledDisplay?: boolean;
    $interactive?: boolean;
    $overlap?: boolean;
    $hovered?: boolean;
    $selected?: boolean;
}
export interface DayLabelStyleProps extends StyleProps {
    $variant: DayVariant;
}
interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}
interface InteractiveCircleProps extends DayLabelStyleProps {
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const RowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const GrowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const OverflowDisplay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverflowDisplayProps, never>;
export declare const InteractiveCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InteractiveCircleProps, never>;
export declare const DayLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../../text").TextProps & DayLabelStyleProps, never>;
export {};
