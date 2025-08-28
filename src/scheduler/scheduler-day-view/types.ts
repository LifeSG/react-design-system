import { SchedulerRowData } from "../types";

export interface SchedulerDayViewProps {
    date: string;
    rowData: SchedulerRowData[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    onSlotClick?: ((data: any, e: React.MouseEvent) => void) | undefined;
}
