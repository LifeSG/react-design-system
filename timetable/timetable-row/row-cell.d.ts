import React, { RefObject } from "react";
import { InternalTimeTableRowCellData, RowBarColors } from "../internal-types";
interface RowCellProps extends InternalTimeTableRowCellData {
    containerRef: RefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: RowBarColors;
    ariaColIndex: number;
    ariaColSpan: number;
    rowName: string;
}
export declare const RowCell: React.MemoExoticComponent<({ id, startTime, endTime, title, subtitle, status, intervalWidth, rowBarColor, customPopover, cellStyleAttributes, isFocusable, roundedStartTime, roundedEndTime, ariaColIndex, ariaColSpan, rowName, onClick, }: RowCellProps) => import("react/jsx-runtime").JSX.Element>;
export {};
