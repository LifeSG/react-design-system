import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MonthCell, MonthPickerContainer } from "./date-month-picker.style";
import { MonthPickerProps, VariantMonth, YearMonthTransition } from "./types";

export type Month = typeof Months[number];

export const MonthPicker = ({
    calendarDate,
    onClick,
    focusTo,
    showView,
    controlTransitionValue,
}: MonthPickerProps) => {
    const [monthDate, setMonthDate] = useState<string[]>([""]);
    const [monthTransition, setMonthTransition] = useState<YearMonthTransition>(
        {
            start: "",
            range: "",
        }
    );

    useEffect(() => {
        if (showView === "Month") {
            const value = controlTransitionValue();

            setMonthTransition(value);
            generateMonth();
        }
    }, [showView, calendarDate]);

    const generateMonthStatus = (date: string) => {
        if (!Object.keys(monthTransition).length) return;
        const { start, range }: any = monthTransition;

        const arrayDate = date.split("-");
        const month = arrayDate[1] as Month;
        const value = dayjs(date).format("YYYY-MM-DD");

        let variant: VariantMonth = "default";
        let disabledBefore = false;
        let disabledAfter = false;

        variant = dayjs().isSame(value, "month") ? "currentMonth" : "default";

        switch (focusTo.container) {
            case "start":
                variant = dayjs(start).isSame(value, "month")
                    ? "selectedMonth"
                    : variant;

                disabledAfter =
                    start.length && range.length
                        ? false
                        : dayjs(value).isAfter(range, "month");
                break;
            case "range":
                variant = dayjs(range).isSame(value, "month")
                    ? "selectedMonth"
                    : variant;

                disabledBefore =
                    start.length && range.length
                        ? false
                        : dayjs(value).isBefore(start, "month");
                break;
            case "none":
                break;
        }

        return {
            disabledAfter,
            disabledBefore,
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
                const { variant, month, value, disabledBefore, disabledAfter } =
                    generateMonthStatus(date);

                return (
                    <MonthCell
                        key={`${date}-${monthIndex}`}
                        data-value={value}
                        onClick={onClick}
                        disabledBefore={disabledBefore}
                        disabledAfter={disabledAfter}
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
