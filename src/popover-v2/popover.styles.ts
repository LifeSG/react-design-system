import styled from "styled-components";

import { Card } from "../card";
import { Colour, MediaQuery, Radius } from "../theme";
import type { PopoverOverflowType } from "./types";
// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface PopoverCardStyleProps {
    $overflow?: PopoverOverflowType | undefined;
    $maxHeight?: number | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const PopoverContainer = styled.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`;

export const PopoverCard = styled(Card)<PopoverCardStyleProps>`
    color: ${Colour.text};

    ${MediaQuery.MaxWidth.sm} {
        display: none;
    }

    ${({ $maxHeight }) =>
        $maxHeight !== undefined &&
        `
        max-height: ${$maxHeight}px;
    `}

    ${({ $overflow }) =>
        $overflow &&
        `
        overflow-y: ${$overflow};
    `}

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
