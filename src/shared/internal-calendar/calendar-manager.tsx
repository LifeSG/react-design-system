import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { DateHelper } from "../../util";
import { CalendarHelper } from "../../util/calendar-helper";
import { inertValue } from "../accessibility";
import {
    ActionButton,
    ActionButtonSection,
    ArrowLeft,
    ArrowRight,
    Container,
    DefaultView,
    DropdownButton,
    DropdownText,
    Header,
    HeaderArrowButton,
    HeaderArrows,
    HeaderInputDropdown,
    IconChevronDown,
    OptionsOverlay,
    ToggleZone,
} from "./calendar-manager.style";
import { InternalCalendarMonth } from "./internal-calendar-month";
import { InternalCalendarYear } from "./internal-calendar-year";
import {
    CalendarAction,
    CalendarManagerProps,
    CalendarManagerRef,
    View,
} from "./types";

const Component = (
    {
        children,
        initialCalendarDate,
        minDate,
        maxDate,
        currentFocus,
        selectedStartDate,
        selectedEndDate,
        selectWithinRange,
        dynamicHeight = false,
        allowDisabledSelection,
        onCalendarDateChange,
        /* action button props */
        withButton,
        doneButtonDisabled,
        onDismiss,
        /* header props */
        showNavigationHeader = true,
        getLeftArrowDate,
        getRightArrowDate,
        isLeftArrowDisabled: _isLeftArrowDisabled,
        isRightArrowDisabled: _isRightArrowDisabled,
        getMonthHeaderLabel,
        getYearHeaderLabel,
        isFocusable = false,
        ...otherProps
    }: CalendarManagerProps,
    ref: React.ForwardedRef<CalendarManagerRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    // the current visible date in month/year views and header
    const [calendarDate, setCalendarDate] = useState<Dayjs>(
        DateHelper.toDayjs(initialCalendarDate)
    );
    // the selected date in month/year views and the current visible date in day view
    const [viewCalendarDate, setViewCalendarDate] = useState<Dayjs>(
        DateHelper.toDayjs(initialCalendarDate)
    );
    const [currentView, setCurrentView] = useState<View>("default");

    const doneButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const yearDropdownRef = useRef<HTMLButtonElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useImperativeHandle(ref, () => {
        return {
            defaultView() {
                setCurrentView("default");
            },
            resetView() {
                const date = DateHelper.toDayjs(initialCalendarDate);
                setCalendarDate(date);
                setViewCalendarDate(date);

                setCurrentView("default");
            },
            setCalendarDate(value?: string) {
                const date = DateHelper.toDayjs(value);
                setCalendarDate(date);
                setViewCalendarDate(date);
            },
        };
    });

    useEffect(() => {
        const date = DateHelper.toDayjs(initialCalendarDate);
        setCalendarDate(date);
        setViewCalendarDate(date);
    }, [initialCalendarDate]);

    useEffect(() => {
        performOnCalendarDateChange(viewCalendarDate);
        // more accurate than calendarDate since it accounts for selection state
        // in month/year views
    }, [viewCalendarDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMonthDropdownClick = () => {
        if (currentView !== "month-options") {
            setCurrentView("month-options");

            // Maintain focus when selecting month dropdown
            containerRef.current?.focus();
        } else {
            setCurrentView("default");
            setCalendarDate(viewCalendarDate);
        }
    };

    const handleMonthDropdownKeydown = (
        event: React.KeyboardEvent<HTMLButtonElement>
    ) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleMonthDropdownClick();
            yearDropdownRef.current?.focus(); // Focus on year dropdown after month selection
        }

        // Up and Down arrow keys will change the month
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            const nextDate =
                event.key === "ArrowUp"
                    ? calendarDate.subtract(1, "month")
                    : calendarDate.add(1, "month");

            if (
                !CalendarHelper.isWithinRange(
                    nextDate,
                    minDate ? dayjs(minDate) : undefined,
                    maxDate ? dayjs(maxDate) : undefined,
                    "month"
                )
            )
                return;
            setCalendarDate(nextDate);

            if (currentView === "default") {
                setViewCalendarDate(nextDate);
            }
        }
    };

    const handleYearDropdownClick = () => {
        /**
         * If the view is in the month options view,
         * then clicking will send the view back to
         * default
         */
        if (currentView !== "default") {
            setCurrentView("default");
            setCalendarDate(viewCalendarDate);
        } else {
            setCurrentView("year-options");
        }
    };

    const handleYearDropdownKeydown = (
        event: React.KeyboardEvent<HTMLButtonElement>
    ) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleYearDropdownClick();
        }

        // Up and Down arrow keys will change the year
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            const isYearView = currentView === "year-options";
            let nextDate: Dayjs;

            if (isYearView) {
                // In year options view, change decade
                nextDate =
                    event.key === "ArrowUp"
                        ? calendarDate.subtract(10, "year")
                        : calendarDate.add(10, "year");
            } else {
                // In default view, change year
                nextDate =
                    event.key === "ArrowUp"
                        ? calendarDate.subtract(1, "year")
                        : calendarDate.add(1, "year");
            }

            if (
                !CalendarHelper.isWithinRange(
                    nextDate,
                    minDate ? dayjs(minDate) : undefined,
                    maxDate ? dayjs(maxDate) : undefined,
                    "year"
                )
            )
                return;

            setCalendarDate(nextDate);

            if (currentView === "default") {
                setViewCalendarDate(nextDate);
            }
        }
    };

    const handleLeftArrowClick = () => {
        // Maintain focus as button could become disabled
        containerRef.current?.focus();

        const nextDate = getLeftArrowDate
            ? getLeftArrowDate(calendarDate)
            : calendarDate.subtract(1, "month");

        switch (currentView) {
            case "default":
                setViewCalendarDate(nextDate);
                setCalendarDate(nextDate);
                break;
            case "month-options":
                setCalendarDate((date) => date.subtract(1, "year"));
                break;
            case "year-options":
                setCalendarDate((date) => date.subtract(10, "year"));
                break;
        }
    };

    const handleRightArrowClick = () => {
        // Maintain focus as button could become disabled
        containerRef.current?.focus();

        const nextDate = getRightArrowDate
            ? getRightArrowDate(calendarDate)
            : calendarDate.add(1, "month");

        switch (currentView) {
            case "default":
                setViewCalendarDate(nextDate);
                setCalendarDate(nextDate);
                break;
            case "month-options":
                setCalendarDate((date) => date.add(1, "year"));
                break;
            case "year-options":
                setCalendarDate((date) => date.add(10, "year"));
                break;
        }
    };

    const handleMonthYearSelect = (value: Dayjs) => {
        setCalendarDate(value);
        setViewCalendarDate(value);

        if (!withButton) {
            setCurrentView("default");
        }
    };

    const handleCancelButton = () => {
        const initialValue = DateHelper.toDayjs(initialCalendarDate);
        setCalendarDate(initialValue);
        setViewCalendarDate(initialValue);

        if (currentView === "default") {
            performOnDismissHandler("reset");
        } else {
            setCurrentView("default");
        }
    };

    const handleDoneButton = (isDisabled: boolean | undefined) => {
        if (isDisabled) return;

        setCalendarDate(viewCalendarDate);

        if (currentView === "default") {
            performOnDismissHandler("confirmed");
        } else {
            setCurrentView("default");
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnCalendarDateChange = (date: Dayjs) => {
        if (onCalendarDateChange) {
            onCalendarDateChange(date);
        }
    };

    const performOnDismissHandler = (action: CalendarAction) => {
        if (onDismiss) {
            onDismiss(action);
        }
    };

    const isLeftArrowDisabled = () => {
        if (!minDate || allowDisabledSelection) {
            return false;
        }

        const min = dayjs(minDate);
        if (currentView === "month-options") {
            return !CalendarHelper.isPreviousYearWithinRange(calendarDate, min);
        } else if (currentView === "year-options") {
            return !CalendarHelper.isPreviousDecadeWithinRange(
                calendarDate,
                min
            );
        } else {
            if (_isLeftArrowDisabled) {
                return _isLeftArrowDisabled(calendarDate);
            }
            return !CalendarHelper.isPreviousMonthWithinRange(
                calendarDate,
                min
            );
        }
    };

    const isRightArrowDisabled = () => {
        if (!maxDate || allowDisabledSelection) {
            return false;
        }

        const max = dayjs(maxDate);
        if (currentView === "month-options") {
            return !CalendarHelper.isNextYearWithinRange(calendarDate, max);
        } else if (currentView === "year-options") {
            return !CalendarHelper.isNextDecadeWithinRange(calendarDate, max);
        } else {
            if (_isRightArrowDisabled) {
                return _isRightArrowDisabled(calendarDate);
            }
            return !CalendarHelper.isNextMonthWithinRange(calendarDate, max);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const getYearHeaderText = (): string => {
        if (currentView === "year-options") {
            const { beginDecade, endDecade } =
                CalendarHelper.getStartEndDecade(calendarDate);

            return `${beginDecade} to ${endDecade}`;
        } else {
            return getYearHeaderLabel
                ? getYearHeaderLabel(calendarDate)
                : calendarDate.format("YYYY");
        }
    };

    const renderDropdownButtons = () => {
        const monthLabel = getMonthHeaderLabel
            ? getMonthHeaderLabel(calendarDate)
            : calendarDate.format("MMM");

        const fullMonthLabel = dayjs(monthLabel, "MMM").format("MMMM");

        const yearLabel = getYearHeaderText();
        const viewToYearLabel: Record<View, string> = {
            "month-options": `${yearLabel}, Close month selection`,
            "year-options": `${yearLabel}, Close year selection`,
            default: `${yearLabel}, Select year`,
        };

        return (
            <>
                <DropdownButton
                    aria-label={`${fullMonthLabel}, Select month`}
                    type="button"
                    $expanded={currentView === "month-options"}
                    $visible={currentView === "default"}
                    id="month-dropdown"
                    onClick={handleMonthDropdownClick}
                    onKeyDown={handleMonthDropdownKeydown}
                    tabIndex={isFocusable ? 0 : -1}
                >
                    <DropdownText>{monthLabel}</DropdownText>
                    <IconChevronDown />
                </DropdownButton>
                <DropdownButton
                    ref={yearDropdownRef}
                    aria-label={viewToYearLabel[currentView]}
                    type="button"
                    $expanded={currentView !== "default"}
                    id="year-dropdown"
                    onClick={handleYearDropdownClick}
                    onKeyDown={handleYearDropdownKeydown}
                    tabIndex={isFocusable ? 0 : -1}
                >
                    <DropdownText>{yearLabel}</DropdownText>
                    <IconChevronDown />
                </DropdownButton>
            </>
        );
    };

    const renderOptionsOverlay = () => {
        switch (currentView) {
            case "month-options":
                return (
                    <InternalCalendarMonth
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        minDate={minDate}
                        maxDate={maxDate}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        viewCalendarDate={viewCalendarDate}
                        isNewSelection={!!selectWithinRange}
                        onMonthSelect={handleMonthYearSelect}
                        allowDisabledSelection={allowDisabledSelection}
                    />
                );
            case "year-options":
                return (
                    <InternalCalendarYear
                        setCalendarDate={setCalendarDate}
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        minDate={minDate}
                        maxDate={maxDate}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        viewCalendarDate={viewCalendarDate}
                        isNewSelection={!!selectWithinRange}
                        onYearSelect={handleMonthYearSelect}
                        allowDisabledSelection={allowDisabledSelection}
                    />
                );
            default:
                return null;
        }
    };

    const renderHeader = () => {
        const viewToSelection: Record<View, string> = {
            "month-options": "year",
            "year-options": "decade",
            default: "month",
        };

        const selection = viewToSelection[currentView];

        return (
            <Header data-id="calendar-header" data-testid="calendar-header">
                <HeaderInputDropdown>
                    {renderDropdownButtons()}
                </HeaderInputDropdown>
                <HeaderArrows>
                    <HeaderArrowButton
                        aria-label={`Previous ${selection}`}
                        data-testid="left-arrow-btn"
                        disabled={isLeftArrowDisabled()}
                        focusHighlight={false}
                        focusOutline="browser"
                        onClick={handleLeftArrowClick}
                        tabIndex={isFocusable ? 0 : -1}
                    >
                        <ArrowLeft />
                    </HeaderArrowButton>
                    <HeaderArrowButton
                        aria-label={`Next ${selection}`}
                        data-testid="right-arrow-btn"
                        disabled={isRightArrowDisabled()}
                        focusHighlight={false}
                        focusOutline="browser"
                        onClick={handleRightArrowClick}
                        tabIndex={isFocusable ? 0 : -1}
                    >
                        <ArrowRight />
                    </HeaderArrowButton>
                </HeaderArrows>
            </Header>
        );
    };

    const renderActionButtons = () => {
        if (!withButton) return;

        const isDayView = currentView === "default";

        const disabled = !isDayView ? false : doneButtonDisabled;

        return (
            <ActionButtonSection>
                <ActionButton
                    ref={cancelButtonRef}
                    data-testid="cancel-button"
                    styleType="light"
                    type="button"
                    onClick={handleCancelButton}
                >
                    Cancel
                </ActionButton>
                <ActionButton
                    data-testid="done-button"
                    ref={doneButtonRef}
                    type="button"
                    onClick={() => handleDoneButton(disabled)}
                    disabled={disabled}
                >
                    Done
                </ActionButton>
            </ActionButtonSection>
        );
    };

    const renderViews = () => {
        const defaultView =
            typeof children === "function"
                ? children({ calendarDate: viewCalendarDate, currentView })
                : children;

        if (dynamicHeight) {
            return (
                <>
                    {currentView === "default" && defaultView}
                    {renderOptionsOverlay()}
                </>
            );
        } else {
            const isDefaultView = currentView === "default";
            return (
                // Prevent interaction with the default view when options are open
                <>
                    <DefaultView inert={inertValue(!isDefaultView)}>
                        {defaultView}
                    </DefaultView>
                    <OptionsOverlay $visible={!isDefaultView}>
                        {renderOptionsOverlay()}
                    </OptionsOverlay>
                </>
            );
        }
    };

    return (
        <Container
            ref={containerRef}
            data-id="calendar-container"
            data-testid="calendar-container"
            aria-label={viewCalendarDate.format("MMMM, YYYY")}
            role="group"
            {...otherProps}
        >
            {showNavigationHeader && renderHeader()}
            <ToggleZone>{renderViews()}</ToggleZone>
            {renderActionButtons()}
        </Container>
    );
};

export const CalendarManager = React.forwardRef(Component);
