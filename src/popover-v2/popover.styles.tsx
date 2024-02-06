import styled from "styled-components";
import { Card } from "../card";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ModalBox } from "../modal/modal-box";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLING
// =============================================================================
export const PopoverContainer = styled.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`;

export const PopoverCard = styled(Card)`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}

    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }

    a {
        color: ${Color.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Color.Secondary};

            svg {
                color: ${Color.Secondary};
            }
        }
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
`;
