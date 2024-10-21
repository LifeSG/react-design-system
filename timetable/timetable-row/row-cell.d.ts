import React, { MutableRefObject } from "react";
import { TimeTableRowCellData } from "../types";
interface RowCellProps extends TimeTableRowCellData {
    containerRef: MutableRefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: string;
}
export declare const RowCell: React.MemoExoticComponent<({ id, startTime, endTime, title, subtitle, status, intervalWidth, rowBarColor, containerRef, customPopover, onClick, }: RowCellProps) => import("react/jsx-runtime").JSX.Element>;
export {};
