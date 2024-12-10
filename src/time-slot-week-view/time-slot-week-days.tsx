import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useMemo, useState } from "react";
import { InternalCalendarProps } from "../shared/internal-calendar";
import { CellStyleProps, DayCell } from "../shared/internal-calendar/day-cell";
import { Colour } from "../theme";
import { TimeSlot as TimeSlotComponent } from "../time-slot-bar/time-slot-bar.styles";
import { TimeSlot } from "../time-slot-bar/types";
import { CalendarHelper } from "../util/calendar-helper";
import {
    ColumnWeekCell,
    DayLabel,
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
    onSlotClick?: ((date: string, timeSlot: TimeSlot) => void) | undefined;
}

const dateFormat = "YYYY-MM-DD";

const fallbackSlot = {
    id: "1",
    startTime: "",
    endTime: "",
    clickable: false,
    styleAttributes: {
        styleType: "stripes",
        backgroundColor: Colour["bg-stronger"],
        backgroundColor2: Colour["bg-strongest"],
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
    const [hoverDay, setHoverDay] = useState<Dayjs>();

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

    const handleDayHover = (value: Dayjs) => {
        setHoverDay(value);
    };

    const handleDayMouseout = () => {
        setHoverDay(undefined);
    };

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
        const disabled = isDisabled(day);
        const isHoverEnabled = enableSelection && !disabled;
        const isHover =
            isHoverEnabled && hoverDay && day.isSame(hoverDay, "day");
        const isSelected = [selectedDate].includes(dateStartWithYear);

        const dayCellStyleProps: CellStyleProps = {
            labelType: "available",
            interactive: !enableSelection ? null : isHoverEnabled,
        };

        if (disabled) {
            dayCellStyleProps.disabled = true;
            dayCellStyleProps.labelType = "unavailable";
        }

        if (isSelected && isHover) {
            dayCellStyleProps.labelType = "selected-hover";
            dayCellStyleProps.circleLeft = "selected-hover-outline";
            dayCellStyleProps.circleRight = "selected-hover-outline";
        } else if (isSelected) {
            dayCellStyleProps.labelType = "selected";
            dayCellStyleProps.circleLeft = "selected-outline";
            dayCellStyleProps.circleRight = "selected-outline";
        } else if (isHover) {
            dayCellStyleProps.labelType = "hover";
            dayCellStyleProps.circleLeft = "hover-subtle";
            dayCellStyleProps.circleRight = "hover-subtle";
        }

        return dayCellStyleProps;
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeader = () => {
        return currentCalendarWeek.map((day, index) => {
            const dayCellStyleProps = generateStyleProps(day);

            return (
                <HeaderCellWeek key={`week-day-${index}`}>
                    <DayCell
                        key={`day-${index}`}
                        date={day}
                        calendarDate={dayjs(selectedDate)}
                        onSelect={() => {
                            handleDayClick(day, !dayCellStyleProps.interactive);
                        }}
                        onHover={handleDayHover}
                        onHoverEnd={handleDayMouseout}
                        {...dayCellStyleProps}
                    />
                    <DayLabel $disabled={dayCellStyleProps.disabled}>
                        {dayjs(day).format("ddd")}
                    </DayLabel>
                </HeaderCellWeek>
            );
        });
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
                                            $variant="default"
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
            {renderTimeSlotBarCells()}
        </Wrapper>
    );
};
