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

    const generateMonth = () => {
        const months: string[] = [];
        const [yyyy, , dd] = calendarDate.format("YYYY-MM-DD").split("-");

        for (let i = 0; i < 12; i++) {
            const dayInMonth = dayjs(`${yyyy}-${Months[i]}-01`).daysInMonth();
            let month = "";

            month = `${yyyy}-${Months[i]}-${dd}`;

            /**
             * month would be 2023-01-30 but it not exist 30 in Feb
             * dd === 30
             * dayInMonth it may only 28 in the month
             */
            if (+dd > dayInMonth) {
                // get last day of the month
                month = `${yyyy}-${Months[i]}-${dayInMonth}`;
            }

            months.push(month);
        }

        setMonthDate(months);
    };

    if (monthDate.length < 1) return null;

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
