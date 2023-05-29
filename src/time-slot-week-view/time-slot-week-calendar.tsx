import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { TimeSlot } from "../time-slot-bar";
import { TimeSlotWeekDays } from "./time-slot-week-days";
import { TimeSlotWeekCalendarProps } from "./types";
import { CalendarManager } from "../shared/internal-calendar/calendar-manager";
import { Wrapper } from "./time-slot-week-calendar.style";

export const TimeSlotWeekCalendar = ({
    disabledDates,
    onWeekDisplayChange,
    onSelect,
    value,
    minDate,
    maxDate,
    slots,
    showNavigationHeader = true,
    enableSelection,
    onSlotClick,
    currentCalendarDate,
    ...otherProps
}: TimeSlotWeekCalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selectedDate, setSelectedDate] = useState<string>(); // YYYY-MM-DD
    const dateFormat = "YYYY-MM-DD";

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format(dateFormat);
        setSelectedDate(stringValue);
        onSelect(stringValue);
    };

    const handleOnSlotClick = (date: string, slot: TimeSlot) => {
        if (onSlotClick) {
            onSlotClick(date, slot);
        }
    };

    const performOnCalendarDate = (value: Dayjs) => {
        if (onWeekDisplayChange) {
            const returnValue = {
                week: {
                    firstDayOfWeek: value.startOf("week").format(dateFormat),
                    lastDayOfWeek: value.endOf("week").format(dateFormat),
                },
                month: value.month() + 1,
                year: value.year(),
            };

            onWeekDisplayChange(returnValue);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderContent = () => {
        return (
            <Wrapper>
                <CalendarManager
                    initialCalendarDate={currentCalendarDate}
                    selectedStartDate={value}
                    getLeftArrowDate={(day) => day.subtract(1, "week")}
                    getRightArrowDate={(day) => day.add(1, "week")}
                    isLeftArrowDisabled={(calendarDate) =>
                        minDate &&
                        dayjs(calendarDate).startOf("week") <= dayjs(minDate)
                    }
                    isRightArrowDisabled={(calendarDate) =>
                        maxDate &&
                        dayjs(calendarDate).endOf("week") >= dayjs(maxDate)
                    }
                    onCalendarDate={performOnCalendarDate}
                    showNavigationHeader={showNavigationHeader}
                    {...otherProps}
                >
                    {({ calendarDate }) => {
                        return (
                            <TimeSlotWeekDays
                                calendarDate={calendarDate}
                                disabledDates={disabledDates}
                                selectedDate={selectedDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                isNewSelection={true}
                                onSelect={handleDateSelect}
                                slots={slots}
                                enableSelection={enableSelection}
                                onSlotClick={handleOnSlotClick}
                            />
                        );
                    }}
                </CalendarManager>
            </Wrapper>
        );
    };

    return <>{renderContent()}</>;
};
