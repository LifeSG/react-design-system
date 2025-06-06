import React, { RefObject } from "react";
import { InternalTimeTableRowCellData, RowBarColors } from "../internal-types";
interface RowCellProps extends InternalTimeTableRowCellData {
    containerRef: RefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: RowBarColors;
}
export declare const RowCell: React.MemoExoticComponent<({ id, startTime, endTime, title, subtitle, status, intervalWidth, rowBarColor, containerRef, customPopover, roundedStartTime, roundedEndTime, onClick, }: RowCellProps) => import("react/jsx-runtime").JSX.Element>;
export {};
