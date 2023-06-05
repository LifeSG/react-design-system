import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";

import isBetween from "dayjs/plugin/isBetween";
import { InternalCalendarProps } from "../shared/internal-calendar";
import {
    GrowDayCell,
    InteractiveCircle,
    RowDayCell,
    StyleProps,
} from "../shared/internal-calendar/internal-calendar-day.style";
import { Text } from "../text/text";
import { TimeSlot as TimeSlotComponent } from "../time-slot-bar/time-slot-bar.styles";
import { TimeSlot } from "../time-slot-bar/types";
import { CalendarHelper } from "../util/calendar-helper";
import {
    ColumnWeekCell,
    DayLabelWeek,
    HeaderCellWeek,
    TimeSlotText,
    TimeSlotWrapper,
    Wrapper,
} from "./time-slot-week-days.style";
dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";

interface TimeSlotWeekDaysProps
    extends Pick<
        InternalCalendarProps,
        "disabledDates" | "minDate" | "maxDate"
    > {
    selectedDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    slots?: { [date: string]: TimeSlot[] } | undefined;
    enableSelection?: boolean | undefined;
    onSlotClick?: (date: string, timeSlot: TimeSlot) => void | undefined;
}

const fallbackSlot = {
    id: "1",
    startTime: "",
    endTime: "",
    clickable: false,
    styleAttributes: {
        styleType: "stripes",
        backgroundColor: "#ECEFEF",
        backgroundColor2: "#E0E4E5",
    },
};

export const TimeSlotWeekDays = ({
    calendarDate,
    disabledDates,
    selectedDate,
    onSelect,
    minDate,
    maxDate,
    slots: daySlots,
    enableSelection = true,
    onSlotClick,
}: TimeSlotWeekDaysProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const currentCalendarWeek = useMemo((): Dayjs[] => {
        return CalendarHelper.generateDaysForCurrentWeek(calendarDate);
    }, [calendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled || !enableSelection) return;

        onSelect(value);
    };

    const handleSlotClick = (date: string, slot: TimeSlot) => {
        onSlotClick(date, slot);
    };
    const dateFormat = "YYYY-MM-DD";

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined
        );

        const isDisabledDate =
            disabledDates && disabledDates.includes(day.format(dateFormat));

        return !isWithinRange || isDisabledDate;
    };

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format(dateFormat);

        const styleCircleProps: StyleProps = {},
            styleLabelProps: StyleProps = {};

        if (isDisabled(day)) {
            styleCircleProps.$disabled = true;
            styleLabelProps.$disabled = true;
        }

        // apply selected styles
        if ([selectedDate].includes(dateStartWithYear)) {
            styleCircleProps.$selected = true;
            styleLabelProps.$selected = true;
        }

        return {
            styleCircleProps,
            styleLabelProps,
        };
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderWeek = () => {
        return currentCalendarWeek.map((day, index) => (
            <HeaderCellWeek key={`week-day-${index}`}>
                <Text.XSmall weight={"semibold"}>
                    {dayjs(day).format("ddd")}
                </Text.XSmall>
            </HeaderCellWeek>
        ));
    };

    const renderHeader = () => {
        return (
            <RowDayCell>
                {currentCalendarWeek.map((day, dayIndex) => {
                    const variant = "default";
                    const { styleCircleProps, styleLabelProps } =
                        generateStyleProps(day);

                    return (
                        <GrowDayCell key={`day-${dayIndex}`}>
                            <InteractiveCircle
                                $variant={variant}
                                $enableSelection={enableSelection}
                                onClick={() =>
                                    handleDayClick(
                                        day,
                                        styleCircleProps.$disabled
                                    )
                                }
                                {...styleCircleProps}
                            >
                                <DayLabelWeek
                                    weight={
                                        styleLabelProps["$selected"]
                                            ? "semibold"
                                            : "regular"
                                    }
                                    $variant={variant}
                                    {...styleLabelProps}
                                >
                                    {day.format("D")}
                                </DayLabelWeek>
                            </InteractiveCircle>
                        </GrowDayCell>
                    );
                })}
            </RowDayCell>
        );
    };

    const renderTimeSlotBarCells = () => {
        return (
            <ColumnWeekCell
                key={`week-cell-${calendarDate.format(dateFormat)}`}
            >
                {currentCalendarWeek.map((day, dayIndex) => {
                    const formattedDate = day.format(dateFormat);
                    const slots =
                        daySlots &&
                        (daySlots[formattedDate]
                            ? daySlots[formattedDate]
                            : [fallbackSlot]);

                    return (
                        <TimeSlotWrapper key={`wrapper-${dayIndex}`}>
                            {slots &&
                                slots.map((slot) => {
                                    const {
                                        id,
                                        startTime: slotStartTime,
                                        endTime: slotEndTime,
                                        clickable = true,
                                        styleAttributes,
                                    } = slot;
                                    const {
                                        color,
                                        styleType = "default",
                                        backgroundColor,
                                        backgroundColor2,
                                    } = styleAttributes;
                                    return (
                                        <TimeSlotComponent
                                            $type="vertical"
                                            key={id}
                                            $styleType={styleType}
                                            $bgColor={backgroundColor}
                                            $bgColor2={backgroundColor2}
                                            $clickable={clickable}
                                            onClick={() =>
                                                clickable &&
                                                handleSlotClick(
                                                    formattedDate,
                                                    slot
                                                )
                                            }
                                        >
                                            <TimeSlotText
                                                style={{ color: color }}
                                            >
                                                <span>
                                                    {CalendarHelper.convertTo12HourFormat(
                                                        slotStartTime
                                                    )}
                                                </span>
                                                {slotEndTime &&
                                                    slotStartTime && (
                                                        <span>-</span>
                                                    )}
                                                <span>
                                                    {CalendarHelper.convertTo12HourFormat(
                                                        slotEndTime
                                                    )}
                                                </span>
                                            </TimeSlotText>
                                        </TimeSlotComponent>
                                    );
                                })}
                        </TimeSlotWrapper>
                    );
                })}
            </ColumnWeekCell>
        );
    };

    return (
        <Wrapper>
            {renderHeader()}
            {renderWeek()}
            {renderTimeSlotBarCells()}
        </Wrapper>
    );
};
