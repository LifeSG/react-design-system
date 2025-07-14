import { SchedulerRowData } from "../types";

export interface SchedulerWeekViewProps {
    date: string;
    rowData: SchedulerRowData[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    emptyContentMessage: string;
    onSlotClick?: ((data: any, e: React.MouseEvent) => void) | undefined;
}
