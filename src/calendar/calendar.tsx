import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    ContentBody,
    DayView,
    DropdownButton,
    // DropdownMonth,
    // DropdownYear,
    HeaderDropdown,
    IconChevronDown,
    MonthView,
    SideArrowButton,
    TopArrowButton,
    Views,
    YearView,
} from "./calendar.style";
import { CalendarDay } from "./calendar-day";
import { CalendarMonth } from "./calendar-month";
import { CalendarProps } from "./types";
import { CalendarYear } from "./calendar-year";
import { CalendarHelper } from "../util/calendar-helper";
import { Text } from "../text";

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

    const toggleMonthView = () => {
        if (currentView !== "month-options") {
            setCurrentView("month-options");
        } else {
            setCurrentView("default");
        }
    };

    const toggleYearView = () => {
        if (currentView !== "year-options") {
            setCurrentView("year-options");
        } else {
            setCurrentView("default");
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
    const renderCalendarContent = () => {
        switch (currentView) {
            case "month-options":
                return null;
            case "year-options":
                return null;
            default:
                return (
                    <CalendarDay
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        onSelect={handleDateSelect}
                    />
                );
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
                        id="month-dropdown"
                        onClick={toggleMonthView}
                    >
                        <Text.H4 weight="regular">
                            {dayjs(calendarDate).format("MMM")}
                        </Text.H4>
                        <IconChevronDown />
                    </DropdownButton>
                    <DropdownButton
                        type="button"
                        $expandedDisplay={currentView === "year-options"}
                        id="year-dropdown"
                        onClick={toggleYearView}
                    >
                        <Text.H4 weight="regular">
                            {getYearHeaderText()}
                        </Text.H4>
                        <IconChevronDown />
                    </DropdownButton>
                </HeaderDropdown>
                {renderCalendarContent()}
            </ContentBody>
            {/* <HeaderDropdown $view={currentView}>
                <DropdownMonth onClick={toggleMonthView}>
                    <Text.H4 weight="regular">
                        {dayjs(calendarDate).format("MMM")}
                    </Text.H4>
                    <TopArrowButton>
                        <IconChevronDown />
                    </TopArrowButton>
                </DropdownMonth>
                <DropdownYear onClick={toggleYearView}>
                    {renderYearHeader()}
                    <TopArrowButton>
                        <IconChevronDown />
                    </TopArrowButton>
                </DropdownYear>
            </HeaderDropdown> */}
            {/* <ContentBody>
                <SideArrowButton
                    $direction="left"
                    onClick={handleLeftArrowClick}
                >
                    <ArrowLeft />
                </SideArrowButton>
                <Views $view={currentView}>
                    <DayView>
                        <CalendarDay
                            calendarDate={calendarDate}
                            disabledDates={disabledDates}
                            selectedStartDate={selectedStartDate}
                            onSelect={handleDateSelect}
                        />
                    </DayView>
                    <MonthView>
                        <CalendarMonth
                            calendarDate={calendarDate}
                            currentView={currentView}
                            selectedStartDate={selectedStartDate}
                            onSelect={handleDateSelect}
                        />
                    </MonthView>
                    <YearView>
                        <CalendarYear
                            calendarDate={calendarDate}
                            currentView={currentView}
                            selectedStartDate={selectedStartDate}
                            onSelect={handleDateSelect}
                        />
                    </YearView>
                </Views>
                
            </ContentBody> */}
            <SideArrowButton $direction="right" onClick={handleRightArrowClick}>
                <ArrowRight />
            </SideArrowButton>
        </Container>
    );
};
