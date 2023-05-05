import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CalendarHelper } from "src/util/calendar-helper";
import { CellLabel, MonthCell, Wrapper } from "./internal-calendar-month.style";
import { FocusType, InternalCalendarProps } from "./types";

export type MonthVariant = "default" | "current-month" | "selected-month";

interface Props extends Pick<InternalCalendarProps, "type" | "between"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
}

export const InternalCalendarMonth = ({
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
    const [months, setMonths] = useState<Dayjs[]>([]);

    const selectedDate =
        currentFocus === "end" ? selectedEndDate : selectedStartDate;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        generateMonths();
    }, [calendarDate, selectedDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMonthClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onSelect(value);
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
        const disabled = isDisabled(date);

        const variant: MonthVariant =
            selectedDate && dayjs(selectedDate).isSame(date, "month")
                ? "selected-month"
                : dayjs().isSame(date, "month")
                ? "current-month"
                : "default";

        return {
            disabled,
            month,
            variant,
        };
    };

    const generateMonths = () => {
        const months = CalendarHelper.generateMonths(dayjs(calendarDate));
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
                        onClick={() => handleMonthClick(date, disabled)}
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
