import clsx from "clsx";
import type React from "react";
import { useRef } from "react";

import { useApplyStyle } from "../../theme";
import { TimeHelper } from "../../util/time-helper";
import { CELL_HEIGHT } from "../const";
import {
    SlotAvailability,
    SlotContentContainer,
    slotContentContainerAvailable,
    slotContentContainerBlocked,
    slotContentContainerBooked,
    slotContentContainerPending,
    SlotServiceName,
    tokens,
} from "./slot-content.styles";
import type { PositionedSlot } from "./types";

interface SlotContentProps {
    positionedSlot: PositionedSlot;
    blockedMessage?: string;
}

export const SlotContent: React.FC<SlotContentProps> = ({
    positionedSlot,
    blockedMessage = "Unavailable",
}) => {
    const { slot, offsetTop } = positionedSlot;
    const duration = TimeHelper.calculateDuration(slot.startTime, slot.endTime);
    const slotContentRef = useRef<HTMLParagraphElement>(null);

    useApplyStyle(slotContentRef, {
        [tokens.slotContentContainer.offsetTop]: `${offsetTop}px`,
        [tokens.slotContentContainer.height]: `${
            (duration / 30) * CELL_HEIGHT - 1
        }px`,
    });

    let statusClassName: string | undefined;
    switch (slot.status) {
        case "pending":
            statusClassName = slotContentContainerPending;
            break;
        case "blocked":
            statusClassName = slotContentContainerBlocked;
            break;
        case "available":
            statusClassName = slotContentContainerAvailable;
            break;
        case "booked":
            statusClassName = slotContentContainerBooked;
            break;
        default:
            statusClassName = undefined;
    }

    return (
        <SlotContentContainer
            ref={slotContentRef}
            className={clsx(statusClassName)}
            onClick={(e: React.MouseEvent) => slot.onClick?.(slot, e)}
        >
            <SlotServiceName>{slot.serviceName}</SlotServiceName>
            {duration >= 30 && (
                <SlotAvailability>
                    {slot.status === "blocked"
                        ? blockedMessage
                        : `${slot.booked} / ${slot.capacity}`}
                </SlotAvailability>
            )}
        </SlotContentContainer>
    );
};
