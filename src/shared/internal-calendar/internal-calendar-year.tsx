import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { CalendarHelper } from "../../util/calendar-helper";
import { Wrapper, YearCell } from "./internal-calendar-year.style";
import { FocusType, InternalCalendarProps } from "./types";

export type YearVariant =
    | "default"
    | "current-year"
    | "other-decade"
    | "selected-year";

interface Props
    extends Pick<
        InternalCalendarProps,
        "minDate" | "maxDate" | "allowDisabledSelection"
    > {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string | undefined;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onYearSelect: (value: Dayjs) => void;
}

export const InternalCalendarYear = ({
    calendarDate,
    currentFocus,
    selectedStartDate,
    selectedEndDate,
    viewCalendarDate,
    isNewSelection,
    minDate,
    maxDate,
    allowDisabledSelection,
    onYearSelect,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const years = useMemo<Dayjs[]>(
        () => CalendarHelper.generateDecadeOfYears(dayjs(calendarDate)),
        [calendarDate]
    );

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleYearClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onYearSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined,
            "year"
        );

        return !isWithinRange;
    };

    const isOutsideSelectedRange = (day: Dayjs): boolean => {
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

        return !!(isStartAfterEnd || isEndBeforeStart);
    };

    const generateYearStatus = (date: Dayjs) => {
        const otherDecadeIndexes = [0, 11];
        const yearIndex = years.indexOf(date);

        const isOtherDecade = otherDecadeIndexes.includes(yearIndex);
        const year = date.year();
        const disabled = isDisabled(date);

        const variant: YearVariant = isOtherDecade
            ? "other-decade"
            : viewCalendarDate.isSame(date, "year")
            ? "selected-year"
            : dayjs().isSame(date, "year")
            ? "current-year"
            : "default";

        return {
            disabledDisplay: disabled || isOutsideSelectedRange(date),
            interactive: !disabled || allowDisabledSelection,
            year,
            variant: variant,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!years.length) return null;

    return (
        <Wrapper>
            {years.map((date) => {
                const { disabledDisplay, interactive, variant, year } =
                    generateYearStatus(date);

                return (
                    <YearCell
                        role="button"
                        aria-label={`${year}`}
                        aria-disabled={disabledDisplay}
                        aria-selected={
                            variant === "selected-year" ? "true" : "false"
                        }
                        key={year}
                        $variant={variant}
                        $disabledDisplay={disabledDisplay}
                        $interactive={!!interactive}
                        onClick={() => handleYearClick(date, !interactive)}
                    >
                        {year}
                    </YearCell>
                );
            })}
        </Wrapper>
    );
};
