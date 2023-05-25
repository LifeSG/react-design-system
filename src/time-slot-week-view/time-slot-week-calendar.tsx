import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { CalendarRef, View } from "../shared/internal-calendar";
import { InternalCalendarMonth } from "../shared/internal-calendar/internal-calendar-month";
import { InternalCalendarYear } from "../shared/internal-calendar/internal-calendar-year";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    ContentBody,
    DropdownButton,
    DropdownText,
    HeaderArrowButton,
    HeaderArrows,
    HeaderInputDropdown,
    IconChevronDown,
    ToggleZone,
} from "../shared/internal-calendar/internal-calendar.style";
import { TimeSlot } from "../time-slot-bar";
import { CalendarHelper } from "../util/calendar-helper";
import { TimeSlotWeekDays } from "./time-slot-week-days";
import { Header } from "./time-slot-week.styles";
import { TimeSlotWeekCalendarProps } from "./types";

export const Component = (
    {
        disabledDates,
        onYearMonthDisplayChange,
        onCalendarView,
        onSelect,
        value,
        variant,
        between,
        slots,
        showNavigationHeader = true,
        enableSelection,
        onSlotClick,
        currentCalendarDate,
        type = "weekly",
        ...otherProps
    }: TimeSlotWeekCalendarProps,
    ref: React.ForwardedRef<CalendarRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [currentView, setCurrentView] = useState<View>("default");
    const [selectedDate, setSelectedDate] = useState<string>(); // YYYY-MM-DD
    const [viewCalendarDate, setViewCalendarDate] = useState<Dayjs>();
    // =============================================================================
    // HOOKS
    // =============================================================================
    const resizeDetector = useResizeDetector();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (currentCalendarDate) {
            setCalendarDate(dayjs(currentCalendarDate));
            setViewCalendarDate(dayjs(currentCalendarDate));
        } else {
            setCalendarDate(dayjs());
            setViewCalendarDate(dayjs());
        }
    }, []);

    useEffect(() => {
        if (!value) {
            setSelectedDate(undefined);
            return;
        }
        setSelectedDate(value);
        setCalendarDate(dayjs(value));
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLeftArrowClick = () => {
        switch (currentView) {
            case "default":
                setViewCalendarDate((date) => date.subtract(1, "week"));
                setCalendarDate((date) => {
                    const prevMonth = date.subtract(1, "week");
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
                setViewCalendarDate((date) => date.add(1, "week"));
                setCalendarDate((date) => {
                    const nextMonth = date.add(1, "week");
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

    const handleOnSlotClick = (slot: TimeSlot) => {
        if (onSlotClick) {
            onSlotClick(slot);
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

    const performOnCalendarDate = (value: Dayjs) => {
        if (onYearMonthDisplayChange) {
            const returnValue = {
                month: value.month() + 1,
                year: value.year(),
            };

            onYearMonthDisplayChange(returnValue);
        }
    };

    const handleSelectedType = (value: string) => {
        setSelectedDate(value);

        return;
    };

    const handleMonthDropdownClick = () => {
        if (currentView !== "month-options") {
            setCurrentView("month-options");
            performOnCalendarView("month-options");

            // Maintain focus when selecting month dropdown
            resizeDetector.ref.current.focus();
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
            return dayjs(calendarDate).endOf("week").format("YYYY");
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
                    style={{ marginRight: 0 }}
                >
                    <DropdownText $type={type}>
                        {dayjs(calendarDate).endOf("week").format("MMM")}
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
                        selectedStartDate={selectedDate}
                        viewCalendarDate={viewCalendarDate}
                        between={between}
                        isNewSelection={true}
                        onMonthSelect={handleMonthYearSelect}
                    />
                );
            case "year-options":
                return (
                    <InternalCalendarYear
                        type={type}
                        calendarDate={calendarDate}
                        selectedStartDate={selectedDate}
                        viewCalendarDate={viewCalendarDate}
                        between={between}
                        isNewSelection={true}
                        onYearSelect={handleMonthYearSelect}
                    />
                );
            default:
                return null;
        }
    };

    const renderHeader = () => {
        const disableLeftArrow =
            type === "weekly" &&
            between &&
            between.length > 0 &&
            dayjs(calendarDate).startOf("week") < dayjs(between[0]);
        const disableRightArrow =
            type === "weekly" &&
            between &&
            between.length > 1 &&
            dayjs(calendarDate).endOf("week") > dayjs(between[1]);
        return (
            showNavigationHeader && (
                <Header>
                    <HeaderInputDropdown>
                        {renderDropdownButtons()}
                    </HeaderInputDropdown>
                    <HeaderArrows>
                        <HeaderArrowButton
                            disabled={disableLeftArrow}
                            tabIndex={-1}
                            onClick={handleLeftArrowClick}
                        >
                            <ArrowLeft />
                        </HeaderArrowButton>
                        <HeaderArrowButton
                            disabled={disableRightArrow}
                            tabIndex={-1}
                            onClick={handleRightArrowClick}
                        >
                            <ArrowRight />
                        </HeaderArrowButton>
                    </HeaderArrows>
                </Header>
            )
        );
    };

    const renderContent = () => {
        return (
            <Container
                ref={resizeDetector.ref}
                tabIndex={-1}
                data-id="calendar-container"
                $type={type}
                {...otherProps}
            >
                <ContentBody>
                    {renderHeader()}
                    <ToggleZone>
                        {currentView === "default" && (
                            <TimeSlotWeekDays
                                type={type}
                                calendarDate={calendarDate}
                                disabledDates={disabledDates}
                                selectedDate={selectedDate}
                                variant={variant}
                                between={between}
                                isNewSelection={true}
                                onSelect={handleDateSelect}
                                slots={slots}
                                enableSelection={enableSelection}
                                onSlotClick={handleOnSlotClick}
                            />
                        )}
                        {renderOptionsOverlay()}
                    </ToggleZone>
                </ContentBody>
            </Container>
        );
    };

    return <>{renderContent()}</>;
};

export const TimeSlotWeekCalendar = React.forwardRef(Component);
