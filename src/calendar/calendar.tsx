import React, { useEffect, useState } from "react";
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
import { CalendarProps, View } from "./types";
import { CalendarYear } from "./calendar-year";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { Text } from "src/text";

export const Calendar = ({ disabledDates, onChange, value }: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs());
    const [showView, setShowView] = useState<View>("Day");
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
            case "Day":
                setCalendarDate((date) => date.subtract(1, "month"));
                break;
            case "Month":
                setCalendarDate((date) => date.subtract(1, "year"));
                break;
            case "Year":
                setCalendarDate((date) => date.subtract(10, "year"));
                break;
        }
    };

    const handleRightArrowClick = () => {
        switch (showView) {
            case "Day":
                setCalendarDate((date) => date.add(1, "month"));
                break;
            case "Month":
                setCalendarDate((date) => date.add(1, "year"));
                break;
            case "Year":
                setCalendarDate((date) => date.add(10, "year"));
                break;
        }
    };

    const handleView = (view: View) => {
        const goTo = selectedStartDate.length && selectedStartDate;

        switch (view) {
            case "Day":
                setShowView("Day");
                break;
            case "Month":
                if (showView === "Month") {
                    setShowView("Day");
                    break;
                }

                setShowView("Month");
                break;
            case "Year":
                if (showView === "Month") {
                    if (goTo.length) setCalendarDate(dayjs(goTo));
                    setShowView("Day");
                    break;
                }

                if (showView === "Year") {
                    if (goTo.length) setCalendarDate(dayjs(goTo));
                    setShowView("Day");
                    return;
                }

                setShowView("Year");
                break;
            default:
                setShowView("Day");
                break;
        }
    };

    const handleDayClick = (value: string) => {
        const isNextMonthSelected =
            calendarDate?.clone().toDate().getMonth() !== dayjs(value).month();

        if (isNextMonthSelected) setCalendarDate(dayjs(value));

        setSelectedStartDate(value);

        performOnChangeHandler(value);
    };

    const handleMonthYearClick = (
        e: React.MouseEvent<HTMLDivElement>,
        show: View
    ) => {
        const value = e.currentTarget.getAttribute("data-value") || "";
        let isYearDecaded = false;
        if (show === "Year") {
            isYearDecaded =
                e.currentTarget.getAttribute("data-variant") === "nextDecade"
                    ? true
                    : false;
        }

        if (!value.length) return;
        const hasStartDate: string[] = selectedStartDate.split("-");

        const [yyyy, mm, _dd] = hasStartDate;
        const selectedMonth = value.split("-")[1];
        const selectedYear = value.split("-")[0];

        if (hasStartDate.length === 3) {
            /**
             * Handle last day check/validate
             * user select 2023-01-30 and select month calendar which didn't exist 30 day in the month
             * it will get the last day of the month
             */
            const lastDayInMonth: number = dayjs(
                `${yyyy}-${selectedMonth}-01`
            ).daysInMonth();
            let dd: string = _dd;

            if (+_dd > lastDayInMonth) {
                dd = lastDayInMonth.toString();
            }

            // date already been selected
            const fullDate =
                show === "Month"
                    ? `${selectedYear}-${selectedMonth}-${dd}`
                    : showView === "Year"
                    ? `${selectedYear}-${mm}-${dd}`
                    : dayjs().format("YYYY-MM-DD");

            if (isYearDecaded) setCalendarDate(dayjs(value));
            setSelectedStartDate(fullDate);
            return;
        }

        // wihtout selected date yet
        if (isYearDecaded) setCalendarDate(dayjs(value));
        setSelectedStartDate(value);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const YearHeaderComponent = () => {
        if (showView === "Year") {
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
            <HeaderDropdown view={showView}>
                <DropdownMonth onClick={() => handleView("Month")}>
                    <Text.BodySmall>
                        {dayjs(calendarDate).format("MMM")}
                    </Text.BodySmall>
                    <ChevronDownIcon />
                </DropdownMonth>
                <DropdownYear onClick={() => handleView("Year")}>
                    {YearHeaderComponent()}
                    <ChevronDownIcon />
                </DropdownYear>
            </HeaderDropdown>
            <Views show={showView}>
                <DayView>
                    <CalendarDay
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        handleDayClick={handleDayClick}
                        selectedStartDate={selectedStartDate}
                    />
                </DayView>
                <MonthView>
                    <CalendarMonth
                        calendarDate={calendarDate}
                        onClick={(e) => handleMonthYearClick(e, "Month")}
                        showView={showView}
                        selectedStartDate={selectedStartDate}
                    />
                </MonthView>
                <YearView>
                    <CalendarYear
                        calendarDate={calendarDate}
                        onClick={(e) => handleMonthYearClick(e, "Year")}
                        showView={showView}
                        selectedStartDate={selectedStartDate}
                    />
                </YearView>
            </Views>
            <ArrowLeft type="chevron-left" onClick={handleLeftArrowClick} />
            <ArrowRight type="chevron-right" onClick={handleRightArrowClick} />
        </Container>
    );
};
