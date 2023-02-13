import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { YearCell, YearPickerContainer } from "./calendar-year.style";
import { CalendarHelper } from "../util/calendar-helper";
import { YearMonthBase } from "./calendar-month";

export type VariantYear =
    | "default"
    | "current-year"
    | "other-decade"
    | "selected-year";

interface CalendarYearProps extends YearMonthBase {
    onDecadeChange: (value: Dayjs) => void;
}

export const CalendarYear = ({
    calendarDate,
    showView,
    selectedStartDate,
    onSelect,
    onDecadeChange,
}: CalendarYearProps) => {
    const [yearDate, setYearDate] = useState<Dayjs[]>([]);

    useEffect(() => {
        if (showView === "year") {
            generateDecadeOfYears();
        }
    }, [showView, calendarDate]);

    const generateYearStatus = (date: Dayjs) => {
        const grayYearIndex = [0, 11];

        const isDecadeYear = grayYearIndex.includes(yearDate.indexOf(date));
        const fullDate = date.format("YYYY-MM-DD");
        const year = fullDate.split("-")[0];

        const variant: VariantYear = isDecadeYear
            ? "other-decade"
            : dayjs(selectedStartDate).isSame(fullDate, "year")
            ? "selected-year"
            : dayjs().isSame(fullDate, "year")
            ? "current-year"
            : "default";

        return {
            year,
            value: fullDate,
            variant: variant,
        };
    };

    const generateDecadeOfYears = () => {
        const years = CalendarHelper.generateDecadeOfYears(calendarDate);

        setYearDate(years);
    };

    const handleYearClick = (value: Dayjs) => {
        onSelect(value);

        onDecadeChange(value);
    };

    if (!yearDate.length) return null;

    return (
        <YearPickerContainer>
            {yearDate.map((date, yearIndex) => {
                const { variant, year, value } = generateYearStatus(date);

                return (
                    <YearCell
                        key={`${value}-${yearIndex}`}
                        data-variant={variant}
                        $variant={variant}
                        onClick={() => handleYearClick(date)}
                    >
                        {year}
                    </YearCell>
                );
            })}
        </YearPickerContainer>
    );
};
