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
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderCell: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const GrowDayCell: import("styled-components").StyledComponent<"div", any, DayCellStyleProps, never>;
export declare const OverflowDisplay: import("styled-components").StyledComponent<"div", any, OverflowDisplayProps, never>;
export declare const InteractiveCircle: import("styled-components").StyledComponent<"div", any, InteractiveCircleProps, never>;
export declare const DayLabel: import("styled-components").StyledComponent<"h5", any, import("../text").TextProps & DayLabelStyleProps, never>;
export {};
