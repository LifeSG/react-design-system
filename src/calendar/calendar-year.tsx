import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CalendarHelper } from "../util/calendar-helper";
import { CellLabel, Wrapper, YearCell } from "./calendar-year.style";
import { CalendarProps, FocusType } from "./types";

export type YearVariant =
    | "default"
    | "current-year"
    | "other-decade"
    | "selected-year";

interface Props extends Pick<CalendarProps, "type" | "between"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
}

export const CalendarYear = ({
    calendarDate,
    currentFocus,
    selectedStartDate,
    selectedEndDate,
    type,
    isNewSelection,
    between,
    onSelect,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [years, setYears] = useState<Dayjs[]>([]);
    const selectedDate =
        currentFocus === "end" ? selectedEndDate : selectedStartDate;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        generateDecadeOfYears();
    }, [calendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleYearClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isOutsideBetweenRange =
            between && !day.isBetween(between[0], between[1], "year", "[]");

        const isStartAfterEnd =
            currentFocus === "start" &&
            selectedEndDate &&
            day.isAfter(selectedEndDate, "year") &&
            isNewSelection;

        const isEndBeforeStart =
            currentFocus === "end" &&
            selectedStartDate &&
            day.isBefore(selectedStartDate, "year") &&
            isNewSelection;

        return isOutsideBetweenRange || isStartAfterEnd || isEndBeforeStart;
    };

    const generateYearStatus = (date: Dayjs) => {
        const otherDecadeIndexes = [0, 11];

        const isOtherDecade = otherDecadeIndexes.includes(years.indexOf(date));
        const year = date.year();
        const disabled = isDisabled(date);

        const variant: YearVariant = isOtherDecade
            ? "other-decade"
            : selectedDate && dayjs(selectedDate).isSame(date)
            ? "selected-year"
            : dayjs().isSame(date)
            ? "current-year"
            : "default";

        return {
            disabled,
            year,
            variant: variant,
        };
    };

    const generateDecadeOfYears = () => {
        const years = CalendarHelper.generateDecadeOfYears(dayjs(selectedDate));
        setYears(years);
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!years.length) return null;

    return (
        <Wrapper $type={type}>
            {years.map((date) => {
                const { disabled, variant, year } = generateYearStatus(date);

                return (
                    <YearCell
                        key={year}
                        $variant={variant}
                        $disabled={disabled}
                        onClick={() => handleYearClick(date, disabled)}
                    >
                        <CellLabel
                            weight="regular"
                            $variant={variant}
                            $disabled={disabled}
                        >
                            {year}
                        </CellLabel>
                    </YearCell>
                );
            })}
        </Wrapper>
    );
};
