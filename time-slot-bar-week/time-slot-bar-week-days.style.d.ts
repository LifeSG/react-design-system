/// <reference types="react" />
import { TimeSlotStyleProps } from "../time-slot-bar/time-slot-bar.styles";
interface TimeSlotCellProps extends TimeSlotStyleProps {
    $height: number;
    $halfFill?: "top" | "bottom";
}
interface TimeColumnStyleProps {
    $height?: number;
}
interface CellWeekTextStyleProps {
    $disabled?: boolean;
}
interface ChevronIconStyleProps {
    $isExpanded?: boolean;
}
export declare const HeaderCellWeek: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CellWeekText: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("../v2_text").V2_TextProps & CellWeekTextStyleProps, never>;
export declare const HeaderCellWeekColumn: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const ColumnWeekCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeColumn: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimeColumnStyleProps, never>;
export declare const TimeColumnWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeColumnText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeSlotWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CollapseExpandAllWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CollapseExpandAllButton: import("styled-components").StyledComponent<(props: import("../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, ChevronIconStyleProps, never>;
export declare const TimeSlotComponent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimeSlotStyleProps & TimeSlotCellProps, never>;
export {};
