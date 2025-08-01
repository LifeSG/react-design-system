import {
    ScheduleRowData,
    ScheduleRowCellData,
    SchedulePopoverProps,
} from "../types";

export interface ScheduleWeekViewProps {
    date: string;
    rowData: ScheduleRowData[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string;
    onSlotClick?: (data: ScheduleRowCellData, e: React.MouseEvent) => void;
    emptySlotPopover?: SchedulePopoverProps;
}

export type SlotWithService = ScheduleRowCellData & { serviceName: string };
export type ActiveSlot = { slot: SlotWithService; column: number };
export type ActiveSlotsMap = Map<string, ActiveSlot>;
