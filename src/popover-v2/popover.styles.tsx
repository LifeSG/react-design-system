import styled from "styled-components";
import { Card } from "../card";
import { ModalBox } from "../modal/modal-box";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Colour, MediaQuery, Radius } from "../theme";
import { PopoverOverflowType } from "./types";
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
`;

export const PopoverCard = styled(Card)<PopoverCardStyleProps>`
    color: ${Colour.text};
    ${applyHtmlContentStyle({ textSize: "body-md" })}

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
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }
`;

export const MobileModalBox = styled(ModalBox)`
    padding: 3.5rem 1.25rem 2.5rem;
`;

export const ContentWrapper = styled.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Colour.text};
    ${applyHtmlContentStyle({ textSize: "body-md" })}
`;
