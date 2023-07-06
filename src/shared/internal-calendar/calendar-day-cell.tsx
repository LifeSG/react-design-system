import { Dayjs } from "dayjs";
import { CommonCalendarProps, View } from "./types";
import { DayVariant } from "./internal-calendar-day";
import {
    DayLabel,
    GrowDayCell,
    InteractiveCircle,
    OverflowDisplay,
    StyleProps,
} from "./internal-calendar-day.style";
import {
    OverflowCircle,
    OverflowCircleProps,
    WeekDayLabel,
    WeekInteractiveCircle,
    WeekOverflowDisplay,
} from "./internal-week-selection-calendar-day.style";

type Type = "regular" | "week";

interface DayCellStyleProps {
    styleLeftProps: StyleProps;
    styleRightProps: StyleProps;
    styleCircleProps: StyleProps;
    styleLabelProps: StyleProps;
}

interface CommanCalendarDayCellProps
    extends CommonCalendarProps,
        DayCellStyleProps {
    dayDate: Dayjs;
    variant: DayVariant;
    type: Type;
    onDayClick: (value: Dayjs, isDisabled: boolean) => void;
    onHoverCell: (value: string, isDisabled: boolean) => void;
}

type ConditionProps =
    | {
          type: "regular";
          currentView?: never;
          styleOverflowCirleProps?: never;
      }
    | {
          type: "week";
          currentView: View;
          styleOverflowCirleProps: OverflowCircleProps;
      };

type CalendarDayCellProps = CommanCalendarDayCellProps & ConditionProps;

export const CalendarDayCell = ({
    type,
    dayDate,
    currentView,
    variant,
    styleLeftProps,
    styleRightProps,
    styleCircleProps,
    styleLabelProps,
    styleOverflowCirleProps,
    onDayClick,
    onHoverCell,
}: CalendarDayCellProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDayCells = () => {
        const formattedDay = dayDate.format("YYYY-MM-DD");

        switch (type) {
            case "regular":
                return (
                    <GrowDayCell>
                        <OverflowDisplay $position="left" {...styleLeftProps} />
                        <OverflowDisplay
                            $position="right"
                            {...styleRightProps}
                        />
                        <InteractiveCircle
                            $variant={variant}
                            onClick={() =>
                                onDayClick(
                                    dayDate,
                                    !styleCircleProps.$interactive
                                )
                            }
                            onMouseEnter={() =>
                                onHoverCell(
                                    formattedDay,
                                    !styleCircleProps.$interactive
                                )
                            }
                            {...styleCircleProps}
                        >
                            <DayLabel
                                weight={
                                    styleLabelProps["$selected"]
                                        ? "semibold"
                                        : "regular"
                                }
                                $variant={variant}
                                {...styleLabelProps}
                            >
                                {dayDate.format("D")}
                            </DayLabel>
                        </InteractiveCircle>
                    </GrowDayCell>
                );
            case "week":
                return (
                    <GrowDayCell>
                        <WeekOverflowDisplay
                            $position="left"
                            {...styleLeftProps}
                        />
                        <WeekOverflowDisplay
                            $position="right"
                            {...styleRightProps}
                        />
                        <WeekInteractiveCircle
                            $variant={variant}
                            onClick={() =>
                                onDayClick(
                                    dayDate,
                                    !styleCircleProps.$interactive
                                )
                            }
                            onMouseEnter={() =>
                                onHoverCell(
                                    formattedDay,
                                    !styleCircleProps.$interactive
                                )
                            }
                            {...styleCircleProps}
                            {...styleOverflowCirleProps}
                        >
                            <WeekDayLabel
                                weight={
                                    styleLabelProps["$selected"]
                                        ? "semibold"
                                        : "regular"
                                }
                                $variant={variant}
                                $view={currentView}
                                {...styleLabelProps}
                            >
                                {dayDate.format("D")}
                            </WeekDayLabel>
                        </WeekInteractiveCircle>
                        <OverflowCircle
                            {...styleCircleProps}
                            {...styleOverflowCirleProps}
                        />
                    </GrowDayCell>
                );
        }
    };

    return <>{renderDayCells()}</>;
};
