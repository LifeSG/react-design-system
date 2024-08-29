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
    ...optionalProps
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
    // EVENT HANDLERS
    // =============================================================================
    const isLeftArrowDisabled = () => {
        if (!optionalProps.minDate) {
            return false;
        }
        return CalendarHelper.isDisabledDay(
            date,
            undefined,
            optionalProps.minDate
        );
    };

    const isRightArrowDisabled = () => {
        if (!optionalProps.maxDate) {
            return false;
        }
        return CalendarHelper.isDisabledDay(
            date,
            undefined,
            undefined,
            optionalProps.maxDate
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Container id="date-navigator-container-id">
            {optionalProps.onLeftArrowClick && (
                <HeaderArrowButton
                    id="date-navigator-left-arrow-btn-id"
                    data-testid="date-navigator-left-arrow-btn"
                    disabled={optionalProps.isLoading || isLeftArrowDisabled()}
                    focusHighlight={false}
                    tabIndex={-1}
                    onClick={() => optionalProps.onLeftArrowClick(selectedDate)}
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
            {optionalProps.onRightArrowClick && (
                <HeaderArrowButton
                    id="date-navigator-right-arrow-btn-id"
                    data-testid="date-navigator-right-arrow-btn"
                    disabled={optionalProps.isLoading || isRightArrowDisabled()}
                    focusHighlight={false}
                    tabIndex={-1}
                    onClick={() =>
                        optionalProps.onRightArrowClick(selectedDate)
                    }
                >
                    <ArrowRight />
                </HeaderArrowButton>
            )}
        </Container>
    );
};
