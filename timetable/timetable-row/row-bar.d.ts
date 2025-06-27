import { RefObject } from "react";
import { RowBarColors } from "../internal-types";
import { TimeTableRowData } from "../types";
interface RowBarProps extends TimeTableRowData {
    timetableMinTime: string;
    timetableMaxTime: string;
    intervalWidth: number;
    containerRef: RefObject<HTMLDivElement>;
    rowBarColor: RowBarColors;
}
export declare const RowBar: ({ id, timetableMinTime, timetableMaxTime, rowMinTime, rowMaxTime, rowCells, rowBarColor, intervalWidth, containerRef, outOfRangeCellPopover, }: RowBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
