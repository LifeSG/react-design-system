import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { CalendarHelper } from "../../util/calendar-helper";
import { MonthCell, Wrapper } from "./internal-calendar-month.style";
import { FocusType, InternalCalendarProps } from "./types";

export type MonthVariant = "default" | "current-month" | "selected-month";

interface Props
    extends Pick<
        InternalCalendarProps,
        "minDate" | "maxDate" | "allowDisabledSelection"
    > {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onMonthSelect: (value: Dayjs) => void;
}

export const InternalCalendarMonth = ({
    calendarDate,
    currentFocus,
    selectedStartDate,
    selectedEndDate,
    viewCalendarDate,
    isNewSelection,
    minDate,
    maxDate,
    allowDisabledSelection,
    onMonthSelect,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const months = useMemo<Dayjs[]>(
        () => CalendarHelper.generateMonths(dayjs(calendarDate)),
        [calendarDate]
    );

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMonthClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onMonthSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined,
            "month"
        );

        return !isWithinRange;
    };

    const isOutsideSelectedRange = (day: Dayjs): boolean => {
        const isStartAfterEnd =
            currentFocus === "start" &&
            selectedEndDate &&
            day.isAfter(selectedEndDate, "month") &&
            isNewSelection;

        const isEndBeforeStart =
            currentFocus === "end" &&
            selectedStartDate &&
            day.isBefore(selectedStartDate, "month") &&
            isNewSelection;

        return isStartAfterEnd || isEndBeforeStart;
    };

    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        const disabled = isDisabled(date);

        const variant: MonthVariant = viewCalendarDate.isSame(date, "month")
            ? "selected-month"
            : dayjs().isSame(date, "month")
            ? "current-month"
            : "default";

        return {
            disabledDisplay: disabled || isOutsideSelectedRange(date),
            interactive: !disabled || allowDisabledSelection,
            month,
            variant,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!months.length) return null;

    return (
        <Wrapper>
            {months.map((date) => {
                const { disabledDisplay, interactive, variant, month } =
                    generateMonthStatus(date);

                return (
                    <MonthCell
                        key={month}
                        $variant={variant}
                        $disabledDisplay={disabledDisplay}
                        $interactive={interactive}
                        onClick={() => handleMonthClick(date, !interactive)}
                    >
                        {month}
                    </MonthCell>
                );
            })}
        </Wrapper>
    );
};
