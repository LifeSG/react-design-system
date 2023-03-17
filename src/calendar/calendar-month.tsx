import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CalendarHelper } from "src/util/calendar-helper";
import { CellLabel, MonthCell, Wrapper } from "./calendar-month.style";
import { CalendarProps, FocusType } from "./types";

export type MonthVariant = "default" | "current-month" | "selected-month";

interface Props extends Pick<CalendarProps, "type" | "variant"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    isDirty: boolean;
    onSelect: (value: Dayjs) => void;
}

export const CalendarMonth = ({
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
    const [months, setMonths] = useState<Dayjs[]>([]);

    const selectedDate = !currentFocus
        ? selectedStartDate
        : currentFocus === "end"
        ? selectedEndDate
        : selectedStartDate;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        generateMonths();
    }, [calendarDate]);

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
    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        const value = date.format("YYYY-MM-DD");
        let variant: MonthVariant = "default";
        let disabled = false;

        if (inputVariant === "range" && !isDirty) {
            if (currentFocus === "start" && selectedEndDate) {
                disabled = date.isAfter(selectedEndDate, "month");
            } else if (currentFocus === "end" && selectedStartDate) {
                disabled = date.isBefore(selectedStartDate, "month");
            }
        }

        variant =
            selectedDate &&
            selectedDate.length &&
            dayjs(selectedDate).isSame(value, "month")
                ? "selected-month"
                : dayjs().isSame(value, "month")
                ? "current-month"
                : "default";

        return {
            disabled,
            month,
            variant,
        };
    };

    const generateMonths = () => {
        const months = CalendarHelper.generateMonths(calendarDate);
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
