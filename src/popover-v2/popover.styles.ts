import { css } from "@linaria/core";

import { Colour, MediaQuery, Radius } from "../theme";

export const tokens = {
    popoverCard: {
        maxHeight: "--fds-internal-popoverV2-popoverCard-maxHeight",
        overflowY: "--fds-internal-popoverV2-popoverCard-overflowY",
    },
} as const;

export const popoverContainer = css`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`;

export const popoverCard = css`
    color: ${Colour.text};

    ${MediaQuery.MaxWidth.sm} {
        display: none;
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

export const popoverCardWithMaxHeight = css`
    max-height: var(${tokens.popoverCard.maxHeight});
`;

export const popoverCardWithOverflow = css`
    overflow-y: var(${tokens.popoverCard.overflowY});
`;
