import { RefreshIcon } from "@lifesg/react-icons";
import { MutableRefObject } from "react";
import { DateNavigator } from "../../date-navigator/date-navigator";
import {
    NavigationHeaderSubtitleWrapper,
    NavigationHeaderWrapper,
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
    onLeftArrowClick?: (currentDate: string) => void | undefined;
    onRightArrowClick?: (currentDate: string) => void | undefined;
    onRefresh?: (() => void) | undefined;
}

export const TimeTableNavigator = ({
    selectedDate,
    loading,
    tableContainerRef,
    totalRecords,
    onLeftArrowClick,
    onRightArrowClick,
    onRefresh,
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
        onRightArrowClick(date);
    };

    const handleLeftArrowClick = (date: string) => {
        scrollToTop();
        onLeftArrowClick(date);
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
                <DateNavigator
                    selectedDate={selectedDate}
                    loading={loading}
                    {...otherProps}
                    onRightArrowClick={
                        onRightArrowClick ? handleRightArrowClick : undefined
                    }
                    onLeftArrowClick={
                        onLeftArrowClick ? handleLeftArrowClick : undefined
                    }
                />
            }
            {renderRecordsSection()}
        </NavigationHeaderWrapper>
    );
};
