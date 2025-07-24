import React, { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { TimeSlotWeekViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { TimeIndicator } from "../time-indicator";
import {
    BlankCell,
    SlotCell,
    Timeline,
} from "../timeslot-day-view/timeslot-day-view.styles";
import {
    HeaderContainer,
    TimeSlotContainer,
    ServiceContainer,
    BodyContainer,
    SlotGrid,
    LoadingContainer,
    SlotBlock,
    SlotPlaceholder,
    SlotRowContainer,
    SlotColumn,
    ServiceHeader,
    Title,
    Description,
    MoreButton,
} from "./timeslot-week-view.styles";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";
import { CELL_HEIGHT, SLOT_INTERVAL } from "../const";

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

// Helper to calculate active slots for a given time slot
function getActiveSlots({
    slotIdx,
    activeSlotsCache,
    day,
    time,
    rowData,
}: {
    slotIdx: number;
    activeSlotsCache: Array<any[]>;
    day: any;
    time: string;
    rowData: any[];
}) {
    const intervalStart = dayjs(day.format("YYYY-MM-DD") + " " + time);
    let activeSlots: Array<any> =
        slotIdx === 0 ? [] : [...(activeSlotsCache[slotIdx - 1] || [])];
    // Remove slots that have ended
    activeSlots = activeSlots.filter((slot: any) => {
        const slotEnd = dayjs(slot.date + " " + slot.endTime);
        return slotEnd.isAfter(intervalStart);
    });
    // Add new slots starting at this time
    const newSlots = rowData
        .map((service) => {
            const slot = service.rowCells.find((s: any) => {
                if (!s.date || s.date !== day.format("YYYY-MM-DD"))
                    return false;
                const slotStart = dayjs(s.date + " " + s.startTime);
                return slotStart.isSame(intervalStart);
            });
            return slot ? { ...slot, service } : null;
        })
        .filter((slot): slot is any => Boolean(slot));
    // Deduplicate
    newSlots.forEach((newSlot) => {
        if (
            !activeSlots.some(
                (slot) =>
                    slot.id === newSlot.id ||
                    (slot.service.id === newSlot.service.id &&
                        slot.startTime === newSlot.startTime &&
                        slot.endTime === newSlot.endTime)
            )
        ) {
            activeSlots.push(newSlot);
        }
    });
    // Cache for next slot
    activeSlotsCache[slotIdx] = activeSlots;
    return activeSlots;
}

function renderSlotBlocks({
    visibleSlots,
    intervalStart,
    CELL_HEIGHT,
    SLOT_INTERVAL,
    onSlotClick,
    time,
}: {
    visibleSlots: any[];
    intervalStart: any;
    CELL_HEIGHT: number;
    SLOT_INTERVAL: number;
    onSlotClick: any;
    time: string;
}) {
    return visibleSlots.map((slot: any, idx: number) => {
        if (!slot) return null;
        const slotStart = dayjs(slot.date + " " + slot.startTime);
        if (slotStart.isSame(intervalStart)) {
            const slotEnd = dayjs(slot.date + " " + slot.endTime);
            const span = Math.ceil(
                slotEnd.diff(slotStart, "minute") / SLOT_INTERVAL
            );
            return (
                <SlotBlock
                    key={
                        slot.service.id +
                        "-" +
                        slot.startTime +
                        "-" +
                        slot.endTime
                    }
                    left={idx * 24}
                    height={span * CELL_HEIGHT - 2}
                    onClick={(e) => onSlotClick?.(slot, e)}
                >
                    {slot.service.name[8]}
                </SlotBlock>
            );
        } else {
            return (
                <SlotPlaceholder
                    key={slot.service.id + "-placeholder-" + time}
                />
            );
        }
    });
}

function renderMoreButton({
    hiddenCount,
    left,
    onClick,
}: {
    hiddenCount: number;
    left: number;
    onClick: () => void;
}) {
    if (hiddenCount > 0) {
        return (
            <MoreButton left={left} onClick={onClick}>
                +{hiddenCount} services
            </MoreButton>
        );
    }
    return null;
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
    const headerRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const today = dayjs().format("YYYY-MM-DD");

    useEffect(() => {
        function updateOffset() {
            setTimelineOffset(getTimelineOffset(minTime, maxTime));
        }
        updateOffset();
        const interval = setInterval(updateOffset, 15 * 60 * 1000); // every 15 mins
        return () => clearInterval(interval);
    }, [minTime, maxTime]);

    // Synchronize horizontal scrolling between header and body
    const handleBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
        }
    };

    const handleHeaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
        }
    };

    const weekDays = React.useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);

    function WeekViewSlotCell({
        time,
        slotIdx,
        day,
        rowData,
        CELL_HEIGHT,
        SLOT_INTERVAL,
        onSlotClick,
        activeSlotsCache,
    }: {
        time: string;
        slotIdx: number;
        day: any;
        rowData: any[];
        CELL_HEIGHT: number;
        SLOT_INTERVAL: number;
        onSlotClick: any;
        activeSlotsCache: Array<any[]>;
    }) {
        const intervalStart = dayjs(day.format("YYYY-MM-DD") + " " + time);
        const activeSlots = getActiveSlots({
            slotIdx,
            activeSlotsCache,
            day,
            time,
            rowData,
        });
        const visibleSlots = activeSlots.slice(0, 3);
        const hiddenCount = activeSlots.length - 3;
        return (
            <SlotCell
                key={time}
                startTime={time}
                style={{ position: "relative", height: CELL_HEIGHT }}
            >
                <SlotRowContainer>
                    {renderSlotBlocks({
                        visibleSlots,
                        intervalStart,
                        CELL_HEIGHT,
                        SLOT_INTERVAL,
                        onSlotClick,
                        time,
                    })}
                    {renderMoreButton({
                        hiddenCount,
                        left: visibleSlots.length * 24,
                        onClick: () => {
                            /* Show modal or expand list */
                        },
                    })}
                </SlotRowContainer>
            </SlotCell>
        );
    }

    return (
        <TimeSlotContainer>
            {loading ? (
                <LoadingContainer>
                    <ThemedLoadingSpinner />
                </LoadingContainer>
            ) : (
                <>
                    {/* Header Row: Day names and dates */}
                    <HeaderContainer
                        ref={headerRef}
                        onScroll={handleHeaderScroll}
                    >
                        <BlankCell />
                        <ServiceContainer>
                            {weekDays.map((day) => (
                                <ServiceHeader key={day.format("YYYY-MM-DD")}>
                                    <Title>{day.format("D")}</Title>
                                    <Description>
                                        {day.format("ddd")}
                                    </Description>
                                </ServiceHeader>
                            ))}
                        </ServiceContainer>
                    </HeaderContainer>

                    <BodyContainer ref={bodyRef} onScroll={handleBodyScroll}>
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                        />
                        <SlotGrid>
                            {weekDays.map((day) => {
                                // Create a cache for this column
                                const activeSlotsCache: Array<any[]> = [];
                                return (
                                    <SlotColumn key={day.format("YYYY-MM-DD")}>
                                        {timelineOffset !== null &&
                                            day.format("YYYY-MM-DD") ===
                                                today && (
                                                <Timeline
                                                    style={{
                                                        top: timelineOffset,
                                                    }}
                                                />
                                            )}
                                        {timeSlots.map((time, slotIdx) => (
                                            <WeekViewSlotCell
                                                key={time}
                                                time={time}
                                                slotIdx={slotIdx}
                                                day={day}
                                                rowData={rowData}
                                                CELL_HEIGHT={CELL_HEIGHT}
                                                SLOT_INTERVAL={SLOT_INTERVAL}
                                                onSlotClick={onSlotClick}
                                                activeSlotsCache={
                                                    activeSlotsCache
                                                }
                                            />
                                        ))}
                                    </SlotColumn>
                                );
                            })}
                        </SlotGrid>
                    </BodyContainer>
                </>
            )}
        </TimeSlotContainer>
    );
};
