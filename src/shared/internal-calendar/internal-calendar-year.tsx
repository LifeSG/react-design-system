import dayjs, { Dayjs } from "dayjs";
import { useEffect, useMemo, useRef, useState } from "react";
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
    setCalendarDate?: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
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
    setCalendarDate,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const years = useMemo<Dayjs[]>(
        () => CalendarHelper.generateDecadeOfYears(dayjs(calendarDate)),
        [calendarDate]
    );
    const yearRefs = useRef<Array<HTMLDivElement | null>>(
        new Array(years.length).fill(null)
    );
    const [focusedYear, setFocusedYear] = useState<Dayjs | null>();

    useEffect(() => {
        if (!years.length || focusedYear === null) return;
        // Focus the year cell that corresponds to the focused year
        const focusedYearIndex = years.findIndex((year) =>
            year.isSame(focusedYear, "year")
        );
        if (focusedYearIndex >= 0 && focusedYearIndex < years.length) {
            yearRefs.current[focusedYearIndex]?.focus();
        }
    }, [focusedYear, years]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnBlur = () => {
        // Reset focused year when the component loses focus
        setFocusedYear(null);
    };

    const handleYearClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onYearSelect(value);
    };

    const handleKeyDownPress = (
        event: React.KeyboardEvent<HTMLDivElement>,
        value: Dayjs,
        isDisabled: boolean
    ) => {
        const keyboardEvent = event as React.KeyboardEvent<HTMLInputElement>;
        const validKeys = [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Enter",
            " ",
        ];
        const selectedKey = keyboardEvent.key;
        const isValid = validKeys.includes(selectedKey);
        if (!isValid) {
            return;
        }

        event.preventDefault();

        let newYearSelection: Dayjs | undefined;
        switch (selectedKey) {
            case "Enter":
            case " ":
                handleYearClick(value, isDisabled);
                break;
            case "ArrowLeft":
                newYearSelection = value.subtract(1, "year");
                break;
            case "ArrowRight":
                newYearSelection = value.add(1, "year");
                break;
            case "ArrowUp":
                newYearSelection = value.subtract(3, "year");
                break;
            case "ArrowDown":
                newYearSelection = value.add(3, "year");
                break;
            default:
                break;
        }

        if (newYearSelection === undefined) return;

        if (setCalendarDate) {
            setCalendarDate(newYearSelection);
            setFocusedYear(newYearSelection);
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

        const tabIndex = yearIndex === 0 ? 0 : -1;

        return {
            disabledDisplay: disabled || isOutsideSelectedRange(date),
            interactive: !disabled || allowDisabledSelection,
            year,
            variant,
            tabIndex,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    if (!years.length) return null;

    return (
        <Wrapper onBlur={handleOnBlur}>
            {years.map((date, index) => {
                const {
                    disabledDisplay,
                    interactive,
                    variant,
                    year,
                    tabIndex,
                } = generateYearStatus(date);

                return (
                    <YearCell
                        ref={(el) => {
                            yearRefs.current[index] = el;
                        }}
                        tabIndex={tabIndex}
                        role="button"
                        aria-label={`${year}`}
                        aria-disabled={!interactive}
                        aria-selected={
                            variant === "selected-year" ? "true" : "false"
                        }
                        key={year}
                        $variant={variant}
                        $disabledDisplay={disabledDisplay}
                        $interactive={!!interactive}
                        onClick={() => handleYearClick(date, !interactive)}
                        onKeyDown={(event) => {
                            handleKeyDownPress(event, date, !interactive);
                        }}
                    >
                        {year}
                    </YearCell>
                );
            })}
        </Wrapper>
    );
};
