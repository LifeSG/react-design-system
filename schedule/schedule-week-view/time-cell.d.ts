import type { RefObject } from "react";
import type React from "react";
import type { ScheduleEntityProps } from "../types";
import type { SlotLayoutMap } from "./types";
interface TimeCellProps {
    dayDate: string;
    time: string;
    serviceData: ScheduleEntityProps[];
    slotLayoutMap: SlotLayoutMap;
    containerRef: RefObject<HTMLDivElement>;
    blockedMessage?: string;
    onClickHiddenSlots?: (hiddenServices: string[]) => void;
}
export declare const TimeCell: React.FC<TimeCellProps>;
export {};
