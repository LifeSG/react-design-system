import React, { useCallback, useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDaySection,
    Circle,
    Container,
    DayNumber,
    DayView,
    DropdownMonth,
    DropdownYear,
    GrowDayCell,
    HeaderDropdown,
    InteractiveCircle,
    LeftCell,
    MonthView,
    RightCell,
    Views,
    WeekCell,
    WeekDaysContainer,
    YearView,
} from "./calendar.style";
import { Text } from "src/text";
import { Icon } from "src/icon";
import { CalendarProps, VariantDay, View } from "./types";
import { CalendarMonth } from "./calendar-month";
import { CalendarYear } from "./calendar-year";

export const Calendar = ({ disabledDate, onChange, value }: CalendarProps) => {
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

    const revertedDateFormat = (date: string) => {
        // DD-MM-YYYY to YYYY-MM-DD
        return date.split("-").reverse().join("-");
    };

    const generateDayClass = (date: string): string => {
        const classes: string[] = [];

        if (selectedStartDate === date) {
            classes.push("selected-start");
        }

        return classes.join(" ");
    };

    const generateDayStatus = (day: Date) => {
        const _dateStartWithDay = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
            .format(day)
            .replaceAll("/", "-");

        // YYYY-MM-DD
        const dateStartWithYear = revertedDateFormat(_dateStartWithDay);

        let isDisabled = false;

        if (disabledDate && disabledDate.length) {
            isDisabled = disabledDate.includes(dateStartWithYear);
        }

        const variant: VariantDay =
            calendarDate?.clone().toDate().getMonth() !== day.getMonth()
                ? "nextMonth"
                : dayjs().isSame(day, "day")
                ? "today"
                : "default";

        return {
            dateStartWithYear,
            isDisabled,
            variant,
        };
    };

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
                e.currentTarget.getAttribute("data-variant") === "nextDecaded"
                    ? true
                    : false;
        }

        if (!value.length) return;

        const hasStartDate: string[] = selectedStartDate.split("-");

        const [yyyy, mm, dd] = hasStartDate;
        const selectedMonth = value.split("-")[1];
        const selectedYear = value.split("-")[0];

        if (hasStartDate.length === 3) {
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
    // Calendar Generate
    // =============================================================================
    const firstDayOfTheMonth = useMemo(
        () => calendarDate.clone().startOf("month"),
        [calendarDate]
    );

    const firstDayOfFirstWeekOfMonth = useMemo(
        () => dayjs(firstDayOfTheMonth).startOf("week"),
        [firstDayOfTheMonth]
    );

    const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
        const dates: Dayjs[] = [day];
        for (let i = 1; i < 6; i++) {
            const date = day.clone().add(i, "week");
            dates.push(date);
        }
        return dates;
    }, []);

    const generateWeek = useCallback((day: Dayjs): Date[] => {
        const dates: Date[] = [];
        for (let i = 0; i < 7; i++) {
            const date = day.clone().add(i, "day").toDate();
            dates.push(date);
        }
        return dates;
    }, []);

    const generateWeeksOfTheMonth = useMemo((): Date[][] => {
        const firstDayOfEachWeek = generateFirstDayOfEachWeek(
            firstDayOfFirstWeekOfMonth
        );

        return firstDayOfEachWeek.map((date) => generateWeek(date));
    }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

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
                    <Icon type="chevron-down" />
                </DropdownMonth>
                <DropdownYear onClick={() => handleView("Year")}>
                    {YearHeaderComponent()}
                    <Icon type="chevron-down" />
                </DropdownYear>
            </HeaderDropdown>
            <Views show={showView}>
                <DayView>
                    <WeekDaysContainer>
                        {generateWeeksOfTheMonth[0].map((day, index) => (
                            <WeekCell key={`week-day-${index}`}>
                                {dayjs(day).format("ddd")}
                            </WeekCell>
                        ))}
                    </WeekDaysContainer>
                    {generateWeeksOfTheMonth.map((week, weekIndex) => (
                        <CalendarDaySection key={`week-${weekIndex}`}>
                            {week.map((day, dayIndex) => {
                                const {
                                    dateStartWithYear,
                                    isDisabled,
                                    variant,
                                } = generateDayStatus(day);

                                const classNames =
                                    generateDayClass(dateStartWithYear);

                                return (
                                    <GrowDayCell
                                        key={`day-${dayIndex}`}
                                        className={classNames}
                                    >
                                        <LeftCell data-cell="left">
                                            <Circle
                                                data-circle="left"
                                                position="left"
                                                variant={variant}
                                            />
                                        </LeftCell>
                                        <RightCell data-cell="right">
                                            <Circle
                                                data-circle="right"
                                                position="right"
                                                variant={variant}
                                            />
                                        </RightCell>
                                        <DayNumber
                                            variant={variant}
                                            disabled={isDisabled}
                                        >
                                            {day.getDate()}
                                        </DayNumber>
                                        <InteractiveCircle
                                            data-day={dateStartWithYear}
                                            disabled={isDisabled}
                                            onClick={() =>
                                                handleDayClick(
                                                    dateStartWithYear
                                                )
                                            }
                                        />
                                    </GrowDayCell>
                                );
                            })}
                        </CalendarDaySection>
                    ))}
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
