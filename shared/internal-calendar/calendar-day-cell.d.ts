/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps, View } from "./types";
import { DayVariant } from "./internal-calendar-day";
import { StyleProps } from "./internal-calendar-day.style";
import { OverflowCircleProps } from "./internal-week-selection-calendar-day.style";
type Type = "regular" | "week";
interface DayCellStyleProps {
    styleLeftProps: StyleProps;
    styleRightProps: StyleProps;
    styleCircleProps: StyleProps;
    styleLabelProps: StyleProps;
}
interface CommanCalendarDayCellProps extends CommonCalendarProps, DayCellStyleProps {
    dayDate: Dayjs;
    variant: DayVariant;
    type: Type;
    onDayClick: (value: Dayjs, isDisabled: boolean) => void;
    onHoverCell: (value: string, isDisabled: boolean) => void;
}
type ConditionProps = {
    type: "regular";
    currentView?: never;
    styleOverflowCirleProps?: never;
} | {
    type: "week";
    currentView: View;
    styleOverflowCirleProps: OverflowCircleProps;
};
type CalendarDayCellProps = CommanCalendarDayCellProps & ConditionProps;
export declare const CalendarDayCell: ({ type, dayDate, currentView, variant, styleLeftProps, styleRightProps, styleCircleProps, styleLabelProps, styleOverflowCirleProps, onDayClick, onHoverCell, }: CalendarDayCellProps) => JSX.Element;
export {};
