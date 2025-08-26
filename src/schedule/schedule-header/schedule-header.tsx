import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { DateHelper } from "../../util";
import { Breakpoint } from "../../theme";
import {
    LeftSection,
    RightSection,
    StyledButton,
    StyledDateNavigator,
    StyledText,
    ScheduleHeaderWrapper,
    DROPDOWN_WIDTH,
} from "./schedule-header.style";
import { ScheduleView } from "../types";
import { InputSelect } from "../../input-select";

export interface ScheduleHeaderProps {
    id?: string | undefined;
    date: string;
    view: ScheduleView;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    showTodayButton?: boolean | undefined;
    showViewSelector?: boolean | undefined;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect?: (currentDate: string) => void;
    onViewChange?: (view: ScheduleView) => void;
    onTodayClick?: () => void;
}

export const ScheduleHeader = ({
    date,
    view = "day",
    minDate,
    maxDate,
    showTodayButton = true,
    showViewSelector = true,
    onPreviousDayClick,
    onNextDayClick,
    onCalendarDateSelect,
    onViewChange,
    onTodayClick,
    ...otherProps
}: ScheduleHeaderProps) => {
    const viewOptions: Array<{ label: string; value: ScheduleView }> = [
        { label: "Day", value: "day" },
        { label: "Week", value: "week" },
    ];
    const selectedViewOption = viewOptions.find(
        (option) => option.value === view
    );

    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["md-max"]({ theme });
    const isMobile = useMediaQuery({
        maxWidth: mobileBreakpoint,
    });

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
        <ScheduleHeaderWrapper {...otherProps}>
            <LeftSection $isMobile={isMobile}>
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
                    $isMobile={isMobile}
                />
            </LeftSection>

            {showViewSelector && (
                <RightSection>
                    <StyledText>View by:</StyledText>
                    <InputSelect
                        options={viewOptions}
                        selectedOption={selectedViewOption}
                        onSelectOption={(option) =>
                            onViewChange?.(option.value)
                        }
                        listExtractor={(option) => option.label}
                        displayValueExtractor={(option) => option.label}
                        dropdownWidth={DROPDOWN_WIDTH}
                    />
                </RightSection>
            )}
        </ScheduleHeaderWrapper>
    );
};
