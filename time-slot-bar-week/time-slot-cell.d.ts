import type React from "react";
import type { TimeSlot } from "../time-slot-bar/types";
import type { TimeSlotCellsVariant } from "./types";
export interface TimeSlotCell extends TimeSlot {
    cellLength: number;
    halfFill?: "default" | "top" | "bottom" | undefined;
    isActualSlot?: boolean | undefined;
    rowIndex?: number | undefined;
}
export interface FocusableSlotMeta {
    key: string;
    date: string;
    rowIndex: number;
}
export interface WeekTimeSlotCellProps {
    formattedDate: string;
    slot: TimeSlotCell;
    variant: TimeSlotCellsVariant;
    hasCollapsedContent: boolean;
    expandAll: boolean;
    visibleRowCount: number;
    onSlotClick: (date: string, slot: TimeSlot) => void;
    getSlotAriaLabel: (date: string, slot: TimeSlot) => string;
    onSlotKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>, meta: FocusableSlotMeta) => void;
    onSlotButtonClick: (date: string, slot: TimeSlot) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    slotButtonRefs: React.MutableRefObject<Record<string, HTMLButtonElement | null>>;
}
export declare const WeekTimeSlotCell: ({ formattedDate, slot, variant, hasCollapsedContent, expandAll, visibleRowCount, onSlotClick, getSlotAriaLabel, onSlotKeyDown, onSlotButtonClick, slotButtonRefs, }: WeekTimeSlotCellProps) => import("react/jsx-runtime").JSX.Element;
