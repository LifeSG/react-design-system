import { useSpring } from "@react-spring/web";
import dayjs, { Dayjs } from "dayjs";
import isEmpty from "lodash/isEmpty";
import maxBy from "lodash/maxBy";
import minBy from "lodash/minBy";
import React, { useMemo, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { VisuallyHidden } from "../shared/accessibility";
import { InternalCalendarProps } from "../shared/internal-calendar";
import { CellStyleProps, DayCell } from "../shared/internal-calendar/day-cell";
import { Colour } from "../theme";
import { TimeSlot } from "../time-slot-bar/types";
import { DateHelper } from "../util";
import { CalendarHelper } from "../util/calendar-helper";
import { StringHelper } from "../util/string-helper";
import { TimeHelper } from "../util/time-helper";
import {
    CellWeekText,
    ChevronIcon,
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
import { TimeSlotCellsVariant } from "./types";

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
    isActualSlot?: boolean | undefined;
    rowIndex?: number | undefined;
}

interface FocusableSlotMeta {
    key: string;
    date: string;
    rowIndex: number;
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
    const slotButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
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
        onSlotClick?.(date, slot);
    };

    const handleSlotButtonClick =
        (date: string, slot: TimeSlot) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();

            if (slot.clickable ?? true) {
                handleSlotClick(date, slot);
            }
        };

    const handleExpandCollapseClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setExpandAll((prevExpandValue) => !prevExpandValue);
    };

    const getCellsForDate = (formattedDate: string) => {
        return (
            generatedDaySlots[formattedDate] ??
            Array(variant === "flexible" ? numberOfCells : 1)
                .fill(undefined)
                .map((_, index) =>
                    generateFallbackCell(
                        index,
                        variant === "fixed" ? numberOfCells : undefined
                    )
                )
        );
    };

    const getFocusableSlotsForDate = (
        formattedDate: string
    ): FocusableSlotMeta[] => {
        return getCellsForDate(formattedDate)
            .filter(
                (
                    slot
                ): slot is TimeSlotCell & {
                    isActualSlot: true;
                    rowIndex: number;
                } => !!slot.isActualSlot && slot.rowIndex !== undefined
            )
            .map((slot) => ({
                key: `${formattedDate}-${slot.id}`,
                date: formattedDate,
                rowIndex: slot.rowIndex,
            }))
            .sort((a, b) => a.rowIndex - b.rowIndex);
    };

    const handleSlotKeyDown = (
        event: React.KeyboardEvent<HTMLButtonElement>,
        currentSlot: FocusableSlotMeta
    ) => {
        const sameColumnSlots = getFocusableSlotsForDate(currentSlot.date);

        const focusSlot = (slot?: FocusableSlotMeta) => {
            if (!slot) return;
            slotButtonRefs.current[slot.key]?.focus();
        };

        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown": {
                event.preventDefault();
                const currentIndex = sameColumnSlots.findIndex(
                    (slot) => slot.key === currentSlot.key
                );
                focusSlot(sameColumnSlots[currentIndex + 1]);
                break;
            }
            case "ArrowLeft":
            case "ArrowUp": {
                event.preventDefault();
                const currentIndex = sameColumnSlots.findIndex(
                    (slot) => slot.key === currentSlot.key
                );
                focusSlot(sameColumnSlots[currentIndex - 1]);
                break;
            }
            case "Home":
                event.preventDefault();
                focusSlot(sameColumnSlots[0]);
                break;
            case "End":
                event.preventDefault();
                focusSlot(sameColumnSlots[sameColumnSlots.length - 1]);
                break;
            case "PageUp":
                event.preventDefault();
                focusSlot(sameColumnSlots[0]);
                break;
            case "PageDown": {
                event.preventDefault();
                const hasCollapsedContent =
                    !!maxVisibleCellHeight &&
                    actualHeight > maxVisibleCellHeight;
                if (hasCollapsedContent && !expandAll) {
                    setExpandAll(true);
                    const visibleRowCount = Math.max(
                        1,
                        Math.floor((maxVisibleCellHeight + 4) / 16)
                    );
                    const lastVisibleSlot = [...sameColumnSlots]
                        .reverse()
                        .find((slot) => slot.rowIndex < visibleRowCount);
                    focusSlot(lastVisibleSlot ?? sameColumnSlots[0]);
                    break;
                }

                focusSlot(sameColumnSlots[sameColumnSlots.length - 1]);
                break;
            }
            default:
                break;
        }
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
        cellLength = 1,
        startTime = "",
        endTime = ""
    ): TimeSlotCell {
        return {
            id: `${prefix.toString()}-${new Date().getTime()}`,
            startTime,
            endTime,
            clickable: false,
            isActualSlot: false,
            styleAttributes: {
                backgroundColor: Colour["bg-stronger"],
            },
            cellLength,
        };
    }

    function getSlotAriaLabel(date: string, slot: TimeSlot) {
        const { startTime: slotStartTime, endTime: slotEndTime } = slot;

        return StringHelper.joinNonEmptyStrings([
            dayjs(date).format("D MMMM YYYY dddd"),
            slotStartTime && slotEndTime
                ? TimeHelper.formatTimeRange(slotStartTime, slotEndTime)
                : undefined,
            slot.label,
        ]);
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
                        isActualSlot: true,
                        rowIndex: Math.floor(startIndex),
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
                            isActualSlot: true,
                            rowIndex: Math.floor(startIndex + i),
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
            <HeaderCellWeekColumn role="row">
                {currentCalendarWeek.map((day, dayIndex) => {
                    const dayCellStyleProps = generateStyleProps(day);

                    return (
                        <DayCell
                            key={`day-${dayIndex}`}
                            date={day}
                            calendarDate={dayjs(selectedDate)}
                            role="columnheader"
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
            <Expandable style={expandableStyles} role="row">
                <ColumnWeekCell
                    ref={cellsRef}
                    key={`week-cell-${calendarDate.format(dateFormat)}`}
                >
                    {currentCalendarWeek.map((day, dayIndex) => {
                        const formattedDate = day.format(dateFormat);
                        const cellsArray = getCellsForDate(formattedDate);
                        return (
                            <TimeSlotWrapper
                                key={`wrapper-${dayIndex}`}
                                role="gridcell"
                            >
                                {cellsArray.map((slot) => {
                                    const {
                                        id,
                                        clickable = true,
                                        isActualSlot,
                                        styleAttributes,
                                        cellLength,
                                        halfFill,
                                    } = slot;
                                    const {
                                        styleType = "default",
                                        backgroundColor,
                                        backgroundColor2,
                                    } = styleAttributes;
                                    const slotKey = `${formattedDate}-${id}`;
                                    const slotStateId = `${slotKey}-state`;
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
                                        >
                                            {isActualSlot && (
                                                <VisuallyHidden>
                                                    <span id={slotStateId}>
                                                        {clickable
                                                            ? "Available"
                                                            : "Unavailable"}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        ref={(element) => {
                                                            slotButtonRefs.current[
                                                                slotKey
                                                            ] = element;
                                                        }}
                                                        aria-disabled={
                                                            !clickable
                                                        }
                                                        aria-describedby={
                                                            slotStateId
                                                        }
                                                        aria-label={getSlotAriaLabel(
                                                            formattedDate,
                                                            slot
                                                        )}
                                                        onKeyDown={(event) =>
                                                            handleSlotKeyDown(
                                                                event,
                                                                {
                                                                    key: slotKey,
                                                                    date: formattedDate,
                                                                    rowIndex:
                                                                        slot.rowIndex ??
                                                                        0,
                                                                }
                                                            )
                                                        }
                                                        onClick={handleSlotButtonClick(
                                                            formattedDate,
                                                            slot
                                                        )}
                                                    />
                                                </VisuallyHidden>
                                            )}
                                        </TimeSlotComponent>
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
        <Wrapper role="grid">
            {renderHeader()}
            {renderWeek()}
            {renderTimeColumn()}
            {renderTimeSlotBarCells()}
            {renderCollapseExpandAll()}
        </Wrapper>
    );
};
