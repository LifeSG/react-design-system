import dayjs from "dayjs";
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
import { DateNavigatorProps } from "./types";

export const DateNavigator = ({
    selectedDate,
    minDate,
    maxDate,
    isLoading,
    onLeftArrowClick,
    onRightArrowClick,
    ...otherProps
}: DateNavigatorProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const date = DateHelper.toDayjs(selectedDate);
    const dateText = DateHelper.toDayjs(selectedDate)
        .format("D MMMM YYYY")
        .toString();
    const isToday = DateHelper.isSame(selectedDate, dayjs());
    const dayText = isToday
        ? "Today"
        : DateHelper.toDayjs(selectedDate).format("dddd");

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isLeftArrowDisabled = () => {
        if (!minDate) {
            return false;
        }
        return (
            CalendarHelper.isDisabledDay(date, undefined, minDate) ||
            DateHelper.isSame(date, minDate)
        );
    };

    const isRightArrowDisabled = () => {
        if (!maxDate) {
            return false;
        }
        return (
            CalendarHelper.isDisabledDay(date, undefined, undefined, maxDate) ||
            DateHelper.isSame(date, maxDate)
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Container {...otherProps}>
            {onLeftArrowClick && (
                <HeaderArrowButton
                    id="date-navigator-left-arrow-btn-id"
                    data-testid="date-navigator-left-arrow-btn"
                    disabled={isLoading || isLeftArrowDisabled()}
                    focusHighlight={false}
                    aria-label="Previous day"
                    onClick={() => onLeftArrowClick(selectedDate)}
                >
                    <ArrowLeft />
                </HeaderArrowButton>
            )}
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
            {onRightArrowClick && (
                <HeaderArrowButton
                    id="date-navigator-right-arrow-btn-id"
                    data-testid="date-navigator-right-arrow-btn"
                    disabled={isLoading || isRightArrowDisabled()}
                    focusHighlight={false}
                    aria-label="Next day"
                    onClick={() => onRightArrowClick(selectedDate)}
                >
                    <ArrowRight />
                </HeaderArrowButton>
            )}
        </Container>
    );
};
