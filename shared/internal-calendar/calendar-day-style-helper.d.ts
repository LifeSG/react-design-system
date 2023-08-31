import { Dayjs } from "dayjs";
import { FocusType } from "./types";
import { StyleProps } from "./internal-calendar-day.style";
import { OverflowCircleProps } from "./internal-week-selection-calendar-day.style";
import { HoverDirection } from "./internal-calendar-day";
interface GenerateStyleProps {
    styleLeftProps: StyleProps;
    styleRightProps: StyleProps;
    styleCircleProps: StyleProps;
    styleLabelProps: StyleProps;
}
interface WeekStyleProps extends GenerateStyleProps {
    styleOverflowCirleProps: OverflowCircleProps;
}
export declare namespace CalendarDayStyleHelper {
    const generateStyleProps: (day: Dayjs, start: string, end: string, hover: string, hoverDirection: HoverDirection, currentFocus: FocusType, minDate?: string | undefined, maxDate?: string | undefined, disabledDates?: string[] | undefined, allowDisabledSelection?: boolean | undefined, isNewSelection?: boolean | undefined) => GenerateStyleProps;
    const getStylePropsForWeekSelection: (day: Dayjs, start: string, end: string, hover: string, minDate?: string | undefined, maxDate?: string | undefined, disabledDates?: string[] | undefined, allowDisabledSelection?: boolean | undefined) => WeekStyleProps;
}
export {};
