import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    ContentBody,
    DayView,
    DropdownMonth,
    DropdownYear,
    HeaderDropdown,
    IconChevronDown,
    MonthView,
    Views,
    YearView,
} from "./calendar.style";
import { CalendarDay } from "./calendar-day";
import { CalendarMonth } from "./calendar-month";
import { CalendarProps } from "./types";
import { CalendarYear } from "./calendar-year";
import { CalendarHelper } from "../util/calendar-helper";
import { Text } from "../text";

export type View = "day" | "month" | "year";

export const Calendar = ({
    disabledDates,
    onChange,
    value,
    type = "calendar",
}: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [currentView, setCurrentView] = useState<View>("day");
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
            case "day":
                setCalendarDate((date) => date.subtract(1, "month"));
                break;
            case "month":
                setCalendarDate((date) => date.subtract(1, "year"));
                break;
            case "year":
                setCalendarDate((date) => date.subtract(10, "year"));
                break;
        }
    };

    const handleRightArrowClick = () => {
        switch (currentView) {
            case "day":
                setCalendarDate((date) => date.add(1, "month"));
                break;
            case "month":
                setCalendarDate((date) => date.add(1, "year"));
                break;
            case "year":
                setCalendarDate((date) => date.add(10, "year"));
                break;
        }
    };

    const handleDateChange = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");

        setCalendarDate(value);

        setSelectedStartDate(stringValue);

        performOnChangeHandler(stringValue);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const performOnChangeHandler = (changeValue: string) => {
        if (onChange) {
            onChange(changeValue);
        }
    };

    const toggleMonthView = () => {
        setCurrentView("month");
    };

    const toggleYearView = () => {
        setCurrentView((prev) => {
            if (prev !== "day") return "day";

            return "year";
        });
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderYearHeader = () => {
        if (currentView === "year") {
            const { beginDecade, endDecade } =
                CalendarHelper.getStartEndDecade(calendarDate);

            return (
                <Text.H4 weight="regular">
                    {beginDecade} to {endDecade}
                </Text.H4>
            );
        }

        return (
            <Text.H4 weight="regular">
                {dayjs(calendarDate).format("YYYY")}
            </Text.H4>
        );
    };

    return (
        <Container $type={type}>
            <HeaderDropdown $view={currentView}>
                <DropdownMonth onClick={toggleMonthView}>
                    <Text.H4 weight="regular">
                        {dayjs(calendarDate).format("MMM")}
                    </Text.H4>
                    <IconChevronDown />
                </DropdownMonth>
                <DropdownYear onClick={toggleYearView}>
                    {renderYearHeader()}
                    <IconChevronDown />
                </DropdownYear>
            </HeaderDropdown>
            <ContentBody>
                <ArrowLeft onClick={handleLeftArrowClick} />
                <Views $view={currentView}>
                    <DayView>
                        <CalendarDay
                            calendarDate={calendarDate}
                            disabledDates={disabledDates}
                            selectedStartDate={selectedStartDate}
                            onSelect={(date) => handleDateChange(date)}
                        />
                    </DayView>
                    <MonthView>
                        <CalendarMonth
                            calendarDate={calendarDate}
                            currentView={currentView}
                            selectedStartDate={selectedStartDate}
                            onSelect={(date) => handleDateChange(date)}
                        />
                    </MonthView>
                    <YearView>
                        <CalendarYear
                            calendarDate={calendarDate}
                            currentView={currentView}
                            selectedStartDate={selectedStartDate}
                            onSelect={(date) => handleDateChange(date)}
                        />
                    </YearView>
                </Views>
                <ArrowRight onClick={handleRightArrowClick} />
            </ContentBody>
        </Container>
    );
};
