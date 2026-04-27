import styled from "styled-components";

import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Element = styled.textarea`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    width: 100%;

    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Colour["text-subtler"]};
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
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }

    &.elementReadOnly {
        border-color: transparent;
        background: transparent !important;
        padding: ${Spacing["spacing-12"]} 0;

        &:focus,
        &:active {
            outline-color: ${Colour["border-focus"]};
        }
    }

    &.elementDisabled {
        background: ${Colour["bg-disabled"]};
        cursor: not-allowed;

        &:focus,
        &:active {
            outline-color: ${Colour["border-disabled"]};
        }
    }

    &.elementError {
        border-color: ${Colour["border-error"]};

        &:focus,
        &:active {
            outline-color: ${Colour["border-error-focus"]};
        }
    }
`;
