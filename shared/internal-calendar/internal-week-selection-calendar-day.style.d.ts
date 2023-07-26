import { View } from "./types";
import { DayLabelStyleProps, StyleProps } from "./internal-calendar-day.style";
interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}
export interface WeekDayLabelStyleProps extends DayLabelStyleProps {
    $view: View;
}
export interface OverflowCircleProps extends Partial<OverflowDisplayProps> {
}
interface WeekInteractiveCircleProps extends Omit<WeekDayLabelStyleProps, "$view">, OverflowCircleProps {
}
export declare const WeekOverflowDisplay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("./internal-calendar-day.style").BaseOverflowDisplayProps, never>;
export declare const OverflowCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverflowCircleProps, never>;
export declare const WeekInteractiveCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("./internal-calendar-day.style").BaseInteractiveCircleProps & WeekInteractiveCircleProps, never>;
export declare const WeekDayLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../..").TextProps & DayLabelStyleProps & WeekDayLabelStyleProps, never>;
export {};
