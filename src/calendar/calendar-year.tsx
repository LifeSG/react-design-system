import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CalendarHelper } from "../util/calendar-helper";
import { CellLabel, Wrapper, YearCell } from "./calendar-year.style";

export type YearVariant =
    | "default"
    | "current-year"
    | "other-decade"
    | "selected-year";

interface Props {
    calendarDate: Dayjs;
    selectedStartDate: string;
    onSelect: (value: Dayjs) => void;
}

export const CalendarYear = ({
    calendarDate,
    selectedStartDate,
    onSelect,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [years, setYears] = useState<Dayjs[]>([]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        generateDecadeOfYears();
    }, [calendarDate]);

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
        <Wrapper>
            {years.map((date) => {
                const { variant, year } = generateYearStatus(date);

                return (
                    <YearCell
                        key={year}
                        $variant={variant}
                        onClick={() => handleYearClick(date)}
                    >
                        <CellLabel weight="regular" $variant={variant}>
                            {year}
                        </CellLabel>
                    </YearCell>
                );
            })}
        </Wrapper>
    );
};
