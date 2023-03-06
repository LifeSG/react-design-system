import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
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
import { CalendarAction, CalendarProps } from "./types";

export type View = "default" | "month-options" | "year-options";

export const Calendar = ({
    disabledDates,
    onSelect,
    onHover,
    onWithButton,
    isOpen,
    value,
    endValue,
    currentFocus,
    withButton,
    type = "standalone",
    ...otherProps
}: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [currentView, setCurrentView] = useState<View>("default");
    const [selectedStartDate, setSelectedStartDate] = useState<string>(""); // YYYY-MM-DD
    const [selectedEndDate, setSelectedEndDate] = useState<string>(""); // YYYY-MM-DD

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isOpen || !value.length || !endValue.length) return;

        const initCalendar = currentFocus === "end" ? endValue : value;

        setCalendarDate(dayjs(initCalendar));
    }, [isOpen]);

    useEffect(() => {
        if (!value) {
            setSelectedStartDate("");
            return;
        }

        setSelectedStartDate(value);
    }, [value]);

    useEffect(() => {
        if (!endValue) {
            setSelectedEndDate("");
            return;
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
        // close calendar and use confirm value if exist
        performOnWithButtonHandler("reset");
    };

    const handleDoneButton = () => {
        // close calendar and confirm the value
        performOnWithButtonHandler("confirmed");
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
                currentFocus === "start" || !currentFocus ? value : endValue;

            /**
             * Buggy here if swap to next the value didn't render to the focus type
             */

            setCalendarDate(dayjs(targetValue));
            setCurrentView("month-options");
        } else {
            setCurrentView("default");
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
        } else {
            const targetValue =
                currentFocus === "start" || !currentFocus ? value : endValue;

            setCalendarDate(dayjs(targetValue));
            setCurrentView("year-options");
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
        /**
         * apply selectedStartDate if currentFocus undefined
         * apply selectedEndDate if currentFocus 'end'
         * apply selectedStartDate if currentFocus is not undefined or 'end'
         */
        const selectedDate = !currentFocus
            ? selectedStartDate
            : currentFocus === "end"
            ? selectedEndDate
            : selectedStartDate;

        switch (currentView) {
            case "month-options":
                return (
                    <CalendarMonth
                        type={type}
                        calendarDate={dayjs(selectedDate)}
                        selectedDate={selectedDate}
                        onSelect={handleDateSelect}
                    />
                );
            case "year-options":
                return (
                    <CalendarYear
                        type={type}
                        calendarDate={dayjs(selectedDate)}
                        selectedDate={selectedDate}
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

        return (
            <ActionButtonSection>
                <CancelButton onClick={handleCancelButton}>Cancel</CancelButton>
                <DoneButton onClick={handleDoneButton}>Done</DoneButton>
            </ActionButtonSection>
        );
    };

    // handle the animation transition
    if (type === "input" && !isOpen)
        return <Container $type={type} tabIndex={-1} />;

    return (
        <Container $type={type} $isOpen={isOpen} {...otherProps}>
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
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
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
