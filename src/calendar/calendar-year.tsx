import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { CalendarYearProps, VariantYear } from "./types";
import { YearCell, YearPickerContainer } from "./calendar-year.style";

export const CalendarYear = ({
    calendarDate,
    showView,
    onClick,
    selectedStartDate,
}: CalendarYearProps) => {
    const [yearDate, setYearDate] = useState<string[]>(Array(12).fill(""));

    useEffect(() => {
        if (showView === "Year") {
            generateDecadeOfYear();
        }
    }, [showView, calendarDate]);

    const generateYearStatus = (date: string) => {
        const grayYearIndex = [0, 11];
        const isDecadedYear = grayYearIndex.includes(yearDate.indexOf(date));
        const year = date.split("-")[0];

        let variant: VariantYear = "default";

        variant = isDecadedYear
            ? "nextDecaded"
            : dayjs(selectedStartDate).isSame(date, "year")
            ? "selectedYear"
            : dayjs().isSame(date, "year")
            ? "currentYear"
            : "default";

        return {
            year,
            value: date,
            variant: variant,
        };
    };

    const generateDecadeOfYear = () => {
        const [yyyy, mm, dd] = calendarDate.format("YYYY-MM-DD").split("-");

        const decaded = Math.floor(+yyyy / 10) * 10;
        const years: string[] = [];

        for (let i = 0; i <= 10; i++) {
            let year = "";

            if (i === 0) {
                year = dayjs(`${decaded}-${mm}-${dd}`)
                    .subtract(1, "year")
                    .format("YYYY-MM-DD");

                years.push(year, `${decaded}-${mm}-${dd}`);
            }

            if (i !== 0) {
                year = dayjs(`${decaded}-${mm}-${dd}`)
                    .add(i, "year")
                    .format("YYYY-MM-DD");

                years.push(year);
            }
        }

        setYearDate(years);
    };

    if (!yearDate.length) return null;

    return (
        <YearPickerContainer>
            {yearDate.map((date, yearIndex) => {
                const { variant, year, value } = generateYearStatus(date);

                if (variant === "selectedYear") {
                    console.log("date: ", date);
                }

                return (
                    <YearCell
                        key={`${date}-${yearIndex}`}
                        data-value={value}
                        data-variant={variant}
                        onClick={onClick}
                        variant={variant}
                    >
                        {year}
                    </YearCell>
                );
            })}
        </YearPickerContainer>
    );
};
