import { TimeSlotRowCellData, TimeSlotRowData } from "../types";

export interface TimeSlotWeekViewProps {
    date: string;
    rowData: TimeSlotRowData[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string;
    onSlotClick?: (data: TimeSlotRowCellData, e: React.MouseEvent) => void;
}

// Types for better code organization
export type SlotWithService = TimeSlotRowCellData & { serviceName: string };
export type ActiveSlot = { slot: SlotWithService; column: number };
export type ActiveSlotsMap = Map<string, ActiveSlot>;
