import { RefreshIcon } from "@lifesg/react-icons";
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
    ...optionalProps
}: TimeTableNavigatorProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const DateNavigatorSection = (
        <DateNavigator
            selectedDate={selectedDate}
            isLoading={isLoading}
            {...optionalProps}
        />
    );

    const RecordsSection = (
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
                    onClick={optionalProps.onRefresh}
                    $isLoading={isLoading}
                >
                    <RefreshIcon />
                </StyledRefreshButton>
            )}
        </NavigationHeaderSubtitleWrapper>
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <NavigationHeaderWrapper id="timetable-navigation-header-wrapper-id">
            {DateNavigatorSection}
            {optionalProps.totalRecords && RecordsSection}
        </NavigationHeaderWrapper>
    );
};
