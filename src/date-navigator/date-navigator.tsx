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
    loading,
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
                    data-testid="date-navigator-left-arrow-btn"
                    disabled={loading || isLeftArrowDisabled()}
                    focusHighlight={false}
                    focusOutline="browser"
                    aria-label="Previous day"
                    onClick={() => onLeftArrowClick(selectedDate)}
                >
                    <ArrowLeft />
                </HeaderArrowButton>
            )}
            <Wrapper>
                <StyledDateText
                    data-testid="date-navigator-date-text"
                    weight={"semibold"}
                >
                    {dateText}
                </StyledDateText>
                <StyledDayText
                    data-testid="date-navigator-day-text"
                    weight={"bold"}
                >
                    {dayText}
                </StyledDayText>
            </Wrapper>
            {onRightArrowClick && (
                <HeaderArrowButton
                    data-testid="date-navigator-right-arrow-btn"
                    disabled={loading || isRightArrowDisabled()}
                    focusHighlight={false}
                    focusOutline="browser"
                    aria-label="Next day"
                    onClick={() => onRightArrowClick(selectedDate)}
                >
                    <ArrowRight />
                </HeaderArrowButton>
            )}
        </Container>
    );
};
