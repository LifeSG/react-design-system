import styled from "styled-components";

import { Card } from "../card";
import { Colour, MediaQuery, Radius } from "../theme";

export const tokens = {
    popoverCard: {
        maxHeight: "--fds-internal-popoverV2-popoverCard-maxHeight",
        overflowY: "--fds-internal-popoverV2-popoverCard-overflowY",
    },
} as const;

// =============================================================================
// STYLING
// =============================================================================
export const PopoverContainer = styled.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`;

export const PopoverCard = styled(Card)`
    color: ${Colour.text};

    ${MediaQuery.MaxWidth.sm} {
        display: none;
    }

    &.popoverV2CardWithMaxHeight {
        max-height: var(${tokens.popoverCard.maxHeight});
    }

    &.popoverV2CardWithOverflow {
        overflow-y: var(${tokens.popoverCard.overflowY});
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius.full};
        background-clip: padding-box;
    }
`;
