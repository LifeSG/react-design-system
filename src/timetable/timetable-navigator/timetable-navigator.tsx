import { RefreshIcon } from "@lifesg/react-icons";
import { MutableRefObject } from "react";
import {
    NavigationHeaderSubtitleWrapper,
    NavigationHeaderWrapper,
    StyledDateNavigator,
    StyledRefreshButton,
    StyledResultText,
} from "./timetable-navigator.style";

interface TimeTableNavigatorProps {
    selectedDate: string;
    loading: boolean;
    tableContainerRef: MutableRefObject<HTMLDivElement>;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    onPreviousDayClick: (currentDate: string) => void | undefined;
    onNextDayClick: (currentDate: string) => void | undefined;
    onRefresh?: (() => void) | undefined;
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}

export const TimeTableNavigator = ({
    selectedDate,
    loading,
    tableContainerRef,
    totalRecords,
    onPreviousDayClick,
    onNextDayClick,
    onRefresh,
    onCalendarDateSelect,
    ...otherProps
}: TimeTableNavigatorProps) => {
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
            <NavigationHeaderSubtitleWrapper>
                <StyledResultText
                    data-testid="timetable-records-results"
                    weight={"semibold"}
                >
                    {totalRecords} results found
                </StyledResultText>
                {onRefresh && (
                    <StyledRefreshButton
                        data-testid="timetable-records-refresh-btn"
                        styleType="light"
                        sizeType="small"
                        disabled={loading}
                        onClick={handleRefresh}
                        $loading={loading}
                    >
                        <RefreshIcon />
                    </StyledRefreshButton>
                )}
            </NavigationHeaderSubtitleWrapper>
        );
    };

    return (
        <NavigationHeaderWrapper>
            {
                <StyledDateNavigator
                    selectedDate={selectedDate}
                    loading={loading}
                    {...otherProps}
                    onRightArrowClick={handleRightArrowClick}
                    onLeftArrowClick={handleLeftArrowClick}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
            }
            {renderRecordsSection()}
        </NavigationHeaderWrapper>
    );
};
