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
export interface BaseOverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}
export interface BaseInteractiveCircleProps extends DayLabelStyleProps {
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const RowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const GrowDayCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BaseOverflowDisplay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BaseOverflowDisplayProps, never>;
export declare const BaseInteractiveCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BaseInteractiveCircleProps, never>;
export declare const DayLabel: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../../text").TextProps & DayLabelStyleProps, never>;
export declare const OverflowDisplay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BaseOverflowDisplayProps, never>;
export declare const InteractiveCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BaseInteractiveCircleProps, never>;
