import { RefreshIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import type { RefObject } from "react";

import { Button } from "../../button";
import { DateNavigator } from "../../date-navigator";
import { Typography } from "../../typography";
import * as styles from "./timetable-header.styles";

interface TimeTableHeaderProps {
    selectedDate: string;
    loading: boolean;
    tableContainerRef: RefObject<HTMLDivElement>;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    showDateAsShortForm?: boolean | undefined;
    showCurrentDateAsToday?: boolean | undefined;
    onPreviousDayClick: (currentDate: string) => void | undefined;
    onNextDayClick: (currentDate: string) => void | undefined;
    onRefresh?: (() => void) | undefined;
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}

export const TimeTableHeader = ({
    selectedDate,
    loading,
    tableContainerRef,
    totalRecords,
    onPreviousDayClick,
    onNextDayClick,
    onRefresh,
    onCalendarDateSelect,
    ...otherProps
}: TimeTableHeaderProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const scrollToTop = () => {
        if (tableContainerRef.current) {
            tableContainerRef.current.scrollTop = 0;
        }
    };

    const handleRefresh = () => {
        if (!onRefresh) return;
        scrollToTop();
        onRefresh();
    };

    const handleRightArrowClick = (date: string) => {
        scrollToTop();
        onNextDayClick(date);
    };

    const handleLeftArrowClick = (date: string) => {
        scrollToTop();
        onPreviousDayClick(date);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderRecordsSection = () => {
        if (totalRecords === undefined) return <></>;
        return (
            <div className={styles.navigationHeaderSubtitleWrapper}>
                <Typography.BodySM
                    className={styles.resultText}
                    data-testid="timetable-records-results"
                    weight={"semibold"}
                >
                    {totalRecords} result{totalRecords !== 1 ? "s" : ""} found
                </Typography.BodySM>
                {onRefresh && (
                    <Button
                        data-testid="timetable-records-refresh-btn"
                        aria-label="Refresh timetable records"
                        styleType="light"
                        sizeType="small"
                        disabled={loading}
                        onClick={handleRefresh}
                        className={clsx(
                            styles.refreshButton,
                            loading && styles.refreshButtonLoading
                        )}
                        icon={<RefreshIcon />}
                    />
                )}
            </div>
        );
    };

    return (
        <div className={styles.navigationHeaderWrapper}>
            <DateNavigator
                className={styles.dateNavigator}
                selectedDate={selectedDate}
                loading={loading}
                {...otherProps}
                onRightArrowClick={handleRightArrowClick}
                onLeftArrowClick={handleLeftArrowClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
            {renderRecordsSection()}
        </div>
    );
};
