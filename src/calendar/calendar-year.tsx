import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { YearCell, YearPickerContainer } from "./calendar-year.style";
import { CalendarHelper } from "../util/calendar-helper";
import { View } from "./calendar";

export type YearVariant =
    | "default"
    | "current-year"
    | "other-decade"
    | "selected-year";

interface CalendarYearProps {
    calendarDate: Dayjs;
    currentView: View;
    selectedStartDate: string;
    onSelect: (value: Dayjs) => void;
}

export const CalendarYear = ({
    calendarDate,
    currentView,
    selectedStartDate,
    onSelect,
}: CalendarYearProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [years, setYears] = useState<Dayjs[]>([]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (currentView === "year-options") {
            generateDecadeOfYears();
        }
    }, [currentView, calendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleYearClick = (value: Dayjs) => {
        onSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const generateYearStatus = (date: Dayjs) => {
        const otherDecadeIndexes = [0, 11];

        const isOtherDecade = otherDecadeIndexes.includes(years.indexOf(date));
        const fullDate = date.format("YYYY-MM-DD");
        const year = date.year();

        const variant: YearVariant = isOtherDecade
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
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
