import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
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
import { CalendarProps } from "./types";

export type View = "default" | "month-options" | "year-options";

export const Calendar = ({
    disabledDates,
    onSelect,
    isOpen,
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
        setCalendarDate(dayjs(value));
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
    const _renderDropdownButtons = () => {
        return (
            <>
                <DropdownButton
                    type="button"
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
                        selectedStartDate={selectedStartDate}
                        onSelect={handleDateSelect}
                    />
                );
            case "year-options":
                return (
                    <CalendarYear
                        type={type}
                        calendarDate={calendarDate}
                        selectedStartDate={selectedStartDate}
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
                    <HeaderDropdown>{_renderDropdownButtons()}</HeaderDropdown>
                );
            case "input":
                return (
                    <Header>
                        <HeaderInputDropdown>
                            {_renderDropdownButtons()}
                        </HeaderInputDropdown>
                        <HeaderArrows>
                            <HeaderArrowButton onClick={handleLeftArrowClick}>
                                <ArrowLeft />
                            </HeaderArrowButton>
                            <HeaderArrowButton onClick={handleRightArrowClick}>
                                <ArrowRight />
                            </HeaderArrowButton>
                        </HeaderArrows>
                    </Header>
                );
            default:
                return (
                    <HeaderDropdown>{_renderDropdownButtons()}</HeaderDropdown>
                );
        }
    };

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
                        onSelect={handleDateSelect}
                    />
                    <OptionsOverlay $visible={currentView !== "default"}>
                        {renderOptionsOverlay()}
                    </OptionsOverlay>
                </ToggleZone>
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
