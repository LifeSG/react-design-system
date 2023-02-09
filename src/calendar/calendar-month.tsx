import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { MonthCell, MonthPickerContainer } from "./calendar-month.style";
import { CalendarMonthProps, VariantMonth } from "./types";
import { CalendarHelper } from "src/util/calendar-helper";

export const CalendarMonth = ({
    calendarDate,
    showView,
    selectedStartDate,
    onSelect,
}: CalendarMonthProps) => {
    const [monthDate, setMonthDate] = useState<Dayjs[]>([]);

    useEffect(() => {
        if (showView === "Month") {
            generateMonths();
        }
    }, [showView, calendarDate]);

    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        const value = date.format("YYYY-MM-DD");
        let variant: VariantMonth = "default";

        variant = dayjs(selectedStartDate).isSame(value, "month")
            ? "selectedMonth"
            : dayjs().isSame(value, "month")
            ? "currentMonth"
            : "default";

        return {
            month,
            value,
            variant,
        };
    };

    const handleMonthClick = (value: Dayjs) => {
        onSelect(value);
    };

    const generateMonths = () => {
        const months = CalendarHelper.generateMonths(calendarDate);

        setMonthDate(months);
    };

    if (!monthDate.length) return null;

    return (
        <MonthPickerContainer>
            {monthDate.map((date, monthIndex) => {
                const { variant, month, value } = generateMonthStatus(date);
                return (
                    <MonthCell
                        key={`${value}-${monthIndex}`}
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
