import dayjs, { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";
import { CalendarManagerRef } from "../shared/internal-calendar";
import { CalendarManager } from "../shared/internal-calendar/calendar-manager";
import { TimeSlot } from "../time-slot-bar";
import { DateHelper } from "../util";
import { TimeSlotBarWeekDays } from "./time-slot-bar-week-days";
import { Wrapper } from "./time-slot-bar-week.style";
import { TimeSlotBarWeekProps } from "./types";

const DATE_FORMAT = "YYYY-MM-DD";

export const TimeSlotBarWeek = ({
    disabledDates,
    onWeekDisplayChange,
    onChange,
    value,
    minDate,
    maxDate,
    startTime,
    endTime,
    slots,
    interval,
    variant,
    maxVisibleCellHeight,
    showNavigationHeader = true,
    enableSelection,
    onSlotClick,
    currentCalendarDate,
    ...otherProps
}: TimeSlotBarWeekProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selectedDate, setSelectedDate] = useState<string | undefined>(value); // YYYY-MM-DD
    const calendarManagerRef = useRef<CalendarManagerRef>(null);
    const previousCalendarDate = useRef<Dayjs | undefined>(undefined);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelectedDate(value);
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format(DATE_FORMAT);
        setSelectedDate(stringValue);
        onChange && onChange(stringValue);
    };

    const handleOnSlotClick = (date: string, slot: TimeSlot) => {
        if (onSlotClick) {
            onSlotClick(date, slot);
        }
    };

    const handleOnCalendarDateChange = (value: Dayjs) => {
        if (
            !previousCalendarDate.current ||
            !previousCalendarDate.current.isSame(value, "week")
        ) {
            performDisplayChangeHandler(value);
        }
        previousCalendarDate.current = value;
    };

    // =============================================================================
    // HELPERS
    // =============================================================================

    const performDisplayChangeHandler = (value: Dayjs) => {
        if (onWeekDisplayChange) {
            const returnValue = {
                week: {
                    firstDayOfWeek: value.startOf("week").format(DATE_FORMAT),
                    lastDayOfWeek: value.endOf("week").format(DATE_FORMAT),
                },
                month: value.month() + 1,
                year: value.year(),
            };

            onWeekDisplayChange(returnValue);
        }
    };

    const getInitialCalendarDate = () => {
        return DateHelper.toDayjs(selectedDate || currentCalendarDate)
            .endOf("week")
            .format(DATE_FORMAT);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTimeSlotWeekDays = (calendarDate: dayjs.Dayjs) => {
        return (
            <TimeSlotBarWeekDays
                calendarDate={calendarDate}
                disabledDates={disabledDates}
                selectedDate={selectedDate}
                minDate={minDate}
                maxDate={maxDate}
                startTime={startTime}
                endTime={endTime}
                onSelect={handleDateSelect}
                slots={slots}
                interval={interval}
                variant={variant}
                maxVisibleCellHeight={maxVisibleCellHeight}
                enableSelection={enableSelection}
                onSlotClick={handleOnSlotClick}
            />
        );
    };

    return (
        <Wrapper {...otherProps}>
            <CalendarManager
                ref={calendarManagerRef}
                dynamicHeight
                initialCalendarDate={getInitialCalendarDate()}
                selectedStartDate={selectedDate}
                getLeftArrowDate={(day) => day.subtract(1, "week")}
                getRightArrowDate={(day) => day.add(1, "week")}
                isLeftArrowDisabled={(calendarDate) =>
                    !!minDate &&
                    dayjs(calendarDate)
                        .subtract(1, "week")
                        .isBefore(minDate, "week")
                }
                isRightArrowDisabled={(calendarDate) =>
                    !!maxDate &&
                    dayjs(calendarDate).add(1, "week").isAfter(maxDate, "week")
                }
                onCalendarDateChange={handleOnCalendarDateChange}
                showNavigationHeader={showNavigationHeader}
                minDate={minDate}
                maxDate={maxDate}
                getMonthHeaderLabel={(calendarDate) =>
                    dayjs(calendarDate).endOf("week").format("MMM")
                }
                getYearHeaderLabel={(calendarDate) =>
                    dayjs(calendarDate).endOf("week").format("YYYY")
                }
            >
                {({ calendarDate }) => {
                    return renderTimeSlotWeekDays(calendarDate);
                }}
            </CalendarManager>
        </Wrapper>
    );
};
