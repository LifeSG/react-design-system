import React from "react";
import { TimeHelper } from "../../util/time-helper";
import { PositionedSlot } from "./types";
import {
    SlotContent,
    SlotServiceName,
    SlotAvailability,
} from "./schedule-week-view.styles";

interface SlotContentComponentProps {
    positionedSlot: PositionedSlot;
    blockedMessage?: string;
}

export const SlotContentComponent: React.FC<SlotContentComponentProps> = ({
    positionedSlot,
    blockedMessage = "Unavailable",
}) => {
    const { slot, offsetTop } = positionedSlot;
    const duration = TimeHelper.calculateDuration(slot.startTime, slot.endTime);

    return (
        <SlotContent
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
        </SlotContent>
    );
};
