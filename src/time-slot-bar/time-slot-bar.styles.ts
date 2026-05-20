import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled from "styled-components";

import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Shadow } from "../theme";
import { Typography } from "../typography";
import type { TimeSlotBarVariant } from "./types";

const MAX_LINE_HEIGHT = 1.25; // NOTE in rem

export const tokens = {
    item: {
        width: "--fds-internal-timeSlotBar-item-width",
        left: "--fds-internal-timeSlotBar-item-left",
        color: "--fds-internal-timeSlotBar-item-color",
    },
    border: {
        left: "--fds-internal-timeSlotBar-border-left",
    },
} as const;

export const containerDefault = "timeSlotBarContainerDefault";
export const containerMinified = "timeSlotBarContainerMinified";

export const arrowButtonDefault = "timeSlotBarArrowButtonDefault";
export const arrowButtonMinified = "timeSlotBarArrowButtonMinified";
export const arrowButtonLeft = "timeSlotBarArrowButtonLeft";
export const arrowButtonRight = "timeSlotBarArrowButtonRight";

export const timeMarkerDefault = "timeSlotBarTimeMarkerDefault";
export const timeMarkerMinified = "timeSlotBarTimeMarkerMinified";
export const timeMarkerLong = "timeSlotBarTimeMarkerLong";

export const timeSlotBorderDefault = "timeSlotBarTimeSlotBorderDefault";
export const timeSlotBorderMinified = "timeSlotBarTimeSlotBorderMinified";

export const timeSlotItemDefault = "timeSlotBarTimeSlotItemDefault";
export const timeSlotItemMinified = "timeSlotBarTimeSlotItemMinified";

// =============================================================================
// STYLING HELPERS
// =============================================================================

// Function to get the width of a cell in px
export const getCellWidth = (variant: TimeSlotBarVariant) => {
    if (variant === "minified") {
        return 12;
    } else {
        return 40;
    }
};

// Function to get the height of a cell in px
export const getCellHeight = (variant: TimeSlotBarVariant) => {
    return variant === "minified" ? 12 : 40;
};
export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ArrowButton = styled(ClickableIcon)`
    z-index: 2;
    position: absolute;
    bottom: 0rem;
    background-color: ${Colour.bg};
    box-shadow: ${Shadow["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    &.${arrowButtonDefault} {
        bottom: 0.25rem;
    }

    &.${arrowButtonMinified} {
        bottom: 0rem;
    }

    &.${arrowButtonLeft} {
        left: 0;
    }

    &.${arrowButtonRight} {
        right: 0;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`;

export const ArrowIconRight = styled(ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Colour["icon-primary"]};
`;

export const ArrowIconLeft = styled(ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Colour["icon-primary"]};
`;

export const TimeSlotBarContainer = styled.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;

    &.${containerDefault} {
        height: ${MAX_LINE_HEIGHT * 16 + getCellHeight("default")}px;
    }

    &.${containerMinified} {
        height: ${MAX_LINE_HEIGHT * 16 + getCellHeight("minified")}px;
    }
`;

export const TimeMarkerWrapper = styled.div`
    position: relative;
    white-space: nowrap;
    height: ${MAX_LINE_HEIGHT}rem;
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    white-space: nowrap;
`;

export const TimeMarker = styled.div`
    display: inline-block;
    position: relative;
    border-left: ${Border["width-010"]} ${Border.solid}
        ${Colour["border-stronger"]};

    &.${timeMarkerDefault} {
        width: ${getCellWidth("default")}px;
        height: 0.625rem;
    }

    &.${timeMarkerMinified} {
        width: ${getCellWidth("minified")}px;
        height: 0rem;
    }

    &.${timeMarkerLong} {
        height: ${MAX_LINE_HEIGHT}rem;
    }}
`;

export const TimeLabel = styled(Typography.BodyXS)`
    color: ${Colour["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;

export const TimeSlotBorder = styled.div`
    position: absolute;
    top: ${MAX_LINE_HEIGHT}rem;
    z-index: 1;
    left: var(${tokens.border.left});
    border-right: ${Border["width-010"]} ${Border.solid}
        ${Colour["border-stronger"]};

    &.${timeSlotBorderDefault} {
        height: ${getCellHeight("default")}px;
    }

    &.${timeSlotBorderMinified} {
        height: ${getCellHeight("minified")}px;
    }
`;

export const CellText = styled(Typography.BodyXS)`
    color: var(${tokens.item.color}, ${Colour.text});
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledTimeSlotItem = styled.div`
    position: absolute;
    left: var(${tokens.item.left});
    width: var(${tokens.item.width});

    > * {
        width: 100%;
        height: 100%;
    }

    &.${timeSlotItemDefault} {
        height: ${getCellHeight("default")}px;
    }

    &.${timeSlotItemMinified} {
        height: ${getCellHeight("minified")}px;
    }
`;
