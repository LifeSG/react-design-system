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

interface Props extends Pick<CalendarProps, "type" | "variant"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    isDirty: boolean;
    onSelect: (value: Dayjs) => void;
}

export const CalendarYear = ({
    calendarDate,
    currentFocus,
    selectedStartDate,
    selectedEndDate,
    type,
    isDirty,
    variant: inputVariant,
    onSelect,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [years, setYears] = useState<Dayjs[]>([]);
    const selectedDate = !currentFocus
        ? selectedStartDate
        : currentFocus === "end"
        ? selectedEndDate
        : selectedStartDate;

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
    const generateYearStatus = (date: Dayjs) => {
        const otherDecadeIndexes = [0, 11];

        const isOtherDecade = otherDecadeIndexes.includes(years.indexOf(date));
        const fullDate = date.format("YYYY-MM-DD");
        const year = date.year();
        let disabled = false;

        if (inputVariant === "range" && !isDirty) {
            if (currentFocus === "start") {
                disabled = date.isAfter(selectedEndDate, "year");
            } else if (currentFocus === "end") {
                disabled = date.isBefore(selectedStartDate, "year");
            }
        }

        const variant: YearVariant = isOtherDecade
            ? "other-decade"
            : selectedDate &&
              selectedDate.length &&
              dayjs(selectedDate).isSame(fullDate, "year")
            ? "selected-year"
            : dayjs().isSame(fullDate, "year")
            ? "current-year"
            : "default";

        return {
            disabled,
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
