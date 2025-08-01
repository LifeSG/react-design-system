import { SchedulePopoverProps, ScheduleRowData } from "../types";
import { ThemeStyleProps } from "../../theme/types";
import { RefObject } from "react";

export type SlotStyle = "default" | "stripes";

export interface ScheduleDayViewProps {
    date: string;
    rowData: ScheduleRowData[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string;
    isMobile: boolean;
    containerRef: RefObject<HTMLDivElement>;
    onNextService: () => void;
    onPrevService: () => void;
    showPrevArrow: boolean;
    showNextArrow: boolean;
    emptySlotPopover?: SchedulePopoverProps;
}
