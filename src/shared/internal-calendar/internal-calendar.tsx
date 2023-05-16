import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { CalendarHelper } from "../../util/calendar-helper";
import { InternalCalendarDay } from "./internal-calendar-day";
import { InternalCalendarMonth } from "./internal-calendar-month";
import { InternalCalendarYear } from "./internal-calendar-year";
import {
    ActionButton,
    ActionButtonSection,
    AnimatedDiv,
    ArrowLeft,
    ArrowRight,
    Container,
    ContentBody,
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
        onCalendarView,
        onSelect,
        onHover,
        onDismiss,
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
    const [isNewSelection, setIsNewSelection] = useState<boolean>(true);

    const doneButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const resizeDetector = useResizeDetector();

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
        /**
         * Update calendar value in month/year
         * Once focus value is changed
         */
        const calendarValue = currentFocus === "end" ? endValue : value;

        if (calendarValue) setCalendarDate(dayjs(calendarValue));
    }, [currentFocus]);

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

    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");

        setCalendarDate(value);
        handleSelectedType(stringValue);

        performOnSelectHandler(stringValue);
    };

    const handleCancelButton = () => {
        // close calendar and use 'confirmed' value if exist
        performOnDismissHandler("reset");
    };

    const handleDoneButton = (isDisabled: boolean) => {
        if (isDisabled) return;
        // close calendar and 'confirmed' the value
        performOnDismissHandler("confirmed");
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
            const targetValue =
                currentFocus === "start" || !currentFocus
                    ? selectedStartDate
                    : selectedEndDate;

            setCalendarDate(dayjs(targetValue));
            setCurrentView("month-options");
            performOnCalendarView("month-options");

            // Maintain focus when selecting month dropdown
            resizeDetector.ref.current.focus();
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
                    <InternalCalendarMonth
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
                    <InternalCalendarYear
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

    const renderActionButtons = () => {
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

    const renderContent = () => {
        return (
            <Container ref={resizeDetector.ref} tabIndex={-1} {...otherProps}>
                {type === "standalone" && (
                    <SideArrowButton
                        $direction="left"
                        onClick={handleLeftArrowClick}
                    >
                        <ArrowLeft />
                    </SideArrowButton>
                )}
                <ContentBody>
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
                            between={between}
                            isNewSelection={isNewSelection}
                            onSelect={handleDateSelect}
                            onHover={handleHover}
                        />
                        <OptionsOverlay $visible={currentView !== "default"}>
                            {renderOptionsOverlay()}
                        </OptionsOverlay>
                    </ToggleZone>
                    {renderActionButtons()}
                </ContentBody>
                {type === "standalone" && (
                    <SideArrowButton
                        $direction="right"
                        onClick={handleRightArrowClick}
                    >
                        <ArrowRight />
                    </SideArrowButton>
                )}
            </Container>
        );
    };

    // React spring animation configuration
    const styles = useSpring({
        height: isOpen
            ? resizeDetector.height + 64 // include vertical padding
            : 0,
    });

    if (type === "input") {
        return <AnimatedDiv style={styles}>{renderContent()}</AnimatedDiv>;
    } else {
        return <>{renderContent()}</>;
    }
};

export const InternalCalendar = React.forwardRef(Component);
