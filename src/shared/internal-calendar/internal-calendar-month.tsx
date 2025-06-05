import dayjs, { Dayjs } from "dayjs";
import { useEffect, useMemo, useRef, useState } from "react";
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
    selectedStartDate: string | undefined;
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
    const monthRefs = useRef<Array<HTMLDivElement | null>>(
        new Array(months.length).fill(null)
    );

    const [focusedMonthIndex, setFocusedMonthIndex] = useState<number | null>(
        months.findIndex((month) => month.isSame(viewCalendarDate, "month"))
    );
    useEffect(() => {
        // Focus the month cell that corresponds to the focused month
        if (focusedMonthIndex === null) return;

        monthRefs.current[focusedMonthIndex]?.focus();
    }, [focusedMonthIndex, months]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnBlur = () => {
        // Reset focused year when the component loses focus
        setFocusedMonthIndex(null);
    };

    const handleMonthClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onMonthSelect(value);
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLDivElement>,
        value: Dayjs,
        isDisabled: boolean
    ) => {
        const keyboardEvent = event as React.KeyboardEvent<HTMLInputElement>;
        const selectedKey = keyboardEvent.key;

        let newMonthSelection: number | undefined;
        const currentIndex = months.indexOf(value);
        switch (selectedKey) {
            case "Enter":
            case " ":
                event.preventDefault();
                handleMonthClick(value, isDisabled);
                break;
            case "ArrowLeft":
                newMonthSelection = currentIndex - 1;
                break;
            case "ArrowRight":
                newMonthSelection = currentIndex + 1;
                break;
            case "ArrowUp":
                newMonthSelection = currentIndex - 2;
                break;
            case "ArrowDown":
                newMonthSelection = currentIndex + 2;
                break;
            default:
                break;
        }

        if (
            newMonthSelection !== undefined &&
            newMonthSelection >= 0 &&
            newMonthSelection < months.length
        ) {
            event.preventDefault();
            setFocusedMonthIndex(newMonthSelection);
        }
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

        return !!(isStartAfterEnd || isEndBeforeStart);
    };

    const generateMonthStatus = (date: Dayjs) => {
        const month = date.format("MMMM");
        const disabled = isDisabled(date);
        const isSelectedMonth = viewCalendarDate.isSame(date, "month");

        const variant: MonthVariant = isSelectedMonth
            ? "selected-month"
            : dayjs().isSame(date, "month")
            ? "current-month"
            : "default";

        // Only selected month in tab order
        const tabIndex = viewCalendarDate.isSame(date, "year")
            ? isSelectedMonth
                ? 0
                : -1
            : date.month() === 0
            ? 0
            : -1;

        return {
            disabledDisplay: disabled || isOutsideSelectedRange(date),
            interactive: !disabled || allowDisabledSelection,
            month,
            variant,
            tabIndex,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!months.length) return null;

    return (
        <Wrapper onBlur={handleOnBlur}>
            {months.map((date, index) => {
                const {
                    disabledDisplay,
                    interactive,
                    variant,
                    month,
                    tabIndex,
                } = generateMonthStatus(date);

                return (
                    <MonthCell
                        ref={(el) => (monthRefs.current[index] = el)}
                        tabIndex={tabIndex}
                        role="button"
                        aria-disabled={!interactive}
                        aria-selected={variant === "selected-month"}
                        key={month}
                        $variant={variant}
                        $disabledDisplay={disabledDisplay}
                        $interactive={interactive}
                        onClick={() => handleMonthClick(date, !interactive)}
                        onKeyDown={(event) => {
                            handleKeyDown(event, date, !interactive);
                        }}
                    >
                        {month}
                    </MonthCell>
                );
            })}
        </Wrapper>
    );
};
