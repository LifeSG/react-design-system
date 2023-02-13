import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    DayView,
    DropdownMonth,
    DropdownYear,
    HeaderDropdown,
    MonthView,
    Views,
    YearView,
} from "./calendar.style";
import { CalendarDay } from "./calendar-day";
import { CalendarMonth } from "./calendar-month";
import { CalendarProps } from "./types";
import { CalendarYear } from "./calendar-year";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { Text } from "src/text";

export type View = "day" | "month" | "year";

export const Calendar = ({ disabledDates, onChange, value }: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [showView, setShowView] = useState<View>("day");
    const [selectedStartDate, setSelectedStartDate] = useState<string>(""); // YYYY-MM-DD

    useEffect(() => {
        if (!value) return;

        setSelectedStartDate(value);
    }, [value]);

    // =============================================================================
    // Helper Functions
    // =============================================================================

    const performOnChangeHandler = (changeValue: string) => {
        if (onChange) {
            onChange(changeValue);
        }
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleLeftArrowClick = () => {
        switch (showView) {
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
        switch (showView) {
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

    const toggleMonthView = () => {
        setShowView("month");
    };

    const toggleYearView = () => {
        setShowView((prev) => {
            if (prev === "month") return "day";
            if (prev === "year") return "day";

            return "year";
        });
    };

    const handleDateChange = (value: Dayjs) => {
        const isOtherMonthSelected = calendarDate.month() !== value.month();
        const stringValue = value.format("YYYY-MM-DD");

        if (isOtherMonthSelected) setCalendarDate(value);

        setSelectedStartDate(stringValue);

        performOnChangeHandler(stringValue);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderYearHeader = () => {
        if (showView === "year") {
            const beginDecaded =
                Math.floor(+calendarDate.format("YYYY") / 10) * 10;

            const endDecaded = dayjs(`${beginDecaded}-01-01`)
                .add(9, "year")
                .format("YYYY");

            return (
                <Text.BodySmall>
                    {beginDecaded} to {endDecaded}
                </Text.BodySmall>
            );
        }

        return (
            <Text.BodySmall>
                {dayjs(calendarDate).format("YYYY")}
            </Text.BodySmall>
        );
    };

    return (
        <Container>
            <HeaderDropdown $view={showView}>
                <DropdownMonth onClick={toggleMonthView}>
                    <Text.BodySmall>
                        {dayjs(calendarDate).format("MMM")}
                    </Text.BodySmall>
                    <ChevronDownIcon />
                </DropdownMonth>
                <DropdownYear onClick={toggleYearView}>
                    {renderYearHeader()}
                    <ChevronDownIcon />
                </DropdownYear>
            </HeaderDropdown>
            <Views $view={showView}>
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
                        showView={showView}
                        selectedStartDate={selectedStartDate}
                        onSelect={(date) => handleDateChange(date)}
                    />
                </MonthView>
                <YearView>
                    <CalendarYear
                        calendarDate={calendarDate}
                        showView={showView}
                        selectedStartDate={selectedStartDate}
                        onSelect={(date) => handleDateChange(date)}
                        onDecadeChange={(date) => setCalendarDate(date)}
                    />
                </YearView>
            </Views>
            <ArrowLeft onClick={handleLeftArrowClick} />
            <ArrowRight onClick={handleRightArrowClick} />
        </Container>
    );
};
