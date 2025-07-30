import { InputSelect } from "../../input-select";
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
                        onLeftArrowClick={onPreviousDayClick}
                        onRightArrowClick={onNextDayClick}
                        onCalendarDateSelect={onCalendarDateSelect}
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
