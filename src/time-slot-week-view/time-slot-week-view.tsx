import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { CalendarManager } from "../shared/internal-calendar/calendar-manager";
import { TimeSlot } from "../time-slot-bar";
import { TimeSlotWeekDays } from "./time-slot-week-days";
import { Wrapper } from "./time-slot-week-view.styles";
import { TimeSlotWeekViewProps } from "./types";

const DATE_FORMAT = "YYYY-MM-DD";

export const TimeSlotWeekView = ({
    disabledDates,
    onWeekDisplayChange,
    onChange,
    value,
    minDate,
    maxDate,
    slots,
    showNavigationHeader = true,
    enableSelection,
    onSlotClick,
    currentCalendarDate,
    ...otherProps
}: TimeSlotWeekViewProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selectedDate, setSelectedDate] = useState<string>(); // YYYY-MM-DD
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

    const performOnCalendarDate = (value: Dayjs) => {
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
