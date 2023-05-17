import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CalendarHelper } from "../../util/calendar-helper";
import { CellLabel, Wrapper, YearCell } from "./internal-calendar-year.style";
import { FocusType, InternalCalendarProps } from "./types";
import { InternalCalendarHelper } from "./helper";

export type YearVariant =
    | "default"
    | "current-year"
    | "other-decade"
    | "selected-year";

interface Props extends Pick<InternalCalendarProps, "type" | "between"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onYearSelect: (value: Dayjs) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}

export const InternalCalendarYear = ({
    calendarDate,
    currentFocus,
    selectedStartDate,
    selectedEndDate,
    viewCalendarDate,
    type,
    isNewSelection,
    between,
    onYearSelect,
    minDate,
    maxDate,
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
        onYearSelect(value);
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
        let disabled = false;

        const variant: YearVariant = isOtherDecade
            ? "other-decade"
            : viewCalendarDate.isSame(date, "year")
            ? "selected-year"
            : dayjs().isSame(date, "year")
            ? "current-year"
            : "default";

        // logic to disable year of the dates if it falls outside of either minDate's year or maxDate's year
        if (minDate || maxDate) {
            if (
                InternalCalendarHelper.isOutOfDateRange(
                    date,
                    minDate,
                    maxDate,
                    "year"
                )
            ) {
                disabled = true;
            }
            // early return result, taking precedence over the between prop
            return {
                disabled,
                year,
                variant: variant,
            };
        }

        disabled = isDisabled(date);

        return {
            disabled,
            year,
            variant: variant,
        };
    };

    const generateDecadeOfYears = () => {
        const date = dayjs(calendarDate).date(1).month(0);
        const years = CalendarHelper.generateDecadeOfYears(date);
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
                        onClick={() => handleYearClick(date)}
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
