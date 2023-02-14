import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { MonthCell, MonthPickerContainer } from "./calendar-month.style";
import { CalendarHelper } from "src/util/calendar-helper";
import { View } from "./calendar";

export type VariantMonth = "default" | "current-month" | "selected-month";

export interface YearMonthBase {
    calendarDate: Dayjs;
    showView: View;
    selectedStartDate: string;
    onSelect: (value: Dayjs) => void;
}

interface CalendarMonthProps extends YearMonthBase {}

export const CalendarMonth = ({
    calendarDate,
    showView,
    selectedStartDate,
    onSelect,
}: CalendarMonthProps) => {
    const [months, setMonths] = useState<Dayjs[]>([]);

    useEffect(() => {
        if (showView === "month") {
            generateMonths();
        }
    }, [showView, calendarDate]);

    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        const value = date.format("YYYY-MM-DD");
        let variant: VariantMonth = "default";

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

    const handleMonthClick = (value: Dayjs) => {
        onSelect(value);
    };

    const generateMonths = () => {
        const months = CalendarHelper.generateMonths(
            calendarDate,
            selectedStartDate
        );

        setMonths(months);
    };

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
