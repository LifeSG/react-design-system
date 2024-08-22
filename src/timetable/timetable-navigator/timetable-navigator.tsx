import { RefreshIcon } from "@lifesg/react-icons";
import { TimeTableHeaderVariants } from "../types";
import { DateNavigator } from "./date-navigator";
import {
    NavigationHeaderSubtitleWrapper,
    NavigationHeaderWrapper,
    StyledRefreshButton,
    StyledResultText,
} from "./timetable-navigator.style";

interface TimeTableNavigatorProps {
    selectedDate: string;
    variant: TimeTableHeaderVariants;
    isLoading: boolean;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    setSelectedDate: (newDate: string) => void;
    onLeftArrowClick?: (() => void) | undefined;
    onRightArrowClick?: (() => void) | undefined;
    onRefresh?: (() => void) | undefined;
}

export const TimeTableNavigator = ({
    selectedDate,
    variant,
    isLoading,
    setSelectedDate,
    ...optionalProps
}: TimeTableNavigatorProps) => {
    if (variant === "none") {
        return <div />; // NOTE - Early return empty div for skipping first header column when rendering intervals
    }

    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const DateNavigatorSection = (
        <DateNavigator
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
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
        </NavigationHeaderSubtitleWrapper>
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    if (variant === "date-navigator-only") {
        return (
            <NavigationHeaderWrapper id="timetable-navigation-header-wrapper-id">
                {DateNavigatorSection}
            </NavigationHeaderWrapper>
        );
    }

    if (variant === "records-only") {
        return (
            <NavigationHeaderWrapper id="timetable-navigation-header-wrapper-id">
                {RecordsSection}
            </NavigationHeaderWrapper>
        );
    }

    return (
        <NavigationHeaderWrapper id="timetable-navigation-header-wrapper-id">
            {DateNavigatorSection}
            {RecordsSection}
        </NavigationHeaderWrapper>
    );
};
