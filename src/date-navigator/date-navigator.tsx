import dayjs from "dayjs";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { CalendarDropdown } from "../shared/internal-calendar";
import {
    ArrowLeft,
    ArrowRight,
} from "../shared/internal-calendar/calendar-manager.style";
import { CalendarHelper, DateHelper } from "../util";
import {
    Container,
    HeaderArrowButton,
    StyledDateText
} from "./date-navigator.style";
import { DateNavigatorProps } from "./types";

export const DateNavigator = ({
    selectedDate,
    minDate,
    maxDate,
    loading,
    showDateAsShortForm,
    showTodayAsToday,
    onLeftArrowClick,
    onRightArrowClick,
    onCalendarDateSelect,
    ...otherProps
}: DateNavigatorProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const date = DateHelper.toDayjs(selectedDate);
    const dateText = DateHelper.toDayjs(selectedDate)
        .format(showDateAsShortForm ? "D MMM YYYY" : "D MMMM YYYY")
        .toString();
    const isToday = DateHelper.isSame(selectedDate, dayjs());
    const dayText =
        isToday && showTodayAsToday
            ? "Today"
            :
            DateHelper.toDayjs(selectedDate).format(showDateAsShortForm ? "ddd" : "dddd");
    const containerRef = useRef<HTMLDivElement>(null);
    const { width: referenceWidth } = useResizeDetector({
        targetRef: containerRef,
        handleHeight: false,
    });
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

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

    const handleSelect = (value: string) => {
        onCalendarDateSelect && onCalendarDateSelect(value);
        setIsCalendarOpen(!isCalendarOpen);
    };

    const navigatePrevious = () => {
        setIsCalendarOpen(false);
        onLeftArrowClick(selectedDate);
    };

    const navigateNext = () => {
        setIsCalendarOpen(false);
        onRightArrowClick(selectedDate);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderCalendar = () => {
        return (
            <CalendarDropdown
                type="input"
                variant="single"
                initialCalendarDate={selectedDate}
                value={selectedDate}
                minDate={minDate}
                maxDate={maxDate}
                onSelect={handleSelect}
                width={referenceWidth}
            />
        );
    };

    const renderDateNavElement = () => {
        return (
            <Container ref={containerRef} {...otherProps}>
                {(
                    <HeaderArrowButton
                        data-testid="date-navigator-left-arrow-btn"
                        disabled={loading || isLeftArrowDisabled()}
                        focusHighlight={false}
                        focusOutline="browser"
                        aria-label="Previous day"
                        onClick={navigatePrevious}
                    >
                        <ArrowLeft />
                    </HeaderArrowButton>
                )}
                <StyledDateText
                    onClick={() => !!onCalendarDateSelect && !loading && setIsCalendarOpen(!isCalendarOpen)}
                    $enableDateClick={!!onCalendarDateSelect && !loading}
                    data-testid="date-navigator-date-text"
                    weight={"semibold"}
                >
                    {`${dateText}, ${dayText}`}
                </StyledDateText>
                {(
                    <HeaderArrowButton
                        data-testid="date-navigator-right-arrow-btn"
                        disabled={loading || isRightArrowDisabled()}
                        focusHighlight={false}
                        focusOutline="browser"
                        aria-label="Next day"
                        onClick={navigateNext}
                    >
                        <ArrowRight />
                    </HeaderArrowButton>
                )}
            </Container>
        );
    };

    return (
        <ElementWithDropdown
            enabled={!loading}
            isOpen={isCalendarOpen}
            renderElement={renderDateNavElement}
            renderDropdown={renderCalendar}
            onDismiss={() => setIsCalendarOpen(false)}
            onClose={() => setIsCalendarOpen(false)}
            offset={8}
        />
    );
};
