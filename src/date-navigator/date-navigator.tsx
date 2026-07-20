import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import dayjs from "dayjs";
import { useState } from "react";

import { Button } from "../button";
import type { DropdownRenderProps } from "../shared/dropdown-wrapper";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { BasicButton } from "../shared/input-wrapper";
import { CalendarDropdown } from "../shared/internal-calendar";
import { CalendarHelper, DateHelper } from "../util";
import * as styles from "./date-navigator.styles";
import type { DateNavigatorProps } from "./types";

// @catalog
/**
 * Displays a date with left/right navigation arrows for stepping through dates or weeks.
 *
 * Use when users need to browse content organised by day or week — such as schedules,
 * calendars, or time-based feeds.
 */
export const DateNavigator = ({
    selectedDate,
    minDate,
    maxDate,
    loading,
    showDateAsShortForm,
    showCurrentDateAsToday,
    view = "day",
    onLeftArrowClick,
    onRightArrowClick,
    onCalendarDateSelect,
    dropdownRootNode,
    className,
    ...otherProps
}: DateNavigatorProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const date = DateHelper.toDayjs(selectedDate);
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
        onCalendarDateSelect?.(value);
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

    // Helper function to get week range
    const getWeekRange = (selectedDate: string) => {
        const currentDate = DateHelper.toDayjs(selectedDate);
        const startOfWeek = currentDate.startOf("week");
        const endOfWeek = currentDate.endOf("week");

        return {
            startDisplay: startOfWeek.format("D MMM"),
            endDisplay: endOfWeek.format("D MMM"),
            year: endOfWeek.format("YYYY"),
        };
    };

    // Calculate display text based on view
    const getDisplayText = () => {
        if (view === "week") {
            const weekRange = getWeekRange(selectedDate);
            return `${weekRange.startDisplay} - ${weekRange.endDisplay}, ${weekRange.year}`;
        }
        const dateText = DateHelper.toDayjs(selectedDate)
            .format(showDateAsShortForm ? "D MMM YYYY" : "D MMMM YYYY")
            .toString();
        const isToday = DateHelper.isSame(selectedDate, dayjs());
        const dayText =
            isToday && showCurrentDateAsToday
                ? "Today"
                : date.format(showDateAsShortForm ? "ddd" : "dddd");
        return `${dateText}, ${dayText}`;
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
        const ariaLabel =
            view === "week"
                ? {
                      left: "Previous week",
                      right: "Next week",
                  }
                : {
                      left: "Previous day",
                      right: "Next day",
                  };

        return (
            <div {...otherProps} className={clsx(styles.container, className)}>
                <Button
                    className={styles.headerArrowButton}
                    data-testid="date-navigator-left-arrow-btn"
                    disabled={loading || isLeftArrowDisabled()}
                    aria-label={ariaLabel.left}
                    onClick={navigatePrevious}
                    styleType="light"
                    sizeType="small"
                    icon={
                        <ChevronLeftIcon
                            className={styles.headerArrowButtonIcon}
                        />
                    }
                />
                <BasicButton
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className={styles.dateTextButton}
                    data-testid="date-navigator-date-text"
                    disabled={!onCalendarDateSelect || loading}
                >
                    {getDisplayText()}
                </BasicButton>
                <Button
                    className={styles.headerArrowButton}
                    data-testid="date-navigator-right-arrow-btn"
                    disabled={loading || isRightArrowDisabled()}
                    aria-label={ariaLabel.right}
                    onClick={navigateNext}
                    styleType="light"
                    sizeType="small"
                    icon={
                        <ChevronRightIcon
                            className={styles.headerArrowButtonIcon}
                        />
                    }
                />
            </div>
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
