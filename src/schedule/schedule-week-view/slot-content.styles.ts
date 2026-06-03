import styled from "styled-components";

import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT } from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    slotContentContainer: {
        height: "--fds-internal-scheduleWeekView-slotContentContainer-height",
        offsetTop:
            "--fds-internal-scheduleWeekView-slotContentContainer-offsetTop",
    },
};

export const slotContentContainerPending =
    "scheduleWeekViewSlotContentContainerPending";
export const slotContentContainerBlocked =
    "scheduleWeekViewSlotContentContainerBlocked";
export const slotContentContainerAvailable =
    "scheduleWeekViewSlotContentContainerAvailable";
export const slotContentContainerBooked =
    "scheduleWeekViewSlotContentContainerBooked";

export const SlotContentContainer = styled(Typography.BodyXS)`
    ${tokens.slotContentContainer.height}: ${CELL_HEIGHT - 1}px;
    ${tokens.slotContentContainer.offsetTop}: 0px;
    width: calc(100% - 1px);
    height: var(${tokens.slotContentContainer.height});
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${Spacing["spacing-4"]};
    position: absolute;
    top: var(${tokens.slotContentContainer.offsetTop});
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};
    color: inherit;
    border-left: 0;

    &.${slotContentContainerPending} {
        background: repeating-linear-gradient(
            135deg,
            ${Colour["bg-warning"]},
            ${Colour["bg-warning"]} 5px,
            ${Colour["bg-warning-hover"]} 5px,
            ${Colour["bg-warning-hover"]} 10px
        );
    }

    &.${slotContentContainerBlocked} {
        background: ${Colour["bg-inverse-subtle"]};
        color: ${Colour["text-inverse"]};
    }

    &.${slotContentContainerAvailable} {
        background: ${Colour["bg-success-hover"]};
        border-left: ${Border["width-040"]} solid ${Colour["icon-success"]};
    }

    &.${slotContentContainerBooked} {
        background: ${Colour["bg-primary-subtler"]};
    }
`;

export const SlotServiceName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${Font.Spec["weight-regular"]};
`;

export const SlotAvailability = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${Font.Spec["weight-semibold"]};
`;
