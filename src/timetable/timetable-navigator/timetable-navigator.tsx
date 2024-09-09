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
    isLoading: boolean;
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
    isLoading,
    tableContainerRef,
    ...optionalProps
}: TimeTableNavigatorProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const scrollToTop = () => {
        if (tableContainerRef.current) {
            tableContainerRef.current.scrollTop = 0;
        }
    };

    const onRefresh = () => {
        if (!optionalProps.onRefresh) return;
        scrollToTop();
        optionalProps.onRefresh();
    };

    const handleRightArrowClick = (date: string) => {
        if (!optionalProps.onRightArrowClick) return;
        scrollToTop();
        optionalProps.onRightArrowClick(date);
    };

    const handleLeftArrowClick = (date: string) => {
        if (!optionalProps.onLeftArrowClick) return;
        scrollToTop();
        optionalProps.onLeftArrowClick(date);
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderRecordsSection = () => {
        if (optionalProps.totalRecords === undefined) return <></>;
        return (
            <NavigationHeaderSubtitleWrapper id="timetable-records-wrapper-id">
                <StyledResultText
                    id="timetable-records-results-id"
                    data-testid="timetable-records-results"
                    weight={"semibold"}
                >
                    {optionalProps.totalRecords} results found
                </StyledResultText>
                {optionalProps.onRefresh && (
                    <StyledRefreshButton
                        id="timetable-records-refresh-btn-id"
                        data-testid="timetable-records-refresh-btn"
                        styleType="light"
                        sizeType="small"
                        disabled={isLoading}
                        onClick={onRefresh}
                        $isLoading={isLoading}
                    >
                        <RefreshIcon />
                    </StyledRefreshButton>
                )}
            </NavigationHeaderSubtitleWrapper>
        );
    };

    return (
        <NavigationHeaderWrapper id="timetable-navigation-header-wrapper-id">
            {
                <DateNavigator
                    selectedDate={selectedDate}
                    isLoading={isLoading}
                    {...optionalProps}
                    onRightArrowClick={handleRightArrowClick}
                    onLeftArrowClick={handleLeftArrowClick}
                />
            }
            {renderRecordsSection()}
        </NavigationHeaderWrapper>
    );
};
