import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { MonthCell, MonthPickerContainer } from "./calendar-month.style";
import { CalendarMonthProps, VariantMonth } from "./types";
import { CalendarHelper } from "src/util/calendar-helper";

export type Month = typeof Months[number];

export const CalendarMonth = ({
    calendarDate,
    onClick,
    showView,
    selectedStartDate,
}: CalendarMonthProps) => {
    const [monthDate, setMonthDate] = useState<Dayjs[]>([]);

    useEffect(() => {
        if (showView === "Month") {
            generateMonths();
        }
    }, [showView, calendarDate]);

    const generateMonthStatus = (date: Dayjs) => {
        const arrayDate = dayjs(date).format("YYYY-MMMM-DD").split("-");
        const month = arrayDate[1] as Month;
        const value = date.format("YYYY-MM-DD");
        let variant: VariantMonth = "default";

        if (!dayjs(value).isValid())
            return {
                month,
                value,
                variant,
            };

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

    const generateMonths = () => {
        const months = CalendarHelper.generateMonths(calendarDate);

        setMonthDate(months);
    };

    if (monthDate.length === 1) return null;

    return (
        <MonthPickerContainer>
            {monthDate.map((date, monthIndex) => {
                const { variant, month, value } = generateMonthStatus(date);

                return (
                    <MonthCell
                        key={`${date}-${monthIndex}`}
                        data-value={value}
                        onClick={onClick}
                        variant={variant}
                    >
                        {month}
                    </MonthCell>
                );
            })}
        </MonthPickerContainer>
    );
};

export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
] as const;
