import dayjs from "dayjs";
import { ScheduleEntityProps } from "../types";
import { SlotLayoutMap, SlotWithService } from "./types";
/**
 * Get all slots that START in a specific time cell
 */
export declare const getSlotsStartingInTimeCell: (serviceData: ScheduleEntityProps[], targetDate: string, cellStartTime: string, cellEndTime: string) => SlotWithService[];
/**
 * Get all slots that OVERLAP with a specific time cell (for layout calculation)
 */
export declare const getSlotsInTimeCell: (serviceData: ScheduleEntityProps[], targetDate: string, cellStartTime: string, cellEndTime: string) => SlotWithService[];
/**
 * Calculate and update slot widths across all cells
 */
export declare const calculateSlotWidths: (serviceData: ScheduleEntityProps[], weekDays: dayjs.Dayjs[], timeSlots: string[]) => SlotLayoutMap;
/**
 * Get minimum width for all slots overlapping a specific cell
 */
export declare const getMinimumWidthForCell: (slotsInCell: SlotWithService[], slotLayoutMap: SlotLayoutMap) => number;
/**
 * Calculate cell service layout information
 */
export declare const calculateCellServiceLayout: (visibleSlots: SlotWithService[], hiddenSlots: SlotWithService[]) => {
    allServices: string[];
    visibleServices: string[];
    hiddenServices: string[];
    totalServices: number;
    hasOverflow: boolean;
    totalColumns: number;
};
