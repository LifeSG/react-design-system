import dayjs, { Dayjs } from "dayjs";
import React, { useMemo, useState } from "react";
import { InternalCalendarProps } from "../shared/internal-calendar";
import { CellStyleProps, DayCell } from "../shared/internal-calendar/day-cell";
import { Colour } from "../theme";
import { TimeSlot } from "../time-slot-bar/types";
import { CalendarHelper } from "../util/calendar-helper";
import {
    CellWeekText,
    CollapseExpandAllButton,
    CollapseExpandAllWrapper,
    ColumnWeekCell,
    Expandable,
    HeaderCellWeek,
    HeaderCellWeekColumn,
    TimeColumn,
    TimeColumnText,
    TimeColumnWrapper,
    TimeSlotComponent,
    TimeSlotWrapper,
    Wrapper,
} from "./time-slot-bar-week-days.style";
import { DateHelper } from "../util";
import { TimeSlotCellsVariant } from "./types";
import { ChevronIcon } from "./time-slot-bar-week-days.style";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import isEmpty from "lodash/isEmpty";
import minBy from "lodash/minBy";
import maxBy from "lodash/maxBy";

export type DayVariant = "default" | "other-month" | "today";
interface TimeSlotWeekDaysProps
    extends Pick<
        InternalCalendarProps,
        "disabledDates" | "minDate" | "maxDate"
    > {
    selectedDate: string | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    slots: { [date: string]: TimeSlot[] };
    startTime?: string | undefined;
    endTime?: string | undefined;
    maxVisibleCellHeight?: number | undefined;
    interval?: number | undefined;
    variant?: TimeSlotCellsVariant | undefined;
    enableSelection?: boolean | undefined;
    onSlotClick?: ((date: string, timeSlot: TimeSlot) => void) | undefined;
}

interface TimeSlotCell extends TimeSlot {
    cellLength: number;
    halfFill?: "top" | "bottom" | undefined;
}

export const TimeSlotBarWeekDays = ({
    calendarDate,
    disabledDates,
    selectedDate,
    onSelect,
    minDate,
    maxDate,
    startTime,
    endTime,
    maxVisibleCellHeight,
    slots: daySlots,
    interval = 30,
    variant = "flexible",
    enableSelection = true,
    onSlotClick,
}: TimeSlotWeekDaysProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const dateFormat = "YYYY-MM-DD";
    const [expandAll, setExpandAll] = useState<boolean>(false);
    const [hoverDay, setHoverDay] = useState<Dayjs>();
    const currentCalendarWeek = useMemo((): Dayjs[] => {
        return CalendarHelper.generateDaysForCurrentWeek(calendarDate);
    }, [calendarDate]);

    const flattenedSlots = Object.values(daySlots ?? {}).flat();
    const minStartTime =
        startTime ?? minBy(flattenedSlots, "startTime")?.startTime ?? "00:00";
    const maxEndTime =
        endTime ?? maxBy(flattenedSlots, "endTime")?.endTime ?? "24:00";
    const numberOfCells = Math.ceil(
        DateHelper.getTimeDiffInMinutes(minStartTime, maxEndTime) / interval
    );

    // React spring animation configuration
    const { height: actualHeight = 0, ref: cellsRef } = useResizeDetector();
    const height = maxVisibleCellHeight
        ? actualHeight < maxVisibleCellHeight || expandAll
            ? actualHeight
            : maxVisibleCellHeight
        : actualHeight;
    const expandableStyles = useSpring({ height });

    const generatedDaySlots = useMemo((): {
        [date: string]: TimeSlotCell[];
    } => {
        if (daySlots) {
            const transformedDaySlots: Record<string, TimeSlotCell[]> = {};
            Object.entries(daySlots).forEach(([key, slots]) => {
                const cellsArray = initializeAndFillSlots(slots);
                transformedDaySlots[key] = populateEmptyCells(cellsArray);
            });
            return transformedDaySlots;
        }
        return {};
    }, [daySlots]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled || !enableSelection) return;

        onSelect(value);
    };

    const handleDayHover = (value: Dayjs) => {
        setHoverDay(value);
    };

    const handleDayMouseout = () => {
        setHoverDay(undefined);
    };

    const handleSlotClick = (date: string, slot: TimeSlot) => {
        onSlotClick && onSlotClick(date, slot);
    };

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setExpandAll((prevExpandValue) => !prevExpandValue);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined
        );

        const isDisabledDate =
            (disabledDates && disabledDates.includes(day.format(dateFormat))) ??
            false;

        return !isWithinRange || isDisabledDate;
    };

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format(dateFormat);
        const disabled = isDisabled(day);
        const dayCellStyleProps: CellStyleProps = {};
        const isHoverEnabled = enableSelection && !disabled;

        if (disabled) {
            dayCellStyleProps.disabled = true;
        }

        dayCellStyleProps.interactive = !enableSelection
            ? null
            : isHoverEnabled;

        const isHover =
            isHoverEnabled && hoverDay && day.isSame(hoverDay, "day");
        const isSelected = [selectedDate].includes(dateStartWithYear);

        if (isSelected && isHover) {
            dayCellStyleProps.labelType = "selected-hover";
            dayCellStyleProps.circleLeft = "selected-hover-outline";
            dayCellStyleProps.circleRight = "selected-hover-outline";
        } else if (isSelected) {
            dayCellStyleProps.labelType = "selected";
            dayCellStyleProps.circleLeft = "selected-outline";
            dayCellStyleProps.circleRight = "selected-outline";
        } else if (isHover) {
            dayCellStyleProps.labelType = "hover";
            dayCellStyleProps.circleLeft = "hover-subtle";
            dayCellStyleProps.circleRight = "hover-subtle";
        }

        return dayCellStyleProps;
    };

    function generateFallbackCell(
        prefix: string | number,
        cellLength = 1
    ): TimeSlotCell {
        return {
            id: `${prefix.toString()}-${new Date().getTime()}`,
            startTime: "",
            endTime: "",
            clickable: false,
            styleAttributes: {
                backgroundColor: Colour["bg-stronger"],
            },
            cellLength,
        };
    }

    function initializeAndFillSlots(slots: TimeSlot[]): TimeSlotCell[] {
        const cellsArray = Array(numberOfCells).fill({});

        slots.forEach((slot) => {
            const startIndex = Math.max(
                0,
                DateHelper.getTimeDiffInMinutes(minStartTime, slot.startTime) /
                    interval
            );
            const endIndex = Math.min(
                numberOfCells,
                DateHelper.getTimeDiffInMinutes(minStartTime, slot.endTime) /
                    interval
            );
            const cellLength = Math.ceil(endIndex) - Math.floor(startIndex);

            switch (variant) {
                case "fixed":
                    // Keep fixed slots as 1 long cell
                    cellsArray[Math.floor(startIndex)] = {
                        ...slot,
                        cellLength: endIndex - startIndex,
                    };
                    break;
                case "flexible":
                    // Split long slot into multiple cells of length 1
                    for (let i = 0; i < cellLength; i++) {
                        const startTime = DateHelper.addMinutesToTime(
                            minStartTime,
                            Math.floor(startIndex + i) * interval
                        );
                        const endTime = DateHelper.addMinutesToTime(
                            startTime,
                            interval
                        );

                        let halfFill: string | undefined;

                        if (!isEmpty(cellsArray[Math.floor(startIndex + i)])) {
                            // Previous cell extends into current cell, fill entire cell
                            halfFill = undefined;
                        } else if (i === 0 && startIndex % 1 !== 0) {
                            halfFill = "top";
                        } else if (i === cellLength - 1 && endIndex % 1 !== 0) {
                            halfFill = "bottom";
                        }

                        cellsArray[Math.floor(startIndex + i)] = {
                            ...slot,
                            id: `${slot.id}-${i}`,
                            startTime,
                            endTime,
                            cellLength: 1,
                            halfFill,
                        };
                    }
                    break;
            }
        });
        return cellsArray;
    }

    function populateEmptyCells(cellsArray: any[]): TimeSlotCell[] {
        let i = 0;
        switch (variant) {
            case "fixed":
                // Truncate consecutive empty cells into 1 [{},{},{...},{},{}] -> [{},{...},{}]
                cellsArray = cellsArray.reduce(
                    (result, obj) => {
                        const lastObj =
                            result.length > 0
                                ? result[result.length - 1]
                                : result[0];
                        if (isEmpty(obj) && isEmpty(lastObj)) {
                            return result;
                        }
                        return [...result, obj];
                    },
                    [{}]
                );

                // Fill in empty cells with timings & corresponding cell lengths
                while (i < cellsArray.length) {
                    if (isEmpty(cellsArray[i])) {
                        const startTime =
                            cellsArray[i - 1]?.endTime ?? minStartTime;
                        const endTime =
                            cellsArray[i + 1]?.startTime ?? maxEndTime;
                        if (startTime !== endTime) {
                            const cellLength =
                                DateHelper.getTimeDiffInMinutes(
                                    startTime,
                                    endTime
                                ) / interval;
                            cellsArray[i] = {
                                ...generateFallbackCell(i),
                                startTime,
                                endTime,
                                cellLength,
                            };
                        }
                    }
                    i++;
                }
                break;
            case "flexible":
                // Fill in individual empty cell with interval timings
                while (i < cellsArray.length) {
                    if (isEmpty(cellsArray[i])) {
                        cellsArray[i] = generateFallbackCell(i);
                        i++;
                    } else {
                        i += cellsArray[i].cellLength;
                    }
                }
                break;
        }
        return cellsArray.filter(
            (slot) => !isEmpty(slot) && slot.cellLength > 0
        );
    }

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderWeek = () => {
        return (
            <HeaderCellWeekColumn>
                {currentCalendarWeek.map((day, index) => (
                    <HeaderCellWeek key={`week-day-${index}`}>
                        <CellWeekText
                            weight={"semibold"}
                            $disabled={isDisabled(day)}
                        >
                            {dayjs(day).format("ddd")}
                        </CellWeekText>
                    </HeaderCellWeek>
                ))}
            </HeaderCellWeekColumn>
        );
    };

    const renderHeader = () => {
        return (
            <HeaderCellWeekColumn>
                {currentCalendarWeek.map((day, dayIndex) => {
                    const dayCellStyleProps = generateStyleProps(day);

                    return (
                        <DayCell
                            key={`day-${dayIndex}`}
                            date={day}
                            calendarDate={dayjs(selectedDate)}
                            onSelect={() => {
                                handleDayClick(
                                    day,
                                    !dayCellStyleProps.interactive
                                );
                            }}
                            onHover={handleDayHover}
                            onHoverEnd={handleDayMouseout}
                            {...dayCellStyleProps}
                        ></DayCell>
                    );
                })}
            </HeaderCellWeekColumn>
        );
    };

    const renderTimeColumn = () => {
        let hasSetFirstAfternoonHour = false;

        const formatTime = (index: number) => {
            const parsedTime = dayjs(minStartTime, "HH:mm").add(
                index * 4 * interval,
                "minutes"
            );
            const hour = parsedTime.format("h");
            const minutes = parsedTime.format("mm");
            const amPm = parsedTime.format("a");

            let formattedTime = `${hour}${
                minutes !== "00" ? ` ${minutes}` : ""
            }`;

            if (
                !hasSetFirstAfternoonHour &&
                amPm === "pm" &&
                minutes === "00"
            ) {
                formattedTime += ` ${amPm}`;
                hasSetFirstAfternoonHour = true;
            }

            return formattedTime;
        };

        return (
            <TimeColumn $height={height}>
                {Array(Math.ceil(numberOfCells / 4))
                    .fill(undefined)
                    .map((_, index) => (
                        <TimeColumnWrapper key={`time-${index}`}>
                            <TimeColumnText>{formatTime(index)}</TimeColumnText>
                        </TimeColumnWrapper>
                    ))}
            </TimeColumn>
        );
    };

    const renderTimeSlotBarCells = () => {
        return (
            <Expandable style={expandableStyles}>
                <ColumnWeekCell
                    ref={cellsRef}
                    key={`week-cell-${calendarDate.format(dateFormat)}`}
                >
                    {currentCalendarWeek.map((day, dayIndex) => {
                        const formattedDate = day.format(dateFormat);
                        const cellsArray =
                            generatedDaySlots[formattedDate] ??
                            Array(variant === "flexible" ? numberOfCells : 1)
                                .fill(undefined)
                                .map((_, index) =>
                                    generateFallbackCell(
                                        index,
                                        variant === "fixed"
                                            ? numberOfCells
                                            : undefined
                                    )
                                );
                        return (
                            <TimeSlotWrapper key={`wrapper-${dayIndex}`}>
                                {cellsArray.map((slot) => {
                                    const {
                                        id,
                                        clickable = true,
                                        styleAttributes,
                                        cellLength,
                                        halfFill,
                                    } = slot;
                                    const {
                                        styleType = "default",
                                        backgroundColor,
                                        backgroundColor2,
                                    } = styleAttributes;
                                    return (
                                        <TimeSlotComponent
                                            $type="vertical"
                                            $variant="default"
                                            key={id}
                                            $styleType={styleType}
                                            $bgColor={backgroundColor}
                                            $bgColor2={backgroundColor2}
                                            $halfFill={halfFill}
                                            $clickable={clickable}
                                            $height={
                                                variant === "fixed"
                                                    ? cellLength * 12 +
                                                      (cellLength - 1) * 4
                                                    : 12
                                            }
                                            onClick={() =>
                                                clickable &&
                                                handleSlotClick(
                                                    formattedDate,
                                                    slot
                                                )
                                            }
                                        ></TimeSlotComponent>
                                    );
                                })}
                            </TimeSlotWrapper>
                        );
                    })}
                </ColumnWeekCell>
            </Expandable>
        );
    };

    const renderCollapseExpandAll = () => {
        if (
            !maxVisibleCellHeight ||
            !cellsRef.current ||
            (actualHeight && actualHeight < maxVisibleCellHeight)
        )
            return;
        return (
            <CollapseExpandAllWrapper>
                <CollapseExpandAllButton
                    data-testid="time-bar-expand-collapse-button"
                    styleType="light"
                    onClick={handleExpandCollapseClick}
                >
                    <ChevronIcon $isExpanded={expandAll} />
                    {`${expandAll ? "Hide" : "Show"} later times`}
                </CollapseExpandAllButton>
            </CollapseExpandAllWrapper>
        );
    };

    return (
        <Wrapper>
            {renderHeader()}
            {renderWeek()}
            {renderTimeColumn()}
            {renderTimeSlotBarCells()}
            {renderCollapseExpandAll()}
        </Wrapper>
    );
};
