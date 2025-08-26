import React from "react";
import { TimeHelper } from "../../util/time-helper";
import { PositionedSlot } from "./types";
import {
    SlotContentContainer,
    SlotServiceName,
    SlotAvailability,
} from "./slot-content.styles";

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

    return (
        <SlotContentContainer
            $status={slot.status}
            $duration={duration}
            $offsetTop={offsetTop}
            onClick={(e) => slot.onClick && slot.onClick(slot, e)}
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
