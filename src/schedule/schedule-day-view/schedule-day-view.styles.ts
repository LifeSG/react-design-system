import styled from "styled-components";

import { Button } from "../../button";
import { lineClampCss } from "../../shared/styles";
import { TimeSlot } from "../../shared/time-slot";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import {
    CELL_HEIGHT,
    HEADER_HEIGHT,
    MIN_COLUMN_WIDTH,
    TIME_INDICATOR_WIDTH,
} from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    serviceContainer: {
        columnCount:
            "--fds-internal-scheduleDayView-serviceContainer-columnCount",
    },
    slotGrid: {
        columnCount: "--fds-internal-scheduleDayView-slotGrid-columnCount",
    },
    slotContent: {
        offsetTop: "--fds-internal-scheduleDayView-slotContent-offsetTop",
        height: "--fds-internal-scheduleDayView-slotContent-height",
    },
    timeline: {
        top: "--fds-internal-scheduleDayView-timeline-top",
    },
};

export const headerContainerMobile = "scheduleDayViewHeaderContainerMobile";
export const slotCellDashed = "scheduleDayViewSlotCellDashed";
export const slotContentBlocked = "scheduleDayViewSlotContentBlocked";
export const slotContentAvailable = "scheduleDayViewSlotContentAvailable";

export const ArrowButton = styled(Button)`
    color: ${Colour["icon"]};
`;
export const ArrowContainer = styled.div`
    width: 2rem;
`;

export const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    background: ${Colour["bg"]};
`;

export const HeaderContainer = styled.div`
    z-index: 3;
    max-height: ${HEADER_HEIGHT}px;
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
    position: sticky;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px 1fr;

    &.${headerContainerMobile} {
        display: block;
        overflow: hidden;
    }
`;

export const BlankCell = styled.div`
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg-strong"]};
    position: sticky;
    left: 0;
`;
export const ServiceContainer = styled.div`
    ${tokens.serviceContainer.columnCount}: 1;
    display: grid;
    grid-template-columns: repeat(
        var(${tokens.serviceContainer.columnCount}),
        1fr
    );
`;

export const ServiceColumn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${MIN_COLUMN_WIDTH}px;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    background: ${Colour["bg-strong"]};
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const ServiceHeaderContainer = styled.div`
    width: 15rem;
    padding-left: ${Spacing["spacing-16"]};
`;

export const Title = styled(Typography.BodyMD)`
    color: ${Colour["text-primary"]};
    font-weight: ${Font.Spec["weight-semibold"]};
    margin-top: 0;
    ${lineClampCss(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`;

export const Description = styled(Typography.BodySM)`
    margin-top: ${Spacing["spacing-8"]};
    background-color: ${Colour["bg-success-hover"]};
    border-radius: ${Radius["full"]};
    width: fit-content;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-success"]};
    font-weight: ${Font.Spec["weight-regular"]};
    span {
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-top: none;
    border-bottom-right-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};
`;

export const SlotGrid = styled.div`
    ${tokens.slotGrid.columnCount}: 1;
    display: grid;
    grid-template-columns: repeat(var(${tokens.slotGrid.columnCount}), 1fr);
    min-width: max-content;
    position: relative;
`;

export const SlotColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${MIN_COLUMN_WIDTH}px;
    min-height: fit-content;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const SlotCell = styled.div`
    min-height: ${CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${Border["width-010"]} solid ${Colour["border"]};
    cursor: pointer;

    &.${slotCellDashed} {
        border-bottom-style: dashed;
    }
`;

export const SlotContent = styled(TimeSlot)`
    ${tokens.slotContent.offsetTop}: 0px;
    ${tokens.slotContent.height}: ${CELL_HEIGHT - 1}px;
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${Spacing["spacing-8"]};
    position: absolute;
    top: var(${tokens.slotContent.offsetTop});
    ${Font["body-xs-semibold"]};
    border-radius: ${Radius["sm"]};
    z-index: 1;
    height: var(${tokens.slotContent.height});
    display: flex;
    justify-content: space-between;
    color: ${Colour["text-subtle"]};
    border-left: 0;

    &.${slotContentBlocked} {
        color: ${Colour["text-inverse"]};
    }

    &.${slotContentAvailable} {
        border-left: ${Border["width-040"]} solid ${Colour["icon-success"]};
    }
`;

export const SlotTime = styled.span`
    ${Font["body-xs-regular"]};
`;

export const SlotAvailability = styled.span`
    ${Font["body-xs-semibold"]};
`;

export const Timeline = styled.div`
    ${tokens.timeline.top}: 0px;
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    top: var(${tokens.timeline.top});
    z-index: 2;
`;

export const EmptySlot = styled.div`
    width: 100%;
    height: ${CELL_HEIGHT - 1}px;
`;
