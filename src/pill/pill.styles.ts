import styled from "styled-components";

import { Border, Colour, Font, Radius } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    border-radius: ${Radius["full"]};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Font["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    &.wrapperBase {
        border: ${Border["width-010"]} ${Border.solid};
    }

    &.wrapperSolid {
        color: ${Colour["text-inverse"]};
        border-color: transparent;
    }

    &.wrapperSolidBlack {
        background: ${Colour["bg-inverse"]};
    }

    &.wrapperSolidGrey {
        background: ${Colour["bg-inverse-subtler"]};
    }

    &.wrapperSolidGreen {
        background: ${Colour["bg-success-strong"]};
    }

    &.wrapperSolidYellow {
        background: ${Colour["bg-warning-strong"]};
    }

    &.wrapperSolidRed {
        background: ${Colour["bg-error-strong"]};
    }

    &.wrapperSolidBlue {
        background: ${Colour["bg-info-strong"]};
    }

    &.wrapperSolidPrimary {
        background: ${Colour["bg-primary"]};
    }

    &.wrapperOutlineBlack {
        background: ${Colour.bg};
        border-color: ${Colour.border};
        color: ${Colour.text};
    }

    &.wrapperOutlineGrey {
        background: ${Colour["bg-stronger"]};
        border-color: ${Colour["border-strong"]};
        color: ${Colour["text-subtler"]};
    }

    &.wrapperOutlineGreen {
        background: ${Colour["bg-success"]};
        border-color: ${Colour["border-success"]};
        color: ${Colour["text-success"]};
    }

    &.wrapperOutlineYellow {
        background: ${Colour["bg-warning"]};
        border-color: ${Colour["border-warning"]};
        color: ${Colour["text-warning"]};
    }

    &.wrapperOutlineRed {
        background: ${Colour["bg-error"]};
        border-color: ${Colour["border-error"]};
        color: ${Colour["text-error"]};
    }

    &.wrapperOutlineBlue {
        background: ${Colour["bg-info"]};
        border-color: ${Colour["border-info"]};
        color: ${Colour["text-info"]};
    }

    &.wrapperOutlinePrimary {
        background: ${Colour["bg-primary-subtlest"]};
        border-color: ${Colour["border-primary"]};
        color: ${Colour["text-primary"]};
    }
`;

export const Label = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;
