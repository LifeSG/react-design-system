import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { CalendarHelper } from "../../util/calendar-helper";
import { CellLabel, MonthCell, Wrapper } from "./internal-calendar-month.style";
import { FocusType, InternalCalendarProps } from "./types";

export type MonthVariant = "default" | "current-month" | "selected-month";

interface Props
    extends Pick<
        InternalCalendarProps,
        "type" | "minDate" | "maxDate" | "allowDisabledSelection"
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
    type,
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
        if (isDisabled && !allowDisabledSelection) return;

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
            disabled: !allowDisabledSelection && disabled,
            disabledDisplay:
                (allowDisabledSelection && disabled) ||
                isOutsideSelectedRange(date),
            month,
            variant,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!months.length) return null;

    return (
        <Wrapper $type={type}>
            {months.map((date) => {
                const { disabled, disabledDisplay, variant, month } =
                    generateMonthStatus(date);

                return (
                    <MonthCell
                        key={month}
                        $variant={variant}
                        $disabled={disabled}
                        $disabledDisplay={disabledDisplay}
                        onClick={() => handleMonthClick(date, disabled)}
                    >
                        <CellLabel
                            weight="regular"
                            $variant={variant}
                            $disabled={disabled}
                            $disabledDisplay={disabledDisplay}
                        >
                            {month}
                        </CellLabel>
                    </MonthCell>
                );
            })}
        </Wrapper>
    );
};
