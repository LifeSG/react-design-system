import React, { RefObject } from "react";
import { ScheduleEntityProps } from "../types";
import { SlotLayoutMap } from "./types";
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
