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
    const [years, setYears] = useState<Dayjs[]>([]);

    useEffect(() => {
        if (showView === "year") {
            generateDecadeOfYears();
        }
    }, [showView, calendarDate]);

    const generateYearStatus = (date: Dayjs) => {
        const otherDecadeIndexes = [0, 11];

        const isOtherDecade = otherDecadeIndexes.includes(years.indexOf(date));
        const fullDate = date.format("YYYY-MM-DD");
        const year = date.year();

        const variant: VariantYear = isOtherDecade
            ? "other-decade"
            : dayjs(selectedStartDate).isSame(fullDate, "year")
            ? "selected-year"
            : dayjs().isSame(fullDate, "year")
            ? "current-year"
            : "default";

        return {
            year,
            variant: variant,
        };
    };

    const generateDecadeOfYears = () => {
        const years = CalendarHelper.generateDecadeOfYears(calendarDate);

        setYears(years);
    };

    const handleYearClick = (value: Dayjs) => {
        onSelect(value);

        onDecadeChange(value);
    };

    if (!years.length) return null;

    return (
        <YearPickerContainer>
            {years.map((date) => {
                const { variant, year } = generateYearStatus(date);

                return (
                    <YearCell
                        key={year}
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
