import { Button } from "../../button";
import { InputSelect } from "../../input-select";
import { Typography } from "../../typography";
import {
    TimeSlotHeaderWrapper,
    LeftSection,
    RightSection,
    StyledDateNavigator,
    StyledText,
} from "./timeslot-header.style";

interface TimeSlotHeaderProps {
    date: string;
    view: "day" | "week";
    showTodayButton?: boolean;
    showViewSelector?: boolean;
    minDate?: string;
    maxDate?: string;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect?: (currentDate: string) => void;
    onViewChange?: (view: "day" | "week") => void;
    onTodayClick?: () => void;
}

export const TimeSlotHeader = ({
    date,
    view = "day",
    showTodayButton = true,
    showViewSelector = true,
    minDate,
    maxDate,
    onPreviousDayClick,
    onNextDayClick,
    onCalendarDateSelect,
    onViewChange,
    onTodayClick,
}: TimeSlotHeaderProps) => {
    const viewOptions = [
        { label: "Day", value: "day" },
        { label: "Week", value: "week" },
    ];

    const selectedViewOption = viewOptions.find(
        (option) => option.value === view
    );

    return (
        <TimeSlotHeaderWrapper>
            <LeftSection>
                {showTodayButton && (
                    <Button.Default
                        styleType="light"
                        onClick={onTodayClick}
                        style={{ minWidth: "80px" }}
                    >
                        Today
                    </Button.Default>
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
        </TimeSlotHeaderWrapper>
    );
};
