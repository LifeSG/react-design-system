import type React from "react";
import { useRef } from "react";

import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { TimeSlot as TimeSlotComponent } from "../shared/time-slot";
import { formatUnitValue, useApplyStyle } from "../theme";
import type { TimeSlot } from "../time-slot-bar/types";
import { SLOT_GAP, SLOT_HEIGHT } from "./consts";
import * as styles from "./time-slot-bar-week-days.styles";
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
    onSlotKeyDown: (
        event: React.KeyboardEvent<HTMLButtonElement>,
        meta: FocusableSlotMeta
    ) => void;
    onSlotButtonClick: (
        date: string,
        slot: TimeSlot
    ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    slotButtonRefs: React.MutableRefObject<
        Record<string, HTMLButtonElement | null>
    >;
}

export const WeekTimeSlotCell = ({
    formattedDate,
    slot,
    variant,
    hasCollapsedContent,
    expandAll,
    visibleRowCount,
    onSlotClick,
    getSlotAriaLabel,
    onSlotKeyDown,
    onSlotButtonClick,
    slotButtonRefs,
}: WeekTimeSlotCellProps) => {
    const {
        id,
        clickable = true,
        isActualSlot,
        styleAttributes,
        cellLength,
        halfFill,
    } = slot;
    const {
        styleType = "default",
        backgroundColor,
        backgroundColor2,
    } = styleAttributes;
    const slotId = `${formattedDate}-${id}`;
    const isCollapsedSlot =
        hasCollapsedContent &&
        !expandAll &&
        (slot.rowIndex ?? 0) >= visibleRowCount;

    const slotHeight =
        variant === "fixed"
            ? cellLength * SLOT_HEIGHT + (cellLength - 1) * SLOT_GAP
            : SLOT_HEIGHT;

    const slotRef = useRef<HTMLDivElement>(null);
    useApplyStyle(slotRef, {
        [styles.tokens.timeSlot.height]: formatUnitValue(slotHeight, "px"),
    });

    return (
        <TimeSlotComponent
            ref={slotRef}
            styleType={styleType}
            bgColor={backgroundColor}
            bgColor2={backgroundColor2}
            clickable={clickable}
            fill={halfFill}
            className={styles.timeSlotComponent}
            onClick={() => clickable && onSlotClick(formattedDate, slot)}
        >
            {isActualSlot && (
                <VisuallyHidden inert={inertValue(isCollapsedSlot)}>
                    <button
                        type="button"
                        ref={(element) => {
                            slotButtonRefs.current[slotId] = element;
                        }}
                        aria-disabled={!clickable}
                        aria-label={getSlotAriaLabel(formattedDate, slot)}
                        onKeyDown={(event) =>
                            onSlotKeyDown(event, {
                                key: slotId,
                                date: formattedDate,
                                rowIndex: slot.rowIndex ?? 0,
                            })
                        }
                        onClick={
                            clickable
                                ? onSlotButtonClick(formattedDate, slot)
                                : undefined
                        }
                    />
                </VisuallyHidden>
            )}
        </TimeSlotComponent>
    );
};
