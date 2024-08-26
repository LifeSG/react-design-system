import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
} from "../shared/internal-calendar/calendar-manager.style";
import { CalendarHelper, DateHelper } from "../util";
import {
    Container,
    HeaderArrowButton,
    StyledDateText,
    StyledDayText,
    Wrapper,
} from "./date-navigator.style";

export interface DateNavigatorProps {
    selectedDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    isLoading?: boolean | undefined;
    onLeftArrowClick?: (currentDate: string) => void | undefined;
    onRightArrowClick?: (currentDate: string) => void | undefined;
}

export const DateNavigator = ({
    selectedDate,
    ...otherProps
}: DateNavigatorProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [currentDate, setCurrentDate] = useState<string>(selectedDate);
    const date = DateHelper.toDayjs(currentDate);
    const dateText = DateHelper.toDayjs(currentDate)
        .format("D MMMM YYYY")
        .toString();
    const isToday = DateHelper.isSame(currentDate, dayjs());
    const dayText = isToday
        ? "Today"
        : DateHelper.toDayjs(currentDate).format("dddd");

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setCurrentDate(selectedDate);
    }, [selectedDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const isLeftArrowDisabled = () => {
        if (!otherProps.minDate) {
            return false;
        }
        return CalendarHelper.isDisabledDay(
            date,
            undefined,
            otherProps.minDate
        );
    };

    const isRightArrowDisabled = () => {
        if (!otherProps.maxDate) {
            return false;
        }
        return CalendarHelper.isDisabledDay(
            date,
            undefined,
            undefined,
            otherProps.maxDate
        );
    };

    const handleLeftArrowClick = () => {
        if (otherProps.onLeftArrowClick) {
            return otherProps.onLeftArrowClick(currentDate);
        }
        setCurrentDate(date.add(-1, "day").format());
    };

    const handleRightArrowClick = () => {
        if (otherProps.onRightArrowClick) {
            return otherProps.onRightArrowClick(currentDate);
        }
        setCurrentDate(date.add(1, "day").format());
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Container id="date-navigator-container-id">
            <HeaderArrowButton
                id="date-navigator-left-arrow-btn-id"
                data-testid="date-navigator-left-arrow-btn"
                disabled={otherProps.isLoading || isLeftArrowDisabled()}
                focusHighlight={false}
                tabIndex={-1}
                onClick={handleLeftArrowClick}
            >
                <ArrowLeft />
            </HeaderArrowButton>
            <Wrapper id="date-navigator-display-wrapper-id">
                <StyledDateText
                    id="date-navigator-date-text-id"
                    data-testid="date-navigator-date-text"
                    weight={"semibold"}
                >
                    {dateText}
                </StyledDateText>
                <StyledDayText
                    id="date-navigator-day-text-id"
                    data-testid="date-navigator-day-text"
                    weight={"bold"}
                >
                    {dayText}
                </StyledDayText>
            </Wrapper>
            <HeaderArrowButton
                id="date-navigator-right-arrow-btn-id"
                data-testid="date-navigator-right-arrow-btn"
                disabled={otherProps.isLoading || isRightArrowDisabled()}
                focusHighlight={false}
                tabIndex={-1}
                onClick={handleRightArrowClick}
            >
                <ArrowRight />
            </HeaderArrowButton>
        </Container>
    );
};
