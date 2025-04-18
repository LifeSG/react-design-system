import styled, { css } from "styled-components";
import { V2_MediaQuery } from "../v2_media";
import { ModalBox } from "../modal/modal-box";
import { V2_Transition } from "../v2_transition";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
export type OffsetPosition =
    | "top-center"
    | "top-left"
    | "top-right"
    | "left"
    | "right"
    | "none";

interface PopoverStyleProps {
    $visible?: boolean;
    $offset: OffsetPosition;
}

// =============================================================================
// STYLING
// =============================================================================
const getVisibilityStyle = (visible: boolean | undefined) => {
    if (visible) {
        return css`
            visibility: visible;
            opacity: 1;
            transition: ${V2_Transition.Base};
            z-index: 50;
        `;
    } else {
        return css`
            visibility: hidden;
            opacity: 0;
            transition: ${V2_Transition.Base};
            z-index: -1;
        `;
    }
};

const getBubblePosition = (offset: OffsetPosition) => {
    switch (offset) {
        case "top-center":
            return css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;
        case "top-left":
            return css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;
        case "top-right":
            return css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;
        case "left":
            return css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;
        case "right":
            return css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;
        default:
            return css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;
    }
};

export const BubbleWrap = styled.div<PopoverStyleProps>`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${(props) => getVisibilityStyle(props.$visible)}
    ${(props) => getBubblePosition(props.$offset)}

	${V2_MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`;

export const MobileModalBox = styled(ModalBox)`
    padding: 3.5rem 1.25rem 2.5rem;
`;

export const HOCWrapper = styled.div`
    position: relative;
    width: fit-content;
`;

export const HOCTrigger = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;

export const ContentWrapper = styled.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;
