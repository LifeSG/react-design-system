import { InputSelect } from "../../input-select";
import { DateHelper } from "../../util";
import {
    DropdownGlobalStyles,
    LeftSection,
    RightSection,
    StyledButton,
    StyledDateNavigator,
    StyledText,
    ScheduleHeaderWrapper,
} from "./schedule-header.style";

interface ScheduleHeaderProps {
    id?: string;
    date: string;
    view: "day" | "week";
    showTodayButton?: boolean;
    showViewSelector?: boolean;
    minDate?: string;
    maxDate?: string;
    $isMobile?: boolean;
    $isTablet?: boolean;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect?: (currentDate: string) => void;
    onViewChange?: (view: "day" | "week") => void;
    onTodayClick?: () => void;
}

export const ScheduleHeader = ({
    date,
    view = "day",
    minDate,
    maxDate,
    $isMobile = false,
    $isTablet = false,
    onPreviousDayClick,
    onNextDayClick,
    onCalendarDateSelect,
    onViewChange,
    onTodayClick,
    ...otherprops
}: ScheduleHeaderProps) => {
    const viewOptions = [
        { label: "Day", value: "day" },
        { label: "Week", value: "week" },
    ];
    const selectedViewOption = viewOptions.find(
        (option) => option.value === view
    );
    const showTodayButton = !$isMobile && !$isTablet;
    const showViewSelector = !$isMobile && !$isTablet;

    // Handle navigation based on view type
    const handleLeftArrowClick = (currentDate: string) => {
        if (view === "week") {
            const currentDateObj = DateHelper.toDayjs(currentDate);
            const previousWeek = currentDateObj.subtract(1, "week");
            onPreviousDayClick(previousWeek.format("YYYY-MM-DD"));
        } else {
            onPreviousDayClick(currentDate);
        }
    };

    const handleRightArrowClick = (currentDate: string) => {
        if (view === "week") {
            const currentDateObj = DateHelper.toDayjs(currentDate);
            const nextWeek = currentDateObj.add(1, "week");
            onNextDayClick(nextWeek.format("YYYY-MM-DD"));
        } else {
            onNextDayClick(currentDate);
        }
    };

    return (
        <>
            <DropdownGlobalStyles />
            <ScheduleHeaderWrapper {...otherprops}>
                <LeftSection $isMobile={$isMobile}>
                    {showTodayButton && (
                        <StyledButton styleType="light" onClick={onTodayClick}>
                            Today
                        </StyledButton>
                    )}
                    <StyledDateNavigator
                        selectedDate={date}
                        minDate={minDate}
                        maxDate={maxDate}
                        view={view}
                        onLeftArrowClick={handleLeftArrowClick}
                        onRightArrowClick={handleRightArrowClick}
                        onCalendarDateSelect={onCalendarDateSelect}
                        $isMobile={$isMobile}
                    />
                </LeftSection>

                {showViewSelector && (
                    <RightSection>
                        <StyledText>View by:</StyledText>
                        <InputSelect
                            options={viewOptions}
                            selectedOption={selectedViewOption}
                            onSelectOption={(option) =>
                                onViewChange?.(option.value as "day" | "week")
                            }
                            listExtractor={(option) => option.label}
                            displayValueExtractor={(option) => option.label}
                        />
                    </RightSection>
                )}
            </ScheduleHeaderWrapper>
        </>
    );
};
