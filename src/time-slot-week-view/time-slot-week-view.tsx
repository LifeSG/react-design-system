import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { CalendarManager } from "../shared/internal-calendar/calendar-manager";
import { TimeSlot } from "../time-slot-bar";
import { TimeSlotWeekDays } from "./time-slot-week-days";
import { Wrapper } from "./time-slot-week-view.styles";

interface TimeSlotWeekViewProps {
    value?: string | undefined; // selected date format (YYYY-MM-DD)
    calendarDate?: string | undefined;
    /** minimum allowed date to select: format (YYYY-MM-DD) **/
    minDate?: string | undefined;
    /** maximum allowed date to select: format (YYYY-MM-DD) **/
    maxDate?: string | undefined;
    /** Specifies any time-bar slots to render in weekly-calendar component */
    slots?: { [date: string]: TimeSlot[] } | undefined;
    /** Specifies should show or hide drop-down buttons and navigation arrows in header*/
    showNavigationHeader?: boolean | undefined;
    /** Specifies should allow selecting date on weekly-calendar component */
    enableSelection?: boolean | undefined;
    /** Specifies which date should be included in the rendered calendar component (date will not be selected) formate: YYYY-DD-MM*/
    currentCalendarDate?: string | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Specifies any callback to execute when user click on rendered slots on weekly-calendar component */
    onSlotClick?: (date: string, timeSlot: TimeSlot) => void | undefined;
    onChange?: (value: string) => void | undefined;
    onWeekDisplayChange?: ((value: YearMonthWeekDisplay) => void) | undefined;
}

interface YearMonthWeekDisplay {
    week: { firstDayOfWeek: string; lastDayOfWeek: string };
    year: number;
    month: number;
}

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
    const dateFormat = "YYYY-MM-DD";

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format(dateFormat);
        setSelectedDate(stringValue);
        onChange(stringValue);
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
