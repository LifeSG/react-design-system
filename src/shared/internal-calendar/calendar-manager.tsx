import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { CalendarHelper } from "../../util/calendar-helper";
import {
    ActionButton,
    ActionButtonSection,
    ArrowLeft,
    ArrowRight,
    Container,
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
        type,
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
        ...otherProps
    }: CalendarManagerProps,
    ref: React.ForwardedRef<CalendarManagerRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    // the current visible date in month/year views and header
    const [calendarDate, setCalendarDate] = useState<Dayjs>(
        dayjs(initialCalendarDate)
    );
    // the selected date in month/year views and the current visible date in day view
    const [viewCalendarDate, setViewCalendarDate] = useState<Dayjs>(
        dayjs(initialCalendarDate)
    );
    const [currentView, setCurrentView] = useState<View>("default");

    const doneButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useImperativeHandle(ref, () => {
        return {
            defaultView() {
                setCurrentView("default");
            },
            resetView() {
                const date = dayjs(initialCalendarDate);
                setCalendarDate(date);
                setViewCalendarDate(date);

                setCurrentView("default");
            },
            setCalendarDate(value?: string) {
                const date = value ? dayjs(value) : dayjs();
                setCalendarDate(date);
                setViewCalendarDate(date);
            },
        };
    });

    useEffect(() => {
        const date = initialCalendarDate ? dayjs(initialCalendarDate) : dayjs();
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
            containerRef.current.focus();
        } else {
            setCurrentView("default");
            setCalendarDate(viewCalendarDate);
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

    const handleLeftArrowClick = () => {
        // Maintain focus as button could become disabled
        containerRef.current.focus();

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
        containerRef.current.focus();

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
    };

    const handleCancelButton = () => {
        setCalendarDate(dayjs(initialCalendarDate));
        setViewCalendarDate(dayjs(initialCalendarDate));

        if (currentView === "default") {
            performOnDismissHandler("reset");
        } else {
            setCurrentView("default");
        }
    };

    const handleDoneButton = (isDisabled: boolean) => {
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
                : dayjs(calendarDate).format("YYYY");
        }
    };

    const renderDropdownButtons = () => {
        const monthLabel = getMonthHeaderLabel
            ? getMonthHeaderLabel(calendarDate)
            : dayjs(calendarDate).format("MMM");
        return (
            <>
                <DropdownButton
                    type="button"
                    tabIndex={-1}
                    $expanded={currentView === "month-options"}
                    $visible={currentView === "default"}
                    id="month-dropdown"
                    onClick={handleMonthDropdownClick}
                >
                    <DropdownText>{monthLabel}</DropdownText>
                    <IconChevronDown />
                </DropdownButton>
                <DropdownButton
                    type="button"
                    tabIndex={-1}
                    $expanded={currentView !== "default"}
                    id="year-dropdown"
                    onClick={handleYearDropdownClick}
                >
                    <DropdownText>{getYearHeaderText()}</DropdownText>
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
                        type={type}
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        minDate={minDate}
                        maxDate={maxDate}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        viewCalendarDate={viewCalendarDate}
                        isNewSelection={selectWithinRange}
                        onMonthSelect={handleMonthYearSelect}
                        allowDisabledSelection={allowDisabledSelection}
                    />
                );
            case "year-options":
                return (
                    <InternalCalendarYear
                        type={type}
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        minDate={minDate}
                        maxDate={maxDate}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        viewCalendarDate={viewCalendarDate}
                        isNewSelection={selectWithinRange}
                        onYearSelect={handleMonthYearSelect}
                        allowDisabledSelection={allowDisabledSelection}
                    />
                );
            default:
                return null;
        }
    };

    const renderHeader = () => {
        return (
            <Header data-id="calendar-header">
                <HeaderInputDropdown>
                    {renderDropdownButtons()}
                </HeaderInputDropdown>
                <HeaderArrows>
                    <HeaderArrowButton
                        data-testid="left-arrow-btn"
                        disabled={isLeftArrowDisabled()}
                        focusHighlight={false}
                        tabIndex={-1}
                        onClick={handleLeftArrowClick}
                    >
                        <ArrowLeft />
                    </HeaderArrowButton>
                    <HeaderArrowButton
                        data-testid="right-arrow-btn"
                        disabled={isRightArrowDisabled()}
                        focusHighlight={false}
                        tabIndex={-1}
                        onClick={handleRightArrowClick}
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
                ? children({ calendarDate: viewCalendarDate })
                : children;

        if (dynamicHeight) {
            return (
                <>
                    {currentView === "default" && defaultView}
                    {renderOptionsOverlay()}
                </>
            );
        } else {
            return (
                <>
                    {defaultView}
                    <OptionsOverlay $visible={currentView !== "default"}>
                        {renderOptionsOverlay()}
                    </OptionsOverlay>
                </>
            );
        }
    };

    return (
        <Container
            ref={containerRef}
            tabIndex={-1}
            data-id="calendar-container"
            {...otherProps}
        >
            {showNavigationHeader && renderHeader()}
            <ToggleZone>{renderViews()}</ToggleZone>
            {renderActionButtons()}
        </Container>
    );
};

export const CalendarManager = React.forwardRef(Component);
