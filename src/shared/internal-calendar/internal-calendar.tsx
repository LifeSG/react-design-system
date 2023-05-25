import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { CalendarHelper } from "../../util/calendar-helper";
import { InternalCalendarDay } from "./internal-calendar-day";
import { InternalCalendarMonth } from "./internal-calendar-month";
import { InternalCalendarYear } from "./internal-calendar-year";
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
} from "./internal-calendar.style";
import {
    CalendarAction,
    CalendarRef,
    InternalCalendarProps,
    View,
} from "./types";

export const Component = (
    {
        disabledDates,
        onYearMonthDisplayChange,
        onCalendarView,
        onSelect,
        onHover,
        onDismiss,
        actionComponent,
        value,
        endValue,
        currentFocus,
        withButton,
        variant,
        minDate,
        maxDate,
        type = "standalone",
        selectWithinRange = true,
        ...otherProps
    }: InternalCalendarProps,
    ref: React.ForwardedRef<CalendarRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [currentView, setCurrentView] = useState<View>("default");
    const [selectedStartDate, setSelectedStartDate] = useState<string>(); // YYYY-MM-DD
    const [selectedEndDate, setSelectedEndDate] = useState<string>(); // YYYY-MM-DD
    const [viewCalendarDate, setViewCalendarDate] = useState<Dayjs>(dayjs());

    const doneButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // HOOKS
    // =============================================================================
    useImperativeHandle(
        ref,
        () => {
            return {
                defaultView() {
                    setCurrentView("default");
                    onCalendarView("default");
                },
                resetView() {
                    setCalendarDate(dayjs());
                    setCurrentView("default");
                },
            };
        },
        []
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        /**
         * Update calendar value in month/year
         * Once focus value is changed
         */
        const calendarValue = currentFocus === "end" ? endValue : value;
        const day = calendarValue ? dayjs(calendarValue) : dayjs();

        setCalendarDate(day);
        setViewCalendarDate(day);
    }, [currentFocus]);

    useEffect(() => {
        if (!value) {
            setSelectedStartDate(undefined);
            return;
        }

        if (actionComponent === "input") {
            setCalendarDate(dayjs(value));
        }

        setSelectedStartDate(value);
        setCalendarDate(dayjs(value));
    }, [value]);

    useEffect(() => {
        if (!endValue) {
            setSelectedEndDate(undefined);
            return;
        }

        if (actionComponent === "input") {
            setCalendarDate(dayjs(endValue));
        }

        setSelectedEndDate(endValue);
    }, [endValue]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLeftArrowClick = () => {
        switch (currentView) {
            case "default":
                setViewCalendarDate((date) => date.subtract(1, "month"));
                setCalendarDate((date) => {
                    const prevMonth = date.subtract(1, "month");
                    performOnCalendarDate(prevMonth);

                    return prevMonth;
                });
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
        switch (currentView) {
            case "default":
                setViewCalendarDate((date) => date.add(1, "month"));
                setCalendarDate((date) => {
                    const nextMonth = date.add(1, "month");
                    performOnCalendarDate(nextMonth);

                    return nextMonth;
                });
                break;
            case "month-options":
                setCalendarDate((date) => date.add(1, "year"));
                break;
            case "year-options":
                setCalendarDate((date) => date.add(10, "year"));
                break;
        }
    };

    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");

        setCalendarDate(value);
        setViewCalendarDate(value);
        handleSelectedType(stringValue);

        performOnSelectHandler(stringValue);
    };

    const handleMonthYearSelect = (value: Dayjs) => {
        setCalendarDate(value);
        setViewCalendarDate(value);

        performOnCalendarDate(value);
    };

    const handleCancelButton = () => {
        const calendarValue = currentFocus === "end" ? endValue : value;

        setCalendarDate(dayjs(calendarValue));

        if (currentView === "default") {
            performOnDismissHandler("reset");
        } else {
            setCurrentView("default");
        }
    };

    const handleDoneButton = (isDisabled: boolean) => {
        if (isDisabled) return;
        setCalendarDate(viewCalendarDate);

        // close calendar and 'confirmed' the value
        if (currentView === "default") {
            performOnDismissHandler("confirmed");
        } else {
            setCurrentView("default");
        }
    };

    const handleHover = (value: string) => {
        performOnHoverHandler(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnSelectHandler = (changeValue: string) => {
        if (onSelect) {
            onSelect(changeValue);
        }
    };

    const performOnHoverHandler = (value: string) => {
        if (onHover) {
            onHover(value);
        }
    };

    const performOnCalendarDate = (value: Dayjs) => {
        if (onYearMonthDisplayChange) {
            const returnValue = {
                month: value.month() + 1,
                year: value.year(),
            };

            onYearMonthDisplayChange(returnValue);
        }
    };

    const performOnDismissHandler = (action: CalendarAction) => {
        if (onDismiss) {
            onDismiss(action);
        }
    };

    const handleSelectedType = (value: string) => {
        if (!currentFocus) {
            // standalone calendar
            setSelectedStartDate(value);

            return;
        }

        switch (currentFocus) {
            case "start":
                setSelectedStartDate(value);
                break;
            case "end":
                setSelectedEndDate(value);
                break;
            default:
                setSelectedStartDate(value);
        }
    };

    const handleMonthDropdownClick = () => {
        if (currentView !== "month-options") {
            setCurrentView("month-options");
            performOnCalendarView("month-options");

            // Maintain focus when selecting month dropdown
            containerRef.current.focus();
        } else {
            setCurrentView("default");
            setCalendarDate(viewCalendarDate);
            performOnCalendarView("default");
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
            performOnCalendarView("default");
        } else {
            setCurrentView("year-options");
            performOnCalendarView("year-options");
        }
    };

    const getYearHeaderText = (): string => {
        if (currentView === "year-options") {
            const { beginDecade, endDecade } =
                CalendarHelper.getStartEndDecade(calendarDate);

            return `${beginDecade} to ${endDecade}`;
        } else {
            return dayjs(calendarDate).format("YYYY");
        }
    };

    const performOnCalendarView = (view: View) => {
        if (onCalendarView) {
            onCalendarView(view);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDropdownButtons = () => {
        return (
            <>
                <DropdownButton
                    type="button"
                    tabIndex={-1}
                    $type={type}
                    $expandedDisplay={currentView === "month-options"}
                    $visible={currentView === "default"}
                    id="month-dropdown"
                    onClick={handleMonthDropdownClick}
                >
                    <DropdownText $type={type}>
                        {dayjs(calendarDate).format("MMM")}
                    </DropdownText>
                    <IconChevronDown />
                </DropdownButton>
                <DropdownButton
                    type="button"
                    tabIndex={-1}
                    $type={type}
                    $expandedDisplay={currentView !== "default"}
                    id="year-dropdown"
                    onClick={handleYearDropdownClick}
                >
                    <DropdownText $type={type}>
                        {getYearHeaderText()}
                    </DropdownText>
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
                    />
                );
            default:
                return null;
        }
    };

    const renderHeader = () => {
        return (
            <Header $type={type}>
                <HeaderInputDropdown>
                    {renderDropdownButtons()}
                </HeaderInputDropdown>
                <HeaderArrows>
                    <HeaderArrowButton
                        tabIndex={-1}
                        onClick={handleLeftArrowClick}
                    >
                        <ArrowLeft />
                    </HeaderArrowButton>
                    <HeaderArrowButton
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
        if (type === "standalone" || !withButton) return;

        let isDisabled = true;
        const isDayView = ["default"].includes(currentView);

        switch (variant) {
            case "single":
                isDisabled = false;
                break;
            case "range":
                // ensure both are empty or complete at the same time
                isDisabled = !!selectedStartDate !== !!selectedEndDate;
                break;
        }

        const disabled = !isDayView ? false : isDisabled;

        return (
            <ActionButtonSection>
                <ActionButton
                    ref={cancelButtonRef}
                    data-testid="cancel-button"
                    styleType="light"
                    onClick={handleCancelButton}
                >
                    Cancel
                </ActionButton>
                <ActionButton
                    data-testid="done-button"
                    ref={doneButtonRef}
                    onClick={() => handleDoneButton(disabled)}
                    disabled={disabled}
                >
                    Done
                </ActionButton>
            </ActionButtonSection>
        );
    };

    return (
        <Container
            ref={containerRef}
            tabIndex={-1}
            data-id="calendar-container"
            $type={type}
            {...otherProps}
        >
            {renderHeader()}
            <ToggleZone>
                <InternalCalendarDay
                    type={type}
                    calendarDate={calendarDate}
                    currentFocus={currentFocus}
                    disabledDates={disabledDates}
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    variant={variant}
                    minDate={minDate}
                    maxDate={maxDate}
                    isNewSelection={selectWithinRange}
                    onSelect={handleDateSelect}
                    onHover={handleHover}
                />
                <OptionsOverlay $visible={currentView !== "default"}>
                    {renderOptionsOverlay()}
                </OptionsOverlay>
            </ToggleZone>
            {renderActionButtons()}
        </Container>
    );
};

export const InternalCalendar = React.forwardRef(Component);
