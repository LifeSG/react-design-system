import { DayVariant } from "./calendar-day";
export interface DayCellStyleProps {
    $point?: "start" | "middle" | "end";
    $hovered?: boolean;
    $disabled?: boolean;
}
interface DayLabelStyleProps {
    $variant: DayVariant;
    $disabled: boolean;
    $selected: boolean;
}
interface OverflowDisplayProps {
    $position: "left" | "right";
}
interface InteractiveCircleProps extends DayLabelStyleProps {
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const GrowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DayCellStyleProps, never>;
export declare const OverflowDisplay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverflowDisplayProps, never>;
export declare const InteractiveCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InteractiveCircleProps, never>;
export declare const DayLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../text").TextProps & DayLabelStyleProps, never>;
export {};
