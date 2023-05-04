import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { CalendarHelper } from "../util/calendar-helper";
import { CalendarDay } from "./calendar-day";
import { CalendarMonth } from "./calendar-month";
import { CalendarYear } from "./calendar-year";
import {
    ActionButtonSection,
    ArrowLeft,
    ArrowRight,
    CancelButton,
    Container,
    ContentBody,
    DoneButton,
    DropdownButton,
    DropdownText,
    Header,
    HeaderArrowButton,
    HeaderArrows,
    HeaderDropdown,
    HeaderInputDropdown,
    IconChevronDown,
    OptionsOverlay,
    SideArrowButton,
    ToggleZone,
} from "./calendar.style";
import { CalendarAction, CalendarProps, CalendarRef, View } from "./types";

export const Component = (
    {
        disabledDates,
        onCalendarView,
        onSelect,
        onHover,
        onWithButton,
        actionComponent,
        isOpen,
        value,
        endValue,
        currentFocus,
        currentType,
        withButton,
        variant,
        between,
        type = "standalone",
        ...otherProps
    }: CalendarProps,
    ref: React.ForwardedRef<CalendarRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [currentView, setCurrentView] = useState<View>("default");
    const [selectedStartDate, setSelectedStartDate] = useState<string>(); // YYYY-MM-DD
    const [selectedEndDate, setSelectedEndDate] = useState<string>(); // YYYY-MM-DD
    const [isNewSelection, setIsNewSelection] = useState<boolean>(true);

    const doneButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);

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
            };
        },
        []
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        // open with 'confirmed' value for day calendar in first mounted
        if (!isOpen) return;

        const initCalendar = currentFocus === "end" ? endValue : value;

        setCalendarDate(dayjs(initCalendar));
        setCurrentView("default");

        if (variant === "range" && value?.length && endValue?.length) {
            setIsNewSelection(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!currentType) return;

        // go back selected day calendar
        handleSelectedDayView();
    }, [currentType]);

    useEffect(() => {
        setIsNewSelection(true);

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
        setIsNewSelection(true);

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
                setCalendarDate((date) => date.subtract(1, "month"));
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
                setCalendarDate((date) => date.add(1, "month"));
                break;
            case "month-options":
                setCalendarDate((date) => date.add(1, "year"));
                break;
            case "year-options":
                setCalendarDate((date) => date.add(10, "year"));
                break;
        }
    };

    function handleKeyDown(
        event: React.KeyboardEvent<HTMLButtonElement>,
        isDoneDisabled: boolean
    ) {
        const target = event.target as HTMLButtonElement;

        if (
            cancelButtonRef.current.contains(target) &&
            event.code === "Tab" &&
            isDoneDisabled
        ) {
            // 'Tab' away from cancel button if done button is disabled
            performOnWithButtonHandler("reset");
        } else if (
            doneButtonRef.current.contains(target) &&
            event.code === "Tab" &&
            !isDoneDisabled
        ) {
            // 'Tab' away from done button if done button is active
            performOnWithButtonHandler("reset");
        }
    }

    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");

        setCalendarDate(value);
        handleSelectedType(stringValue);

        performOnSelectHandler(stringValue);
    };

    const handleCancelButton = () => {
        // close calendar and use 'confirmed' value if exist
        performOnWithButtonHandler("reset");
    };

    const handleDoneButton = (isDisabled: boolean) => {
        if (isDisabled) return;
        // close calendar and 'confirmed' the value
        performOnWithButtonHandler("confirmed");
    };

    const handleHover = (value: string) => {
        performOnHoverHandler(value);
    };

    const handleSelectedDayView = () => {
        if (currentType !== "restore") return;

        switch (currentFocus) {
            case "start":
                setCalendarDate(dayjs(value));
                break;
            case "end":
                setCalendarDate(dayjs(endValue));
                break;
        }
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

    const performOnWithButtonHandler = (action: CalendarAction) => {
        if (onWithButton) {
            onWithButton(action);
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
            const targetValue =
                currentFocus === "start" || !currentFocus
                    ? selectedStartDate
                    : selectedEndDate;

            /**
             * Buggy here if swap to next the value didn't render to the focus type
             */
            setCalendarDate(dayjs(targetValue));
            setCurrentView("month-options");
            performOnCalendarView("month-options");
        } else {
            setCurrentView("default");
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
            performOnCalendarView("default");
        } else {
            const targetValue =
                currentFocus === "start" || !currentFocus
                    ? selectedStartDate
                    : selectedEndDate;

            setCalendarDate(dayjs(targetValue));
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
                    <CalendarMonth
                        type={type}
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        between={between}
                        isNewSelection={isNewSelection}
                        onSelect={handleDateSelect}
                    />
                );
            case "year-options":
                return (
                    <CalendarYear
                        type={type}
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        between={between}
                        isNewSelection={isNewSelection}
                        onSelect={handleDateSelect}
                    />
                );
            default:
                return null;
        }
    };

    const renderHeader = () => {
        switch (type) {
            case "standalone":
                return (
                    <HeaderDropdown>{renderDropdownButtons()}</HeaderDropdown>
                );
            case "input":
                return (
                    <Header>
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
            default:
                return (
                    <HeaderDropdown>{renderDropdownButtons()}</HeaderDropdown>
                );
        }
    };

    const renderCancelDoneButton = () => {
        if (type === "standalone" || !withButton) return;

        let isDisabled = true;
        const isDayView = ["default"].includes(currentView);

        switch (variant) {
            case "single":
                isDisabled = selectedStartDate ? false : true;
                break;
            case "range":
                isDisabled = !selectedStartDate || !selectedEndDate;
                break;
        }

        const disabled = !isDayView ? false : isDisabled;

        return (
            <ActionButtonSection>
                <CancelButton
                    styleType="light"
                    ref={cancelButtonRef}
                    onClick={handleCancelButton}
                    onKeyDown={(event) => handleKeyDown(event, disabled)}
                >
                    Cancel
                </CancelButton>
                <DoneButton
                    ref={doneButtonRef}
                    onClick={() => handleDoneButton(disabled)}
                    onKeyDown={(event) => handleKeyDown(event, disabled)}
                    disabled={disabled}
                >
                    Done
                </DoneButton>
            </ActionButtonSection>
        );
    };

    // handle the animation transition
    if (type === "input" && !isOpen)
        return <Container $type={type} tabIndex={-1} />;

    return (
        <Container $type={type} $isOpen={isOpen} {...otherProps} tabIndex={-1}>
            <SideArrowButton
                $direction="left"
                $type={type}
                onClick={handleLeftArrowClick}
            >
                <ArrowLeft />
            </SideArrowButton>
            <ContentBody>
                {renderHeader()}
                <ToggleZone>
                    <CalendarDay
                        type={type}
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        variant={variant}
                        between={between}
                        isNewSelection={isNewSelection}
                        onSelect={handleDateSelect}
                        onHover={handleHover}
                    />
                    <OptionsOverlay $visible={currentView !== "default"}>
                        {renderOptionsOverlay()}
                    </OptionsOverlay>
                </ToggleZone>
                {renderCancelDoneButton()}
            </ContentBody>
            <SideArrowButton
                $direction="right"
                $type={type}
                onClick={handleRightArrowClick}
            >
                <ArrowRight />
            </SideArrowButton>
        </Container>
    );
};

export const Calendar = React.forwardRef(Component);
