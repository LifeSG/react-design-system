import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { TimeSlotWeekViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { TimeIndicator } from "../time-indicator";
import { SchedulerRowCellData, SchedulerRowData } from "../types";
import {
    SlotCell,
    Timeline,
} from "../timeslot-day-view/timeslot-day-view.styles";
import {
    HeaderContainer,
    TimeSlotContainer,
    ServiceContainer,
    BlankCell,
    BodyContainer,
    SlotGrid,
    LoadingContainer,
    SlotRowContainer,
    SlotColumn,
    ServiceHeader,
    Title,
    Description,
    MoreButton,
    SlotContent,
} from "./timeslot-week-view.styles";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";
import { CELL_HEIGHT, SLOT_INTERVAL } from "../const";

// Constants for slot positioning
const SLOT_WIDTH = 30;
const SLOT_GAP = 2;
const MAX_VISIBLE_SLOTS = 3;

function getTimelineOffset(minTime: string, maxTime: string) {
    const now = dayjs();
    const min = dayjs(now.format("YYYY-MM-DD") + " " + minTime);
    const max = dayjs(now.format("YYYY-MM-DD") + " " + maxTime);
    if (now.isBefore(min) || now.isAfter(max)) return null;
    const minutesSinceMin = now.diff(min, "minute");
    const totalMinutes = max.diff(min, "minute");
    const totalHeight = (totalMinutes / SLOT_INTERVAL) * CELL_HEIGHT;
    const offset = (minutesSinceMin / totalMinutes) * totalHeight;
    return offset;
}

// Types for better code organization
type SlotWithService = SchedulerRowCellData & { serviceName: string };
type ActiveSlot = { slot: SlotWithService; column: number };
type ActiveSlotsMap = Map<string, ActiveSlot>;

// Helper function to convert time string to minutes since midnight
function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

// Helper function to get all slots for a specific day
function getSlotsForDay(
    rowData: SchedulerRowData[],
    targetDate: string
): SlotWithService[] {
    const allSlots: SlotWithService[] = [];

    rowData.forEach((row) => {
        if (row.rowCells) {
            row.rowCells.forEach((cell) => {
                if (cell.date === targetDate) {
                    allSlots.push({
                        ...cell,
                        serviceName: row.name,
                    });
                }
            });
        }
    });

    return allSlots;
}

// Helper function to get slots that should be visible in a specific time slot
function getSlotsForTimeSlot(
    allSlots: SlotWithService[],
    currentTime: string,
    nextTime: string,
    activeSlots: ActiveSlotsMap
): {
    visibleSlots: ActiveSlot[];
    newActiveSlots: ActiveSlotsMap;
} {
    const currentMinutes = timeToMinutes(currentTime);
    const nextMinutes = timeToMinutes(nextTime);

    // Copy active slots to new map
    const newActiveSlots = new Map(activeSlots);

    // Remove slots that have ended
    for (const [slotId, { slot }] of newActiveSlots) {
        if (timeToMinutes(slot.endTime) <= currentMinutes) {
            newActiveSlots.delete(slotId);
        }
    }

    // Add new slots that start in this time period
    const newSlots = allSlots.filter((slot) => {
        const slotStart = timeToMinutes(slot.startTime);
        const slotKey = slot.id || `${slot.startTime}-${slot.endTime}`;
        return (
            slotStart >= currentMinutes &&
            slotStart < nextMinutes &&
            !newActiveSlots.has(slotKey)
        );
    });

    // Find available column for slot positioning
    newSlots.forEach((slot) => {
        const usedColumns = Array.from(newActiveSlots.values()).map(
            (s) => s.column
        );
        let column = 0;
        while (usedColumns.includes(column)) {
            column++;
        }
        newActiveSlots.set(slot.id || `${slot.startTime}-${slot.endTime}`, {
            slot,
            column,
        });
    });

    // Return only the NEW slots that started in this time period for display
    // (not the continuing slots from previous time periods)
    const visibleSlots = newSlots
        .map((slot) => {
            const slotKey = slot.id || `${slot.startTime}-${slot.endTime}`;
            return newActiveSlots.get(slotKey)!;
        })
        .sort((a, b) => a.column - b.column);

    return { visibleSlots, newActiveSlots };
}

export const TimeSlotWeekView = ({
    date,
    rowData,
    loading,
    minTime,
    maxTime,
    onSlotClick,
}: TimeSlotWeekViewProps) => {
    const [timelineOffset, setTimelineOffset] = useState<number | null>(null);
    const today = dayjs().format("YYYY-MM-DD");

    useEffect(() => {
        function updateOffset() {
            setTimelineOffset(getTimelineOffset(minTime, maxTime));
        }
        updateOffset();
        const interval = setInterval(updateOffset, 15 * 60 * 1000); // every 15 mins
        return () => clearInterval(interval);
    }, [minTime, maxTime]);

    const weekDays = React.useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);

    // Render header with day names and dates
    const renderHeader = () => (
        <HeaderContainer>
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

    // Render slot content for a specific time slot
    const renderSlotContent = (
        visibleSlots: ActiveSlot[],
        onSlotClick?: (data: any, e: React.MouseEvent) => void
    ) => (
        <>
            {visibleSlots
                .slice(0, MAX_VISIBLE_SLOTS)
                .map(({ slot, column }) => {
                    const startMinutes = timeToMinutes(slot.startTime);
                    const endMinutes = timeToMinutes(slot.endTime);
                    const durationMinutes = endMinutes - startMinutes;
                    const durationSlots = durationMinutes / SLOT_INTERVAL;

                    return (
                        <SlotContent
                            key={slot.id}
                            status={slot.status}
                            duration={durationMinutes}
                            $column={column}
                            $slotWidth={SLOT_WIDTH}
                            $slotGap={SLOT_GAP}
                            $durationSlots={durationSlots}
                            onClick={(e) => onSlotClick?.(slot, e)}
                            title={`${slot.serviceName}\n${slot.startTime} - ${slot.endTime}`}
                        >
                            {slot.serviceName.charAt(0).toUpperCase()}
                        </SlotContent>
                    );
                })}
            {visibleSlots.length > MAX_VISIBLE_SLOTS && (
                <MoreButton
                    $left={MAX_VISIBLE_SLOTS * (SLOT_WIDTH + SLOT_GAP)}
                    $slotWidth={SLOT_WIDTH}
                    $slotGap={SLOT_GAP}
                    onClick={() => {
                        const remainingSlots =
                            visibleSlots.slice(MAX_VISIBLE_SLOTS);
                        console.log("Show more slots:", remainingSlots);
                    }}
                    title={`+${
                        visibleSlots.length - MAX_VISIBLE_SLOTS
                    } more services`}
                >
                    +{visibleSlots.length - MAX_VISIBLE_SLOTS}
                </MoreButton>
            )}
        </>
    );

    // Render the main slot grid
    const renderSlotGrid = () => (
        <SlotGrid>
            {weekDays.map((day) => {
                // Get all slots for this day
                const daySlots = getSlotsForDay(
                    rowData,
                    day.format("YYYY-MM-DD")
                );
                // Track active slots across time slots for this column
                let activeSlots: ActiveSlotsMap = new Map();

                return (
                    <SlotColumn key={day.format("YYYY-MM-DD")}>
                        {timelineOffset !== null &&
                            day.format("YYYY-MM-DD") === today && (
                                <Timeline $top={timelineOffset} />
                            )}
                        {timeSlots.map((time, slotIdx) => {
                            const nextTime = timeSlots[slotIdx + 1] || maxTime;
                            const { visibleSlots, newActiveSlots } =
                                getSlotsForTimeSlot(
                                    daySlots,
                                    time,
                                    nextTime,
                                    activeSlots
                                );
                            activeSlots = newActiveSlots;

                            return (
                                <SlotCell key={time} startTime={time}>
                                    <SlotRowContainer>
                                        {renderSlotContent(
                                            visibleSlots,
                                            onSlotClick
                                        )}
                                    </SlotRowContainer>
                                </SlotCell>
                            );
                        })}
                    </SlotColumn>
                );
            })}
        </SlotGrid>
    );

    return (
        <TimeSlotContainer>
            {loading ? (
                <LoadingContainer>
                    <ThemedLoadingSpinner />
                </LoadingContainer>
            ) : (
                <>
                    {renderHeader()}
                    <BodyContainer>
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                        />
                        {renderSlotGrid()}
                    </BodyContainer>
                </>
            )}
        </TimeSlotContainer>
    );
};
