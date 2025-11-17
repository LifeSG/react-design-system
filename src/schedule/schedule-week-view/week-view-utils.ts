import dayjs from "dayjs";
import { TimeHelper } from "../../util/time-helper";
import { ScheduleEntityProps } from "../types";
import { SlotLayoutMap, SlotWithService } from "./types";
import {
    findSlotsInTimeRange,
    findSlotsStartingInTimeRange,
    minutesToTime,
} from "../shared";

/**
 * Get all slots that START in a specific time cell
 */
export const getSlotsStartingInTimeCell = (
    serviceData: ScheduleEntityProps[],
    targetDate: string,
    cellStartTime: string,
    cellEndTime: string
): SlotWithService[] => {
    const allSlots: SlotWithService[] = [];

    serviceData.forEach((service) => {
        if (service.slots) {
            const slotsInRange = findSlotsStartingInTimeRange(
                service.slots,
                cellStartTime,
                cellEndTime,
                targetDate
            );

            slotsInRange.forEach((slot) => {
                allSlots.push({
                    ...slot,
                    serviceName: service.name,
                });
            });
        }
    });

    return allSlots;
};

/**
 * Get all slots that OVERLAP with a specific time cell (for layout calculation)
 */
export const getSlotsInTimeCell = (
    serviceData: ScheduleEntityProps[],
    targetDate: string,
    cellStartTime: string,
    cellEndTime: string
): SlotWithService[] => {
    const allSlots: SlotWithService[] = [];

    serviceData.forEach((service) => {
        if (service.slots) {
            const overlappingSlots = findSlotsInTimeRange(
                service.slots,
                cellStartTime,
                cellEndTime,
                targetDate
            );

            overlappingSlots.forEach((slot) => {
                allSlots.push({
                    ...slot,
                    serviceName: service.name,
                });
            });
        }
    });

    return allSlots;
};

/**
 * Calculate and update slot widths across all cells
 */
export const calculateSlotWidths = (
    serviceData: ScheduleEntityProps[],
    weekDays: dayjs.Dayjs[],
    timeSlots: string[]
): SlotLayoutMap => {
    const slotLayoutMap: SlotLayoutMap = {};

    weekDays.forEach((day) => {
        const dayDate = day.format("YYYY-MM-DD");
        timeSlots.forEach((time) => {
            const timeMinutes = TimeHelper.timeToMinutes(time);
            const nextTime = minutesToTime(timeMinutes + 30);
            const slotsInCell = getSlotsInTimeCell(
                serviceData,
                dayDate,
                time,
                nextTime
            );

            slotsInCell.forEach((slot) => {
                const slotKey = slot.id;
                if (!slotLayoutMap[slotKey]) {
                    slotLayoutMap[slotKey] = {
                        date: dayDate,
                        serviceName: slot.serviceName,
                        startTime: slot.startTime,
                        endTime: slot.endTime,
                        visible: true,
                        width: 100,
                    };
                }
            });

            const uniqueServices = Array.from(
                new Set(slotsInCell.map((slot) => slot.serviceName))
            );

            // Display at most 3 services, mark other slots as hidden
            const firstThreeServices = uniqueServices.slice(0, 3);
            slotsInCell.forEach((slot) => {
                const slotKey = slot.id;
                const isVisible = firstThreeServices.includes(slot.serviceName);
                if (!isVisible) {
                    slotLayoutMap[slotKey].visible = false;
                }
            });

            // Calculate width based on visible services only
            const visibleSlots = slotsInCell.filter((slot) => {
                const slotKey = slot.id;
                return slotLayoutMap[slotKey].visible;
            });

            const visibleServices = new Set(
                visibleSlots.map((slot) => slot.serviceName)
            );
            const totalVisibleServices = visibleServices.size;
            const hasHiddenServices = slotsInCell.length > visibleSlots.length;
            const totalColumns = hasHiddenServices ? 4 : totalVisibleServices;
            const widthPercentage = totalColumns > 0 ? 100 / totalColumns : 100;

            // Update width for each slot in this cell (take minimum across all cells)
            slotsInCell.forEach((slot) => {
                const slotKey = slot.id;
                slotLayoutMap[slotKey].width = Math.min(
                    slotLayoutMap[slotKey].width,
                    widthPercentage
                );
            });
        });
    });

    return slotLayoutMap;
};

/**
 * Get minimum width for all slots overlapping a specific cell
 */
export const getMinimumWidthForCell = (
    slotsInCell: SlotWithService[],
    slotLayoutMap: SlotLayoutMap
): number => {
    let minWidth = Number.MAX_SAFE_INTEGER;

    slotsInCell.forEach((slot) => {
        const slotKey = slot.id;
        const slotLayout = slotLayoutMap[slotKey];
        minWidth = Math.min(minWidth, slotLayout.width);
    });

    return minWidth;
};

/**
 * Calculate cell service layout information
 */
export const calculateCellServiceLayout = (
    visibleSlots: SlotWithService[],
    hiddenSlots: SlotWithService[]
) => {
    const visibleServices = Array.from(
        new Set(visibleSlots.map((slot) => slot.serviceName))
    );
    const hiddenServices = Array.from(
        new Set(hiddenSlots.map((slot) => slot.serviceName))
    );

    return {
        allServices: [...visibleServices, ...hiddenServices],
        visibleServices,
        hiddenServices,
        totalServices: visibleServices.length + hiddenServices.length,
        hasOverflow: hiddenServices.length > 0,
        totalColumns: hiddenServices.length > 0 ? 4 : visibleServices.length,
    };
};
