import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { MonthCell, MonthPickerContainer } from "./calendar-month.style";
import { CalendarHelper } from "src/util/calendar-helper";
import { View } from "./calendar";

export type MonthVariant = "default" | "current-month" | "selected-month";

interface CalendarMonthProps {
    calendarDate: Dayjs;
    currentView: View;
    selectedStartDate: string;
    onSelect: (value: Dayjs) => void;
}

export const CalendarMonth = ({
    calendarDate,
    currentView,
    selectedStartDate,
    onSelect,
}: CalendarMonthProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [months, setMonths] = useState<Dayjs[]>([]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (currentView === "month-options") {
            generateMonths();
        }
    }, [currentView, calendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMonthClick = (value: Dayjs) => {
        onSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        const value = date.format("YYYY-MM-DD");
        let variant: MonthVariant = "default";

        variant = dayjs(selectedStartDate).isSame(value, "month")
            ? "selected-month"
            : dayjs().isSame(value, "month")
            ? "current-month"
            : "default";

        return {
            month,
            variant,
        };
    };

    const generateMonths = () => {
        const months = CalendarHelper.generateMonths(calendarDate);

        setMonths(months);
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!months.length) return null;

    return (
        <MonthPickerContainer>
            {months.map((date) => {
                const { variant, month } = generateMonthStatus(date);
                return (
                    <MonthCell
                        key={month}
                        onClick={() => handleMonthClick(date)}
                        $variant={variant}
                    >
                        {month}
                    </MonthCell>
                );
            })}
        </MonthPickerContainer>
    );
};
