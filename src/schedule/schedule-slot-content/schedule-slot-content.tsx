import clsx from "clsx";
import type React from "react";
import { useRef } from "react";

import { TimeSlot } from "../../shared/time-slot";
import { useApplyStyle } from "../../theme";
import { TimeHelper } from "../../util/time-helper";
import { CELL_HEIGHT } from "../const";
import type { ScheduleSlotProps } from "../types";
import { getTimeSlotStyleProps } from "./style-helper";

interface SlotContentClassNames {
    container: string;
    blocked: string;
    available: string;
}

interface SlotContentTokens {
    offsetTop: string;
    height: string;
}

interface ScheduleSlotContentProps {
    slot: ScheduleSlotProps;
    offsetTop: number;
    classNames: SlotContentClassNames;
    tokens: SlotContentTokens;
    clickable?: boolean;
    children: React.ReactNode;
}

export const ScheduleSlotContent = ({
    slot,
    offsetTop,
    classNames,
    tokens,
    clickable,
    children,
}: ScheduleSlotContentProps) => {
    const duration = TimeHelper.calculateDuration(slot.startTime, slot.endTime);
    const slotContentRef = useRef<HTMLDivElement>(null);

    useApplyStyle(slotContentRef, {
        [tokens.offsetTop]: `${offsetTop}px`,
        [tokens.height]: `${(duration / 30) * CELL_HEIGHT - 1}px`,
    });

    const slotStyleProps = getTimeSlotStyleProps(slot.status);

    return (
        <TimeSlot
            ref={slotContentRef}
            className={clsx(
                classNames.container,
                slot.status === "blocked" && classNames.blocked,
                slot.status === "available" && classNames.available
            )}
            styleType={slotStyleProps.styleType}
            bgColor={slotStyleProps.bgColor}
            bgColor2={slotStyleProps.bgColor2}
            clickable={clickable}
            onClick={(e: React.MouseEvent) => slot.onClick?.(slot, e)}
        >
            {children}
        </TimeSlot>
    );
};
