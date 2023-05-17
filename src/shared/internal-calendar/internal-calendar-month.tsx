import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CalendarHelper } from "src/util/calendar-helper";
import { CellLabel, MonthCell, Wrapper } from "./internal-calendar-month.style";
import { FocusType, InternalCalendarProps } from "./types";
import { InternalCalendarHelper } from "./helper";

export type MonthVariant = "default" | "current-month" | "selected-month";

interface Props extends Pick<InternalCalendarProps, "type" | "between"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onMonthSelect: (value: Dayjs) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}

export const InternalCalendarMonth = ({
    calendarDate,
    currentFocus,
    selectedStartDate,
    selectedEndDate,
    viewCalendarDate,
    type,
    isNewSelection,
    between,
    onMonthSelect,
    minDate,
    maxDate,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [months, setMonths] = useState<Dayjs[]>([]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        generateMonths();
    }, [calendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMonthClick = (value: Dayjs) => {
        onMonthSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isOutsideBetweenRange =
            between && !day.isBetween(between[0], between[1], "month", "[]");

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

        return isOutsideBetweenRange || isStartAfterEnd || isEndBeforeStart;
    };

    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        let disabled = false;

        const variant: MonthVariant = viewCalendarDate.isSame(date, "month")
            ? "selected-month"
            : dayjs().isSame(date, "month")
            ? "current-month"
            : "default";

        // logic to disable month of the dates if it falls outside of either minDate's month or maxDate's month
        if (minDate || maxDate) {
            if (
                InternalCalendarHelper.isOutOfDateRange(
                    date,
                    minDate,
                    maxDate,
                    "month"
                )
            ) {
                disabled = true;
            }
            // early return result, taking precedence over the between prop
            return {
                disabled,
                month,
                variant,
            };
        }

        disabled = isDisabled(date);

        return {
            disabled,
            month,
            variant,
        };
    };

    const generateMonths = () => {
        const date = dayjs(calendarDate).date(1);
        const months = CalendarHelper.generateMonths(date);
        setMonths(months);
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!months.length) return null;

    return (
        <Wrapper $type={type}>
            {months.map((date) => {
                const { disabled, variant, month } = generateMonthStatus(date);

                return (
                    <MonthCell
                        key={month}
                        $variant={variant}
                        $disabled={disabled}
                        onClick={() => handleMonthClick(date)}
                    >
                        <CellLabel
                            weight="regular"
                            $variant={variant}
                            $disabled={disabled}
                        >
                            {month}
                        </CellLabel>
                    </MonthCell>
                );
            })}
        </Wrapper>
    );
};
