import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { Text } from "../text";
import { CalendarHelper } from "../util/calendar-helper";
import { CalendarDay } from "./calendar-day";
import { CalendarMonth } from "./calendar-month";
import { CalendarYear } from "./calendar-year";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    ContentBody,
    DropdownButton,
    HeaderDropdown,
    IconChevronDown,
    OptionsOverlay,
    SideArrowButton,
    ToggleZone,
} from "./calendar.style";
import { CalendarProps } from "./types";

export type View = "default" | "month-options" | "year-options";

export const Calendar = ({
    disabledDates,
    onSelect,
    value,
    type = "standalone",
    ...otherProps
}: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [currentView, setCurrentView] = useState<View>("default");
    const [selectedStartDate, setSelectedStartDate] = useState<string>(""); // YYYY-MM-DD

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!value) return;

        setSelectedStartDate(value);
    }, [value]);

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

        setSelectedStartDate(stringValue);

        performOnSelectHandler(stringValue);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const performOnSelectHandler = (changeValue: string) => {
        if (onSelect) {
            onSelect(changeValue);
        }
    };

    const handleMonthDropdownClick = () => {
        if (currentView !== "month-options") {
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
    const renderOptionsOverlay = () => {
        switch (currentView) {
            case "month-options":
                return (
                    <CalendarMonth
                        calendarDate={calendarDate}
                        selectedStartDate={selectedStartDate}
                        onSelect={handleDateSelect}
                    />
                );
            case "year-options":
                return (
                    <CalendarYear
                        calendarDate={calendarDate}
                        selectedStartDate={selectedStartDate}
                        onSelect={handleDateSelect}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Container $type={type} {...otherProps}>
            <SideArrowButton $direction="left" onClick={handleLeftArrowClick}>
                <ArrowLeft />
            </SideArrowButton>
            <ContentBody>
                <HeaderDropdown>
                    <DropdownButton
                        type="button"
                        $expandedDisplay={currentView === "month-options"}
                        $visible={currentView === "default"}
                        id="month-dropdown"
                        onClick={handleMonthDropdownClick}
                    >
                        <Text.H4 weight="regular">
                            {dayjs(calendarDate).format("MMM")}
                        </Text.H4>
                        <IconChevronDown />
                    </DropdownButton>
                    <DropdownButton
                        type="button"
                        $expandedDisplay={currentView !== "default"}
                        id="year-dropdown"
                        onClick={handleYearDropdownClick}
                    >
                        <Text.H4 weight="regular">
                            {getYearHeaderText()}
                        </Text.H4>
                        <IconChevronDown />
                    </DropdownButton>
                </HeaderDropdown>
                <ToggleZone>
                    <CalendarDay
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        onSelect={handleDateSelect}
                    />
                    <OptionsOverlay $visible={currentView !== "default"}>
                        {renderOptionsOverlay()}
                    </OptionsOverlay>
                </ToggleZone>
            </ContentBody>
            <SideArrowButton $direction="right" onClick={handleRightArrowClick}>
                <ArrowRight />
            </SideArrowButton>
        </Container>
    );
};
