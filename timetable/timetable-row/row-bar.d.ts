import { MutableRefObject } from "react";
import { RowBarColors } from "../const";
import { TimeTableRowData } from "../types";
interface RowBarProps extends TimeTableRowData {
    timetableMinTime: string;
    timetableMaxTime: string;
    intervalWidth: number;
    containerRef: MutableRefObject<HTMLDivElement>;
    rowBarColor: RowBarColors;
}
export declare const RowBar: ({ id, timetableMinTime, timetableMaxTime, rowMinTime, rowMaxTime, rowCells, rowBarColor, intervalWidth, containerRef, outOfRangeCellPopover, ...otherProps }: RowBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
