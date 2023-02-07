import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { CalendarYearProps, VariantYear } from "./types";
import { YearCell, YearPickerContainer } from "./calendar-year.style";
import { CalendarHelper } from "src/util/calendar-helper";

export const CalendarYear = ({
    calendarDate,
    showView,
    onClick,
    selectedStartDate,
}: CalendarYearProps) => {
    const [yearDate, setYearDate] = useState<Dayjs[]>([]);

    useEffect(() => {
        if (showView === "Year") {
            generateDecadeOfYear();
        }
    }, [showView, calendarDate]);

    const generateYearStatus = (date: Dayjs) => {
        const grayYearIndex = [0, 11];

        const isDecadeYear = grayYearIndex.includes(yearDate.indexOf(date));
        const fullDate = date.format("YYYY-MM-DD");
        const year = fullDate.split("-")[0];

        let variant: VariantYear = "default";

        variant = isDecadeYear
            ? "nextDecade"
            : dayjs(selectedStartDate).isSame(fullDate, "year")
            ? "selectedYear"
            : dayjs().isSame(fullDate, "year")
            ? "currentYear"
            : "default";

        return {
            year,
            value: fullDate,
            variant: variant,
        };
    };

    const generateDecadeOfYear = () => {
        const years = CalendarHelper.generateDecadeOfYear(calendarDate);

        setYearDate(years);
    };

    if (!yearDate.length) return null;

    return (
        <YearPickerContainer>
            {yearDate.map((date, yearIndex) => {
                const { variant, year, value } = generateYearStatus(date);

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
