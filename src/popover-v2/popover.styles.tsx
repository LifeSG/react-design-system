import styled from "styled-components";
import { Card } from "../card";
import { V2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { ModalBox } from "../modal/modal-box";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";

// =============================================================================
// STYLING
// =============================================================================
export const PopoverContainer = styled.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`;

export const PopoverCard = styled(Card)`
    color: ${V2_Color.Neutral[1]};
    ${applyHtmlContentStyle({ textSize: "BodySmall" })}

    ${v2_MediaQuery.MaxWidth.mobileL} {
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

    color: ${V2_Color.Neutral[1]};
    ${applyHtmlContentStyle({ textSize: "BodySmall" })}
`;
