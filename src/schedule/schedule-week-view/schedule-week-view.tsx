import React, { useMemo, useRef } from "react";
import dayjs from "dayjs";
import { ScheduleWeekViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { ScheduleRowData, ScheduleRowCellData } from "../types";
import { useTimelineOffset, useInitialScroll } from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import { CELL_HEIGHT } from "../const";
import {
    ScheduleContainer,
    SlotCell,
    Timeline,
    EmptySlot,
} from "../schedule-day-view/schedule-day-view.styles";
import {
    BlankCell,
    BodyContainer,
    Description,
    HeaderContainer,
    LoadingContainer,
    ServiceContainer,
    ServiceHeader,
    SlotColumn,
    SlotGrid,
    Title,
    SlotColumnOverlay,
    SlotContentWrapper,
    WeekSlotContent,
    SlotServiceName,
    SlotTime,
    HiddenColumnsButton,
} from "./schedule-week-view.styles";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";

const MAX_VISIBLE_SLOTS = 3;

// Extended slot type with service information
interface SlotWithService extends ScheduleRowCellData {
    serviceName: string;
}

// Slot with positioning information
interface PositionedSlot {
    slot: SlotWithService;
    column: number;
    offsetTop: number;
    height: number;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Calculate the number of 30-minute cells this slot spans across
const calculateSlotSpan = (startTime: string, endTime: string): number => {
    const startMinutes = TimeHelper.timeToMinutes(startTime);
    const endMinutes = TimeHelper.timeToMinutes(endTime);
    const durationMinutes = endMinutes - startMinutes;
    return Math.ceil(durationMinutes / 30);
};

// Calculate positioned slots with column assignments
const calculateSlotPositions = (
    slots: SlotWithService[],
    timeSlotStart: string,
    minTime: string
): PositionedSlot[] => {
    const minTimeMinutes = TimeHelper.timeToMinutes(minTime);
    const columns: { endTime: number; slots: PositionedSlot[] }[] = [];

    const positionedSlots: PositionedSlot[] = [];

    // Sort slots by start time, then by duration (shorter first for better packing)
    const sortedSlots = [...slots].sort((a, b) => {
        const aStart = TimeHelper.timeToMinutes(a.startTime);
        const bStart = TimeHelper.timeToMinutes(b.startTime);
        if (aStart !== bStart) return aStart - bStart;

        const aDuration = TimeHelper.timeToMinutes(a.endTime) - aStart;
        const bDuration = TimeHelper.timeToMinutes(b.endTime) - bStart;
        return aDuration - bDuration;
    });

    sortedSlots.forEach((slot) => {
        const slotStartMinutes = TimeHelper.timeToMinutes(slot.startTime);
        const slotEndMinutes = TimeHelper.timeToMinutes(slot.endTime);

        // Calculate offset from the very start of the schedule (minTime), not just this time cell
        const offsetTop =
            ((slotStartMinutes - minTimeMinutes) / 30) * CELL_HEIGHT;

        // Calculate full duration height
        const duration = slotEndMinutes - slotStartMinutes;
        const height = Math.max((duration / 30) * CELL_HEIGHT - 1, 20); // Minimum height for visibility

        // Find a column where this slot can fit (no time overlap with existing slots)
        let assignedColumn = -1;

        for (let i = 0; i < columns.length; i++) {
            // Check if this slot can fit in column i
            const canFit = columns[i].slots.every((existingSlot) => {
                const existingStart = TimeHelper.timeToMinutes(
                    existingSlot.slot.startTime
                );
                const existingEnd = TimeHelper.timeToMinutes(
                    existingSlot.slot.endTime
                );

                // No overlap if this slot ends before existing starts, or starts after existing ends
                return (
                    slotEndMinutes <= existingStart ||
                    slotStartMinutes >= existingEnd
                );
            });

            if (canFit) {
                assignedColumn = i;
                break;
            }
        }

        // If no existing column works, create a new one
        if (assignedColumn === -1) {
            assignedColumn = columns.length;
            columns.push({ endTime: slotEndMinutes, slots: [] });
        }

        const positionedSlot: PositionedSlot = {
            slot,
            column: assignedColumn,
            offsetTop,
            height,
        };

        columns[assignedColumn].slots.push(positionedSlot);
        positionedSlots.push(positionedSlot);
    });

    return positionedSlots;
};

// Check if a time slot is covered by any existing booking for a specific day
const isTimeSlotCovered = (
    rowData: ScheduleRowData[],
    targetDate: string,
    timeSlot: string
): boolean => {
    const timeSlotMinutes = TimeHelper.timeToMinutes(timeSlot);

    return rowData.some((row) => {
        return row.rowCells?.some((cell) => {
            if (cell.date !== targetDate) return false;

            const cellStartMinutes = TimeHelper.timeToMinutes(cell.startTime);
            const cellEndMinutes = TimeHelper.timeToMinutes(cell.endTime);

            return (
                timeSlotMinutes >= cellStartMinutes &&
                timeSlotMinutes < cellEndMinutes
            );
        });
    });
};

export const ScheduleWeekView = ({
    date,
    rowData,
    loading,
    minTime,
    maxTime,
    initialScrollTime,
    emptySlotPopover,
    containerRef,
}: ScheduleWeekViewProps) => {
    const timelineOffset = useTimelineOffset(minTime, maxTime);
    const bodyRef = useInitialScroll(loading, minTime, initialScrollTime);
    const headerRef = useRef<HTMLDivElement>(null);
    const today = dayjs().format("YYYY-MM-DD");

    const weekDays = useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    // Synchronize horizontal scrolling between header and body
    const handleBodyScroll = (_e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
        }
    };
    const handleHeaderScroll = (_e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    // Render header with day names and dates
    const renderHeader = () => (
        <HeaderContainer ref={headerRef} onScroll={handleHeaderScroll}>
            <BlankCell />
            <ServiceContainer>
                {weekDays.map((day) => (
                    <ServiceHeader key={day.format("YYYY-MM-DD")}>
                        <Title>{day.format("D")}</Title>
                        <Description>{day.format("ddd")}</Description>
                    </ServiceHeader>
                ))}
            </ServiceContainer>
        </HeaderContainer>
    );

    // Render individual slot content
    const renderSlotContent = (positionedSlot: PositionedSlot) => {
        const { slot, offsetTop, height } = positionedSlot;
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );

        return (
            <WeekSlotContent
                key={slot.id}
                status={slot.status}
                duration={duration}
                $offsetTop={offsetTop}
                $height={height}
                onClick={(e) => slot.onClick && slot.onClick(slot, e)}
                title={`${slot.serviceName}\n${slot.startTime} - ${slot.endTime}`}
            >
                <SlotServiceName>
                    {slot.serviceName.charAt(0).toUpperCase()}
                </SlotServiceName>
                <SlotTime>
                    {TimeHelper.parseInput(slot.startTime, "12hr")}
                </SlotTime>
            </WeekSlotContent>
        );
    };

    // Render the main slot grid
    const renderSlotGrid = () => (
        <SlotGrid>
            {timelineOffset !== null && <Timeline $top={timelineOffset} />}
            {weekDays.map((day) => {
                // Get all slots for this day (not just per time cell)
                const daySlots: SlotWithService[] = [];
                rowData.forEach((row) => {
                    if (row.rowCells) {
                        row.rowCells.forEach((cell) => {
                            if (cell.date === day.format("YYYY-MM-DD")) {
                                daySlots.push({
                                    ...cell,
                                    serviceName: row.name,
                                });
                            }
                        });
                    }
                });

                // Calculate positioning for all slots in this day
                const positionedSlots =
                    daySlots.length > 0
                        ? calculateSlotPositions(daySlots, minTime, minTime)
                        : [];

                // Group slots by column
                const columnMap = new Map<number, PositionedSlot[]>();
                positionedSlots.forEach((ps) => {
                    if (!columnMap.has(ps.column)) {
                        columnMap.set(ps.column, []);
                    }
                    columnMap.get(ps.column)!.push(ps);
                });

                const columns = Array.from(columnMap.entries()).sort(
                    ([a], [b]) => a - b
                );
                const visibleColumns = columns.slice(0, MAX_VISIBLE_SLOTS);

                return (
                    <SlotColumn key={day.format("YYYY-MM-DD")}>
                        {/* Render empty time cells for structure */}
                        {timeSlots.map((time) => (
                            <SlotCell key={time} startTime={time}>
                                {/* Only show empty slot popover for cells with no slots */}
                                {!isTimeSlotCovered(
                                    rowData,
                                    day.format("YYYY-MM-DD"),
                                    time
                                ) &&
                                    emptySlotPopover && (
                                        <WithOptionalPopover
                                            containerRef={
                                                containerRef as React.RefObject<HTMLDivElement>
                                            }
                                            customPopover={emptySlotPopover}
                                        >
                                            <EmptySlot />
                                        </WithOptionalPopover>
                                    )}
                            </SlotCell>
                        ))}

                        {/* Render slot columns positioned absolutely over the time grid */}
                        {visibleColumns.map(([columnIndex, columnSlots]) => (
                            <SlotColumnOverlay
                                key={`column-${columnIndex}`}
                                $columnIndex={columnIndex}
                                $totalVisibleColumns={visibleColumns.length}
                            >
                                {columnSlots.map(
                                    (positionedSlot, slotIndex) => {
                                        const popoverConfig =
                                            positionedSlot.slot.customPopover;
                                        return (
                                            <WithOptionalPopover
                                                key={`${positionedSlot.slot.id}-${slotIndex}`}
                                                containerRef={
                                                    containerRef as React.RefObject<HTMLDivElement>
                                                }
                                                customPopover={popoverConfig}
                                            >
                                                <SlotContentWrapper>
                                                    {renderSlotContent(
                                                        positionedSlot
                                                    )}
                                                </SlotContentWrapper>
                                            </WithOptionalPopover>
                                        );
                                    }
                                )}
                            </SlotColumnOverlay>
                        ))}

                        {/* Show +N button if there are hidden columns */}
                        {columns.length > MAX_VISIBLE_SLOTS && (
                            <HiddenColumnsButton
                                $visibleColumnsCount={visibleColumns.length}
                                onClick={() => {
                                    const hiddenSlots = columns
                                        .slice(MAX_VISIBLE_SLOTS)
                                        .flatMap(([, slots]) =>
                                            slots.map((ps) => ps.slot)
                                        );
                                    console.log(
                                        "Show more slots:",
                                        hiddenSlots
                                    );
                                }}
                                title={`+${
                                    columns.length - MAX_VISIBLE_SLOTS
                                } more column${
                                    columns.length - MAX_VISIBLE_SLOTS > 1
                                        ? "s"
                                        : ""
                                }`}
                            >
                                +{columns.length - MAX_VISIBLE_SLOTS}
                            </HiddenColumnsButton>
                        )}
                    </SlotColumn>
                );
            })}
        </SlotGrid>
    );

    return (
        <ScheduleContainer>
            {loading ? (
                <LoadingContainer>
                    <ThemedLoadingSpinner />
                </LoadingContainer>
            ) : (
                <>
                    {renderHeader()}
                    <BodyContainer ref={bodyRef} onScroll={handleBodyScroll}>
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                            timelineOffset={timelineOffset}
                        />
                        {renderSlotGrid()}
                    </BodyContainer>
                </>
            )}
        </ScheduleContainer>
    );
};
