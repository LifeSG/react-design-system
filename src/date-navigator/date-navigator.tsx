import dayjs from "dayjs";
import { useState } from "react";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../shared/dropdown-wrapper";
import { CalendarDropdown } from "../shared/internal-calendar";
import {
    ArrowLeft,
    ArrowRight,
} from "../shared/internal-calendar/calendar-manager.style";
import { CalendarHelper, DateHelper } from "../util";
import {
    Container,
    HeaderArrowButton,
    StyledDateTextButton,
} from "./date-navigator.style";
import { DateNavigatorProps } from "./types";

export const DateNavigator = ({
    selectedDate,
    minDate,
    maxDate,
    loading,
    showDateAsShortForm,
    showCurrentDateAsToday,
    onLeftArrowClick,
    onRightArrowClick,
    onCalendarDateSelect,
    dropdownRootNode,
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
        isToday && showCurrentDateAsToday
            ? "Today"
            : date.format(showDateAsShortForm ? "ddd" : "dddd");
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
    const renderCalendar = ({ elementWidth }: DropdownRenderProps) => {
        return (
            <CalendarDropdown
                variant="single"
                initialCalendarDate={selectedDate}
                value={selectedDate}
                minDate={minDate}
                maxDate={maxDate}
                onSelect={handleSelect}
                width={elementWidth}
            />
        );
    };

    const renderDateNavElement = () => {
        return (
            <Container {...otherProps}>
                {
                    <HeaderArrowButton
                        data-testid="date-navigator-left-arrow-btn"
                        disabled={loading || isLeftArrowDisabled()}
                        aria-label="Previous day"
                        onClick={navigatePrevious}
                        styleType="light"
                        sizeType="small"
                    >
                        <ArrowLeft />
                    </HeaderArrowButton>
                }
                <StyledDateTextButton
                    onClick={() =>
                        !!onCalendarDateSelect &&
                        !loading &&
                        setIsCalendarOpen(!isCalendarOpen)
                    }
                    $enableDateClick={!!onCalendarDateSelect && !loading}
                    data-testid="date-navigator-date-text"
                    styleType="link"
                    disabled={!onCalendarDateSelect || loading}
                >
                    {`${dateText}, ${dayText}`}
                </StyledDateTextButton>
                {
                    <HeaderArrowButton
                        data-testid="date-navigator-right-arrow-btn"
                        disabled={loading || isRightArrowDisabled()}
                        aria-label="Next day"
                        onClick={navigateNext}
                        styleType="light"
                        sizeType="small"
                    >
                        <ArrowRight />
                    </HeaderArrowButton>
                }
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
            rootNode={dropdownRootNode}
        />
    );
};
