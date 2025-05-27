import styled from "styled-components";
import { Card } from "../card";
import { ModalBox } from "../modal/modal-box";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Colour, MediaQuery } from "@/theme";

// =============================================================================
// STYLING
// =============================================================================
export const PopoverContainer = styled.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`;

export const PopoverCard = styled(Card)`
    color: ${Colour.text};
    ${applyHtmlContentStyle({ textSize: "body-md" })}

    ${MediaQuery.MaxWidth.sm} {
        display: none;
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
