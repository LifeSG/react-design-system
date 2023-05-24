import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";

import isBetween from "dayjs/plugin/isBetween";
import { CalendarHelper } from "../util/calendar-helper";
import {
    CalendarType,
    FocusType,
    InternalCalendarProps,
} from "../shared/internal-calendar";
import { TimeSlot } from "../time-slot-bar/types";
import { TimeSlot as TimeSlotComponent } from "../time-slot-bar/time-slot-bar.styles";
import {
    DayLabel,
    GrowDayCell,
    HeaderCell,
    InteractiveCircle,
    RowDayCell,
    StyleProps,
    Wrapper,
} from "../shared/internal-calendar/internal-calendar-day.style";
import { Text } from "../text/text";
import {
    ColumnWeekCell,
    TimeSlotText,
    TimeSlotWrapper,
} from "./time-slot-week.styles";
dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";

interface TimeSlotWeekDaysProps
    extends Pick<
        InternalCalendarProps,
        "disabledDates" | "variant" | "between"
    > {
    selectedDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    type: CalendarType;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    slots?: { [date: string]: TimeSlot[] } | undefined;
    enableSelection?: boolean | undefined;
    onSlotClick?: (timeSlot: TimeSlot) => void | undefined;
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
    type,
    between,
    slots: daySlots,
    enableSelection = true,
    onSlotClick,
}: TimeSlotWeekDaysProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const currentCalendarWeek = useMemo((): Dayjs[][] => {
        return CalendarHelper.generateDaysForCurrentWeek(calendarDate);
    }, [calendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled || !enableSelection) return;

        onSelect(value);
    };

    const handleSlotClick = (slot: TimeSlot) => {
        onSlotClick(slot);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isOutsideBetweenRange =
            between && !day.isBetween(between[0], between[1], "day", "[]");

        const isDisabledDate =
            disabledDates && disabledDates.includes(day.format("YYYY-MM-DD"));

        return isOutsideBetweenRange || isDisabledDate;
    };

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");

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
        return currentCalendarWeek[0].map((day, index) => (
            <HeaderCell $type={type} key={`week-day-${index}`}>
                <Text.XSmall weight={"semibold"}>
                    {dayjs(day).format("ddd")}
                </Text.XSmall>
            </HeaderCell>
        ));
    };

    const renderHeader = () => {
        return currentCalendarWeek.map((week, weekIndex) => {
            return (
                <RowDayCell key={weekIndex}>
                    {week.map((day, dayIndex) => {
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
                                    <DayLabel
                                        weight={
                                            styleLabelProps["$selected"]
                                                ? "semibold"
                                                : "regular"
                                        }
                                        $variant={variant}
                                        $calenderType={type}
                                        {...styleLabelProps}
                                    >
                                        {day.format("D")}
                                    </DayLabel>
                                </InteractiveCircle>
                            </GrowDayCell>
                        );
                    })}
                </RowDayCell>
            );
        });
    };

    const renderTimeSlotBarCells = () => {
        return (
            <ColumnWeekCell
                key={`week-cell-${calendarDate.format("YYYY-MM-DD")}`}
            >
                {currentCalendarWeek[0].map((day, dayIndex) => {
                    const slots =
                        daySlots &&
                        (daySlots[day.format("YYYY-MM-DD")]
                            ? daySlots[day.format("YYYY-MM-DD")]
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
                                                handleSlotClick(slot)
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
                                                        <span> {"-"}</span>
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
        <Wrapper $type={type}>
            {renderHeader()}
            {renderWeek()}
            {renderTimeSlotBarCells()}
        </Wrapper>
    );
};
