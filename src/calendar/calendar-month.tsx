import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MonthCell, MonthPickerContainer } from "./calendar-month.style";
import { CalendarMonthProps, VariantMonth } from "./types";

export type Month = typeof Months[number];

export const CalendarMonth = ({
    calendarDate,
    onClick,
    showView,
    selectedStartDate,
}: CalendarMonthProps) => {
    const [monthDate, setMonthDate] = useState<string[]>([""]);

    useEffect(() => {
        if (showView === "Month") {
            generateMonth();
        }
    }, [showView, calendarDate]);

    const generateMonthStatus = (date: string) => {
        const arrayDate = date.split("-");
        const month = arrayDate[1] as Month;
        const value = dayjs(date).format("YYYY-MM-DD");

        let variant: VariantMonth = "default";

        variant = dayjs().isSame(value, "month")
            ? "currentMonth"
            : dayjs(selectedStartDate).isSame(value, "month")
            ? "selectedMonth"
            : "default";

        return {
            month,
            value,
            variant,
        };
    };

    const generateMonth = () => {
        const months: string[] = [];
        const [yyyy, , dd] = calendarDate.format("YYYY-MM-DD").split("-");

        for (let i = 0; i < 12; i++) {
            const month = `${yyyy}-${Months[i]}-${dd}`;
            months.push(month);
        }

        setMonthDate(months);
    };

    if (!monthDate.length) return null;

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
